'use client';

import type { DigitStats } from '@/lib/types';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { formatInteger, formatPercent } from '@/lib/locale-format';
import { cn } from '@/lib/utils';

interface DigitDistributionPanelProps {
  digitStats: DigitStats;
  marketName: string | null;
  topDigits: number[];
}

export function DigitDistributionPanel({
  digitStats,
  marketName,
  topDigits,
}: DigitDistributionPanelProps) {
  const { localize, locale } = useAppTranslations();

  return (
    <section
      aria-labelledby="digit-distribution-title"
      className="mb-4 rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4"
    >
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2
            id="digit-distribution-title"
            className="text-sm font-bold text-foreground sm:text-base"
          >
            {localize('Digit percentage distribution')}
          </h2>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {marketName
              ? localize('Market: {{market}}', { market: marketName })
              : localize('No market selected')}
            {' · '}
            {digitStats.totalTicks > 0
              ? localize('Based on {{count}} recent live ticks', {
                  count: formatInteger(digitStats.totalTicks, locale),
                })
              : localize('Waiting for live ticks')}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-sky-500">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sky-500" />
            {localize('Low digits 0–4')}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-orange-500">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-500" />
            {localize('High digits 5–9')}
          </span>
        </div>
      </header>

      <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
        {digitStats.percentages.map((percentage, digit) => {
          const isHighDigit = digit >= 5;
          const isTopScannedDigit = topDigits.includes(digit);

          return (
            <div
              key={digit}
              role="group"
              aria-label={localize('Digit {{digit}}: {{percentage}}', {
                digit,
                percentage: formatPercent(percentage, 1, locale),
              })}
              className={cn(
                'rounded-lg border px-1.5 py-2 text-center',
                isHighDigit
                  ? 'border-orange-500/30 bg-orange-500/10'
                  : 'border-sky-500/30 bg-sky-500/10',
                isTopScannedDigit && 'ring-1 ring-foreground/40'
              )}
            >
              <p className={cn(
                'text-sm font-bold tabular-nums',
                isHighDigit ? 'text-orange-500' : 'text-sky-500'
              )}>
                {digit}
              </p>
              <p className="mt-0.5 text-[10px] font-medium tabular-nums text-foreground">
                {formatPercent(percentage, 1, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
