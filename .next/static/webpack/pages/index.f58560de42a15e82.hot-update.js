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

/***/ "./src/components/carousel/logo-carousel.jsx":
/*!***************************************************!*\
  !*** ./src/components/carousel/logo-carousel.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_gov_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/images/gov.png */ \"./public/images/gov.png\");\n/* harmony import */ var _public_images_reserve_bank_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/images/reserve_bank.png */ \"./public/images/reserve_bank.png\");\n/* harmony import */ var _public_images_mra_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/images/mra.png */ \"./public/images/mra.png\");\n/* harmony import */ var _public_images_mec_reg_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/images/mec-reg.png */ \"./public/images/mec-reg.png\");\n/* harmony import */ var _public_images_escom1_reg_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/images/escom1-reg.png */ \"./public/images/escom1-reg.png\");\n\n\n\n\n\n\n\n\n\n\n\nconst logos = [\n    {\n        image: _public_images_reserve_bank_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        link: \"https://www.rbm.mw/\"\n    },\n    {\n        image: _public_images_gov_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        link: \"https://www.malawi.gov.mw/\"\n    },\n    {\n        image: _public_images_escom1_reg_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        link: \"https://www.escom.mw/\"\n    },\n    {\n        image: _public_images_mra_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        link: \"https://www.mra.mw/\"\n    },\n    {\n        image: _public_images_mec_reg_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        link: \"https://mec.org.mw/\"\n    }\n];\nfunction LogoCarousel() {\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: logos.length > 3 ? 3 : logos.length,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 2000,\n        pauseOnHover: true,\n        arrows: true,\n        cssEase: \"linear\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:max-w-[600px] w-[60px]\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...settings,\n                children: logos.map((logo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: logo.link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: logo.image,\n                                alt: \"logo-\".concat(index),\n                                width: 120,\n                                height: 120,\n                                className: \"object-contain transition-transform duration-300 transform hover:scale-110 logo-size custom-logos\" // Ensures images are contained properly\n                                ,\n                                onMouseOver: (e)=>e.currentTarget.src = logo.image,\n                                onMouseOut: (e)=>e.currentTarget.src = logo.image\n                            }, void 0, false, {\n                                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/carousel/logo-carousel.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/carousel/logo-carousel.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/carousel/logo-carousel.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/carousel/logo-carousel.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleximani/Documents/Projects/lemon/src/components/carousel/logo-carousel.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = LogoCarousel;\nvar _c;\n$RefreshReg$(_c, \"LogoCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9sb2dvLWNhcm91c2VsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNPO0FBQ007QUFDZjtBQUNrQjtBQUNpQjtBQUNqQjtBQUNPO0FBQ0s7QUFFN0QsTUFBTVEsUUFBUTtJQUNaO1FBQUVDLE9BQU9MLHVFQUFXQTtRQUFFTSxNQUFNO0lBQXNCO0lBQ2xEO1FBQUVELE9BQU9OLDhEQUFHQTtRQUFFTyxNQUFNO0lBQTZCO0lBQ2pEO1FBQUVELE9BQU9GLHNFQUFRQTtRQUFFRyxNQUFNO0lBQXdCO0lBQ2pEO1FBQUVELE9BQU9KLDhEQUFHQTtRQUFFSyxNQUFNO0lBQXNCO0lBQzFDO1FBQUVELE9BQU9ILGtFQUFNQTtRQUFFSSxNQUFNO0lBQXNCO0NBQzlDO0FBRWMsU0FBU0M7SUFDdEIsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjUixNQUFNUyxNQUFNLEdBQUcsSUFBSSxJQUFJVCxNQUFNUyxNQUFNO1FBQ2pEQyxnQkFBZ0I7UUFDaEJDLFVBQVU7UUFDVkMsZUFBZTtRQUNmQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQTRCOzBCQUN6Qyw4REFBQ3hCLG1EQUFNQTtnQkFBRSxHQUFHVyxRQUFROzBCQUNqQkosTUFBTWtCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNKO3dCQUFnQkMsV0FBVTtrQ0FDekIsNEVBQUNJOzRCQUFFQyxNQUFNSCxLQUFLakIsSUFBSTs0QkFBRXFCLFFBQU87NEJBQVNDLEtBQUk7c0NBQ3RDLDRFQUFDOUIsbURBQUtBO2dDQUNKK0IsS0FBS04sS0FBS2xCLEtBQUs7Z0NBQ2Z5QixLQUFLLFFBQWMsT0FBTk47Z0NBQ2JPLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JYLFdBQVUsb0dBQXFHLHdDQUF3Qzs7Z0NBQ3ZKWSxhQUFhLENBQUNDLElBQU9BLEVBQUVDLGFBQWEsQ0FBQ04sR0FBRyxHQUFHTixLQUFLbEIsS0FBSztnQ0FDckQrQixZQUFZLENBQUNGLElBQU9BLEVBQUVDLGFBQWEsQ0FBQ04sR0FBRyxHQUFHTixLQUFLbEIsS0FBSzs7Ozs7Ozs7Ozs7dUJBVGhEbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnBCO0tBbkN3QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL2xvZ28tY2Fyb3VzZWwuanN4P2RlODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBnb3YgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9nb3YucG5nJztcbmltcG9ydCByZXNlcnZlQmFuayBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL3Jlc2VydmVfYmFuay5wbmcnO1xuaW1wb3J0IG1yYSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL21yYS5wbmcnO1xuaW1wb3J0IG1lY1JlZyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL21lYy1yZWcucG5nJztcbmltcG9ydCBlc2NvbVJlZyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2VzY29tMS1yZWcucG5nJztcblxuY29uc3QgbG9nb3MgPSBbXG4gIHsgaW1hZ2U6IHJlc2VydmVCYW5rLCBsaW5rOiAnaHR0cHM6Ly93d3cucmJtLm13LycgfSxcbiAgeyBpbWFnZTogZ292LCBsaW5rOiAnaHR0cHM6Ly93d3cubWFsYXdpLmdvdi5tdy8nIH0sXG4gIHsgaW1hZ2U6IGVzY29tUmVnLCBsaW5rOiAnaHR0cHM6Ly93d3cuZXNjb20ubXcvJyB9LFxuICB7IGltYWdlOiBtcmEsIGxpbms6ICdodHRwczovL3d3dy5tcmEubXcvJyB9LFxuICB7IGltYWdlOiBtZWNSZWcsIGxpbms6ICdodHRwczovL21lYy5vcmcubXcvJyB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvQ2Fyb3VzZWwoKSB7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiBsb2dvcy5sZW5ndGggPiAzID8gMyA6IGxvZ29zLmxlbmd0aCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgY3NzRWFzZTogXCJsaW5lYXJcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWF4LXctWzYwMHB4XSB3LVs2MHB4XVwiPiB7LyogUmVzdHJpY3QgdGhlIG1heCB3aWR0aCAqL31cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge2xvZ29zLm1hcCgobG9nbywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtsb2dvLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17YGxvZ28tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9ICAvLyBTZXQgYSBmaXhlZCB3aWR0aCBmb3IgbG9nb3NcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH0gLy8gU2V0IGEgZml4ZWQgaGVpZ2h0IGZvciBsb2dvc1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIGxvZ28tc2l6ZSBjdXN0b20tbG9nb3NcIiAgLy8gRW5zdXJlcyBpbWFnZXMgYXJlIGNvbnRhaW5lZCBwcm9wZXJseVxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zcmMgPSBsb2dvLmltYWdlKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zcmMgPSBsb2dvLmltYWdlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIkltYWdlIiwiZ292IiwicmVzZXJ2ZUJhbmsiLCJtcmEiLCJtZWNSZWciLCJlc2NvbVJlZyIsImxvZ29zIiwiaW1hZ2UiLCJsaW5rIiwiTG9nb0Nhcm91c2VsIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImxlbmd0aCIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiY3NzRWFzZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImxvZ28iLCJpbmRleCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbk1vdXNlT3ZlciIsImUiLCJjdXJyZW50VGFyZ2V0Iiwib25Nb3VzZU91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/carousel/logo-carousel.jsx\n"));

/***/ })

});