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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Flex_antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=Flex!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/flex/index.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/legacy/image */ \"(app-pages-browser)/./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/HomeOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/SearchOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/EditOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/MessageOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/BellOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! __barrel_optimize__?names=BellOutlined,CaretDownOutlined,EditOutlined,HomeOutlined,MessageOutlined,SearchOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ \"(app-pages-browser)/./src/components/core/common/Button/index.tsx\");\n/* harmony import */ var _utils_checkToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/checkToken */ \"(app-pages-browser)/./src/utils/checkToken.ts\");\n/* harmony import */ var _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/webStorageClient */ \"(app-pages-browser)/./src/utils/webStorageClient.ts\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/logo.png */ \"(app-pages-browser)/./public/logo.png\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ \"(app-pages-browser)/./src/components/core/layouts/MainLayout/styles.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/settings */ \"(app-pages-browser)/./src/settings/index.ts\");\n/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/services/request */ \"(app-pages-browser)/./src/services/request/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainLayout(param) {\n    let { children } = param;\n    _s();\n    const [isGuest, setIsGuest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    const checkGuestStatus = async ()=>{\n        console.log(\"v\\xf4 đ\\xe2y\");\n        const token = _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getToken();\n        console.log((0,_utils_checkToken__WEBPACK_IMPORTED_MODULE_5__.checkToken)(token));\n        try {\n            const options = {\n                param: token\n            };\n            const res = await (0,_services_request__WEBPACK_IMPORTED_MODULE_10__.getRequest)(_settings__WEBPACK_IMPORTED_MODULE_9__.constants.API_SERVER);\n            setIsGuest(res.data.isGuest);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkGuestStatus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.LayoutWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_logo_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"logo header\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.IconContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        style: {\n                                            fontSize: \"22px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                    style: {\n                                        fontSize: \"22px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        isGuest ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Flex_antd__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                            gap: 15,\n                            style: {\n                                marginRight: \"20px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/sign-in\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        type: \"default\",\n                                        $width: \"100px\",\n                                        children: \"Đăng nhập\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/sign-up\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        color: \"red\",\n                                        type: \"primary\",\n                                        $width: \"100px\",\n                                        children: \"Đăng k\\xfd\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.UserIconContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/profile\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                        style: {\n                                            fontSize: \"28px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BellOutlined_CaretDownOutlined_EditOutlined_HomeOutlined_MessageOutlined_SearchOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                    style: {\n                                        fontSize: \"18px\",\n                                        marginLeft: \"4px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_8__.Body, {\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GitHub\\\\2_Dever\\\\FUBLOG\\\\FUBLOG_FE\\\\src\\\\components\\\\core\\\\layouts\\\\MainLayout\\\\index.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(MainLayout, \"LGPrHWWUbVMDrMR80aS7yDXDFIE=\");\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbGF5b3V0cy9NYWluTGF5b3V0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEQ7QUFDL0I7QUFDRDtBQUNVO0FBU1g7QUFFYztBQUVPO0FBQ1E7QUFFbkI7QUFFUDtBQUNTO0FBRVM7QUFNaEQsU0FBU21CLFdBQVcsS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFlLEdBQXpCOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1zQixtQkFBbUI7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1DLFFBQVFaLCtEQUFnQkEsQ0FBQ2EsUUFBUTtRQUN2Q0gsUUFBUUMsR0FBRyxDQUFDWiw2REFBVUEsQ0FBQ2E7UUFFdkIsSUFBSTtZQUNGLE1BQU1FLFVBQVU7Z0JBQUVDLE9BQU9IO1lBQU87WUFDaEMsTUFBTUksTUFBVyxNQUFNWiw4REFBVUEsQ0FBQ0QsZ0RBQVNBLENBQUNjLFVBQVU7WUFDdERULFdBQVdRLElBQUlFLElBQUksQ0FBQ1gsT0FBTztRQUM3QixFQUFFLE9BQU9ZLE9BQU87WUFDZFQsUUFBUUMsR0FBRyxDQUFDUTtRQUNkO0lBQ0Y7SUFDQWpDLGdEQUFTQSxDQUFDO1FBQ1J1QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUCxrREFBZTs7MEJBQ2QsOERBQUNBLDJDQUFROzBCQUNQLDRFQUFDQSw4Q0FBVzs7c0NBQ1YsOERBQUNaLDBEQUFLQTs0QkFBQ2lDLEtBQUt0Qix3REFBSUE7NEJBQUV1QixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDdEIsa0RBQWU7OzhDQUNkLDhEQUFDZCxpREFBSUE7b0NBQUNzQyxNQUFLOzhDQUNULDRFQUFDbkMscUxBQVlBO3dDQUFDb0MsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBTzs7Ozs7Ozs7Ozs7OENBRTFDLDhEQUFDcEMscUxBQWNBO29DQUFDbUMsT0FBTzt3Q0FBRUMsVUFBVTtvQ0FBTzs7Ozs7OzhDQUMxQyw4REFBQ25DLHFMQUFZQTtvQ0FBQ2tDLE9BQU87d0NBQUVDLFVBQVU7b0NBQU87Ozs7Ozs4Q0FDeEMsOERBQUNsQyxxTEFBZUE7b0NBQUNpQyxPQUFPO3dDQUFFQyxVQUFVO29DQUFPOzs7Ozs7OENBQzNDLDhEQUFDakMscUxBQVlBO29DQUFDZ0MsT0FBTzt3Q0FBRUMsVUFBVTtvQ0FBTzs7Ozs7Ozs7Ozs7O3dCQUV6Q3JCLHdCQUNDLDhEQUFDbEIseUVBQUlBOzRCQUFDd0MsS0FBSzs0QkFBSUYsT0FBTztnQ0FBRUcsYUFBYTs0QkFBTzs7OENBQzFDLDhEQUFDMUMsaURBQUlBO29DQUFDc0MsTUFBSzs4Q0FDVCw0RUFBQzVCLHNEQUFNQTt3Q0FBQ2lDLE1BQUs7d0NBQVVDLFFBQU87a0RBQVE7Ozs7Ozs7Ozs7OzhDQUl4Qyw4REFBQzVDLGlEQUFJQTtvQ0FBQ3NDLE1BQUs7OENBQ1QsNEVBQUM1QixzREFBTUE7d0NBQUNtQyxPQUFNO3dDQUFNRixNQUFLO3dDQUFVQyxRQUFPO2tEQUFROzs7Ozs7Ozs7Ozs7Ozs7O2lEQU10RCw4REFBQzlCLHNEQUFtQjs7OENBQ2xCLDhEQUFDZCxpREFBSUE7b0NBQUNzQyxNQUFLOzhDQUNULDRFQUFDOUIscUxBQVlBO3dDQUFDK0IsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBTzs7Ozs7Ozs7Ozs7OENBRTFDLDhEQUFDL0IscUxBQWlCQTtvQ0FDaEI4QixPQUFPO3dDQUFFQyxVQUFVO3dDQUFRTyxZQUFZO29DQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdkQsOERBQUNqQyx5Q0FBTTswQkFBRUk7Ozs7Ozs7Ozs7OztBQUdmO0dBN0RTRDtLQUFBQTtBQStEVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb3JlL2xheW91dHMvTWFpbkxheW91dC9pbmRleC50c3g/NWVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2xlZ2FjeS9pbWFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBTZWFyY2hPdXRsaW5lZCxcclxuICBFZGl0T3V0bGluZWQsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIEJlbGxPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgQ2FyZXREb3duT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBjaGVja1Rva2VuIH0gZnJvbSBcIkAvdXRpbHMvY2hlY2tUb2tlblwiO1xyXG5pbXBvcnQgd2ViU3RvcmFnZUNsaWVudCBmcm9tIFwiQC91dGlscy93ZWJTdG9yYWdlQ2xpZW50XCI7XHJcblxyXG5pbXBvcnQgbG9nbyBmcm9tIFwiQC9wdWJsaWMvbG9nby5wbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gXCJAL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGF1dGhFbmRwb2ludCB9IGZyb20gXCJAL3NlcnZpY2VzL2VuZHBvaW50XCI7XHJcbmltcG9ydCB7IGdldFJlcXVlc3QgfSBmcm9tIFwiQC9zZXJ2aWNlcy9yZXF1ZXN0XCI7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIHJlYWRvbmx5IGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW5MYXlvdXQoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xyXG4gIGNvbnN0IFtpc0d1ZXN0LCBzZXRJc0d1ZXN0XSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XHJcbiAgY29uc3QgY2hlY2tHdWVzdFN0YXR1cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidsO0IMSRw6J5XCIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSB3ZWJTdG9yYWdlQ2xpZW50LmdldFRva2VuKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja1Rva2VuKHRva2VuKSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgcGFyYW06IHRva2VuISB9O1xyXG4gICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IGdldFJlcXVlc3QoY29uc3RhbnRzLkFQSV9TRVJWRVIpO1xyXG4gICAgICBzZXRJc0d1ZXN0KHJlcy5kYXRhLmlzR3Vlc3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrR3Vlc3RTdGF0dXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Uy5MYXlvdXRXcmFwcGVyPlxyXG4gICAgICA8Uy5IZWFkZXI+XHJcbiAgICAgICAgPFMuQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwibG9nbyBoZWFkZXJcIiAvPlxyXG4gICAgICAgICAgPFMuSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XHJcbiAgICAgICAgICAgICAgPEhvbWVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogXCIyMnB4XCIgfX0gLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjJweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDxFZGl0T3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjJweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjJweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDxCZWxsT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjJweFwiIH19IC8+XHJcbiAgICAgICAgICA8L1MuSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIHtpc0d1ZXN0ID8gKFxyXG4gICAgICAgICAgICA8RmxleCBnYXA9ezE1fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduLWluXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgJHdpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgxJDEg25nIG5o4bqtcFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInJlZFwiIHR5cGU9XCJwcmltYXJ5XCIgJHdpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgxJDEg25nIGvDvVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Uy5Vc2VySWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjhweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxDYXJldERvd25PdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiLCBtYXJnaW5MZWZ0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TLlVzZXJJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1MuQ29udGFpbmVyPlxyXG4gICAgICA8L1MuSGVhZGVyPlxyXG4gICAgICA8Uy5Cb2R5PntjaGlsZHJlbn08L1MuQm9keT5cclxuICAgIDwvUy5MYXlvdXRXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJGbGV4IiwiSW1hZ2UiLCJIb21lT3V0bGluZWQiLCJTZWFyY2hPdXRsaW5lZCIsIkVkaXRPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIkJlbGxPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkNhcmV0RG93bk91dGxpbmVkIiwiQnV0dG9uIiwiY2hlY2tUb2tlbiIsIndlYlN0b3JhZ2VDbGllbnQiLCJsb2dvIiwiUyIsImNvbnN0YW50cyIsImdldFJlcXVlc3QiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0d1ZXN0Iiwic2V0SXNHdWVzdCIsImNoZWNrR3Vlc3RTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRUb2tlbiIsIm9wdGlvbnMiLCJwYXJhbSIsInJlcyIsIkFQSV9TRVJWRVIiLCJkYXRhIiwiZXJyb3IiLCJMYXlvdXRXcmFwcGVyIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwic3JjIiwiYWx0IiwiSWNvbkNvbnRhaW5lciIsImhyZWYiLCJzdHlsZSIsImZvbnRTaXplIiwiZ2FwIiwibWFyZ2luUmlnaHQiLCJ0eXBlIiwiJHdpZHRoIiwiY29sb3IiLCJVc2VySWNvbkNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/core/layouts/MainLayout/index.tsx\n"));

/***/ })

});