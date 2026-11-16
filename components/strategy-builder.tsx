'use client';

import { useState } from 'react';
import { Bot, CircleAlert, Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { compileUserTradingStrategy } from '@/lib/user-trading-strategy';
import type { StrategyCompilation, UserTradingStrategy } from '@/lib/user-trading-strategy';

interface StrategyBuilderProps {
  status: 'idle' | 'scanning' | 'running' | 'stopping';
  isConnected: boolean;
  isAuthenticated: boolean;
  disabled?: boolean;
  onStart: (strategy: UserTradingStrategy) => Promise<void>;
  onStop: () => void;
}

export function StrategyBuilder({
  status,
  isConnected,
  isAuthenticated,
  disabled = false,
  onStart,
  onStop,
}: StrategyBuilderProps) {
  const { localize } = useAppTranslations();
  const [description, setDescription] = useState('');
  const [compilation, setCompilation] = useState<StrategyCompilation | null>(null);
  const active = status !== 'idle';

  const reviewStrategy = () => {
    setCompilation(compileUserTradingStrategy(description));
  };

  const startStrategy = async () => {
    if (!compilation?.strategy) return;
    await onStart(compilation.strategy);
  };

  return (
    <section className="space-y-3 rounded-xl border border-primary/30 bg-primary/[0.03] p-3 sm:p-4">
      <div className="flex items-center gap-2">
        <Bot className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
          {localize('Describe your strategy')}
        </h3>
      </div>
      <label htmlFor="strategy-description" className="sr-only">
        {localize('Strategy description')}
      </label>
      <textarea
        id="strategy-description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
          setCompilation(null);
        }}
        placeholder={localize('Example: Trade over 1 after 3 consecutive even digits')}
        rows={3}
        maxLength={500}
        disabled={disabled || active}
        className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
      />
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        {localize('Supported: differs, over/under, even or odd contracts; enter after a digit, sequence, or digit run. High means 5-9; low means 0-4.')}
      </p>

      {compilation?.strategy && (
        <div className="space-y-1 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-xs">
          <p className="font-semibold text-foreground">
            {localize('Strategy ready for review')}
          </p>
          <p className="text-muted-foreground">
            {localize('Contract: {{contract}}', {
              contract: compilation.strategy.contractDescription,
            })}
          </p>
          <p className="text-muted-foreground">
            {localize('Entry: {{condition}}', {
              condition: compilation.strategy.trigger.description,
            })}
          </p>
        </div>
      )}
      {compilation?.error && (
        <p role="alert" className="flex items-start gap-2 text-xs text-destructive">
          <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{localize(compilation.error)}</span>
        </p>
      )}

      <div className="flex gap-2">
        {!compilation?.strategy || active ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={reviewStrategy}
            disabled={disabled || active || !description.trim()}
          >
            {localize('Review strategy')}
          </Button>
        ) : (
          <Button
            type="button"
            size="sm"
            className="flex-1"
            onClick={startStrategy}
            disabled={disabled || !isConnected || !isAuthenticated}
          >
            <Play />
            {localize('Start strategy bot')}
          </Button>
        )}
        {active && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="flex-1 border-destructive/50 text-destructive hover:bg-destructive/10"
            onClick={onStop}
            disabled={status === 'stopping'}
          >
            <Square />
            {localize(status === 'stopping' ? 'Stopping...' : 'Stop bot')}
          </Button>
        )}
      </div>

      {compilation?.strategy && !isAuthenticated && (
        <p className="text-[11px] text-muted-foreground">
          {localize('Log in to start this strategy.')}
        </p>
      )}
      <p className="text-[10px] leading-relaxed text-muted-foreground">
        {localize('This bot follows the rule shown above; matching historical ticks are not a guarantee of future results. Trading can lose money.')}
      </p>
    </section>
  );
}
