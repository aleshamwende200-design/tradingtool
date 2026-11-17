(()=>{"use strict";module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$live$2d$digits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/live-digits.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/app-config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DigitsPage() {
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
        fetch(`${base}/app-config.json`).then((response)=>response.ok ? response.json() : null).then((data)=>{
            if (!cancelled) setConfig(data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeAppConfig"])(data) : null);
        }).catch(()=>{
            if (!cancelled) setConfig(null);
        });
        return ()=>{
            cancelled = true;
        };
    }, []);
    if (config === undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-background"
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 32,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$live$2d$digits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveDigits"], {
        appConfig: config ?? undefined
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
}),
"[project]/hooks/use-base-trading.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseTrading",
    ()=>useBaseTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useActiveSymbols.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useTicks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-open-positions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-closed-positions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-sell-contract.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function useBaseTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed, contractTypes }) {
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    // When the authenticated WS exhausts all reconnect attempts, fall back to
    // the public WS by triggering logout.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isExhausted && ws) {
            onAuthWSFailed?.();
        }
    }, [
        isExhausted,
        ws,
        onAuthWSFailed
    ]);
    const { symbols, activeSymbol, selectSymbol, contracts, contractsAvailable, durationLimits, defaultStake, isLoading: symbolsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveSymbols"])(ws, isConnected, contractTypes);
    const { currentTick, prices, pipSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTicks"])(ws, isConnected, activeSymbol);
    // Surface WS-level errors as toasts. Buy and sell errors are handled by
    // their own hooks and are excluded here to avoid double-reporting.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ws || !isConnected) return;
        return ws.onMessage((data)=>{
            if (!data.error) return;
            const msgType = data.msg_type;
            if (msgType === 'buy' || msgType === 'sell') return;
            const err = data.error;
            // A duplicate subscription is an internal stream-lifecycle event that the
            // subscription layer recovers from on its own, so it is a developer
            // signal rather than an app error. Matched on the code only — the message
            // is server-localized and interpolates the symbol.
            if (err.code === 'AlreadySubscribed') {
                console.warn('[useBaseTrading] duplicate subscription reported by the API', {
                    code: err.code,
                    msgType,
                    message: err.message
                });
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(localize('Error'), {
                // API message when present; app-authored fallback otherwise.
                description: err.message ?? localize('Unexpected error occurred. Please try again.')
            });
        });
    }, [
        ws,
        isConnected,
        localize
    ]);
    const { positions: openPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenPositions"])(ws, isConnected, isAuthenticated);
    const { positions: closedPositions, refresh: refreshClosedPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClosedPositions"])(ws, isConnected, isAuthenticated);
    const { sellContract: sellContractRaw, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSellContract"])(ws, isConnected);
    // Refresh the closed-positions table after each successful sell.
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (contractId, bidPrice)=>{
        await sellContractRaw(contractId, bidPrice);
        await refreshClosedPositions();
    }, [
        sellContractRaw,
        refreshClosedPositions
    ]);
    return {
        ws,
        isConnected,
        isLoading: !isConnected || symbolsLoading,
        error: null,
        symbols,
        activeSymbol,
        selectSymbol,
        currentTick,
        prices,
        pipSize,
        contracts,
        contractsAvailable,
        durationLimits,
        defaultStake,
        openPositions,
        closedPositions,
        refreshClosedPositions,
        sellContract,
        sellingId,
        sellError,
        clearSellError
    };
}
}),
"[project]/hooks/use-closed-positions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClosedPositions",
    ()=>useClosedPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useClosedPositions(ws, isConnected, isAuthenticated) {
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!ws || !isConnected || !isAuthenticated) return;
        setIsLoading(true);
        try {
            const response = await ws.send({
                profit_table: 1,
                description: 1,
                sort: 'DESC',
                limit: 50
            });
            setPositions(response.profit_table?.transactions ?? []);
        } catch  {
        // silent — table simply stays empty on error
        } finally{
            setIsLoading(false);
        }
    }, [
        ws,
        isConnected,
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch();
    }, [
        fetch
    ]);
    return {
        positions,
        isLoading,
        refresh: fetch
    };
}
}),
"[project]/hooks/use-digits-trading.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDigitsTrading",
    ()=>useDigitsTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/ws/deriv-ws.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useProposal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useBuy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-base-trading.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/user-trading-strategy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/martingale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const CONTRACT_TYPES = [
    'DIGITDIFF',
    'DIGITOVER',
    'DIGITUNDER',
    'DIGITEVEN',
    'DIGITODD'
];
const CONTRACT_SETTLEMENT_TIMEOUT_MS = 15 * 60 * 1000;
const CONNECTION_POLL_INTERVAL_MS = 250;
const INITIAL_STRATEGY_MATCH_REQUIREMENT = 2;
const RESUME_STRATEGY_MATCH_REQUIREMENT = 3;
const CONNECTION_LOST = Symbol('connection-lost');
function getCandidatePrediction(candidate, scanNumber, requiredTriggerMatches) {
    return {
        scanNumber,
        market: candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol,
        contractMode: candidate.contractMode,
        barrier: candidate.barrier,
        predictedWinRate: candidate.predictedWinRate,
        estimatedWinRate: candidate.estimatedWinRate,
        sampleCount: candidate.sampleCount,
        triggerMatches: candidate.triggerMatches,
        requiredTriggerMatches,
        triggerDescription: candidate.triggerDescription,
        eligibleForTrading: candidate.eligibleForTrading && candidate.triggerMatches >= requiredTriggerMatches
    };
}
function getScanCandidateKey(symbol, contractMode) {
    return `${symbol}:${contractMode}`;
}
function hasAvailableScanMode(symbol, contractMode, excludedCandidates) {
    return !excludedCandidates.has(getScanCandidateKey(symbol, contractMode));
}
function isNoReturnContractError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDerivApiError"])(error)) return false;
    const code = error.code.replace(/[^a-z]/gi, '').toLowerCase();
    if (code.includes('noreturn') || code.includes('returnunavailable')) return true;
    return /\bcontract\b.{0,80}\b(?:offers?\s+no\s+returns?|has\s+no\s+returns?|does\s+not\s+offer\s+(?:any\s+)?returns?)\b/i.test(error.message);
}
async function fetchTickHistory(ws, symbol, count, shouldStop) {
    const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;
    while(true){
        const connected = await waitForConnection(ws, deadline, shouldStop);
        if (!connected) return null;
        let connectionDropped = false;
        const removeConnectionListener = ws.onConnectionStateChange((isConnected)=>{
            if (!isConnected) connectionDropped = true;
        });
        try {
            const response = await ws.send({
                ticks_history: symbol,
                end: 'latest',
                count,
                style: 'ticks'
            });
            if (connectionDropped) continue;
            return (response.history?.prices ?? []).map(Number).filter((price)=>Number.isFinite(price));
        } catch (error) {
            if (!connectionDropped && ws.isConnected) throw error;
            if (shouldStop()) return null;
            if (Date.now() >= deadline) {
                throw new Error('Timed out retrieving tick history after the WebSocket connection was interrupted.');
            }
        } finally{
            removeConnectionListener();
        }
    }
}
async function scanMarkets(ws, symbols, strategy, requiredTriggerMatches, shouldStop, getLiveTickBuffer, onProgress) {
    const candidates = [];
    const failures = [];
    const eligibleSymbols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols);
    if (eligibleSymbols.length === 0) {
        throw new Error('No open, unsuspended continuous indices are available to scan.');
    }
    const openSymbols = eligibleSymbols;
    if (openSymbols.length === 0) return [];
    let nextIndex = 0;
    let scannedMarkets = 0;
    onProgress(scannedMarkets, openSymbols.length);
    const scanWorker = async ()=>{
        while(!shouldStop()){
            const index = nextIndex;
            nextIndex += 1;
            const symbol = openSymbols[index];
            if (!symbol) return;
            try {
                const historyPrices = await fetchTickHistory(ws, symbol.underlying_symbol, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"], shouldStop);
                const liveTickBuffer = getLiveTickBuffer();
                const prices = liveTickBuffer.symbol === symbol.underlying_symbol && liveTickBuffer.prices.length >= (historyPrices?.length ?? 0) ? liveTickBuffer.prices : historyPrices;
                if (prices && !shouldStop()) {
                    const candidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateUserTradingStrategy"])(symbol, prices, strategy, requiredTriggerMatches);
                    if (candidate) candidates.push(candidate);
                }
            } catch (error) {
                failures.push(`${symbol.underlying_symbol}: ${error instanceof Error ? error.message : String(error)}`);
            } finally{
                scannedMarkets += 1;
                onProgress(scannedMarkets, openSymbols.length);
            }
        }
    };
    await Promise.all(Array.from({
        length: openSymbols.length
    }, ()=>scanWorker()));
    if (shouldStop()) return null;
    if (failures.length > 0) {
        console.warn('[strategy bot] Some markets could not be evaluated.', failures);
    }
    if (candidates.length === 0 && failures.length === openSymbols.length) {
        throw new Error('The strategy bot could not retrieve tick history for any available market.');
    }
    candidates.sort((a, b)=>Number(b.eligibleForTrading) - Number(a.eligibleForTrading) || b.estimatedWinRate - a.estimatedWinRate || b.triggerMatches - a.triggerMatches || a.symbol.underlying_symbol.localeCompare(b.symbol.underlying_symbol));
    return candidates;
}
async function runMarketScanCountdown(onCountdown, shouldStop) {
    const deadline = Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"] * 1000;
    let remaining = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"];
    onCountdown(remaining);
    while(!shouldStop()){
        const nextRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        if (nextRemaining !== remaining) {
            remaining = nextRemaining;
            onCountdown(remaining);
        }
        if (remaining === 0) return true;
        await new Promise((resolve)=>setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, Math.max(1, deadline - Date.now()))));
    }
    return false;
}
async function waitForConnection(ws, deadline, shouldStop = ()=>false) {
    while(!ws.isConnected){
        if (shouldStop()) return false;
        const remaining = deadline - Date.now();
        if (remaining <= 0) {
            throw new Error('Timed out waiting for the WebSocket connection to recover.');
        }
        await new Promise((resolve)=>setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, remaining)));
    }
    return true;
}
async function waitForContractSettlement(ws, contractId) {
    const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;
    while(true){
        await waitForConnection(ws, deadline);
        let unsubscribe = async ()=>{};
        let hasSubscription = false;
        let finished = false;
        let connectionDropped = false;
        let removeConnectionListener = ()=>{};
        let timeout = null;
        const settlement = new Promise((resolve, reject)=>{
            void ws.subscribe({
                proposal_open_contract: 1,
                contract_id: contractId
            }, (data)=>{
                const contract = data.proposal_open_contract;
                if (!contract) return;
                const isClosed = contract.is_sold === 1 || contract.is_expired === 1 || typeof contract.status === 'string' && contract.status !== 'open';
                if (!isClosed) return;
                const profit = Number(contract.profit);
                if (!Number.isFinite(profit)) {
                    reject(new Error('The settled contract did not include a valid profit/loss value.'));
                    return;
                }
                resolve(profit);
            }).then((subscription)=>{
                unsubscribe = subscription.unsubscribe;
                hasSubscription = true;
                if (finished) void unsubscribe();
            }).catch(reject);
        });
        const connectionLost = new Promise((resolve)=>{
            removeConnectionListener = ws.onConnectionStateChange((connected)=>{
                if (connected) return;
                connectionDropped = true;
                resolve(CONNECTION_LOST);
            });
        });
        const remaining = deadline - Date.now();
        const timeoutPromise = new Promise((_, reject)=>{
            timeout = setTimeout(()=>reject(new Error('Timed out waiting for the contract to settle. Auto-trading was stopped.')), Math.max(0, remaining));
        });
        try {
            const result = await Promise.race([
                settlement,
                connectionLost,
                timeoutPromise
            ]);
            if (result !== CONNECTION_LOST) return result;
        } catch (error) {
            if (!connectionDropped && ws.isConnected) throw error;
        } finally{
            finished = true;
            removeConnectionListener();
            if (timeout) clearTimeout(timeout);
            if (hasSubscription) await unsubscribe();
        }
    }
}
function useDigitsTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed }) {
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { ws: tradingWs, isConnected: tradingIsConnected, isLoading, error, symbols, activeSymbol, selectSymbol, currentTick, prices, pipSize, contractsAvailable, durationLimits, defaultStake, openPositions, closedPositions, sellContract, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseTrading"])({
        ws,
        isConnected,
        isExhausted,
        isAuthenticated,
        onAuthWSFailed,
        contractTypes: CONTRACT_TYPES
    });
    // Digits-specific trade state
    const [tradeType, setTradeTypeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('matches-differs');
    const [contractMode, setContractModeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('DIGITDIFF');
    const [selectedDigit, setSelectedDigit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stake, setStake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2.5');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [takeProfit, setTakeProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('5');
    const [stopLoss, setStopLoss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('25');
    const [martingaleMode, setMartingaleMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [martingaleValues, setMartingaleValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        classic: '1.85',
        dynamic: '1.85',
        'super-hybrid': '1.85'
    });
    const [thresholdResult, setThresholdResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingStatus, setAutoTradingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [autoTradingTradeCount, setAutoTradingTradeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingProfit, setAutoTradingProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingMarket, setAutoTradingMarket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingEstimatedWinRate, setAutoTradingEstimatedWinRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingScanProgress, setAutoTradingScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [strategyPredictionSeed, setStrategyPredictionSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectSymbolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selectSymbol);
    const liveTickSymbol = activeSymbol && currentTick?.symbol === activeSymbol.underlying_symbol ? activeSymbol.underlying_symbol : null;
    const liveTickBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        symbol: liveTickSymbol,
        prices
    });
    liveTickBufferRef.current = {
        symbol: liveTickSymbol,
        prices
    };
    const setContractMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((mode)=>{
        setContractModeRaw(mode);
        if (mode === 'DIGITOVER') {
            setSelectedDigit(1);
        } else if (mode === 'DIGITUNDER') {
            setSelectedDigit(8);
        } else {
            setSelectedDigit(null);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectSymbolRef.current = selectSymbol;
    }, [
        selectSymbol
    ]);
    const setMartingaleValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((mode, value)=>{
        setMartingaleValues((current)=>({
                ...current,
                [mode]: value
            }));
    }, []);
    const clearThresholdResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setThresholdResult(null);
    }, []);
    const stopAutoTrading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!autoSessionRef.current) return;
        autoSessionRef.current.stopRequested = true;
        setAutoTradingScanProgress(null);
        setAutoTradingStatus('stopping');
    }, []);
    // Reset contract mode to the first option of the selected trade type
    const setTradeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type)=>{
        setTradeTypeRaw(type);
        switch(type){
            case 'matches-differs':
                setContractMode('DIGITDIFF');
                break;
            case 'over-under':
                setContractMode('DIGITOVER');
                break;
            case 'even-odd':
                setContractMode('DIGITEVEN');
                break;
        }
    }, [
        setContractMode
    ]);
    const useStrategyPredictionSeed = activeSymbol?.underlying_symbol === strategyPredictionSeed?.symbol && prices.length < (strategyPredictionSeed?.prices.length ?? 0);
    const predictionPrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>useStrategyPredictionSeed ? [
            ...strategyPredictionSeed?.prices ?? [],
            ...prices
        ].slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"]) : prices, [
        prices,
        strategyPredictionSeed,
        useStrategyPredictionSeed
    ]);
    const predictionPipSize = useStrategyPredictionSeed && strategyPredictionSeed ? strategyPredictionSeed.pipSize : pipSize;
    const digitStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeDigitStats"])(predictionPrices, predictionPipSize), [
        predictionPrices,
        predictionPipSize
    ]);
    const lastDigit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (currentTick) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(currentTick.quote, pipSize);
        }
        if (predictionPrices.length > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(predictionPrices[predictionPrices.length - 1], predictionPipSize);
        }
        return null;
    }, [
        currentTick,
        predictionPrices,
        predictionPipSize
    ]);
    const { buyContract: buyWithProposal, isBuying, buyResult, buyError, clearBuyResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuy"])(tradingWs, tradingIsConnected);
    // Null out params while a buy is in-flight — forces useProposal to unsubscribe
    // the consumed proposal ID. When isBuying flips back to false, the memo returns
    // real params and useProposal re-subscribes to get a fresh proposal.
    const proposalParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isBuying || !activeSymbol) return null;
        if (contractMode === 'DIGITDIFF' && selectedDigit === null) return null;
        const stakeNum = parseFloat(stake);
        if (!stakeNum || stakeNum <= 0) return null;
        const barrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
        return {
            contractType: contractMode,
            symbol: activeSymbol.underlying_symbol,
            amount: stakeNum,
            duration,
            durationUnit: 't',
            basis: 'stake',
            currency: 'USD',
            ...barrier !== undefined ? {
                barrier
            } : {}
        };
    }, [
        activeSymbol,
        contractMode,
        stake,
        duration,
        selectedDigit,
        isBuying
    ]);
    const { proposal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProposal"])(tradingWs, tradingIsConnected, proposalParams);
    const buyContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (autoSessionRef.current) {
            stopAutoTrading();
            return;
        }
        if (!tradingWs?.isConnected || !proposal?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(localize('Contract quote is not ready'), {
                description: localize('Wait for a live quote before purchasing.')
            });
            return;
        }
        try {
            await buyWithProposal({
                id: proposal.id,
                askPrice: proposal.askPrice,
                payout: proposal.payout,
                longcode: proposal.longcode,
                minStake: proposal.minStake,
                maxPayout: proposal.maxPayout
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(localize('Contract purchase failed'), {
                description: error instanceof Error ? error.message : localize('The purchase could not be completed.')
            });
        }
    }, [
        buyWithProposal,
        localize,
        proposal,
        stopAutoTrading,
        tradingWs
    ]);
    const startAutoTrading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (strategy, settings = {})=>{
        if (autoSessionRef.current) {
            stopAutoTrading();
            return;
        }
        const selectedContractMode = strategy.contractMode;
        const parseTarget = (value, label)=>{
            if (value.trim() === '') return null;
            const parsed = Number(value);
            if (!Number.isFinite(parsed) || parsed <= 0) {
                throw new Error(localize('{{label}} must be greater than zero.', {
                    label
                }));
            }
            return parsed;
        };
        let takeProfitTarget;
        let stopLossTarget;
        const baseStake = Number(settings.stake ?? stake);
        const maximumStake = settings.maximumStake === undefined ? null : Number(settings.maximumStake);
        const tradeDuration = settings.duration ?? duration;
        const multiplier = settings.recoveryEnabled === false ? 1 : Number(martingaleValues[martingaleMode]);
        try {
            takeProfitTarget = parseTarget(takeProfit, localize('Take profit'));
            stopLossTarget = parseTarget(stopLoss, localize('Stop loss'));
            if (takeProfitTarget === null && stopLossTarget === null) {
                throw new Error(localize('Set a take-profit or stop-loss target before starting the strategy bot.'));
            }
            if (!Number.isFinite(baseStake) || baseStake <= 0) {
                throw new Error(localize('Stake must be greater than zero.'));
            }
            if (maximumStake !== null && (!Number.isFinite(maximumStake) || maximumStake < baseStake)) {
                throw new Error(localize('Maximum stake must be at least the initial stake.'));
            }
            if (!Number.isInteger(tradeDuration) || tradeDuration < 1 || tradeDuration > 200) {
                throw new Error(localize('Duration must be between 1 and 200 ticks.'));
            }
            if (!Number.isFinite(multiplier) || multiplier < 1) {
                throw new Error(localize('Martingale multiplier must be at least 1.'));
            }
            if (!tradingWs?.isConnected || !tradingIsConnected || !isAuthenticated) {
                throw new Error(localize('Log in and connect before starting an automatic trading session.'));
            }
            if (symbols.length === 0) throw new Error(localize('No markets are available to scan.'));
            if (settings.marketSymbol && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols).some((symbol)=>symbol.underlying_symbol === settings.marketSymbol)) {
                throw new Error(localize('The selected market is no longer available for bot trading.'));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(localize('Risk settings are invalid'), {
                description: error instanceof Error ? error.message : localize('Check your risk settings and try again.')
            });
            return;
        }
        const session = {
            stopRequested: false
        };
        autoSessionRef.current = session;
        setThresholdResult(null);
        setAutoTradingStatus('scanning');
        setSelectedDigit(strategy.barrier);
        setAutoTradingTradeCount(0);
        setAutoTradingProfit(0);
        setAutoTradingMarket(null);
        setAutoTradingEstimatedWinRate(null);
        setAutoTradingScanProgress(null);
        let sessionProfit = 0;
        let tradeCount = 0;
        let nextStake = baseStake;
        let martingaleProgress = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialMartingaleProgress"]
        };
        let stopReason = '';
        let reachedThreshold = null;
        const currentMarketRef = {
            current: null
        };
        const currentCandidateRef = {
            current: null
        };
        const rejectedCandidates = new Set();
        const skippedNoReturnCandidates = new Set();
        const skippedNegativeEvCandidates = new Set();
        let scanNumber = 0;
        let latestPrediction = null;
        let candidatesFromCurrentScan = [];
        let nextCandidateIndex = 0;
        let requiredTriggerMatches = INITIAL_STRATEGY_MATCH_REQUIREMENT;
        const scanForMarket = async (requiredMatches)=>{
            setAutoTradingStatus('scanning');
            setAutoTradingMarket(null);
            setAutoTradingEstimatedWinRate(null);
            while(!session.stopRequested){
                const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, ()=>session.stopRequested);
                if (!connected) return null;
                scanNumber += 1;
                const eligibleMarkets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols).filter((symbol)=>!settings.marketSymbol || symbol.underlying_symbol === settings.marketSymbol);
                if (eligibleMarkets.length === 0) {
                    throw new Error(localize('No open, unsuspended continuous indices are available to scan.'));
                }
                if (eligibleMarkets.every((symbol)=>!hasAvailableScanMode(symbol.underlying_symbol, selectedContractMode, rejectedCandidates))) {
                    rejectedCandidates.clear();
                }
                const totalMarkets = eligibleMarkets.length;
                setAutoTradingScanProgress({
                    phase: 'scanning',
                    countdownSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"],
                    scannedMarkets: 0,
                    totalMarkets,
                    scanNumber,
                    selectedMarket: null,
                    selectedContractMode: null,
                    estimatedWinRate: null,
                    prediction: latestPrediction,
                    skippedNoReturnMarkets: skippedNoReturnCandidates.size,
                    skippedNegativeEvSetups: skippedNegativeEvCandidates.size
                });
                let scanFailed = false;
                const countdown = runMarketScanCountdown((countdownSeconds)=>{
                    setAutoTradingScanProgress((progress)=>progress?.phase === 'scanning' ? {
                            ...progress,
                            countdownSeconds
                        } : progress);
                }, ()=>session.stopRequested || scanFailed);
                let candidates;
                try {
                    candidates = await scanMarkets(tradingWs, eligibleMarkets, strategy, requiredMatches, ()=>session.stopRequested, ()=>liveTickBufferRef.current, (scannedMarkets, marketCount)=>{
                        setAutoTradingScanProgress((progress)=>progress?.phase === 'scanning' ? {
                                ...progress,
                                scannedMarkets,
                                totalMarkets: marketCount
                            } : progress);
                    });
                } catch (error) {
                    scanFailed = true;
                    await countdown;
                    throw error;
                }
                const countdownComplete = await countdown;
                if (!countdownComplete || session.stopRequested) return null;
                if (candidates?.length) {
                    const availableCandidates = candidates.filter((candidate)=>!rejectedCandidates.has(getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode)));
                    const leadingCandidate = availableCandidates.find((candidate)=>candidate.eligibleForTrading && candidate.triggerMatches >= requiredMatches) ?? availableCandidates[0];
                    if (!leadingCandidate) continue;
                    const prediction = getCandidatePrediction(leadingCandidate, scanNumber, requiredMatches);
                    latestPrediction = prediction;
                    setAutoTradingScanProgress((progress)=>progress?.phase === 'scanning' ? {
                            ...progress,
                            prediction
                        } : progress);
                    return candidates;
                }
                setAutoTradingScanProgress((progress)=>progress?.phase === 'scanning' ? {
                        ...progress,
                        prediction: latestPrediction
                    } : progress);
                if (rejectedCandidates.size > 0) rejectedCandidates.clear();
            }
            return null;
        };
        const selectNextCandidate = async ()=>{
            while(!session.stopRequested){
                while(nextCandidateIndex < candidatesFromCurrentScan.length){
                    const candidate = candidatesFromCurrentScan[nextCandidateIndex];
                    nextCandidateIndex += 1;
                    if (!candidate) continue;
                    const candidateKey = getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode);
                    if (!rejectedCandidates.has(candidateKey) && candidate.eligibleForTrading && candidate.triggerMatches >= requiredTriggerMatches) {
                        return candidate;
                    }
                }
                const nextScanCandidates = await scanForMarket(requiredTriggerMatches);
                if (!nextScanCandidates) return null;
                candidatesFromCurrentScan = nextScanCandidates;
                nextCandidateIndex = 0;
            }
            return null;
        };
        const useScannedMarket = (candidate)=>{
            const prediction = getCandidatePrediction(candidate, scanNumber, requiredTriggerMatches);
            latestPrediction = prediction;
            currentCandidateRef.current = candidate;
            currentMarketRef.current = candidate.symbol;
            setContractMode(candidate.contractMode);
            setTradeTypeRaw(candidate.contractMode === 'DIGITOVER' || candidate.contractMode === 'DIGITUNDER' ? 'over-under' : candidate.contractMode === 'DIGITEVEN' || candidate.contractMode === 'DIGITODD' ? 'even-odd' : 'matches-differs');
            const marketName = candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol;
            if (candidate.barrier !== null) {
                setSelectedDigit(candidate.barrier);
            } else {
                setSelectedDigit(null);
            }
            setStrategyPredictionSeed({
                symbol: candidate.symbol.underlying_symbol,
                pipSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(candidate.symbol.pip_size),
                prices: candidate.predictionPrices
            });
            selectSymbolRef.current(candidate.symbol.underlying_symbol);
            setAutoTradingMarket(marketName);
            setAutoTradingEstimatedWinRate(candidate.estimatedWinRate);
            setAutoTradingScanProgress((progress)=>progress ? {
                    ...progress,
                    phase: 'selected',
                    countdownSeconds: 0,
                    selectedMarket: marketName,
                    selectedContractMode: candidate.contractMode,
                    estimatedWinRate: candidate.estimatedWinRate,
                    prediction
                } : progress);
            setAutoTradingStatus('running');
        };
        const rejectCandidateAndRescan = async (candidate, reason)=>{
            const candidateKey = getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode);
            rejectedCandidates.add(candidateKey);
            if (reason === 'no-return') {
                skippedNoReturnCandidates.add(candidateKey);
            } else {
                skippedNegativeEvCandidates.add(candidateKey);
            }
            setAutoTradingScanProgress((progress)=>progress ? {
                    ...progress,
                    skippedNoReturnMarkets: skippedNoReturnCandidates.size,
                    skippedNegativeEvSetups: skippedNegativeEvCandidates.size
                } : progress);
            const nextCandidate = await selectNextCandidate();
            if (!nextCandidate) return false;
            useScannedMarket(nextCandidate);
            return true;
        };
        try {
            const firstMarket = await selectNextCandidate();
            if (!firstMarket) {
                stopReason = localize('Strategy bot stopped before a matching market was found.');
            } else {
                useScannedMarket(firstMarket);
            }
            while(!session.stopRequested){
                const market = currentMarketRef.current;
                let candidate = currentCandidateRef.current;
                if (!market || !candidate) {
                    throw new Error(localize('The strategy bot did not select a matching market.'));
                }
                const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, ()=>session.stopRequested);
                if (!connected) break;
                const latestPrices = await fetchTickHistory(tradingWs, market.underlying_symbol, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"], ()=>session.stopRequested);
                if (session.stopRequested) break;
                const refreshedCandidate = latestPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateUserTradingStrategy"])(market, latestPrices, strategy, requiredTriggerMatches) : null;
                if (!refreshedCandidate) {
                    candidatesFromCurrentScan = [];
                    nextCandidateIndex = 0;
                    const nextCandidate = await selectNextCandidate();
                    if (!nextCandidate) break;
                    useScannedMarket(nextCandidate);
                    continue;
                }
                useScannedMarket(refreshedCandidate);
                candidate = refreshedCandidate;
                const barrier = candidate.barrier ?? undefined;
                const proposalParams = {
                    proposal: 1,
                    amount: nextStake,
                    basis: 'stake',
                    contract_type: candidate.contractMode,
                    currency: 'USD',
                    underlying_symbol: market.underlying_symbol,
                    duration: tradeDuration,
                    duration_unit: 't',
                    ...barrier !== undefined ? {
                        barrier
                    } : {}
                };
                let proposalResponse;
                let connectionDropped = false;
                const removeConnectionListener = tradingWs.onConnectionStateChange((isConnected)=>{
                    if (!isConnected) connectionDropped = true;
                });
                try {
                    proposalResponse = await tradingWs.send(proposalParams);
                } catch (error) {
                    if (session.stopRequested) break;
                    if (isNoReturnContractError(error)) {
                        const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                        if (!nextCandidateFound) break;
                        continue;
                    }
                    if (!connectionDropped && tradingWs.isConnected) throw error;
                    const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, ()=>session.stopRequested);
                    if (!reconnected) break;
                    continue;
                } finally{
                    removeConnectionListener();
                }
                if (session.stopRequested) break;
                const quote = proposalResponse.proposal;
                if (!quote?.id || !Number.isFinite(quote.ask_price) || quote.ask_price <= 0) {
                    throw new Error(localize('Could not get a valid proposal for the next trade.'));
                }
                if (!Number.isFinite(quote.payout)) {
                    throw new Error(localize('The proposal did not include a valid potential payout.'));
                }
                if (quote.payout <= quote.ask_price) {
                    const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                    if (!nextCandidateFound) break;
                    continue;
                }
                const expectedProfit = candidate.predictedWinRate * quote.payout - quote.ask_price;
                if (expectedProfit <= 0) {
                    const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'negative-ev');
                    if (!nextCandidateFound) break;
                    continue;
                }
                if (!tradingWs.isConnected) {
                    const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, ()=>session.stopRequested);
                    if (!reconnected) break;
                    continue;
                }
                let connectionDroppedDuringPurchase = false;
                const removePurchaseConnectionListener = tradingWs.onConnectionStateChange((isConnected)=>{
                    if (!isConnected) connectionDroppedDuringPurchase = true;
                });
                let purchase;
                let purchaseError = null;
                try {
                    purchase = await buyWithProposal({
                        id: quote.id,
                        askPrice: quote.ask_price,
                        payout: quote.payout,
                        longcode: quote.longcode,
                        minStake: Number(quote.validation_params?.stake?.min ?? 0),
                        maxPayout: Number(quote.validation_params?.payout?.max ?? 0)
                    }, (error)=>{
                        purchaseError = error;
                        return isNoReturnContractError(error);
                    });
                } finally{
                    removePurchaseConnectionListener();
                }
                if (!purchase) {
                    if (isNoReturnContractError(purchaseError)) {
                        const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                        if (!nextCandidateFound) break;
                        continue;
                    }
                    if (connectionDroppedDuringPurchase || !tradingWs.isConnected) {
                        throw new Error(localize('The connection was interrupted while confirming a purchase. Check your transactions before starting another session.'));
                    }
                    throw new Error(localize('Trade purchase failed. Auto-trading was stopped.'));
                }
                clearBuyResult();
                setAutoTradingScanProgress(null);
                requiredTriggerMatches = INITIAL_STRATEGY_MATCH_REQUIREMENT;
                tradeCount += 1;
                setAutoTradingTradeCount(tradeCount);
                const settledProfit = await waitForContractSettlement(tradingWs, purchase.contractId);
                sessionProfit = Math.round((sessionProfit + settledProfit) * 100) / 100;
                setAutoTradingProfit(sessionProfit);
                if (takeProfitTarget !== null && sessionProfit >= takeProfitTarget) {
                    stopReason = localize('Take-profit target reached.');
                    reachedThreshold = {
                        outcome: 'take-profit',
                        profit: sessionProfit,
                        market: market.underlying_symbol_name || market.underlying_symbol
                    };
                    setThresholdResult(reachedThreshold);
                    break;
                }
                if (stopLossTarget !== null && sessionProfit <= -stopLossTarget) {
                    stopReason = localize('Stop-loss limit reached.');
                    reachedThreshold = {
                        outcome: 'stop-loss',
                        profit: sessionProfit,
                        market: market.underlying_symbol_name || market.underlying_symbol
                    };
                    setThresholdResult(reachedThreshold);
                    break;
                }
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMartingaleStake"])(baseStake, multiplier, settledProfit, martingaleProgress);
                if (maximumStake !== null && next.stake > maximumStake) {
                    stopReason = localize('Maximum stake limit reached. The bot stopped before exceeding the configured stake limit.');
                    break;
                }
                nextStake = next.stake;
                if (!Number.isFinite(nextStake) || nextStake <= 0) {
                    throw new Error(localize('Martingale stake exceeded the supported numeric range. Auto-trading was stopped.'));
                }
                martingaleProgress = next.progress;
                if (!session.stopRequested) {
                    const recentPrices = await fetchTickHistory(tradingWs, market.underlying_symbol, 9, ()=>session.stopRequested);
                    if (session.stopRequested) break;
                    if (recentPrices && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPriceReversalRisk"])(recentPrices)) {
                        requiredTriggerMatches = RESUME_STRATEGY_MATCH_REQUIREMENT;
                        candidatesFromCurrentScan = [];
                        nextCandidateIndex = 0;
                        const nextMarket = await selectNextCandidate();
                        if (!nextMarket) break;
                        useScannedMarket(nextMarket);
                    }
                }
            }
            if (session.stopRequested) {
                stopReason = localize('Auto-trading stopped after the current contract settled.');
            } else if (!stopReason && tradeCount === 0) {
                stopReason = localize('Auto-trading stopped before the first trade.');
            }
            if (!reachedThreshold) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(localize('Trading session ended'), {
                    description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
                        reason: stopReason,
                        profit: sessionProfit.toFixed(2),
                        count: tradeCount
                    })
                });
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(localize('Auto-trading stopped'), {
                description: message
            });
        } finally{
            autoSessionRef.current = null;
            setAutoTradingScanProgress(null);
            setAutoTradingStatus('idle');
        }
    }, [
        buyWithProposal,
        clearBuyResult,
        duration,
        isAuthenticated,
        localize,
        martingaleMode,
        martingaleValues,
        setContractMode,
        symbols,
        stake,
        stopAutoTrading,
        stopLoss,
        takeProfit,
        tradingIsConnected,
        tradingWs
    ]);
    return {
        isConnected,
        isLoading,
        error,
        symbols,
        activeSymbol,
        selectSymbol,
        currentTick,
        lastDigit,
        digitStats,
        tradeType,
        setTradeType,
        contractMode,
        setContractMode,
        selectedDigit,
        contractsAvailable,
        pipSize,
        stake,
        setStake,
        duration,
        setDuration,
        durationLimits,
        defaultStake,
        proposal,
        isProposalLoading: isConnected && proposalParams !== null && proposal === null,
        buyContract,
        startAutoTrading,
        isBuying,
        buyResult,
        buyError,
        clearBuyResult,
        openPositions,
        closedPositions,
        sellContract,
        sellingId,
        sellError,
        clearSellError,
        takeProfit,
        setTakeProfit,
        stopLoss,
        setStopLoss,
        martingaleMode,
        setMartingaleMode,
        martingaleValues,
        setMartingaleValue,
        thresholdResult,
        clearThresholdResult,
        autoTradingStatus,
        autoTradingTradeCount,
        autoTradingProfit,
        autoTradingMarket,
        autoTradingEstimatedWinRate,
        autoTradingScanProgress,
        stopAutoTrading
    };
}
}),
"[project]/hooks/use-is-mobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/** Matches Tailwind `lg` breakpoint — below this is considered mobile layout. */ const MOBILE_MEDIA_QUERY = '(max-width: 1023px)';
function useIsMobile() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia(MOBILE_MEDIA_QUERY);
        const sync = ()=>setIsMobile(mq.matches);
        sync();
        mq.addEventListener('change', sync);
        return ()=>mq.removeEventListener('change', sync);
    }, []);
    return isMobile;
}
}),
"[project]/hooks/use-open-positions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOpenPositions",
    ()=>useOpenPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
// How long (ms) to keep a just-closed position in state so SmartCharts can
// render the exit spot and P&L label markers before removing it.
const CLOSED_POSITION_TTL_MS = 1500;
function useOpenPositions(ws, isConnected, isAuthenticated) {
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Track pending removal timers keyed by contract_id
    const removalTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Track whether we have an active subscription so we can forget_all on cleanup
    const isSubscribedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scheduleRemoval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((contractId)=>{
        // Cancel any existing timer for this contract first
        const existing = removalTimers.current.get(contractId);
        if (existing) clearTimeout(existing);
        const timer = setTimeout(()=>{
            setPositions((prev)=>prev.filter((p)=>p.contract_id !== contractId));
            removalTimers.current.delete(contractId);
        }, CLOSED_POSITION_TTL_MS);
        removalTimers.current.set(contractId, timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ws || !isConnected || !isAuthenticated) {
            return ()=>{
                setPositions([]);
            };
        }
        // Capture ref value at effect time so the cleanup closure has a stable reference
        const timers = removalTimers.current;
        // Use global message listener — each open contract has its own subscription.id
        // so we can't use ws.subscribe() for all of them; onMessage catches everything.
        const unsubscribeListener = ws.onMessage((data)=>{
            if (data.msg_type !== 'proposal_open_contract') return;
            const contract = data.proposal_open_contract;
            if (!contract) return;
            const isClosed = !!contract.is_sold || !!contract.is_expired || contract.status !== 'open';
            setPositions((prev)=>{
                const map = new Map(prev.map((p)=>[
                        p.contract_id,
                        p
                    ]));
                // Always upsert the latest data (including exit_spot/exit_spot_time on close)
                map.set(contract.contract_id, contract);
                return Array.from(map.values());
            });
            if (isClosed) {
                // Schedule removal after TTL so exit markers are briefly visible
                scheduleRemoval(contract.contract_id);
            }
        });
        // Kick off subscription — server sends one message per open contract,
        // each with its own subscription.id for live updates.
        ws.send({
            proposal_open_contract: 1,
            subscribe: 1
        }).then(()=>{
            isSubscribedRef.current = true;
        }).catch(()=>{});
        return ()=>{
            unsubscribeListener();
            // Clear all pending removal timers on cleanup
            timers.forEach((t)=>clearTimeout(t));
            timers.clear();
            setPositions([]);
            // Cancel all open-contract streams on the server so the next mount
            // can re-subscribe without hitting AlreadySubscribed.
            if (isSubscribedRef.current && ws.isConnected) {
                ws.send({
                    forget_all: 'proposal_open_contract'
                }).catch(()=>{});
            }
            isSubscribedRef.current = false;
        };
    }, [
        ws,
        isConnected,
        isAuthenticated,
        scheduleRemoval
    ]);
    return {
        positions
    };
}
}),
"[project]/hooks/use-rearrange-drag.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRearrangeDrag",
    ()=>useRearrangeDrag
]);
/**
 * Reusable drag-to-reorder hook for the no-code builders' "rearrange mode".
 *
 * Template-agnostic: it works on any list of string keys (a template's
 * `config.order`). The builder dashboard toggles rearrange mode via a
 * `SET_REARRANGE_MODE` postMessage; while it's on, each layout block becomes
 * draggable and dropping one onto another reorders the list. The new order is
 * reported back through `onReorder` (which the /edit route forwards to the
 * dashboard as a `REORDER` message).
 *
 * Uses native HTML5 drag-and-drop (no library) — spread `getItemProps(key)`
 * onto each draggable block. `draggingKey`/`overKey` drive visual feedback.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useRearrangeDrag(order, onReorder) {
    const [draggingKey, setDraggingKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [overKey, setOverKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((from, to)=>{
        if (from === to) return;
        const next = [
            ...order
        ];
        const fromIdx = next.indexOf(from);
        const toIdx = next.indexOf(to);
        if (fromIdx < 0 || toIdx < 0) return;
        next.splice(fromIdx, 1);
        next.splice(toIdx, 0, from);
        onReorder(next);
    }, [
        order,
        onReorder
    ]);
    const getItemProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>({
            draggable: true,
            onDragStart: (event)=>{
                setDraggingKey(key);
                event.dataTransfer.effectAllowed = 'move';
                // setData is required for drag to work in Firefox.
                try {
                    event.dataTransfer.setData('text/plain', key);
                } catch  {
                /* ignore */ }
            },
            onDragOver: (event)=>{
                // A drag that didn't start in this list (e.g. the other column of a
                // split desktop layout, or content from outside the page) has no valid
                // drop target here. Leaving dragover uncancelled tells the browser the
                // drop is not allowed, so the cursor shows the native not-allowed
                // feedback instead of a "move" affordance that would silently no-op.
                if (draggingKey === null) {
                    event.dataTransfer.dropEffect = 'none';
                    return;
                }
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
                setOverKey((prev)=>prev === key ? prev : key);
            },
            onDragEnter: (event)=>{
                if (draggingKey === null) return;
                event.preventDefault();
                setOverKey((prev)=>prev === key ? prev : key);
            },
            onDrop: (event)=>{
                event.preventDefault();
                setDraggingKey((dragged)=>{
                    if (dragged && dragged !== key) move(dragged, key);
                    return null;
                });
                setOverKey(null);
            },
            onDragEnd: ()=>{
                setDraggingKey(null);
                setOverKey(null);
            }
        }), [
        move,
        draggingKey
    ]);
    return {
        draggingKey,
        overKey: draggingKey !== null ? overKey : null,
        isDragging: draggingKey !== null,
        getItemProps
    };
}
}),
"[project]/hooks/use-scroll-overflow.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollOverflow",
    ()=>useScrollOverflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useScrollOverflow() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [overflow, setOverflow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        canScrollLeft: false,
        canScrollRight: false
    });
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = ref.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        // Sub-pixel layout means scrollLeft rarely lands exactly on either bound, so
        // a 1px tolerance keeps the affordance from flickering at rest.
        const maxScroll = scrollWidth - clientWidth;
        setOverflow({
            canScrollLeft: scrollLeft > 1,
            canScrollRight: scrollLeft < maxScroll - 1
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        measure();
        el.addEventListener('scroll', measure, {
            passive: true
        });
        // Re-measure when the box or its contents change size — a language switch
        // swaps the labels without remounting, and the viewport can be resized.
        // ResizeObserver is absent in some test environments, so fall back to the
        // window resize event rather than throwing.
        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', measure);
            return ()=>{
                el.removeEventListener('scroll', measure);
                window.removeEventListener('resize', measure);
            };
        }
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        // The scrolling box keeps its width while the content inside it grows, so
        // the content has to be observed too.
        if (el.firstElementChild) ro.observe(el.firstElementChild);
        return ()=>{
            el.removeEventListener('scroll', measure);
            ro.disconnect();
        };
    }, [
        measure
    ]);
    return {
        ref,
        ...overflow,
        measure
    };
}
}),
"[project]/hooks/use-sell-contract.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSellContract",
    ()=>useSellContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function useSellContract(ws, isConnected) {
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [sellingId, setSellingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sellError, setSellError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearSellError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setSellError(null), []);
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (contractId, bidPrice)=>{
        if (!ws || !isConnected) return;
        setSellingId(contractId);
        setSellError(null);
        try {
            await ws.send({
                sell: contractId,
                price: bidPrice
            });
        } catch (err) {
            // Prefer API/Error message; localise only the app-authored fallback.
            setSellError(err instanceof Error ? err.message : localize('Sell failed'));
        } finally{
            setSellingId(null);
        }
    }, [
        ws,
        isConnected,
        localize
    ]);
    return {
        sellContract,
        sellingId,
        sellError,
        clearSellError
    };
}
}),
"[project]/hooks/use-session-transactions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionTransactions",
    ()=>useSessionTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/position-amounts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function isOpenPosition(position) {
    return !position.is_sold && !position.is_expired && position.status === 'open';
}
function getPositionLastDigit(position, pipSize, isClosed) {
    if (isClosed && typeof position.exit_spot === 'number' && Number.isFinite(position.exit_spot)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(position.exit_spot, pipSize);
    }
    const lastTick = position.tick_stream?.[position.tick_stream.length - 1];
    if (lastTick) {
        const displayedDigit = /(\d)\D*$/.exec(lastTick.tick_display_value)?.[1];
        if (displayedDigit !== undefined) return Number(displayedDigit);
        if (Number.isFinite(lastTick.tick)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(lastTick.tick, pipSize);
    }
    if (typeof position.exit_spot === 'number' && Number.isFinite(position.exit_spot)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(position.exit_spot, pipSize);
    }
    return null;
}
function useSessionTransactions(openPositions, symbols, activeAccountId, currentPipSize) {
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const sessionStartedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Math.floor(Date.now() / 1000));
    const ignoredContractIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const previousAccountId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activeAccountId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (previousAccountId.current === activeAccountId) return;
        previousAccountId.current = activeAccountId;
        sessionStartedAt.current = Math.floor(Date.now() / 1000);
        ignoredContractIds.current.clear();
        setTransactions([]);
    }, [
        activeAccountId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTransactions((current)=>{
            const byId = new Map(current.map((transaction)=>[
                    transaction.contractId,
                    transaction
                ]));
            for (const position of openPositions){
                if (position.date_start < sessionStartedAt.current || ignoredContractIds.current.has(position.contract_id)) {
                    continue;
                }
                const symbol = symbols.find((item)=>item.underlying_symbol === position.underlying_symbol);
                const positionPipSize = symbol ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(symbol.pip_size) : currentPipSize;
                const isOpen = isOpenPosition(position);
                byId.set(position.contract_id, {
                    contractId: position.contract_id,
                    contractType: position.contract_type,
                    symbol: position.underlying_symbol,
                    stake: position.buy_price,
                    value: position.bid_price,
                    profit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openPositionProfit"])(position),
                    currency: position.currency,
                    timestamp: isOpen ? position.date_start : position.exit_spot_time ?? position.date_expiry ?? position.date_start,
                    status: isOpen ? 'open' : 'closed',
                    lastDigit: getPositionLastDigit(position, positionPipSize, !isOpen)
                });
            }
            return Array.from(byId.values()).sort((left, right)=>right.timestamp - left.timestamp);
        });
    }, [
        openPositions,
        symbols,
        currentPipSize
    ]);
    const resetTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        for (const transaction of transactions){
            ignoredContractIds.current.add(transaction.contractId);
        }
        for (const position of openPositions){
            ignoredContractIds.current.add(position.contract_id);
        }
        setTransactions([]);
    }, [
        openPositions,
        transactions
    ]);
    return {
        transactions,
        resetTransactions
    };
}
}),
"[project]/lib/active-symbols-display-names.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Static display name mappings for Deriv active_symbols API keys.
 *
 * market_display_name, submarket_display_name, and subgroup_display_name are
 * optional fields in the active_symbols response and may be absent for some
 * symbols or configurations. These maps provide reliable fallbacks so
 * SmartCharts' market browser and the positions table always show correct
 * labels (e.g. "Gold Basket" instead of "WLDXAU",
 * "Commodities Basket" instead of "commodity_basket").
 *
 * Source: deriv-com/derivatives-charts src/config/displayNames.ts
 */ // ---------------------------------------------------------------------------
// Symbol display names
// Mapping of raw underlying symbol codes → human-readable names.
// Used in the positions table/cards where only the raw symbol code is available.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "MARKET_DISPLAY_NAMES",
    ()=>MARKET_DISPLAY_NAMES,
    "SUBGROUP_DISPLAY_NAMES",
    ()=>SUBGROUP_DISPLAY_NAMES,
    "SUBMARKET_DISPLAY_NAMES",
    ()=>SUBMARKET_DISPLAY_NAMES,
    "SYMBOL_DISPLAY_NAMES",
    ()=>SYMBOL_DISPLAY_NAMES,
    "getMarketDisplayName",
    ()=>getMarketDisplayName,
    "getSubgroupDisplayName",
    ()=>getSubgroupDisplayName,
    "getSubmarketDisplayName",
    ()=>getSubmarketDisplayName,
    "getSymbolDisplayName",
    ()=>getSymbolDisplayName
]);
const SYMBOL_DISPLAY_NAMES = {
    // Major Pairs
    frxAUDJPY: 'AUD/JPY',
    frxAUDUSD: 'AUD/USD',
    frxEURAUD: 'EUR/AUD',
    frxEURCAD: 'EUR/CAD',
    frxEURCHF: 'EUR/CHF',
    frxEURGBP: 'EUR/GBP',
    frxEURJPY: 'EUR/JPY',
    frxEURUSD: 'EUR/USD',
    frxGBPAUD: 'GBP/AUD',
    frxGBPJPY: 'GBP/JPY',
    frxGBPNOK: 'GBP/NOK',
    frxgbpnok: 'GBP/NOK',
    frxGBPUSD: 'GBP/USD',
    frxUSDCAD: 'USD/CAD',
    frxUSDCHF: 'USD/CHF',
    frxUSDJPY: 'USD/JPY',
    frxUSDNOK: 'USD/NOK',
    frxusdnok: 'USD/NOK',
    frxUSDSEK: 'USD/SEK',
    frxusdsek: 'USD/SEK',
    // Minor Pairs
    frxGBPPLN: 'GBP/PLN',
    frxgbppln: 'GBP/PLN',
    frxAUDCAD: 'AUD/CAD',
    frxAUDCHF: 'AUD/CHF',
    frxAUDNZD: 'AUD/NZD',
    frxEURNZD: 'EUR/NZD',
    frxGBPCAD: 'GBP/CAD',
    frxGBPCHF: 'GBP/CHF',
    frxGBPNZD: 'GBP/NZD',
    frxNZDJPY: 'NZD/JPY',
    frxNZDUSD: 'NZD/USD',
    frxUSDMXN: 'USD/MXN',
    frxUSDPLN: 'USD/PLN',
    frxCADJPY: 'CAD/JPY',
    frxCHFJPY: 'CHF/JPY',
    frxCADCHF: 'CAD/CHF',
    frxNZDCAD: 'NZD/CAD',
    frxNZDCHF: 'NZD/CHF',
    // Basket Indices
    WLDXAU: 'Gold Basket',
    WLDAUD: 'AUD Basket',
    WLDEUR: 'EUR Basket',
    WLDGBP: 'GBP Basket',
    WLDUSD: 'USD Basket',
    // Continuous Indices — Volatility
    R_10: 'Volatility 10 Index',
    R_25: 'Volatility 25 Index',
    R_50: 'Volatility 50 Index',
    R_75: 'Volatility 75 Index',
    R_100: 'Volatility 100 Index',
    '1HZ10V': 'Volatility 10 (1s) Index',
    '1HZ25V': 'Volatility 25 (1s) Index',
    '1HZ50V': 'Volatility 50 (1s) Index',
    '1HZ75V': 'Volatility 75 (1s) Index',
    '1HZ100V': 'Volatility 100 (1s) Index',
    '1HZ150V': 'Volatility 150 (1s) Index',
    '1HZ200V': 'Volatility 200 (1s) Index',
    '1HZ250V': 'Volatility 250 (1s) Index',
    '1HZ300V': 'Volatility 300 (1s) Index',
    // Crash/Boom Indices
    BOOM250: 'Boom 250 Index',
    BOOM300N: 'Boom 300 Index',
    BOOM500: 'Boom 500 Index',
    BOOM600: 'Boom 600 Index',
    BOOM900: 'Boom 900 Index',
    BOOM1000: 'Boom 1000 Index',
    CRASH250: 'Crash 250 Index',
    CRASH300N: 'Crash 300 Index',
    CRASH500: 'Crash 500 Index',
    CRASH600: 'Crash 600 Index',
    CRASH900: 'Crash 900 Index',
    CRASH1000: 'Crash 1000 Index',
    // Daily Reset Indices
    RDBEAR: 'Bear Market Index',
    RDBULL: 'Bull Market Index',
    RDBEAR10: 'Bear Market 10 Index',
    RDBULL10: 'Bull Market 10 Index',
    RDBEAR25: 'Bear Market 25 Index',
    RDBULL25: 'Bull Market 25 Index',
    // Jump Indices
    JD10: 'Jump 10 Index',
    JD25: 'Jump 25 Index',
    JD50: 'Jump 50 Index',
    JD75: 'Jump 75 Index',
    JD100: 'Jump 100 Index',
    JD200: 'Jump 200 Index',
    JD300: 'Jump 300 Index',
    // Step Indices
    stpRNG: 'Step Index 100',
    stpRNG2: 'Step Index 200',
    stpRNG3: 'Step Index 300',
    stpRNG4: 'Step Index 400',
    stpRNG5: 'Step Index 500',
    STPIDX100: 'Step Index 100',
    STPIDX200: 'Step Index 200',
    STPIDX300: 'Step Index 300',
    STPIDX400: 'Step Index 400',
    STPIDX500: 'Step Index 500',
    // Stock Indices — Americas
    OTC_SPC: 'US 500',
    OTC_NDX: 'US Tech 100',
    OTC_DJI: 'Wall Street 30',
    // Stock Indices — Asia/Oceania
    OTC_AS51: 'Australia 200',
    OTC_HSI: 'Hong Kong 50',
    OTC_IBEX35: 'Spain 35',
    OTC_N225: 'Japan 225',
    // Stock Indices — Europe
    OTC_SX5E: 'Euro 50',
    OTC_FCHI: 'France 40',
    OTC_GDAXI: 'Germany 40',
    OTC_AEX: 'Netherlands 25',
    OTC_SMI: 'Swiss 20',
    OTC_SSMI: 'Swiss 20',
    otc_ssmi: 'Swiss 20',
    OTC_FTSE: 'UK 100',
    // Cryptocurrencies
    cryBTCUSD: 'BTC/USD',
    cryETHUSD: 'ETH/USD',
    cryLTCUSD: 'LTC/USD',
    cryBCHUSD: 'BCH/USD',
    cryXRPUSD: 'XRP/USD',
    cryADAUSD: 'ADA/USD',
    cryDOTUSD: 'DOT/USD',
    // Metals / Commodities
    frxXAUUSD: 'Gold/USD',
    frxXPDUSD: 'Palladium/USD',
    frxXPTUSD: 'Platinum/USD',
    frxXAGUSD: 'Silver/USD',
    frxBROUSD: 'Brent Oil/USD',
    frxbrousd: 'Brent Oil/USD'
};
function getSymbolDisplayName(symbolCode) {
    return SYMBOL_DISPLAY_NAMES[symbolCode] ?? symbolCode;
}
const MARKET_DISPLAY_NAMES = {
    forex: 'Forex',
    indices: 'Stock Indices',
    stocks: 'Stocks',
    commodities: 'Commodities',
    cryptocurrency: 'Cryptocurrencies',
    synthetic_index: 'Derived',
    basket_index: 'Baskets',
    energy: 'Energy',
    metals: 'Metals',
    agricultural: 'Agricultural'
};
const SUBMARKET_DISPLAY_NAMES = {
    major_pairs: 'Major Pairs',
    minor_pairs: 'Minor Pairs',
    exotic_pairs: 'Exotic Pairs',
    smart_fx: 'Smart FX',
    americas: 'American indices',
    asia_oceania: 'Asian indices',
    europe_africa: 'European indices',
    europe: 'European indices',
    americas_OTC: 'American indices',
    asia_oceania_OTC: 'Asian indices',
    europe_OTC: 'European indices',
    otc_index: 'OTC Indices',
    random_index: 'Continuous Indices',
    random_daily: 'Daily Reset Indices',
    crash_boom: 'Crash/Boom Indices',
    crash_index: 'Crash/Boom Indices',
    jump_index: 'Jump Indices',
    step_index: 'Step Indices',
    volatility_indices: 'Volatility Indices',
    range_break_indices: 'Range Break Indices',
    forex_basket: 'Forex Basket',
    commodity_basket: 'Commodities Basket',
    cryptocurrency_basket: 'Cryptocurrency Basket',
    energy_basket: 'Energy Basket',
    precious_metals: 'Precious Metals',
    base_metals: 'Base Metals',
    grains: 'Grains',
    soft_commodities: 'Soft Commodities',
    livestock: 'Livestock',
    crypto_usd: 'Cryptocurrencies',
    non_stable_coin: 'Cryptocurrencies',
    crypto_non_usd: 'Crypto/Non-USD',
    us_stocks: 'US Stocks',
    european_stocks: 'European Stocks',
    asian_stocks: 'Asian Stocks',
    metals: 'Metals'
};
const SUBGROUP_DISPLAY_NAMES = {
    none: '',
    major: 'Major',
    minor: 'Minor',
    exotic: 'Exotic',
    micro: 'Micro',
    smart: 'Smart',
    baskets: 'Baskets',
    synthetics: 'Synthetics',
    commodities_basket: 'Commodities Basket',
    forex_basket: 'Forex Basket',
    forex: 'Forex',
    indices: 'Indices',
    commodities: 'Commodities',
    energy: 'Energy',
    metals: 'Metals',
    agricultural: 'Agricultural',
    cryptocurrencies: 'Cryptocurrencies',
    stocks: 'Stocks'
};
function getMarketDisplayName(market) {
    return MARKET_DISPLAY_NAMES[market] ?? formatRawKey(market);
}
function getSubmarketDisplayName(submarket) {
    return SUBMARKET_DISPLAY_NAMES[submarket] ?? formatRawKey(submarket);
}
function getSubgroupDisplayName(subgroup) {
    if (subgroup === 'none') return '';
    return SUBGROUP_DISPLAY_NAMES[subgroup] ?? formatRawKey(subgroup);
}
/** Converts a snake_case or kebab-case key to Title Case. */ function formatRawKey(raw) {
    if (!raw) return '';
    return raw.replace(/[_-]/g, ' ').split(' ').map((word)=>word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word).join(' ').trim();
}
}),
"[project]/lib/app-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_CONTROL_KEYS",
    ()=>ALL_CONTROL_KEYS,
    "DEFAULT_APP_CONFIG",
    ()=>DEFAULT_APP_CONFIG,
    "normalizeAppConfig",
    ()=>normalizeAppConfig
]);
/**
 * No-code Digits (no-chart) app config.
 *
 * Drives the EDITABLE parts of the real Digits app: the style variant of every
 * control (trade type, symbol picker, current tick, digit stats, contract mode,
 * stake, duration, prediction and buy) plus the order of the blocks. Digits has
 * NO chart, so every component is editable — the app header is the only fixed
 * element. The theme colour is handled by the existing branding pipeline
 * (globals.css --primary).
 *
 * When no config is present the app renders exactly as today (default below).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/no-code-config.ts [app-ssr] (ecmascript)");
;
const ALL_CONTROL_KEYS = [
    'tradeType',
    'symbol',
    'tick',
    'digitStats',
    'contractMode',
    'stake',
    'duration',
    'prediction',
    'buy'
];
const DEFAULT_APP_CONFIG = {
    styles: {
        tradeType: 'a',
        symbol: 'a',
        tick: 'a',
        digitStats: 'a',
        contractMode: 'a',
        stake: 'a',
        duration: 'a',
        prediction: 'a',
        buy: 'a'
    },
    order: [
        ...ALL_CONTROL_KEYS
    ],
    buy: {
        pinned: true
    }
};
function normalizeAppConfig(value) {
    if (!value || typeof value !== 'object') return DEFAULT_APP_CONFIG;
    const raw = value;
    const pickVariant = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStyleVariant"])(raw.styles?.[key]) ? raw.styles[key] : 'a';
    const styles = {
        tradeType: pickVariant('tradeType'),
        symbol: pickVariant('symbol'),
        tick: pickVariant('tick'),
        digitStats: pickVariant('digitStats'),
        contractMode: pickVariant('contractMode'),
        stake: pickVariant('stake'),
        duration: pickVariant('duration'),
        prediction: pickVariant('prediction'),
        buy: pickVariant('buy')
    };
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeBlockOrder"])(raw.order, ALL_CONTROL_KEYS);
    // A stored config with no `buy` key predates the pin option: keep that app
    // unpinned rather than adopting the new default on its owner's behalf.
    return {
        styles,
        order,
        buy: {
            pinned: !!raw.buy?.pinned
        }
    };
}
}),
"[project]/lib/digit-stats.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeDigitStats",
    ()=>computeDigitStats,
    "getDigitPercentageRanks",
    ()=>getDigitPercentageRanks,
    "getLastDigit",
    ()=>getLastDigit,
    "pipSizeFromPip",
    ()=>pipSizeFromPip,
    "updateDigitStats",
    ()=>updateDigitStats
]);
function getDigitPercentageRanks(percentages) {
    const levels = [
        ...new Set(percentages)
    ].sort((a, b)=>a - b);
    if (levels.length < 2) return percentages.map(()=>null);
    const highest = levels[levels.length - 1];
    const lowest = levels[0];
    const secondHighest = levels.length >= 3 ? levels[levels.length - 2] : null;
    const secondLowest = levels.length >= 3 ? levels[1] : null;
    return percentages.map((percentage)=>{
        if (percentage === highest) return 'highest';
        if (percentage === lowest) return 'lowest';
        if (percentage === secondHighest) return 'second-highest';
        if (percentage === secondLowest) return 'second-lowest';
        return null;
    });
}
function pipSizeFromPip(pip) {
    if (pip >= 1) return 0;
    const str = pip.toString();
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;
    return str.length - dotIndex - 1;
}
function getLastDigit(price, pipSize) {
    const priceStr = price.toFixed(pipSize);
    const lastChar = priceStr[priceStr.length - 1];
    return parseInt(lastChar, 10);
}
function computeDigitStats(prices, pipSize) {
    const counts = new Array(10).fill(0);
    for (const price of prices){
        const digit = getLastDigit(price, pipSize);
        counts[digit]++;
    }
    const totalTicks = prices.length;
    const percentages = counts.map((count)=>totalTicks > 0 ? count / totalTicks * 100 : 0);
    return {
        counts,
        percentages,
        totalTicks
    };
}
function updateDigitStats(prices, newPrice, windowSize) {
    const updated = [
        ...prices,
        newPrice
    ];
    if (updated.length > windowSize) {
        updated.shift();
    }
    return updated;
}
}),
"[project]/lib/locale-format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closedPositionProfitPercent",
    ()=>closedPositionProfitPercent,
    "formatAmount",
    ()=>formatAmount,
    "formatBalance",
    ()=>formatBalance,
    "formatBarrier",
    ()=>formatBarrier,
    "formatBarrierPercent",
    ()=>formatBarrierPercent,
    "formatDate",
    ()=>formatDate,
    "formatGrowthRate",
    ()=>formatGrowthRate,
    "formatInteger",
    ()=>formatInteger,
    "formatPercent",
    ()=>formatPercent,
    "formatPrice",
    ()=>formatPrice,
    "formatSignedAmount",
    ()=>formatSignedAmount,
    "formatSignedPercent",
    ()=>formatSignedPercent,
    "formatTickPrice",
    ()=>formatTickPrice,
    "isGainAmount",
    ()=>isGainAmount,
    "isGainPercent",
    ()=>isGainPercent,
    "isGainPosition",
    ()=>isGainPosition,
    "parseAmount",
    ()=>parseAmount,
    "roundedSign",
    ()=>roundedSign,
    "tickChangeSign",
    ()=>tickChangeSign,
    "tickDelta",
    ()=>tickDelta
]);
/**
 * `Intl` formatter instances keyed by locale and options. Tick displays and
 * digit statistics format on every tick and the end-time picker formats on
 * every render, so each formatter is built once per (locale, digits) rather
 * than on each call.
 *
 * Only ES2015 `Intl` options are used (`style`, fraction digits), so every
 * engine in Next 14's default browserslist (Safari 12+) formats the same way:
 * `signDisplay` (ES2020) and `style: 'unit'` are deliberately avoided, since
 * older engines ignore the first (no `+` on gains, `-0.00` on breakeven) and
 * throw on the second. Signs are added here from the rounded value instead.
 */ const numberFormats = new Map();
const percentSuffixes = new Map();
const dateFormats = new Map();
function numberFormat(locale, digits) {
    const key = `${locale}|${digits}`;
    let format = numberFormats.get(key);
    if (!format) {
        format = new Intl.NumberFormat(locale, {
            style: 'decimal',
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        });
        numberFormats.set(key, format);
    }
    return format;
}
/**
 * What the locale's `style: 'percent'` formatter prints after the number
 * (`%` in en/pt, a no-break space and `%` in es/fr): the text after the last
 * digit of `format(1)` (`'100 %'` → `' %'`), read once per locale. Plain
 * `format` is ES2015; `formatToParts` would be cleaner but only arrived in
 * Safari 13. Appending the suffix to the decimal formatter's output gives the
 * exact percent-style text without dividing by 100 first, whose binary result
 * can round a half-way percentage (`0.15` → `0.2%`) differently from the
 * decimal formatter and the previous `toFixed` output.
 */ function percentSuffix(locale) {
    let suffix = percentSuffixes.get(locale);
    if (suffix === undefined) {
        const sample = new Intl.NumberFormat(locale, {
            style: 'percent'
        }).format(1);
        suffix = /\d([^\d]*)$/.exec(sample)?.[1] ?? '%';
        percentSuffixes.set(locale, suffix);
    }
    return suffix;
}
/** True when the formatted text shows a non-zero digit: a zero has none in any supported language. */ const hasNonZeroDigit = (text)=>/[1-9]/.test(text);
/**
 * `|value|` with exactly `digits` fraction digits and the locale's grouping,
 * plus whether it rounded to zero. Formatting the magnitude keeps the sign
 * decision in one place (`signOf`), independent of any `Intl` sign option.
 */ function magnitude(value, digits, locale) {
    const text = numberFormat(locale, digits).format(Math.abs(value));
    return {
        text,
        isZero: !hasNonZeroDigit(text)
    };
}
/**
 * The one sign rule. `value` at `digits` fraction digits as `{ text, sign }`:
 * `sign` is `'+'`, `'-'`, or `''` when the magnitude rounds to zero there
 * (`-0.004` at 2 digits → `''`, `-0.005` → `'-'`, matching `Intl`'s
 * half-away-from-zero rounding of the text), and `text` is the magnitude with
 * that sign in front, `+` included only when `plus` is set (the P&L form).
 * `NaN` and infinities have no sign and print as `Intl` prints them.
 */ function signedText(value, digits, locale, plus) {
    if (!Number.isFinite(value)) return {
        text: numberFormat(locale, digits).format(value),
        sign: ''
    };
    const { text, isZero } = magnitude(value, digits, locale);
    const sign = isZero ? '' : value < 0 ? '-' : '+';
    const shown = sign === '-' || sign === '+' && plus ? sign : '';
    return {
        text: `${shown}${text}`,
        sign
    };
}
function roundedSign(value, digits) {
    return signedText(value, digits, 'en', false).sign;
}
/** Minus on negatives only; zero (including `-0` and values rounding to zero) unsigned. */ function formatNumber(value, digits, locale) {
    return signedText(value, digits, locale, false).text;
}
/** `+` on gains, `-` on losses, nothing on zero: the P&L form. */ function formatSignedNumber(value, digits, locale) {
    return signedText(value, digits, locale, true).text;
}
function parseAmount(value) {
    return typeof value === 'string' && value.trim() === '' ? NaN : Number(value);
}
/** Rounds a quote to the pip size exactly as the digit logic does (`toFixed`). */ function roundTick(quote, pipSize) {
    return Number(quote.toFixed(pipSize));
}
function formatAmount(value, locale) {
    return formatNumber(parseAmount(value), 2, locale);
}
function formatBalance(balance, locale) {
    if (balance == null) return formatAmount(NaN, locale);
    const value = typeof balance === 'string' && balance.trim() === '' ? 0 : Number(balance);
    return formatAmount(value, locale);
}
function formatSignedAmount(value, locale) {
    return formatSignedNumber(parseAmount(value), 2, locale);
}
function formatPrice(value, pipSize, locale) {
    return formatNumber(value, pipSize, locale);
}
function formatTickPrice(quote, pipSize, locale) {
    return formatPrice(roundTick(quote, pipSize), pipSize, locale);
}
function tickChangeSign(current, previous, pipSize) {
    const delta = tickDelta(current, previous, pipSize);
    return delta > 0 ? '+' : delta < 0 ? '-' : '';
}
function tickDelta(current, previous, pipSize) {
    if (!Number.isFinite(current) || !Number.isFinite(previous)) return NaN;
    return roundTick(current, pipSize) - roundTick(previous, pipSize);
}
function formatInteger(value, locale) {
    return formatNumber(value, 0, locale);
}
function formatPercent(percent, fractionDigits, locale) {
    return `${formatNumber(percent, fractionDigits, locale)}${percentSuffix(locale)}`;
}
function formatSignedPercent(percent, fractionDigits, locale) {
    return `${formatSignedNumber(percent, fractionDigits, locale)}${percentSuffix(locale)}`;
}
function formatGrowthRate(rate, locale) {
    return formatPercent(rate * 100, 0, locale);
}
function isGainAmount(value) {
    const amount = parseAmount(value);
    return Number.isFinite(amount) && roundedSign(amount, 2) !== '-';
}
function isGainPercent(percent, fractionDigits) {
    return Number.isFinite(percent) && roundedSign(percent, fractionDigits) !== '-';
}
function isGainPosition(profit, profitPercent) {
    return isGainAmount(profit) && (!Number.isFinite(profitPercent) || isGainPercent(profitPercent, 1));
}
function closedPositionProfitPercent(buyPrice, sellPrice) {
    return buyPrice > 0 ? (sellPrice - buyPrice) / buyPrice * 100 : NaN;
}
function formatBarrierPercent(apiValue, locale) {
    if (typeof apiValue !== 'string' && typeof apiValue !== 'number') return '';
    const numeric = String(apiValue).replace(/[\s±%]/g, '');
    if (!/^\d*\.?\d+$/.test(numeric)) return '';
    const fractionDigits = Math.min(numeric.split('.')[1]?.length ?? 0, 20);
    return `±${formatPercent(Number(numeric), fractionDigits, locale)}`;
}
function formatBarrier(apiValue, locale) {
    if (typeof apiValue !== 'string') return '';
    const match = /^([+-]?)(\d+(?:\.(\d+))?)$/.exec(apiValue.trim());
    if (!match) return apiValue;
    const [, sign, number, fraction] = match;
    return `${sign}${formatPrice(Number(number), Math.min(fraction?.length ?? 0, 20), locale)}`;
}
function formatDate(date, locale) {
    let format = dateFormats.get(locale);
    if (!format) {
        format = new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        dateFormats.set(locale, format);
    }
    return format.format(date);
}
}),
"[project]/lib/market-scanner.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MARKET_SCAN_DURATION_SECONDS",
    ()=>MARKET_SCAN_DURATION_SECONDS,
    "MARKET_SCAN_TICK_COUNT",
    ()=>MARKET_SCAN_TICK_COUNT,
    "MINIMUM_MARKET_SCAN_TICKS",
    ()=>MINIMUM_MARKET_SCAN_TICKS,
    "getContractBarrier",
    ()=>getContractBarrier,
    "getScannableMarkets",
    ()=>getScannableMarkets,
    "hasPriceReversalRisk",
    ()=>hasPriceReversalRisk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$is$2d$continuous$2d$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/utils/is-continuous-index.ts [app-ssr] (ecmascript)");
;
const MARKET_SCAN_TICK_COUNT = 30;
const MARKET_SCAN_DURATION_SECONDS = 15;
const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;
function getScannableMarkets(symbols) {
    return symbols.filter((symbol)=>symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$is$2d$continuous$2d$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isContinuousIndexSymbol"])(symbol));
}
function getContractBarrier(contractMode, selectedDigit) {
    switch(contractMode){
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
function hasPriceReversalRisk(prices) {
    const recent = prices.filter((price)=>Number.isFinite(price)).slice(-9);
    if (recent.length < 9) return false;
    const midpoint = 4;
    const previousMove = recent[midpoint] - recent[0];
    const latestMove = recent[recent.length - 1] - recent[midpoint];
    if (previousMove === 0 || latestMove === 0 || previousMove * latestMove >= 0) return false;
    const averageTickMove = recent.slice(1).reduce((total, price, index)=>total + Math.abs(price - recent[index]), 0) / (recent.length - 1);
    const minimumMove = averageTickMove * 1.5;
    return Math.abs(previousMove) >= minimumMove && Math.abs(latestMove) >= minimumMove;
}
}),
"[project]/lib/martingale.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextMartingaleStake",
    ()=>getNextMartingaleStake,
    "initialMartingaleProgress",
    ()=>initialMartingaleProgress
]);
const initialMartingaleProgress = {
    nextStake: null
};
function getNextMartingaleStake(baseStake, multiplier, settledProfit, progress) {
    if (settledProfit > 0) {
        return {
            stake: baseStake,
            progress: {
                ...initialMartingaleProgress
            }
        };
    }
    const stakeToMultiply = progress.nextStake ?? baseStake;
    const nextStake = settledProfit < 0 ? Math.round(stakeToMultiply * multiplier * 100) / 100 : stakeToMultiply;
    return {
        stake: nextStake,
        progress: {
            nextStake
        }
    };
}
}),
"[project]/lib/no-code-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared no-code config helpers.
 *
 * Every no-code template (rise-fall, accumulators, digits) validates an
 * arbitrary stored value into a safe app config the same way: coerce each style
 * to a known variant and rebuild the block order (known-only, de-duped, missing
 * keys appended). Those two pieces are identical across templates, so they live
 * here and are called from each template's `normalizeAppConfig`.
 *
 * Pure TypeScript, no template-specific knowledge — the caller passes its own
 * set of block keys. Imported via `@/lib/no-code-config`, so the BFF copies it
 * into standalone deploys alongside the other shared `@/lib/*` modules.
 */ /** Style variant of a control row. Every control has exactly three. */ __turbopack_context__.s([
    "isStyleVariant",
    ()=>isStyleVariant,
    "normalizeBlockOrder",
    ()=>normalizeBlockOrder
]);
function isStyleVariant(value) {
    return value === "a" || value === "b" || value === "c";
}
function normalizeBlockOrder(rawOrder, allKeys) {
    const known = new Set(allKeys);
    const seen = new Set();
    const order = [];
    if (Array.isArray(rawOrder)) {
        for (const candidate of rawOrder){
            if (typeof candidate === "string" && known.has(candidate) && !seen.has(candidate)) {
                seen.add(candidate);
                const match = allKeys.find((key)=>key === candidate);
                if (match !== undefined) order.push(match);
            }
        }
    }
    for (const key of allKeys)if (!seen.has(key)) order.push(key);
    return order;
}
}),
"[project]/lib/position-amounts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openPositionProfit",
    ()=>openPositionProfit,
    "openPositionTotal",
    ()=>openPositionTotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-ssr] (ecmascript)");
;
function openPositionProfit(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmount"])(position.profit);
}
function openPositionTotal(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmount"])(position.buy_price) + openPositionProfit(position);
}
}),
"[project]/lib/scroll-within-frame.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "centerInScrollContainer",
    ()=>centerInScrollContainer
]);
/**
 * Reveals a block the partner selected in the no-code editor without moving
 * the page that embeds the editor. `Element.scrollIntoView` scrolls every
 * scrollable ancestor, including ones in ancestor browsing contexts, so in the
 * App Builder wizard it scrolled the cross-origin parent page as well
 * (deriv-api-templates#241, deriv-blox#831). `scrollTo` on an in-frame scroller
 * only ever scrolls that scroller.
 *
 * Shared across all no-code templates via `@/lib/scroll-within-frame`.
 *
 * Kept import-free on purpose. The App Builder BFF copies this file into every
 * assembled partner app, and copies shared files only as `<name>.ts`/`.tsx`:
 * a non-TS dependency such as a `.mjs` file is followed by the detector, dropped
 * by the copier, and then breaks the partner's `next build`. Other `.ts` shared
 * files and packages like `@deriv/core` would work, but this helper needs
 * neither. `__tests__/scroll-within-frame.test.ts` fails if an import appears.
 */ function isScrollable(el, view) {
    const { overflowY } = view.getComputedStyle(el);
    return (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
}
function nearestScroller(el) {
    const doc = el.ownerDocument;
    const view = doc.defaultView;
    if (view) {
        // <body>'s overflow propagates to the viewport, so scrolling it moves nothing; use scrollingElement.
        for(let node = el.parentElement; node && node !== doc.body && node !== doc.documentElement; node = node.parentElement){
            if (isScrollable(node, view)) return node;
        }
    }
    return null;
}
function centerInScrollContainer(el) {
    const doc = el.ownerDocument;
    const elRect = el.getBoundingClientRect();
    const scroller = nearestScroller(el);
    if (scroller) {
        const viewTop = scroller.getBoundingClientRect().top + scroller.clientTop;
        const top = scroller.scrollTop + (elRect.top - viewTop) - (scroller.clientHeight - elRect.height) / 2;
        scroller.scrollTo({
            top,
            behavior: 'smooth'
        });
        return;
    }
    const root = doc.scrollingElement;
    if (!root) return;
    const top = root.scrollTop + elRect.top - (doc.documentElement.clientHeight - elRect.height) / 2;
    root.scrollTo({
        top,
        behavior: 'smooth'
    });
}
}),
"[project]/lib/user-trading-strategy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileUserTradingStrategy",
    ()=>compileUserTradingStrategy,
    "evaluateUserTradingStrategy",
    ()=>evaluateUserTradingStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-ssr] (ecmascript)");
;
;
function compileTrigger(condition) {
    const sequenceMatch = condition.match(/\b(?:last\s+)?(?:digit\s+)?(?:sequence\s+)?(\d(?:\s*(?:,|then)\s*\d){1,4})\b/);
    if (sequenceMatch?.[1]) {
        const digits = sequenceMatch[1].match(/\d/g)?.map(Number) ?? [];
        if (digits.length >= 2 && digits.length <= 5) {
            return {
                kind: 'sequence',
                digits,
                description: `after the sequence ${digits.join(', ')}`
            };
        }
    }
    const digitMatch = condition.match(/\b(?:last\s+)?digit\s+(?:is|equals?)\s+([0-9])\b/);
    if (digitMatch?.[1]) {
        const digit = Number(digitMatch[1]);
        return {
            kind: 'digit',
            digit,
            description: `when the last digit is ${digit}`
        };
    }
    const singleParityMatch = condition.match(/\b(?:last\s+)?digit\s+(?:is|equals?)\s+(even|odd)\b/);
    if (singleParityMatch?.[1]) {
        const parity = singleParityMatch[1];
        return {
            kind: 'parity-run',
            parity,
            length: 1,
            description: `when the last digit is ${parity}`
        };
    }
    const singleRangeMatch = condition.match(/\b(?:last\s+)?digit\s+(?:is|equals?)\s+(high|low)\b/);
    if (singleRangeMatch?.[1]) {
        const range = singleRangeMatch[1];
        return {
            kind: 'range-run',
            range,
            length: 1,
            description: `when the last digit is ${range}`
        };
    }
    const parityRunMatch = condition.match(/\b(?:last\s+)?(\d+)\s+consecutive\s+(even|odd)\s+digits?\b/) ?? condition.match(/\blast\s+(\d+)\s+digits?\s+(?:are|all)\s+(even|odd)\b/);
    if (parityRunMatch?.[1] && parityRunMatch[2]) {
        const length = Number(parityRunMatch[1]);
        if (length >= 1 && length <= 8) {
            const parity = parityRunMatch[2];
            return {
                kind: 'parity-run',
                parity,
                length,
                description: `after ${length} consecutive ${parity} digits`
            };
        }
    }
    const rangeRunMatch = condition.match(/\b(?:last\s+)?(\d+)\s+consecutive\s+(high|low)\s+digits?\b/);
    if (rangeRunMatch?.[1] && rangeRunMatch[2]) {
        const length = Number(rangeRunMatch[1]);
        if (length >= 1 && length <= 8) {
            const range = rangeRunMatch[2];
            return {
                kind: 'range-run',
                range,
                length,
                description: `after ${length} consecutive ${range} digits`
            };
        }
    }
    return null;
}
function compileUserTradingStrategy(description) {
    const normalized = description.trim().replace(/\s+/g, ' ');
    if (!normalized) {
        return {
            strategy: null,
            error: 'Describe a contract and an entry condition first.'
        };
    }
    const conditionStart = normalized.search(/\b(?:when|after)\b/i);
    if (conditionStart < 0) {
        return {
            strategy: null,
            error: 'Include an entry condition using “when” or “after”.'
        };
    }
    const contractText = normalized.slice(0, conditionStart).toLowerCase();
    const conditionText = normalized.slice(conditionStart).toLowerCase();
    let contractMode;
    let barrier = null;
    let contractDescription;
    const differsMatch = contractText.match(/\b(?:differs?|different)\s+(?:from\s+)?([0-9])\b/);
    const overMatch = contractText.match(/\b(?:over|above|greater\s+than)\s+([0-8])\b/);
    const underMatch = contractText.match(/\b(?:under|below|less\s+than)\s+([1-9])\b/);
    const evenOddMatch = contractText.match(/\b(even|odd)\b/);
    if (differsMatch?.[1]) {
        contractMode = 'DIGITDIFF';
        barrier = Number(differsMatch[1]);
        contractDescription = `Differs from ${barrier}`;
    } else if (overMatch?.[1]) {
        contractMode = 'DIGITOVER';
        barrier = Number(overMatch[1]);
        contractDescription = `Over ${barrier}`;
    } else if (underMatch?.[1]) {
        contractMode = 'DIGITUNDER';
        barrier = Number(underMatch[1]);
        contractDescription = `Under ${barrier}`;
    } else if (evenOddMatch?.[1]) {
        contractMode = evenOddMatch[1] === 'even' ? 'DIGITEVEN' : 'DIGITODD';
        contractDescription = evenOddMatch[1] === 'even' ? 'Even' : 'Odd';
    } else {
        return {
            strategy: null,
            error: 'Specify a contract such as “differs from 5”, “over 1”, “under 8”, “even”, or “odd”.'
        };
    }
    const triggerParts = conditionText.split(/\s+and\s+/i);
    const triggers = triggerParts.map(compileTrigger);
    if (triggers.length === 0 || triggers.some((trigger)=>trigger === null)) {
        return {
            strategy: null,
            error: 'Entry condition not recognized. Use a last digit, digit sequence, consecutive even/odd digits, or consecutive high/low digits.'
        };
    }
    return {
        strategy: {
            contractMode,
            barrier,
            triggers: triggers.filter((trigger)=>trigger !== null),
            description: normalized,
            contractDescription
        },
        error: null
    };
}
function getTriggerLength(trigger) {
    switch(trigger.kind){
        case 'digit':
            return 1;
        case 'sequence':
            return trigger.digits.length;
        case 'parity-run':
        case 'range-run':
            return trigger.length;
    }
}
function triggerMatches(digits, trigger) {
    switch(trigger.kind){
        case 'digit':
            return digits.length === 1 && digits[0] === trigger.digit;
        case 'sequence':
            return digits.length === trigger.digits.length && trigger.digits.every((digit, index)=>digits[index] === digit);
        case 'parity-run':
            return digits.length === trigger.length && digits.every((digit)=>digit % 2 === (trigger.parity === 'even' ? 0 : 1));
        case 'range-run':
            return digits.length === trigger.length && digits.every((digit)=>trigger.range === 'high' ? digit >= 5 : digit <= 4);
    }
}
function isWinningDigit(digit, contractMode, barrier) {
    switch(contractMode){
        case 'DIGITDIFF':
            return digit !== barrier;
        case 'DIGITOVER':
            return digit > (barrier ?? 1);
        case 'DIGITUNDER':
            return digit < (barrier ?? 8);
        case 'DIGITEVEN':
            return digit % 2 === 0;
        case 'DIGITODD':
            return digit % 2 !== 0;
    }
}
function getWilsonLowerBound(wins, sampleCount) {
    const z = 1.6448536269514722;
    const observedRate = wins / sampleCount;
    const denominator = 1 + z ** 2 / sampleCount;
    const center = observedRate + z ** 2 / (2 * sampleCount);
    const margin = z * Math.sqrt((observedRate * (1 - observedRate) + z ** 2 / (4 * sampleCount)) / sampleCount);
    return (center - margin) / denominator;
}
function evaluateUserTradingStrategy(symbol, prices, strategy, requiredTriggerMatches) {
    const predictionPrices = prices.filter(Number.isFinite).slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"]);
    if (predictionPrices.length < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"] || strategy.triggers.length === 0) return null;
    const pipSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(symbol.pip_size);
    const digits = predictionPrices.map((price)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastDigit"])(price, pipSize));
    const triggerLength = Math.max(...strategy.triggers.map(getTriggerLength));
    const matchesTriggers = (context)=>strategy.triggers.every((trigger)=>{
            const length = getTriggerLength(trigger);
            return triggerMatches(context.slice(-length), trigger);
        });
    if (!matchesTriggers(digits)) return null;
    let triggerMatchesInHistory = 0;
    let wins = 0;
    for(let outcomeIndex = triggerLength; outcomeIndex < digits.length; outcomeIndex += 1){
        const context = digits.slice(0, outcomeIndex);
        if (!matchesTriggers(context)) continue;
        triggerMatchesInHistory += 1;
        if (isWinningDigit(digits[outcomeIndex], strategy.contractMode, strategy.barrier)) {
            wins += 1;
        }
    }
    if (triggerMatchesInHistory < requiredTriggerMatches) return null;
    const predictedWinRate = (wins + 1) / (triggerMatchesInHistory + 2);
    return {
        symbol,
        contractMode: strategy.contractMode,
        barrier: strategy.barrier,
        predictionPrices,
        predictedWinRate,
        estimatedWinRate: getWilsonLowerBound(wins, triggerMatchesInHistory),
        eligibleForTrading: true,
        sampleCount: predictionPrices.length,
        triggerMatches: triggerMatchesInHistory,
        requiredTriggerMatches,
        triggerDescription: strategy.triggers.map((trigger)=>trigger.description).join(' and ')
    };
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
];})()

//# sourceMappingURL=_15qjby7bcj3_7._.js.map