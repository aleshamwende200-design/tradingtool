(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/reports/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-digits-trading.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/deriv-ws-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/logo-src-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$positions$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/positions-table.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const DIGIT_CONTRACT_TYPES = [
    'DIGITMATCH',
    'DIGITDIFF',
    'DIGITOVER',
    'DIGITUNDER',
    'DIGITEVEN',
    'DIGITODD'
];
function getDigitContractLabels(localize) {
    return {
        DIGITMATCH: localize('Digit Match'),
        DIGITDIFF: localize('Digit Differs'),
        DIGITOVER: localize('Digit Over'),
        DIGITUNDER: localize('Digit Under'),
        DIGITEVEN: localize('Digit Even'),
        DIGITODD: localize('Digit Odd')
    };
}
function ReportsPage() {
    _s();
    const logoSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoSrc"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { ws, isConnected, isExhausted, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDerivWSContext"])();
    const { authState, accounts, activeAccount, login, signUp, logout, switchAccount } = auth;
    const trading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitsTrading"])({
        ws,
        isConnected,
        isExhausted,
        isAuthenticated: !!auth.wsUrl,
        onAuthWSFailed: logout
    });
    const digitContractLabels = getDigitContractLabels(localize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportsPage.useEffect": ()=>{
            if (authState === 'unauthenticated' || authState === 'error') {
                router.replace('/');
            }
        }
    }["ReportsPage.useEffect"], [
        authState,
        router
    ]);
    if (authState !== 'authenticated') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col bg-background items-center justify-center min-h-dvh",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/reports/page.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col bg-background max-lg:h-dvh max-lg:overflow-y-auto lg:min-h-dvh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                authState: authState,
                accounts: accounts,
                activeAccount: activeAccount,
                onLogin: login,
                onSignUp: signUp,
                onLogout: logout,
                onSwitchAccount: switchAccount,
                logoSrc: logoSrc
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full max-w-7xl mx-auto px-3 py-4 sm:px-4 sm:py-6 pb-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base leading-none",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$positions$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionsTable"], {
                        openPositions: trading.openPositions.filter((p)=>DIGIT_CONTRACT_TYPES.includes(p.contract_type)),
                        closedPositions: trading.closedPositions.filter((p)=>DIGIT_CONTRACT_TYPES.includes(p.contract_type)),
                        onSell: trading.sellContract,
                        sellingId: trading.sellingId,
                        sellError: trading.sellError,
                        onClearSellError: trading.clearSellError,
                        contractTypeLabels: digitContractLabels,
                        className: "mt-0"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 py-2 text-center bg-background/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reports/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ReportsPage, "8f9blFFFcbQeuyVVFNnK6Lgw5Z8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoSrc"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDerivWSContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitsTrading"]
    ];
});
_c = ReportsPage;
var _c;
__turbopack_context__.k.register(_c, "ReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/closed-position-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClosedPositionCard",
    ()=>ClosedPositionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function getDirectionDisplay(contractType, labels) {
    const label = labels[contractType] ?? contractType;
    return {
        label
    };
}
function formatDuration(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor(s % 3600 / 60);
    const sec = s % 60;
    if (h > 0) return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
function ClosedPositionCard({ pos, contractTypeLabels }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { label: dirLabel } = getDirectionDisplay(pos.contract_type, contractTypeLabels);
    const profit = pos.sell_price - pos.buy_price;
    const isProfit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGainPosition"])(profit, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closedPositionProfitPercent"])(pos.buy_price, pos.sell_price));
    const duration = pos.sell_time - pos.purchase_time;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-4 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-muted rounded px-1.5 py-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-foreground",
                                    children: pos.underlying_symbol
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/closed-position-card.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-foreground leading-tight",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolDisplayName"])(pos.underlying_symbol)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-sm font-semibold text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: dirLabel
                        }, void 0, false, {
                            fileName: "[project]/components/custom/closed-position-card.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/closed-position-card.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-mono text-muted-foreground",
                    children: formatDuration(duration)
                }, void 0, false, {
                    fileName: "[project]/components/custom/closed-position-card.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/closed-position-card.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Total profit/loss:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/closed-position-card.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-bold', isProfit ? 'text-emerald-500' : 'text-destructive'),
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(profit, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Sell price:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/closed-position-card.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.sell_price, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Stake:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/closed-position-card.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.buy_price, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Payout:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/closed-position-card.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.payout, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/closed-position-card.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/closed-position-card.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/closed-position-card.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/closed-position-card.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ClosedPositionCard, "B/WxtxKOkCKuDYNu250svy3IR0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = ClosedPositionCard;
var _c;
__turbopack_context__.k.register(_c, "ClosedPositionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "FooterBar",
    ()=>FooterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
'use client';
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full py-1 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs tracking-wide text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Powered by"
                }, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                        i18n_default_text: "dbotpulse.site"
                    }, void 0, false, {
                        fileName: "[project]/components/custom/footer.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
function FooterBar({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shrink-0 border-t border-border bg-background",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/footer.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = FooterBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "FooterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "SettingsAuthActions",
    ()=>SettingsAuthActions,
    "SettingsPanelFields",
    ()=>SettingsPanelFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/language-switcher.tsx [app-client] (ecmascript)");
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
function AccountLabel({ type }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium whitespace-nowrap truncate', type === 'demo' ? 'text-orange-500' : 'text-emerald-600'),
        children: type === 'demo' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
            i18n_default_text: "Demo account"
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 50,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
            i18n_default_text: "Real account"
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = AccountLabel;
function resolveHeaderAppName(appName) {
    const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DERIV_APP_NAME?.trim();
    return appName?.trim() || fromEnv || 'Pulse Factor';
}
function AuthButtons({ isAuthenticated, isAuthenticating, onLogin, onLogout, onSignUp }) {
    if (isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "h-8 shrink-0 px-2 text-[11px] sm:h-9 sm:px-3 sm:text-sm",
            onClick: onLogout,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                i18n_default_text: "Log out"
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 sm:gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                className: "h-8 shrink-0 px-2 text-[11px] sm:h-9 sm:px-3 sm:text-sm",
                onClick: onLogin,
                disabled: isAuthenticating,
                children: isAuthenticating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Logging in..."
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            onSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                className: "h-8 shrink-0 px-2 text-[11px] sm:h-9 sm:px-3 sm:text-sm",
                onClick: onSignUp,
                disabled: isAuthenticating,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Sign up"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c1 = AuthButtons;
function preventDismissFromPopoverOrHeader(event) {
    const node = event.detail?.originalEvent?.target ?? event.target;
    if (node instanceof Element && node.closest('[data-radix-popper-content-wrapper], [data-radix-popover-content], header')) {
        event.preventDefault();
    }
}
const APPEARANCE_OPTIONS = [
    {
        value: 'quantum-neon',
        label: 'Quantum Neon',
        swatch: 'linear-gradient(135deg, #080516, #cb47ff)'
    },
    {
        value: 'royal-gold',
        label: 'Royal Gold',
        swatch: 'linear-gradient(135deg, #0f0b07, #f5be42)'
    },
    {
        value: 'midnight-eclipse',
        label: 'Midnight Eclipse',
        swatch: 'linear-gradient(135deg, #050c19, #70baff)'
    },
    {
        value: 'crimson-storm',
        label: 'Crimson Storm',
        swatch: 'linear-gradient(135deg, #140509, #ff374a)'
    },
    {
        value: 'aurora-dream',
        label: 'Aurora Dream',
        swatch: 'linear-gradient(135deg, #07111f, #48dccd)'
    },
    {
        value: 'neon-samurai',
        label: 'Neon Samurai',
        swatch: 'linear-gradient(135deg, #100608, #ff3354)'
    },
    {
        value: 'ice-phantom',
        label: 'Ice Phantom',
        swatch: 'linear-gradient(135deg, #050f1b, #64cbff)'
    },
    {
        value: 'royal-galaxy',
        label: 'Royal Galaxy',
        swatch: 'linear-gradient(135deg, #0d071c, #b66eff)'
    },
    {
        value: 'cyber-matrix',
        label: 'Cyber Matrix',
        swatch: 'linear-gradient(135deg, #04120b, #33e87e)'
    }
];
function AppearanceLabel({ value }) {
    const option = APPEARANCE_OPTIONS.find((item)=>item.value === value) ?? APPEARANCE_OPTIONS[4];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
        i18n_default_text: option.label
    }, void 0, false, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 148,
        columnNumber: 10
    }, this);
}
_c2 = AppearanceLabel;
function AppearancePicker() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selected = APPEARANCE_OPTIONS.some((option)=>option.value === theme) ? theme : 'aurora-dream';
    const handleSelect = (value)=>{
        setTheme(value);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Appearance"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "relative w-full h-11 font-semibold justify-start text-left gap-1.5 px-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold tracking-wide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearanceLabel, {
                                        value: selected
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-3.5 w-3.5 text-muted-foreground transition-transform absolute right-3', open && 'rotate-180'),
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                        align: "end",
                        className: "z-[110] w-[var(--radix-popover-trigger-width)] min-w-0 p-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-0.5",
                            children: APPEARANCE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": option.value === selected,
                                        onClick: ()=>handleSelect(option.value),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors', option.value === selected ? 'bg-muted font-medium' : 'hover:bg-muted/50'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-4 w-4 shrink-0 rounded-full border border-foreground/20",
                                                style: {
                                                    background: option.swatch
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearanceLabel, {
                                                value: option.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                }, option.value, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(AppearancePicker, "NSkGxIqsSjVLN/G+HkyyETkOHAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = AppearancePicker;
function SettingsAuthActions({ isAuthenticated, isAuthenticating, onLogin, onLogout, onSignUp }) {
    const className = 'w-full h-11 font-semibold';
    if (isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: className,
            onClick: onLogout,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                    className: "h-4 w-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log out"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className, 'bg-transparent hover:bg-transparent'),
                onClick: onLogin,
                disabled: isAuthenticating,
                children: isAuthenticating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Logging in..."
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            onSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: className,
                onClick: onSignUp,
                disabled: isAuthenticating,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Sign up"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_c4 = SettingsAuthActions;
function SettingsPanelFields({ authState, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearancePicker, {}, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Language"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                        className: "w-full h-11 font-semibold"
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            authState === 'authenticated' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Trading"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        className: "w-full justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/reports",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "View your positions →"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 290,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_c5 = SettingsPanelFields;
function Header({ authState, accounts, activeAccount, onLogin, onLogout, onSwitchAccount, onSignUp, logoSrc, appName, settingsOpen: controlledSettingsOpen, onSettingsOpenChange, mobileSidebarOpen, onMobileSidebarOpenChange, hideBrandOnDesktop = false }) {
    _s1();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [logoError, setLogoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolvedName = resolveHeaderAppName(appName);
    const logoLetter = resolvedName.charAt(0).toUpperCase() || 'D';
    const [accountSwitcherOpen, setAccountSwitcherOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [internalSettingsOpen, setInternalSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const settingsDialogOpen = controlledSettingsOpen ?? internalSettingsOpen;
    const setSettingsDialogOpen = onSettingsOpenChange ?? setInternalSettingsOpen;
    const mobileMenuOpen = onMobileSidebarOpenChange ? mobileSidebarOpen ?? false : settingsDialogOpen;
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menuTop, setMenuTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isAuthenticated = authState === 'authenticated';
    const isAuthenticating = authState === 'authenticating';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Header.useLayoutEffect": ()=>{
            if (!settingsDialogOpen) return;
            const el = headerRef.current;
            const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 1024px)') : null;
            const sync = {
                "Header.useLayoutEffect.sync": ()=>{
                    setMenuTop(mq?.matches ? 0 : el?.getBoundingClientRect().bottom ?? 0);
                }
            }["Header.useLayoutEffect.sync"];
            sync();
            window.addEventListener('resize', sync);
            mq?.addEventListener('change', sync);
            return ({
                "Header.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', sync);
                    mq?.removeEventListener('change', sync);
                }
            })["Header.useLayoutEffect"];
        }
    }["Header.useLayoutEffect"], [
        settingsDialogOpen
    ]);
    const headerBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: "sticky top-0 z-50 flex items-center justify-between border-b border-primary/30 bg-background/90 px-2.5 py-2 shadow-[0_1px_0_rgb(242_161_55/0.08)] backdrop-blur-sm sm:px-6 sm:py-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-1 sm:gap-3",
                children: [
                    !hideBrandOnDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden shrink-0 items-center gap-3 lg:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this),
                    onMobileSidebarOpenChange ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "shrink-0 lg:hidden",
                        "aria-label": localize(mobileMenuOpen ? 'Close menu' : 'Open menu'),
                        "aria-expanded": mobileMenuOpen,
                        onClick: ()=>onMobileSidebarOpenChange(!mobileMenuOpen),
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 375,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 375,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "shrink-0 lg:hidden",
                            "aria-label": localize('Settings'),
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 385,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 385,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('brand-logo-mark hidden shrink-0 items-center justify-center sm:flex', hideBrandOnDesktop && 'lg:hidden'),
                        children: !logoSrc || logoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary",
                            children: logoLetter
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this) : // eslint-disable-next-line @next/next/no-img-element -- next/image is avoided here intentionally: it errors in the optimizer when /logo.png is absent locally; a plain img with onError gives the same silent fallback behaviour
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logoSrc,
                            alt: localize('App Logo'),
                            className: "h-9 w-auto max-w-[96px] object-contain sm:h-12 sm:max-w-[140px]",
                            onError: ()=>setLogoError(true)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('brand-name block min-w-0 max-w-[88px] truncate text-xs font-bold tracking-wide sm:max-w-none sm:text-lg', hideBrandOnDesktop && 'lg:hidden'),
                        children: resolvedName
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-1 sm:gap-3",
                children: [
                    isAuthenticated && activeAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        open: accountSwitcherOpen,
                        onOpenChange: setAccountSwitcherOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex min-w-0 items-center gap-2 rounded-lg border border-border px-3 hover:bg-muted/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountLabel, {
                                                    type: activeAccount.account_type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-bold text-foreground whitespace-nowrap truncate",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBalance"])(activeAccount.balance, locale),
                                                        " ",
                                                        activeAccount.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-4 h-4 text-muted-foreground transition-transform', accountSwitcherOpen && 'rotate-180'),
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                align: "end",
                                className: "z-[100] w-64 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onSwitchAccount(account.account_id);
                                                setAccountSwitcherOpen(false);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full text-left rounded-lg px-3 py-2.5 transition-colors', account.account_id === activeAccount.account_id ? 'bg-muted' : 'hover:bg-muted/50'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountLabel, {
                                                    type: account.account_type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-bold text-foreground",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBalance"])(account.balance, locale),
                                                        " ",
                                                        account.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, account.account_id, true, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1 sm:gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthButtons, {
                            isAuthenticated: isAuthenticated,
                            isAuthenticating: isAuthenticating,
                            onLogin: onLogin,
                            onLogout: onLogout,
                            onSignUp: onSignUp
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 354,
        columnNumber: 7
    }, this);
    if (onMobileSidebarOpenChange) return headerBar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        modal: false,
        open: settingsDialogOpen,
        onOpenChange: setSettingsDialogOpen,
        children: [
            headerBar,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                    loop: true,
                    trapped: settingsDialogOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        "aria-modal": "true",
                        className: "fixed bottom-0 left-0 z-[100] flex w-[85vw] max-w-[420px] flex-col border-r border-border bg-background outline-none shadow-2xl lg:inset-y-0",
                        style: {
                            top: menuTop
                        },
                        onPointerDownOutside: preventDismissFromPopoverOrHeader,
                        onInteractOutside: preventDismissFromPopoverOrHeader,
                        onFocusOutside: preventDismissFromPopoverOrHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-6 pt-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                        className: "text-lg font-semibold leading-none tracking-tight",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Settings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/custom/header.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                                        className: "text-sm text-muted-foreground",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Manage your appearance and language preferences."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/custom/header.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 497,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "hidden shrink-0 lg:inline-flex",
                                                    "aria-label": localize('Close settings'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 505,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 496,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanelFields, {
                                        authState: authState,
                                        onClose: ()=>setSettingsDialogOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 511,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 495,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsAuthActions, {
                                    isAuthenticated: isAuthenticated,
                                    isAuthenticating: isAuthenticating,
                                    onLogin: onLogin,
                                    onLogout: ()=>{
                                        setSettingsDialogOpen(false);
                                        onLogout();
                                    },
                                    onSignUp: onSignUp
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 517,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 516,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 487,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 486,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 475,
        columnNumber: 5
    }, this);
}
_s1(Header, "NhfftAWlLn4zPUhvnFY+WgC2gk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c6 = Header;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "AccountLabel");
__turbopack_context__.k.register(_c1, "AuthButtons");
__turbopack_context__.k.register(_c2, "AppearanceLabel");
__turbopack_context__.k.register(_c3, "AppearancePicker");
__turbopack_context__.k.register(_c4, "SettingsAuthActions");
__turbopack_context__.k.register(_c5, "SettingsPanelFields");
__turbopack_context__.k.register(_c6, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function LanguageSwitcher({ className }) {
    _s();
    const { currentLang, switchLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFullWidth = /\bw-full\b/.test(className ?? '') && /\bh-11\b/.test(className ?? '');
    const handleSelect = (lang)=>{
        switchLanguage(lang);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isFullWidth ? 'relative justify-start text-left gap-1.5 px-3' : 'min-w-[4.5rem] justify-between gap-1.5 px-2.5', className),
                    "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][currentLang],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold tracking-wide",
                            children: currentLang
                        }, void 0, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-3.5 w-3.5 text-muted-foreground transition-transform', isFullWidth && 'absolute right-3', open && 'rotate-180'),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/language-switcher.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/language-switcher.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/language-switcher.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "end",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('z-[110] p-1', isFullWidth ? 'w-[var(--radix-popover-trigger-width)] min-w-0' : 'w-44'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-0.5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelect(lang),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors', lang === currentLang ? 'bg-muted font-medium' : 'hover:bg-muted/50'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/language-switcher.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: lang
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/language-switcher.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/language-switcher.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, lang, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/custom/language-switcher.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/language-switcher.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/language-switcher.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "E51Wx9mr7X7Q3OaWcYUXqEoXXSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/open-position-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenPositionCard",
    ()=>OpenPositionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/position-amounts.ts [app-client] (ecmascript)");
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
function getDirectionDisplay(contractType, labels) {
    const label = labels[contractType] ?? contractType;
    return {
        label
    };
}
function formatDuration(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor(s % 3600 / 60);
    const sec = s % 60;
    if (h > 0) return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
function usePositionTimer(pos) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "usePositionTimer.useState": ()=>Math.floor(Date.now() / 1000)
    }["usePositionTimer.useState"]);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePositionTimer.useEffect": ()=>{
            intervalRef.current = setInterval({
                "usePositionTimer.useEffect": ()=>setNow(Math.floor(Date.now() / 1000))
            }["usePositionTimer.useEffect"], 1000);
            return ({
                "usePositionTimer.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["usePositionTimer.useEffect"];
        }
    }["usePositionTimer.useEffect"], []);
    const start = pos.date_start;
    const expiry = pos.date_expiry;
    const total = expiry - start;
    const elapsed = now - start;
    const remaining = expiry - now;
    const progress = total > 0 ? Math.min(100, Math.max(0, elapsed / total * 100)) : 0;
    const isExpired = remaining <= 0;
    return {
        elapsed,
        remaining,
        progress,
        isExpired
    };
}
_s(usePositionTimer, "RxtWlY8XA2MeG9VibvCIEtTWcGY=");
function OpenPositionCard({ pos, isSelling, onSell, contractTypeLabels }) {
    _s1();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { label: dirLabel } = getDirectionDisplay(pos.contract_type, contractTypeLabels);
    const profit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPositionProfit"])(pos);
    const isProfit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGainPosition"])(profit, pos.profit_percentage);
    const bidPrice = parseFloat(pos.bid_price);
    const buyPrice = parseFloat(pos.buy_price);
    const payout = parseFloat(pos.payout);
    const { elapsed, progress } = usePositionTimer(pos);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-4 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-muted rounded px-1.5 py-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-foreground",
                                    children: pos.underlying_symbol
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/open-position-card.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-foreground leading-tight",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolDisplayName"])(pos.underlying_symbol)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-sm font-semibold text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: dirLabel
                        }, void 0, false, {
                            fileName: "[project]/components/custom/open-position-card.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/open-position-card.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-mono text-foreground",
                        children: formatDuration(elapsed)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 rounded-full bg-muted overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-emerald-400 transition-all duration-1000",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/custom/open-position-card.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/open-position-card.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "text-xs px-2 py-0.5 rounded-md font-medium",
                    children: pos.currency
                }, void 0, false, {
                    fileName: "[project]/components/custom/open-position-card.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/open-position-card.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Total profit/loss:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/open-position-card.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-bold flex items-center gap-1', isProfit ? 'text-emerald-500' : 'text-destructive'),
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(profit, locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm', isProfit ? 'text-emerald-500' : 'text-destructive'),
                                        children: isProfit ? '▲' : '▼'
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/open-position-card.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Contract value:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/open-position-card.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-bold flex items-center gap-1', isProfit ? 'text-emerald-500' : 'text-destructive'),
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(bidPrice, locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm', isProfit ? 'text-emerald-500' : 'text-destructive'),
                                        children: isProfit ? '▲' : '▼'
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/open-position-card.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Stake:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/open-position-card.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyPrice, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Potential payout:"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/open-position-card.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(payout, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/open-position-card.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/open-position-card.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/open-position-card.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "w-full rounded-full",
                disabled: isSelling || pos.is_valid_to_sell !== 1,
                onClick: ()=>onSell(pos.contract_id, pos.bid_price),
                children: isSelling ? localize('Selling...') : localize('Sell')
            }, void 0, false, {
                fileName: "[project]/components/custom/open-position-card.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/open-position-card.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s1(OpenPositionCard, "rEOC6Rf/Zvb8Tu/99TbU57zqzk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        usePositionTimer
    ];
});
_c = OpenPositionCard;
var _c;
__turbopack_context__.k.register(_c, "OpenPositionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/positions-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionsTable",
    ()=>PositionsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/position-amounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$open$2d$position$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/open-position-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$closed$2d$position$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/closed-position-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
function getValueColHeader(filter, localize) {
    switch(filter){
        case 'open':
            return localize('Current Value');
        case 'closed':
            return localize('Sell Price');
        case 'all':
            return localize('Value');
    }
}
function formatContractType(contractType, labels, locale, barrier) {
    const label = labels[contractType] ?? contractType;
    // The proposal_open_contract schema allows a null barrier, and formatBarrier
    // returns '' for anything that is not a string: no parentheses in either case.
    const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBarrier"])(barrier, locale);
    return shown !== '' ? `${label} (${shown})` : label;
}
function PositionsTable({ openPositions, closedPositions, onSell, sellingId, sellError, onClearSellError, contractTypeLabels = {}, className }) {
    _s();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('open');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PositionsTable.useEffect": ()=>{
            if (sellError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Sell Failed'), {
                    description: sellError
                });
                onClearSellError();
            }
        }
    }["PositionsTable.useEffect"], [
        sellError,
        onClearSellError,
        localize
    ]);
    const totalCount = openPositions.length + closedPositions.length;
    const visibleOpen = filter === 'open' || filter === 'all' ? openPositions : [];
    const visibleClosed = filter === 'closed' || filter === 'all' ? closedPositions : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-6', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 items-center mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/components/custom/positions-table.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Report"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/positions-table.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: filter,
                        onValueChange: (value)=>setFilter(value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-28 ml-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/custom/positions-table.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/positions-table.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "open",
                                        children: localize('Open ({{count}})', (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralCountValues"])(openPositions.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatInteger"])(openPositions.length, locale)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "closed",
                                        children: localize('Closed ({{count}})', (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralCountValues"])(closedPositions.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatInteger"])(closedPositions.length, locale)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "all",
                                        children: localize('All ({{count}})', (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralCountValues"])(totalCount, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatInteger"])(totalCount, locale)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/positions-table.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/positions-table.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block rounded-lg border border-border overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/positions-table.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "Symbol"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/positions-table.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "Stake"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/positions-table.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: getValueColHeader(filter, localize)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "P&L"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/positions-table.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {}, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/positions-table.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: [
                                visibleOpen.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpenPositionRow, {
                                        pos: pos,
                                        isSelling: sellingId === pos.contract_id,
                                        onSell: onSell,
                                        contractTypeLabels: contractTypeLabels
                                    }, `open-${pos.contract_id}`, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)),
                                visibleClosed.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClosedPositionRow, {
                                        pos: pos,
                                        contractTypeLabels: contractTypeLabels
                                    }, `closed-${pos.contract_id}`, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)),
                                visibleOpen.length === 0 && visibleClosed.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        colSpan: 6,
                                        className: "text-center text-sm text-muted-foreground py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "No positions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/positions-table.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/positions-table.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/positions-table.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/positions-table.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden flex flex-col gap-3",
                children: [
                    visibleOpen.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$open$2d$position$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenPositionCard"], {
                            pos: pos,
                            isSelling: sellingId === pos.contract_id,
                            onSell: onSell,
                            contractTypeLabels: contractTypeLabels
                        }, `open-card-${pos.contract_id}`, false, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)),
                    visibleClosed.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$closed$2d$position$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClosedPositionCard"], {
                            pos: pos,
                            contractTypeLabels: contractTypeLabels
                        }, `closed-card-${pos.contract_id}`, false, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)),
                    visibleOpen.length === 0 && visibleClosed.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-muted-foreground py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "No positions"
                        }, void 0, false, {
                            fileName: "[project]/components/custom/positions-table.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/positions-table.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/positions-table.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(PositionsTable, "WEXIxobS0pY+AhWcgSx75IkGMvQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = PositionsTable;
// ─── Desktop table rows ────────────────────────────────────────────────────
function OpenPositionRow({ pos, isSelling, onSell, contractTypeLabels }) {
    _s1();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const profit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPositionProfit"])(pos);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "font-medium",
                children: formatContractType(pos.contract_type, contractTypeLabels, locale, pos.barrier)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-muted-foreground",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolDisplayName"])(pos.underlying_symbol)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.buy_price, locale),
                    " ",
                    pos.currency
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.bid_price, locale),
                    " ",
                    pos.currency
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfitCell, {
                profit: profit,
                profitPct: pos.profit_percentage,
                currency: pos.currency,
                locale: locale
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    variant: "outline",
                    disabled: isSelling || pos.is_valid_to_sell !== 1,
                    onClick: ()=>onSell(pos.contract_id, pos.bid_price),
                    children: isSelling ? localize('Selling...') : localize('Sell')
                }, void 0, false, {
                    fileName: "[project]/components/custom/positions-table.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/positions-table.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s1(OpenPositionRow, "/wAEK6Fy8RTJUIH4NAaIFuutRGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c1 = OpenPositionRow;
function ClosedPositionRow({ pos, contractTypeLabels }) {
    _s2();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const profit = pos.sell_price - pos.buy_price;
    const profitPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closedPositionProfitPercent"])(pos.buy_price, pos.sell_price);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "font-medium",
                children: formatContractType(pos.contract_type, contractTypeLabels, locale)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-muted-foreground",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolDisplayName"])(pos.underlying_symbol)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.buy_price, locale)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(pos.sell_price, locale)
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfitCell, {
                profit: profit,
                profitPct: profitPct,
                currency: "",
                locale: locale
            }, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {}, void 0, false, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/positions-table.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s2(ClosedPositionRow, "B/WxtxKOkCKuDYNu250svy3IR0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c2 = ClosedPositionRow;
function ProfitCell({ profit, profitPct, currency, locale }) {
    const isProfit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGainPosition"])(profit, profitPct);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-right font-semibold', isProfit ? 'text-green-600' : 'text-destructive'),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(profit, locale),
            currency ? ` ${currency}` : '',
            Number.isFinite(profitPct) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-normal ml-1 opacity-70",
                children: [
                    "(",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedPercent"])(profitPct, 1, locale),
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/positions-table.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/positions-table.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_c3 = ProfitCell;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PositionsTable");
__turbopack_context__.k.register(_c1, "OpenPositionRow");
__turbopack_context__.k.register(_c2, "ClosedPositionRow");
__turbopack_context__.k.register(_c3, "ProfitCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            buy: "bg-buy-background text-buy-foreground hover:bg-buy-background/90",
            sell: "bg-sell-background text-sell-foreground hover:bg-sell-background/90",
            black: "bg-button-blackwhite text-button-blackwhite-foreground hover:bg-button-blackwhite/90"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-full px-3",
            lg: "h-11 rounded-full px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/popover.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 125,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 116,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-base-trading.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseTrading",
    ()=>useBaseTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useActiveSymbols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useTicks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-open-positions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-closed-positions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-sell-contract.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function useBaseTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed, contractTypes }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    // When the authenticated WS exhausts all reconnect attempts, fall back to
    // the public WS by triggering logout.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaseTrading.useEffect": ()=>{
            if (isExhausted && ws) {
                onAuthWSFailed?.();
            }
        }
    }["useBaseTrading.useEffect"], [
        isExhausted,
        ws,
        onAuthWSFailed
    ]);
    const { symbols, activeSymbol, selectSymbol, contracts, contractsAvailable, durationLimits, defaultStake, isLoading: symbolsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSymbols"])(ws, isConnected, contractTypes);
    const { currentTick, prices, pipSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTicks"])(ws, isConnected, activeSymbol);
    // Surface WS-level errors as toasts. Buy and sell errors are handled by
    // their own hooks and are excluded here to avoid double-reporting.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaseTrading.useEffect": ()=>{
            if (!ws || !isConnected) return;
            return ws.onMessage({
                "useBaseTrading.useEffect": (data)=>{
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Error'), {
                        // API message when present; app-authored fallback otherwise.
                        description: err.message ?? localize('Unexpected error occurred. Please try again.')
                    });
                }
            }["useBaseTrading.useEffect"]);
        }
    }["useBaseTrading.useEffect"], [
        ws,
        isConnected,
        localize
    ]);
    const { positions: openPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPositions"])(ws, isConnected, isAuthenticated);
    const { positions: closedPositions, refresh: refreshClosedPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosedPositions"])(ws, isConnected, isAuthenticated);
    const { sellContract: sellContractRaw, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSellContract"])(ws, isConnected);
    // Refresh the closed-positions table after each successful sell.
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBaseTrading.useCallback[sellContract]": async (contractId, bidPrice)=>{
            await sellContractRaw(contractId, bidPrice);
            await refreshClosedPositions();
        }
    }["useBaseTrading.useCallback[sellContract]"], [
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
_s(useBaseTrading, "85ykjGe8VPQHQ91dR5XTPxUuegw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSymbols"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTicks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPositions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosedPositions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSellContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-closed-positions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClosedPositions",
    ()=>useClosedPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useClosedPositions(ws, isConnected, isAuthenticated) {
    _s();
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClosedPositions.useCallback[fetch]": async ()=>{
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
        }
    }["useClosedPositions.useCallback[fetch]"], [
        ws,
        isConnected,
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClosedPositions.useEffect": ()=>{
            fetch();
        }
    }["useClosedPositions.useEffect"], [
        fetch
    ]);
    return {
        positions,
        isLoading,
        refresh: fetch
    };
}
_s(useClosedPositions, "eKk/wjGRoyr1PeFRIQqAay+qTro=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-digits-trading.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDigitsTrading",
    ()=>useDigitsTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/ws/deriv-ws.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useProposal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useBuy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-base-trading.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/user-trading-strategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/martingale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDerivApiError"])(error)) return false;
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
    const eligibleSymbols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols);
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
                const historyPrices = await fetchTickHistory(ws, symbol.underlying_symbol, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"], shouldStop);
                const liveTickBuffer = getLiveTickBuffer();
                const prices = liveTickBuffer.symbol === symbol.underlying_symbol && liveTickBuffer.prices.length >= (historyPrices?.length ?? 0) ? liveTickBuffer.prices : historyPrices;
                if (prices && !shouldStop()) {
                    const candidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluateUserTradingStrategy"])(symbol, prices, strategy, requiredTriggerMatches);
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
    const deadline = Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"] * 1000;
    let remaining = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"];
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
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { ws: tradingWs, isConnected: tradingIsConnected, isLoading, error, symbols, activeSymbol, selectSymbol, currentTick, prices, pipSize, contractsAvailable, durationLimits, defaultStake, openPositions, closedPositions, sellContract, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseTrading"])({
        ws,
        isConnected,
        isExhausted,
        isAuthenticated,
        onAuthWSFailed,
        contractTypes: CONTRACT_TYPES
    });
    // Digits-specific trade state
    const [tradeType, setTradeTypeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('matches-differs');
    const [contractMode, setContractModeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DIGITDIFF');
    const [selectedDigit, setSelectedDigit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stake, setStake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2.5');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [takeProfit, setTakeProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('5');
    const [stopLoss, setStopLoss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('25');
    const [martingaleMode, setMartingaleMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [martingaleValues, setMartingaleValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        classic: '1.85',
        dynamic: '1.85',
        'super-hybrid': '1.85'
    });
    const [thresholdResult, setThresholdResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingStatus, setAutoTradingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [autoTradingTradeCount, setAutoTradingTradeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingProfit, setAutoTradingProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingMarket, setAutoTradingMarket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingEstimatedWinRate, setAutoTradingEstimatedWinRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingScanProgress, setAutoTradingScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [strategyPredictionSeed, setStrategyPredictionSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectSymbolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectSymbol);
    const liveTickSymbol = activeSymbol && currentTick?.symbol === activeSymbol.underlying_symbol ? activeSymbol.underlying_symbol : null;
    const liveTickBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        symbol: liveTickSymbol,
        prices
    });
    liveTickBufferRef.current = {
        symbol: liveTickSymbol,
        prices
    };
    const setContractMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setContractMode]": (mode)=>{
            setContractModeRaw(mode);
            if (mode === 'DIGITOVER') {
                setSelectedDigit(1);
            } else if (mode === 'DIGITUNDER') {
                setSelectedDigit(8);
            } else {
                setSelectedDigit(null);
            }
        }
    }["useDigitsTrading.useCallback[setContractMode]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDigitsTrading.useEffect": ()=>{
            selectSymbolRef.current = selectSymbol;
        }
    }["useDigitsTrading.useEffect"], [
        selectSymbol
    ]);
    const setMartingaleValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setMartingaleValue]": (mode, value)=>{
            setMartingaleValues({
                "useDigitsTrading.useCallback[setMartingaleValue]": (current)=>({
                        ...current,
                        [mode]: value
                    })
            }["useDigitsTrading.useCallback[setMartingaleValue]"]);
        }
    }["useDigitsTrading.useCallback[setMartingaleValue]"], []);
    const clearThresholdResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[clearThresholdResult]": ()=>{
            setThresholdResult(null);
        }
    }["useDigitsTrading.useCallback[clearThresholdResult]"], []);
    const stopAutoTrading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[stopAutoTrading]": ()=>{
            if (!autoSessionRef.current) return;
            autoSessionRef.current.stopRequested = true;
            setAutoTradingScanProgress(null);
            setAutoTradingStatus('stopping');
        }
    }["useDigitsTrading.useCallback[stopAutoTrading]"], []);
    // Reset contract mode to the first option of the selected trade type
    const setTradeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setTradeType]": (type)=>{
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
        }
    }["useDigitsTrading.useCallback[setTradeType]"], [
        setContractMode
    ]);
    const useStrategyPredictionSeed = activeSymbol?.underlying_symbol === strategyPredictionSeed?.symbol && prices.length < (strategyPredictionSeed?.prices.length ?? 0);
    const predictionPrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[predictionPrices]": ()=>useStrategyPredictionSeed ? [
                ...strategyPredictionSeed?.prices ?? [],
                ...prices
            ].slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"]) : prices
    }["useDigitsTrading.useMemo[predictionPrices]"], [
        prices,
        strategyPredictionSeed,
        useStrategyPredictionSeed
    ]);
    const predictionPipSize = useStrategyPredictionSeed && strategyPredictionSeed ? strategyPredictionSeed.pipSize : pipSize;
    const digitStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[digitStats]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDigitStats"])(predictionPrices, predictionPipSize)
    }["useDigitsTrading.useMemo[digitStats]"], [
        predictionPrices,
        predictionPipSize
    ]);
    const lastDigit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[lastDigit]": ()=>{
            if (currentTick) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(currentTick.quote, pipSize);
            }
            if (predictionPrices.length > 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(predictionPrices[predictionPrices.length - 1], predictionPipSize);
            }
            return null;
        }
    }["useDigitsTrading.useMemo[lastDigit]"], [
        currentTick,
        predictionPrices,
        predictionPipSize
    ]);
    const { buyContract: buyWithProposal, isBuying, buyResult, buyError, clearBuyResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuy"])(tradingWs, tradingIsConnected);
    // Null out params while a buy is in-flight — forces useProposal to unsubscribe
    // the consumed proposal ID. When isBuying flips back to false, the memo returns
    // real params and useProposal re-subscribes to get a fresh proposal.
    const proposalParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[proposalParams]": ()=>{
            if (isBuying || !activeSymbol) return null;
            if (contractMode === 'DIGITDIFF' && selectedDigit === null) return null;
            const stakeNum = parseFloat(stake);
            if (!stakeNum || stakeNum <= 0) return null;
            const barrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
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
        }
    }["useDigitsTrading.useMemo[proposalParams]"], [
        activeSymbol,
        contractMode,
        stake,
        duration,
        selectedDigit,
        isBuying
    ]);
    const { proposal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProposal"])(tradingWs, tradingIsConnected, proposalParams);
    const buyContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[buyContract]": async ()=>{
            if (autoSessionRef.current) {
                stopAutoTrading();
                return;
            }
            if (!tradingWs?.isConnected || !proposal?.id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Contract quote is not ready'), {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Contract purchase failed'), {
                    description: error instanceof Error ? error.message : localize('The purchase could not be completed.')
                });
            }
        }
    }["useDigitsTrading.useCallback[buyContract]"], [
        buyWithProposal,
        localize,
        proposal,
        stopAutoTrading,
        tradingWs
    ]);
    const startAutoTrading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[startAutoTrading]": async (strategy, settings = {})=>{
            var _s = __turbopack_context__.k.signature();
            if (autoSessionRef.current) {
                stopAutoTrading();
                return;
            }
            const selectedContractMode = strategy.contractMode;
            const parseTarget = {
                "useDigitsTrading.useCallback[startAutoTrading].parseTarget": (value, label)=>{
                    if (value.trim() === '') return null;
                    const parsed = Number(value);
                    if (!Number.isFinite(parsed) || parsed <= 0) {
                        throw new Error(localize('{{label}} must be greater than zero.', {
                            label
                        }));
                    }
                    return parsed;
                }
            }["useDigitsTrading.useCallback[startAutoTrading].parseTarget"];
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
                if (settings.marketSymbol && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols).some({
                    "useDigitsTrading.useCallback[startAutoTrading]": (symbol)=>symbol.underlying_symbol === settings.marketSymbol
                }["useDigitsTrading.useCallback[startAutoTrading]"])) {
                    throw new Error(localize('The selected market is no longer available for bot trading.'));
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Risk settings are invalid'), {
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
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialMartingaleProgress"]
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
            const scanForMarket = {
                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": async (requiredMatches)=>{
                    setAutoTradingStatus('scanning');
                    setAutoTradingMarket(null);
                    setAutoTradingEstimatedWinRate(null);
                    while(!session.stopRequested){
                        const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]);
                        if (!connected) return null;
                        scanNumber += 1;
                        const eligibleMarkets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols).filter({
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket.eligibleMarkets": (symbol)=>!settings.marketSymbol || symbol.underlying_symbol === settings.marketSymbol
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket.eligibleMarkets"]);
                        if (eligibleMarkets.length === 0) {
                            throw new Error(localize('No open, unsuspended continuous indices are available to scan.'));
                        }
                        if (eligibleMarkets.every({
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (symbol)=>!hasAvailableScanMode(symbol.underlying_symbol, selectedContractMode, rejectedCandidates)
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"])) {
                            rejectedCandidates.clear();
                        }
                        const totalMarkets = eligibleMarkets.length;
                        setAutoTradingScanProgress({
                            phase: 'scanning',
                            countdownSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"],
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
                        const countdown = runMarketScanCountdown({
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown": (countdownSeconds)=>{
                                setAutoTradingScanProgress({
                                    "useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown": (progress)=>progress?.phase === 'scanning' ? {
                                            ...progress,
                                            countdownSeconds
                                        } : progress
                                }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown"]);
                            }
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown"], {
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown": ()=>session.stopRequested || scanFailed
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket.countdown"]);
                        let candidates;
                        try {
                            candidates = await scanMarkets(tradingWs, eligibleMarkets, strategy, requiredMatches, {
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": ()=>session.stopRequested
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"], {
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": ()=>liveTickBufferRef.current
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"], {
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (scannedMarkets, marketCount)=>{
                                    setAutoTradingScanProgress({
                                        "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                                ...progress,
                                                scannedMarkets,
                                                totalMarkets: marketCount
                                            } : progress
                                    }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]);
                                }
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]);
                        } catch (error) {
                            scanFailed = true;
                            await countdown;
                            throw error;
                        }
                        const countdownComplete = await countdown;
                        if (!countdownComplete || session.stopRequested) return null;
                        if (candidates?.length) {
                            const availableCandidates = candidates.filter({
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket.availableCandidates": (candidate)=>!rejectedCandidates.has(getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode))
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket.availableCandidates"]);
                            const leadingCandidate = availableCandidates.find({
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (candidate)=>candidate.eligibleForTrading && candidate.triggerMatches >= requiredMatches
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]) ?? availableCandidates[0];
                            if (!leadingCandidate) continue;
                            const prediction = getCandidatePrediction(leadingCandidate, scanNumber, requiredMatches);
                            latestPrediction = prediction;
                            setAutoTradingScanProgress({
                                "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                        ...progress,
                                        prediction
                                    } : progress
                            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]);
                            return candidates;
                        }
                        setAutoTradingScanProgress({
                            "useDigitsTrading.useCallback[startAutoTrading].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                    ...progress,
                                    prediction: latestPrediction
                                } : progress
                        }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"]);
                        if (rejectedCandidates.size > 0) rejectedCandidates.clear();
                    }
                    return null;
                }
            }["useDigitsTrading.useCallback[startAutoTrading].scanForMarket"];
            const selectNextCandidate = {
                "useDigitsTrading.useCallback[startAutoTrading].selectNextCandidate": async ()=>{
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
                }
            }["useDigitsTrading.useCallback[startAutoTrading].selectNextCandidate"];
            const useScannedMarket = {
                "useDigitsTrading.useCallback[startAutoTrading].useScannedMarket": (candidate)=>{
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
                        pipSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(candidate.symbol.pip_size),
                        prices: candidate.predictionPrices
                    });
                    selectSymbolRef.current(candidate.symbol.underlying_symbol);
                    setAutoTradingMarket(marketName);
                    setAutoTradingEstimatedWinRate(candidate.estimatedWinRate);
                    setAutoTradingScanProgress({
                        "useDigitsTrading.useCallback[startAutoTrading].useScannedMarket": (progress)=>progress ? {
                                ...progress,
                                phase: 'selected',
                                countdownSeconds: 0,
                                selectedMarket: marketName,
                                selectedContractMode: candidate.contractMode,
                                estimatedWinRate: candidate.estimatedWinRate,
                                prediction
                            } : progress
                    }["useDigitsTrading.useCallback[startAutoTrading].useScannedMarket"]);
                    setAutoTradingStatus('running');
                }
            }["useDigitsTrading.useCallback[startAutoTrading].useScannedMarket"];
            const rejectCandidateAndRescan = {
                "useDigitsTrading.useCallback[startAutoTrading].rejectCandidateAndRescan": async (candidate, reason)=>{
                    _s();
                    const candidateKey = getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode);
                    rejectedCandidates.add(candidateKey);
                    if (reason === 'no-return') {
                        skippedNoReturnCandidates.add(candidateKey);
                    } else {
                        skippedNegativeEvCandidates.add(candidateKey);
                    }
                    setAutoTradingScanProgress({
                        "useDigitsTrading.useCallback[startAutoTrading].rejectCandidateAndRescan": (progress)=>progress ? {
                                ...progress,
                                skippedNoReturnMarkets: skippedNoReturnCandidates.size,
                                skippedNegativeEvSetups: skippedNegativeEvCandidates.size
                            } : progress
                    }["useDigitsTrading.useCallback[startAutoTrading].rejectCandidateAndRescan"]);
                    const nextCandidate = await selectNextCandidate();
                    if (!nextCandidate) return false;
                    useScannedMarket(nextCandidate);
                    return true;
                }
            }["useDigitsTrading.useCallback[startAutoTrading].rejectCandidateAndRescan"];
            _s(rejectCandidateAndRescan, "ula/pbVF7RVBM86RQltSfZ+ZEAg=", false, {
                "useDigitsTrading.useCallback[startAutoTrading]": function() {
                    return [
                        useScannedMarket
                    ];
                }
            }["useDigitsTrading.useCallback[startAutoTrading]"]);
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
                    const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                        "useDigitsTrading.useCallback[startAutoTrading]": ()=>session.stopRequested
                    }["useDigitsTrading.useCallback[startAutoTrading]"]);
                    if (!connected) break;
                    const latestPrices = await fetchTickHistory(tradingWs, market.underlying_symbol, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"], {
                        "useDigitsTrading.useCallback[startAutoTrading]": ()=>session.stopRequested
                    }["useDigitsTrading.useCallback[startAutoTrading]"]);
                    if (session.stopRequested) break;
                    const refreshedCandidate = latestPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2d$trading$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluateUserTradingStrategy"])(market, latestPrices, strategy, requiredTriggerMatches) : null;
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
                    const removeConnectionListener = tradingWs.onConnectionStateChange({
                        "useDigitsTrading.useCallback[startAutoTrading].removeConnectionListener": (isConnected)=>{
                            if (!isConnected) connectionDropped = true;
                        }
                    }["useDigitsTrading.useCallback[startAutoTrading].removeConnectionListener"]);
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
                        const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[startAutoTrading]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[startAutoTrading]"]);
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
                        const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[startAutoTrading]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[startAutoTrading]"]);
                        if (!reconnected) break;
                        continue;
                    }
                    let connectionDroppedDuringPurchase = false;
                    const removePurchaseConnectionListener = tradingWs.onConnectionStateChange({
                        "useDigitsTrading.useCallback[startAutoTrading].removePurchaseConnectionListener": (isConnected)=>{
                            if (!isConnected) connectionDroppedDuringPurchase = true;
                        }
                    }["useDigitsTrading.useCallback[startAutoTrading].removePurchaseConnectionListener"]);
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
                        }, {
                            "useDigitsTrading.useCallback[startAutoTrading]": (error)=>{
                                purchaseError = error;
                                return isNoReturnContractError(error);
                            }
                        }["useDigitsTrading.useCallback[startAutoTrading]"]);
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
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMartingaleStake"])(baseStake, multiplier, settledProfit, martingaleProgress);
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
                        const recentPrices = await fetchTickHistory(tradingWs, market.underlying_symbol, 9, {
                            "useDigitsTrading.useCallback[startAutoTrading]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[startAutoTrading]"]);
                        if (session.stopRequested) break;
                        if (recentPrices && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPriceReversalRisk"])(recentPrices)) {
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(localize('Trading session ended'), {
                        description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
                            reason: stopReason,
                            profit: sessionProfit.toFixed(2),
                            count: tradeCount
                        })
                    });
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Auto-trading stopped'), {
                    description: message
                });
            } finally{
                autoSessionRef.current = null;
                setAutoTradingScanProgress(null);
                setAutoTradingStatus('idle');
            }
        }
    }["useDigitsTrading.useCallback[startAutoTrading]"], [
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
_s(useDigitsTrading, "1yj+Jw+tCO+9kohQPKuGRUdRykY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseTrading"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProposal"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-open-positions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOpenPositions",
    ()=>useOpenPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// How long (ms) to keep a just-closed position in state so SmartCharts can
// render the exit spot and P&L label markers before removing it.
const CLOSED_POSITION_TTL_MS = 1500;
function useOpenPositions(ws, isConnected, isAuthenticated) {
    _s();
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Track pending removal timers keyed by contract_id
    const removalTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Track whether we have an active subscription so we can forget_all on cleanup
    const isSubscribedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scheduleRemoval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenPositions.useCallback[scheduleRemoval]": (contractId)=>{
            // Cancel any existing timer for this contract first
            const existing = removalTimers.current.get(contractId);
            if (existing) clearTimeout(existing);
            const timer = setTimeout({
                "useOpenPositions.useCallback[scheduleRemoval].timer": ()=>{
                    setPositions({
                        "useOpenPositions.useCallback[scheduleRemoval].timer": (prev)=>prev.filter({
                                "useOpenPositions.useCallback[scheduleRemoval].timer": (p)=>p.contract_id !== contractId
                            }["useOpenPositions.useCallback[scheduleRemoval].timer"])
                    }["useOpenPositions.useCallback[scheduleRemoval].timer"]);
                    removalTimers.current.delete(contractId);
                }
            }["useOpenPositions.useCallback[scheduleRemoval].timer"], CLOSED_POSITION_TTL_MS);
            removalTimers.current.set(contractId, timer);
        }
    }["useOpenPositions.useCallback[scheduleRemoval]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpenPositions.useEffect": ()=>{
            if (!ws || !isConnected || !isAuthenticated) {
                return ({
                    "useOpenPositions.useEffect": ()=>{
                        setPositions([]);
                    }
                })["useOpenPositions.useEffect"];
            }
            // Capture ref value at effect time so the cleanup closure has a stable reference
            const timers = removalTimers.current;
            // Use global message listener — each open contract has its own subscription.id
            // so we can't use ws.subscribe() for all of them; onMessage catches everything.
            const unsubscribeListener = ws.onMessage({
                "useOpenPositions.useEffect.unsubscribeListener": (data)=>{
                    if (data.msg_type !== 'proposal_open_contract') return;
                    const contract = data.proposal_open_contract;
                    if (!contract) return;
                    const isClosed = !!contract.is_sold || !!contract.is_expired || contract.status !== 'open';
                    setPositions({
                        "useOpenPositions.useEffect.unsubscribeListener": (prev)=>{
                            const map = new Map(prev.map({
                                "useOpenPositions.useEffect.unsubscribeListener": (p)=>[
                                        p.contract_id,
                                        p
                                    ]
                            }["useOpenPositions.useEffect.unsubscribeListener"]));
                            // Always upsert the latest data (including exit_spot/exit_spot_time on close)
                            map.set(contract.contract_id, contract);
                            return Array.from(map.values());
                        }
                    }["useOpenPositions.useEffect.unsubscribeListener"]);
                    if (isClosed) {
                        // Schedule removal after TTL so exit markers are briefly visible
                        scheduleRemoval(contract.contract_id);
                    }
                }
            }["useOpenPositions.useEffect.unsubscribeListener"]);
            // Kick off subscription — server sends one message per open contract,
            // each with its own subscription.id for live updates.
            ws.send({
                proposal_open_contract: 1,
                subscribe: 1
            }).then({
                "useOpenPositions.useEffect": ()=>{
                    isSubscribedRef.current = true;
                }
            }["useOpenPositions.useEffect"]).catch({
                "useOpenPositions.useEffect": ()=>{}
            }["useOpenPositions.useEffect"]);
            return ({
                "useOpenPositions.useEffect": ()=>{
                    unsubscribeListener();
                    // Clear all pending removal timers on cleanup
                    timers.forEach({
                        "useOpenPositions.useEffect": (t)=>clearTimeout(t)
                    }["useOpenPositions.useEffect"]);
                    timers.clear();
                    setPositions([]);
                    // Cancel all open-contract streams on the server so the next mount
                    // can re-subscribe without hitting AlreadySubscribed.
                    if (isSubscribedRef.current && ws.isConnected) {
                        ws.send({
                            forget_all: 'proposal_open_contract'
                        }).catch({
                            "useOpenPositions.useEffect": ()=>{}
                        }["useOpenPositions.useEffect"]);
                    }
                    isSubscribedRef.current = false;
                }
            })["useOpenPositions.useEffect"];
        }
    }["useOpenPositions.useEffect"], [
        ws,
        isConnected,
        isAuthenticated,
        scheduleRemoval
    ]);
    return {
        positions
    };
}
_s(useOpenPositions, "lZoxW2OQ70zpqPN8pFqoiCnuFC4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-sell-contract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSellContract",
    ()=>useSellContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useSellContract(ws, isConnected) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [sellingId, setSellingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sellError, setSellError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearSellError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSellContract.useCallback[clearSellError]": ()=>setSellError(null)
    }["useSellContract.useCallback[clearSellError]"], []);
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSellContract.useCallback[sellContract]": async (contractId, bidPrice)=>{
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
        }
    }["useSellContract.useCallback[sellContract]"], [
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
_s(useSellContract, "aExFBbKZaDB+YgMgvauRQFJg/sg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/digit-stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/locale-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/market-scanner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$is$2d$continuous$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/utils/is-continuous-index.ts [app-client] (ecmascript)");
;
const MARKET_SCAN_TICK_COUNT = 30;
const MARKET_SCAN_DURATION_SECONDS = 15;
const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;
function getScannableMarkets(symbols) {
    return symbols.filter((symbol)=>symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$is$2d$continuous$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContinuousIndexSymbol"])(symbol));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/martingale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/position-amounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openPositionProfit",
    ()=>openPositionProfit,
    "openPositionTotal",
    ()=>openPositionTotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
;
function openPositionProfit(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmount"])(position.profit);
}
function openPositionTotal(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmount"])(position.buy_price) + openPositionProfit(position);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/user-trading-strategy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileUserTradingStrategy",
    ()=>compileUserTradingStrategy,
    "evaluateUserTradingStrategy",
    ()=>evaluateUserTradingStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-client] (ecmascript)");
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
    const predictionPrices = prices.filter(Number.isFinite).slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"]);
    if (predictionPrices.length < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"] || strategy.triggers.length === 0) return null;
    const pipSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(symbol.pip_size);
    const digits = predictionPrices.map((price)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(price, pipSize));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_19vha8egxqs8t._.js.map