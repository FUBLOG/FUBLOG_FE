"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./src/components/core/layouts/MainLayout/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/core/layouts/MainLayout/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Flex_antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Flex!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/flex/index.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/legacy/image */ \"(app-pages-browser)/./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/HomeOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/SearchOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/EditOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/MessageOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/BellOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ \"(app-pages-browser)/./src/components/core/common/Button/index.tsx\");\n/* harmony import */ var _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/webStorageClient */ \"(app-pages-browser)/./src/utils/webStorageClient.ts\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/logo.png */ \"(app-pages-browser)/./public/logo.png\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"(app-pages-browser)/./src/components/core/layouts/MainLayout/styles.ts\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MainLayout(param) {\n    let { children } = param;\n    _s();\n    const [isGuest, setIsGuest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(constant.ACCESS_TOKEN);\n        if (token) {\n            setIsGuest(false);\n            const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__.jwtDecode)(token);\n            console.log(decodedToken);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.LayoutWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"logo header\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.IconContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        style: {\n                                            fontSize: \"22px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        isGuest ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Flex_antd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                            gap: 15,\n                            style: {\n                                marginRight: \"20px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/sign-in\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        type: \"default\",\n                                        $width: \"100px\",\n                                        children: \"Đăng nhập\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/sign-up\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        color: \"red\",\n                                        type: \"primary\",\n                                        $width: \"100px\",\n                                        children: \"Đăng k\\xfd\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.UserIconContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/profile\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                        style: {\n                                            fontSize: \"28px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                    style: {\n                                        fontSize: \"18px\",\n                                        marginLeft: \"4px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.Body, {\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(MainLayout, \"iPUG5LGqkwFjG0yo3nRipmJTYUI=\");\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbGF5b3V0cy9NYWluTGF5b3V0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzREO0FBQy9CO0FBQ0Q7QUFDVTtBQVNYO0FBRWM7QUFHZTtBQUVuQjtBQUVQO0FBSVM7QUFNdkMsU0FBU2lCLFdBQVcsS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFlLEdBQXpCOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3ZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixRQUFRUiwrREFBZ0JBLENBQUNTLEdBQUcsQ0FBQ0MsU0FBU0MsWUFBWTtRQUN4RCxJQUFJSCxPQUFPO1lBQ1RELFdBQVc7WUFDWCxNQUFNSyxlQUFlVCxxREFBU0EsQ0FBQ0s7WUFDL0JLLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDVixrREFBZTs7MEJBQ2QsOERBQUNBLDJDQUFROzBCQUNQLDRFQUFDQSw4Q0FBVzs7c0NBQ1YsOERBQUNYLDBEQUFLQTs0QkFBQzJCLEtBQUtqQix3REFBSUE7NEJBQUVrQixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDakIsa0RBQWU7OzhDQUNkLDhEQUFDYixpREFBSUE7b0NBQUNnQyxNQUFLOzhDQUNULDRFQUFDN0Isb0xBQVlBO3dDQUFDOEIsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBTzs7Ozs7Ozs7Ozs7OENBRTFDLDhEQUFDOUIscUxBQWNBO29DQUFDNkIsT0FBTzt3Q0FBRUMsVUFBVTtvQ0FBTzs7Ozs7OzhDQUMxQyw4REFBQzdCLHFMQUFZQTtvQ0FBQzRCLE9BQU87d0NBQUVDLFVBQVU7b0NBQU87Ozs7Ozs4Q0FDeEMsOERBQUM1QixxTEFBZUE7b0NBQUMyQixPQUFPO3dDQUFFQyxVQUFVO29DQUFPOzs7Ozs7OENBQzNDLDhEQUFDM0IscUxBQVlBO29DQUFDMEIsT0FBTzt3Q0FBRUMsVUFBVTtvQ0FBTzs7Ozs7Ozs7Ozs7O3dCQUV6Q2pCLHdCQUNDLDhEQUFDaEIseUVBQUlBOzRCQUFDa0MsS0FBSzs0QkFBSUYsT0FBTztnQ0FBRUcsYUFBYTs0QkFBTzs7OENBQzFDLDhEQUFDcEMsaURBQUlBO29DQUFDZ0MsTUFBSzs4Q0FDVCw0RUFBQ3RCLHNEQUFNQTt3Q0FBQzJCLE1BQUs7d0NBQVVDLFFBQU87a0RBQVE7Ozs7Ozs7Ozs7OzhDQUl4Qyw4REFBQ3RDLGlEQUFJQTtvQ0FBQ2dDLE1BQUs7OENBQ1QsNEVBQUN0QixzREFBTUE7d0NBQUM2QixPQUFNO3dDQUFNRixNQUFLO3dDQUFVQyxRQUFPO2tEQUFROzs7Ozs7Ozs7Ozs7Ozs7O2lEQU10RCw4REFBQ3pCLHNEQUFtQjs7OENBQ2xCLDhEQUFDYixpREFBSUE7b0NBQUNnQyxNQUFLOzhDQUNULDRFQUFDeEIscUxBQVlBO3dDQUFDeUIsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBTzs7Ozs7Ozs7Ozs7OENBRTFDLDhEQUFDekIscUxBQWlCQTtvQ0FDaEJ3QixPQUFPO3dDQUFFQyxVQUFVO3dDQUFRTyxZQUFZO29DQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdkQsOERBQUM1Qix5Q0FBTTswQkFBRUc7Ozs7Ozs7Ozs7OztBQUdmO0dBcERTRDtLQUFBQTtBQXNEVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb3JlL2xheW91dHMvTWFpbkxheW91dC9pbmRleC50c3g/NWVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2xlZ2FjeS9pbWFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBTZWFyY2hPdXRsaW5lZCxcclxuICBFZGl0T3V0bGluZWQsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIEJlbGxPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgQ2FyZXREb3duT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBjaGVja1Rva2VuIH0gZnJvbSBcIkAvdXRpbHMvY2hlY2tUb2tlblwiO1xyXG5pbXBvcnQgd2ViU3RvcmFnZUNsaWVudCBmcm9tIFwiQC91dGlscy93ZWJTdG9yYWdlQ2xpZW50XCI7XHJcblxyXG5pbXBvcnQgbG9nbyBmcm9tIFwiQC9wdWJsaWMvbG9nby5wbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gXCJAL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGF1dGhFbmRwb2ludCB9IGZyb20gXCJAL3NlcnZpY2VzL2VuZHBvaW50XCI7XHJcbmltcG9ydCB7IGdldFJlcXVlc3QgfSBmcm9tIFwiQC9zZXJ2aWNlcy9yZXF1ZXN0XCI7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIHJlYWRvbmx5IGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW5MYXlvdXQoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xyXG4gIGNvbnN0IFtpc0d1ZXN0LCBzZXRJc0d1ZXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSB3ZWJTdG9yYWdlQ2xpZW50LmdldChjb25zdGFudC5BQ0NFU1NfVE9LRU4pO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldElzR3Vlc3QoZmFsc2UpO1xyXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhkZWNvZGVkVG9rZW4pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFMuTGF5b3V0V3JhcHBlcj5cclxuICAgICAgPFMuSGVhZGVyPlxyXG4gICAgICAgIDxTLkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cImxvZ28gaGVhZGVyXCIgLz5cclxuICAgICAgICAgIDxTLkljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiPlxyXG4gICAgICAgICAgICAgIDxIb21lT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjJweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIycHhcIiB9fSAvPlxyXG4gICAgICAgICAgICA8RWRpdE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIycHhcIiB9fSAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIycHhcIiB9fSAvPlxyXG4gICAgICAgICAgICA8QmVsbE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIycHhcIiB9fSAvPlxyXG4gICAgICAgICAgPC9TLkljb25Db250YWluZXI+XHJcbiAgICAgICAgICB7aXNHdWVzdCA/IChcclxuICAgICAgICAgICAgPEZsZXggZ2FwPXsxNX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiICR3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ24tdXBcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJyZWRcIiB0eXBlPVwicHJpbWFyeVwiICR3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIMSQxINuZyBrw71cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFMuVXNlckljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI4cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Q2FyZXREb3duT3V0bGluZWRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiwgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUy5Vc2VySWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TLkNvbnRhaW5lcj5cclxuICAgICAgPC9TLkhlYWRlcj5cclxuICAgICAgPFMuQm9keT57Y2hpbGRyZW59PC9TLkJvZHk+XHJcbiAgICA8L1MuTGF5b3V0V3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiRmxleCIsIkltYWdlIiwiSG9tZU91dGxpbmVkIiwiU2VhcmNoT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJCZWxsT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJDYXJldERvd25PdXRsaW5lZCIsIkJ1dHRvbiIsIndlYlN0b3JhZ2VDbGllbnQiLCJsb2dvIiwiUyIsImp3dERlY29kZSIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsImlzR3Vlc3QiLCJzZXRJc0d1ZXN0IiwidG9rZW4iLCJnZXQiLCJjb25zdGFudCIsIkFDQ0VTU19UT0tFTiIsImRlY29kZWRUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJMYXlvdXRXcmFwcGVyIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwic3JjIiwiYWx0IiwiSWNvbkNvbnRhaW5lciIsImhyZWYiLCJzdHlsZSIsImZvbnRTaXplIiwiZ2FwIiwibWFyZ2luUmlnaHQiLCJ0eXBlIiwiJHdpZHRoIiwiY29sb3IiLCJVc2VySWNvbkNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/core/layouts/MainLayout/index.tsx\n"));

/***/ })

});