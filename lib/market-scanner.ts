import { isContinuousIndexSymbol } from '@deriv/core';
import type { ActiveSymbol } from '@deriv/core';
import type { ContractMode } from '@/lib/types';

export const MARKET_SCAN_TICK_COUNT = 30;
export const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;

export interface MarketScanCandidate {
  symbol: ActiveSymbol;
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>;
  barrier: number | null;
  predictionPrices: number[];
  estimatedWinRate: number;
  predictedWinRate: number;
  ruleMatched: boolean;
  sampleCount: number;
  triggerMatches: number;
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

export function chooseBestScanCandidate(
  candidates: MarketScanCandidate[]
): MarketScanCandidate | null {
  return [...candidates].sort(
    (left, right) =>
      right.estimatedWinRate - left.estimatedWinRate ||
      right.predictedWinRate - left.predictedWinRate ||
      right.triggerMatches - left.triggerMatches ||
      left.symbol.underlying_symbol.localeCompare(right.symbol.underlying_symbol)
  )[0] ?? null;
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
