(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/digits-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitsView",
    ()=>DigitsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$login$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/login-prompt-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$pinned$2d$buy$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/pinned-buy-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$threshold$2d$result$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/threshold-result-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$market$2d$scanner$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/market-scanner-notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-is-mobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/current-tick-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/digit-stats-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/trade-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/risk-management-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/strategy-builder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quick$2d$bot$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quick-bot-builder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/configurable-digits-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/trade-type-chips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/symbol-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/transactions-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$home$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/home-dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$strategies$2d$library$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/strategies-library.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/user-trading-strategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-session-transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/app-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Desktop no-code column split. Digits has no chart, so the market and
 * contract-selection blocks (trade type, contract mode, symbol, tick, digit
 * stats) stand in for it on the left, mirroring the
 * chart-left / controls-right desktop layout of rise-fall and accumulators —
 * and the 3-column desktop the standard Digits layout has always had. The
 * blocks keep their configured relative order inside each column; the
 * drag-to-reorder editor is phone-framed, so the single mobile column stays
 * the source of truth and desktop is a grouped projection of it.
 */ const MARKET_COLUMN_KEYS = [
    'tradeType',
    'contractMode',
    'symbol',
    'tick',
    'digitStats'
];
const CONTROLS_COLUMN_KEYS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CONTROL_KEYS"].filter(_c = (key)=>!MARKET_COLUMN_KEYS.includes(key));
_c1 = CONTROLS_COLUMN_KEYS;
function getDigitTradeTypeOptions(localize) {
    return [
        {
            value: 'matches-differs',
            label: localize('Differs')
        },
        {
            value: 'over-under',
            label: localize('Over/Under')
        },
        {
            value: 'even-odd',
            label: localize('Even/Odd')
        }
    ];
}
function DashboardSidebar({ appName, authState, activePage, onPageChange, isMobile, isOpen, onOpenChange, isCollapsed, onToggleCollapsed }) {
    _s();
    const resolvedName = appName?.trim() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DERIV_APP_NAME?.trim() || 'Pulse Factor';
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [settingsExpanded, setSettingsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigation = [
        {
            id: 'home',
            label: 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
        },
        {
            id: 'strategies',
            label: 'Strategies',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            id: 'bots',
            label: 'Bots',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
        },
        {
            id: 'bot-builder',
            label: 'Bot Settings',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"]
        }
    ];
    const renderSidebarContents = (collapsed, mobile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex shrink-0 items-center border-b border-border py-4', collapsed ? 'justify-between px-1' : 'justify-between gap-3 px-4'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-w-0 items-center gap-3', collapsed && 'justify-center'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 137,
                                    columnNumber: 11
                                }, this),
                                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-bold text-foreground",
                                            children: resolvedName
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Live trading"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 136,
                            columnNumber: 9
                        }, this),
                        mobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": localize('Close menu'),
                            onClick: ()=>onOpenChange(false),
                            className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar'),
                            title: localize(collapsed ? 'Expand sidebar' : 'Collapse sidebar'),
                            onClick: onToggleCollapsed,
                            className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                            children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 166,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 166,
                                columnNumber: 65
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 130,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 flex-1 overflow-y-auto px-3 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Main navigation",
                            className: "space-y-1",
                            children: [
                                navigation.map(({ id, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-current": activePage === id ? 'page' : undefined,
                                        "aria-label": collapsed ? localize(label) : undefined,
                                        title: collapsed ? localize(label) : undefined,
                                        onClick: ()=>{
                                            onPageChange(id);
                                            if (window.location.hash) {
                                                window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}`);
                                            }
                                            if (mobile) onOpenChange(false);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-10 items-center gap-3 rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors', collapsed && 'justify-center px-0', activePage === id ? 'border-primary bg-primary/10 text-primary' : 'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 200,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/reports",
                                    "aria-label": collapsed ? localize('Reports') : undefined,
                                    title: collapsed ? localize('Reports') : undefined,
                                    onClick: ()=>{
                                        if (mobile) onOpenChange(false);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-10 items-center gap-3 rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors', collapsed && 'justify-center px-0', 'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                            className: "h-4 w-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 216,
                                            columnNumber: 13
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "Reports"
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 217,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 203,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 172,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 border-t border-border pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": collapsed ? localize('Settings') : undefined,
                                    "aria-expanded": collapsed ? undefined : settingsExpanded,
                                    title: collapsed ? localize('Settings') : undefined,
                                    onClick: ()=>{
                                        if (collapsed) {
                                            onToggleCollapsed();
                                            setSettingsExpanded(true);
                                            return;
                                        }
                                        setSettingsExpanded((expanded)=>!expanded);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground', collapsed && 'justify-center px-0', settingsExpanded && !collapsed && 'bg-accent text-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                            className: "h-4 w-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 241,
                                            columnNumber: 13
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4 transition-transform', settingsExpanded && 'rotate-180')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 222,
                                    columnNumber: 11
                                }, this),
                                !collapsed && settingsExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-5 px-1 pb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanelFields"], {
                                        authState: authState,
                                        onClose: ()=>{
                                            if (mobile) onOpenChange(false);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 221,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 171,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 129,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                "aria-label": localize('Main navigation and settings'),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-border bg-background/95 backdrop-blur-xl transition-[width] duration-200 lg:flex', isCollapsed ? 'w-20' : 'w-64'),
                children: renderSidebarContents(isCollapsed, false)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                open: isMobile && isOpen,
                onOpenChange: onOpenChange,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                            className: "fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm lg:hidden"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                            className: "fixed inset-y-0 left-0 z-[101] flex w-[85vw] max-w-[360px] flex-col border-r border-border bg-background shadow-2xl outline-none lg:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    className: "sr-only",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Main navigation and settings"
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    id: "dashboard-sidebar",
                                    "aria-label": localize('Main navigation and settings'),
                                    className: "flex min-h-0 flex-1 flex-col",
                                    children: renderSidebarContents(false, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/digits-view.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_s(DashboardSidebar, "p2WEMrdvoY+fmiFqcHvQFwZMJ+I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c2 = DashboardSidebar;
// Edit-mode stand-in for the login prompt's auth handlers — same rule as the
// header: no OAuth navigation out of the editor.
const noopAsyncAuth = async ()=>{};
function DigitsView({ authState, accounts, activeAccount, onLogin, onSignUp, onLogout, onSwitchAccount, isConnected, isLoading, error, symbols, activeSymbol, selectSymbol, currentTick, lastDigit, digitStats, pipSize, openPositions, tradeType, setTradeType, contractMode, setContractMode, selectedDigit, stake, setStake, duration, setDuration, durationLimits, proposal, isProposalLoading, buyContract, startAutoTrading, isBuying, buyResult, buyError, clearBuyResult, takeProfit, setTakeProfit, stopLoss, setStopLoss, martingaleMode, setMartingaleMode, martingaleValues, setMartingaleValue, autoTradingStatus, autoTradingTradeCount, autoTradingProfit, autoTradingMarket, autoTradingEstimatedWinRate, autoTradingScanProgress, thresholdResult, clearThresholdResult, stopAutoTrading, logoSrc, appName, appConfig, editMode, onSelect, selectedKey, rearrangeMode, onReorder }) {
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
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
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const digitTradeTypeOptions = getDigitTradeTypeOptions(localize);
    const [showLoginPrompt, setShowLoginPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDashboardPage, setActiveDashboardPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [activeSavedBotId, setActiveSavedBotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingStrategyTemplate, setPendingStrategyTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleTemplateApplied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DigitsView.useCallback[handleTemplateApplied]": ()=>setPendingStrategyTemplate(null)
    }["DigitsView.useCallback[handleTemplateApplied]"], []);
    const handleUseStrategyTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DigitsView.useCallback[handleUseStrategyTemplate]": (template)=>{
            setPendingStrategyTemplate(template);
            setActiveDashboardPage('bot-builder');
        }
    }["DigitsView.useCallback[handleUseStrategyTemplate]"], []);
    const isDashboardPageActive = (page)=>editMode || activeDashboardPage === page;
    const savedBotStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedBots"])();
    const { transactions, resetTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionTransactions"])(openPositions, symbols, activeAccount?.account_id ?? null, pipSize);
    // Logged-out Buy opens the login/sign-up prompt instead of sending a buy that
    // would fail with a "Purchase Failed" toast. One gate covers every Buy
    // surface (standard, configurable, pinned). Edit mode stays inert — the
    // editor owns Buy clicks there, and its auth actions are already no-ops.
    const handleBuy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DigitsView.useCallback[handleBuy]": async ()=>{
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
        }
    }["DigitsView.useCallback[handleBuy]"], [
        editMode,
        authState,
        autoTradingStatus,
        stopAutoTrading,
        buyContract
    ]);
    const handleSavedBotStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DigitsView.useCallback[handleSavedBotStart]": async (bot)=>{
            const compilation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compileUserTradingStrategy"])(bot.description);
            if (!compilation.strategy) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Saved bot strategy is invalid'), {
                    description: localize(compilation.error)
                });
                return;
            }
            setActiveSavedBotId(bot.id);
            try {
                await startAutoTrading(compilation.strategy, bot);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Could not start saved bot'), {
                    description: error instanceof Error ? error.message : localize('Try again after checking your connection and risk settings.')
                });
            } finally{
                setActiveSavedBotId(null);
            }
        }
    }["DigitsView.useCallback[handleSavedBotStart]"], [
        localize,
        startAutoTrading
    ]);
    const botBuilderProps = {
        canSave: savedBotStore.isLoaded && savedBotStore.canPersist,
        disabled: !!editMode,
        storageError: savedBotStore.storageError,
        template: pendingStrategyTemplate,
        onTemplateApplied: handleTemplateApplied,
        onSave: savedBotStore.saveBot
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
        onCreateBot: ()=>{
            setActiveDashboardPage('bots');
            window.setTimeout(()=>{
                document.getElementById('quick-bot-builder')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 0);
        },
        onDeleteBot: savedBotStore.deleteBot,
        onStartBot: handleSavedBotStart,
        onStopBot: stopAutoTrading
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
        disabled: autoTradingStatus !== 'idle'
    };
    const quickBotBuilderProps = {
        symbols,
        stake,
        onStakeChange: setStake,
        duration,
        onDurationChange: setDuration,
        takeProfit,
        stopLoss,
        martingaleMode,
        martingaleMultiplier: martingaleValues[martingaleMode],
        canSave: savedBotStore.isLoaded && savedBotStore.canPersist,
        storageError: savedBotStore.storageError,
        disabled: !!editMode,
        onSave: savedBotStore.saveBot,
        onOpenSettings: ()=>setActiveDashboardPage('bot-builder')
    };
    const dashboardOverview = !editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$home$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeDashboard"], {
        authState: authState,
        activeAccount: activeAccount,
        activeSymbol: activeSymbol,
        lastDigit: lastDigit,
        transactions: transactions,
        savedBots: savedBotStore.bots,
        autoTradingStatus: autoTradingStatus,
        activeBotId: activeSavedBotId,
        isConnected: isConnected,
        onViewBots: ()=>setActiveDashboardPage('bots')
    }, void 0, false, {
        fileName: "[project]/components/digits-view.tsx",
        lineNumber: 609,
        columnNumber: 5
    }, this) : null;
    // Purchase feedback for the configurable layouts lives HERE, not in
    // ConfigurableDigitsControls: the desktop no-code layout mounts that
    // component once per column, and a per-instance effect would fire every
    // toast twice. Automatic sessions clear successful results without a toast.
    const hasAppConfig = !!appConfig;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitsView.useEffect": ()=>{
            if (!hasAppConfig || !buyError) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Purchase Failed'), {
                description: buyError
            });
            clearBuyResult();
        }
    }["DigitsView.useEffect"], [
        hasAppConfig,
        buyError,
        clearBuyResult,
        localize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitsView.useEffect": ()=>{
            if (!hasAppConfig || !buyResult) return;
            if (autoTradingStatus === 'idle') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(localize('Contract Purchased'), {
                    description: localize('Buy price: {{buyPrice}} USD | Payout: {{payout}} USD | Balance: {{balance}} USD', {
                        buyPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.buyPrice, locale),
                        payout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.payout, locale),
                        balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.balanceAfter, locale)
                    })
                });
            }
            clearBuyResult();
        }
    }["DigitsView.useEffect"], [
        hasAppConfig,
        buyResult,
        autoTradingStatus,
        clearBuyResult,
        localize,
        locale
    ]);
    // In edit mode, login/sign-up/account actions are inert (no OAuth navigation
    // out of the editor) — only the theme toggle stays interactive.
    const headerEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DigitsView.useMemo[headerEl]": ()=>{
            const noop = {
                "DigitsView.useMemo[headerEl].noop": ()=>{}
            }["DigitsView.useMemo[headerEl].noop"];
            const noopAsync = {
                "DigitsView.useMemo[headerEl].noopAsync": async ()=>{}
            }["DigitsView.useMemo[headerEl].noopAsync"];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                authState: authState,
                accounts: accounts,
                activeAccount: activeAccount,
                onLogin: editMode ? noopAsync : onLogin,
                onSignUp: editMode ? noopAsync : onSignUp,
                onLogout: editMode ? noop : onLogout,
                onSwitchAccount: editMode ? noopAsync : onSwitchAccount,
                logoSrc: logoSrc,
                appName: appName,
                settingsOpen: editMode ? settingsOpen : undefined,
                onSettingsOpenChange: editMode ? setSettingsOpen : undefined,
                mobileSidebarOpen: mobileSidebarOpen,
                onMobileSidebarOpenChange: !editMode ? setMobileSidebarOpen : undefined,
                hideBrandOnDesktop: !editMode
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this);
        }
    }["DigitsView.useMemo[headerEl]"], [
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
        setMobileSidebarOpen
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col bg-background items-center justify-center px-4 min-h-dvh",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-destructive",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Connection Error"
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 694,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 693,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 692,
            columnNumber: 7
        }, this);
    }
    // The configurable controls — a reorderable column. `keys` narrows the
    // instance to one desktop column; omitted, it renders every block.
    const renderConfigurable = (keys, compactMarketLayout)=>appConfig ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurableDigitsControls"], {
            config: appConfig,
            lastDigit: lastDigit,
            compactMarketLayout: compactMarketLayout,
            keys: keys,
            symbols: symbols,
            activeSymbol: activeSymbol,
            selectSymbol: selectSymbol,
            currentTick: currentTick,
            digitStats: digitStats,
            pipSize: pipSize,
            tradeType: tradeType,
            onTradeTypeChange: setTradeType,
            contractMode: contractMode,
            onContractModeChange: setContractMode,
            selectedDigit: selectedDigit,
            stake: stake,
            onStakeChange: setStake,
            duration: duration,
            onDurationChange: setDuration,
            durationLimits: durationLimits,
            proposal: proposal,
            isProposalLoading: isProposalLoading,
            onBuy: handleBuy,
            isBuying: isBuying,
            autoTradingStatus: autoTradingStatus,
            isConnected: isConnected,
            editMode: editMode,
            onSelect: onSelect,
            selectedKey: selectedKey,
            rearrangeMode: rearrangeMode,
            onReorder: onReorder,
            pinBuy: pinBuy
        }, void 0, false, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 714,
            columnNumber: 7
        }, this) : null;
    const renderTradeControls = (mobile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeControls"], {
            contractMode: contractMode,
            selectedDigit: selectedDigit,
            isConnected: isConnected,
            stake: stake,
            onStakeChange: setStake,
            duration: duration,
            onDurationChange: setDuration,
            durationLimits: durationLimits,
            proposal: proposal,
            isProposalLoading: isProposalLoading,
            onBuy: handleBuy,
            isBuying: isBuying,
            autoTradingStatus: autoTradingStatus,
            buyResult: buyResult,
            buyError: buyError,
            onClearBuyResult: clearBuyResult,
            isMobile: mobile
        }, void 0, false, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 751,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-dashboard-page": activeDashboardPage,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-shell relative flex flex-col max-lg:h-dvh lg:overflow-visible', appConfig && isMobile ? 'max-lg:overflow-hidden' : 'max-lg:overflow-y-auto', editMode ? 'bg-muted/50' : sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'),
        children: [
            !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardSidebar, {
                appName: appName,
                authState: authState,
                activePage: activeDashboardPage,
                onPageChange: setActiveDashboardPage,
                isMobile: isMobile,
                isOpen: mobileSidebarOpen,
                onOpenChange: setMobileSidebarOpen,
                isCollapsed: sidebarCollapsed,
                onToggleCollapsed: ()=>setSidebarCollapsed((collapsed)=>!collapsed)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 782,
                columnNumber: 9
            }, this),
            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group/hdr sticky top-0 z-50",
                children: [
                    headerEl,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-[60] opacity-0 ring-2 ring-inset ring-muted-foreground/25 transition-opacity group-hover/hdr:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Not editable"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 800,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 798,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 797,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 795,
                columnNumber: 9
            }, this) : headerEl,
            activeDashboardPage === 'home' && (!isMobile || !appConfig) && dashboardOverview,
            !editMode && activeDashboardPage === 'strategies' && !(appConfig && isMobile) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$strategies$2d$library$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrategiesLibrary"], {
                onUseTemplate: handleUseStrategyTemplate,
                canSave: savedBotStore.isLoaded && savedBotStore.canPersist,
                storageError: savedBotStore.storageError,
                onCreateBot: savedBotStore.saveBot
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 810,
                columnNumber: 9
            }, this),
            appConfig ? isMobile ? /* No-code mobile layout: a single, reorderable column of blocks. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 overflow-y-auto overscroll-contain",
                children: [
                    activeDashboardPage === 'home' && dashboardOverview,
                    !editMode && activeDashboardPage === 'strategies' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$strategies$2d$library$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrategiesLibrary"], {
                        onUseTemplate: handleUseStrategyTemplate,
                        canSave: savedBotStore.isLoaded && savedBotStore.canPersist,
                        storageError: savedBotStore.storageError,
                        onCreateBot: savedBotStore.saveBot
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 824,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto flex w-full max-w-md flex-col gap-3 px-3 py-3 sm:px-4', !editMode && (activeDashboardPage === 'home' || activeDashboardPage === 'strategies') && 'hidden'),
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 836,
                            columnNumber: 17
                        }, this) : editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "factorpulse-panel overflow-hidden border-primary/40 bg-card/90",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-3 sm:p-4",
                                children: renderConfigurable()
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 839,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 838,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    id: "market-column",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel overflow-hidden border-primary/45 bg-card/95', !isDashboardPageActive('bot-builder') && 'hidden'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 851,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Market setup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 852,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 850,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4",
                                            children: renderConfigurable(MARKET_COLUMN_KEYS, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 856,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 843,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('space-y-4', !isDashboardPageActive('bot-builder') && 'hidden'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotBuilder"], {
                                            ...botBuilderProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 861,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            id: "manual-trade-controls",
                                            className: "factorpulse-panel border-border/80 bg-card/95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Trade controls"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 866,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-4",
                                                    children: renderConfigurable(CONTROLS_COLUMN_KEYS)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 862,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                            ...riskManagementProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 873,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                            transactions: transactions,
                                            onReset: resetTransactions,
                                            isAuthenticated: authState === 'authenticated'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 874,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 860,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    id: "controls-column",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel overflow-hidden border-primary/45 bg-card/95', !isDashboardPageActive('bots') && 'hidden'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Bot management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 887,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quick$2d$bot$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickBotBuilder"], {
                                                    ...quickBotBuilderProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedBotsPanel"], {
                                                    ...savedBotsPanelProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 893,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 880,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 842,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 831,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 821,
                columnNumber: 11
            }, this) : /* No-code desktop layout: market and trade controls share the first
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
             reordering lives in the builder's phone viewport. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6', !editMode && (activeDashboardPage === 'home' || activeDashboardPage === 'strategies') && 'hidden'),
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-1 gap-4 xl:gap-5', editMode ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]' : activeDashboardPage === 'home' ? 'hidden' : 'lg:grid-cols-1 xl:grid-cols-1'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 930,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 931,
                            columnNumber: 17
                        }, this),
                        !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl lg:col-span-2"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 932,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 922,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-1 gap-4 xl:gap-5', editMode ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]' : activeDashboardPage === 'home' ? 'hidden' : 'lg:grid-cols-1 xl:grid-cols-1'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                id: "market-column",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95', !isDashboardPageActive('bot-builder') && 'hidden'),
                                "data-testid": "market-column",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                        className: "h-4 w-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Market setup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 953,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Market data"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 959,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 952,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-4 p-4 sm:p-5",
                                        children: renderConfigurable(MARKET_COLUMN_KEYS, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 963,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 944,
                                columnNumber: 17
                            }, this),
                            !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full space-y-4 order-3 lg:order-3 lg:col-span-2 xl:order-3 xl:col-span-2', !isDashboardPageActive('bot-builder') && 'hidden', isDashboardPageActive('bot-builder') && 'lg:col-span-1 xl:col-span-1'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotBuilder"], {
                                        ...botBuilderProps
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 973,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        id: "manual-trade-controls",
                                        className: "factorpulse-panel border-border/80 bg-card/95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                        className: "h-4 w-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Trade controls"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 978,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 975,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4 sm:p-5",
                                                children: renderConfigurable(CONTROLS_COLUMN_KEYS)
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 981,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 974,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                        ...riskManagementProps
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 985,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                        transactions: transactions,
                                        onReset: resetTransactions,
                                        isAuthenticated: authState === 'authenticated'
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 986,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 968,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                id: "controls-column",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel overflow-hidden border-primary/45 bg-card/95', editMode ? 'lg:order-2' : 'order-2 lg:order-2 xl:order-2', !isDashboardPageActive('bots') && 'hidden'),
                                "data-testid": "controls-column",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        className: "h-4 w-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Bot management"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 1005,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`,
                                                children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Standby"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4 sm:p-5",
                                        children: [
                                            editMode && renderConfigurable(CONTROLS_COLUMN_KEYS),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quick$2d$bot$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickBotBuilder"], {
                                                ...quickBotBuilderProps
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedBotsPanel"], {
                                                ...savedBotsPanelProps
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 993,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 936,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 935,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 917,
                columnNumber: 11
            }, this) : isMobile ? /* Standard mobile layout (unchanged): trade type chips + main card. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full max-w-7xl mx-auto flex-col px-3 py-2 sm:px-4 sm:py-4 gap-2 sm:gap-3 pb-10', !editMode && (activeDashboardPage === 'home' || activeDashboardPage === 'strategies') && 'hidden'),
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-32 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-28 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-24 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1037,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "w-full h-[420px] rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1043,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1035,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shrink-0 border shadow-sm mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "flex flex-col p-3 pt-3 sm:p-6 sm:pt-4 pb-2 sm:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "market-column",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('space-y-3 pb-4', !isDashboardPageActive('bot-builder') && 'hidden'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                                            className: "shrink-0",
                                            value: tradeType,
                                            options: digitTradeTypeOptions,
                                            onValueChange: setTradeType,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractModeSelector"], {
                                            tradeType: tradeType,
                                            contractMode: contractMode,
                                            onContractModeChange: setContractMode,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col pb-4 pt-1 sm:pb-6 sm:pt-2', !isDashboardPageActive('bot-builder') && 'hidden'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                                            symbols: symbols,
                                            activeSymbol: activeSymbol,
                                            onSymbolChange: selectSymbol,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1075,
                                            columnNumber: 21
                                        }, this),
                                        tradeType === 'even-odd' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-24 items-center justify-center sm:min-h-32",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                tick: currentTick,
                                                lastDigit: lastDigit,
                                                activeSymbol: activeSymbol,
                                                pipSize: pipSize,
                                                compact: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1083,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-t divide-y divide-border', !isDashboardPageActive('bot-builder') && 'border-t-0 divide-y-0'),
                                    children: [
                                        tradeType !== 'even-odd' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('space-y-4 py-4 sm:py-6', !isDashboardPageActive('bot-builder') && 'hidden'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                                                digitStats: digitStats,
                                                selectedDigit: selectedDigit,
                                                lastDigit: lastDigit,
                                                headerRight: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                    tick: currentTick,
                                                    lastDigit: lastDigit,
                                                    activeSymbol: activeSymbol,
                                                    pipSize: pipSize,
                                                    inline: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 29
                                                }, this),
                                                disabled: autoTradingStatus !== 'idle'
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-4 sm:py-6', !isDashboardPageActive('bot-builder') && 'hidden'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotBuilder"], {
                                                    ...botBuilderProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    id: "manual-trade-controls",
                                                    className: "border-border/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                    className: "h-4 w-4 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/digits-view.tsx",
                                                                    lineNumber: 1129,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                        i18n_default_text: "Trade controls"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/digits-view.tsx",
                                                                        lineNumber: 1131,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/digits-view.tsx",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 1128,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            className: "p-4",
                                                            children: renderTradeControls(true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 1134,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                                    ...riskManagementProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                                    transactions: transactions,
                                                    onReset: resetTransactions,
                                                    isAuthenticated: authState === 'authenticated'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1139,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "controls-column",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pt-4 sm:pt-6', !isDashboardPageActive('bots') && 'hidden'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quick$2d$bot$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickBotBuilder"], {
                                                    ...quickBotBuilderProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedBotsPanel"], {
                                                    ...savedBotsPanelProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1094,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1048,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 1047,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1046,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1030,
                columnNumber: 9
            }, this) : /* Standard desktop layout: market data, transactions and trade
           controls sit in that order at xl. At lg, transactions moves below
           the two-column market/controls layout. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6', !editMode && (activeDashboardPage === 'home' || activeDashboardPage === 'strategies') && 'hidden'),
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-1 gap-4 xl:gap-5', editMode ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]' : activeDashboardPage === 'home' ? 'hidden' : 'lg:grid-cols-1 xl:grid-cols-1'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1180,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1181,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1182,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1172,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-1 gap-4 xl:gap-5', editMode ? 'lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]' : activeDashboardPage === 'home' ? 'hidden' : 'lg:grid-cols-1 xl:grid-cols-1'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            id: "market-column",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95', !isDashboardPageActive('bot-builder') && 'hidden'),
                            "data-testid": "market-column",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Market setup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Market data"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1209,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1201,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col gap-4 p-4 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                                            backdrop: "card",
                                            value: tradeType,
                                            options: digitTradeTypeOptions,
                                            onValueChange: setTradeType,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractModeSelector"], {
                                            tradeType: tradeType,
                                            contractMode: contractMode,
                                            onContractModeChange: setContractMode,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                                            symbols: symbols,
                                            activeSymbol: activeSymbol,
                                            onSymbolChange: selectSymbol,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: tradeType === 'even-odd' ? 'mx-auto w-full max-w-[240px]' : 'min-w-0',
                                            children: tradeType !== 'even-odd' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                                                digitStats: digitStats,
                                                selectedDigit: selectedDigit,
                                                lastDigit: lastDigit,
                                                headerRight: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                    tick: currentTick,
                                                    lastDigit: lastDigit,
                                                    activeSymbol: activeSymbol,
                                                    pipSize: pipSize,
                                                    inline: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 27
                                                }, this),
                                                disabled: autoTradingStatus !== 'idle'
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                tick: currentTick,
                                                lastDigit: lastDigit,
                                                activeSymbol: activeSymbol,
                                                pipSize: pipSize,
                                                compact: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1212,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1193,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full space-y-4', editMode ? 'order-2 lg:order-3 lg:col-span-2 xl:order-2 xl:col-span-1' : 'order-3 lg:order-3 lg:col-span-2 xl:order-3 xl:col-span-2', !isDashboardPageActive('bot-builder') && 'hidden', !editMode && isDashboardPageActive('bot-builder') && 'lg:col-span-1 xl:col-span-1'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotBuilder"], {
                                    ...botBuilderProps
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    id: "manual-trade-controls",
                                    className: "factorpulse-panel border-border/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Trade controls"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1273,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 sm:p-5",
                                            children: renderTradeControls(false)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1277,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1270,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                    ...riskManagementProps
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1281,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                    transactions: transactions,
                                    onReset: resetTransactions,
                                    isAuthenticated: authState === 'authenticated'
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1282,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1261,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            id: "controls-column",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('factorpulse-panel overflow-hidden border-primary/45 bg-card/95', editMode ? 'order-3 lg:order-2 xl:order-3' : 'order-2 lg:order-2 xl:order-2', !isDashboardPageActive('bots') && 'hidden'),
                            "data-testid": "controls-column",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Bot management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 1301,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1298,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`,
                                            children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Ready"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Standby"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 1308,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1297,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col gap-4 p-4 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quick$2d$bot$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickBotBuilder"], {
                                            ...quickBotBuilderProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedBotsPanel"], {
                                            ...savedBotsPanelProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 19
                                        }, this),
                                        editMode && renderTradeControls(false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 1312,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 1288,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1185,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1167,
                columnNumber: 9
            }, this),
            pinBuy && (editMode || activeDashboardPage === 'bot-builder') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$pinned$2d$buy$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinnedBuyBar"], {
                editMode: editMode,
                rearrangeMode: rearrangeMode,
                selected: selectedKey === 'buy',
                onSelect: ()=>onSelect?.('buy'),
                label: localize('Buy button'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurableBuyButton"], {
                    variant: appConfig.styles.buy,
                    isConnected: isConnected,
                    onBuy: handleBuy,
                    isBuying: isBuying,
                    autoTradingStatus: autoTradingStatus
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1331,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1324,
                columnNumber: 9
            }, this) : inFlowFooter ? /* Unpinned mobile: the same band the pinned bar ends in, minus the Buy
           button — in flow at the end of the h-dvh column, so the scroll area
           ends where it begins and nothing reserves clearance for it. Sharing
           the band is what keeps the footer from moving when the pin toggles. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterBar"], {}, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1344,
                columnNumber: 9
            }, this) : /* Fixed footer — desktop and the standard layout, which scroll the
           document rather than an inner column. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-0 left-0 right-0 py-2 text-center bg-background/80 backdrop-blur-sm ${!editMode ? 'lg:left-64' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 1349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1348,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$login$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginPromptDialog"], {
                open: showLoginPrompt,
                onOpenChange: setShowLoginPrompt,
                onLogin: editMode ? noopAsyncAuth : onLogin,
                onSignUp: editMode ? noopAsyncAuth : onSignUp
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$market$2d$scanner$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketScannerNotification"], {
                progress: autoTradingScanProgress,
                status: autoTradingStatus,
                onStop: stopAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$threshold$2d$result$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThresholdResultDialog"], {
                result: thresholdResult,
                onClose: clearThresholdResult
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 1364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/digits-view.tsx",
        lineNumber: 773,
        columnNumber: 5
    }, this);
}
_s1(DigitsView, "j1b1w5wAeBFfYgI42W+InaIeXqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$strategy$2d$builder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedBots"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionTransactions"]
    ];
});
_c3 = DigitsView;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CONTROLS_COLUMN_KEYS$ALL_CONTROL_KEYS.filter");
__turbopack_context__.k.register(_c1, "CONTROLS_COLUMN_KEYS");
__turbopack_context__.k.register(_c2, "DashboardSidebar");
__turbopack_context__.k.register(_c3, "DigitsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_digits-view_tsx_1np325-zs9-_6._.js.map