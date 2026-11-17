'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  isDerivApiError,
  useProposal,
  useBuy,
} from '@deriv/core';
import type {
  ActiveSymbol,
  Tick,
  ProposalInfo,
  ProposalParams,
  DurationLimits,
  BuyResult,
  ProposalResponse,
} from '@deriv/core';
import { toast } from 'sonner';
import { useBaseTrading } from '@/hooks/use-base-trading';
import type { UseBaseTradingParams } from '@/hooks/use-base-trading';
import { computeDigitStats, getLastDigit, pipSizeFromPip } from '../lib/digit-stats';
import {
  chooseBestScanCandidate,
  getContractBarrier,
  getScannableMarkets,
  MARKET_SCAN_TICK_COUNT,
} from '../lib/market-scanner';
import type { MarketScanCandidate } from '../lib/market-scanner';
import { evaluateUserTradingStrategy } from '../lib/user-trading-strategy';
import type { SavedBotSettings, UserTradingStrategy } from '../lib/user-trading-strategy';
import { getNextMartingaleStake, initialMartingaleProgress } from '../lib/martingale';
import type { MartingaleMode } from '../lib/martingale';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { ContractMode, TradeType, DigitStats, OpenPosition, ClosedPosition } from '../lib/types';

const CONTRACT_TYPES = ['DIGITDIFF', 'DIGITOVER', 'DIGITUNDER', 'DIGITEVEN', 'DIGITODD'];

type AutoTradingStatus = 'idle' | 'scanning' | 'running' | 'stopping';
const CONTRACT_SETTLEMENT_TIMEOUT_MS = 15 * 60 * 1000;
const CONNECTION_POLL_INTERVAL_MS = 250;
const CONNECTION_LOST = Symbol('connection-lost');

export interface AutoTradingScanProgress {
  phase: 'connecting' | 'scanning' | 'selected';
  scannedMarkets: number;
  totalMarkets: number;
  unavailableMarkets: number;
  scanNumber: number;
  ruleDescription: string;
  selectedMarket: string | null;
  selectedContractMode: Exclude<ContractMode, 'DIGITMATCH'> | null;
  estimatedWinRate: number | null;
  prediction: AutoTradingPrediction | null;
  skippedNoReturnMarkets: number;
}

export interface AutoTradingPrediction {
  scanNumber: number;
  market: string;
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>;
  barrier: number | null;
  predictedWinRate: number;
  estimatedWinRate: number;
  sampleCount: number;
  triggerMatches: number;
  triggerDescription: string;
  eligibleForTrading: boolean;
}

type MarketScanProgressCallback = (
  liveMarkets: number,
  totalMarkets: number,
  unavailableMarkets: number
) => void;
type ActiveTickSubscriber = (
  symbol: string,
  handler: (tick: Tick) => void
) => (() => void) | null;

function getCandidatePrediction(
  candidate: MarketScanCandidate,
  scanNumber: number
): AutoTradingPrediction {
  return {
    scanNumber,
    market: candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol,
    contractMode: candidate.contractMode,
    barrier: candidate.barrier,
    predictedWinRate: candidate.predictedWinRate,
    estimatedWinRate: candidate.estimatedWinRate,
    sampleCount: candidate.sampleCount,
    triggerMatches: candidate.triggerMatches,
    triggerDescription: candidate.triggerDescription,
    eligibleForTrading: candidate.eligibleForTrading,
  };
}

function getScanCandidateKey(symbol: string, contractMode: ContractMode): string {
  return `${symbol}:${contractMode}`;
}

function isNoReturnContractError(error: unknown): boolean {
  if (!isDerivApiError(error)) return false;
  const code = error.code.replace(/[^a-z]/gi, '').toLowerCase();
  if (code.includes('noreturn') || code.includes('returnunavailable')) return true;

  return /\bcontract\b.{0,80}\b(?:offers?\s+no\s+returns?|has\s+no\s+returns?|does\s+not\s+offer\s+(?:any\s+)?returns?)\b/i
    .test(error.message);
}

async function scanMarkets(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  symbols: ActiveSymbol[],
  strategy: UserTradingStrategy,
  shouldStop: () => boolean,
  subscribeToActiveTicks: ActiveTickSubscriber,
  isCandidateRejected: (candidate: MarketScanCandidate) => boolean,
  onProgress: MarketScanProgressCallback
): Promise<MarketScanCandidate | null | typeof CONNECTION_LOST> {
  const openSymbols = Array.from(
    new Map(
      getScannableMarkets(symbols).map((symbol) => [symbol.underlying_symbol, symbol])
    ).values()
  );
  if (openSymbols.length === 0) {
    throw new Error('No open, unsuspended continuous indices are available to scan.');
  }
  const pricesBySymbol = new Map<string, number[]>();
  const lastTickBySymbol = new Map<string, string>();
  const marketsWithTicks = new Set<string>();

  return new Promise((resolve, reject) => {
    let finished = false;
    let availableFeeds = 0;
    let unavailableMarkets = 0;
    let settledSubscriptions = 0;
    let pendingSubscriptions = 0;
    let pollForStop: ReturnType<typeof setInterval> | null = null;
    let removeConnectionListener = () => {};
    const activeUnsubscribers = new Set<() => void>();
    const streamUnsubscribers = new Set<() => Promise<void>>();
    const subscriptionTasksBySymbol = new Map<string, Promise<void>>();

    const finish = (result: MarketScanCandidate | null | typeof CONNECTION_LOST, error?: Error) => {
      if (finished) return;
      finished = true;
      if (pollForStop) clearInterval(pollForStop);
      removeConnectionListener();
      activeUnsubscribers.forEach((unsubscribe) => unsubscribe());
      activeUnsubscribers.clear();

      void (async () => {
        if (result && result !== CONNECTION_LOST) {
          await subscriptionTasksBySymbol.get(result.symbol.underlying_symbol);
        }
        await Promise.all(
          Array.from(streamUnsubscribers, (unsubscribe) => unsubscribe())
        );
        if (error) reject(error);
        else resolve(result);
      })();
    };

    const handleTick = (symbolCode: string, tick: Tick) => {
      if (finished) return;
      if (shouldStop()) {
        finish(null);
        return;
      }
      if (tick.symbol !== symbolCode || !Number.isFinite(tick.quote)) return;

      const tickKey = `${tick.epoch}:${tick.id}`;
      if (lastTickBySymbol.get(symbolCode) === tickKey) return;
      lastTickBySymbol.set(symbolCode, tickKey);

      const prices = pricesBySymbol.get(symbolCode) ?? [];
      prices.push(tick.quote);
      if (prices.length > MARKET_SCAN_TICK_COUNT) {
        prices.splice(0, prices.length - MARKET_SCAN_TICK_COUNT);
      }
      pricesBySymbol.set(symbolCode, prices);

      if (!marketsWithTicks.has(symbolCode)) {
        marketsWithTicks.add(symbolCode);
        onProgress(marketsWithTicks.size, openSymbols.length, unavailableMarkets);
      }

      const candidates = openSymbols.flatMap((symbol) => {
        const marketPrices = pricesBySymbol.get(symbol.underlying_symbol);
        if (!marketPrices) return [];
        const candidate = evaluateUserTradingStrategy(symbol, marketPrices, strategy);
        return candidate && !isCandidateRejected(candidate) ? [candidate] : [];
      });
      const bestCandidate = chooseBestScanCandidate(candidates);
      if (bestCandidate) finish(bestCandidate);
    };

    const activeSymbols = new Set<string>();
    for (const symbol of openSymbols) {
      const unsubscribe = subscribeToActiveTicks(
        symbol.underlying_symbol,
        (tick) => handleTick(symbol.underlying_symbol, tick)
      );
      if (!unsubscribe) continue;
      activeSymbols.add(symbol.underlying_symbol);
      activeUnsubscribers.add(unsubscribe);
      availableFeeds += 1;
    }

    pendingSubscriptions = openSymbols.length - activeSymbols.size;
    const checkSubscriptionSetup = () => {
      if (
        !finished &&
        settledSubscriptions === pendingSubscriptions &&
        availableFeeds === 0
      ) {
        setTimeout(() => {
          if (!ws.isConnected) {
            finish(CONNECTION_LOST);
          } else {
            finish(
              null,
              new Error('The scanner could not subscribe to live ticks for any open continuous index.')
            );
          }
        }, 0);
      }
    };

    pollForStop = setInterval(() => {
      if (shouldStop()) finish(null);
    }, CONNECTION_POLL_INTERVAL_MS);
    removeConnectionListener = ws.onConnectionStateChange((connected) => {
      if (!connected) finish(CONNECTION_LOST);
    });

    if (pendingSubscriptions === 0) {
      checkSubscriptionSetup();
    }

    for (const symbol of openSymbols) {
      if (finished || activeSymbols.has(symbol.underlying_symbol)) continue;
      const task = ws.subscribe(
        { ticks: symbol.underlying_symbol },
        (data) => {
          const tick = data.tick as Tick | undefined;
          if (tick) handleTick(symbol.underlying_symbol, tick);
        }
      ).then(async (subscription) => {
        if (finished) {
          await subscription.unsubscribe();
          return;
        }
        streamUnsubscribers.add(subscription.unsubscribe);
        availableFeeds += 1;
      }).catch((error: unknown) => {
        unavailableMarkets += 1;
        console.warn('[strategy bot] Could not start a live tick feed.', {
          symbol: symbol.underlying_symbol,
          error,
        });
        if (!finished) {
          onProgress(marketsWithTicks.size, openSymbols.length, unavailableMarkets);
        }
      }).finally(() => {
        settledSubscriptions += 1;
        checkSubscriptionSetup();
      });
      subscriptionTasksBySymbol.set(symbol.underlying_symbol, task);
    }
  });
}

export interface AutoTradingThresholdResult {
  outcome: 'take-profit' | 'stop-loss';
  profit: number;
  market: string;
}

async function waitForConnection(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  deadline: number,
  shouldStop: () => boolean = () => false
): Promise<boolean> {
  while (!ws.isConnected) {
    if (shouldStop()) return false;
    const remaining = deadline - Date.now();
    if (remaining <= 0) {
      throw new Error('Timed out waiting for the WebSocket connection to recover.');
    }
    await new Promise((resolve) => setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, remaining)));
  }
  return true;
}

async function waitForContractSettlement(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  contractId: number
): Promise<number> {
  const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;

  while (true) {
    await waitForConnection(ws, deadline);

    let unsubscribe: () => Promise<void> = async () => {};
    let hasSubscription = false;
    let finished = false;
    let connectionDropped = false;
    let removeConnectionListener = () => {};
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const settlement = new Promise<number>((resolve, reject) => {
      void ws.subscribe(
        { proposal_open_contract: 1, contract_id: contractId },
        (data) => {
          const contract = data.proposal_open_contract as Partial<OpenPosition> | undefined;
          if (!contract) return;
          const isClosed = contract.is_sold === 1 || contract.is_expired === 1 ||
            (typeof contract.status === 'string' && contract.status !== 'open');
          if (!isClosed) return;

          const profit = Number(contract.profit);
          if (!Number.isFinite(profit)) {
            reject(new Error('The settled contract did not include a valid profit/loss value.'));
            return;
          }
          resolve(profit);
        }
      ).then((subscription) => {
        unsubscribe = subscription.unsubscribe;
        hasSubscription = true;
        if (finished) void unsubscribe();
      }).catch(reject);
    });

    const connectionLost = new Promise<typeof CONNECTION_LOST>((resolve) => {
      removeConnectionListener = ws.onConnectionStateChange((connected) => {
        if (connected) return;
        connectionDropped = true;
        resolve(CONNECTION_LOST);
      });
    });

    const remaining = deadline - Date.now();
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeout = setTimeout(
        () => reject(new Error('Timed out waiting for the contract to settle. Auto-trading was stopped.')),
        Math.max(0, remaining)
      );
    });

    try {
      const result = await Promise.race([settlement, connectionLost, timeoutPromise]);
      if (result !== CONNECTION_LOST) return result;
    } catch (error) {
      if (!connectionDropped && ws.isConnected) throw error;
    } finally {
      finished = true;
      removeConnectionListener();
      if (timeout) clearTimeout(timeout);
      if (hasSubscription) await unsubscribe();
    }
  }
}

interface UseDigitsTradingReturn {
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  symbols: ActiveSymbol[];
  activeSymbol: ActiveSymbol | null;
  selectSymbol: (symbol: string) => void;
  currentTick: Tick | null;
  lastDigit: number | null;
  digitStats: DigitStats;
  tradeType: TradeType;
  setTradeType: (type: TradeType) => void;
  contractMode: ContractMode;
  setContractMode: (mode: ContractMode) => void;
  selectedDigit: number | null;
  contractsAvailable: boolean;
  pipSize: number;
  stake: string;
  setStake: (value: string) => void;
  duration: number;
  setDuration: (value: number) => void;
  durationLimits: DurationLimits;
  defaultStake: number;
  proposal: ProposalInfo | null;
  isProposalLoading: boolean;
  buyContract: () => Promise<void>;
  startAutoTrading: (strategy: UserTradingStrategy, settings?: SavedBotSettings) => Promise<void>;
  isBuying: boolean;
  buyResult: BuyResult | null;
  buyError: string | null;
  clearBuyResult: () => void;
  openPositions: OpenPosition[];
  closedPositions: ClosedPosition[];
  sellContract: (contractId: number, bidPrice: string) => Promise<void>;
  sellingId: number | null;
  sellError: string | null;
  clearSellError: () => void;
  takeProfit: string;
  setTakeProfit: (value: string) => void;
  stopLoss: string;
  setStopLoss: (value: string) => void;
  martingaleMode: MartingaleMode;
  setMartingaleMode: (value: MartingaleMode) => void;
  martingaleValues: Record<MartingaleMode, string>;
  setMartingaleValue: (mode: MartingaleMode, value: string) => void;
  thresholdResult: AutoTradingThresholdResult | null;
  clearThresholdResult: () => void;
  autoTradingStatus: AutoTradingStatus;
  autoTradingTradeCount: number;
  autoTradingProfit: number;
  autoTradingMarket: string | null;
  autoTradingEstimatedWinRate: number | null;
  autoTradingScanProgress: AutoTradingScanProgress | null;
  stopAutoTrading: () => void;
}

export type UseDigitsTradingParams = Pick<UseBaseTradingParams, 'ws' | 'isConnected' | 'isExhausted' | 'isAuthenticated' | 'onAuthWSFailed'>;

export function useDigitsTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed }: UseDigitsTradingParams): UseDigitsTradingReturn {
  const { localize } = useAppTranslations();
  const {
    ws: tradingWs,
    isConnected: tradingIsConnected,
    isLoading,
    error,
    symbols,
    activeSymbol,
    selectSymbol,
    currentTick,
    prices,
    pipSize,
    contractsAvailable,
    durationLimits,
    defaultStake,
    openPositions,
    closedPositions,
    sellContract,
    sellingId,
    sellError,
    clearSellError,
  } = useBaseTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed, contractTypes: CONTRACT_TYPES });

  // Digits-specific trade state
  const [tradeType, setTradeTypeRaw] = useState<TradeType>('matches-differs');
  const [contractMode, setContractModeRaw] = useState<ContractMode>('DIGITDIFF');
  const [selectedDigit, setSelectedDigit] = useState<number | null>(null);
  const [stake, setStake] = useState<string>('2.5');
  const [duration, setDuration] = useState<number>(2);
  const [takeProfit, setTakeProfit] = useState('5');
  const [stopLoss, setStopLoss] = useState('25');
  const [martingaleMode, setMartingaleMode] = useState<MartingaleMode>('classic');
  const [martingaleValues, setMartingaleValues] = useState<Record<MartingaleMode, string>>({
    classic: '1.85',
    dynamic: '1.85',
    'super-hybrid': '1.85',
  });
  const [thresholdResult, setThresholdResult] = useState<AutoTradingThresholdResult | null>(null);
  const [autoTradingStatus, setAutoTradingStatus] = useState<AutoTradingStatus>('idle');
  const [autoTradingTradeCount, setAutoTradingTradeCount] = useState(0);
  const [autoTradingProfit, setAutoTradingProfit] = useState(0);
  const [autoTradingMarket, setAutoTradingMarket] = useState<string | null>(null);
  const [autoTradingEstimatedWinRate, setAutoTradingEstimatedWinRate] = useState<number | null>(null);
  const [autoTradingScanProgress, setAutoTradingScanProgress] =
    useState<AutoTradingScanProgress | null>(null);
  const [strategyPredictionSeed, setStrategyPredictionSeed] = useState<{
    symbol: string;
    pipSize: number;
    prices: number[];
  } | null>(null);
  const autoSessionRef = useRef<{ stopRequested: boolean } | null>(null);
  const selectSymbolRef = useRef(selectSymbol);
  const activeSymbolRef = useRef(activeSymbol);
  const activeTickListenersRef = useRef(new Map<string, Set<(tick: Tick) => void>>());
  const lastForwardedTickRef = useRef<string | null>(null);
  activeSymbolRef.current = activeSymbol;

  const setContractMode = useCallback((mode: ContractMode) => {
    setContractModeRaw(mode);
    if (mode === 'DIGITOVER') {
      setSelectedDigit(1);
    } else if (mode === 'DIGITUNDER') {
      setSelectedDigit(8);
    } else {
      setSelectedDigit(null);
    }
  }, []);

  useEffect(() => {
    selectSymbolRef.current = selectSymbol;
  }, [selectSymbol]);

  const subscribeToActiveTicks = useCallback<ActiveTickSubscriber>((symbol, handler) => {
    if (activeSymbolRef.current?.underlying_symbol !== symbol) return null;

    const listeners = activeTickListenersRef.current.get(symbol) ?? new Set<(tick: Tick) => void>();
    listeners.add(handler);
    activeTickListenersRef.current.set(symbol, listeners);

    return () => {
      listeners.delete(handler);
      if (listeners.size === 0) activeTickListenersRef.current.delete(symbol);
    };
  }, []);

  useEffect(() => {
    if (!activeSymbol || !currentTick || currentTick.symbol !== activeSymbol.underlying_symbol) return;

    const tickKey = `${currentTick.symbol}:${currentTick.epoch}:${currentTick.id}`;
    if (lastForwardedTickRef.current === tickKey) return;
    lastForwardedTickRef.current = tickKey;

    activeTickListenersRef.current
      .get(currentTick.symbol)
      ?.forEach((handler) => handler(currentTick));
  }, [activeSymbol, currentTick]);

  const setMartingaleValue = useCallback((mode: MartingaleMode, value: string) => {
    setMartingaleValues((current) => ({ ...current, [mode]: value }));
  }, []);

  const clearThresholdResult = useCallback(() => {
    setThresholdResult(null);
  }, []);

  const stopAutoTrading = useCallback(() => {
    if (!autoSessionRef.current) return;
    autoSessionRef.current.stopRequested = true;
    setAutoTradingScanProgress(null);
    setAutoTradingStatus('stopping');
  }, []);

  // Reset contract mode to the first option of the selected trade type
  const setTradeType = useCallback((type: TradeType) => {
    setTradeTypeRaw(type);
    switch (type) {
      case 'matches-differs':
        setContractMode('DIGITDIFF');
        break;
      case 'over-under':
        setContractMode('DIGITOVER');
        break;
      case 'even-odd':
        setContractMode('DIGITEVEN');
        break;
    }
  }, [setContractMode]);

  const useStrategyPredictionSeed =
    activeSymbol?.underlying_symbol === strategyPredictionSeed?.symbol &&
    prices.length < (strategyPredictionSeed?.prices.length ?? 0);
  const predictionPrices = useMemo(
    () => useStrategyPredictionSeed
      ? [...(strategyPredictionSeed?.prices ?? []), ...prices].slice(-MARKET_SCAN_TICK_COUNT)
      : prices,
    [prices, strategyPredictionSeed, useStrategyPredictionSeed]
  );
  const predictionPipSize = useStrategyPredictionSeed && strategyPredictionSeed
    ? strategyPredictionSeed.pipSize
    : pipSize;
  const digitStats: DigitStats = useMemo(
    () => computeDigitStats(predictionPrices, predictionPipSize),
    [predictionPrices, predictionPipSize]
  );

  const lastDigit = useMemo(() => {
    if (currentTick) {
      return getLastDigit(currentTick.quote, pipSize);
    }
    if (predictionPrices.length > 0) {
      return getLastDigit(predictionPrices[predictionPrices.length - 1], predictionPipSize);
    }
    return null;
  }, [currentTick, predictionPrices, predictionPipSize]);

  const {
    buyContract: buyWithProposal,
    isBuying,
    buyResult,
    buyError,
    clearBuyResult,
  } = useBuy(tradingWs, tradingIsConnected);

  // Null out params while a buy is in-flight — forces useProposal to unsubscribe
  // the consumed proposal ID. When isBuying flips back to false, the memo returns
  // real params and useProposal re-subscribes to get a fresh proposal.
  const proposalParams: ProposalParams | null = useMemo(() => {
    if (isBuying || !activeSymbol) return null;
    if (contractMode === 'DIGITDIFF' && selectedDigit === null) return null;
    const stakeNum = parseFloat(stake);
    if (!stakeNum || stakeNum <= 0) return null;

    const barrier = getContractBarrier(contractMode, selectedDigit);

    return {
      contractType: contractMode,
      symbol: activeSymbol.underlying_symbol,
      amount: stakeNum,
      duration,
      durationUnit: 't',
      basis: 'stake' as const,
      currency: 'USD',
      ...(barrier !== undefined ? { barrier } : {}),
    };
  }, [activeSymbol, contractMode, stake, duration, selectedDigit, isBuying]);

  const { proposal } = useProposal(tradingWs, tradingIsConnected, proposalParams);

  const buyContract = useCallback(async () => {
    if (autoSessionRef.current) {
      stopAutoTrading();
      return;
    }
    if (!tradingWs?.isConnected || !proposal?.id) {
      toast.error(localize('Contract quote is not ready'), {
        description: localize('Wait for a live quote before purchasing.'),
      });
      return;
    }

    try {
      await buyWithProposal({
        id: proposal.id,
        askPrice: proposal.askPrice,
        payout: proposal.payout,
        longcode: proposal.longcode,
        minStake: proposal.minStake,
        maxPayout: proposal.maxPayout,
      });
    } catch (error) {
      toast.error(localize('Contract purchase failed'), {
        description: error instanceof Error ? error.message : localize('The purchase could not be completed.'),
      });
    }
  }, [buyWithProposal, localize, proposal, stopAutoTrading, tradingWs]);

  const startAutoTrading = useCallback(async (
    strategy: UserTradingStrategy,
    settings: SavedBotSettings = {}
  ) => {
    if (autoSessionRef.current) {
      stopAutoTrading();
      return;
    }

    const parseTarget = (value: string, label: string): number | null => {
      if (value.trim() === '') return null;
      const parsed = Number(value);
      if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(localize('{{label}} must be greater than zero.', { label }));
      }
      return parsed;
    };

    let takeProfitTarget: number | null;
    let stopLossTarget: number | null;
    const baseStake = Number(settings.stake ?? stake);
    const maximumStake = settings.maximumStake === undefined
      ? null
      : Number(settings.maximumStake);
    const tradeDuration = settings.duration ?? duration;
    const multiplier = settings.recoveryEnabled === false
      ? 1
      : Number(martingaleValues[martingaleMode]);
    try {
      takeProfitTarget = parseTarget(settings.takeProfit ?? takeProfit, localize('Take profit'));
      stopLossTarget = parseTarget(settings.stopLoss ?? stopLoss, localize('Stop loss'));
      if (takeProfitTarget === null && stopLossTarget === null) {
        throw new Error(localize('Set a take-profit or stop-loss target before starting the strategy bot.'));
      }
      if (!Number.isFinite(baseStake) || baseStake <= 0) {
        throw new Error(localize('Stake must be greater than zero.'));
      }
      if (maximumStake !== null && (
        !Number.isFinite(maximumStake) ||
        maximumStake < baseStake
      )) {
        throw new Error(localize('Maximum stake must be at least the initial stake.'));
      }
      if (!Number.isInteger(tradeDuration) || tradeDuration < 1 || tradeDuration > 200) {
        throw new Error(localize('Duration must be between 1 and 200 ticks.'));
      }
      if (!Number.isFinite(multiplier) || multiplier < 1) {
        throw new Error(localize('Martingale multiplier must be at least 1.'));
      }
      if (!tradingWs?.isConnected || !tradingIsConnected || !isAuthenticated) {
        throw new Error(localize('Log in and connect before starting an automatic trading session.'));
      }
      if (symbols.length === 0) throw new Error(localize('No markets are available to scan.'));
    } catch (error) {
      toast.error(localize('Risk settings are invalid'), {
        description: error instanceof Error ? error.message : localize('Check your risk settings and try again.'),
      });
      return;
    }

    const session = { stopRequested: false };
    autoSessionRef.current = session;
    setThresholdResult(null);
    setAutoTradingStatus('scanning');
    setSelectedDigit(strategy.barrier);
    setAutoTradingTradeCount(0);
    setAutoTradingProfit(0);
    setAutoTradingMarket(null);
    setAutoTradingEstimatedWinRate(null);
    setAutoTradingScanProgress(null);

    let sessionProfit = 0;
    let tradeCount = 0;
    let nextStake = baseStake;
    let martingaleProgress = { ...initialMartingaleProgress };
    let stopReason = '';
    let reachedThreshold: AutoTradingThresholdResult | null = null;
    const rejectedCandidates = new Map<string, number>();
    const skippedNoReturnCandidates = new Set<string>();
    let scanNumber = 0;

    const scanForMarket = async (): Promise<MarketScanCandidate | null> => {
      setAutoTradingStatus('scanning');
      setAutoTradingMarket(null);
      setAutoTradingEstimatedWinRate(null);

      while (!session.stopRequested) {
        const connected = await waitForConnection(
          tradingWs,
          Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
          () => session.stopRequested
        );
        if (!connected) return null;
        scanNumber += 1;

        const eligibleMarkets = getScannableMarkets(symbols);
        if (eligibleMarkets.length === 0) {
          throw new Error(localize('No open, unsuspended continuous indices are available to scan.'));
        }
        const totalMarkets = eligibleMarkets.length;
        setAutoTradingScanProgress({
          phase: 'scanning',
          scannedMarkets: 0,
          totalMarkets,
          unavailableMarkets: 0,
          scanNumber,
          ruleDescription: strategy.description,
          selectedMarket: null,
          selectedContractMode: null,
          estimatedWinRate: null,
          prediction: null,
          skippedNoReturnMarkets: skippedNoReturnCandidates.size,
        });

        const candidate = await scanMarkets(
          tradingWs,
          eligibleMarkets,
          strategy,
          () => session.stopRequested,
          subscribeToActiveTicks,
          (rejectedCandidate) => {
            const key = getScanCandidateKey(
              rejectedCandidate.symbol.underlying_symbol,
              rejectedCandidate.contractMode
            );
            const rejectedUntil = rejectedCandidates.get(key);
            if (rejectedUntil === undefined) return false;
            if (rejectedUntil <= Date.now()) {
              rejectedCandidates.delete(key);
              return false;
            }
            return true;
          },
          (scannedMarkets, marketCount, unavailableMarkets) => {
            setAutoTradingScanProgress((progress) =>
              progress?.phase === 'scanning'
                ? {
                    ...progress,
                    scannedMarkets,
                    totalMarkets: marketCount,
                    unavailableMarkets,
                  }
                : progress
            );
          }
        );
        if (session.stopRequested) return null;
        if (candidate === CONNECTION_LOST) continue;
        if (!candidate) return null;

        const prediction = getCandidatePrediction(candidate, scanNumber);
        setAutoTradingScanProgress((progress) =>
          progress?.phase === 'scanning'
            ? { ...progress, prediction }
            : progress
        );
        return candidate;
      }
      return null;
    };

    const useScannedMarket = (candidate: MarketScanCandidate) => {
      const prediction = getCandidatePrediction(
        candidate,
        scanNumber
      );
      setContractMode(candidate.contractMode);
      setTradeTypeRaw(
        candidate.contractMode === 'DIGITOVER' || candidate.contractMode === 'DIGITUNDER'
          ? 'over-under'
          : candidate.contractMode === 'DIGITEVEN' || candidate.contractMode === 'DIGITODD'
            ? 'even-odd'
            : 'matches-differs'
      );
      const marketName =
        candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol;
      if (candidate.barrier !== null) {
        setSelectedDigit(candidate.barrier);
      } else {
        setSelectedDigit(null);
      }
      setStrategyPredictionSeed({
        symbol: candidate.symbol.underlying_symbol,
        pipSize: pipSizeFromPip(candidate.symbol.pip_size),
        prices: candidate.predictionPrices,
      });
      selectSymbolRef.current(candidate.symbol.underlying_symbol);
      setAutoTradingMarket(marketName);
      setAutoTradingEstimatedWinRate(candidate.estimatedWinRate);
      setAutoTradingScanProgress((progress) =>
        progress
          ? {
              ...progress,
              phase: 'selected',
              selectedMarket: marketName,
              selectedContractMode: candidate.contractMode,
              estimatedWinRate: candidate.estimatedWinRate,
              prediction,
            }
          : progress
      );
      setAutoTradingStatus('running');
    };

    const skipNoReturnCandidate = (candidate: MarketScanCandidate) => {
      const candidateKey = getScanCandidateKey(
        candidate.symbol.underlying_symbol,
        candidate.contractMode
      );
      rejectedCandidates.set(candidateKey, Date.now() + 5000);
      skippedNoReturnCandidates.add(candidateKey);

      setAutoTradingScanProgress((progress) =>
        progress
          ? {
              ...progress,
              skippedNoReturnMarkets: skippedNoReturnCandidates.size,
            }
          : progress
      );
    };

    try {
      while (!session.stopRequested) {
        const candidate = await scanForMarket();
        if (!candidate) break;
        useScannedMarket(candidate);
        const market = candidate.symbol;

        const connected = await waitForConnection(
          tradingWs,
          Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
          () => session.stopRequested
        );
        if (!connected) break;

        const barrier = candidate.barrier ?? undefined;
        const proposalParams = {
          proposal: 1,
          amount: nextStake,
          basis: 'stake',
          contract_type: candidate.contractMode,
          currency: 'USD',
          underlying_symbol: market.underlying_symbol,
          duration: tradeDuration,
          duration_unit: 't',
          ...(barrier !== undefined ? { barrier } : {}),
        };
        let proposalResponse: ProposalResponse;
        let connectionDropped = false;
        const removeConnectionListener = tradingWs.onConnectionStateChange((isConnected) => {
          if (!isConnected) connectionDropped = true;
        });
        try {
          proposalResponse = await tradingWs.send<ProposalResponse>(proposalParams);
        } catch (error) {
          if (session.stopRequested) break;
          if (isNoReturnContractError(error)) {
            skipNoReturnCandidate(candidate);
            continue;
          }
          if (!connectionDropped && tradingWs.isConnected) throw error;
          const reconnected = await waitForConnection(
            tradingWs,
            Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
            () => session.stopRequested
          );
          if (!reconnected) break;
          continue;
        } finally {
          removeConnectionListener();
        }
        if (session.stopRequested) break;
        const quote = proposalResponse.proposal;
        if (!quote?.id || !Number.isFinite(quote.ask_price) || quote.ask_price <= 0) {
          throw new Error(localize('Could not get a valid proposal for the next trade.'));
        }
        if (!Number.isFinite(quote.payout)) {
          throw new Error(localize('The proposal did not include a valid potential payout.'));
        }
        if (quote.payout <= quote.ask_price) {
          skipNoReturnCandidate(candidate);
          continue;
        }

        if (!tradingWs.isConnected) {
          const reconnected = await waitForConnection(
            tradingWs,
            Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
            () => session.stopRequested
          );
          if (!reconnected) break;
          continue;
        }

        let connectionDroppedDuringPurchase = false;
        const removePurchaseConnectionListener = tradingWs.onConnectionStateChange((isConnected) => {
          if (!isConnected) connectionDroppedDuringPurchase = true;
        });
        let purchase: Awaited<ReturnType<typeof buyWithProposal>>;
        let purchaseError: unknown = null;
        try {
          purchase = await buyWithProposal({
            id: quote.id,
            askPrice: quote.ask_price,
            payout: quote.payout,
            longcode: quote.longcode,
            minStake: Number(quote.validation_params?.stake?.min ?? 0),
            maxPayout: Number(quote.validation_params?.payout?.max ?? 0),
          }, (error) => {
            purchaseError = error;
            return isNoReturnContractError(error);
          });
        } finally {
          removePurchaseConnectionListener();
        }
        if (!purchase) {
          if (isNoReturnContractError(purchaseError)) {
            skipNoReturnCandidate(candidate);
            continue;
          }
          if (connectionDroppedDuringPurchase || !tradingWs.isConnected) {
            throw new Error(localize(
              'The connection was interrupted while confirming a purchase. Check your transactions before starting another session.'
            ));
          }
          throw new Error(localize('Trade purchase failed. Auto-trading was stopped.'));
        }
        clearBuyResult();
        setAutoTradingScanProgress(null);

        tradeCount += 1;
        setAutoTradingTradeCount(tradeCount);
        const settledProfit = await waitForContractSettlement(tradingWs, purchase.contractId);
        sessionProfit = Math.round((sessionProfit + settledProfit) * 100) / 100;
        setAutoTradingProfit(sessionProfit);

        if (takeProfitTarget !== null && sessionProfit >= takeProfitTarget) {
          stopReason = localize('Take-profit target reached.');
          reachedThreshold = {
            outcome: 'take-profit',
            profit: sessionProfit,
            market: market.underlying_symbol_name || market.underlying_symbol,
          };
          setThresholdResult(reachedThreshold);
          break;
        }
        if (stopLossTarget !== null && sessionProfit <= -stopLossTarget) {
          stopReason = localize('Stop-loss limit reached.');
          reachedThreshold = {
            outcome: 'stop-loss',
            profit: sessionProfit,
            market: market.underlying_symbol_name || market.underlying_symbol,
          };
          setThresholdResult(reachedThreshold);
          break;
        }

        const next = getNextMartingaleStake(
          baseStake,
          multiplier,
          settledProfit,
          martingaleProgress
        );
        if (maximumStake !== null && next.stake > maximumStake) {
          stopReason = localize(
            'Maximum stake limit reached. The bot stopped before exceeding the configured stake limit.'
          );
          break;
        }
        nextStake = next.stake;
        if (!Number.isFinite(nextStake) || nextStake <= 0) {
          throw new Error(localize('Martingale stake exceeded the supported numeric range. Auto-trading was stopped.'));
        }
        martingaleProgress = next.progress;

      }

      if (session.stopRequested) {
        stopReason = localize('Auto-trading stopped after the current contract settled.');
      } else if (!stopReason && tradeCount === 0) {
        stopReason = localize('Auto-trading stopped before the first trade.');
      }
      if (!reachedThreshold) {
        toast.success(localize('Trading session ended'), {
          description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
            reason: stopReason,
            profit: sessionProfit.toFixed(2),
            count: tradeCount,
          }),
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
      toast.error(localize('Auto-trading stopped'), { description: message });
    } finally {
      autoSessionRef.current = null;
      setAutoTradingScanProgress(null);
      setAutoTradingStatus('idle');
    }
  }, [
    buyWithProposal,
    clearBuyResult,
    duration,
    isAuthenticated,
    localize,
    martingaleMode,
    martingaleValues,
    setContractMode,
    subscribeToActiveTicks,
    symbols,
    stake,
    stopAutoTrading,
    stopLoss,
    takeProfit,
    tradingIsConnected,
    tradingWs,
  ]);

  return {
    isConnected,
    isLoading,
    error,
    symbols,
    activeSymbol,
    selectSymbol,
    currentTick,
    lastDigit,
    digitStats,
    tradeType,
    setTradeType,
    contractMode,
    setContractMode,
    selectedDigit,
    contractsAvailable,
    pipSize,
    stake,
    setStake,
    duration,
    setDuration,
    durationLimits,
    defaultStake,
    proposal,
    isProposalLoading: isConnected && proposalParams !== null && proposal === null,
    buyContract,
    startAutoTrading,
    isBuying,
    buyResult,
    buyError,
    clearBuyResult,
    openPositions,
    closedPositions,
    sellContract,
    sellingId,
    sellError,
    clearSellError,
    takeProfit,
    setTakeProfit,
    stopLoss,
    setStopLoss,
    martingaleMode,
    setMartingaleMode,
    martingaleValues,
    setMartingaleValue,
    thresholdResult,
    clearThresholdResult,
    autoTradingStatus,
    autoTradingTradeCount,
    autoTradingProfit,
    autoTradingMarket,
    autoTradingEstimatedWinRate,
    autoTradingScanProgress,
    stopAutoTrading,
  };
}
