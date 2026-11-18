'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ActiveSymbol, DerivWS, Tick, TicksHistoryResponse } from '@deriv/core';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import {
  chooseBestDigitMatchCandidate,
  createDigitMatchScanCandidate,
  DIGIT_MATCH_HISTORY_COUNT,
  DIGIT_MATCH_SCAN_COUNT,
  getScannableMarkets,
} from '@/lib/market-scanner';
import type { DigitMatchScanCandidate } from '@/lib/market-scanner';

export type DigitMatchScannerStatus = 'idle' | 'scanning' | 'stopped' | 'error';

export interface DigitMatchScannerProgress {
  liveMarkets: number;
  readyMarkets: number;
  totalMarkets: number;
  unavailableMarkets: number;
  loadedTicks: number;
}

interface UseDigitMatchScannerParams {
  ws: DerivWS | null;
  isConnected: boolean;
  symbols: ActiveSymbol[];
}

export function useDigitMatchScanner({
  ws,
  isConnected,
  symbols,
}: UseDigitMatchScannerParams) {
  const { localize } = useAppTranslations();
  const [status, setStatus] = useState<DigitMatchScannerStatus>('idle');
  const [candidate, setCandidate] = useState<DigitMatchScanCandidate | null>(null);
  const [progress, setProgress] = useState<DigitMatchScannerProgress>({
    liveMarkets: 0,
    readyMarkets: 0,
    totalMarkets: 0,
    unavailableMarkets: 0,
    loadedTicks: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [scanRequested, setScanRequested] = useState(false);

  const start = useCallback(() => {
    if (scanRequested) return;
    setCandidate(null);
    setError(null);
    setProgress({
      liveMarkets: 0,
      readyMarkets: 0,
      totalMarkets: 0,
      unavailableMarkets: 0,
      loadedTicks: 0,
    });
    setStatus('scanning');
    setScanRequested(true);
  }, [scanRequested]);

  const stop = useCallback(() => {
    setScanRequested(false);
    setStatus('stopped');
  }, []);

  useEffect(() => {
    if (!scanRequested) return;

    let cancelled = false;
    const unsubscribeFeeds = new Set<() => Promise<void>>();
    const marketPrices = new Map<string, number[]>();
    const lastTicks = new Map<string, string>();
    const ticksDuringHistory = new Map<string, Tick[]>();
    const liveMarkets = new Set<string>();
    const unavailableMarkets = new Set<string>();
    const readyMarkets = new Set<string>();

    if (!ws || !isConnected || !ws.isConnected) {
      setError(localize('Connect to the live market feed before scanning.'));
      setStatus('error');
      setScanRequested(false);
      return;
    }

    const openMarkets = Array.from(
      new Map(
        getScannableMarkets(symbols).map((symbol) => [symbol.underlying_symbol, symbol])
      ).values()
    );
    if (openMarkets.length === 0) {
      setError(localize('No open continuous-index markets are available to scan.'));
      setStatus('error');
      setScanRequested(false);
      return;
    }

    setProgress({
      liveMarkets: 0,
      readyMarkets: 0,
      totalMarkets: openMarkets.length,
      unavailableMarkets: 0,
      loadedTicks: 0,
    });

    const updateCandidateAndProgress = () => {
      if (cancelled) return;
      const loadedTicks = openMarkets.reduce(
        (total, market) => total + (marketPrices.get(market.underlying_symbol)?.length ?? 0),
        0
      );

      setProgress({
        liveMarkets: liveMarkets.size,
        readyMarkets: readyMarkets.size,
        totalMarkets: openMarkets.length,
        unavailableMarkets: unavailableMarkets.size,
        loadedTicks,
      });

      if (readyMarkets.size + unavailableMarkets.size < openMarkets.length) return;

      const candidates = openMarkets.flatMap((market) => {
        const prices = marketPrices.get(market.underlying_symbol);
        if (!prices || prices.length < DIGIT_MATCH_HISTORY_COUNT) return [];
        const scanCandidate = createDigitMatchScanCandidate(
          market,
          prices,
          DIGIT_MATCH_SCAN_COUNT
        );
        return scanCandidate ? [scanCandidate] : [];
      });
      const selectedCandidate = chooseBestDigitMatchCandidate(candidates);
      if (selectedCandidate) {
        setCandidate(selectedCandidate);
      } else {
        setError(localize('No eligible market returned a complete 1,000-tick history.'));
        setStatus('error');
        setScanRequested(false);
      }
    };

    const appendTick = (symbolCode: string, tick: Tick) => {
      if (cancelled || tick.symbol !== symbolCode || !Number.isFinite(tick.quote)) return;
      const tickKey = `${tick.epoch}:${tick.id}`;
      if (lastTicks.get(symbolCode) === tickKey) return;
      lastTicks.set(symbolCode, tickKey);
      liveMarkets.add(symbolCode);

      const prices = marketPrices.get(symbolCode) ?? [];
      prices.push(tick.quote);
      if (prices.length > DIGIT_MATCH_HISTORY_COUNT) {
        prices.splice(0, prices.length - DIGIT_MATCH_HISTORY_COUNT);
      }
      marketPrices.set(symbolCode, prices);
      updateCandidateAndProgress();
    };

    const receiveTick = (symbolCode: string, tick: Tick) => {
      if (cancelled || tick.symbol !== symbolCode || !Number.isFinite(tick.quote)) return;
      liveMarkets.add(symbolCode);
      if (!readyMarkets.has(symbolCode)) {
        const buffered = ticksDuringHistory.get(symbolCode) ?? [];
        buffered.push(tick);
        ticksDuringHistory.set(symbolCode, buffered);
        updateCandidateAndProgress();
        return;
      }
      appendTick(symbolCode, tick);
    };

    const removeConnectionListener = ws.onConnectionStateChange((connected) => {
      if (connected || cancelled) return;
      setError(localize('The live connection was lost while scanning markets.'));
      setStatus('error');
      setScanRequested(false);
    });

    for (const market of openMarkets) {
      const symbolCode = market.underlying_symbol;
      void ws.subscribe(
        { ticks: symbolCode },
        (data) => {
          const tick = data.tick as Tick | undefined;
          if (tick) receiveTick(symbolCode, tick);
        }
      ).then((subscription) => {
        if (cancelled) {
          void subscription.unsubscribe().catch((unsubscribeError: unknown) => {
            console.warn('[digit match scanner] Could not unsubscribe a stopped market feed.', {
              symbol: symbolCode,
              error: unsubscribeError,
            });
          });
          return;
        }
        unsubscribeFeeds.add(subscription.unsubscribe);
        return ws.send<TicksHistoryResponse>({
          ticks_history: symbolCode,
          end: 'latest',
          count: DIGIT_MATCH_HISTORY_COUNT,
          style: 'ticks',
        }).then((response) => {
          if (cancelled) return;
          const historyPrices = response.history?.prices ?? [];
          const historyTimes = response.history?.times ?? [];
          if (historyPrices.length < DIGIT_MATCH_HISTORY_COUNT) {
            throw new Error(localize(
              'Market {{market}} returned only {{count}} of 1,000 history ticks.',
              { market: symbolCode, count: historyPrices.length }
            ));
          }

          const prices = historyPrices.slice(-DIGIT_MATCH_HISTORY_COUNT);
          const latestHistoryTime = historyTimes[historyTimes.length - 1] ?? 0;
          const latestHistoryPrice = prices[prices.length - 1];
          marketPrices.set(symbolCode, prices);
          readyMarkets.add(symbolCode);

          for (const tick of ticksDuringHistory.get(symbolCode) ?? []) {
            if (
              tick.epoch > latestHistoryTime ||
              (tick.epoch === latestHistoryTime && tick.quote !== latestHistoryPrice)
            ) {
              appendTick(symbolCode, tick);
            }
          }
          ticksDuringHistory.delete(symbolCode);
          updateCandidateAndProgress();
        });
      }).catch((subscribeError: unknown) => {
        if (cancelled) return;
        unavailableMarkets.add(symbolCode);
        console.warn('[digit match scanner] Could not subscribe to a market feed.', {
          symbol: symbolCode,
          error: subscribeError,
        });
        updateCandidateAndProgress();
        if (unavailableMarkets.size === openMarkets.length) {
          setError(localize('The scanner could not subscribe to any open market.'));
          setStatus('error');
          setScanRequested(false);
        } else {
          updateCandidateAndProgress();
        }
      });
    }

    return () => {
      cancelled = true;
      removeConnectionListener();
      for (const unsubscribe of unsubscribeFeeds) {
        void unsubscribe().catch((unsubscribeError: unknown) => {
          console.warn('[digit match scanner] Could not unsubscribe a market feed.', {
            error: unsubscribeError,
          });
        });
      }
    };
  }, [isConnected, localize, scanRequested, symbols, ws]);

  return {
    status,
    candidate,
    progress,
    error,
    start,
    stop,
  };
}
