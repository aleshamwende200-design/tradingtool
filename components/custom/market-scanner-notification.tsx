'use client';

import { Activity, CheckCircle2, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { AutoTradingScanProgress } from '@/hooks/use-digits-trading';

interface MarketScannerNotificationProps {
  progress: AutoTradingScanProgress | null;
  status: 'idle' | 'scanning' | 'running' | 'stopping';
  onStop: () => void;
}

export function MarketScannerNotification({
  progress,
  status,
  onStop,
}: MarketScannerNotificationProps) {
  const { localize } = useAppTranslations();
  if (!progress) return null;

  const isSelected = progress.phase === 'selected';
  const hasSignal = progress.prediction !== null;
  const progressPercent = progress.totalMarkets > 0
    ? Math.min(100, (progress.scannedMarkets / progress.totalMarkets) * 100)
    : 0;
  const scanComplete = progress.totalMarkets > 0 &&
    progress.scannedMarkets >= progress.totalMarkets;
  const statusText = isSelected
    ? localize('STRATEGY MATCHED')
    : hasSignal
      ? localize('ENTRY CONDITION FOUND')
      : localize('WAITING FOR RULE');
  const prediction = progress.prediction;
  const predictionContractLabel = (() => {
    switch (prediction?.contractMode) {
      case 'DIGITDIFF':
        return localize('Differs');
      case 'DIGITOVER':
        return localize('Over {{barrier}}', { barrier: prediction?.barrier ?? 1 });
      case 'DIGITUNDER':
        return localize('Under {{barrier}}', { barrier: prediction?.barrier ?? 8 });
      case 'DIGITEVEN':
        return localize('Even');
      case 'DIGITODD':
        return localize('Odd');
      default:
        return null;
    }
  })();
  const description = isSelected
    ? localize('Starting trade')
    : scanComplete
      ? localize('Selecting market')
      : localize('Scanning markets');

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center p-4">
      <section
        aria-label={localize('Strategy bot progress')}
        className="market-scanner-card pointer-events-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-primary/45 bg-card/95 p-4 text-foreground shadow-2xl backdrop-blur-xl sm:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
              {isSelected ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <Radar className="market-scan-spinner h-6 w-6" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold tracking-wide">
                {localize('Strategy Bot')}
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                {statusText}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2 py-1 text-[10px] font-bold tabular-nums text-primary">
            {localize('Scan {{number}}', { number: progress.scanNumber })}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div
            role="status"
            aria-label={localize('{{percent}} percent scanned', {
              percent: Math.round(progressPercent),
            })}
            className="flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary/45 bg-primary/5 shadow-[0_0_20px_rgb(var(--primary)/0.16)]"
          >
            {isSelected ? (
              <CheckCircle2 className="h-7 w-7 text-primary" />
            ) : (
              <span className="font-mono text-3xl font-black tabular-nums text-primary">
                {String(Math.round(progressPercent)).padStart(2, '0')}
              </span>
            )}
            {!isSelected && (
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                {localize('Percent')}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              {!isSelected && <Activity className="h-3.5 w-3.5 text-primary" />}
              <span aria-live="polite" aria-atomic="true">{description}</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              {localize('{{scanned}} of {{total}} open continuous index markets checked', {
                scanned: progress.scannedMarkets,
                total: progress.totalMarkets,
              })}
            </p>
            <p className="mt-1 break-words text-[11px] leading-relaxed text-muted-foreground">
              {localize('Bot rule: {{rule}}', { rule: progress.ruleDescription })}
            </p>
            {progress.skippedNoReturnMarkets > 0 && (
              <p className="mt-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                {localize('{{count}} no-return setups skipped', {
                  count: progress.skippedNoReturnMarkets,
                })}
              </p>
            )}
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-label={localize('Markets scanned')}
              aria-valuemin={0}
              aria-valuemax={Math.max(1, progress.totalMarkets)}
              aria-valuenow={progress.scannedMarkets}
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {prediction ? (
          <div className="mt-3 space-y-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                  {localize('Rule match from scan {{number}}', {
                    number: prediction.scanNumber,
                  })}
                </p>
                <p className="truncate text-sm font-bold" title={prediction.market}>
                  {prediction.market} · {predictionContractLabel}
                  {prediction.barrier !== null ? ` ${prediction.barrier}` : ''}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-sm font-bold text-primary">
                  {(prediction.predictedWinRate * 100).toFixed(1)}%
                </p>
                <p className="text-[9px] font-medium text-muted-foreground">
                  {localize('Rule history')}
                </p>
              </div>
            </div>
            <p className="border-t border-border/70 pt-2 text-[11px] text-muted-foreground">
              {localize('Entry: {{condition}}', { condition: prediction.triggerDescription })}
            </p>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[9px] text-muted-foreground">
              <span>
                {localize('{{count}} historical matches', {
                  count: prediction.triggerMatches,
                })}
              </span>
              <span className={prediction.eligibleForTrading ? 'text-emerald-500' : 'text-amber-500'}>
                {prediction.eligibleForTrading
                  ? localize('Rule matched')
                  : localize('Waiting for rule')}
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-3 rounded-xl border border-border bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
            {localize('Waiting for this bot rule to match on an open market.')}
          </div>
        )}

        <Button
          type="button"
          size="sm"
          variant="outline"
          className="mt-3 h-8 w-full border-destructive/40 text-destructive hover:bg-destructive/10"
          onClick={onStop}
          disabled={status === 'stopping'}
        >
          {status === 'stopping'
            ? localize('Stopping...')
            : isSelected
              ? localize('Stop auto-trading')
              : localize('Stop scan')}
        </Button>
      </section>
    </div>
  );
}
