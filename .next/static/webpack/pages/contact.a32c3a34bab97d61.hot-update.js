"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/components/slideshow/contact-banner.jsx":
/*!*****************************************************!*\
  !*** ./src/components/slideshow/contact-banner.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactBanner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_contact_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/images/contact.jpg */ \"./public/images/contact.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ContactBanner() {\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slides = [\n        {\n            id: 1,\n            image: _public_images_contact_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slideshow relative mdw-full h-[50vh] custom-banner-contact\",\n        children: [\n            slides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide absolute w-full h-full transition-opacity duration-1000 ease-in-out custom-slide-height \".concat(index === currentSlide ? \"z-10 opacity-100\" : \"opacity-0\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: slide.image,\n                        alt: \"Slide Image\",\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/contact-banner.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, slide.id, false, {\n                    fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/contact-banner.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slidetext-service slideshow font-slideshow lide-text absolute bottom-0 left-0 p-4 text-7xl font-bold text-limeGreen z-20  text-xxl text-center\",\n                children: \"Contact us\"\n            }, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/contact-banner.jsx\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/contact-banner.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/contact-banner.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactBanner, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = ContactBanner;\n;\nvar _c;\n$RefreshReg$(_c, \"ContactBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXNob3cvY29udGFjdC1iYW5uZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDeUI7QUFFekMsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1PLFNBQVM7UUFDWDtZQUFFQyxJQUFJO1lBQUdDLE9BQU9OLGtFQUFNQTtRQUFDO0tBQ3hCO0lBRUwscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7O1lBQ1pKLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNKO29CQUVDQyxXQUFXLGlHQUVWLE9BRENHLFVBQVVULGVBQWUscUJBQXFCOzhCQUloRCw0RUFBQ0gsbURBQUtBO3dCQUNKYSxLQUFLRixNQUFNSixLQUFLO3dCQUNoQk8sS0FBSTt3QkFDSkMsUUFBTzt3QkFDUEMsV0FBVTt3QkFDVkMsUUFBUTs7Ozs7O21CQVhMTixNQUFNTCxFQUFFOzs7OzswQkFlaEIsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUFpSjs7Ozs7OzBCQUdqSyw4REFBQ1M7Ozs7Ozs7Ozs7O0FBR1A7R0EvQndCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVzaG93L2NvbnRhY3QtYmFubmVyLmpzeD9hYWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzbGlkZTEgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvY29udGFjdC5qcGdcIjsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RCYW5uZXIoKSB7XG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtcbiAgICAgICAgeyBpZDogMSwgaW1hZ2U6IHNsaWRlMSB9LFxuICAgICAgXTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdyByZWxhdGl2ZSBtZHctZnVsbCBoLVs1MHZoXSBjdXN0b20tYmFubmVyLWNvbnRhY3RcIj5cbiAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17c2xpZGUuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGUgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCBjdXN0b20tc2xpZGUtaGVpZ2h0ICR7XG4gICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFNsaWRlID8gXCJ6LTEwIG9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICBcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17c2xpZGUuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJTbGlkZSBJbWFnZVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRldGV4dC1zZXJ2aWNlIHNsaWRlc2hvdyBmb250LXNsaWRlc2hvdyBsaWRlLXRleHQgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHAtNCB0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1saW1lR3JlZW4gei0yMCAgdGV4dC14eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgQ29udGFjdCB1c1xuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJzbGlkZTEiLCJDb250YWN0QmFubmVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVzIiwiaWQiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwcmlvcml0eSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slideshow/contact-banner.jsx\n"));

/***/ })

});