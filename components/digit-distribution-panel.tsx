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
  const hasPercentages = digitStats.totalTicks > 0 && digitStats.percentages.length > 0;
  const highestPercentage = hasPercentages ? Math.max(...digitStats.percentages) : null;
  const lowestPercentage = hasPercentages ? Math.min(...digitStats.percentages) : null;
  const highestDigits = highestPercentage === null
    ? []
    : digitStats.percentages.flatMap((percentage, digit) =>
        percentage === highestPercentage ? [digit] : []
      );
  const lowestDigits = lowestPercentage === null
    ? []
    : digitStats.percentages.flatMap((percentage, digit) =>
        percentage === lowestPercentage ? [digit] : []
      );
  const hasDistinctExtremes =
    highestPercentage !== null &&
    lowestPercentage !== null &&
    highestPercentage !== lowestPercentage;

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
        {highestPercentage !== null && lowestPercentage !== null && (
          <div className="flex flex-wrap gap-2 text-[10px] font-medium">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-500">
              {localize('Highest: {{digits}} · {{percentage}}', {
                digits: highestDigits.join(', '),
                percentage: formatPercent(highestPercentage, 1, locale),
              })}
            </span>
            <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2 py-1 text-rose-500">
              {localize('Lowest: {{digits}} · {{percentage}}', {
                digits: lowestDigits.join(', '),
                percentage: formatPercent(lowestPercentage, 1, locale),
              })}
            </span>
          </div>
        )}
      </header>

      <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
        {digitStats.percentages.map((percentage, digit) => {
          const isHighestDigit = percentage === highestPercentage;
          const isLowestDigit = percentage === lowestPercentage;
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
                'rounded-lg border border-border/80 bg-background/70 px-1.5 py-2 text-center',
                hasDistinctExtremes && isHighestDigit &&
                  'border-emerald-500/50 bg-emerald-500/10',
                hasDistinctExtremes && isLowestDigit &&
                  'border-rose-500/50 bg-rose-500/10',
                isTopScannedDigit && 'ring-1 ring-foreground/40'
              )}
            >
              <p className={cn(
                'text-sm font-bold tabular-nums',
                hasDistinctExtremes && isHighestDigit && 'text-emerald-500',
                hasDistinctExtremes && isLowestDigit && 'text-rose-500'
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
