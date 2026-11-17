module.exports = [
"[project]/components/configurable-digits-controls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigurableBuyButton",
    ()=>ConfigurableBuyButton,
    "ConfigurableDigitsControls",
    ()=>ConfigurableDigitsControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Config-driven Digits trade controls.
 *
 * Renders the SAME functional controls as the standard Digits app, but every
 * block (trade type, symbol picker, current tick, digit stats, contract mode,
 * stake, duration, prediction and buy) has 3 style variants, and the blocks
 * render in a configurable order. Fully functional (uses the real trading
 * handlers). Theme colour comes from the app's --primary (existing branding
 * pipeline), so `bg-primary` / `text-primary` pick it up automatically.
 *
 * HARD CONSTRAINT: every variant is composed ONLY from components the digits
 * template already uses — <Select>, <Input>, <Button>, <Label>, <ToggleGroup>,
 * <Skeleton>, the shared <TradeTypeChips> / <SymbolSelector>, and the template's
 * own <CurrentTickDisplay> / <DigitStatsBar>. No invented widgets.
 *
 * Used by the editor (/edit), preview (/preview) and the deployed app when a
 * DigitsAppConfig is present. The original DigitsView layout is untouched.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$line$2d$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/line-chart.js [app-ssr] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-ssr] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$rearrange$2d$drag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-rearrange-drag.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toggle-group.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/trade-type-chips.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/symbol-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scroll$2d$within$2d$frame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scroll-within-frame.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/current-tick-display.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/digit-stats-bar.tsx [app-ssr] (ecmascript)");
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
/** Human labels shown on each draggable block in rearrange mode. */ function getBlockLabels(localize) {
    return {
        tradeType: localize('Trade type'),
        symbol: localize('Symbol picker'),
        tick: localize('Current tick'),
        digitStats: localize('Digit stats'),
        contractMode: localize('Contract mode'),
        stake: localize('Stake'),
        duration: localize('Duration'),
        prediction: localize('Prediction'),
        buy: localize('Buy button')
    };
}
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
function getContractModeOptions(localize) {
    return {
        'matches-differs': [
            {
                value: 'DIGITDIFF',
                label: localize('Differs')
            }
        ],
        'over-under': [
            {
                value: 'DIGITOVER',
                label: localize('Over 1')
            },
            {
                value: 'DIGITUNDER',
                label: localize('Under 8')
            }
        ],
        'even-odd': [
            {
                value: 'DIGITEVEN',
                label: localize('Even')
            },
            {
                value: 'DIGITODD',
                label: localize('Odd')
            }
        ]
    };
}
function getPredictionText(contractMode, localize) {
    switch(contractMode){
        case 'DIGITMATCH':
            return localize('match');
        case 'DIGITDIFF':
            return localize('differ from');
        case 'DIGITOVER':
            return localize('be over');
        case 'DIGITUNDER':
            return localize('be under');
        case 'DIGITEVEN':
            return localize('be even');
        case 'DIGITODD':
            return localize('be odd');
    }
}
function showDigitInPrediction(contractMode) {
    return contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD';
}
function ConfigurableBuyButton({ variant, isConnected, onBuy, isBuying, autoTradingStatus = 'idle' }) {
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const isAutoTrading = autoTradingStatus !== 'idle';
    const disabled = isAutoTrading ? autoTradingStatus === 'stopping' : !isConnected || isBuying;
    const label = autoTradingStatus === 'stopping' ? localize('Stopping...') : autoTradingStatus === 'scanning' ? localize('Stop scanning') : autoTradingStatus === 'running' ? localize('Stop auto-trading') : isBuying ? localize('Purchasing...') : localize('Buy');
    const variants = {
        // a — pill (current)
        a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-12 w-full rounded-lg bg-[rgb(var(--buy-background))] px-6 font-bold text-[rgb(var(--buy-foreground))] shadow-[0_0_22px_rgb(0_195_144/0.18)] hover:brightness-110",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
        // Block — squared, bold.
        b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-14 w-full rounded-md bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
        // Gradient background.
        c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-14 w-full rounded-xl bg-gradient-to-r from-primary to-primary/70 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
    };
    return (variants[variant] ?? variants.a)();
}
function ConfigurableDigitsControls(props) {
    const { config, compactMarketLayout = false, symbols, activeSymbol, selectSymbol, currentTick, lastDigit, digitStats, pipSize, tradeType, onTradeTypeChange, contractMode, onContractModeChange, selectedDigit, stake, onStakeChange, duration, onDurationChange, durationLimits, proposal, isProposalLoading, onBuy, isBuying, autoTradingStatus = 'idle', isConnected, editMode, onSelect, selectedKey, rearrangeMode, onReorder, pinBuy, keys } = props;
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const isAutoTrading = autoTradingStatus !== 'idle';
    const [durationDraft, setDurationDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(duration));
    const blockLabels = getBlockLabels(localize);
    const digitTradeTypeOptions = getDigitTradeTypeOptions(localize);
    const contractModeOptions = getContractModeOptions(localize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDurationDraft(String(duration));
    }, [
        duration
    ]);
    const rearrange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$rearrange$2d$drag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRearrangeDrag"])(config.order, (next)=>onReorder?.(next));
    // Flash the draggable blocks once — the first time the layout is unlocked in
    // this session — so the user notices the components can be dragged.
    const [hasFlashed, setHasFlashed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!rearrangeMode || hasFlashed) return;
        const timer = window.setTimeout(()=>setHasFlashed(true), 2000);
        return ()=>window.clearTimeout(timer);
    }, [
        rearrangeMode,
        hasFlashed
    ]);
    // Scroll the selected control into view within the editor's own scroll container in edit mode.
    const rowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editMode || !selectedKey) return;
        const el = rowRefs.current[selectedKey];
        if (el) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scroll$2d$within$2d$frame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["centerInScrollContainer"])(el);
    }, [
        editMode,
        selectedKey
    ]);
    // ── Trade type (3 styles) ───────────────────────────────────────────────
    // Real control = TradeTypeChips. Each variant calls onTradeTypeChange (which
    // keeps the setTradeType behaviour — it resets contract mode upstream).
    const renderTradeType = ()=>{
        const variants = {
            // a — pill chips (current)
            a: ()=>// Rendered inside the controls card, so the edge fade is drawn in the
                // card colour rather than the page background.
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                    backdrop: "card",
                    value: tradeType,
                    options: digitTradeTypeOptions,
                    onValueChange: onTradeTypeChange,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
            // Segmented — <ToggleGroup> styled like a segmented control.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                    type: "single",
                    value: tradeType,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        const opt = digitTradeTypeOptions.find((option)=>option.value === value);
                        if (opt) onTradeTypeChange(opt.value);
                    },
                    className: "w-full gap-0 rounded-md bg-muted p-1",
                    children: digitTradeTypeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                            value: opt.value,
                            className: "flex-1 rounded text-xs font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-primary data-[state=on]:font-semibold data-[state=on]:shadow-sm hover:text-foreground",
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
            // Dropdown — <Select>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                    value: tradeType,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        const opt = digitTradeTypeOptions.find((option)=>option.value === value);
                        if (opt) onTradeTypeChange(opt.value);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: digitTradeTypeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: opt.value,
                                    children: opt.label
                                }, opt.value, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.tradeType] ?? variants.a)();
    };
    // ── Symbol picker (3 styles) ────────────────────────────────────────────
    // Real control = SymbolSelector. Every variant still switches symbols.
    const renderSymbol = ()=>{
        const variants = {
            // a — full dropdown (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                    symbols: symbols,
                    activeSymbol: activeSymbol,
                    onSymbolChange: selectSymbol,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
            // Compact pill — a narrow <Select> trigger rounded into a pill.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                    value: activeSymbol?.underlying_symbol ?? '',
                    onValueChange: selectSymbol,
                    disabled: isAutoTrading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "h-8 w-fit gap-1 rounded-full px-3 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: localize('Symbol')
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: renderSymbolGroups(symbols)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
            // Dropdown with a leading market (chart) icon.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                    value: activeSymbol?.underlying_symbol ?? '',
                    onValueChange: selectSymbol,
                    disabled: isAutoTrading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "h-11 w-full gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$line$2d$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                        className: "h-4 w-4 shrink-0 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: localize('Select a symbol')
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: renderSymbolGroups(symbols)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.symbol] ?? variants.a)();
    };
    // ── Current tick (3 styles) ─────────────────────────────────────────────
    // Real control = CurrentTickDisplay. Same live tick data in every variant.
    const renderTick = ()=>{
        const priceStr = currentTick && activeSymbol ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTickPrice"])(currentTick.quote, pipSize, locale) : null;
        const priceWithoutLast = priceStr ? priceStr.slice(0, -1) : null;
        const lastDigitStr = priceStr ? priceStr.slice(-1) : null;
        const variants = {
            // a — large number (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                        tick: currentTick,
                        lastDigit: lastDigit,
                        activeSymbol: activeSymbol,
                        pipSize: pipSize,
                        compact: compactMarketLayout
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this),
            // Compact inline — price + last-digit badge on one line.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 py-2",
                    children: priceStr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-lg font-semibold text-foreground",
                                children: priceWithoutLast
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded bg-primary/15 px-1.5 py-0.5 font-mono text-base font-bold text-primary",
                                children: lastDigitStr
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-lg text-muted-foreground",
                        children: "---"
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 465,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
            // Last-digit badge emphasis.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-1 py-2",
                    children: priceStr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground",
                                children: lastDigit
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 474,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-muted-foreground",
                                children: priceStr
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 477,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 473,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-lg text-muted-foreground",
                        children: "---"
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 480,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-primary/25 bg-gradient-to-br from-background via-background to-accent/30 p-3 shadow-inner sm:p-4",
            children: compactMarketLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                tick: currentTick,
                lastDigit: lastDigit,
                activeSymbol: activeSymbol,
                pipSize: pipSize,
                compact: true
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 488,
                columnNumber: 11
            }, this) : (variants[config.styles.tick] ?? variants.a)()
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 486,
            columnNumber: 7
        }, this);
    };
    // ── Digit stats (3 styles) ──────────────────────────────────────────────
    // The selected barrier comes from the scanner; the displayed digits are not selectable.
    const renderDigitStats = (showInlineTick = false)=>{
        if (tradeType === 'even-odd') return null;
        const ranks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDigitPercentageRanks"])(digitStats.percentages);
        const inlineTick = showInlineTick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
            tick: currentTick,
            lastDigit: lastDigit,
            activeSymbol: activeSymbol,
            pipSize: pipSize,
            inline: true
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 508,
            columnNumber: 7
        }, this) : null;
        const variants = {
            // a — bars (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                    digitStats: digitStats,
                    selectedDigit: selectedDigit,
                    lastDigit: lastDigit,
                    headerRight: inlineTick,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
            // Compact grid of 0–9 digits, each with its percentage.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Last digit prediction"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this),
                                inlineTick
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-1.5",
                            children: digitStats.percentages.map((pct, digit)=>{
                                const isSelected = digit === selectedDigit;
                                const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
                                const isLiveDigit = digit === lastDigit;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pt-1.5 sm:pt-2",
                                    children: [
                                        isLiveDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-label": `Latest tick digit ${digit}`,
                                            className: "live-digit-pointer absolute left-1/2 top-[-0.45rem] z-10 -translate-x-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 549,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 545,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: isSelected ? 'default' : 'outline',
                                            disabled: true,
                                            "data-digit": digit,
                                            "data-selected": isSelected,
                                            "data-rank": rank ?? 'none',
                                            "data-live-digit": isLiveDigit,
                                            className: "digit-tile flex h-12 w-full flex-col items-center justify-center gap-0 rounded-lg p-0 text-base font-bold shadow-sm disabled:opacity-100 sm:h-[4.5rem] sm:rounded-xl sm:text-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-semibold leading-none",
                                                    children: digit
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-0.5 font-mono text-[10px] leading-none",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(pct, 1, locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, digit, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 543,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
            // Compact list — one row per digit with its percentage.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Last digit prediction"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                inlineTick
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: digitStats.percentages.map((pct, digit)=>{
                                const isSelected = digit === selectedDigit;
                                const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
                                const isLiveDigit = digit === lastDigit;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: isSelected ? 'default' : 'outline',
                                    disabled: true,
                                    "data-digit": digit,
                                    "data-selected": isSelected,
                                    "data-rank": rank ?? 'none',
                                    "data-live-digit": isLiveDigit,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('digit-tile flex h-8 w-full items-center justify-between px-3 text-sm font-medium disabled:opacity-100', !isSelected && 'bg-muted/50 border-muted-foreground/20'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                isLiveDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "live-digit-pointer",
                                                    "aria-hidden": "true",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 37
                                                }, this),
                                                digit
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('font-mono text-xs', rank === 'highest' && 'font-bold text-emerald-300', rank === 'second-highest' && 'font-semibold text-blue-300', rank === 'lowest' && 'font-bold text-red-400', rank === 'second-lowest' && 'font-semibold text-amber-300'),
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(pct, 1, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, digit, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.digitStats] ?? variants.a)();
    };
    // ── Contract mode (3 styles) ────────────────────────────────────────────
    // Real control = ToggleGroup. Every variant keeps onContractModeChange.
    const renderContractMode = ()=>{
        const modeOptions = contractModeOptions[tradeType];
        const variants = {
            // a — segmented pill (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                    type: "single",
                    value: contractMode,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        if (value) onContractModeChange(value);
                    },
                    className: "w-full gap-0 rounded-full bg-muted p-1",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                            value: opt.value,
                            className: "flex-1 rounded-full text-sm font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-primary data-[state=on]:font-bold data-[state=on]:shadow-sm hover:text-foreground",
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this),
            // Two solid <Button>s.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: contractMode === opt.value ? 'default' : 'secondary',
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-lg font-semibold', contractMode === opt.value && 'bg-primary text-primary-foreground'),
                            disabled: isAutoTrading,
                            onClick: ()=>onContractModeChange(opt.value),
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 655,
                    columnNumber: 9
                }, this),
            // Outline chips.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: contractMode === opt.value ? 'default' : 'outline',
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-full', contractMode === opt.value && 'bg-primary text-primary-foreground'),
                            disabled: isAutoTrading,
                            onClick: ()=>onContractModeChange(opt.value),
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.contractMode] ?? variants.a)();
    };
    // ── Stake (3 styles) ────────────────────────────────────────────────────
    // Real control = USD <Input>.
    const renderStake = ()=>{
        const current = parseFloat(stake) || 0;
        const setStakeNum = (amount)=>onStakeChange(String(Math.max(0, amount)));
        const stakeInput = (extraClass)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                id: "stake",
                type: "number",
                value: stake,
                onChange: (event)=>onStakeChange(event.target.value),
                onKeyDown: (event)=>{
                    if ([
                        'e',
                        'E',
                        '+',
                        '-'
                    ].includes(event.key)) event.preventDefault();
                },
                min: 0,
                step: "0.01",
                labelRight: "USD",
                className: extraClass,
                disabled: isAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this);
        const variants = {
            // a — plain <Input> (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, this),
                        stakeInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this),
            // <Input> flanked by −/+ <Button> steppers.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setStakeNum(current - 1),
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: stakeInput('text-center')
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setStakeNum(current + 1),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 729,
                    columnNumber: 9
                }, this),
            // Preset chip <Button>s + <Input>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 744,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 743,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                '5',
                                '10',
                                '25',
                                '50'
                            ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: stake === preset ? 'default' : 'outline',
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1', stake === preset && 'bg-primary text-primary-foreground'),
                                    disabled: isAutoTrading,
                                    onClick: ()=>onStakeChange(preset),
                                    children: preset
                                }, preset, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this),
                        stakeInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 742,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.stake] ?? variants.a)();
    };
    // ── Duration (3 styles) ─────────────────────────────────────────────────
    // Real control = ticks <Input>.
    const renderDuration = ()=>{
        const clamp = (amount)=>Math.min(durationLimits.max, Math.max(durationLimits.min, amount));
        const setDurationNum = (amount)=>onDurationChange(clamp(amount));
        const updateDurationDraft = (value)=>{
            setDurationDraft(value);
            const parsed = Number(value);
            if (value !== '' && Number.isInteger(parsed) && parsed >= durationLimits.min && parsed <= durationLimits.max) {
                onDurationChange(parsed);
            }
        };
        const commitDurationDraft = ()=>{
            const parsed = Number(durationDraft);
            const value = durationDraft.trim() !== '' && Number.isInteger(parsed) ? clamp(parsed) : duration;
            setDurationDraft(String(value));
            onDurationChange(value);
        };
        const durationInput = (extraClass)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                id: "duration",
                type: "number",
                value: durationDraft,
                onChange: (event)=>updateDurationDraft(event.target.value),
                onBlur: commitDurationDraft,
                onKeyDown: (event)=>{
                    if ([
                        'e',
                        'E',
                        '+',
                        '-'
                    ].includes(event.key)) event.preventDefault();
                },
                min: durationLimits.min,
                max: durationLimits.max,
                step: 1,
                labelRight: localize('Ticks'),
                className: extraClass,
                disabled: isAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this);
        const variants = {
            // a — plain <Input> (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 811,
                            columnNumber: 11
                        }, this),
                        durationInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 810,
                    columnNumber: 9
                }, this),
            // <Input> flanked by −/+ <Button> steppers.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 820,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(duration - 1),
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: durationInput('text-center')
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 825,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(duration + 1),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 826,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 819,
                    columnNumber: 9
                }, this),
            // Preset chip <Button>s (1/5/10) + <Input>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 833,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                1,
                                5,
                                10
                            ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: duration === preset ? 'default' : 'outline',
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1', duration === preset && 'bg-primary text-primary-foreground'),
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(preset),
                                    children: preset
                                }, preset, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 838,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 836,
                            columnNumber: 11
                        }, this),
                        durationInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.duration] ?? variants.a)();
    };
    // ── Prediction + payout (3 styles) ──────────────────────────────────────
    // Real control = the bordered prediction box. Same data in every variant.
    const renderPrediction = ()=>{
        const predictionText = getPredictionText(contractMode, localize);
        const predictionBarrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
        const showDigit = showDigitInPrediction(contractMode) && predictionBarrier !== undefined;
        const awaitingDiffersScan = contractMode === 'DIGITDIFF' && predictionBarrier === undefined;
        const payoutEl = proposal || isProposalLoading ? isProposalLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-4 w-24"
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 867,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold text-foreground",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(proposal.payout, locale),
                " USD"
            ]
        }, void 0, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 869,
            columnNumber: 11
        }, this) : null;
        const variants = {
            // a — bordered box (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 rounded-lg border border-border bg-muted/20 p-2 sm:space-y-2 sm:p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-0 text-[11px] text-muted-foreground sm:mb-1 sm:text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Prediction"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 877,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium sm:text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Last digit of the price will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 882,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 884,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this),
                        (proposal || isProposalLoading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-t border-border pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Payout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 903,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 902,
                                    columnNumber: 15
                                }, this),
                                payoutEl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 901,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 876,
                    columnNumber: 9
                }, this),
            // Inline one-line — prediction on the left, payout on the right.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 text-xs sm:text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Last digit will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 914,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 915,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 927,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 913,
                            columnNumber: 11
                        }, this),
                        payoutEl
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 912,
                    columnNumber: 9
                }, this),
            // Minimal — a full-width compact bar: prediction (digit) left, payout right.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full items-center justify-between gap-2 rounded-md bg-muted/40 px-3 py-2 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 940,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 941,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 954,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 953,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 951,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 939,
                            columnNumber: 11
                        }, this),
                        payoutEl ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Payout"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 961,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 960,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 938,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.prediction] ?? variants.a)();
    };
    // ── Buy (3 styles, themed) ──────────────────────────────────────────────
    // Real control = the <Button>. Returns null when the Buy button is pinned:
    // the view renders it in the bottom bar, and every block loop below skips a
    // renderer that returns null.
    const renderBuy = ()=>pinBuy ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigurableBuyButton, {
            variant: config.styles.buy,
            isConnected: isConnected,
            onBuy: onBuy,
            isBuying: isBuying,
            autoTradingStatus: props.autoTradingStatus
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 976,
            columnNumber: 7
        }, this);
    const renderers = {
        tradeType: renderTradeType,
        symbol: renderSymbol,
        tick: renderTick,
        digitStats: renderDigitStats,
        contractMode: renderContractMode,
        stake: renderStake,
        duration: renderDuration,
        prediction: renderPrediction,
        buy: renderBuy
    };
    // Filtering config.order (not iterating `keys`) keeps the configured
    // relative order authoritative inside a filtered column.
    const orderedKeys = keys ? config.order.filter((key)=>keys.includes(key)) : config.order;
    const marketSelectionKeys = orderedKeys.filter((key)=>key === 'tradeType' || key === 'contractMode');
    const renderMarketSelectionControls = ()=>marketSelectionKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: renderers[key]()
            }, key, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1004,
                columnNumber: 38
            }, this));
    if (compactMarketLayout && !editMode && keys) {
        if (tradeType === 'even-odd') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-3",
                children: [
                    renderMarketSelectionControls(),
                    orderedKeys.filter((key)=>key === 'symbol').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderers[key]()
                        }, key, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1014,
                            columnNumber: 15
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-[240px]",
                        children: orderedKeys.filter((key)=>key === 'tick').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: renderers[key]()
                            }, key, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 1020,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1009,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-3",
            children: [
                renderMarketSelectionControls(),
                orderedKeys.filter((key)=>key === 'symbol').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: renderers[key]()
                    }, key, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1033,
                        columnNumber: 13
                    }, this)),
                orderedKeys.includes('digitStats') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: renderDigitStats(orderedKeys.includes('tick'))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1036,
                    columnNumber: 11
                }, this),
                !orderedKeys.includes('digitStats') && orderedKeys.includes('tick') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: renderTick()
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1041,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1028,
            columnNumber: 7
        }, this);
    }
    if (editMode && rearrangeMode) {
        // Rearrange mode: every block is draggable. Inner content is inert so
        // dragging never triggers a control.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-2",
            children: orderedKeys.map((key)=>{
                const content = renderers[key]();
                if (content === null) return null;
                const dragging = rearrange.draggingKey === key;
                const over = rearrange.overKey === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...rearrange.getItemProps(key),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group relative cursor-grab rounded-xl border-2 border-dashed bg-card/40 transition-all active:cursor-grabbing', !hasFlashed && 'nocode-drag-hint', 'border-border', !rearrange.isDragging && 'hover:border-primary/60 hover:bg-primary/5 hover:shadow-sm', over && 'border-primary bg-primary/10 ring-2 ring-primary/40', dragging && 'opacity-40'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute left-2 top-2 z-[70] flex items-center gap-1 rounded-md bg-background/90 px-1.5 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border transition-colors', !rearrange.isDragging && 'group-hover:text-primary group-hover:ring-primary/40', over && 'text-primary ring-primary/40'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 17
                                }, this),
                                blockLabels[key]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1070,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-[60]"
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1080,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            inert: editMode || undefined,
                            className: "pointer-events-none select-none px-2 pb-2 pt-9",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1081,
                            columnNumber: 15
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1058,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1051,
            columnNumber: 7
        }, this);
    }
    if (editMode) {
        // Each block is selectable: clicking opens its accordion in the dashboard.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-3",
            children: orderedKeys.map((key)=>{
                const content = renderers[key]();
                if (content === null) return null;
                const selected = selectedKey === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    ref: (el)=>{
                        rowRefs.current[key] = el;
                    },
                    onClick: ()=>onSelect?.(key),
                    className: [
                        'group relative block w-full rounded-xl border-2 bg-background p-3 text-left shadow-sm transition-colors',
                        selected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/60'
                    ].join(' '),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                'pointer-events-none absolute inset-0 z-10 rounded-xl bg-primary/10 transition-opacity',
                                selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            ].join(' ')
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            inert: editMode || undefined,
                            className: "pointer-events-none",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1128,
                            columnNumber: 15
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1103,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1097,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-3 lg:space-y-4",
        children: orderedKeys.map((key)=>{
            const content = renderers[key]();
            if (content === null) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: content
            }, key, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1143,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/configurable-digits-controls.tsx",
        lineNumber: 1139,
        columnNumber: 5
    }, this);
}
/** Shared submarket-grouped <SelectItem>s for the symbol-picker variants. */ function renderSymbolGroups(symbols) {
    const groups = new Map();
    for (const symbol of symbols){
        const key = symbol.submarket;
        const existing = groups.get(key);
        if (existing) {
            existing.symbols.push(symbol);
        } else {
            groups.set(key, {
                displayName: symbol.submarket_display_name ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubmarketDisplayName"])(symbol.submarket),
                symbols: [
                    symbol
                ]
            });
        }
    }
    return Array.from(groups.entries()).map(([submarket, { displayName, symbols: group }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                    children: displayName
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1166,
                    columnNumber: 7
                }, this),
                group.map((symbol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: symbol.underlying_symbol,
                        children: symbol.underlying_symbol_name
                    }, symbol.underlying_symbol, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1168,
                        columnNumber: 9
                    }, this))
            ]
        }, submarket, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1165,
            columnNumber: 5
        }, this));
}
}),
];

//# sourceMappingURL=components_configurable-digits-controls_tsx_03alj_qzg4m3m._.js.map