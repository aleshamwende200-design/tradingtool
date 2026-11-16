import { isContinuousIndexSymbol } from '@deriv/core';
import type { ActiveSymbol } from '@deriv/core';
import type { ContractMode } from '@/lib/types';

export const MARKET_SCAN_TICK_COUNT = 30;
export const MARKET_SCAN_DURATION_SECONDS = 15;
export const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;

export interface MarketScanCandidate {
  symbol: ActiveSymbol;
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>;
  barrier: number | null;
  predictionPrices: number[];
  estimatedWinRate: number;
  predictedWinRate: number;
  eligibleForTrading: boolean;
  sampleCount: number;
  triggerMatches: number;
  requiredTriggerMatches: number;
  triggerDescription: string;
}

export function getScannableMarkets(symbols: ActiveSymbol[]): ActiveSymbol[] {
  return symbols.filter(
    (symbol) =>
      symbol.exchange_is_open === 1 &&
      symbol.is_trading_suspended === 0 &&
      isContinuousIndexSymbol(symbol)
  );
}

export function getContractBarrier(
  contractMode: ContractMode,
  selectedDigit: number | null
): number | undefined {
  switch (contractMode) {
    case 'DIGITDIFF':
      return selectedDigit ?? undefined;
    case 'DIGITOVER':
      return selectedDigit ?? 1;
    case 'DIGITUNDER':
      return selectedDigit ?? 8;
    default:
      return undefined;
  }
}

export function hasPriceReversalRisk(prices: number[]): boolean {
  const recent = prices.filter((price) => Number.isFinite(price)).slice(-9);
  if (recent.length < 9) return false;

  const midpoint = 4;
  const previousMove = recent[midpoint] - recent[0];
  const latestMove = recent[recent.length - 1] - recent[midpoint];
  if (previousMove === 0 || latestMove === 0 || previousMove * latestMove >= 0) return false;

  const averageTickMove = recent.slice(1).reduce(
    (total, price, index) => total + Math.abs(price - recent[index]),
    0
  ) / (recent.length - 1);
  const minimumMove = averageTickMove * 1.5;

  return Math.abs(previousMove) >= minimumMove && Math.abs(latestMove) >= minimumMove;
}
