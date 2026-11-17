'use client';

import { useMemo, useState } from 'react';
import { Activity, ArrowUpRight, BarChart3, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';

export interface StrategyTemplate {
  id: string;
  name: string;
  category: 'Parity' | 'High / low' | 'Sequences' | 'Single digit';
  contract: string;
  entry: string;
  summary: string;
  description: string;
}

const STRATEGY_TEMPLATES: StrategyTemplate[] = [
  {
    id: 'even-after-odd-run',
    name: 'Even after an odd run',
    category: 'Parity',
    contract: 'Even',
    entry: '3 consecutive odd digits',
    summary: 'A parity-based entry rule you can adjust in Bot Builder.',
    description: 'even after 3 consecutive odd digits',
  },
  {
    id: 'odd-after-even-run',
    name: 'Odd after an even run',
    category: 'Parity',
    contract: 'Odd',
    entry: '3 consecutive even digits',
    summary: 'Use an even-digit sequence as the trigger for an odd contract.',
    description: 'odd after 3 consecutive even digits',
  },
  {
    id: 'over-after-high-run',
    name: 'Over after a high run',
    category: 'High / low',
    contract: 'Over 3',
    entry: '2 consecutive high digits',
    summary: 'Pair a high-digit run with a configurable Over contract.',
    description: 'over 3 after 2 consecutive high digits',
  },
  {
    id: 'under-after-low-run',
    name: 'Under after a low run',
    category: 'High / low',
    contract: 'Under 6',
    entry: '2 consecutive low digits',
    summary: 'Start with a low-digit trigger and review the Under barrier.',
    description: 'under 6 after 2 consecutive low digits',
  },
  {
    id: 'sequence-123',
    name: 'Sequence 1, 2, 3',
    category: 'Sequences',
    contract: 'Differs from 5',
    entry: '1 → 2 → 3',
    summary: 'Use a specific three-digit sequence as the entry condition.',
    description: 'differs from 5 after the sequence 1, 2, 3',
  },
  {
    id: 'sequence-78',
    name: 'Sequence 7, 8',
    category: 'Sequences',
    contract: 'Differs from 2',
    entry: '7 → 8',
    summary: 'A shorter sequence template with an editable differs barrier.',
    description: 'differs from 2 after the sequence 7, 8',
  },
  {
    id: 'under-after-digit-1',
    name: 'Under after digit 1',
    category: 'Single digit',
    contract: 'Under 6',
    entry: 'Last digit is 1',
    summary: 'Trigger from one exact digit and customize the contract barrier.',
    description: 'under 6 when the last digit is 1',
  },
  {
    id: 'over-after-low-digit',
    name: 'Over after a low digit',
    category: 'High / low',
    contract: 'Over 2',
    entry: 'Last digit is low',
    summary: 'Use the low range (0–4) as a simple entry condition.',
    description: 'over 2 when the last digit is low',
  },
];

type StrategyFilter = 'All' | StrategyTemplate['category'];

const FILTERS: StrategyFilter[] = [
  'All',
  'Parity',
  'High / low',
  'Sequences',
  'Single digit',
];

const CATEGORY_ICONS = {
  Parity: Activity,
  'High / low': Zap,
  Sequences: BarChart3,
  'Single digit': Activity,
} satisfies Record<StrategyTemplate['category'], typeof Activity>;

interface StrategiesLibraryProps {
  onUseTemplate: (template: StrategyTemplate) => void;
  onCreateCustom: () => void;
}

export function StrategiesLibrary({
  onUseTemplate,
  onCreateCustom,
}: StrategiesLibraryProps) {
  const { localize, locale } = useAppTranslations();
  const [filter, setFilter] = useState<StrategyFilter>('All');
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase(locale);
  const visibleStrategies = useMemo(
    () =>
      STRATEGY_TEMPLATES.filter((strategy) => {
        const matchesFilter = filter === 'All' || strategy.category === filter;
        const matchesQuery =
          !normalizedQuery ||
          [
            strategy.name,
            strategy.category,
            strategy.contract,
            strategy.entry,
            strategy.summary,
          ]
            .join(' ')
            .toLocaleLowerCase(locale)
            .includes(normalizedQuery);
        return matchesFilter && matchesQuery;
      }),
    [filter, locale, normalizedQuery]
  );

  return (
    <section
      id="strategies-library"
      aria-labelledby="strategies-heading"
      className="mx-auto w-full max-w-[1600px] px-3 py-5 pb-24 sm:px-6 sm:py-7"
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <BarChart3 className="h-3.5 w-3.5" />
            {localize('Strategy library')}
          </div>
          <h1 id="strategies-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {localize('Strategies')}
          </h1>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {localize('Choose a starting rule, customize it in Bot Builder, and save it as a bot.')}
          </p>
        </div>
        <Button type="button" variant="outline" className="w-full shrink-0 sm:w-auto" onClick={onCreateCustom}>
          {localize('Create custom strategy')}
          <ArrowUpRight />
        </Button>
      </header>

      <div className="mt-5 flex flex-col gap-3 rounded-xl border border-border/80 bg-card/70 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div
          role="group"
          aria-label={localize('Filter strategies')}
          className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
        >
          {FILTERS.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
                  selected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                {localize(item)}
              </button>
            );
          })}
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <label className="sr-only" htmlFor="strategy-search">{localize('Search strategies')}</label>
          <input
            id="strategy-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={localize('Search strategies')}
            className="h-10 w-full rounded-full border border-input bg-background pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {localize('{{count}} strategies', { count: visibleStrategies.length })}
        </p>
        <p className="hidden text-[11px] text-muted-foreground sm:block">
          {localize('Templates are starting points, not performance guarantees.')}
        </p>
      </div>

      {visibleStrategies.length > 0 ? (
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleStrategies.map((strategy) => {
            const Icon = CATEGORY_ICONS[strategy.category];
            return (
              <article
                key={strategy.id}
                className="flex min-w-0 flex-col rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-colors hover:border-primary/40 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {localize(strategy.category)}
                    </span>
                    <h2 className="mt-0.5 text-sm font-bold leading-snug text-foreground sm:text-base">
                      {localize(strategy.name)}
                    </h2>
                  </div>
                </div>

                <p className="mt-3 min-h-10 text-xs leading-relaxed text-muted-foreground">
                  {localize(strategy.summary)}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-border/70 bg-background/70 p-3">
                  <div className="min-w-0">
                    <dt className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {localize('Contract')}
                    </dt>
                    <dd className="mt-1 break-words text-xs font-semibold text-foreground">
                      {localize(strategy.contract)}
                    </dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {localize('Entry rule')}
                    </dt>
                    <dd className="mt-1 break-words text-xs font-semibold text-foreground">
                      {localize(strategy.entry)}
                    </dd>
                  </div>
                </dl>

                <Button
                  type="button"
                  className="mt-4 w-full"
                  onClick={() => onUseTemplate(strategy)}
                >
                  {localize('Use template')}
                  <ArrowUpRight />
                </Button>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-3 rounded-xl border border-dashed border-border px-4 py-12 text-center">
          <p className="text-sm font-semibold text-foreground">{localize('No strategies found.')}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {localize('Try a different search or category.')}
          </p>
          <Button
            type="button"
            variant="link"
            className="mt-2"
            onClick={() => {
              setFilter('All');
              setQuery('');
            }}
          >
            {localize('Clear filters')}
          </Button>
        </div>
      )}

      <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground sm:hidden">
        {localize('Templates are starting points, not performance guarantees. Review your market and risk settings before saving or running a bot.')}
      </p>
    </section>
  );
}
