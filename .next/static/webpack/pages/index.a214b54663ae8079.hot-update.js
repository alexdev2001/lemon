"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/slideshow/slideshow */ \"./src/components/slideshow/slideshow.jsx\");\n/* harmony import */ var _components_landing_landingcontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/landing/landingcontent */ \"./src/components/landing/landingcontent.jsx\");\n/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/footer/footer */ \"./src/components/footer/footer.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isMobileView, setIsMobileView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(\"(max-width: 640px)\"); // Adjust the max-width for mobile view\n        setIsMobileView(mediaQuery.matches);\n        const handleResize = (e)=>{\n            setIsMobileView(e.matches);\n        };\n        // Listen for screen size changes\n        mediaQuery.addEventListener(\"change\", handleResize);\n        // Clean up the listener when component unmounts\n        return ()=>mediaQuery.removeEventListener(handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            !isMobileView && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__.Slideshow, {}, void 0, false, {\n                    fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col gap-8 row-start-2 items-center sm:items-start w-full\",\n                children: [\n                    isMobileView && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__.Slideshow, {}, void 0, false, {\n                            fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spacer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mr-0 sm:mr-72 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landing_landingcontent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NT00lZHT3CKRH3CjD4fr/4wRJiQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT01BO0FBS0FDO0FBWnlCO0FBQ2E7QUFFaUI7QUFDSztBQUNsQjtBQWFqQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYUMsT0FBT0MsVUFBVSxDQUFDLHVCQUF1Qix1Q0FBdUM7UUFDbkdILGdCQUFnQkMsV0FBV0csT0FBTztRQUVsQyxNQUFNQyxlQUFlLENBQUNDO1lBQ3BCTixnQkFBZ0JNLEVBQUVGLE9BQU87UUFDM0I7UUFFQSxpQ0FBaUM7UUFDakNILFdBQVdNLGdCQUFnQixDQUFDLFVBQVVGO1FBQ3RDLGdEQUFnRDtRQUNoRCxPQUFPLElBQU1KLFdBQVdPLG1CQUFtQixDQUFDSDtJQUM5QyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7WUFDWixDQUFDWCw4QkFDQSw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNmLHNFQUFTQTs7Ozs7Ozs7OzswQkFJZCw4REFBQ2dCO2dCQUFLRCxXQUFVOztvQkFDYlgsOEJBQ0MsOERBQUNVO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDZixzRUFBU0E7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNjO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDZCwwRUFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5CLDhEQUFDQyxpRUFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0F6Q3dCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2NhbEZvbnQgZnJvbSBcIm5leHQvZm9udC9sb2NhbFwiO1xuaW1wb3J0IHsgU2xpZGVzaG93IH0gZnJvbSBcIkAvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93XCI7XG5pbXBvcnQgTGFuZGluZ0NvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nY29udGVudFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcblxuY29uc3QgZ2Vpc3RTYW5zID0gbG9jYWxGb250KHtcbiAgc3JjOiBcIi4vZm9udHMvR2Vpc3RWRi53b2ZmXCIsXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1nZWlzdC1zYW5zXCIsXG4gIHdlaWdodDogXCIxMDAgOTAwXCIsXG59KTtcbmNvbnN0IGdlaXN0TW9ubyA9IGxvY2FsRm9udCh7XG4gIHNyYzogXCIuL2ZvbnRzL0dlaXN0TW9ub1ZGLndvZmZcIixcbiAgdmFyaWFibGU6IFwiLS1mb250LWdlaXN0LW1vbm9cIixcbiAgd2VpZ2h0OiBcIjEwMCA5MDBcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNNb2JpbGVWaWV3LCBzZXRJc01vYmlsZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjQwcHgpXCIpOyAvLyBBZGp1c3QgdGhlIG1heC13aWR0aCBmb3IgbW9iaWxlIHZpZXdcbiAgICBzZXRJc01vYmlsZVZpZXcobWVkaWFRdWVyeS5tYXRjaGVzKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlKSA9PiB7XG4gICAgICBzZXRJc01vYmlsZVZpZXcoZS5tYXRjaGVzKTtcbiAgICB9O1xuXG4gICAgLy8gTGlzdGVuIGZvciBzY3JlZW4gc2l6ZSBjaGFuZ2VzXG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgLy8gQ2xlYW4gdXAgdGhlIGxpc3RlbmVyIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gICAgcmV0dXJuICgpID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgeyFpc01vYmlsZVZpZXcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1yb3dzLVsyMHB4XzFmcl8yMHB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHAtNCBzbTpwLTIwIGdhcC0xNiBmb250LVtmYW1pbHktbmFtZTp2YXIoLS1mb250LWdlaXN0LXNhbnMpXSByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxTbGlkZXNob3cgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04IHJvdy1zdGFydC0yIGl0ZW1zLWNlbnRlciBzbTppdGVtcy1zdGFydCB3LWZ1bGxcIj5cbiAgICAgICAge2lzTW9iaWxlVmlldyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy1bMjBweF8xZnJfMjBweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBwLTQgc206cC0yMCBnYXAtMTYgZm9udC1bZmFtaWx5LW5hbWU6dmFyKC0tZm9udC1nZWlzdC1zYW5zKV0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxTbGlkZXNob3cgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXItMCBzbTptci03MiB3LWZ1bGxcIj5cbiAgICAgICAgICA8TGFuZGluZ0NvbnRlbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZWlzdFNhbnMiLCJnZWlzdE1vbm8iLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2xpZGVzaG93IiwiTGFuZGluZ0NvbnRlbnQiLCJGb290ZXIiLCJIb21lIiwiaXNNb2JpbGVWaWV3Iiwic2V0SXNNb2JpbGVWaWV3IiwibWVkaWFRdWVyeSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaGFuZGxlUmVzaXplIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});