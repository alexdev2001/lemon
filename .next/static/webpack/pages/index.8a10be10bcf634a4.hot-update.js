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

/***/ "./src/components/slideshow/slideshow.jsx":
/*!************************************************!*\
  !*** ./src/components/slideshow/slideshow.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slideshow: function() { return /* binding */ Slideshow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_cyber_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/images/cyber.png */ \"./public/images/cyber.png\");\n/* harmony import */ var _public_images_security_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/images/security.png */ \"./public/images/security.png\");\n/* harmony import */ var _public_images_sec_premises_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/images/sec_premises.png */ \"./public/images/sec_premises.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Slideshow = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slides = [\n        {\n            id: 1,\n            image: _public_images_cyber_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        {\n            id: 2,\n            image: _public_images_security_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        },\n        {\n            id: 33,\n            image: _public_images_sec_premises_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const slideInterval = setInterval(()=>{\n            setCurrentSlide((prev)=>(prev + 1) % slides.length);\n        }, 3000);\n        return ()=>clearInterval(slideInterval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slideshow relative w-full h-[50vh] slideshow-custom\",\n        children: [\n            slides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide absolute w-full h-full sm:h-[400px] transition-opacity duration-1000 ease-in-out \".concat(index === currentSlide ? \"z-10 opacity-100\" : \"opacity-0\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: slide.image,\n                        alt: \"Slide Image\",\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/slideshow.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                }, slide.id, false, {\n                    fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/slideshow.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slideshow font-slideshow lide-text absolute bottom-0 left-0 p-4 text-5xl font-bold text-limeGreen z-20 max-w-[1000px] text-xxl\",\n                children: \"Your premier provider of thorough security solutions\"\n            }, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/slideshow.jsx\",\n                lineNumber: 44,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/slideshow.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/slideshow/slideshow.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slideshow, \"/jm+XmndjAYlDCFyCnfFEXJOloU=\");\n_c = Slideshow;\nvar _c;\n$RefreshReg$(_c, \"Slideshow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDdUI7QUFDRztBQUNHO0FBSXJELE1BQU1PLFlBQVk7O0lBQ3ZCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1TLFNBQVM7UUFDYjtZQUFFQyxJQUFJO1lBQUdDLE9BQU9SLGdFQUFNQTtRQUFDO1FBQ3ZCO1lBQUVPLElBQUk7WUFBR0MsT0FBT1AsbUVBQU1BO1FBQUM7UUFDdkI7WUFBRU0sSUFBSTtZQUFJQyxPQUFPTix1RUFBTUE7UUFBQztLQUN6QjtJQUVESixnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGdCQUFnQkMsWUFBWTtZQUNoQ0wsZ0JBQWdCLENBQUNNLE9BQVMsQ0FBQ0EsT0FBTyxLQUFLTCxPQUFPTSxNQUFNO1FBQ3RELEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNKO0lBQzdCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOztZQUNaVCxPQUFPVSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDSjtvQkFFQ0MsV0FBVywwRkFFVixPQURDRyxVQUFVZCxlQUFlLHFCQUFxQjs4QkFJaEQsNEVBQUNMLG1EQUFLQTt3QkFDSm9CLEtBQUtGLE1BQU1ULEtBQUs7d0JBQ2hCWSxLQUFJO3dCQUNKQyxRQUFPO3dCQUNQQyxXQUFVO3dCQUNWQyxRQUFROzs7Ozs7bUJBWExOLE1BQU1WLEVBQUU7Ozs7OzBCQWVoQiw4REFBQ087Z0JBQUlDLFdBQVU7MEJBQWlJOzs7Ozs7MEJBR2pKLDhEQUFDUzs7Ozs7Ozs7Ozs7QUFHUCxFQUFFO0dBekNXckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVzaG93L3NsaWRlc2hvdy5qc3g/MmY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2xpZGUxIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2N5YmVyLnBuZ1wiO1xuaW1wb3J0IHNsaWRlMiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltYWdlcy9zZWN1cml0eS5wbmdcIjtcbmltcG9ydCBzbGlkZTMgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvc2VjX3ByZW1pc2VzLnBuZ1wiXG5cblxuXG5leHBvcnQgY29uc3QgU2xpZGVzaG93ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNsaWRlcyA9IFtcbiAgICB7IGlkOiAxLCBpbWFnZTogc2xpZGUxIH0sXG4gICAgeyBpZDogMiwgaW1hZ2U6IHNsaWRlMiB9LFxuICAgIHsgaWQ6IDMzLCBpbWFnZTogc2xpZGUzIH1cbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoKHByZXYpID0+IChwcmV2ICsgMSkgJSBzbGlkZXMubGVuZ3RoKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHNsaWRlSW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdyByZWxhdGl2ZSB3LWZ1bGwgaC1bNTB2aF0gc2xpZGVzaG93LWN1c3RvbVwiPlxuICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtzbGlkZS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BzbGlkZSBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHNtOmgtWzQwMHB4XSB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRTbGlkZSA/IFwiei0xMCBvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3NsaWRlLmltYWdlfVxuICAgICAgICAgICAgYWx0PVwiU2xpZGUgSW1hZ2VcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3cgZm9udC1zbGlkZXNob3cgbGlkZS10ZXh0IGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBwLTQgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtbGltZUdyZWVuIHotMjAgbWF4LXctWzEwMDBweF0gdGV4dC14eGxcIj5cbiAgICAgICAgWW91ciBwcmVtaWVyIHByb3ZpZGVyIG9mIHRob3JvdWdoIHNlY3VyaXR5IHNvbHV0aW9uc1xuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwic2xpZGUxIiwic2xpZGUyIiwic2xpZGUzIiwiU2xpZGVzaG93IiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVzIiwiaWQiLCJpbWFnZSIsInNsaWRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic2xpZGUiLCJpbmRleCIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInByaW9yaXR5IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/slideshow/slideshow.jsx\n"));

/***/ })

});