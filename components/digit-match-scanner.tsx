'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, Radar, RotateCcw, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { DurationLimits } from '@deriv/core';
import type { SessionTransaction } from '@/hooks/use-session-transactions';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { formatAmount, formatInteger, formatPercent, formatSignedAmount } from '@/lib/locale-format';
import type { DigitMatchScanCandidate } from '@/lib/market-scanner';
import { DIGIT_MATCH_SCAN_COUNT } from '@/lib/market-scanner';
import type {
  DigitMatchScannerProgress,
  DigitMatchScannerStatus,
} from '@/hooks/use-digit-match-scanner';
import { cn } from '@/lib/utils';

interface DigitMatchScannerProps {
  status: DigitMatchScannerStatus;
  candidate: DigitMatchScanCandidate | null;
  progress: DigitMatchScannerProgress;
  error: string | null;
  isConnected: boolean;
  isBotActive: boolean;
  isAuthenticated: boolean;
  isBuying: boolean;
  stake: string;
  currency: string;
  duration: number;
  durationLimits: DurationLimits;
  transactions: SessionTransaction[];
  onStakeChange: (stake: string) => void;
  onDurationChange: (duration: number) => void;
  onRequestLogin: () => void;
  onReset: () => void;
  onBuyMatchDigits: (
    symbol: string,
    digits: number[],
    stake: string,
    duration: number
  ) => Promise<void>;
  onStart: () => void;
  onStop: () => void;
}

export function DigitMatchScanner({
  status,
  candidate,
  progress,
  error,
  isConnected,
  isBotActive,
  isAuthenticated,
  isBuying,
  stake,
  currency,
  duration,
  durationLimits,
  transactions,
  onStakeChange,
  onDurationChange,
  onRequestLogin,
  onReset,
  onBuyMatchDigits,
  onStart,
  onStop,
}: DigitMatchScannerProps) {
  const { localize, locale } = useAppTranslations();
  const [durationDraft, setDurationDraft] = useState(String(duration));
  const isScanning = status === 'scanning';
  const parsedDuration = Number(durationDraft);
  const isDurationValid = durationDraft.trim() !== '' &&
    Number.isInteger(parsedDuration) &&
    parsedDuration >= durationLimits.min &&
    parsedDuration <= durationLimits.max;
  const numericStake = Number(stake);
  const isStakeValid = stake.trim() !== '' && Number.isFinite(numericStake) && numericStake > 0;

  useEffect(() => {
    setDurationDraft(String(duration));
  }, [duration]);

  const matchTrades = transactions
    .filter((transaction) => transaction.contractType === 'DIGITMATCH')
    .sort((left, right) => right.timestamp - left.timestamp);
  const closedMatchTrades = matchTrades.filter((transaction) => transaction.status === 'closed');
  const wins = closedMatchTrades.filter((transaction) => transaction.profit > 0).length;
  const losses = closedMatchTrades.filter((transaction) => transaction.profit < 0).length;
  const totalProfit = matchTrades.reduce(
    (total, transaction) => total + (Number.isFinite(transaction.profit) ? transaction.profit : 0),
    0
  );
  const totalStake = isStakeValid
    ? `${formatAmount(numericStake * DIGIT_MATCH_SCAN_COUNT, locale)} ${currency}`
    : localize('Enter a valid stake');
  const statusLabel = isScanning
    ? candidate
      ? localize('Market selected')
      : localize('Scanning')
    : status === 'error'
      ? localize('Scanner error')
      : status === 'stopped'
        ? localize('Stopped')
        : localize('Ready');

  return (
    <section className="rounded-xl border border-primary/25 bg-card/90 p-3 shadow-sm sm:p-4">
      <header className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
            <Radar className={cn('h-4 w-4', isScanning && 'market-scan-spinner')} />
          </span>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-foreground sm:text-base">
              {localize('Live match scanner')}
            </h2>
          </div>
        </div>
        <span className={cn(
          'shrink-0 rounded-md border px-2 py-1 text-[10px] font-medium',
          isScanning
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'
            : status === 'error'
              ? 'border-destructive/30 bg-destructive/10 text-destructive'
              : 'border-border bg-background/70 text-muted-foreground'
        )}>
          {statusLabel}
        </span>
      </header>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <Button
          type="button"
          variant={isScanning ? 'outline' : 'default'}
          className={cn(isScanning && 'border-destructive/40 text-destructive hover:bg-destructive/10')}
          onClick={isScanning ? onStop : onStart}
          disabled={!isScanning && (!isConnected || isBotActive)}
        >
          {isScanning
            ? <><Square className="h-4 w-4" />{localize('Stop scanner')}</>
            : <><Radar className="h-4 w-4" />{localize('Scan all markets')}</>}
        </Button>
      </div>

      {isScanning && progress.totalMarkets > 0 && (
        <div className="mt-3 rounded-lg border border-border/70 bg-background/50 px-3 py-2">
          <p className="text-[11px] text-muted-foreground">
            {localize('{{ready}} of {{total}} markets loaded all 1,000 ticks; {{unavailable}} unavailable.', {
              ready: formatInteger(progress.readyMarkets, locale),
              total: formatInteger(progress.totalMarkets, locale),
              unavailable: formatInteger(progress.unavailableMarkets, locale),
            })}
          </p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            {localize('{{count}} live markets · {{ticks}} of {{expected}} total baseline ticks loaded', {
              count: formatInteger(progress.liveMarkets, locale),
              ticks: formatInteger(progress.loadedTicks, locale),
              expected: formatInteger(progress.totalMarkets * 1000, locale),
            })}
          </p>
          <div
            role="progressbar"
            aria-label={localize('Markets scanned')}
            aria-valuemin={0}
            aria-valuemax={progress.totalMarkets}
            aria-valuenow={progress.readyMarkets}
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width]"
              style={{
                width: `${Math.min(
                  100,
                  (progress.readyMarkets / progress.totalMarkets) * 100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      {candidate && (
        <div className="mt-3 rounded-lg border border-primary/25 bg-primary/[0.04] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {localize('Best market candidate')}
          </p>
          <p className="mt-1 truncate text-sm font-bold text-foreground">
            {candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            {localize('Top {{count}} digits: {{digits}} · Combined recent share: {{share}}', {
              count: DIGIT_MATCH_SCAN_COUNT,
              digits: candidate.topDigits.map(({ digit }) => digit).join(', '),
              share: formatPercent(candidate.topDigitsCoverage, 1, locale),
            })}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:max-w-sm">
            <label className="space-y-1 text-xs text-muted-foreground">
              <span>{localize('Stake per digit ({{currency}})', { currency })}</span>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={stake}
                onChange={(event) => onStakeChange(event.target.value)}
                disabled={isBuying || isBotActive}
                className="h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground"
              />
            </label>
            <label className="space-y-1 text-xs text-muted-foreground">
              <span>{localize('Duration (ticks)')}</span>
              <input
                type="number"
                min={durationLimits.min}
                max={durationLimits.max}
                step="1"
                value={durationDraft}
                onChange={(event) => {
                  const value = event.target.value;
                  setDurationDraft(value);
                  const parsed = Number(value);
                  if (value !== '' && Number.isInteger(parsed) &&
                    parsed >= durationLimits.min && parsed <= durationLimits.max) {
                    onDurationChange(parsed);
                  }
                }}
                disabled={isBuying || isBotActive}
                className="h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground"
              />
            </label>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            {localize('One contract per digit. Total stake for {{count}} digits: {{total}}.', {
              count: DIGIT_MATCH_SCAN_COUNT,
              total: totalStake,
            })}
          </p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              type="button"
              disabled={
                isBuying ||
                isBotActive ||
                (isAuthenticated && (
                  !isConnected ||
                  !isStakeValid ||
                  !isDurationValid
                ))
              }
              onClick={() => {
                if (!isAuthenticated) {
                  onRequestLogin();
                  return;
                }
                void onBuyMatchDigits(
                  candidate.symbol.underlying_symbol,
                  candidate.topDigits.map(({ digit }) => digit),
                  stake,
                  parsedDuration
                );
              }}
            >
              {localize('Buy all {{count}} digits', {
                count: DIGIT_MATCH_SCAN_COUNT,
              })}
            </Button>
            <div className="flex flex-wrap gap-1.5">
              {candidate.topDigits.map(({ digit, percentage }) => (
                <span
                  key={digit}
                  className="rounded border border-border/70 bg-background/70 px-2 py-1 text-[10px] text-muted-foreground"
                >
                  {digit}: {formatPercent(percentage, 1, locale)}
                </span>
              ))}
            </div>
          </div>
          {isAuthenticated && !isConnected && (
            <p className="mt-2 text-[10px] text-muted-foreground">
              {localize('Reconnect to the live market before trading.')}
            </p>
          )}
        </div>
      )}

      <div className="mt-3 rounded-lg border border-border/70">
        <div className="flex items-center justify-between gap-2 border-b border-border/60 px-3 py-2">
          <h3 className="text-xs font-semibold text-foreground">
            {localize('Recent trades')}
          </h3>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="h-7 px-2 text-[10px]"
            aria-label={localize('Reset all session trades and TP/SL progress')}
            title={localize('Reset all session trades and TP/SL progress')}
            disabled={!isAuthenticated || matchTrades.length === 0}
            onClick={onReset}
          >
            <RotateCcw className="h-3 w-3" />
            {localize('Reset')}
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2 border-b border-border/60 px-3 py-2 text-center sm:grid-cols-4">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{localize('Total trades')}</p>
            <p className="text-sm font-bold tabular-nums text-foreground">
              {formatInteger(matchTrades.length, locale)}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{localize('Wins')}</p>
            <p className="text-sm font-bold tabular-nums text-emerald-500">{formatInteger(wins, locale)}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{localize('Losses')}</p>
            <p className="text-sm font-bold tabular-nums text-destructive">{formatInteger(losses, locale)}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{localize('Total P/L')}</p>
            <p className={cn(
              'text-sm font-bold tabular-nums',
              totalProfit > 0 ? 'text-emerald-500' : totalProfit < 0 ? 'text-destructive' : 'text-foreground'
            )}>
              {formatSignedAmount(totalProfit, locale)} {currency}
            </p>
          </div>
        </div>
        <div className="max-h-48 divide-y divide-border/60 overflow-y-auto scroll-smooth">
          {matchTrades.slice(0, 5).map((trade) => (
            <div key={trade.contractId} className="flex items-center justify-between gap-2 px-3 py-2 text-[11px]">
              <span className="min-w-0 truncate text-muted-foreground">
                {trade.status === 'open' ? localize('Open') : localize('Closed')}
                {' · '}
                {trade.symbol}
                {' · '}
                {localize('Last digit')} {trade.lastDigit ?? '—'}
              </span>
              <span className={cn(
                'shrink-0 font-semibold tabular-nums',
                trade.profit > 0 ? 'text-emerald-500' : trade.profit < 0 ? 'text-destructive' : 'text-muted-foreground'
              )}>
                {formatSignedAmount(trade.profit, locale)} {trade.currency}
              </span>
            </div>
          ))}
          {matchTrades.length === 0 && (
            <p className="px-3 py-4 text-center text-[11px] text-muted-foreground">
              {localize('No Digit Match trades in this session.')}
            </p>
          )}
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 flex items-start gap-2 text-xs text-destructive">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}

      <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
        {localize('Recent digit frequencies are historical, not predictive guarantees.')}
      </p>
    </section>
  );
}
