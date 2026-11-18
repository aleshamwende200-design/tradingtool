import { isContinuousIndexSymbol } from '@deriv/core';
import type { ActiveSymbol } from '@deriv/core';
import { computeDigitStats, pipSizeFromPip } from '@/lib/digit-stats';
import type { ContractMode, DigitStats } from '@/lib/types';

export const MARKET_SCAN_TICK_COUNT = 30;
export const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;
export const DIGIT_MATCH_HISTORY_COUNT = 1000;
export const DIGIT_MATCH_SCAN_COUNT = 5;

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
  triggerDescription: string;
}

export interface DigitMatchScanCandidate {
  symbol: ActiveSymbol;
  digitStats: DigitStats;
  topDigits: Array<{ digit: number; percentage: number }>;
  topDigitsCoverage: number;
}

export function createDigitMatchScanCandidate(
  symbol: ActiveSymbol,
  prices: number[],
  digitCount: number
): DigitMatchScanCandidate | null {
  if (prices.length === 0) return null;

  const digitStats = computeDigitStats(prices, pipSizeFromPip(symbol.pip_size));
  const selectedDigitCount = Number.isFinite(digitCount)
    ? Math.min(5, Math.max(1, Math.trunc(digitCount)))
    : 1;
  const topDigits = digitStats.percentages
    .map((percentage, digit) => ({ digit, percentage }))
    .sort((left, right) => right.percentage - left.percentage || left.digit - right.digit)
    .slice(0, selectedDigitCount);

  return {
    symbol,
    digitStats,
    topDigits,
    topDigitsCoverage: topDigits.reduce((total, item) => total + item.percentage, 0),
  };
}

export function chooseBestDigitMatchCandidate(
  candidates: DigitMatchScanCandidate[]
): DigitMatchScanCandidate | null {
  return [...candidates].sort(
    (left, right) =>
      right.topDigitsCoverage - left.topDigitsCoverage ||
      right.topDigits[0].percentage - left.topDigits[0].percentage ||
      left.symbol.underlying_symbol.localeCompare(right.symbol.underlying_symbol)
  )[0] ?? null;
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
