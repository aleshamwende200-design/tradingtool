'use client';

import { useMemo, type ReactNode } from 'react';
import type { ActiveSymbol, AuthState, DerivAccount } from '@deriv/core';
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Clock3,
  Plus,
  Radar,
  Radio,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { SessionTransaction } from '@/hooks/use-session-transactions';
import type { AutoTradingScanProgress } from '@/hooks/use-digits-trading';
import type { SavedBot } from '@/components/strategy-builder';
import { MarketScannerNotification } from '@/components/custom/market-scanner-notification';
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
  autoTradingScanProgress: AutoTradingScanProgress | null;
  autoTradingMarket: string | null;
  autoTradingTradeCount: number;
  activeBotId: string | null;
  isConnected: boolean;
  onViewBots: () => void;
  onStopAutoTrading: () => void;
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
  autoTradingScanProgress,
  autoTradingMarket,
  autoTradingTradeCount,
  activeBotId,
  isConnected,
  onViewBots,
  onStopAutoTrading,
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
            onClick={onViewBots}
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
                : localize('Log in to run bots; your saved strategies stay in this browser.')}
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
        <section className="flex min-w-0 flex-col rounded-xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-foreground">{localize('Market scanner')}</h3>
              <p className="text-[11px] text-muted-foreground">
                {localize('Live scanner for your active bot')}
              </p>
            </div>
            <span className={cn(
              'shrink-0 rounded-md border px-2 py-1 text-[10px]',
              autoTradingStatus === 'idle'
                ? 'border-border bg-background/70 text-muted-foreground'
                : 'border-emerald-500/30 bg-emerald-500/10 font-semibold text-emerald-500'
            )}>
              {autoTradingStatus === 'idle'
                ? localize('Ready')
                : autoTradingTradeCount > 0 && !autoTradingScanProgress
                  ? localize('Trade active')
                  : localize('Live')}
            </span>
          </div>

          <div className="mt-4 flex-1">
            {autoTradingStatus !== 'idle' && autoTradingScanProgress ? (
              <MarketScannerNotification
                progress={autoTradingScanProgress}
                status={autoTradingStatus}
                onStop={onStopAutoTrading}
              />
            ) : autoTradingStatus !== 'idle' ? (
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.04] px-4 py-5 text-center">
                <Radar className="market-scan-spinner h-7 w-7 text-primary" />
                <p className="mt-3 text-xs font-semibold text-foreground">
                  {autoTradingStatus === 'stopping'
                    ? localize('Stopping bot...')
                    : autoTradingTradeCount > 0
                      ? localize('Trade in progress')
                      : localize('Connecting live feeds')}
                </p>
                <p className="mt-1 max-w-sm text-[10px] text-muted-foreground">
                  {autoTradingTradeCount > 0
                    ? localize('The next fresh market scan starts after the current trade settles.')
                    : autoTradingMarket
                      ? localize('Current market: {{market}}', { market: autoTradingMarket })
                      : localize('Connecting to open continuous-index markets.')}
                </p>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="mt-3 h-8 border-destructive/40 text-destructive hover:bg-destructive/10"
                  onClick={onStopAutoTrading}
                  disabled={autoTradingStatus === 'stopping'}
                >
                  {autoTradingStatus === 'stopping'
                    ? localize('Stopping...')
                    : localize('Stop scan')}
                </Button>
              </div>
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg border border-dashed border-border/80 px-4 py-5 text-center">
                <Radar className="h-7 w-7 text-muted-foreground/70" />
                <p className="mt-3 text-xs font-medium text-foreground">
                  {localize('Scanner is ready')}
                </p>
                <p className="mt-1 max-w-sm text-[10px] text-muted-foreground">
                  {localize('Run a saved bot to scan live ticks across open markets using its entry rule.')}
                </p>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="mt-3 h-8 px-3 text-[11px]"
                  onClick={onViewBots}
                >
                  {localize('Manage bots')}
                </Button>
              </div>
            )}
          </div>
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
              onClick={onViewBots}
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
                        {' · '}
                        {localize('Last digit')} {trade.lastDigit ?? '—'}
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
              onClick={onViewBots}
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
