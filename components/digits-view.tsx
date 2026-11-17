'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Ban,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Radio,
  Settings2,
  X,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';
import { Localize } from '@deriv-com/translations';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer, FooterBar } from '@/components/custom/footer';
import { Header, SettingsPanelFields } from '@/components/custom/header';
import { LoginPromptDialog } from '@/components/custom/login-prompt-dialog';
import { PinnedBuyBar } from '@/components/custom/pinned-buy-bar';
import { ThresholdResultDialog } from '@/components/custom/threshold-result-dialog';
import { MarketScannerNotification } from '@/components/custom/market-scanner-notification';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { formatAmount } from '@/lib/locale-format';
import { getSymbolDisplayName } from '@/lib/active-symbols-display-names';
import { cn } from '@/lib/utils';
import { CurrentTickDisplay } from './current-tick-display';
import { DigitStatsBar } from './digit-stats-bar';
import { ContractModeSelector, TradeControls } from './trade-controls';
import { RiskManagementControls } from './risk-management-controls';
import { BotBuilder, SavedBotsPanel, useSavedBots } from './strategy-builder';
import { ConfigurableDigitsControls, ConfigurableBuyButton } from './configurable-digits-controls';
import { TradeTypeChips } from '@/components/custom/trade-type-chips';
import { SymbolSelector } from '@/components/custom/symbol-selector';
import { TransactionsPanel } from '@/components/custom/transactions-panel';
import type {
  AuthState,
  DerivAccount,
  ActiveSymbol,
  Tick,
  ProposalInfo,
  DurationLimits,
  BuyResult,
} from '@deriv/core';
import type { ContractMode, TradeType, DigitStats } from '../lib/types';
import type { MartingaleMode } from '../lib/martingale';
import type { OpenPosition } from '@/hooks/use-open-positions';
import type {
  AutoTradingScanProgress,
  AutoTradingThresholdResult,
} from '@/hooks/use-digits-trading';
import { compileUserTradingStrategy } from '@/lib/user-trading-strategy';
import type { UserTradingStrategy } from '@/lib/user-trading-strategy';
import type { SavedBot } from './strategy-builder';
import { useSessionTransactions } from '@/hooks/use-session-transactions';
import { ALL_CONTROL_KEYS } from '../lib/app-config';
import type { ControlKey, DigitsAppConfig } from '../lib/app-config';

/**
 * Desktop no-code column split. Digits has no chart, so the market and
 * contract-selection blocks (trade type, contract mode, symbol, tick, digit
 * stats) stand in for it on the left, mirroring the
 * chart-left / controls-right desktop layout of rise-fall and accumulators —
 * and the 3-column desktop the standard Digits layout has always had. The
 * blocks keep their configured relative order inside each column; the
 * drag-to-reorder editor is phone-framed, so the single mobile column stays
 * the source of truth and desktop is a grouped projection of it.
 */
const MARKET_COLUMN_KEYS: ControlKey[] = ['tradeType', 'contractMode', 'symbol', 'tick', 'digitStats'];
const CONTROLS_COLUMN_KEYS: ControlKey[] = ALL_CONTROL_KEYS.filter(
  (key) => !MARKET_COLUMN_KEYS.includes(key)
);

function getDigitTradeTypeOptions(
  localize: (text: string) => string
): { value: TradeType; label: string }[] {
  return [
    { value: 'matches-differs', label: localize('Differs') },
    { value: 'over-under', label: localize('Over/Under') },
    { value: 'even-odd', label: localize('Even/Odd') },
  ];
}

type DashboardPage = 'home' | 'strategies' | 'bots' | 'bot-builder';

function DashboardSidebar({
  appName,
  authState,
  activePage,
  onPageChange,
  isMobile,
  isOpen,
  onOpenChange,
  isCollapsed,
  onToggleCollapsed,
}: {
  appName?: string;
  authState: AuthState;
  activePage: DashboardPage;
  onPageChange: (page: DashboardPage) => void;
  isMobile: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isCollapsed: boolean;
  onToggleCollapsed: () => void;
}) {
  const resolvedName =
    appName?.trim() || process.env.NEXT_PUBLIC_DERIV_APP_NAME?.trim() || 'Pulse Factor';
  const { localize } = useAppTranslations();
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const navigation = [
    { id: 'home', label: 'Home', icon: Activity },
    { id: 'strategies', label: 'Strategies', icon: BarChart3 },
    { id: 'bots', label: 'Bots', icon: Zap },
    { id: 'bot-builder', label: 'Bot Builder', icon: ArrowUpRight },
  ] as const;

  const renderSidebarContents = (collapsed: boolean, mobile: boolean) => (
    <>
      <div
        className={cn(
          'flex shrink-0 items-center border-b border-border py-4',
          collapsed ? 'justify-between px-1' : 'justify-between gap-3 px-4'
        )}
      >
        <div className={cn('flex min-w-0 items-center gap-3', collapsed && 'justify-center')}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Activity className="h-5 w-5" />
          </span>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-foreground">{resolvedName}</p>
              <p className="text-[11px] text-muted-foreground">
                <Localize i18n_default_text="Live trading" />
              </p>
            </div>
          )}
        </div>
        {mobile ? (
          <button
            type="button"
            aria-label={localize('Close menu')}
            onClick={() => onOpenChange(false)}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            aria-label={localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar')}
            title={localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar')}
            onClick={onToggleCollapsed}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
        <nav aria-label="Main navigation" className="space-y-1">
          {navigation.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-current={activePage === id ? 'page' : undefined}
              aria-label={collapsed ? localize(label) : undefined}
              title={collapsed ? localize(label) : undefined}
              onClick={() => {
                onPageChange(id);
                if (window.location.hash) {
                  window.history.replaceState(
                    window.history.state,
                    '',
                    `${window.location.pathname}${window.location.search}`
                  );
                }
                if (mobile) onOpenChange(false);
              }}
              className={cn(
                'flex min-h-10 items-center gap-3 rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors',
                collapsed && 'justify-center px-0',
                activePage === id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <Localize i18n_default_text={label} />}
            </button>
          ))}
          <Link
            href="/reports"
            aria-label={collapsed ? localize('Reports') : undefined}
            title={collapsed ? localize('Reports') : undefined}
            onClick={() => {
              if (mobile) onOpenChange(false);
            }}
            className={cn(
              'flex min-h-10 items-center gap-3 rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors',
              collapsed && 'justify-center px-0',
              'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground'
            )}
          >
            <Radio className="h-4 w-4 shrink-0" />
            {!collapsed && <Localize i18n_default_text="Reports" />}
          </Link>
        </nav>

        <div className="mt-5 border-t border-border pt-3">
          <button
            type="button"
            aria-label={collapsed ? localize('Settings') : undefined}
            aria-expanded={collapsed ? undefined : settingsExpanded}
            title={collapsed ? localize('Settings') : undefined}
            onClick={() => {
              if (collapsed) {
                onToggleCollapsed();
                setSettingsExpanded(true);
                return;
              }
              setSettingsExpanded((expanded) => !expanded);
            }}
            className={cn(
              'flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
              collapsed && 'justify-center px-0',
              settingsExpanded && !collapsed && 'bg-accent text-foreground'
            )}
          >
            <Settings2 className="h-4 w-4 shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">
                  <Localize i18n_default_text="Settings" />
                </span>
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', settingsExpanded && 'rotate-180')}
                />
              </>
            )}
          </button>
          {!collapsed && settingsExpanded && (
            <div className="mt-4 space-y-5 px-1 pb-3">
              <SettingsPanelFields
                authState={authState}
                onClose={() => {
                  if (mobile) onOpenChange(false);
                }}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );

  return (
    <>
      {!isMobile && (
        <aside
          aria-label={localize('Main navigation and settings')}
          className={cn(
            'fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-border bg-background/95 backdrop-blur-xl transition-[width] duration-200 lg:flex',
            isCollapsed ? 'w-20' : 'w-64'
          )}
        >
          {renderSidebarContents(isCollapsed, false)}
        </aside>
      )}
      <DialogPrimitive.Root
        open={isMobile && isOpen}
        onOpenChange={onOpenChange}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm lg:hidden" />
          <DialogPrimitive.Content className="fixed inset-y-0 left-0 z-[101] flex w-[85vw] max-w-[360px] flex-col border-r border-border bg-background shadow-2xl outline-none lg:hidden">
            <DialogPrimitive.Title className="sr-only">
              <Localize i18n_default_text="Main navigation and settings" />
            </DialogPrimitive.Title>
            <aside
              id="dashboard-sidebar"
              aria-label={localize('Main navigation and settings')}
              className="flex min-h-0 flex-1 flex-col"
            >
              {renderSidebarContents(false, true)}
            </aside>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}

// Edit-mode stand-in for the login prompt's auth handlers — same rule as the
// header: no OAuth navigation out of the editor.
const noopAsyncAuth = async () => {};

export interface DigitsViewProps {
  // Auth
  authState: AuthState;
  accounts: DerivAccount[];
  activeAccount: DerivAccount | null;
  onLogin: () => Promise<void>;
  onSignUp: () => Promise<void>;
  onLogout: () => void;
  onSwitchAccount: (accountId: string) => Promise<void>;

  // Connection / loading
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;

  // Market data
  symbols: ActiveSymbol[];
  activeSymbol: ActiveSymbol | null;
  selectSymbol: (symbol: string) => void;
  currentTick: Tick | null;
  lastDigit: number | null;
  digitStats: DigitStats;
  pipSize: number;
  openPositions: OpenPosition[];

  // Trade controls
  tradeType: TradeType;
  setTradeType: (type: TradeType) => void;
  contractMode: ContractMode;
  setContractMode: (mode: ContractMode) => void;
  selectedDigit: number | null;
  stake: string;
  setStake: (value: string) => void;
  duration: number;
  setDuration: (value: number) => void;
  durationLimits: DurationLimits;
  proposal: ProposalInfo | null;
  isProposalLoading: boolean;
  buyContract: () => Promise<void>;
  startAutoTrading: (strategy: UserTradingStrategy) => Promise<void>;
  isBuying: boolean;
  buyResult: BuyResult | null;
  buyError: string | null;
  clearBuyResult: () => void;
  takeProfit: string;
  setTakeProfit: (value: string) => void;
  stopLoss: string;
  setStopLoss: (value: string) => void;
  martingaleMode: MartingaleMode;
  setMartingaleMode: (value: MartingaleMode) => void;
  martingaleValues: Record<MartingaleMode, string>;
  setMartingaleValue: (mode: MartingaleMode, value: string) => void;
  autoTradingStatus: 'idle' | 'scanning' | 'running' | 'stopping';
  autoTradingTradeCount: number;
  autoTradingProfit: number;
  autoTradingMarket: string | null;
  autoTradingEstimatedWinRate: number | null;
  autoTradingScanProgress: AutoTradingScanProgress | null;
  thresholdResult: AutoTradingThresholdResult | null;
  clearThresholdResult: () => void;
  stopAutoTrading: () => void;
  // Branding (used by preview route; no-op in the real app)
  logoSrc?: string;
  appName?: string;

  /**
   * No-code config. When provided, the controls render in configurable
   * styles/order (ConfigurableDigitsControls). When omitted, the standard
   * DigitsView layout renders unchanged.
   */
  appConfig?: DigitsAppConfig;
  /** Edit mode — components become selectable (click opens their accordion). */
  editMode?: boolean;
  /** Called when an editable component is clicked (e.g. "stake"). */
  onSelect?: (key: string) => void;
  /** Currently selected component (highlighted). */
  selectedKey?: string | null;
  /** Rearrange mode — drag blocks in the phone to reorder the layout. */
  rearrangeMode?: boolean;
  /** Called with the new block order after a drag-drop reorder. */
  onReorder?: (order: DigitsAppConfig['order']) => void;
}

export function DigitsView({
  authState,
  accounts,
  activeAccount,
  onLogin,
  onSignUp,
  onLogout,
  onSwitchAccount,
  isConnected,
  isLoading,
  error,
  symbols,
  activeSymbol,
  selectSymbol,
  currentTick,
  lastDigit,
  digitStats,
  pipSize,
  openPositions,
  tradeType,
  setTradeType,
  contractMode,
  setContractMode,
  selectedDigit,
  stake,
  setStake,
  duration,
  setDuration,
  durationLimits,
  proposal,
  isProposalLoading,
  buyContract,
  startAutoTrading,
  isBuying,
  buyResult,
  buyError,
  clearBuyResult,
  takeProfit,
  setTakeProfit,
  stopLoss,
  setStopLoss,
  martingaleMode,
  setMartingaleMode,
  martingaleValues,
  setMartingaleValue,
  autoTradingStatus,
  autoTradingTradeCount,
  autoTradingProfit,
  autoTradingMarket,
  autoTradingEstimatedWinRate,
  autoTradingScanProgress,
  thresholdResult,
  clearThresholdResult,
  stopAutoTrading,
  logoSrc,
  appName,
  appConfig,
  editMode,
  onSelect,
  selectedKey,
  rearrangeMode,
  onReorder,
}: DigitsViewProps) {
  const isMobile = useIsMobile();
  // Pinning is a mobile affordance: on desktop the controls card grows to fit,
  // so the Buy button is never scroll-clipped and a viewport-wide bar under a
  // 400px column would look detached.
  const pinBuy = !!appConfig?.buy?.pinned && isMobile;
  // With Buy unpinned the footer still has to sit at the end of the mobile
  // column — and a `fixed` footer makes that column reserve clearance for it.
  // That reservation was a guess (`pb-28`, 112px) for a footer that measures
  // 40px, leaving 72px of dead space under the Buy button at the bottom of the
  // scroll. Rendering it in flow, exactly as PinnedBuyBar does, ends the column
  // where the footer begins and removes the number to guess.
  //
  // Note what this does NOT depend on: `buy.pinned`. Every no-code mobile
  // render gets the in-flow band, so an existing unpinned project also moves
  // off the translucent `fixed` footer on its next redeploy. That is deliberate
  // — it is the dead-space fix — but it means the backward-compatibility rule
  // covers Buy's PLACEMENT, not the footer treatment: a pre-existing project
  // keeps Buy scrolling in the column, while its footer becomes the opaque
  // bordered band. A footer that moved after a redeploy is expected here, not a
  // regression.
  const inFlowFooter = !!appConfig && isMobile;
  const { localize, locale } = useAppTranslations();
  const digitTradeTypeOptions = getDigitTradeTypeOptions(localize);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeDashboardPage, setActiveDashboardPage] = useState<DashboardPage>('home');
  const [activeSavedBotId, setActiveSavedBotId] = useState<string | null>(null);
  const isDashboardPageActive = (page: DashboardPage) =>
    editMode || activeDashboardPage === page;
  const savedBotStore = useSavedBots();
  const { transactions, resetTransactions } = useSessionTransactions(
    openPositions,
    symbols,
    activeAccount?.account_id ?? null,
    pipSize
  );

  // Logged-out Buy opens the login/sign-up prompt instead of sending a buy that
  // would fail with a "Purchase Failed" toast. One gate covers every Buy
  // surface (standard, configurable, pinned). Edit mode stays inert — the
  // editor owns Buy clicks there, and its auth actions are already no-ops.
  const handleBuy = useCallback(async () => {
    if (editMode) return;
    if (autoTradingStatus !== 'idle') {
      stopAutoTrading();
      return;
    }
    // Mid-OAuth (the ?code= callback) the header already shows a login in
    // progress — don't stack a "please log in" prompt on top of it.
    if (authState === 'authenticating') return;
    if (authState !== 'authenticated') {
      setShowLoginPrompt(true);
      return;
    }
    await buyContract();
  }, [editMode, authState, autoTradingStatus, stopAutoTrading, buyContract]);

  const handleSavedBotStart = useCallback(async (bot: SavedBot) => {
    const compilation = compileUserTradingStrategy(bot.description);
    if (!compilation.strategy) {
      toast.error(localize('Saved bot strategy is invalid'), {
        description: localize(compilation.error),
      });
      return;
    }

    setActiveSavedBotId(bot.id);
    try {
      await startAutoTrading(compilation.strategy);
    } catch (error) {
      toast.error(localize('Could not start saved bot'), {
        description: error instanceof Error ? error.message : localize('Try again after checking your connection and risk settings.'),
      });
    } finally {
      setActiveSavedBotId(null);
    }
  }, [localize, startAutoTrading]);

  const botBuilderProps = {
    canSave: savedBotStore.isLoaded && savedBotStore.canPersist,
    disabled: !!editMode,
    storageError: savedBotStore.storageError,
    onSave: savedBotStore.saveBot,
  };
  const savedBotsPanelProps = {
    bots: savedBotStore.bots,
    isLoaded: savedBotStore.isLoaded,
    canPersist: savedBotStore.canPersist,
    storageError: savedBotStore.storageError,
    isAuthenticated: authState === 'authenticated',
    isConnected,
    status: autoTradingStatus,
    activeBotId: activeSavedBotId,
    disabled: !!editMode,
    onCreateBot: () => setActiveDashboardPage('bot-builder'),
    onDeleteBot: savedBotStore.deleteBot,
    onStartBot: handleSavedBotStart,
    onStopBot: stopAutoTrading,
  };

  const riskManagementProps = {
    takeProfit,
    onTakeProfitChange: setTakeProfit,
    stopLoss,
    onStopLossChange: setStopLoss,
    martingaleMode,
    onMartingaleModeChange: setMartingaleMode,
    martingaleValues,
    onMartingaleValueChange: setMartingaleValue,
    autoTradingStatus,
    autoTradingTradeCount,
    autoTradingProfit,
    autoTradingMarket,
    autoTradingEstimatedWinRate,
    onStopAutoTrading: stopAutoTrading,
    disabled: autoTradingStatus !== 'idle',
  };

  const dashboardOverview = !editMode ? (
    <section
      id="dashboard-overview"
      className="mx-auto w-full max-w-[1600px] px-3 pt-2 sm:px-6 sm:pt-6"
    >
      <div className="flex min-w-0 items-center justify-between gap-2 lg:items-end">
        <div className="flex min-w-0 items-baseline gap-1.5 lg:block">
          <h2 className="shrink-0 text-lg font-bold tracking-tight text-foreground sm:text-xl">
            <Localize i18n_default_text="Dashboard" />
          </h2>
          <p className="min-w-0 truncate text-xs leading-tight text-muted-foreground sm:text-sm lg:mt-1">
            {activeAccount ? (
              <>
                <span className="lg:hidden">
                  {activeAccount.account_type === 'demo' ? (
                    <Localize i18n_default_text="Demo" />
                  ) : (
                    <Localize i18n_default_text="Real" />
                  )}
                  {' · '}
                  {activeAccount.currency}
                </span>
                <span className="hidden lg:inline">
                  {activeAccount.account_type === 'demo' ? (
                    <Localize i18n_default_text="Demo account" />
                  ) : (
                    <Localize i18n_default_text="Real account" />
                  )}
                  {' · '}
                  {activeAccount.currency}
                </span>
              </>
            ) : (
              <>
                <span className="lg:hidden">
                  <Localize i18n_default_text="Market overview" />
                </span>
                <span className="hidden lg:inline">
                  <Localize i18n_default_text="Market overview and trade activity" />
                </span>
              </>
            )}
          </p>
        </div>
        <div
          className={cn(
            'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[11px] font-medium sm:gap-2 sm:text-xs lg:px-3 lg:py-1.5',
            isConnected
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'
              : 'border-amber-500/30 bg-amber-500/10 text-amber-500'
          )}
        >
          <span className={cn('h-2 w-2 rounded-full', isConnected ? 'bg-emerald-500' : 'bg-amber-500')} />
          <span className="lg:hidden">
            {isConnected ? (
              <Localize i18n_default_text="Live" />
            ) : (
              <Localize i18n_default_text="Waiting" />
            )}
          </span>
          <span className="hidden lg:inline">
            {isConnected ? (
              <Localize i18n_default_text="Live market stream connected" />
            ) : (
              <Localize i18n_default_text="Waiting for live market stream" />
            )}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
        <div className="rounded-xl border border-border bg-card/90 p-3 sm:p-4">
          <div className="flex items-center justify-between text-muted-foreground">
            <p className="text-xs font-medium"><Localize i18n_default_text="Market" /></p>
            <BarChart3 className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 truncate text-base font-semibold text-foreground sm:text-lg">
            {activeSymbol
              ? getSymbolDisplayName(activeSymbol.underlying_symbol)
              : localize('Loading market')}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            <Localize i18n_default_text="Selected market" />
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/90 p-3 sm:p-4">
          <div className="flex items-center justify-between text-muted-foreground">
            <p className="text-xs font-medium"><Localize i18n_default_text="Last digit" /></p>
            <Activity className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
            {lastDigit ?? '—'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            <Localize i18n_default_text="Latest market tick" />
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/90 p-3 sm:p-4">
          <div className="flex items-center justify-between text-muted-foreground">
            <p className="text-xs font-medium"><Localize i18n_default_text="Ticks analyzed" /></p>
            <Radio className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
            {digitStats.totalTicks.toLocaleString(locale)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            <Localize i18n_default_text="Current sample" />
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/90 p-3 sm:p-4">
          <div className="flex items-center justify-between text-muted-foreground">
            <p className="text-xs font-medium"><Localize i18n_default_text="Auto strategy" /></p>
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 truncate text-base font-semibold text-foreground sm:text-lg">
            {autoTradingStatus === 'running'
              ? localize('Running')
              : autoTradingStatus === 'scanning'
                ? localize('Scanning')
                : autoTradingStatus === 'stopping'
                  ? localize('Stopping')
                  : localize('Ready')}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {localize('{{count}} trades this session', { count: autoTradingTradeCount })}
          </p>
        </div>
      </div>
    </section>
  ) : null;

  // Purchase feedback for the configurable layouts lives HERE, not in
  // ConfigurableDigitsControls: the desktop no-code layout mounts that
  // component once per column, and a per-instance effect would fire every
  // toast twice. Automatic sessions clear successful results without a toast.
  const hasAppConfig = !!appConfig;
  useEffect(() => {
    if (!hasAppConfig || !buyError) return;
    toast.error(localize('Purchase Failed'), { description: buyError });
    clearBuyResult();
  }, [hasAppConfig, buyError, clearBuyResult, localize]);
  useEffect(() => {
    if (!hasAppConfig || !buyResult) return;
    if (autoTradingStatus === 'idle') {
      toast.success(localize('Contract Purchased'), {
        description: localize(
          'Buy price: {{buyPrice}} USD | Payout: {{payout}} USD | Balance: {{balance}} USD',
          {
            buyPrice: formatAmount(buyResult.buyPrice, locale),
            payout: formatAmount(buyResult.payout, locale),
            balance: formatAmount(buyResult.balanceAfter, locale),
          }
        ),
      });
    }
    clearBuyResult();
  }, [hasAppConfig, buyResult, autoTradingStatus, clearBuyResult, localize, locale]);

  // In edit mode, login/sign-up/account actions are inert (no OAuth navigation
  // out of the editor) — only the theme toggle stays interactive.
  const headerEl = useMemo(() => {
    const noop = () => {};
    const noopAsync = async () => {};
    return (
      <Header
        authState={authState}
        accounts={accounts}
        activeAccount={activeAccount}
        onLogin={editMode ? noopAsync : onLogin}
        onSignUp={editMode ? noopAsync : onSignUp}
        onLogout={editMode ? noop : onLogout}
        onSwitchAccount={editMode ? noopAsync : onSwitchAccount}
        logoSrc={logoSrc}
        appName={appName}
        settingsOpen={editMode ? settingsOpen : undefined}
        onSettingsOpenChange={editMode ? setSettingsOpen : undefined}
        mobileSidebarOpen={mobileSidebarOpen}
        onMobileSidebarOpenChange={!editMode ? setMobileSidebarOpen : undefined}
        hideBrandOnDesktop={!editMode}
      />
    );
  }, [
    authState,
    accounts,
    activeAccount,
    editMode,
    onLogin,
    onSignUp,
    onLogout,
    onSwitchAccount,
    logoSrc,
    appName,
    settingsOpen,
    setSettingsOpen,
    mobileSidebarOpen,
    setMobileSidebarOpen,
  ]);

  if (error) {
    return (
      <main className="flex flex-col bg-background items-center justify-center px-4 min-h-dvh">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-destructive">
              <Localize i18n_default_text="Connection Error" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </main>
    );
  }

  // The configurable controls — a reorderable column. `keys` narrows the
  // instance to one desktop column; omitted, it renders every block.
  const renderConfigurable = (
    keys?: ControlKey[],
    compactMarketLayout?: boolean
  ) =>
    appConfig ? (
      <ConfigurableDigitsControls
        config={appConfig}
        lastDigit={lastDigit}
        compactMarketLayout={compactMarketLayout}
        keys={keys}
        symbols={symbols}
        activeSymbol={activeSymbol}
        selectSymbol={selectSymbol}
        currentTick={currentTick}
        digitStats={digitStats}
        pipSize={pipSize}
        tradeType={tradeType}
        onTradeTypeChange={setTradeType}
        contractMode={contractMode}
        onContractModeChange={setContractMode}
        selectedDigit={selectedDigit}
        stake={stake}
        onStakeChange={setStake}
        duration={duration}
        onDurationChange={setDuration}
        durationLimits={durationLimits}
        proposal={proposal}
        isProposalLoading={isProposalLoading}
        onBuy={handleBuy}
        isBuying={isBuying}
        autoTradingStatus={autoTradingStatus}
        isConnected={isConnected}
        editMode={editMode}
        onSelect={onSelect}
        selectedKey={selectedKey}
        rearrangeMode={rearrangeMode}
        onReorder={onReorder}
        pinBuy={pinBuy}
      />
    ) : null;

  return (
    <main
      data-dashboard-page={activeDashboardPage}
      className={cn(
        'factorpulse-shell relative flex flex-col max-lg:h-dvh lg:overflow-visible',
        appConfig && isMobile ? 'max-lg:overflow-hidden' : 'max-lg:overflow-y-auto',
        editMode ? 'bg-muted/50' : sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
      )}
    >
      {!editMode && (
        <DashboardSidebar
          appName={appName}
          authState={authState}
          activePage={activeDashboardPage}
          onPageChange={setActiveDashboardPage}
          isMobile={isMobile}
          isOpen={mobileSidebarOpen}
          onOpenChange={setMobileSidebarOpen}
          isCollapsed={sidebarCollapsed}
          onToggleCollapsed={() => setSidebarCollapsed((collapsed) => !collapsed)}
        />
      )}
      {editMode ? (
        <div className="group/hdr sticky top-0 z-50">
          {headerEl}
          <div className="pointer-events-none absolute inset-0 z-[60] opacity-0 ring-2 ring-inset ring-muted-foreground/25 transition-opacity group-hover/hdr:opacity-100">
            <span className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border">
              <Ban className="h-3.5 w-3.5" />
              <Localize i18n_default_text="Not editable" />
            </span>
          </div>
        </div>
      ) : (
        headerEl
      )}

      {activeDashboardPage === 'home' && (!isMobile || !appConfig) && dashboardOverview}

      {appConfig ? (
        isMobile ? (
          /* No-code mobile layout: a single, reorderable column of blocks. */
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
            {activeDashboardPage === 'home' && dashboardOverview}
            <div className={cn(
              'mx-auto flex w-full max-w-md flex-col gap-3 px-3 py-3 sm:px-4',
              !editMode && activeDashboardPage === 'home' && 'hidden'
            )}>
              {isLoading ? (
                <Skeleton className="h-[420px] w-full rounded-xl" />
              ) : editMode ? (
                <Card className="factorpulse-panel overflow-hidden border-primary/40 bg-card/90">
                  <CardContent className="p-3 sm:p-4">{renderConfigurable()}</CardContent>
                </Card>
              ) : (
                <>
                  <Card
                    id="market-column"
                    className={cn(
                      'factorpulse-panel overflow-hidden border-primary/45 bg-card/95',
                      !isDashboardPageActive('strategies') && 'hidden'
                    )}
                  >
                    <CardHeader className="flex-row items-center gap-2 border-b border-border/70 px-4 py-3">
                      <Activity className="h-4 w-4 text-primary" />
                      <CardTitle className="text-sm font-bold uppercase tracking-[0.12em]">
                        <Localize i18n_default_text="Cycle Inspector" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      {renderConfigurable(MARKET_COLUMN_KEYS, true)}
                    </CardContent>
                  </Card>
                  <div className={cn('space-y-4', !isDashboardPageActive('bot-builder') && 'hidden')}>
                    <BotBuilder {...botBuilderProps} />
                    <TransactionsPanel
                      transactions={transactions}
                      onReset={resetTransactions}
                      isAuthenticated={authState === 'authenticated'}
                    />
                  </div>
                  <Card
                    id="controls-column"
                    className={cn(
                      'factorpulse-panel overflow-hidden border-primary/45 bg-card/95',
                      !isDashboardPageActive('bots') && 'hidden'
                    )}
                  >
                    <CardHeader className="flex-row items-center gap-2 border-b border-border/70 px-4 py-3">
                      <Zap className="h-4 w-4 text-primary" />
                      <CardTitle className="text-sm font-bold uppercase tracking-[0.12em]">
                        <Localize i18n_default_text="Trade Terminal" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      {renderConfigurable(CONTROLS_COLUMN_KEYS)}
                      <SavedBotsPanel {...savedBotsPanelProps} />
                      <RiskManagementControls {...riskManagementProps} />
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        ) : (
          /* No-code desktop layout: market and trade controls share the first
             row, with transactions below. See MARKET_COLUMN_KEYS for the
             market-data split.

             The 440px track is guarded behind `lg:` because useIsMobile
             initialises to false — on SSR and the first client render every
             viewport takes this desktop branch, and an unguarded fixed track
             would overflow a phone until hydration flips the flag. The hook's
             (max-width: 1023px) query is the same boundary as `lg`, so the
             CSS and the JS branch agree once hydrated.

             Edit mode shares the two-column version of this layout, so the
             builder's desktop viewport shows the editable controls. Full
             reordering lives in the builder's phone viewport. */
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6">
            {isLoading ? (
              <div className={cn(
                'grid grid-cols-1 gap-4 xl:gap-5',
                editMode
                  ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]'
                  : activeDashboardPage === 'home'
                    ? 'hidden'
                    : 'lg:grid-cols-1 xl:grid-cols-1'
              )}>
                <Skeleton className="h-[420px] w-full rounded-xl" />
                <Skeleton className="h-[420px] w-full rounded-xl" />
                {!editMode && <Skeleton className="h-[420px] w-full rounded-xl lg:col-span-2" />}
              </div>
            ) : (
              <>
              <div className={cn(
                'grid grid-cols-1 gap-4 xl:gap-5',
                editMode
                  ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]'
                  : activeDashboardPage === 'home'
                    ? 'hidden'
                    : 'lg:grid-cols-1 xl:grid-cols-1'
              )}>
                <Card
                  id="market-column"
                  className={cn(
                    'factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95',
                    !isDashboardPageActive('strategies') && 'hidden'
                  )}
                  data-testid="market-column"
                >
                  <CardHeader className="flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary" />
                      <CardTitle className="text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
                        <Localize i18n_default_text="Cycle Inspector" />
                      </CardTitle>
                    </div>
                    <span className="rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                      <Localize i18n_default_text="Market data" />
                    </span>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-5">
                    {renderConfigurable(MARKET_COLUMN_KEYS, true)}
                  </CardContent>
                </Card>
                {!editMode && (
                  <div className={cn(
                    'h-full space-y-4 order-3 lg:order-3 lg:col-span-2 xl:order-3 xl:col-span-2',
                    !isDashboardPageActive('bot-builder') && 'hidden',
                    isDashboardPageActive('bot-builder') && 'lg:col-span-1 xl:col-span-1'
                  )}>
                    <BotBuilder {...botBuilderProps} />
                    <TransactionsPanel
                      transactions={transactions}
                      onReset={resetTransactions}
                      isAuthenticated={authState === 'authenticated'}
                    />
                  </div>
                )}
                <Card
                  id="controls-column"
                  className={cn(
                    'factorpulse-panel overflow-hidden border-primary/45 bg-card/95',
                    editMode ? 'lg:order-2' : 'order-2 lg:order-2 xl:order-2',
                    !isDashboardPageActive('bots') && 'hidden'
                  )}
                  data-testid="controls-column"
                >
                  <CardHeader className="flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <CardTitle className="text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
                        <Localize i18n_default_text="Trade Terminal" />
                      </CardTitle>
                    </div>
                    <span className={`rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`}>
                      {isConnected ? (
                        <Localize i18n_default_text="Ready" />
                      ) : (
                        <Localize i18n_default_text="Standby" />
                      )}
                    </span>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5">
                    {renderConfigurable(CONTROLS_COLUMN_KEYS)}
                    <SavedBotsPanel {...savedBotsPanelProps} />
                    <RiskManagementControls {...riskManagementProps} />
                  </CardContent>
                </Card>
              </div>
              <div className={cn(
                'mt-4 hidden grid-cols-2 gap-3 lg:grid',
                !isDashboardPageActive('home') && 'lg:hidden'
              )}>
                <div className="flex items-center justify-between rounded-lg border border-border/80 bg-card/70 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Radio className={`h-4 w-4 ${isConnected ? 'text-emerald-400' : 'text-amber-300'}`} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Localize i18n_default_text="Connection status" />
                      </p>
                      <p className="mt-0.5 text-xs font-medium">
                        {isConnected ? (
                          <Localize i18n_default_text="Live market stream connected" />
                        ) : (
                          <Localize i18n_default_text="Waiting for live market stream" />
                        )}
                      </p>
                    </div>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${isConnected ? 'animate-pulse bg-emerald-400' : 'bg-amber-400'}`} />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border/80 bg-card/70 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Localize i18n_default_text="Digit sample" />
                      </p>
                      <p className="mt-0.5 text-xs font-medium">
                        {digitStats.totalTicks} <Localize i18n_default_text="ticks analyzed" />
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
              </>
            )}
          </div>
        )
      ) : isMobile ? (
        /* Standard mobile layout (unchanged): trade type chips + main card. */
        <div className={cn(
          'flex w-full max-w-7xl mx-auto flex-col px-3 py-2 sm:px-4 sm:py-4 gap-2 sm:gap-3 pb-10',
          !editMode && activeDashboardPage === 'home' && 'hidden'
        )}>
          {isLoading ? (
            <>
              {/* Trade type chips skeleton */}
              <div className="flex gap-2">
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-8 w-28 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
              {/* Main card skeleton */}
              <Skeleton className="w-full h-[420px] rounded-xl" />
            </>
          ) : (
            <>
              <Card className="shrink-0 border shadow-sm mb-12">
                <CardContent className="flex flex-col p-3 pt-3 sm:p-6 sm:pt-4 pb-2 sm:pb-6">
                  <div
                    id="market-column"
                    className={cn(
                      'space-y-3 pb-4',
                      !isDashboardPageActive('strategies') && 'hidden'
                    )}
                  >
                    <TradeTypeChips
                      className="shrink-0"
                      value={tradeType}
                      options={digitTradeTypeOptions}
                      onValueChange={setTradeType}
                      disabled={autoTradingStatus !== 'idle'}
                    />
                    <ContractModeSelector
                      tradeType={tradeType}
                      contractMode={contractMode}
                      onContractModeChange={setContractMode}
                      disabled={autoTradingStatus !== 'idle'}
                    />
                  </div>
                  {/* Symbol selector; price appears beside the prediction heading except in Even/Odd mode. */}
                  <div className={cn(
                    'flex flex-col pb-4 pt-1 sm:pb-6 sm:pt-2',
                    !isDashboardPageActive('strategies') && 'hidden'
                  )}>
                    <SymbolSelector
                      symbols={symbols}
                      activeSymbol={activeSymbol}
                      onSymbolChange={selectSymbol}
                      disabled={autoTradingStatus !== 'idle'}
                    />
                    {tradeType === 'even-odd' && (
                      <div className="flex min-h-24 items-center justify-center sm:min-h-32">
                        <CurrentTickDisplay
                          tick={currentTick}
                          lastDigit={lastDigit}
                          activeSymbol={activeSymbol}
                          pipSize={pipSize}
                          compact
                        />
                      </div>
                    )}
                  </div>

                  <div className={cn(
                    'border-t divide-y divide-border',
                    !isDashboardPageActive('strategies') && 'border-t-0 divide-y-0'
                  )}>
                    {/* Digit stats — hidden for Even/Odd */}
                    {tradeType !== 'even-odd' && (
                      <div className={cn(
                        'space-y-4 py-4 sm:py-6',
                        !isDashboardPageActive('strategies') && 'hidden'
                      )}>
                        <DigitStatsBar
                          digitStats={digitStats}
                          selectedDigit={selectedDigit}
                          lastDigit={lastDigit}
                          headerRight={
                            <CurrentTickDisplay
                              tick={currentTick}
                              lastDigit={lastDigit}
                              activeSymbol={activeSymbol}
                              pipSize={pipSize}
                              inline
                            />
                          }
                          disabled={autoTradingStatus !== 'idle'}
                        />
                      </div>
                    )}

                    <div className={cn(
                      'py-4 sm:py-6',
                      !isDashboardPageActive('bot-builder') && 'hidden'
                    )}>
                      <BotBuilder {...botBuilderProps} />
                      <TransactionsPanel
                        transactions={transactions}
                        onReset={resetTransactions}
                        isAuthenticated={authState === 'authenticated'}
                      />
                    </div>

                    {/* Trade controls */}
                    <div
                      id="controls-column"
                      className={cn(
                        'pt-4 sm:pt-6',
                        !isDashboardPageActive('bots') && 'hidden'
                      )}
                    >
                      <TradeControls
                        contractMode={contractMode}
                        selectedDigit={selectedDigit}
                        isConnected={isConnected}
                        stake={stake}
                        onStakeChange={setStake}
                        duration={duration}
                        onDurationChange={setDuration}
                        durationLimits={durationLimits}
                        proposal={proposal}
                        isProposalLoading={isProposalLoading}
                        onBuy={handleBuy}
                        isBuying={isBuying}
                        autoTradingStatus={autoTradingStatus}
                        buyResult={buyResult}
                        buyError={buyError}
                        onClearBuyResult={clearBuyResult}
                        isMobile
                      />
                      <SavedBotsPanel {...savedBotsPanelProps} />
                      <RiskManagementControls {...riskManagementProps} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      ) : (
        /* Standard desktop layout: market data, transactions and trade
           controls sit in that order at xl. At lg, transactions moves below
           the two-column market/controls layout. */
        <div className={cn(
          'mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6',
          !editMode && activeDashboardPage === 'home' && 'hidden'
        )}>
          {isLoading ? (
            <div className={cn(
              'grid grid-cols-1 gap-4 xl:gap-5',
              editMode
                ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]'
                : activeDashboardPage === 'home'
                  ? 'hidden'
                  : 'lg:grid-cols-1 xl:grid-cols-1'
            )}>
              <Skeleton className="h-[420px] w-full rounded-xl" />
              <Skeleton className="h-[420px] w-full rounded-xl" />
              <Skeleton className="h-[420px] w-full rounded-xl" />
            </div>
          ) : (
            <div className={cn(
              'grid grid-cols-1 gap-4 xl:gap-5',
              editMode
                ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]'
                : activeDashboardPage === 'home'
                  ? 'hidden'
                  : 'lg:grid-cols-1 xl:grid-cols-1'
            )}>
              <Card
                id="market-column"
                className={cn(
                  'factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95',
                  !isDashboardPageActive('strategies') && 'hidden'
                )}
                data-testid="market-column"
              >
                <CardHeader className="flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <CardTitle className="text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
                      <Localize i18n_default_text="Cycle Inspector" />
                    </CardTitle>
                  </div>
                  <span className="rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                    <Localize i18n_default_text="Market data" />
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
                  <TradeTypeChips
                    backdrop="card"
                    value={tradeType}
                    options={digitTradeTypeOptions}
                    onValueChange={setTradeType}
                    disabled={autoTradingStatus !== 'idle'}
                  />
                  <ContractModeSelector
                    tradeType={tradeType}
                    contractMode={contractMode}
                    onContractModeChange={setContractMode}
                    disabled={autoTradingStatus !== 'idle'}
                  />
                  <SymbolSelector
                    symbols={symbols}
                    activeSymbol={activeSymbol}
                    onSymbolChange={selectSymbol}
                    disabled={autoTradingStatus !== 'idle'}
                  />
                  <div className={tradeType === 'even-odd' ? 'mx-auto w-full max-w-[240px]' : 'min-w-0'}>
                    {tradeType !== 'even-odd' ? (
                      <DigitStatsBar
                        digitStats={digitStats}
                        selectedDigit={selectedDigit}
                        lastDigit={lastDigit}
                        headerRight={
                          <CurrentTickDisplay
                            tick={currentTick}
                            lastDigit={lastDigit}
                            activeSymbol={activeSymbol}
                            pipSize={pipSize}
                            inline
                          />
                        }
                        disabled={autoTradingStatus !== 'idle'}
                      />
                    ) : (
                      <CurrentTickDisplay
                        tick={currentTick}
                        lastDigit={lastDigit}
                        activeSymbol={activeSymbol}
                        pipSize={pipSize}
                        compact
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
              <div className={cn(
                'h-full space-y-4',
                editMode
                  ? 'order-2 lg:order-3 lg:col-span-2 xl:order-2 xl:col-span-1'
                  : 'order-3 lg:order-3 lg:col-span-2 xl:order-3 xl:col-span-2',
                !isDashboardPageActive('bot-builder') && 'hidden',
                !editMode && isDashboardPageActive('bot-builder') && 'lg:col-span-1 xl:col-span-1'
              )}>
                <BotBuilder {...botBuilderProps} />
                <TransactionsPanel
                  transactions={transactions}
                  onReset={resetTransactions}
                  isAuthenticated={authState === 'authenticated'}
                />
              </div>
              <Card
                id="controls-column"
                className={cn(
                  'factorpulse-panel overflow-hidden border-primary/45 bg-card/95',
                  editMode ? 'order-3 lg:order-2 xl:order-3' : 'order-2 lg:order-2 xl:order-2',
                  !isDashboardPageActive('bots') && 'hidden'
                )}
                data-testid="controls-column"
              >
                <CardHeader className="flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <CardTitle className="text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
                      <Localize i18n_default_text="Trade Terminal" />
                    </CardTitle>
                  </div>
                  <span className={`rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`}>
                    {isConnected ? (
                      <Localize i18n_default_text="Ready" />
                    ) : (
                      <Localize i18n_default_text="Standby" />
                    )}
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
                  <SavedBotsPanel {...savedBotsPanelProps} />
                  <TradeControls
                    contractMode={contractMode}
                    selectedDigit={selectedDigit}
                    isConnected={isConnected}
                    stake={stake}
                    onStakeChange={setStake}
                    duration={duration}
                    onDurationChange={setDuration}
                    durationLimits={durationLimits}
                    proposal={proposal}
                    isProposalLoading={isProposalLoading}
                    onBuy={handleBuy}
                    isBuying={isBuying}
                    autoTradingStatus={autoTradingStatus}
                    buyResult={buyResult}
                    buyError={buyError}
                    onClearBuyResult={clearBuyResult}
                  />
                  <RiskManagementControls {...riskManagementProps} />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}

      {pinBuy ? (
        <PinnedBuyBar
          editMode={editMode}
          rearrangeMode={rearrangeMode}
          selected={selectedKey === 'buy'}
          onSelect={() => onSelect?.('buy')}
          label={localize('Buy button')}
        >
          <ConfigurableBuyButton
            variant={appConfig!.styles.buy}
            isConnected={isConnected}
            onBuy={handleBuy}
            isBuying={isBuying}
            autoTradingStatus={autoTradingStatus}
          />
        </PinnedBuyBar>
      ) : inFlowFooter ? (
        /* Unpinned mobile: the same band the pinned bar ends in, minus the Buy
           button — in flow at the end of the h-dvh column, so the scroll area
           ends where it begins and nothing reserves clearance for it. Sharing
           the band is what keeps the footer from moving when the pin toggles. */
        <FooterBar />
      ) : (
        /* Fixed footer — desktop and the standard layout, which scroll the
           document rather than an inner column. */
        <div className={`fixed bottom-0 left-0 right-0 py-2 text-center bg-background/80 backdrop-blur-sm ${!editMode ? 'lg:left-64' : ''}`}>
          <Footer />
        </div>
      )}

      <LoginPromptDialog
        open={showLoginPrompt}
        onOpenChange={setShowLoginPrompt}
        onLogin={editMode ? noopAsyncAuth : onLogin}
        onSignUp={editMode ? noopAsyncAuth : onSignUp}
      />
      <MarketScannerNotification
        progress={autoTradingScanProgress}
        status={autoTradingStatus}
        onStop={stopAutoTrading}
      />
      <ThresholdResultDialog result={thresholdResult} onClose={clearThresholdResult} />
    </main>
  );
}
