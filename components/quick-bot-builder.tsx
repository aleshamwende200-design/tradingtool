'use client';

import { useMemo, useState } from 'react';
import type { ActiveSymbol } from '@deriv/core';
import { Bot, Plus, RotateCcw, Settings2, Trash2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { getScannableMarkets } from '@/lib/market-scanner';
import { compileUserTradingStrategy } from '@/lib/user-trading-strategy';
import type { SavedBotSettings } from '@/lib/user-trading-strategy';
import type { ContractMode } from '@/lib/types';

type ConditionKind = 'digit' | 'parity-run' | 'range-run' | 'sequence';
type AnalysisType = 'pattern' | 'sequence';

interface RuleCondition {
  id: number;
  kind: ConditionKind;
  digit: number;
  length: number;
  parity: 'even' | 'odd';
  range: 'high' | 'low';
  sequence: string;
}

interface QuickBotBuilderProps {
  symbols: ActiveSymbol[];
  stake: string;
  onStakeChange: (value: string) => void;
  duration: number;
  onDurationChange: (value: number) => void;
  takeProfit: string;
  stopLoss: string;
  martingaleMode: string;
  martingaleMultiplier: string;
  canSave: boolean;
  storageError: string | null;
  disabled?: boolean;
  onSave: (name: string, description: string, settings: SavedBotSettings) => boolean;
  onOpenSettings: () => void;
}

function createCondition(id: number, kind: ConditionKind = 'parity-run'): RuleCondition {
  return {
    id,
    kind,
    digit: 3,
    length: 2,
    parity: 'even',
    range: 'high',
    sequence: '1, 2, 3',
  };
}

function conditionDescription(condition: RuleCondition): string {
  switch (condition.kind) {
    case 'digit':
      return `when the last digit is ${condition.digit}`;
    case 'parity-run':
      return `after ${condition.length} consecutive ${condition.parity} digits`;
    case 'range-run':
      return `after ${condition.length} consecutive ${condition.range} digits`;
    case 'sequence':
      return `after the sequence ${condition.sequence.trim()}`;
  }
}

function contractDescription(
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>,
  barrier: number
): string {
  switch (contractMode) {
    case 'DIGITDIFF':
      return `differs from ${barrier}`;
    case 'DIGITOVER':
      return `over ${barrier}`;
    case 'DIGITUNDER':
      return `under ${barrier}`;
    case 'DIGITEVEN':
      return 'even';
    case 'DIGITODD':
      return 'odd';
  }
}

function normalizeBarrier(contractMode: Exclude<ContractMode, 'DIGITMATCH'>, value: number): number {
  const minimum = contractMode === 'DIGITUNDER' ? 1 : 0;
  const maximum = contractMode === 'DIGITOVER' ? 8 : 9;
  return Math.max(minimum, Math.min(maximum, Math.round(value)));
}

export function QuickBotBuilder({
  symbols,
  stake,
  onStakeChange,
  duration,
  onDurationChange,
  takeProfit,
  stopLoss,
  martingaleMode,
  martingaleMultiplier,
  canSave,
  storageError,
  disabled = false,
  onSave,
  onOpenSettings,
}: QuickBotBuilderProps) {
  const { localize } = useAppTranslations();
  const [name, setName] = useState('');
  const [marketSymbol, setMarketSymbol] = useState('');
  const [analysisType, setAnalysisType] = useState<AnalysisType>('pattern');
  const [conditions, setConditions] = useState<RuleCondition[]>([createCondition(1)]);
  const [nextConditionId, setNextConditionId] = useState(2);
  const [contractMode, setContractMode] =
    useState<Exclude<ContractMode, 'DIGITMATCH'>>('DIGITOVER');
  const [barrier, setBarrier] = useState(1);
  const [maximumStake, setMaximumStake] = useState('10');
  const [recoveryEnabled, setRecoveryEnabled] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  const scannableMarkets = useMemo(() => getScannableMarkets(symbols), [symbols]);
  const description = useMemo(() => {
    const contract = contractDescription(contractMode, barrier);
    const entries = conditions.map(conditionDescription);
    return `${contract} ${entries.join(' and ')}`;
  }, [barrier, conditions, contractMode]);
  const compilation = useMemo(
    () => compileUserTradingStrategy(description),
    [description]
  );

  const updateCondition = (id: number, update: Partial<RuleCondition>) => {
    setConditions((current) => current.map((condition) =>
      condition.id === id ? { ...condition, ...update } : condition
    ));
    setSaveError(null);
    setSavedNotice(null);
  };

  const resetDraft = () => {
    setName('');
    setMarketSymbol('');
    setAnalysisType('pattern');
    setConditions([createCondition(1)]);
    setNextConditionId(2);
    setContractMode('DIGITOVER');
    setBarrier(1);
    setMaximumStake('10');
    setRecoveryEnabled(false);
    onStakeChange('2.5');
    onDurationChange(2);
    setSaveError(null);
    setSavedNotice(null);
  };

  const saveQuickBot = () => {
    if (!compilation.strategy) {
      setSaveError(localize(compilation.error));
      setSavedNotice(null);
      return;
    }
    const initialStake = Number(stake);
    const stakeLimit = Number(maximumStake);
    if (!Number.isFinite(initialStake) || initialStake <= 0 ||
      !Number.isFinite(stakeLimit) || stakeLimit < initialStake) {
      setSaveError(localize('Maximum stake must be at least the initial stake.'));
      setSavedNotice(null);
      return;
    }

    const settings: SavedBotSettings = {
      marketSymbol: marketSymbol || null,
      stake,
      maximumStake,
      duration,
      recoveryEnabled,
    };
    const saved = onSave(name, description, settings);
    if (!saved) {
      setSaveError(localize('The bot could not be saved. Check browser storage and try again.'));
      setSavedNotice(null);
      return;
    }
    setName('');
    setSaveError(null);
    setSavedNotice(localize('Quick bot saved. Start it from your saved bots below.'));
  };

  return (
    <section
      id="quick-bot-builder"
      className="space-y-4 rounded-xl border border-primary/30 bg-primary/[0.03] p-4 sm:p-5"
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-2">
          <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <h3 className="text-sm font-bold text-foreground">{localize('Build your trading rules')}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {localize('Create and review a digit strategy. A bot only starts trading after you start it from the saved bots list.')}
            </p>
          </div>
        </div>
        <Button type="button" size="sm" variant="outline" onClick={resetDraft} disabled={disabled}>
          <RotateCcw />
          {localize('Reset')}
        </Button>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(250px,0.8fr)]">
        <div className="space-y-4">
          <div className="grid gap-3 rounded-lg border border-border/80 bg-card/70 p-3 sm:grid-cols-2 sm:p-4">
            <div className="space-y-1.5">
              <Label htmlFor="quick-bot-market">{localize('Market')}</Label>
              <select
                id="quick-bot-market"
                value={marketSymbol}
                onChange={(event) => {
                  setMarketSymbol(event.target.value);
                  setSaveError(null);
                  setSavedNotice(null);
                }}
                disabled={disabled}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              >
                <option value="">{localize('Auto scan open markets')}</option>
                {scannableMarkets.map((symbol) => (
                  <option key={symbol.underlying_symbol} value={symbol.underlying_symbol}>
                    {symbol.underlying_symbol_name}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-muted-foreground">
                {localize('Auto scan checks open continuous markets for your rule.')}
              </p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quick-bot-analysis">{localize('Analysis type')}</Label>
              <select
                id="quick-bot-analysis"
                value={analysisType}
                onChange={(event) => {
                  const nextType = event.target.value as AnalysisType;
                  setAnalysisType(nextType);
                  setConditions((current) => current.map((condition) =>
                    createCondition(
                      condition.id,
                      nextType === 'sequence' ? 'sequence' : 'parity-run'
                    )
                  ));
                  setSaveError(null);
                  setSavedNotice(null);
                }}
                disabled={disabled}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              >
                <option value="pattern">{localize('Pattern')}</option>
                <option value="sequence">{localize('Digit sequence')}</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 rounded-lg border border-border/80 bg-card/70 p-3 sm:grid-cols-2 sm:p-4">
            <div className="space-y-1.5">
              <Label htmlFor="quick-bot-stake">{localize('Initial purchase · Stake')}</Label>
              <Input
                id="quick-bot-stake"
                type="number"
                min="0.35"
                step="0.01"
                value={stake}
                onChange={(event) => {
                  onStakeChange(event.target.value);
                  setSaveError(null);
                  setSavedNotice(null);
                }}
                disabled={disabled}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quick-bot-duration">{localize('Duration (ticks)')}</Label>
              <Input
                id="quick-bot-duration"
                type="number"
                min="1"
                max="200"
                step="1"
                value={duration}
                onChange={(event) => {
                  onDurationChange(Math.max(1, Math.min(200, Math.round(Number(event.target.value) || 1))));
                  setSaveError(null);
                  setSavedNotice(null);
                }}
                disabled={disabled}
              />
            </div>
            <p className="text-[10px] text-muted-foreground sm:col-span-2">
              {localize('These are saved with the bot and used when it starts.')}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                {localize('Entry conditions')}
              </h4>
              <span className="text-[10px] text-muted-foreground">
                {localize('All conditions must match')}
              </span>
            </div>

            {conditions.map((condition, index) => (
              <article key={condition.id} className="space-y-3 rounded-lg border border-border/80 bg-card/70 p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <h5 className="text-xs font-semibold text-foreground">
                    {localize('Condition {{number}}', { number: index + 1 })}
                  </h5>
                  {conditions.length > 1 && (
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      aria-label={localize('Remove condition {{number}}', { number: index + 1 })}
                      onClick={() => setConditions((current) => current.filter((entry) => entry.id !== condition.id))}
                      disabled={disabled}
                    >
                      <Trash2 />
                    </Button>
                  )}
                </div>

                {analysisType === 'pattern' && (
                  <div className="space-y-1.5">
                    <Label htmlFor={`quick-condition-kind-${condition.id}`}>{localize('Pattern')}</Label>
                    <select
                      id={`quick-condition-kind-${condition.id}`}
                      value={condition.kind}
                      onChange={(event) => updateCondition(condition.id, { kind: event.target.value as ConditionKind })}
                      disabled={disabled}
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                    >
                      <option value="digit">{localize('Last digit')}</option>
                      <option value="parity-run">{localize('Even / odd run')}</option>
                      <option value="range-run">{localize('High / low run')}</option>
                    </select>
                  </div>
                )}

                {condition.kind === 'digit' && (
                  <div className="space-y-1.5">
                    <Label htmlFor={`quick-condition-digit-${condition.id}`}>{localize('Last digit is')}</Label>
                    <select
                      id={`quick-condition-digit-${condition.id}`}
                      value={condition.digit}
                      onChange={(event) => updateCondition(condition.id, { digit: Number(event.target.value) })}
                      disabled={disabled}
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                    >
                      {Array.from({ length: 10 }, (_, digit) => (
                        <option key={digit} value={digit}>{digit}</option>
                      ))}
                    </select>
                  </div>
                )}

                {(condition.kind === 'parity-run' || condition.kind === 'range-run') && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor={`quick-condition-value-${condition.id}`}>
                        {localize(condition.kind === 'parity-run' ? 'Parity' : 'Digit range')}
                      </Label>
                      <select
                        id={`quick-condition-value-${condition.id}`}
                        value={condition.kind === 'parity-run' ? condition.parity : condition.range}
                        onChange={(event) => updateCondition(
                          condition.id,
                          condition.kind === 'parity-run'
                            ? { parity: event.target.value as RuleCondition['parity'] }
                            : { range: event.target.value as RuleCondition['range'] }
                        )}
                        disabled={disabled}
                        className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                      >
                        {condition.kind === 'parity-run' ? (
                          <>
                            <option value="even">{localize('Even')}</option>
                            <option value="odd">{localize('Odd')}</option>
                          </>
                        ) : (
                          <>
                            <option value="high">{localize('High (5-9)')}</option>
                            <option value="low">{localize('Low (0-4)')}</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor={`quick-condition-length-${condition.id}`}>{localize('Consecutive digits')}</Label>
                      <Input
                        id={`quick-condition-length-${condition.id}`}
                        type="number"
                        min="1"
                        max="8"
                        step="1"
                        value={condition.length}
                        onChange={(event) => updateCondition(condition.id, {
                          length: Math.max(1, Math.min(8, Number(event.target.value) || 1)),
                        })}
                        disabled={disabled}
                      />
                    </div>
                  </div>
                )}

                {condition.kind === 'sequence' && (
                  <div className="space-y-1.5">
                    <Label htmlFor={`quick-condition-sequence-${condition.id}`}>{localize('Digit sequence')}</Label>
                    <Input
                      id={`quick-condition-sequence-${condition.id}`}
                      value={condition.sequence}
                      onChange={(event) => updateCondition(condition.id, { sequence: event.target.value })}
                      placeholder={localize('Example: 1, 2, 3')}
                      disabled={disabled}
                    />
                    <p className="text-[10px] text-muted-foreground">
                      {localize('Enter two to five digits separated by commas.')}
                    </p>
                  </div>
                )}
              </article>
            ))}

            {conditions.length < 5 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full border-dashed"
                onClick={() => {
                  setConditions((current) => [
                    ...current,
                    createCondition(nextConditionId, analysisType === 'sequence' ? 'sequence' : 'parity-run'),
                  ]);
                  setNextConditionId((current) => current + 1);
                  setSaveError(null);
                }}
                disabled={disabled}
              >
                <Plus />
                {localize('Add condition')}
              </Button>
            )}

            <div className="space-y-3 rounded-lg border border-primary/20 bg-primary/[0.04] p-3 sm:p-4">
              <h5 className="text-xs font-semibold text-foreground">{localize('Then trade')}</h5>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="quick-bot-contract">{localize('Contract')}</Label>
                  <select
                    id="quick-bot-contract"
                    value={contractMode}
                    onChange={(event) => {
                      const nextMode = event.target.value as Exclude<ContractMode, 'DIGITMATCH'>;
                      setContractMode(nextMode);
                      setBarrier((current) => normalizeBarrier(nextMode, current));
                      setSaveError(null);
                      setSavedNotice(null);
                    }}
                    disabled={disabled}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                  >
                    <option value="DIGITDIFF">{localize('Differs')}</option>
                    <option value="DIGITOVER">{localize('Over')}</option>
                    <option value="DIGITUNDER">{localize('Under')}</option>
                    <option value="DIGITEVEN">{localize('Even')}</option>
                    <option value="DIGITODD">{localize('Odd')}</option>
                  </select>
                </div>
                {(contractMode === 'DIGITDIFF' || contractMode === 'DIGITOVER' || contractMode === 'DIGITUNDER') && (
                  <div className="space-y-1.5">
                    <Label htmlFor="quick-bot-barrier">{localize('Digit barrier')}</Label>
                    <Input
                      id="quick-bot-barrier"
                      type="number"
                      min={contractMode === 'DIGITUNDER' ? 1 : 0}
                      max={contractMode === 'DIGITOVER' ? 8 : 9}
                      step="1"
                      value={barrier}
                      onChange={(event) => {
                        setBarrier(normalizeBarrier(contractMode, Number(event.target.value) || 0));
                        setSaveError(null);
                        setSavedNotice(null);
                      }}
                      disabled={disabled}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <section className="space-y-3 rounded-lg border border-border/80 bg-card/70 p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                {localize('Risk management')}
              </h4>
            </div>
            <dl className="space-y-2 text-xs">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{localize('Take profit')}</dt>
                <dd className="font-medium text-foreground">{takeProfit || '—'} USD</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{localize('Stop loss')}</dt>
                <dd className="font-medium text-foreground">{stopLoss || '—'} USD</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{localize('Martingale level')}</dt>
                <dd className="font-medium capitalize text-foreground">{martingaleMode}</dd>
              </div>
            </dl>
            <div className="space-y-1.5">
              <Label htmlFor="quick-bot-maximum-stake">{localize('Maximum stake')}</Label>
              <Input
                id="quick-bot-maximum-stake"
                type="number"
                min={stake || '0.35'}
                step="0.01"
                value={maximumStake}
                onChange={(event) => {
                  setMaximumStake(event.target.value);
                  setSaveError(null);
                  setSavedNotice(null);
                }}
                disabled={disabled}
              />
            </div>
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              {localize('Profit/loss limits and recovery multiplier are shared settings. Change them in Bot Settings.')}
            </p>
            <Button type="button" variant="outline" size="sm" className="w-full" onClick={onOpenSettings}>
              {localize('Open Bot Settings')}
            </Button>
          </section>

          <section className="space-y-3 rounded-lg border border-border/80 bg-card/70 p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                {localize('Recovery options')}
              </h4>
            </div>
            <label className="flex items-start gap-2 text-xs text-foreground">
              <input
                type="checkbox"
                checked={recoveryEnabled}
                onChange={(event) => setRecoveryEnabled(event.target.checked)}
                disabled={disabled}
                className="mt-0.5 h-4 w-4 accent-primary"
              />
              <span>
                <span className="font-medium">{localize('Use recovery multiplier')}</span>
                <span className="mt-1 block text-[10px] leading-relaxed text-muted-foreground">
                  {localize('When enabled, the bot uses the Martingale multiplier from Bot Settings after a loss. Recovery can increase losses.')}
                </span>
              </span>
            </label>
            <p className="text-[10px] text-muted-foreground">
              {localize('Current multiplier: {{multiplier}}×', { multiplier: martingaleMultiplier })}
            </p>
          </section>

          <section className="space-y-2 rounded-lg border border-border/80 bg-card/70 p-3 sm:p-4">
            <Label htmlFor="quick-bot-name">{localize('Bot name')}</Label>
            <Input
              id="quick-bot-name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setSaveError(null);
                setSavedNotice(null);
              }}
              maxLength={80}
              placeholder={localize('Example: Even digit setup')}
              disabled={disabled}
            />
          </section>
        </aside>
      </div>

      <div className="space-y-2 border-t border-border/70 pt-3">
        {compilation.strategy ? (
          <p className="text-xs text-muted-foreground">
            {localize('Rule preview: {{contract}} · Entry: {{condition}}', {
              contract: compilation.strategy.contractDescription,
              condition: compilation.strategy.triggers.map((trigger) => trigger.description).join(' and '),
            })}
          </p>
        ) : (
          <p role="alert" className="text-xs text-destructive">{localize(compilation.error)}</p>
        )}
        {storageError && (
          <p role="alert" className="text-xs text-destructive">
            {localize('Saved bots could not be stored: {{error}}', { error: storageError })}
          </p>
        )}
        {saveError && <p role="alert" className="text-xs text-destructive">{saveError}</p>}
        {savedNotice && <p role="status" className="text-xs text-emerald-500">{savedNotice}</p>}
        <Button
          type="button"
          className="w-full sm:w-auto"
          onClick={saveQuickBot}
          disabled={disabled || !canSave || !name.trim() || !compilation.strategy}
        >
          <Plus />
          {localize('Create Quick Bot')}
        </Button>
      </div>
    </section>
  );
}
