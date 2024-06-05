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

/***/ "(app-pages-browser)/./src/services/request/getRequest.ts":
/*!********************************************!*\
  !*** ./src/services/request/getRequest.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRequest: function() { return /* binding */ getRequest; }\n/* harmony export */ });\n/* harmony import */ var _base_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/axiosInstance */ \"(app-pages-browser)/./src/services/base/axiosInstance.ts\");\n/* harmony import */ var _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/webStorageClient */ \"(app-pages-browser)/./src/utils/webStorageClient.ts\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _errorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errorMessage */ \"(app-pages-browser)/./src/services/errorMessage/index.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/settings */ \"(app-pages-browser)/./src/settings/index.ts\");\n\n\n\n\n\nconst getRequest = (url, options, fomrData)=>{\n    const params = options === null || options === void 0 ? void 0 : options.params;\n    const tokenClient = _utils_webStorageClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(_settings__WEBPACK_IMPORTED_MODULE_3__.constants.ACCESS_TOKEN);\n    let headers = {\n        \"Content-Type\": fomrData ? \"multipart/form-data\" : \"application/json\"\n    };\n    if (tokenClient) headers.Authorization = \"Bearer \".concat(tokenClient);\n    return _base_axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, {\n        params: params,\n        headers: {}\n    }).then((res)=>{\n        return res;\n    }).catch((err)=>{\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(_errorMessage__WEBPACK_IMPORTED_MODULE_2__.errorMessage[err === null || err === void 0 ? void 0 : err.message]);\n        return Promise.reject(err);\n    });\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0L2dldFJlcXVlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBRU07QUFDekI7QUFDZ0I7QUFDUjtBQUV2QyxNQUFNSyxhQUFhLENBQ2pCQyxLQUNBQyxTQUNBQztJQUVBLE1BQU1DLFNBQVNGLG9CQUFBQSw4QkFBQUEsUUFBU0UsTUFBTTtJQUU5QixNQUFNQyxjQUFjVCwrREFBZ0JBLENBQUNVLEdBQUcsQ0FBQ1AsZ0RBQVNBLENBQUNRLFlBQVk7SUFDL0QsSUFBSUMsVUFBZTtRQUNqQixnQkFBZ0JMLFdBQVcsd0JBQXdCO0lBQ3JEO0lBRUEsSUFBSUUsYUFBYUcsUUFBUUMsYUFBYSxHQUFHLFVBQXNCLE9BQVpKO0lBRW5ELE9BQU9WLDJEQUFhQSxDQUNqQlcsR0FBRyxDQUFDTCxLQUFLO1FBQ1JHLFFBQVFBO1FBQ1JJLFNBQVMsQ0FBQztJQUNaLEdBQ0NFLElBQUksQ0FBQyxDQUFDQztRQUNMLE9BQU9BO0lBQ1QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1FBQ05oQiwyRUFBT0EsQ0FBQ2lCLEtBQUssQ0FBQ2hCLHVEQUFZLENBQUNlLGdCQUFBQSwwQkFBQUEsSUFBS2hCLE9BQU8sQ0FBQztRQUV4QyxPQUFPa0IsUUFBUUMsTUFBTSxDQUFDSDtJQUN4QjtBQUNKO0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0L2dldFJlcXVlc3QudHM/MDMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tIFwiLi4vYmFzZS9heGlvc0luc3RhbmNlXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zSW50ZXJmYWNlIH0gZnJvbSBcIkAvbW9kZWwvcmVxdWVzdE9wdGlvbnNcIjtcclxuaW1wb3J0IHdlYlN0b3JhZ2VDbGllbnQgZnJvbSBcIkAvdXRpbHMvd2ViU3RvcmFnZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tIFwiQC9zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgZ2V0UmVxdWVzdCA9IChcclxuICB1cmw6IHN0cmluZyxcclxuICBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNJbnRlcmZhY2UsXHJcbiAgZm9tckRhdGE/OiBib29sZWFuXHJcbik6IFByb21pc2U8b2JqZWN0PiA9PiB7XHJcbiAgY29uc3QgcGFyYW1zID0gb3B0aW9ucz8ucGFyYW1zO1xyXG5cclxuICBjb25zdCB0b2tlbkNsaWVudCA9IHdlYlN0b3JhZ2VDbGllbnQuZ2V0KGNvbnN0YW50cy5BQ0NFU1NfVE9LRU4pO1xyXG4gIGxldCBoZWFkZXJzOiBhbnkgPSB7XHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBmb21yRGF0YSA/IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRva2VuQ2xpZW50KSBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW5DbGllbnR9YDtcclxuXHJcbiAgcmV0dXJuIGF4aW9zSW5zdGFuY2VcclxuICAgIC5nZXQodXJsLCB7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICBoZWFkZXJzOiB7fSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yTWVzc2FnZVtlcnI/Lm1lc3NhZ2VdKTtcclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRSZXF1ZXN0IH07XHJcbiJdLCJuYW1lcyI6WyJheGlvc0luc3RhbmNlIiwid2ViU3RvcmFnZUNsaWVudCIsIm1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJjb25zdGFudHMiLCJnZXRSZXF1ZXN0IiwidXJsIiwib3B0aW9ucyIsImZvbXJEYXRhIiwicGFyYW1zIiwidG9rZW5DbGllbnQiLCJnZXQiLCJBQ0NFU1NfVE9LRU4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/request/getRequest.ts\n"));

/***/ })

});