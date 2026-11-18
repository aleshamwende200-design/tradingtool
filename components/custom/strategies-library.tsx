'use client';

import { useMemo, useState } from 'react';
import { Activity, ArrowUpRight, BarChart3, Bot, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { compileUserTradingStrategy, type StrategyCompilation } from '@/lib/user-trading-strategy';

export interface StrategyTemplate {
  id: string;
  name: string;
  category: 'Parity' | 'High / low' | 'Single digit';
  contract: string;
  entry: string;
  summary: string;
  description: string;
}

const STRATEGY_TEMPLATES: StrategyTemplate[] = [
  {
    id: 'over-0-after-loss-run',
    name: 'Over 0',
    category: 'High / low',
    contract: 'Over 0',
    entry: '2 consecutive 0 digits',
    summary: 'Wait for two consecutive losing digits for Over 0 before scanning for the next entry.',
    description: 'over 0 after 2 consecutive losing digits',
  },
  {
    id: 'over-1-after-loss-run',
    name: 'Over 1',
    category: 'High / low',
    contract: 'Over 1',
    entry: '2 consecutive digits from 0 to 1',
    summary: 'Wait for two consecutive losing digits for Over 1 before scanning for the next entry.',
    description: 'over 1 after 2 consecutive losing digits',
  },
  {
    id: 'over-2-after-loss-run',
    name: 'Over 2',
    category: 'High / low',
    contract: 'Over 2',
    entry: '2 consecutive digits from 0 to 2',
    summary: 'Wait for two consecutive losing digits for Over 2 before scanning for the next entry.',
    description: 'over 2 after 2 consecutive losing digits',
  },
  {
    id: 'under-9-after-loss-run',
    name: 'Under 9',
    category: 'High / low',
    contract: 'Under 9',
    entry: '2 consecutive 9 digits',
    summary: 'Wait for two consecutive losing digits for Under 9 before scanning for the next entry.',
    description: 'under 9 after 2 consecutive losing digits',
  },
  {
    id: 'under-8-after-loss-run',
    name: 'Under 8',
    category: 'High / low',
    contract: 'Under 8',
    entry: '2 consecutive digits from 8 to 9',
    summary: 'Wait for two consecutive losing digits for Under 8 before scanning for the next entry.',
    description: 'under 8 after 2 consecutive losing digits',
  },
  {
    id: 'under-7-after-loss-run',
    name: 'Under 7',
    category: 'High / low',
    contract: 'Under 7',
    entry: '2 consecutive digits from 7 to 9',
    summary: 'Wait for two consecutive losing digits for Under 7 before scanning for the next entry.',
    description: 'under 7 after 2 consecutive losing digits',
  },
  {
    id: 'even-after-loss-run',
    name: 'Even',
    category: 'Parity',
    contract: 'Even',
    entry: '2 consecutive odd digits',
    summary: 'Wait for two consecutive losing digits for Even before scanning for the next entry.',
    description: 'even after 2 consecutive losing digits',
  },
  {
    id: 'odd-after-loss-run',
    name: 'Odd',
    category: 'Parity',
    contract: 'Odd',
    entry: '2 consecutive even digits',
    summary: 'Wait for two consecutive losing digits for Odd before scanning for the next entry.',
    description: 'odd after 2 consecutive losing digits',
  },
  {
    id: 'differs-from-5-after-loss-run',
    name: 'Differs',
    category: 'Single digit',
    contract: 'Differs from 5',
    entry: '2 consecutive 5 digits',
    summary: 'Use 5 as the differs barrier and wait for two consecutive losses before scanning for entry.',
    description: 'differs from 5 after 2 consecutive losing digits',
  },
];

type StrategyFilter = 'All' | StrategyTemplate['category'];

const FILTERS: StrategyFilter[] = [
  'All',
  'Parity',
  'High / low',
  'Single digit',
];

const CATEGORY_ICONS = {
  Parity: Activity,
  'High / low': Zap,
  'Single digit': Activity,
} satisfies Record<StrategyTemplate['category'], typeof Activity>;

interface StrategiesLibraryProps {
  onUseTemplate: (template: StrategyTemplate) => void;
  canSave: boolean;
  storageError: string | null;
  onCreateBot: (name: string, prompt: string) => boolean;
}

export function StrategiesLibrary({
  onUseTemplate,
  canSave,
  storageError,
  onCreateBot,
}: StrategiesLibraryProps) {
  const { localize, locale } = useAppTranslations();
  const [filter, setFilter] = useState<StrategyFilter>('All');
  const [query, setQuery] = useState('');
  const [promptFormOpen, setPromptFormOpen] = useState(false);
  const [botName, setBotName] = useState('');
  const [botPrompt, setBotPrompt] = useState('');
  const [compilation, setCompilation] = useState<StrategyCompilation | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
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
            {localize('Choose a starting rule, customize it in Bots, and save it as a bot.')}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="w-full shrink-0 sm:w-auto"
          aria-expanded={promptFormOpen}
          aria-controls="strategy-prompt-creator"
          onClick={() => setPromptFormOpen((open) => !open)}
        >
          <Bot />
          {localize('Create a bot with a prompt')}
        </Button>
      </header>

      {promptFormOpen && (
        <section
          id="strategy-prompt-creator"
          aria-labelledby="strategy-prompt-heading"
          className="mt-5 space-y-4 rounded-xl border border-primary/30 bg-primary/[0.03] p-4 sm:p-5"
        >
          <div>
            <h2 id="strategy-prompt-heading" className="text-sm font-bold text-foreground">
              {localize('Describe the bot you want')}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {localize('Review your prompt before saving. The exact prompt is saved as the bot strategy and shown in the Bots tab.')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="prompt-bot-name" className="text-xs font-medium text-foreground">
                {localize('Bot name (optional)')}
              </label>
              <input
                id="prompt-bot-name"
                value={botName}
                onChange={(event) => {
                  setBotName(event.target.value);
                  setSavedNotice(null);
                  setSaveError(null);
                }}
                placeholder={localize('Leave blank to use the prompt')}
                maxLength={80}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="prompt-bot-description" className="text-xs font-medium text-foreground">
                {localize('Bot prompt')}
              </label>
              <textarea
                id="prompt-bot-description"
                value={botPrompt}
                onChange={(event) => {
                  setBotPrompt(event.target.value);
                  setCompilation(null);
                  setSavedNotice(null);
                  setSaveError(null);
                }}
                placeholder={localize('Example: Trade over 1 after 3 consecutive even digits')}
                rows={3}
                maxLength={500}
                className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                {localize('Use a digit contract with an entry condition such as a specific digit, sequence, parity/range run, or consecutive losing digits for that contract.')}
              </p>
            </div>
          </div>

          {compilation?.strategy && (
            <div className="space-y-1 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-xs">
              <p className="font-semibold text-foreground">{localize('Prompt ready for review')}</p>
              <p className="text-muted-foreground">
                {localize('Contract: {{contract}}', {
                  contract: compilation.strategy.contractDescription,
                })}
              </p>
              <p className="text-muted-foreground">
                {localize('Entry: {{condition}}', {
                  condition: compilation.strategy.triggers.map((trigger) => trigger.description).join(' and '),
                })}
              </p>
            </div>
          )}
          {compilation?.error && (
            <p role="alert" className="text-xs text-destructive">
              {localize(compilation.error)}
            </p>
          )}
          {storageError && (
            <p role="alert" className="text-xs text-destructive">
              {localize('Saved bots could not be stored: {{error}}', { error: storageError })}
            </p>
          )}
          {saveError && <p role="alert" className="text-xs text-destructive">{saveError}</p>}
          {savedNotice && <p role="status" className="text-xs text-emerald-500">{savedNotice}</p>}

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => {
                setCompilation(compileUserTradingStrategy(botPrompt));
                setSavedNotice(null);
                setSaveError(null);
              }}
              disabled={!botPrompt.trim()}
            >
              {localize('Review prompt')}
            </Button>
            {compilation?.strategy && (
              <Button
                type="button"
                className="flex-1"
                disabled={!canSave}
                onClick={() => {
                  const trimmedPrompt = botPrompt.trim();
                  const derivedName = trimmedPrompt.length > 80
                    ? `${trimmedPrompt.slice(0, 77).trimEnd()}...`
                    : trimmedPrompt;
                  const saved = onCreateBot(botName.trim() || derivedName, trimmedPrompt);
                  if (!saved) {
                    setSaveError(localize('The bot could not be saved. Check browser storage and try again.'));
                    return;
                  }
                  setBotName('');
                  setBotPrompt('');
                  setCompilation(null);
                  setSavedNotice(localize('Bot saved with this prompt. Find it in the Bots tab.'));
                  setSaveError(null);
                }}
              >
                {localize('Save bot')}
              </Button>
            )}
          </div>
        </section>
      )}

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
