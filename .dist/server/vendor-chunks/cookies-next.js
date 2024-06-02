"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookies-next";
exports.ids = ["vendor-chunks/cookies-next"];
exports.modules = {

/***/ "(ssr)/./node_modules/cookies-next/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/cookies-next/lib/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;\nvar cookie_1 = __webpack_require__(/*! cookie */ \"(ssr)/./node_modules/cookie/index.js\");\nvar isClientSide = function () { return typeof window !== 'undefined'; };\nvar isCookiesFromAppRouter = function (cookieStore) {\n    if (!cookieStore)\n        return false;\n    return ('getAll' in cookieStore &&\n        'set' in cookieStore &&\n        typeof cookieStore.getAll === 'function' &&\n        typeof cookieStore.set === 'function');\n};\nvar isContextFromAppRouter = function (context) {\n    return ((!!(context === null || context === void 0 ? void 0 : context.req) && 'cookies' in context.req && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.req.cookies)) ||\n        (!!(context === null || context === void 0 ? void 0 : context.res) && 'cookies' in context.res && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.res.cookies)) ||\n        (!!(context === null || context === void 0 ? void 0 : context.cookies) && isCookiesFromAppRouter(context.cookies())));\n};\nvar transformAppRouterCookies = function (cookies) {\n    var _cookies = {};\n    cookies.getAll().forEach(function (_a) {\n        var name = _a.name, value = _a.value;\n        _cookies[name] = value;\n    });\n    return _cookies;\n};\nvar stringify = function (value) {\n    if (value === void 0) { value = ''; }\n    try {\n        var result = JSON.stringify(value);\n        return /^[\\{\\[]/.test(result) ? result : value;\n    }\n    catch (e) {\n        return value;\n    }\n};\nvar decode = function (str) {\n    if (!str)\n        return str;\n    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n};\nvar getCookies = function (options) {\n    if (isContextFromAppRouter(options)) {\n        if (options === null || options === void 0 ? void 0 : options.req) {\n            return transformAppRouterCookies(options.req.cookies);\n        }\n        if (options === null || options === void 0 ? void 0 : options.cookies) {\n            return transformAppRouterCookies(options.cookies());\n        }\n    }\n    var req;\n    // DefaultOptions['req] can be casted here because is narrowed by using the fn: isContextFromAppRouter\n    if (options)\n        req = options.req;\n    if (!isClientSide()) {\n        // if cookie-parser is used in project get cookies from ctx.req.cookies\n        // if cookie-parser isn't used in project get cookies from ctx.req.headers.cookie\n        if (req && req.cookies)\n            return req.cookies;\n        if (req && req.headers.cookie)\n            return (0, cookie_1.parse)(req.headers.cookie);\n        return {};\n    }\n    var _cookies = {};\n    var documentCookies = document.cookie ? document.cookie.split('; ') : [];\n    for (var i = 0, len = documentCookies.length; i < len; i++) {\n        var cookieParts = documentCookies[i].split('=');\n        var _cookie = cookieParts.slice(1).join('=');\n        var name_1 = cookieParts[0];\n        _cookies[name_1] = _cookie;\n    }\n    return _cookies;\n};\nexports.getCookies = getCookies;\nvar getCookie = function (key, options) {\n    var _cookies = (0, exports.getCookies)(options);\n    var value = _cookies[key];\n    if (value === undefined)\n        return undefined;\n    return decode(value);\n};\nexports.getCookie = getCookie;\nvar setCookie = function (key, data, options) {\n    if (isContextFromAppRouter(options)) {\n        var req = options.req, res = options.res, cookiesFn = options.cookies, restOptions = __rest(options, [\"req\", \"res\", \"cookies\"]);\n        var payload = __assign({ name: key, value: data }, restOptions);\n        if (req) {\n            req.cookies.set(payload);\n        }\n        if (res) {\n            res.cookies.set(payload);\n        }\n        if (cookiesFn) {\n            cookiesFn().set(payload);\n        }\n        return;\n    }\n    var _cookieOptions;\n    var _req;\n    var _res;\n    if (options) {\n        // DefaultOptions can be casted here because the AppRouterMiddlewareOptions is narrowed using the fn: isContextFromAppRouter\n        var _a = options, req = _a.req, res = _a.res, _options = __rest(_a, [\"req\", \"res\"]);\n        _req = req;\n        _res = res;\n        _cookieOptions = _options;\n    }\n    var cookieStr = (0, cookie_1.serialize)(key, stringify(data), __assign({ path: '/' }, _cookieOptions));\n    if (!isClientSide()) {\n        if (_res && _req) {\n            var currentCookies = _res.getHeader('Set-Cookie');\n            if (!Array.isArray(currentCookies)) {\n                currentCookies = !currentCookies ? [] : [String(currentCookies)];\n            }\n            _res.setHeader('Set-Cookie', currentCookies.concat(cookieStr));\n            if (_req && _req.cookies) {\n                var _cookies = _req.cookies;\n                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));\n            }\n            if (_req && _req.headers && _req.headers.cookie) {\n                var _cookies = (0, cookie_1.parse)(_req.headers.cookie);\n                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));\n                _req.headers.cookie = Object.entries(_cookies).reduce(function (accum, item) {\n                    return accum.concat(\"\".concat(item[0], \"=\").concat(item[1], \";\"));\n                }, '');\n            }\n        }\n    }\n    else {\n        document.cookie = cookieStr;\n    }\n};\nexports.setCookie = setCookie;\nvar deleteCookie = function (key, options) {\n    return (0, exports.setCookie)(key, '', __assign(__assign({}, options), { maxAge: -1 }));\n};\nexports.deleteCookie = deleteCookie;\nvar hasCookie = function (key, options) {\n    if (!key)\n        return false;\n    var cookie = (0, exports.getCookies)(options);\n    return cookie.hasOwnProperty(key);\n};\nexports.hasCookie = hasCookie;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29va2llcy1uZXh0L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCLEdBQUcsa0JBQWtCO0FBQ3JHLGVBQWUsbUJBQU8sQ0FBQyxvREFBUTtBQUMvQixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckUsa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEYsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsK0RBQStELGNBQWMsWUFBWTtBQUN6RjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWJsb2ctZmUvLi9ub2RlX21vZHVsZXMvY29va2llcy1uZXh0L2xpYi9pbmRleC5qcz9hMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQ29va2llID0gZXhwb3J0cy5kZWxldGVDb29raWUgPSBleHBvcnRzLnNldENvb2tpZSA9IGV4cG9ydHMuZ2V0Q29va2llID0gZXhwb3J0cy5nZXRDb29raWVzID0gdm9pZCAwO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcImNvb2tpZVwiKTtcbnZhciBpc0NsaWVudFNpZGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJzsgfTtcbnZhciBpc0Nvb2tpZXNGcm9tQXBwUm91dGVyID0gZnVuY3Rpb24gKGNvb2tpZVN0b3JlKSB7XG4gICAgaWYgKCFjb29raWVTdG9yZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoJ2dldEFsbCcgaW4gY29va2llU3RvcmUgJiZcbiAgICAgICAgJ3NldCcgaW4gY29va2llU3RvcmUgJiZcbiAgICAgICAgdHlwZW9mIGNvb2tpZVN0b3JlLmdldEFsbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgY29va2llU3RvcmUuc2V0ID09PSAnZnVuY3Rpb24nKTtcbn07XG52YXIgaXNDb250ZXh0RnJvbUFwcFJvdXRlciA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuICgoISEoY29udGV4dCA9PT0gbnVsbCB8fCBjb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZXh0LnJlcSkgJiYgJ2Nvb2tpZXMnIGluIGNvbnRleHQucmVxICYmIGlzQ29va2llc0Zyb21BcHBSb3V0ZXIoY29udGV4dCA9PT0gbnVsbCB8fCBjb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZXh0LnJlcS5jb29raWVzKSkgfHxcbiAgICAgICAgKCEhKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5yZXMpICYmICdjb29raWVzJyBpbiBjb250ZXh0LnJlcyAmJiBpc0Nvb2tpZXNGcm9tQXBwUm91dGVyKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5yZXMuY29va2llcykpIHx8XG4gICAgICAgICghIShjb250ZXh0ID09PSBudWxsIHx8IGNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHQuY29va2llcykgJiYgaXNDb29raWVzRnJvbUFwcFJvdXRlcihjb250ZXh0LmNvb2tpZXMoKSkpKTtcbn07XG52YXIgdHJhbnNmb3JtQXBwUm91dGVyQ29va2llcyA9IGZ1bmN0aW9uIChjb29raWVzKSB7XG4gICAgdmFyIF9jb29raWVzID0ge307XG4gICAgY29va2llcy5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIF9jb29raWVzW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9jb29raWVzO1xufTtcbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9ICcnOyB9XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSA/IHJlc3VsdCA6IHZhbHVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKCFzdHIpXG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oJVswLTlBLVpdezJ9KSsvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbn07XG52YXIgZ2V0Q29va2llcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKGlzQ29udGV4dEZyb21BcHBSb3V0ZXIob3B0aW9ucykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZXEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1BcHBSb3V0ZXJDb29raWVzKG9wdGlvbnMucmVxLmNvb2tpZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29va2llcykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUFwcFJvdXRlckNvb2tpZXMob3B0aW9ucy5jb29raWVzKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZXE7XG4gICAgLy8gRGVmYXVsdE9wdGlvbnNbJ3JlcV0gY2FuIGJlIGNhc3RlZCBoZXJlIGJlY2F1c2UgaXMgbmFycm93ZWQgYnkgdXNpbmcgdGhlIGZuOiBpc0NvbnRleHRGcm9tQXBwUm91dGVyXG4gICAgaWYgKG9wdGlvbnMpXG4gICAgICAgIHJlcSA9IG9wdGlvbnMucmVxO1xuICAgIGlmICghaXNDbGllbnRTaWRlKCkpIHtcbiAgICAgICAgLy8gaWYgY29va2llLXBhcnNlciBpcyB1c2VkIGluIHByb2plY3QgZ2V0IGNvb2tpZXMgZnJvbSBjdHgucmVxLmNvb2tpZXNcbiAgICAgICAgLy8gaWYgY29va2llLXBhcnNlciBpc24ndCB1c2VkIGluIHByb2plY3QgZ2V0IGNvb2tpZXMgZnJvbSBjdHgucmVxLmhlYWRlcnMuY29va2llXG4gICAgICAgIGlmIChyZXEgJiYgcmVxLmNvb2tpZXMpXG4gICAgICAgICAgICByZXR1cm4gcmVxLmNvb2tpZXM7XG4gICAgICAgIGlmIChyZXEgJiYgcmVxLmhlYWRlcnMuY29va2llKVxuICAgICAgICAgICAgcmV0dXJuICgwLCBjb29raWVfMS5wYXJzZSkocmVxLmhlYWRlcnMuY29va2llKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICB2YXIgX2Nvb2tpZXMgPSB7fTtcbiAgICB2YXIgZG9jdW1lbnRDb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRvY3VtZW50Q29va2llcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY29va2llUGFydHMgPSBkb2N1bWVudENvb2tpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgdmFyIF9jb29raWUgPSBjb29raWVQYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgIHZhciBuYW1lXzEgPSBjb29raWVQYXJ0c1swXTtcbiAgICAgICAgX2Nvb2tpZXNbbmFtZV8xXSA9IF9jb29raWU7XG4gICAgfVxuICAgIHJldHVybiBfY29va2llcztcbn07XG5leHBvcnRzLmdldENvb2tpZXMgPSBnZXRDb29raWVzO1xudmFyIGdldENvb2tpZSA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgICB2YXIgX2Nvb2tpZXMgPSAoMCwgZXhwb3J0cy5nZXRDb29raWVzKShvcHRpb25zKTtcbiAgICB2YXIgdmFsdWUgPSBfY29va2llc1trZXldO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBkZWNvZGUodmFsdWUpO1xufTtcbmV4cG9ydHMuZ2V0Q29va2llID0gZ2V0Q29va2llO1xudmFyIHNldENvb2tpZSA9IGZ1bmN0aW9uIChrZXksIGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNDb250ZXh0RnJvbUFwcFJvdXRlcihvcHRpb25zKSkge1xuICAgICAgICB2YXIgcmVxID0gb3B0aW9ucy5yZXEsIHJlcyA9IG9wdGlvbnMucmVzLCBjb29raWVzRm4gPSBvcHRpb25zLmNvb2tpZXMsIHJlc3RPcHRpb25zID0gX19yZXN0KG9wdGlvbnMsIFtcInJlcVwiLCBcInJlc1wiLCBcImNvb2tpZXNcIl0pO1xuICAgICAgICB2YXIgcGF5bG9hZCA9IF9fYXNzaWduKHsgbmFtZToga2V5LCB2YWx1ZTogZGF0YSB9LCByZXN0T3B0aW9ucyk7XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICAgIHJlcS5jb29raWVzLnNldChwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICByZXMuY29va2llcy5zZXQocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb2tpZXNGbikge1xuICAgICAgICAgICAgY29va2llc0ZuKCkuc2V0KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9jb29raWVPcHRpb25zO1xuICAgIHZhciBfcmVxO1xuICAgIHZhciBfcmVzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIERlZmF1bHRPcHRpb25zIGNhbiBiZSBjYXN0ZWQgaGVyZSBiZWNhdXNlIHRoZSBBcHBSb3V0ZXJNaWRkbGV3YXJlT3B0aW9ucyBpcyBuYXJyb3dlZCB1c2luZyB0aGUgZm46IGlzQ29udGV4dEZyb21BcHBSb3V0ZXJcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucywgcmVxID0gX2EucmVxLCByZXMgPSBfYS5yZXMsIF9vcHRpb25zID0gX19yZXN0KF9hLCBbXCJyZXFcIiwgXCJyZXNcIl0pO1xuICAgICAgICBfcmVxID0gcmVxO1xuICAgICAgICBfcmVzID0gcmVzO1xuICAgICAgICBfY29va2llT3B0aW9ucyA9IF9vcHRpb25zO1xuICAgIH1cbiAgICB2YXIgY29va2llU3RyID0gKDAsIGNvb2tpZV8xLnNlcmlhbGl6ZSkoa2V5LCBzdHJpbmdpZnkoZGF0YSksIF9fYXNzaWduKHsgcGF0aDogJy8nIH0sIF9jb29raWVPcHRpb25zKSk7XG4gICAgaWYgKCFpc0NsaWVudFNpZGUoKSkge1xuICAgICAgICBpZiAoX3JlcyAmJiBfcmVxKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudENvb2tpZXMgPSBfcmVzLmdldEhlYWRlcignU2V0LUNvb2tpZScpO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGN1cnJlbnRDb29raWVzKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb29raWVzID0gIWN1cnJlbnRDb29raWVzID8gW10gOiBbU3RyaW5nKGN1cnJlbnRDb29raWVzKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGN1cnJlbnRDb29raWVzLmNvbmNhdChjb29raWVTdHIpKTtcbiAgICAgICAgICAgIGlmIChfcmVxICYmIF9yZXEuY29va2llcykge1xuICAgICAgICAgICAgICAgIHZhciBfY29va2llcyA9IF9yZXEuY29va2llcztcbiAgICAgICAgICAgICAgICBkYXRhID09PSAnJyA/IGRlbGV0ZSBfY29va2llc1trZXldIDogKF9jb29raWVzW2tleV0gPSBzdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9yZXEgJiYgX3JlcS5oZWFkZXJzICYmIF9yZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2Nvb2tpZXMgPSAoMCwgY29va2llXzEucGFyc2UpKF9yZXEuaGVhZGVycy5jb29raWUpO1xuICAgICAgICAgICAgICAgIGRhdGEgPT09ICcnID8gZGVsZXRlIF9jb29raWVzW2tleV0gOiAoX2Nvb2tpZXNba2V5XSA9IHN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgX3JlcS5oZWFkZXJzLmNvb2tpZSA9IE9iamVjdC5lbnRyaWVzKF9jb29raWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bS5jb25jYXQoXCJcIi5jb25jYXQoaXRlbVswXSwgXCI9XCIpLmNvbmNhdChpdGVtWzFdLCBcIjtcIikpO1xuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyO1xuICAgIH1cbn07XG5leHBvcnRzLnNldENvb2tpZSA9IHNldENvb2tpZTtcbnZhciBkZWxldGVDb29raWUgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuICgwLCBleHBvcnRzLnNldENvb2tpZSkoa2V5LCAnJywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG1heEFnZTogLTEgfSkpO1xufTtcbmV4cG9ydHMuZGVsZXRlQ29va2llID0gZGVsZXRlQ29va2llO1xudmFyIGhhc0Nvb2tpZSA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBjb29raWUgPSAoMCwgZXhwb3J0cy5nZXRDb29raWVzKShvcHRpb25zKTtcbiAgICByZXR1cm4gY29va2llLmhhc093blByb3BlcnR5KGtleSk7XG59O1xuZXhwb3J0cy5oYXNDb29raWUgPSBoYXNDb29raWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cookies-next/lib/index.js\n");

/***/ })

};
;