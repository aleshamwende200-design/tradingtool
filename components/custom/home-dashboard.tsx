'use client';

import { useMemo, type ReactNode } from 'react';
import type { ActiveSymbol, AuthState, DerivAccount } from '@deriv/core';
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Clock3,
  Plus,
  Radio,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { SessionTransaction } from '@/hooks/use-session-transactions';
import type { SavedBot } from '@/components/strategy-builder';
import { getSymbolDisplayName } from '@/lib/active-symbols-display-names';
import {
  formatDate,
  formatInteger,
  formatPercent,
  formatSignedAmount,
} from '@/lib/locale-format';
import { cn } from '@/lib/utils';

type AutoTradingStatus = 'idle' | 'scanning' | 'running' | 'stopping';

interface HomeDashboardProps {
  authState: AuthState;
  activeAccount: DerivAccount | null;
  activeSymbol: ActiveSymbol | null;
  lastDigit: number | null;
  transactions: SessionTransaction[];
  savedBots: SavedBot[];
  autoTradingStatus: AutoTradingStatus;
  activeBotId: string | null;
  isConnected: boolean;
  onViewBots: () => void;
  onViewBotBuilder: () => void;
}

function MetricCard({
  icon,
  label,
  value,
  detail,
  valueClassName,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  detail: string;
  valueClassName?: string;
}) {
  return (
    <article className="min-w-0 rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-xs font-medium text-muted-foreground">{label}</p>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          {icon}
        </span>
      </div>
      <p className={cn('mt-3 truncate text-xl font-bold tabular-nums text-foreground sm:text-2xl', valueClassName)}>
        {value}
      </p>
      <p className="mt-1 truncate text-[11px] text-muted-foreground">{detail}</p>
    </article>
  );
}

function formatTradeTime(timestamp: number, locale: string): string {
  const date = new Date(timestamp * 1000);
  if (!Number.isFinite(date.getTime())) return '—';
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
}

export function HomeDashboard({
  authState,
  activeAccount,
  activeSymbol,
  lastDigit,
  transactions,
  savedBots,
  autoTradingStatus,
  activeBotId,
  isConnected,
  onViewBots,
  onViewBotBuilder,
}: HomeDashboardProps) {
  const { localize, locale } = useAppTranslations();
  const metrics = useMemo(() => {
    const now = new Date();
    const closedTrades = transactions.filter((trade) => trade.status === 'closed');
    const winningTrades = closedTrades.filter((trade) => trade.profit > 0).length;
    const tradesToday = transactions.filter(
      (trade) => new Date(trade.timestamp * 1000).toDateString() === now.toDateString()
    ).length;
    const sessionProfit = transactions.reduce(
      (total, trade) => total + (Number.isFinite(trade.profit) ? trade.profit : 0),
      0
    );

    return {
      closedTradeCount: closedTrades.length,
      sessionProfit,
      tradesToday,
      winRate: closedTrades.length > 0 ? (winningTrades / closedTrades.length) * 100 : null,
    };
  }, [transactions]);

  const performance = useMemo(() => {
    const chronological = [...transactions].sort(
      (left, right) => left.timestamp - right.timestamp || left.contractId - right.contractId
    );
    let cumulativeProfit = 0;
    const values = [0];
    for (const trade of chronological) {
      cumulativeProfit += Number.isFinite(trade.profit) ? trade.profit : 0;
      values.push(cumulativeProfit);
    }

    const points = values.length > 61 ? values.slice(-61) : values;
    let minimum = 0;
    let maximum = 0;
    for (const value of points) {
      minimum = Math.min(minimum, value);
      maximum = Math.max(maximum, value);
    }
    if (minimum === maximum) {
      minimum -= 1;
      maximum += 1;
    }

    const yFor = (value: number) => 20 + ((maximum - value) / (maximum - minimum)) * 150;
    const coordinates = points.map((value, index) => ({
      x: 42 + (index / Math.max(points.length - 1, 1)) * 568,
      y: yFor(value),
    }));
    const line = coordinates
      .map(({ x, y }, index) => `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(' ');
    const first = coordinates[0];
    const last = coordinates[coordinates.length - 1];
    const zeroY = yFor(0);

    return {
      line,
      area: first && last
        ? `${line} L ${last.x.toFixed(1)} ${zeroY.toFixed(1)} L ${first.x.toFixed(1)} ${zeroY.toFixed(1)} Z`
        : '',
      zeroY,
      hasTrades: transactions.length > 0,
      minimum,
      maximum,
    };
  }, [transactions]);

  const recentTrades = useMemo(
    () => [...transactions]
      .sort((left, right) => right.timestamp - left.timestamp)
      .slice(0, 5),
    [transactions]
  );
  const currency = transactions[0]?.currency || activeAccount?.currency || 'USD';
  const runningBots = autoTradingStatus === 'idle' ? 0 : 1;
  const activeBot = savedBots.find((bot) => bot.id === activeBotId);
  const marketName = activeSymbol
    ? getSymbolDisplayName(activeSymbol.underlying_symbol)
    : localize('Loading market');
  const isAuthenticated = authState === 'authenticated';
  const contractTypeLabels: Record<string, string> = {
    DIGITMATCH: localize('Digit Match'),
    DIGITDIFF: localize('Digit Differs'),
    DIGITOVER: localize('Digit Over'),
    DIGITUNDER: localize('Digit Under'),
    DIGITEVEN: localize('Digit Even'),
    DIGITODD: localize('Digit Odd'),
  };

  return (
    <section
      id="dashboard-overview"
      aria-labelledby="home-dashboard-title"
      className="mx-auto w-full max-w-[1280px] space-y-4 px-3 py-3 sm:space-y-5 sm:px-6 sm:py-5"
    >
      <header className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <h2
              id="home-dashboard-title"
              className="shrink-0 text-lg font-bold tracking-tight text-foreground sm:text-xl"
            >
              {localize('Dashboard')}
            </h2>
            <span className="hidden max-w-[180px] truncate rounded-full border border-border bg-card/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
              {activeAccount
                ? localize(activeAccount.account_type === 'demo' ? 'Demo account' : 'Real account')
                : localize('Market overview')}
              {activeAccount?.currency ? ` · ${activeAccount.currency}` : ''}
            </span>
          </div>
          <p className="truncate text-xs text-muted-foreground">
            {localize('A live view of your market, bots, and session results.')}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="h-8 px-2.5 text-xs sm:h-9 sm:px-3"
            onClick={onViewBots}
          >
            <Bot />
            {localize('Manage bots')}
          </Button>
          <Button
            type="button"
            size="sm"
            className="h-8 px-2.5 text-xs sm:h-9 sm:px-3"
            onClick={onViewBotBuilder}
          >
            <Plus />
            {localize('Create bot')}
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-3 rounded-xl border border-primary/25 bg-primary/[0.04] p-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
            <Radio className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-foreground">
              {isConnected
                ? localize('Live market feed connected')
                : localize('Waiting for live market feed')}
            </p>
            <p className="truncate text-[11px] text-muted-foreground">
              {isAuthenticated
                ? localize('Your saved bots only trade when you start them.')
                : localize('Log in to start bots; your saved strategies stay in this browser.')}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-[11px] text-muted-foreground">
          <span className={cn('h-2 w-2 rounded-full', isConnected ? 'bg-emerald-500' : 'bg-amber-500')} />
          <span className="max-w-[200px] truncate">{marketName}</span>
          <span className="text-border">·</span>
          <span>
            {localize('Last digit')} {lastDigit ?? '—'}
          </span>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard
          icon={<Bot className="h-4 w-4" />}
          label={localize('Running bots')}
          value={formatInteger(runningBots, locale)}
          detail={activeBot?.name || localize('Saved bots: {{count}}', { count: savedBots.length })}
          valueClassName={runningBots > 0 ? 'text-emerald-500' : undefined}
        />
        <MetricCard
          icon={<Activity className="h-4 w-4" />}
          label={localize('Session P/L')}
          value={`${formatSignedAmount(metrics.sessionProfit, locale)} ${currency}`}
          detail={localize('From this account session')}
          valueClassName={metrics.sessionProfit > 0
            ? 'text-emerald-500'
            : metrics.sessionProfit < 0
              ? 'text-destructive'
              : undefined}
        />
        <MetricCard
          icon={<Clock3 className="h-4 w-4" />}
          label={localize('Trades today')}
          value={formatInteger(metrics.tradesToday, locale)}
          detail={localize('{{count}} trades this session', { count: transactions.length })}
        />
        <MetricCard
          icon={<TrendingUp className="h-4 w-4" />}
          label={localize('Win rate')}
          value={metrics.winRate === null ? '—' : formatPercent(metrics.winRate, 0, locale)}
          detail={metrics.closedTradeCount === 0
            ? localize('No closed trades yet')
            : localize('Based on {{count}} closed trades', { count: metrics.closedTradeCount })}
        />
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)]">
        <section className="min-w-0 rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-foreground">{localize('Performance')}</h3>
              <p className="text-[11px] text-muted-foreground">
                {localize('Cumulative P/L during this session')}
              </p>
            </div>
            <span className="shrink-0 rounded-md border border-border bg-background/70 px-2 py-1 text-[10px] text-muted-foreground">
              {localize('This session')}
            </span>
          </div>

          <div className="mt-3">
            <p className={cn(
              'text-lg font-bold tabular-nums sm:text-xl',
              metrics.sessionProfit > 0
                ? 'text-emerald-500'
                : metrics.sessionProfit < 0
                  ? 'text-destructive'
                  : 'text-foreground'
            )}>
              {formatSignedAmount(metrics.sessionProfit, locale)} {currency}
            </p>
            <p className="text-[10px] text-muted-foreground">
              {localize('Current session result')}
            </p>
          </div>

          {performance.hasTrades ? (
            <svg
              role="img"
              aria-label={localize('Cumulative session profit and loss chart')}
              viewBox="0 0 640 210"
              preserveAspectRatio="none"
              className="mt-2 h-44 w-full overflow-visible sm:h-52"
            >
              <defs>
                <linearGradient id="session-performance-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={metrics.sessionProfit >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                    stopOpacity="0.22"
                  />
                  <stop
                    offset="100%"
                    stopColor={metrics.sessionProfit >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              {[30, 75, 120, 165].map((y) => (
                <line
                  key={y}
                  x1="42"
                  x2="610"
                  y1={y}
                  y2={y}
                  stroke="hsl(var(--border))"
                  strokeDasharray="3 5"
                  strokeWidth="1"
                />
              ))}
              <line
                x1="42"
                x2="610"
                y1={performance.zeroY}
                y2={performance.zeroY}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
                strokeWidth="1"
              />
              <text x="2" y="34" className="fill-muted-foreground text-[10px]">
                {formatSignedAmount(performance.maximum, locale)}
              </text>
              <text x="2" y="169" className="fill-muted-foreground text-[10px]">
                {formatSignedAmount(performance.minimum, locale)}
              </text>
              <path d={performance.area} fill="url(#session-performance-fill)" />
              <path
                d={performance.line}
                fill="none"
                stroke={metrics.sessionProfit >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              <text x="42" y="202" className="fill-muted-foreground text-[10px]">
                {localize('Start')}
              </text>
              <text x="610" y="202" textAnchor="end" className="fill-muted-foreground text-[10px]">
                {localize('Now')}
              </text>
            </svg>
          ) : (
            <div className="mt-3 flex h-44 flex-col items-center justify-center rounded-lg border border-dashed border-border/80 px-4 text-center sm:h-52">
              <BarChart3 className="h-6 w-6 text-muted-foreground/70" />
              <p className="mt-2 text-xs font-medium text-foreground">
                {localize('Your performance chart will appear after your first trade.')}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                {localize('Start a saved bot to begin tracking session results.')}
              </p>
            </div>
          )}
        </section>

        <section className="min-w-0 rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-foreground">{localize('Recent trades')}</h3>
              <p className="text-[11px] text-muted-foreground">{localize('Latest account activity')}</p>
            </div>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              className="h-8 shrink-0 px-2 text-[11px]"
              onClick={onViewBotBuilder}
            >
              {localize('All trades')}
              <ArrowUpRight />
            </Button>
          </div>

          {recentTrades.length > 0 ? (
            <ul className="mt-3 divide-y divide-border/70">
              {recentTrades.map((trade) => (
                <li
                  key={trade.contractId}
                  className="flex items-center justify-between gap-3 py-2.5 first:pt-1"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                      trade.profit >= 0
                        ? 'bg-emerald-500/10 text-emerald-500'
                        : 'bg-destructive/10 text-destructive'
                    )}>
                      {trade.profit >= 0
                        ? <ArrowUpRight className="h-4 w-4" />
                        : <ArrowDownRight className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-foreground">
                        {contractTypeLabels[trade.contractType] ?? trade.contractType}
                        {' · '}
                        {getSymbolDisplayName(trade.symbol)}
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">
                        {trade.status === 'open' ? localize('Open') : localize('Closed')}
                        {' · '}
                        {formatTradeTime(trade.timestamp, locale)}
                      </p>
                    </div>
                  </div>
                  <p className={cn(
                    'shrink-0 text-xs font-bold tabular-nums',
                    trade.profit > 0
                      ? 'text-emerald-500'
                      : trade.profit < 0
                        ? 'text-destructive'
                        : 'text-muted-foreground'
                  )}>
                    {formatSignedAmount(trade.profit, locale)} {trade.currency}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3 flex h-44 flex-col items-center justify-center rounded-lg border border-dashed border-border/80 px-4 text-center">
              <Activity className="h-6 w-6 text-muted-foreground/70" />
              <p className="mt-2 text-xs font-medium text-foreground">
                {localize('No trades to show yet.')}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                {isAuthenticated
                  ? localize('Your trades will appear here after you start a bot or place a trade.')
                  : localize('Log in to view your account activity.')}
              </p>
            </div>
          )}
        </section>
      </div>

      <section className="rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-foreground">{localize('Your bots')}</h3>
            <p className="text-[11px] text-muted-foreground">
              {localize('{{count}} saved bots', { count: savedBots.length })}
            </p>
          </div>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-8 shrink-0 px-2 text-[11px]"
            onClick={onViewBots}
          >
            {localize('View all')}
            <ArrowUpRight />
          </Button>
        </div>

        {savedBots.length > 0 ? (
          <ul className="mt-3 divide-y divide-border/70">
            {savedBots.slice(0, 4).map((bot) => {
              const isActive = bot.id === activeBotId && autoTradingStatus !== 'idle';
              return (
                <li key={bot.id} className="flex min-w-0 items-center justify-between gap-3 py-3 first:pt-2">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <Bot className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-foreground">{bot.name}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{bot.description}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className={cn(
                      'rounded-full border px-2 py-0.5 text-[10px] font-medium',
                      isActive
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'
                        : 'border-border bg-background/70 text-muted-foreground'
                    )}>
                      {isActive
                        ? localize(autoTradingStatus === 'scanning' ? 'Scanning' : autoTradingStatus === 'stopping' ? 'Stopping' : 'Running')
                        : localize('Ready')}
                    </span>
                    <span className="hidden text-[10px] text-muted-foreground sm:inline">
                      {formatDate(new Date(bot.createdAt), locale)}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-3 flex flex-col items-start gap-3 rounded-lg border border-dashed border-border/80 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Bot className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground">{localize('No bots saved yet.')}</p>
                <p className="text-[10px] text-muted-foreground">
                  {localize('Build a strategy to keep it ready in your Bots tab.')}
                </p>
              </div>
            </div>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-8 shrink-0 px-2.5 text-xs"
              onClick={onViewBotBuilder}
            >
              <Plus />
              {localize('Create bot')}
            </Button>
          </div>
        )}
      </section>
    </section>
  );
}
