"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(verify)/welcome-back/page",{

/***/ "(app-pages-browser)/./src/components/modules/Welcome/Main/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/modules/Welcome/Main/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _services_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/endpoint */ \"(app-pages-browser)/./src/services/endpoint/index.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/settings */ \"(app-pages-browser)/./src/settings/index.ts\");\n/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/request */ \"(app-pages-browser)/./src/services/request/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"(app-pages-browser)/./src/components/modules/Welcome/Main/styles.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Welcome = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const token = searchParams.get(\"token\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleVerify = async ()=>{\n        try {\n            const options = {\n                param: token\n            };\n            const res = await (0,_services_request__WEBPACK_IMPORTED_MODULE_4__.getRequest)(_settings__WEBPACK_IMPORTED_MODULE_3__.constants.API_SERVER + _services_endpoint__WEBPACK_IMPORTED_MODULE_2__.authEndpoint.VERIFY_TOKEN, {\n                options\n            });\n            router.push(\"/sign-in\");\n        } catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.HomeWrapper, {\n            children: \"Token kh\\xf4ng được cung cấp\"\n        }, void 0, false, {\n            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\modules\\\\Welcome\\\\Main\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.HomeWrapper, {\n            children: [\n                \"Ch\\xe0o mừng tới với HaS - mạng x\\xe3 hội d\\xe0nh cho người Việt\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClick: handleVerify,\n                    children: \"X\\xe1c thực\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\modules\\\\Welcome\\\\Main\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\modules\\\\Welcome\\\\Main\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Welcome, \"+JhyKI/TCt/o3i650dm/GAytAZk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Welcome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\nvar _c;\n$RefreshReg$(_c, \"Welcome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvV2VsY29tZS9NYWluL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTZEO0FBQy9CO0FBRXFCO0FBQ1o7QUFDUztBQUVsQjtBQUU5QixNQUFNTyxVQUFVOztJQUNkLE1BQU1DLGVBQWVSLGdFQUFlQTtJQUNwQyxNQUFNUyxRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFDL0IsTUFBTUMsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU1XLGVBQWU7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLFVBQVU7Z0JBQUVDLE9BQU9MO1lBQU87WUFDaEMsTUFBTU0sTUFBVyxNQUFNViw2REFBVUEsQ0FDL0JELGdEQUFTQSxDQUFDWSxVQUFVLEdBQUdiLDREQUFZQSxDQUFDYyxZQUFZLEVBQ2hEO2dCQUFFSjtZQUFRO1lBRVpGLE9BQU9PLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTyxDQUFDO0lBQ25CO0lBQ0EscUJBQ0U7a0JBQ0csQ0FBQ1Ysc0JBQ0EsOERBQUNILGdEQUFhO3NCQUFDOzs7OztzQ0FFZiw4REFBQ0EsZ0RBQWE7O2dCQUFDOzhCQUViLDhEQUFDSiwwRUFBTUE7b0JBQUNtQixTQUFTVDs4QkFBYzs7Ozs7Ozs7Ozs7OztBQUt6QztHQTFCTUw7O1FBQ2lCUCw0REFBZUE7UUFFckJDLHNEQUFTQTs7O0tBSHBCTTtBQTRCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1dlbGNvbWUvTWFpbi9pbmRleC50c3g/NDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aEVuZHBvaW50IH0gZnJvbSBcIkAvc2VydmljZXMvZW5kcG9pbnRcIjtcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSBcIkAvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgZ2V0UmVxdWVzdCB9IGZyb20gXCJAL3NlcnZpY2VzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5jb25zdCBXZWxjb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHRva2VuID0gc2VhcmNoUGFyYW1zLmdldChcInRva2VuXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZVZlcmlmeSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHBhcmFtOiB0b2tlbiEgfTtcclxuICAgICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBnZXRSZXF1ZXN0KFxyXG4gICAgICAgIGNvbnN0YW50cy5BUElfU0VSVkVSICsgYXV0aEVuZHBvaW50LlZFUklGWV9UT0tFTixcclxuICAgICAgICB7IG9wdGlvbnMgfVxyXG4gICAgICApO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9zaWduLWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyF0b2tlbiA/IChcclxuICAgICAgICA8Uy5Ib21lV3JhcHBlcj5Ub2tlbiBraMO0bmcgxJHGsOG7o2MgY3VuZyBj4bqlcDwvUy5Ib21lV3JhcHBlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Uy5Ib21lV3JhcHBlcj5cclxuICAgICAgICAgIENow6BvIG3hu6tuZyB04bubaSB24bubaSBIYVMgLSBt4bqhbmcgeMOjIGjhu5lpIGTDoG5oIGNobyBuZ8aw4budaSBWaeG7h3RcclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVmVyaWZ5fT5Yw6FjIHRo4buxYzwvQnV0dG9uPlxyXG4gICAgICAgIDwvUy5Ib21lV3JhcHBlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiYXV0aEVuZHBvaW50IiwiY29uc3RhbnRzIiwiZ2V0UmVxdWVzdCIsIlMiLCJXZWxjb21lIiwic2VhcmNoUGFyYW1zIiwidG9rZW4iLCJnZXQiLCJyb3V0ZXIiLCJoYW5kbGVWZXJpZnkiLCJvcHRpb25zIiwicGFyYW0iLCJyZXMiLCJBUElfU0VSVkVSIiwiVkVSSUZZX1RPS0VOIiwicHVzaCIsImVycm9yIiwiSG9tZVdyYXBwZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modules/Welcome/Main/index.tsx\n"));

/***/ })

});