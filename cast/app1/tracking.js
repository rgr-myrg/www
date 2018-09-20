/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cv-core/dist/core/BaseClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-core/dist/core/BaseClass.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = (function () {
    function BaseClass() {
    }
    Object.defineProperty(BaseClass.prototype, "className", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    return BaseClass;
}());
exports.BaseClass = BaseClass;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/CoreError.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-core/dist/core/CoreError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoreError = (function () {
    function CoreError(message, code, target) {
        if (target === void 0) { target = 'Unknown'; }
        this.message = message;
        this.code = code;
        this.target = target;
        if (target !== 'Unknown') {
            if (typeof target === 'string') {
                this.target = target;
            }
            else if (target.className) {
                this.target = target.className;
            }
            else if (target.constructor && target.constructor.name) {
                this.target = target.constructor.name;
            }
            else
                this.target = 'Unknown';
        }
    }
    return CoreError;
}());
exports.CoreError = CoreError;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/CoreEvent.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-core/dist/core/CoreEvent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoreEvent = (function () {
    function CoreEvent(type, target, data) {
        this.timeStamp = Date.now();
        this.data = data;
        this.target = target;
        this.type = type;
    }
    return CoreEvent;
}());
exports.CoreEvent = CoreEvent;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/Emitter.js":
/*!***************************************************!*\
  !*** ./node_modules/cv-core/dist/core/Emitter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./node_modules/cv-core/dist/core/BaseClass.js");
var CoreEvent_1 = __webpack_require__(/*! ./CoreEvent */ "./node_modules/cv-core/dist/core/CoreEvent.js");
var Emitter = (function (_super) {
    __extends(Emitter, _super);
    function Emitter(options) {
        var _this = _super.call(this) || this;
        _this.opts = options || {};
        _this.eventMap = {};
        var o = _this.opts, e;
        for (var q in o) {
            if (typeof (o[q]) === 'function' && /^on[A-Z]/.test(q)) {
                e = q.charAt(2).toLowerCase() + q.substring(3);
                _this.on(e, o[q]);
                delete _this.opts[q];
            }
        }
        return _this;
    }
    Emitter.prototype.destroy = function () {
        var q;
        if (this.opts) {
            for (q in this.opts) {
                delete this.opts[q];
            }
            this.opts = null;
        }
        this.offAll(null);
        for (q in this.eventMap) {
            delete this.eventMap[q];
        }
        this.eventMap = null;
    };
    Emitter.prototype.on = function (name, func) {
        !this.eventMap[name] && (this.eventMap[name] = []);
        !this.exists(name, func) && this.eventMap[name].push(func);
    };
    Emitter.prototype.off = function (name, func) {
        !func && this.offAll(name);
        func && this.remove(name, func);
    };
    Emitter.prototype.offAll = function (name) {
        var map = this.eventMap, q;
        if (name) {
            this.remove(name, null);
            return;
        }
        for (q in map) {
            this.remove(q, null);
        }
    };
    Emitter.prototype.hasListenerFor = function (name) {
        return !!(this.eventMap[name] && this.eventMap[name].length);
    };
    Emitter.prototype.emit = function (name, data) {
        if (data === void 0) { data = null; }
        var e = new CoreEvent_1.CoreEvent(name, this, data), list = this.eventMap[name], n = list ? list.length : 0;
        for (var i = 0; i < n; i++) {
            list[i](e);
        }
    };
    Emitter.prototype.remove = function (name, func) {
        if (func === void 0) { func = null; }
        var l = this.eventMap[name], hit = false, i;
        if (l) {
            i = l.length;
            while (i--) {
                (!func || func === l[i]) && (hit = true) && l.splice(i, 1);
                if (hit)
                    break;
            }
        }
    };
    Emitter.prototype.exists = function (name, func) {
        var arr = this.eventMap[name], i = arr ? arr.length : 0;
        while (i--) {
            if (arr[i] === func)
                return true;
        }
        return false;
    };
    return Emitter;
}(BaseClass_1.BaseClass));
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/Logger.js":
/*!**************************************************!*\
  !*** ./node_modules/cv-core/dist/core/Logger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ./Util */ "./node_modules/cv-core/dist/core/Util.js");
var LogLevel_1 = __webpack_require__(/*! ../enum/LogLevel */ "./node_modules/cv-core/dist/enum/LogLevel.js");
var Logger = (function () {
    function Logger(opts) {
        this.typeMap = {
            'number': 'num',
            'string': 'str',
            'boolean': 'bool-',
            'function': 'obj',
            'object': 'obj'
        };
        this.opts = opts;
        this.useConsole = true;
        this.id = Util_1.Util.uid8();
        if (opts.container && opts.width && opts.height) {
            this.createDomConsole();
            this.useConsole = false;
        }
        this.logLevel = this.opts.logLevel || LogLevel_1.LogLevel.INFO;
    }
    Object.defineProperty(Logger.prototype, "dom", {
        get: function () {
            return this.logwin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logLevel", {
        set: function (level) {
            this.pLogLevel = level;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.assert = function (expression, label) {
        if (!!!expression) {
            this.error("Assertion failed! \"" + (label || '') + "\"");
        }
    };
    Logger.prototype.log = function (logLevel) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        if (logLevel > this.pLogLevel)
            return;
        if (this.useConsole) {
            console.log.apply(console, items);
        }
        else {
            for (var i = 0, n = items.length; i < n; i++) {
                if (items[i] === null) {
                    this.domLog(this.wrapValSp(null));
                    return;
                }
                var type = typeof items[i];
                switch (type) {
                    case 'string':
                        this.domLog(items[i]);
                        break;
                    case 'boolean':
                    case 'number':
                        this.domLog(this.wrapValSp(items[i]));
                        break;
                    case 'object':
                        this.domDir(items[i]);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    Logger.prototype.dir = function (logLevel, obj, label) {
        if (logLevel > this.pLogLevel)
            return;
        var lbl = label || 'Unnamed Object';
        if (this.useConsole) {
            console.log("Object: " + lbl);
            console.dir(obj);
        }
        else {
            this.domDir(obj, lbl);
        }
    };
    Logger.prototype.error = function (msg) {
        if (LogLevel_1.LogLevel.ERROR > this.pLogLevel)
            return;
        if (this.useConsole) {
            console.error(msg);
        }
        else {
            this.domError(msg);
        }
    };
    Logger.prototype.warn = function (msg) {
        if (LogLevel_1.LogLevel.WARN > this.pLogLevel)
            return;
        if (this.useConsole) {
            console.warn(msg);
        }
        else {
            this.domWarn(msg);
        }
    };
    Logger.prototype.domLog = function (msg) {
        this.writeToDom(msg, Logger.logStyle.INFO);
    };
    Logger.prototype.domError = function (msg) {
        this.writeToDom(msg, Logger.logStyle.ERROR);
    };
    Logger.prototype.domWarn = function (msg) {
        this.writeToDom(msg, Logger.logStyle.WARN);
    };
    Logger.prototype.writeToDom = function (msg, style, lockScroll) {
        var p = this.el('p', msg, style);
        this.logwin.appendChild(p);
        lockScroll !== true && (this.logwin.scrollTop = this.logwin.scrollHeight);
    };
    Logger.prototype.domDir = function (obj, objLabel) {
        var d = this.el('div'), ul = this.el('ul'), dname = this.el('div', objLabel || 'Unnamed object', 'hilite'), li, q, p;
        d.classList.add('indent');
        d.appendChild(dname);
        d.appendChild(ul);
        for (q in obj) {
            li = this.el('li');
            p = "<span class=\"prop\">" + q + "</span>: ";
            li.innerHTML = p + this.wrapValSp(obj[q]);
            ul.appendChild(li);
        }
        this.log(LogLevel_1.LogLevel.ANY, d.outerHTML);
    };
    Logger.prototype.el = function (name, inner, clas) {
        if (inner === void 0) { inner = null; }
        if (clas === void 0) { clas = null; }
        var el = document.createElement(name);
        inner && (el.innerHTML = inner);
        clas && (el.className = clas);
        return el;
    };
    Logger.prototype.wrapValSp = function (v) {
        var t = typeof v, c = this.typeMap[t] || 'obj';
        c === 'bool-' && (c += String(v));
        if (v === undefined) {
            v = 'undefined';
        }
        else if (v === null) {
            v = 'null';
        }
        else if (Array.isArray(v)) {
            v = "[]; len=" + v.length;
        }
        else if (t === 'function' || t === 'object') {
            v = (v.constructor && v.constructor.name) || t;
        }
        return "<span class=\"" + c + "\">" + v + "</span>";
    };
    Logger.prototype.createLogRules = function (className) {
        var o = this.opts, ss = (this.createStyleSheet()), sz = this.getSize(o.width, o.height), rule1 = "{width: " + sz.width + "; height: " + sz.height + ";" +
            'overflow: auto; background: #000; padding: 0 10px;', rules = [
            rule1,
            ' .info{color:#83c4f7;}',
            ' .num{color:#e9f;}',
            ' .str{color:#3fa;}',
            ' .obj{color:#ccc;}',
            ' .error{color:#f33;}',
            ' .warn{color:#ff9900;}',
            ' .hilite{color:#ef0;}',
            ' .bool-true{color:#6699fe;}',
            ' .bool-false{color:#fe6666;}',
            ' .prop{color:#cdf}',
            ' .indent{margin-left:20px}',
            ' p{margin:0 0 5px;color:#00db36;font-family:"Courier New",' +
                'monospace;font-size:14px;font-weight:bold;}',
            '.tl{top:0;left:0}',
            '.tr{top:0;right:0}',
            '.br{bottom:0;right:0}',
            '.bl{bottom:0;left:0}',
            '.docked{position: absolute;z-index:32000000}'
        ];
        for (var i = 0, n = rules.length; i < n; i++) {
            this.insertRule(ss, className + rules[i], i);
        }
    };
    Logger.prototype.createDomConsole = function () {
        var cname = "logger-" + this.id, div = this.el('div'), dp = this.opts.dock;
        div.className = cname;
        this.createLogRules('.' + cname);
        this.logwin = div;
        if (dp) {
            this.logwin.classList.add('docked');
            this.logwin.classList.add(dp);
        }
        this.opts.container.appendChild(this.logwin);
    };
    Logger.prototype.getSize = function (w, h) {
        var out = { width: w, height: h };
        if (typeof w === 'number') {
            out.width = String(w) + 'px';
        }
        if (typeof h === 'number') {
            out.height = String(h) + 'px';
        }
        return out;
    };
    Logger.prototype.insertRule = function (sheet, rule, index) {
        if ("insertRule" in sheet) {
            sheet.insertRule(rule, index);
        }
    };
    Logger.prototype.createStyleSheet = function () {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    };
    Logger.logStyle = {
        WARN: 'warn',
        ERROR: 'error',
        INFO: 'info',
        HILITE: 'hilite'
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/Util.js":
/*!************************************************!*\
  !*** ./node_modules/cv-core/dist/core/Util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var Util = (function () {
    function Util() {
    }
    Util.uid8 = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) *
                0x10000).toString(16).substring(1);
        };
        return s4() + s4();
    };
    Util.isEmpty = function (obj) {
        return obj === null || obj === undefined ||
            (Array.isArray(obj) && obj.length === 0) ||
            "object" === typeof obj && Object.keys(obj).length === 0 ||
            "string" === typeof obj && obj === '';
    };
    Util.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Util.isString = function (obj) {
        return typeof obj === 'string';
    };
    Util.assign = function (tgt, src1, src2, src3) {
        return objectAssign(tgt || {}, src1, src2, src3);
    };
    Util.getDefinedString = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var n = args.length;
        for (var i = 0; i < n; i++) {
            var arg = args[i];
            if (this.isString(arg) && !this.isEmpty(arg)) {
                return arg;
            }
        }
        return '';
    };
    return Util;
}());
exports.Util = Util;


/***/ }),

/***/ "./node_modules/cv-core/dist/dataservice/AsyncDataRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cv-core/dist/dataservice/AsyncDataRequest.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../core/Util */ "./node_modules/cv-core/dist/core/Util.js");
var Emitter_1 = __webpack_require__(/*! ../core/Emitter */ "./node_modules/cv-core/dist/core/Emitter.js");
var XhrResponseType_1 = __webpack_require__(/*! ../enum/XhrResponseType */ "./node_modules/cv-core/dist/enum/XhrResponseType.js");
var XhrResponseContentType_1 = __webpack_require__(/*! ../enum/XhrResponseContentType */ "./node_modules/cv-core/dist/enum/XhrResponseContentType.js");
var AsyncDataRequest = (function (_super) {
    __extends(AsyncDataRequest, _super);
    function AsyncDataRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.xhrListenerMap = {
            load: function () { return _this.hXhrLoad(); },
            error: function () { return _this.hXhrError(); },
            timeout: function () { return _this.hXhrTimeout(); }
        };
        _this.xhr = null;
        _this.inFlight = false;
        _this.killed = false;
        _this.jsonPId = null;
        _this.timeoutHandle = -1;
        _this.isCallable() && _this.call();
        return _this;
    }
    Object.defineProperty(AsyncDataRequest.prototype, "requestProperties", {
        get: function () {
            return this.opts.requestProperties;
        },
        set: function (requestProperties) {
            this.opts.requestProperties = requestProperties;
        },
        enumerable: true,
        configurable: true
    });
    AsyncDataRequest.prototype.setRequestProperty = function (name, value) {
        if (this.opts.requestProperties) {
            this.opts.requestProperties[name] = value;
        }
    };
    AsyncDataRequest.prototype.destroy = function () {
        if (this.killed) {
            return;
        }
        if (this.xhr) {
            this.removeXhrListeners();
            this.xhr.abort();
        }
        this.inFlight = false;
        this.killed = true;
        this.xhr = null;
        _super.prototype.destroy.call(this);
    };
    AsyncDataRequest.prototype.call = function () {
        if (!this.isCallable()) {
            throw new Error('XhrDataRequest: call() encountered unexpected condition.');
        }
        this.xhr = this.createXHR(this.opts.requestProperties);
        this.inFlight = true;
        this.xhr.send();
    };
    AsyncDataRequest.prototype.callJsonP = function (url, timeout, callbackId) {
        var _this = this;
        if (timeout === void 0) { timeout = 5000; }
        this.jsonPId = callbackId || Util_1.Util.uid8();
        window[this.jsonPId] = function (obj) { return _this.handleJsonP(obj); };
        var leadChar = url.indexOf('?') > 0 ? '&' : '?';
        url += leadChar + "callback=" + this.jsonPId;
        var scr = document.createElement('script');
        scr.setAttribute('src', url);
        scr.setAttribute('type', 'application/javascript');
        document.head.appendChild(scr);
        this.timeoutHandle = setTimeout(function () { return _this.handleJsonPTimeout; }, timeout);
    };
    AsyncDataRequest.prototype.abort = function () {
        this.destroy();
    };
    AsyncDataRequest.prototype.handleJsonPTimeout = function () {
        clearTimeout(this.timeoutHandle);
        this.emitError('Request timed out.', true);
    };
    AsyncDataRequest.prototype.handleJsonP = function (obj) {
        clearTimeout(this.timeoutHandle);
        window[this.jsonPId] = Function.prototype;
        this.emit(AsyncDataRequest.event.COMPLETE, {
            response: obj,
            xhr: null,
            error: false
        });
    };
    AsyncDataRequest.prototype.removeXhrListeners = function () {
        for (var q in this.xhrListenerMap) {
            this.xhr.removeEventListener(q, this.xhrListenerMap[q]);
        }
    };
    AsyncDataRequest.prototype.emitError = function (msg, isTimeout) {
        if (msg === void 0) { msg = null; }
        if (isTimeout === void 0) { isTimeout = false; }
        this.inFlight = false;
        this.emit(AsyncDataRequest.event.COMPLETE, {
            xhr: this.xhr,
            status: this.xhr.status,
            timedOut: isTimeout,
            error: true,
            message: "XhrDataRequest error: " + msg
        });
        this.destroy();
    };
    AsyncDataRequest.prototype.hXhrError = function () {
        if (this.killed)
            return;
        this.emitError(AsyncDataRequest.statusMessages[this.xhr.status.toString()]);
    };
    AsyncDataRequest.prototype.hXhrTimeout = function () {
        if (this.killed)
            return;
        this.emitError('Request timed out.', true);
    };
    AsyncDataRequest.prototype.hXhrLoad = function () {
        if (this.killed)
            return;
        var status = this.xhr.status;
        this.inFlight = false;
        if (status >= 200 && status < 400) {
            var req = this.opts.requestProperties, data = this.xhr.response;
            this.parseResponse(data, req, this.xhr.getResponseHeader('Content-Type'));
        }
        else {
            this.emitError(AsyncDataRequest.statusMessages[status.toString()]);
        }
        this.destroy();
    };
    AsyncDataRequest.prototype.parseResponse = function (data, rqProp, contentType) {
        var parsedData = null;
        var prefix = 'Unable to parse ', error, cType;
        if (typeof data === 'string') {
            data = data.trim();
            if (contentType.indexOf(XhrResponseContentType_1.XhrResponseContentType.JSON) >= 0 ||
                rqProp.responseType === XhrResponseType_1.XhrResponseType.JSON ||
                data.charAt(0) === '{' ||
                data.charAt(0) === '[') {
                cType = XhrResponseContentType_1.XhrResponseContentType.JSON;
                try {
                    parsedData = JSON.parse(data);
                }
                catch (e) {
                    error = prefix + 'JSON.';
                }
            }
            else if (contentType.indexOf(XhrResponseContentType_1.XhrResponseContentType.XML) >= 0) {
                cType = XhrResponseContentType_1.XhrResponseContentType.XML;
                var parser = new DOMParser();
                parsedData = parser.parseFromString(data, 'application/xml');
                if (!(parsedData instanceof Document)) {
                    error = prefix + 'XML.';
                }
            }
        }
        if (!error) {
            this.emit(AsyncDataRequest.event.COMPLETE, {
                response: parsedData || data,
                contentType: cType || XhrResponseContentType_1.XhrResponseContentType.TEXT,
                xhr: this.xhr,
                error: false
            });
        }
        else {
            this.emitError(error);
        }
    };
    AsyncDataRequest.prototype.isCallable = function () {
        return (!this.inFlight &&
            this.hasListenerFor(AsyncDataRequest.event.COMPLETE) &&
            this.opts.requestProperties &&
            !Util_1.Util.isEmpty(this.opts.requestProperties.url));
    };
    AsyncDataRequest.prototype.createXHR = function (reqProps) {
        var xhr = new XMLHttpRequest(), sec = window.location.protocol === 'https:', url = sec ? reqProps.url.replace('http:', 'https:') : reqProps.url;
        xhr.open(reqProps.method, url, true);
        reqProps.responseType && (xhr.responseType = reqProps.responseType);
        xhr.timeout = reqProps.timeout;
        for (var q in this.xhrListenerMap) {
            xhr.addEventListener(q, this.xhrListenerMap[q]);
        }
        return xhr;
    };
    AsyncDataRequest.event = {
        COMPLETE: "complete"
    };
    AsyncDataRequest.statusMessages = {
        '0': 'Request blocked or timed out',
        '500': 'Server error encountered.',
        '404': 'Resource not found.',
        '403': 'Access denied.'
    };
    return AsyncDataRequest;
}(Emitter_1.Emitter));
exports.AsyncDataRequest = AsyncDataRequest;


/***/ }),

/***/ "./node_modules/cv-core/dist/dataservice/BrowserLocalStorage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-core/dist/dataservice/BrowserLocalStorage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrowserLocalStorage = (function () {
    function BrowserLocalStorage(options) {
        this.serviceAvailable = null;
        this.storage = window.localStorage;
        this.keyNamespace = options && options.keyNamespace ? options.keyNamespace : 'cbsi_vtg_';
    }
    BrowserLocalStorage.prototype.destroy = function () {
        this.storage = null;
    };
    BrowserLocalStorage.prototype.store = function (key, value, options) {
        if (options === void 0) { options = null; }
        var obj = {
            timestamp: (options && options.timestamp) || Date.now(),
            expiry: (options && options.ttl) ? Date.now() + options.ttl * 1000 : null,
            data: value,
            isDate: value instanceof Date
        };
        this.storage.setItem(this.getNamespacedKey(key), JSON.stringify(obj));
    };
    BrowserLocalStorage.prototype.retrieve = function (key) {
        this.clearExpired(key);
        var nsKey = this.getNamespacedKey(key), value = nsKey ? this.storage.getItem(nsKey) : null;
        if (!value || "string" !== typeof value) {
            return null;
        }
        var obj = JSON.parse(value);
        return obj.isDate ? new Date(obj.data) : obj.data;
    };
    ;
    BrowserLocalStorage.prototype.clear = function (key) {
        var nsKey = this.getNamespacedKey(key);
        if (nsKey) {
            if (this.storage[nsKey]) {
                this.storage.removeItem(nsKey);
            }
        }
        else {
            var keys = Object.keys(this.storage), i = keys.length;
            while (i--) {
                if (keys[i].indexOf(this.keyNamespace)) {
                    this.storage.removeItem(keys[i]);
                }
            }
        }
    };
    ;
    BrowserLocalStorage.prototype.isAvailable = function () {
        return this.test();
    };
    BrowserLocalStorage.prototype.getNamespacedKey = function (key) {
        return key ? this.keyNamespace + key : null;
    };
    BrowserLocalStorage.prototype.test = function () {
        var testVal = "OK", ok = false;
        if (this.serviceAvailable !== null) {
            return this.serviceAvailable;
        }
        if (!window.localStorage) {
            ok = false;
        }
        else {
            try {
                this.store("vtg_test_key", testVal);
                var result = this.retrieve("vtg_test_key") === testVal;
                this.clear("vtg_test_key");
                ok = result;
            }
            catch (e) {
                ok = false;
            }
        }
        this.serviceAvailable = ok;
        return this.serviceAvailable;
    };
    BrowserLocalStorage.prototype.clearExpired = function (key) {
        if (key === void 0) { key = ''; }
        var nsKey = this.getNamespacedKey(key), store = this.storage, checkAndClear = function (key) {
            var obj, val = store.getItem(key);
            try {
                obj = JSON.parse(val || "{}");
            }
            catch (e) {
                obj = {};
            }
            if (obj.expiry && obj.expiry <= Date.now()) {
                store.removeItem(key);
            }
        };
        if (nsKey) {
            return checkAndClear(nsKey);
        }
        else {
            var keys = Object.keys(store), n = keys.length;
            while (n--) {
                checkAndClear(keys[n]);
            }
        }
    };
    return BrowserLocalStorage;
}());
exports.BrowserLocalStorage = BrowserLocalStorage;


/***/ }),

/***/ "./node_modules/cv-core/dist/dataservice/RequestProperties.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-core/dist/dataservice/RequestProperties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XhrResponseType_1 = __webpack_require__(/*! ../enum/XhrResponseType */ "./node_modules/cv-core/dist/enum/XhrResponseType.js");
var RequestProperties = (function () {
    function RequestProperties(options) {
        this.headers = options.headers || {};
        this.method = options.method || "GET";
        this.responseType = options.responseType || XhrResponseType_1.XhrResponseType.DEFAULT;
        this.timeout = options.timeout || 1000;
        this.url = options.url || null;
    }
    return RequestProperties;
}());
exports.RequestProperties = RequestProperties;


/***/ }),

/***/ "./node_modules/cv-core/dist/dataservice/ScriptLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/cv-core/dist/dataservice/ScriptLoader.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Emitter_1 = __webpack_require__(/*! ../core/Emitter */ "./node_modules/cv-core/dist/core/Emitter.js");
var Util_1 = __webpack_require__(/*! ../core/Util */ "./node_modules/cv-core/dist/core/Util.js");
var ScriptLoader = (function (_super) {
    __extends(ScriptLoader, _super);
    function ScriptLoader(options) {
        var _this = _super.call(this, Util_1.Util.assign({
            timeout: 2000
        }, options || {})) || this;
        _this.timeoutHandles = {};
        _this.map = {};
        var hasListener = _this.hasListenerFor(ScriptLoader.event.COMPLETE);
        if (_this.opts.url && hasListener) {
            _this.loadScript(_this.opts.url);
        }
        else if (_this.opts.urls && hasListener) {
            _this.loadScripts(_this.opts.urls);
        }
        return _this;
    }
    ScriptLoader.prototype.destroy = function () {
        if (!this.timeoutHandles) {
            return;
        }
        for (var q in this.timeoutHandles) {
            clearTimeout(this.timeoutHandles[q]);
        }
        this.timeoutHandles = null;
        _super.prototype.destroy.call(this);
    };
    ScriptLoader.prototype.loadScript = function (scriptUrl, completeListener) {
        var _this = this;
        var scr = document.createElement('script'), sec = window.location.protocol === 'https:', url = sec ? scriptUrl.replace('http:', 'https:') : scriptUrl;
        this.map[url] = {
            hLoad: function () { return _this.hLoadOrError(url); },
            hError: function () { return _this.hLoadOrError(url, true, false); },
            scriptEl: scr
        };
        var mapObj = this.map[url];
        completeListener && this.on(ScriptLoader.event.COMPLETE, completeListener);
        scr.async = true;
        scr.addEventListener('load', mapObj.hLoad);
        scr.addEventListener('error', mapObj.hError);
        this.timeoutHandles[url] = setTimeout(function () { return _this.hLoadOrError(url, true, true); }, this.opts.timeout);
        document.head.appendChild(scr);
        scr.src = url;
    };
    ScriptLoader.prototype.loadScripts = function (urls, completeListener) {
        completeListener && this.on(ScriptLoader.event.COMPLETE, completeListener);
        for (var i = 0, n = urls.length; i < n; i++) {
            this.loadScript(urls[i]);
        }
    };
    ScriptLoader.prototype.hLoadOrError = function (url, error, timedOut) {
        clearTimeout(this.timeoutHandles[url]);
        delete this.timeoutHandles[url];
        var mapObj = this.map[url];
        mapObj.scriptEl.removeEventListener('load', mapObj.hLoad);
        mapObj.scriptEl.removeEventListener('error', mapObj.hError);
        for (var q in mapObj) {
            delete mapObj[q];
        }
        delete this.map[url];
        this.emit(ScriptLoader.event.COMPLETE, {
            url: url,
            error: error === true,
            timedOut: timedOut === true
        });
    };
    ScriptLoader.event = {
        COMPLETE: "complete"
    };
    return ScriptLoader;
}(Emitter_1.Emitter));
exports.ScriptLoader = ScriptLoader;


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/ErrorCode.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/ErrorCode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ILLEGAL_OPERATION"] = 0] = "ILLEGAL_OPERATION";
    ErrorCode[ErrorCode["NOT_FOUND"] = 1] = "NOT_FOUND";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/LogLevel.js":
/*!****************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/LogLevel.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["OFF"] = 0] = "OFF";
    LogLevel[LogLevel["ANY"] = 100] = "ANY";
    LogLevel[LogLevel["ERROR"] = 200] = "ERROR";
    LogLevel[LogLevel["WARN"] = 300] = "WARN";
    LogLevel[LogLevel["INFO"] = 400] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 500] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/TrackingModules.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/TrackingModules.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackingModules;
(function (TrackingModules) {
    TrackingModules["COMSCORE"] = "ComScore_ss";
    TrackingModules["CONVIVA"] = "ConvivaQOSPluginJS";
    TrackingModules["HEARTBEAT"] = "SiteCatalyst";
    TrackingModules["NIELSEN"] = "NielsenTracking_SDK";
    TrackingModules["MUX"] = "MuxQOSPluginJS";
})(TrackingModules = exports.TrackingModules || (exports.TrackingModules = {}));


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/XhrResponseContentType.js":
/*!******************************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/XhrResponseContentType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XhrResponseContentType;
(function (XhrResponseContentType) {
    XhrResponseContentType["JSON"] = "application/json";
    XhrResponseContentType["XML"] = "text/xml";
    XhrResponseContentType["TEXT"] = "text/plain";
})(XhrResponseContentType = exports.XhrResponseContentType || (exports.XhrResponseContentType = {}));


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/XhrResponseType.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/XhrResponseType.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XhrResponseType;
(function (XhrResponseType) {
    XhrResponseType["ARRAY_BUFFER"] = "arraybuffer";
    XhrResponseType["TEXT"] = "text";
    XhrResponseType["JSON"] = "json";
    XhrResponseType["DOCUMENT"] = "document";
    XhrResponseType["DEFAULT"] = "";
})(XhrResponseType = exports.XhrResponseType || (exports.XhrResponseType = {}));


/***/ }),

/***/ "./node_modules/cv-core/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/cv-core/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass_1 = __webpack_require__(/*! ./core/BaseClass */ "./node_modules/cv-core/dist/core/BaseClass.js");
exports.BaseClass = BaseClass_1.BaseClass;
var CoreError_1 = __webpack_require__(/*! ./core/CoreError */ "./node_modules/cv-core/dist/core/CoreError.js");
exports.CoreError = CoreError_1.CoreError;
var CoreEvent_1 = __webpack_require__(/*! ./core/CoreEvent */ "./node_modules/cv-core/dist/core/CoreEvent.js");
exports.CoreEvent = CoreEvent_1.CoreEvent;
var Emitter_1 = __webpack_require__(/*! ./core/Emitter */ "./node_modules/cv-core/dist/core/Emitter.js");
exports.Emitter = Emitter_1.Emitter;
var Logger_1 = __webpack_require__(/*! ./core/Logger */ "./node_modules/cv-core/dist/core/Logger.js");
exports.Logger = Logger_1.Logger;
var Util_1 = __webpack_require__(/*! ./core/Util */ "./node_modules/cv-core/dist/core/Util.js");
exports.Util = Util_1.Util;
var AsyncDataRequest_1 = __webpack_require__(/*! ./dataservice/AsyncDataRequest */ "./node_modules/cv-core/dist/dataservice/AsyncDataRequest.js");
exports.AsyncDataRequest = AsyncDataRequest_1.AsyncDataRequest;
var BrowserLocalStorage_1 = __webpack_require__(/*! ./dataservice/BrowserLocalStorage */ "./node_modules/cv-core/dist/dataservice/BrowserLocalStorage.js");
exports.BrowserLocalStorage = BrowserLocalStorage_1.BrowserLocalStorage;
var RequestProperties_1 = __webpack_require__(/*! ./dataservice/RequestProperties */ "./node_modules/cv-core/dist/dataservice/RequestProperties.js");
exports.RequestProperties = RequestProperties_1.RequestProperties;
var ScriptLoader_1 = __webpack_require__(/*! ./dataservice/ScriptLoader */ "./node_modules/cv-core/dist/dataservice/ScriptLoader.js");
exports.ScriptLoader = ScriptLoader_1.ScriptLoader;
var ErrorCode_1 = __webpack_require__(/*! ./enum/ErrorCode */ "./node_modules/cv-core/dist/enum/ErrorCode.js");
exports.ErrorCode = ErrorCode_1.ErrorCode;
var LogLevel_1 = __webpack_require__(/*! ./enum/LogLevel */ "./node_modules/cv-core/dist/enum/LogLevel.js");
exports.LogLevel = LogLevel_1.LogLevel;
var TrackingModules_1 = __webpack_require__(/*! ./enum/TrackingModules */ "./node_modules/cv-core/dist/enum/TrackingModules.js");
exports.TrackingModules = TrackingModules_1.TrackingModules;
var XhrResponseContentType_1 = __webpack_require__(/*! ./enum/XhrResponseContentType */ "./node_modules/cv-core/dist/enum/XhrResponseContentType.js");
exports.XhrResponseContentType = XhrResponseContentType_1.XhrResponseContentType;
var XhrResponseType_1 = __webpack_require__(/*! ./enum/XhrResponseType */ "./node_modules/cv-core/dist/enum/XhrResponseType.js");
exports.XhrResponseType = XhrResponseType_1.XhrResponseType;


/***/ }),

/***/ "./node_modules/cv-model/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cv-model/dist/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AdBreakType_1 = __webpack_require__(/*! ./src/enum/AdBreakType */ "./node_modules/cv-model/dist/src/enum/AdBreakType.js");
exports.AdBreakType = AdBreakType_1.AdBreakType;
var ModelName_1 = __webpack_require__(/*! ./src/enum/ModelName */ "./node_modules/cv-model/dist/src/enum/ModelName.js");
exports.ModelName = ModelName_1.ModelName;
var PlaybackState_1 = __webpack_require__(/*! ./src/enum/PlaybackState */ "./node_modules/cv-model/dist/src/enum/PlaybackState.js");
exports.PlaybackState = PlaybackState_1.PlaybackState;
var PlayerEvents_1 = __webpack_require__(/*! ./src/enum/PlayerEvents */ "./node_modules/cv-model/dist/src/enum/PlayerEvents.js");
exports.PlayerEvents = PlayerEvents_1.PlayerEvents;
var StreamType_1 = __webpack_require__(/*! ./src/enum/StreamType */ "./node_modules/cv-model/dist/src/enum/StreamType.js");
exports.StreamType = StreamType_1.StreamType;
var index_1 = __webpack_require__(/*! ./src/cfg/index */ "./node_modules/cv-model/dist/src/cfg/index.js");
exports.config = index_1.config;
var BuildInfo_1 = __webpack_require__(/*! ./src/model/BuildInfo */ "./node_modules/cv-model/dist/src/model/BuildInfo.js");
exports.BuildInfo = BuildInfo_1.BuildInfo;
var GlobalSettings_1 = __webpack_require__(/*! ./src/model/GlobalSettings */ "./node_modules/cv-model/dist/src/model/GlobalSettings.js");
exports.GlobalSettings = GlobalSettings_1.GlobalSettings;
var AdBreakInfo_1 = __webpack_require__(/*! ./src/model/AdBreakInfo */ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js");
exports.AdBreakInfo = AdBreakInfo_1.AdBreakInfo;
var AdItem_1 = __webpack_require__(/*! ./src/model/AdItem */ "./node_modules/cv-model/dist/src/model/AdItem.js");
exports.AdItem = AdItem_1.AdItem;
var AdPlaybackState_1 = __webpack_require__(/*! ./src/model/AdPlaybackState */ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js");
exports.AdPlaybackState = AdPlaybackState_1.AdPlaybackState;
var ContentChapterInfo_1 = __webpack_require__(/*! ./src/model/ContentChapterInfo */ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js");
exports.ContentChapterInfo = ContentChapterInfo_1.ContentChapterInfo;
var ContentMetadata_1 = __webpack_require__(/*! ./src/model/ContentMetadata */ "./node_modules/cv-model/dist/src/model/ContentMetadata.js");
exports.ContentMetadata = ContentMetadata_1.ContentMetadata;
var ContentPlaybackState_1 = __webpack_require__(/*! ./src/model/ContentPlaybackState */ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js");
exports.ContentPlaybackState = ContentPlaybackState_1.ContentPlaybackState;
var DeliveryInfo_1 = __webpack_require__(/*! ./src/model/DeliveryInfo */ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js");
exports.DeliveryInfo = DeliveryInfo_1.DeliveryInfo;
var DomElementCollection_1 = __webpack_require__(/*! ./src/model/DomElementCollection */ "./node_modules/cv-model/dist/src/model/DomElementCollection.js");
exports.DomElementCollection = DomElementCollection_1.DomElementCollection;
var GlobalAdData_1 = __webpack_require__(/*! ./src/model/GlobalAdData */ "./node_modules/cv-model/dist/src/model/GlobalAdData.js");
exports.GlobalAdData = GlobalAdData_1.GlobalAdData;
var LiveSegmentData_1 = __webpack_require__(/*! ./src/model/LiveSegmentData */ "./node_modules/cv-model/dist/src/model/LiveSegmentData.js");
exports.LiveSegmentData = LiveSegmentData_1.LiveSegmentData;
var PlaybackConfig_1 = __webpack_require__(/*! ./src/model/PlaybackConfig */ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js");
exports.PlaybackConfig = PlaybackConfig_1.PlaybackConfig;
var PlayerOptions_1 = __webpack_require__(/*! ./src/model/PlayerOptions */ "./node_modules/cv-model/dist/src/model/PlayerOptions.js");
exports.PlayerOptions = PlayerOptions_1.PlayerOptions;
var PresentationState_1 = __webpack_require__(/*! ./src/model/PresentationState */ "./node_modules/cv-model/dist/src/model/PresentationState.js");
exports.PresentationState = PresentationState_1.PresentationState;
var ResourceMetadata_1 = __webpack_require__(/*! ./src/model/ResourceMetadata */ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js");
exports.ResourceMetadata = ResourceMetadata_1.ResourceMetadata;
var ResourceState_1 = __webpack_require__(/*! ./src/model/ResourceState */ "./node_modules/cv-model/dist/src/model/ResourceState.js");
exports.ResourceState = ResourceState_1.ResourceState;
var ResourceConfig_1 = __webpack_require__(/*! ./src/model/ResourceConfig */ "./node_modules/cv-model/dist/src/model/ResourceConfig.js");
exports.ResourceConfig = ResourceConfig_1.ResourceConfig;
var UserData_1 = __webpack_require__(/*! ./src/model/UserData */ "./node_modules/cv-model/dist/src/model/UserData.js");
exports.UserData = UserData_1.UserData;
var ModelCollection_1 = __webpack_require__(/*! ./src/ModelCollection */ "./node_modules/cv-model/dist/src/ModelCollection.js");
exports.ModelCollection = ModelCollection_1.ModelCollection;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Generator_1 = __webpack_require__(/*! ./Generator */ "./node_modules/cv-model/dist/src/Generator.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var ConfigurablePropertyContainer = (function () {
    function ConfigurablePropertyContainer(config) {
        this.pData = {};
        this.defaultValues = {};
        Generator_1.Generator.generateModel(this, config, this.pData, this.defaultValues);
    }
    Object.defineProperty(ConfigurablePropertyContainer.prototype, "data", {
        get: function () {
            return objectAssign({}, this.pData);
        },
        enumerable: true,
        configurable: true
    });
    ConfigurablePropertyContainer.prototype.reset = function () {
        for (var q in this.defaultValues) {
            this.pData[q] = this.defaultValues[q];
        }
    };
    return ConfigurablePropertyContainer;
}());
exports.ConfigurablePropertyContainer = ConfigurablePropertyContainer;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Generator.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Generator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ./Validator */ "./node_modules/cv-model/dist/src/Validator.js");
var Generator = (function () {
    function Generator() {
    }
    Generator.generateModel = function (scope, config, dataContainer, defaultValueContainer) {
        for (var q in config) {
            this.createProperty(q, config[q], scope, dataContainer, defaultValueContainer);
        }
    };
    Generator.createProperty = function (name, config, scope, dataCtr, defaultValueCtr) {
        var validator = config.validator, type = config.type, defValue = config.defaultValue, enumerable = config.enumerable !== false, setterTransformer = this.getTransformer(config, 'setter', scope), getterTransformer = this.getTransformer(config, 'getter', scope);
        if (config.writable === false) {
            Object.defineProperty(scope, name, {
                enumerable: enumerable,
                value: defValue,
                writable: false
            });
            dataCtr[name] = defValue;
        }
        else {
            Object.defineProperty(scope, name, {
                enumerable: enumerable,
                set: function (val) {
                    var canWarn = console && console.warn, txVal = setterTransformer(val);
                    if (validator && !validator(txVal)) {
                        if (canWarn) {
                            console.warn("Invalid value '" + txVal + "' for property " + name);
                            return;
                        }
                    }
                    if (!Validator_1.Validator.checkType(txVal, type)) {
                        canWarn && console.warn("Invalid type supplied for property " + name);
                        return;
                    }
                    dataCtr[name] = txVal;
                },
                get: function () {
                    return getterTransformer(dataCtr[name]);
                }
            });
            dataCtr[name] = defValue;
        }
        defaultValueCtr[name] = defValue;
    };
    Generator.getTransformer = function (pCfg, which, scope) {
        var tx = pCfg[which + 'Transformer'];
        if (tx && typeof tx === 'function') {
            return tx.bind(scope);
        }
        return this.blankTransformer;
    };
    Generator.blankTransformer = function (val) {
        return val;
    };
    return Generator;
}());
exports.Generator = Generator;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/ModelCollection.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/ModelCollection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./cfg/index */ "./node_modules/cv-model/dist/src/cfg/index.js");
var BuildInfo_1 = __webpack_require__(/*! ./model/BuildInfo */ "./node_modules/cv-model/dist/src/model/BuildInfo.js");
var GlobalSettings_1 = __webpack_require__(/*! ./model/GlobalSettings */ "./node_modules/cv-model/dist/src/model/GlobalSettings.js");
var AdBreakInfo_1 = __webpack_require__(/*! ./model/AdBreakInfo */ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js");
var AdItem_1 = __webpack_require__(/*! ./model/AdItem */ "./node_modules/cv-model/dist/src/model/AdItem.js");
var AdPlaybackState_1 = __webpack_require__(/*! ./model/AdPlaybackState */ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js");
var ContentChapterInfo_1 = __webpack_require__(/*! ./model/ContentChapterInfo */ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js");
var ContentMetadata_1 = __webpack_require__(/*! ./model/ContentMetadata */ "./node_modules/cv-model/dist/src/model/ContentMetadata.js");
var ContentPlaybackState_1 = __webpack_require__(/*! ./model/ContentPlaybackState */ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js");
var DeliveryInfo_1 = __webpack_require__(/*! ./model/DeliveryInfo */ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js");
var DomElementCollection_1 = __webpack_require__(/*! ./model/DomElementCollection */ "./node_modules/cv-model/dist/src/model/DomElementCollection.js");
var GlobalAdData_1 = __webpack_require__(/*! ./model/GlobalAdData */ "./node_modules/cv-model/dist/src/model/GlobalAdData.js");
var LiveSegmentData_1 = __webpack_require__(/*! ./model/LiveSegmentData */ "./node_modules/cv-model/dist/src/model/LiveSegmentData.js");
var PlaybackConfig_1 = __webpack_require__(/*! ./model/PlaybackConfig */ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js");
var PlayerOptions_1 = __webpack_require__(/*! ./model/PlayerOptions */ "./node_modules/cv-model/dist/src/model/PlayerOptions.js");
var PresentationState_1 = __webpack_require__(/*! ./model/PresentationState */ "./node_modules/cv-model/dist/src/model/PresentationState.js");
var ResourceMetadata_1 = __webpack_require__(/*! ./model/ResourceMetadata */ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js");
var ResourceState_1 = __webpack_require__(/*! ./model/ResourceState */ "./node_modules/cv-model/dist/src/model/ResourceState.js");
var ResourceConfig_1 = __webpack_require__(/*! ./model/ResourceConfig */ "./node_modules/cv-model/dist/src/model/ResourceConfig.js");
var UserData_1 = __webpack_require__(/*! ./model/UserData */ "./node_modules/cv-model/dist/src/model/UserData.js");
var ModelCollection = (function () {
    function ModelCollection() {
        this.mdlCollection = {};
        this.createModels();
    }
    ModelCollection.prototype.destroy = function () {
        for (var q in this.mdlCollection) {
            delete this.mdlCollection[q];
        }
        this.mdlCollection = null;
    };
    ModelCollection.prototype.getModel = function (name) {
        return (this.mdlCollection[name]);
    };
    Object.defineProperty(ModelCollection.prototype, "BuildInfo", {
        get: function () { return this.mdlCollection.BuildInfo; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "GlobalSettings", {
        get: function () { return this.mdlCollection.GlobalSettings; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "AdBreakInfo", {
        get: function () { return this.mdlCollection.AdBreakInfo; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "AdItem", {
        get: function () { return this.mdlCollection.AdItem; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "AdPlaybackState", {
        get: function () { return this.mdlCollection.AdPlaybackState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ContentChapterInfo", {
        get: function () { return this.mdlCollection.ContentChapterInfo; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ContentMetadata", {
        get: function () { return this.mdlCollection.ContentMetadata; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ContentPlaybackState", {
        get: function () { return this.mdlCollection.ContentPlaybackState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "DeliveryInfo", {
        get: function () { return this.mdlCollection.DeliveryInfo; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "DomElementCollection", {
        get: function () { return this.mdlCollection.DomElementCollection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "GlobalAdData", {
        get: function () { return this.mdlCollection.GlobalAdData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "LiveSegmentData", {
        get: function () { return this.mdlCollection.LiveSegmentData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "PlaybackConfig", {
        get: function () { return this.mdlCollection.PlaybackConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "PlayerOptions", {
        get: function () { return this.mdlCollection.PlayerOptions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "PresentationState", {
        get: function () { return this.mdlCollection.PresentationState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ResourceMetadata", {
        get: function () { return this.mdlCollection.ResourceMetadata; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ResourceState", {
        get: function () { return this.mdlCollection.ResourceState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "ResourceConfig", {
        get: function () { return this.mdlCollection.ResourceConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelCollection.prototype, "UserData", {
        get: function () { return this.mdlCollection.UserData; },
        enumerable: true,
        configurable: true
    });
    ModelCollection.prototype.createModels = function () {
        var models = [
            BuildInfo_1.BuildInfo,
            GlobalSettings_1.GlobalSettings,
            AdBreakInfo_1.AdBreakInfo,
            AdItem_1.AdItem,
            AdPlaybackState_1.AdPlaybackState,
            ContentChapterInfo_1.ContentChapterInfo,
            ContentMetadata_1.ContentMetadata,
            ContentPlaybackState_1.ContentPlaybackState,
            DeliveryInfo_1.DeliveryInfo,
            DomElementCollection_1.DomElementCollection,
            GlobalAdData_1.GlobalAdData,
            LiveSegmentData_1.LiveSegmentData,
            PlaybackConfig_1.PlaybackConfig,
            PlayerOptions_1.PlayerOptions,
            PresentationState_1.PresentationState,
            ResourceMetadata_1.ResourceMetadata,
            ResourceState_1.ResourceState,
            ResourceConfig_1.ResourceConfig,
            UserData_1.UserData,
        ], i = models.length;
        while (i--) {
            var c = models[i], n = c.modelName, cfg = index_1.config[this.classToCfgName(n)];
            this.mdlCollection[n] = new c(cfg);
        }
    };
    ModelCollection.prototype.classToCfgName = function (str) {
        return (str.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
            return "_" + y.toLowerCase();
        }).replace(/^_/, "")) + '_config';
    };
    return ModelCollection;
}());
exports.ModelCollection = ModelCollection;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Transformer.js":
/*!*******************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Transformer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Transformer = (function () {
    function Transformer() {
    }
    Transformer.clampValue = function (val, min, max) {
        if (typeof val !== "number") {
            return null;
        }
        return Math.max(min, Math.min(val, max));
    };
    Transformer.lowerCase = function (val) {
        return typeof val === "string" ? val.toLowerCase() : val;
    };
    Transformer.strToNum = function (val) {
        if (typeof val === 'number') {
            return val;
        }
        if (typeof val === 'string') {
            var pf = parseFloat(val);
            return isNaN(pf) ? val : pf;
        }
        return val;
    };
    return Transformer;
}());
exports.Transformer = Transformer;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Validator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator = (function () {
    function Validator() {
    }
    Validator.checkType = function (val, type) {
        return val === null ? false : typeof val === type;
    };
    Validator.notEmpty = function (obj) {
        return !(obj === null || obj === undefined ||
            (Array.isArray(obj) && obj.length === 0) ||
            "object" === typeof obj && Object.keys(obj).length === 0 ||
            "string" === typeof obj && obj === '');
    };
    Validator.isArray = function (obj) {
        return Array.isArray(obj);
    };
    Validator.isTypedArray = function (obj, type) {
        if (this.isArray(obj) && this.notEmpty(obj)) {
            var i = obj.length;
            while (i--) {
                if (typeof obj[i] !== type) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    Validator.isType = function (value, type) {
        return value instanceof type;
    };
    Validator.isPositiveNumber = function (value) {
        return typeof value === 'number' && value >= 0;
    };
    return Validator;
}());
exports.Validator = Validator;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
var AdBreakType_1 = __webpack_require__(/*! ../enum/AdBreakType */ "./node_modules/cv-model/dist/src/enum/AdBreakType.js");
exports.ad_break_info_config = {
    adBreakDuration: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    adBreakPosition: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    adBreakType: {
        type: 'string',
        defaultValue: null,
        setterTransformer: function (val) {
            return (val === AdBreakType_1.AdBreakType.MID || val === AdBreakType_1.AdBreakType.POST || val === AdBreakType_1.AdBreakType.PRE)
                ? val : null;
        }
    },
    adServerName: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/ad_item_config.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/ad_item_config.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ad_item_config = {
    adDuration: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    adTitle: {
        type: 'string',
        defaultValue: null
    },
    adId: {
        type: 'string',
        defaultValue: null
    },
    adPosition: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    adAssetUrl: {
        type: 'string',
        defaultValue: null
    },
    adClickThruUrl: {
        type: 'string',
        defaultValue: null
    },
    isVpaid: {
        type: 'boolean',
        defaultValue: false,
        setterTransformer: function (val) {
            return typeof val !== 'boolean' ? false : val;
        }
    },
    wrapperAdId: {
        type: 'string',
        defaultValue: null
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/ad_playback_state_config.js":
/*!************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/ad_playback_state_config.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ad_playback_state_config = {
    playheadTime: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    playbackStarted: {
        type: 'boolean',
        defaultValue: false
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/build_info_config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/build_info_config.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.build_info_config = {
    libPath: {
        type: 'string',
        defaultValue: null
    },
    env: {
        type: 'string',
        defaultValue: null
    },
    hostname: {
        type: 'string',
        defaultValue: null
    },
    playerName: {
        type: 'string',
        defaultValue: null
    },
    playerVersion: {
        type: 'string',
        defaultValue: null
    },
    streamingLibVersion: {
        type: 'string',
        defaultValue: null
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/content_chapter_info_config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/content_chapter_info_config.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content_chapter_info_config = {
    currentIndex: {
        type: 'number',
        defaultValue: -1,
        setterTransformer: function (val) {
            return typeof val !== 'number' ? -1 : val;
        }
    },
    startTime: {
        type: 'number',
        defaultValue: -1
    },
    length: {
        type: 'number',
        defaultValue: -1
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/content_metadata_config.js":
/*!***********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/content_metadata_config.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content_metadata_config = {
    assetUrl: {
        type: 'string',
        defaultValue: null
    },
    category: {
        type: 'string',
        defaultValue: null
    },
    chapterStartTimes: {
        type: 'object',
        defaultValue: null,
        setterTransformer: function (val) {
            return !Array.isArray(val) ? null : val;
        }
    },
    closedCaptionPath: {
        type: 'string',
        defaultValue: null
    },
    cms: {
        type: 'string',
        defaultValue: null
    },
    cmsRefGuid: {
        type: 'string',
        defaultValue: null
    },
    contextMetadata: {
        type: 'object',
        defaultValue: null
    },
    dfpMediaId: {
        type: 'string',
        defaultValue: null
    },
    episodeAbstract: {
        type: 'string',
        defaultValue: null
    },
    episodeFlag: {
        type: 'boolean',
        defaultValue: false
    },
    episodeNumber: {
        type: 'number',
        defaultValue: null
    },
    excludeNielsenTracking: {
        type: 'boolean',
        defaultValue: false
    },
    fileType: {
        type: 'string',
        defaultValue: null
    },
    is360: {
        type: 'boolean',
        defaultValue: false
    },
    isAffiliateFeed: {
        type: 'boolean',
        defaultValue: false
    },
    isEmbeddable: {
        type: 'boolean',
        defaultValue: false
    },
    isPaidContent: {
        type: 'boolean',
        defaultValue: false
    },
    overrideAssetURL: {
        type: 'string',
        defaultValue: null
    },
    seasonNumber: {
        type: 'number',
        defaultValue: null
    },
    seriesTitle: {
        type: 'string',
        defaultValue: null
    },
    showPreroll: {
        type: 'boolean',
        defaultValue: false
    },
    useWatermark: {
        type: 'boolean',
        defaultValue: false
    },
    videoTitle: {
        type: 'string',
        defaultValue: null
    },
    mediaId: {
        type: 'string',
        defaultValue: null
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/content_playback_state_config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/content_playback_state_config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.content_playback_state_config = {
    abrInfo: {
        type: 'object',
        defaultValue: null,
    },
    averageDroppedFps: {
        type: 'number',
        defaultValue: NaN,
    },
    bufferLength: {
        type: 'number',
        defaultValue: 0,
    },
    cdn: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    },
    contentSegment: {
        type: 'number',
        defaultValue: NaN,
    },
    maxBandwidth: {
        type: 'number',
        defaultValue: NaN,
    },
    playheadTime: {
        type: 'number',
        defaultValue: NaN,
    },
    duration: {
        type: 'number',
        defaultValue: NaN,
    },
    playbackBitrate: {
        type: 'number',
        defaultValue: NaN,
    },
    playbackFramerate: {
        type: 'number',
        defaultValue: NaN,
    },
    playbackStarted: {
        type: 'boolean',
        defaultValue: false,
    },
    isPlayingLive: {
        type: 'boolean',
        defaultValue: false,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/delivery_info_config.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/delivery_info_config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.delivery_info_config = {
    isMultiCDN: {
        type: 'boolean',
        defaultValue: false,
    },
    drmType: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    },
    isP2pAvailable: {
        type: 'boolean',
        defaultValue: false,
    },
    isSslRequired: {
        type: 'boolean',
        defaultValue: false,
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dom_element_collection_config = {
    video: {
        type: 'object',
        defaultValue: null,
    },
    videoContainer: {
        type: 'object',
        defaultValue: null,
    },
    ccContainer: {
        type: 'object',
        defaultValue: null,
    },
    adContainer: {
        type: 'object',
        defaultValue: null,
    },
    uiContainer: {
        type: 'object',
        defaultValue: null,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/global_ad_data_config.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/global_ad_data_config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.global_ad_data_config = {
    adCallUrl: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    },
    adParams: {
        type: 'object',
        defaultValue: null,
    },
    isCustomClickTrackingUsed: {
        type: 'boolean',
        defaultValue: false,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/global_settings_config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/global_settings_config.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.global_settings_config = {
    allowConcurrentPlayback: {
        type: 'boolean',
        defaultValue: true,
    },
    cms: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    },
    partner: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty
    },
    useIma: {
        type: 'boolean',
        defaultValue: false,
    },
    pageProvidesTealium: {
        type: 'boolean',
        defaultValue: false,
    },
    uvpc: {
        type: 'object',
        defaultValue: null,
    }
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var build_info_config_1 = __webpack_require__(/*! ./build_info_config */ "./node_modules/cv-model/dist/src/cfg/build_info_config.js");
var global_settings_config_1 = __webpack_require__(/*! ./global_settings_config */ "./node_modules/cv-model/dist/src/cfg/global_settings_config.js");
var ad_break_info_config_1 = __webpack_require__(/*! ./ad_break_info_config */ "./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js");
var ad_item_config_1 = __webpack_require__(/*! ./ad_item_config */ "./node_modules/cv-model/dist/src/cfg/ad_item_config.js");
var ad_playback_state_config_1 = __webpack_require__(/*! ./ad_playback_state_config */ "./node_modules/cv-model/dist/src/cfg/ad_playback_state_config.js");
var content_chapter_info_config_1 = __webpack_require__(/*! ./content_chapter_info_config */ "./node_modules/cv-model/dist/src/cfg/content_chapter_info_config.js");
var content_metadata_config_1 = __webpack_require__(/*! ./content_metadata_config */ "./node_modules/cv-model/dist/src/cfg/content_metadata_config.js");
var content_playback_state_config_1 = __webpack_require__(/*! ./content_playback_state_config */ "./node_modules/cv-model/dist/src/cfg/content_playback_state_config.js");
var delivery_info_config_1 = __webpack_require__(/*! ./delivery_info_config */ "./node_modules/cv-model/dist/src/cfg/delivery_info_config.js");
var dom_element_collection_config_1 = __webpack_require__(/*! ./dom_element_collection_config */ "./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js");
var global_ad_data_config_1 = __webpack_require__(/*! ./global_ad_data_config */ "./node_modules/cv-model/dist/src/cfg/global_ad_data_config.js");
var playback_config_config_1 = __webpack_require__(/*! ./playback_config_config */ "./node_modules/cv-model/dist/src/cfg/playback_config_config.js");
var player_options_config_1 = __webpack_require__(/*! ./player_options_config */ "./node_modules/cv-model/dist/src/cfg/player_options_config.js");
var presentation_state_config_1 = __webpack_require__(/*! ./presentation_state_config */ "./node_modules/cv-model/dist/src/cfg/presentation_state_config.js");
var resource_metadata_config_1 = __webpack_require__(/*! ./resource_metadata_config */ "./node_modules/cv-model/dist/src/cfg/resource_metadata_config.js");
var resource_state_config_1 = __webpack_require__(/*! ./resource_state_config */ "./node_modules/cv-model/dist/src/cfg/resource_state_config.js");
var user_data_config_1 = __webpack_require__(/*! ./user_data_config */ "./node_modules/cv-model/dist/src/cfg/user_data_config.js");
var config = {
    build_info_config: build_info_config_1.build_info_config,
    global_settings_config: global_settings_config_1.global_settings_config,
    ad_break_info_config: ad_break_info_config_1.ad_break_info_config,
    ad_item_config: ad_item_config_1.ad_item_config,
    ad_playback_state_config: ad_playback_state_config_1.ad_playback_state_config,
    content_chapter_info_config: content_chapter_info_config_1.content_chapter_info_config,
    content_metadata_config: content_metadata_config_1.content_metadata_config,
    content_playback_state_config: content_playback_state_config_1.content_playback_state_config,
    delivery_info_config: delivery_info_config_1.delivery_info_config,
    dom_element_collection_config: dom_element_collection_config_1.dom_element_collection_config,
    global_ad_data_config: global_ad_data_config_1.global_ad_data_config,
    playback_config_config: playback_config_config_1.playback_config_config,
    player_options_config: player_options_config_1.player_options_config,
    presentation_state_config: presentation_state_config_1.presentation_state_config,
    resource_metadata_config: resource_metadata_config_1.resource_metadata_config,
    resource_state_config: resource_state_config_1.resource_state_config,
    user_data_config: user_data_config_1.user_data_config
};
exports.config = config;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/playback_config_config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/playback_config_config.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playback_config_config = {
    liveSyncDurationCount: {
        type: 'number',
        defaultValue: 3,
    },
    startTime: {
        type: 'number',
        defaultValue: 0,
    },
    drmParams: {
        type: 'object',
        defaultValue: null,
    },
    maxBitrate: {
        type: 'number',
        defaultValue: NaN,
    },
    minBitrate: {
        type: 'number',
        defaultValue: NaN,
    },
    startBitrate: {
        type: 'number',
        defaultValue: NaN,
    },
    capQualityToPlayerSize: {
        type: 'boolean',
        defaultValue: true,
    },
    enableFastSwitchABR: {
        type: 'boolean',
        defaultValue: true,
    },
    id3HandlingEnabled: {
        type: 'boolean',
        defaultValue: false,
    },
    errorRecovery: {
        type: 'object',
        defaultValue: null,
    },
    useDynamicSwitching: {
        type: 'boolean',
        defaultValue: true,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/player_options_config.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/player_options_config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.player_options_config = {
    enableMutedAutoplay: {
        type: 'boolean',
        defaultValue: false,
    },
    enableReplay: {
        type: 'boolean',
        defaultValue: false,
    },
    enableUnmutedAutoplay: {
        type: 'boolean',
        defaultValue: false,
    },
    id3OwnerIds: {
        type: 'object',
        defaultValue: null,
        validator: function (value) {
            return Validator_1.Validator.isTypedArray(value, 'string');
        }
    },
    isEmbedded: {
        type: 'boolean',
        defaultValue: false,
    },
    playsInline: {
        type: 'boolean',
        defaultValue: false,
    },
    uvpcTrackingOverrides: {
        type: 'object',
        defaultValue: null,
    },
    uiConfig: {
        type: 'object',
        defaultValue: null,
    },
    useNativeControls: {
        type: 'boolean',
        defaultValue: false,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/presentation_state_config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/presentation_state_config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Transformer_1 = __webpack_require__(/*! ../Transformer */ "./node_modules/cv-model/dist/src/Transformer.js");
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.presentation_state_config = {
    playheadTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator_1.Validator.isPositiveNumber,
    },
    playbackStarted: {
        type: 'boolean',
        defaultValue: false,
    },
    volume: {
        type: 'number',
        defaultValue: 0.35,
        setterTransformer: function (value) {
            return Transformer_1.Transformer.clampValue(value, 0, 1);
        }
    },
    isMuted: {
        type: 'boolean',
        defaultValue: false,
    },
    isFullscreen: {
        type: 'boolean',
        defaultValue: false,
    },
    isDynamicSwitching: {
        type: 'boolean',
        defaultValue: false,
    },
    isAutoplay: {
        type: 'boolean',
        defaultValue: false,
    },
    isMuteAtPlayStart: {
        type: 'boolean',
        defaultValue: false,
    },
    isCurrentVideoAd: {
        type: 'boolean',
        defaultValue: false,
    },
    userHasUnmuted: {
        type: 'boolean',
        defaultValue: false,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/resource_metadata_config.js":
/*!************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/resource_metadata_config.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.resource_metadata_config = {
    absoluteStreamTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator_1.Validator.isPositiveNumber,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/resource_state_config.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/resource_state_config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlaybackState_1 = __webpack_require__(/*! ../enum/PlaybackState */ "./node_modules/cv-model/dist/src/enum/PlaybackState.js");
exports.resource_state_config = {
    playbackState: {
        type: 'number',
        defaultValue: null,
        validator: function (value) {
            return typeof value === 'number' && PlaybackState_1.PlaybackState[value] !== undefined;
        }
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/user_data_config.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/user_data_config.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
exports.user_data_config = {
    playedChapterTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator_1.Validator.isPositiveNumber,
    },
    podsToSkip: {
        type: 'object',
        defaultValue: null,
        validator: function (value) {
            return Validator_1.Validator.isTypedArray(value, 'number');
        },
    },
    resumeContentTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator_1.Validator.isPositiveNumber,
    },
    resumeEpochTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator_1.Validator.isPositiveNumber,
    },
    resumePid: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userConnectionType: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userCountry: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userId: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userIsp: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userPpid: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
    userStatus: {
        type: 'string',
        defaultValue: null,
        validator: Validator_1.Validator.notEmpty,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/AdBreakType.js":
/*!************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/AdBreakType.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AdBreakType;
(function (AdBreakType) {
    AdBreakType["PRE"] = "PRE";
    AdBreakType["MID"] = "MID";
    AdBreakType["POST"] = "POST";
})(AdBreakType = exports.AdBreakType || (exports.AdBreakType = {}));


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/ModelName.js":
/*!**********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/ModelName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModelName;
(function (ModelName) {
    ModelName["AdBreakInfo"] = "AdBreakInfo";
    ModelName["AdItem"] = "AdItem";
    ModelName["AdPlaybackState"] = "AdPlaybackState";
    ModelName["BuildInfo"] = "BuildInfo";
    ModelName["ContentChapterInfo"] = "ContentChapterInfo";
    ModelName["ContentMetadata"] = "ContentMetadata";
    ModelName["ContentPlaybackState"] = "ContentPlaybackState";
    ModelName["DeliveryInfo"] = "DeliveryInfo";
    ModelName["DomElementCollection"] = "DomElementCollection";
    ModelName["GlobalAdData"] = "GlobalAdData";
    ModelName["GlobalSettings"] = "GlobalSettings";
    ModelName["PlaybackConfig"] = "PlaybackConfig";
    ModelName["PlayerOptions"] = "PlayerOptions";
    ModelName["PresentationState"] = "PresentationState";
    ModelName["ResourceMetadata"] = "ResourceMetadata";
    ModelName["ResourceState"] = "ResourceState";
    ModelName["UserData"] = "UserData";
})(ModelName = exports.ModelName || (exports.ModelName = {}));


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/PlaybackState.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/PlaybackState.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlaybackState;
(function (PlaybackState) {
    PlaybackState[PlaybackState["EMPTY"] = -2] = "EMPTY";
    PlaybackState[PlaybackState["LOADING"] = -1] = "LOADING";
    PlaybackState[PlaybackState["STOPPED"] = 0] = "STOPPED";
    PlaybackState[PlaybackState["PLAYING"] = 1] = "PLAYING";
    PlaybackState[PlaybackState["PAUSED"] = 2] = "PAUSED";
    PlaybackState[PlaybackState["BUFFERING"] = 3] = "BUFFERING";
})(PlaybackState = exports.PlaybackState || (exports.PlaybackState = {}));


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/PlayerEvents.js":
/*!*************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/PlayerEvents.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerEvents;
(function (PlayerEvents) {
    PlayerEvents["AD_BREAK_COMPLETE"] = "adBreakComplete";
    PlayerEvents["AD_BREAK_START"] = "adBreakStart";
    PlayerEvents["AD_CLICK"] = "adClick";
    PlayerEvents["AD_COMPLETE"] = "adComplete";
    PlayerEvents["AD_ERROR"] = "adError";
    PlayerEvents["AD_FIRST_QUARTILE"] = "adFirstQuartile";
    PlayerEvents["AD_LOADED"] = "adLoaded";
    PlayerEvents["AD_MID_POINT"] = "adMidPoint";
    PlayerEvents["AD_REQUEST"] = "adRequest";
    PlayerEvents["AD_RESPONSE"] = "adResponse";
    PlayerEvents["AD_THIRD_QUARTILE"] = "adThirdQuartile";
    PlayerEvents["AD_SKIP"] = "adSkip";
    PlayerEvents["AD_START"] = "adStart";
    PlayerEvents["BITRATE_CHANGE"] = "bitrateChange";
    PlayerEvents["BUFFER_COMPLETE"] = "bufferComplete";
    PlayerEvents["BUFFER_START"] = "bufferStart";
    PlayerEvents["CHAPTER_COMPLETE"] = "chapterComplete";
    PlayerEvents["CHAPTER_SKIP"] = "chapterSkip";
    PlayerEvents["CHAPTER_START"] = "chapterStart";
    PlayerEvents["CONTENT_DATA_LOADED"] = "contentDataLoaded";
    PlayerEvents["CONTENT_END"] = "contentEnd";
    PlayerEvents["CONTENT_PAUSE"] = "contentPause";
    PlayerEvents["CONTENT_PLAYING"] = "contentPlaying";
    PlayerEvents["CONTENT_START"] = "contentStart";
    PlayerEvents["CONTROL_MUTE"] = "controlMute";
    PlayerEvents["CONTROL_UNMUTE"] = "controlUnmute";
    PlayerEvents["CONTROL_VOLUME_CHANGE"] = "controlVolumeChange";
    PlayerEvents["LIVE_SEGMENT_START"] = "onLiveSegmentStart";
    PlayerEvents["LIVE_SEGMENT_END"] = "onLiveSegmentEnd";
    PlayerEvents["PLAYER_LOADED"] = "playerLoaded";
    PlayerEvents["PLAYER_START_ERROR"] = "playerStartError";
    PlayerEvents["RESOURCE_END"] = "resourceEnd";
    PlayerEvents["RESOURCE_START"] = "resourceStart";
    PlayerEvents["SEEK_COMPLETE"] = "seekComplete";
    PlayerEvents["SEEK_START"] = "seekStart";
    PlayerEvents["TRACK_APP_ACTION"] = "trackAppAction";
    PlayerEvents["TRACK_APP_STATE"] = "trackAppState";
    PlayerEvents["TRACKING_CONFIG_READY"] = "trackingConfigReady";
    PlayerEvents["VIDEO_CUEPOINT"] = "videoCuepoint";
    PlayerEvents["VIDEO_PLAYBACK_ERROR"] = "videoPlaybackError";
    PlayerEvents["VIDEO_PROGRESS"] = "videoProgress";
    PlayerEvents["VIDEO_START_ERROR"] = "videoStartError";
})(PlayerEvents = exports.PlayerEvents || (exports.PlayerEvents = {}));


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/StreamType.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/StreamType.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StreamType;
(function (StreamType) {
    StreamType["VOD"] = "VOD";
    StreamType["LIVE"] = "LIVE";
    StreamType["DVR"] = "DVR";
    StreamType["ARCHIVE"] = "ARCHIVE";
})(StreamType = exports.StreamType || (exports.StreamType = {}));


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js":
/*!*************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdBreakInfo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdBreakInfo = (function () {
    function AdBreakInfo(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(AdBreakInfo, "modelName", {
        get: function () { return 'AdBreakInfo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdBreakInfo.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    AdBreakInfo.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(AdBreakInfo.prototype, "adBreakDuration", {
        get: function () { return this.model.adBreakDuration; },
        set: function (value) { this.model.adBreakDuration = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdBreakInfo.prototype, "adBreakPosition", {
        get: function () { return this.model.adBreakPosition; },
        set: function (value) { this.model.adBreakPosition = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdBreakInfo.prototype, "adBreakType", {
        get: function () { return this.model.adBreakType; },
        set: function (value) { this.model.adBreakType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdBreakInfo.prototype, "adServerName", {
        get: function () { return this.model.adServerName; },
        set: function (value) { this.model.adServerName = value; },
        enumerable: true,
        configurable: true
    });
    return AdBreakInfo;
}());
exports.AdBreakInfo = AdBreakInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdItem.js":
/*!********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdItem.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdItem = (function () {
    function AdItem(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(AdItem, "modelName", {
        get: function () { return 'AdItem'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    AdItem.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(AdItem.prototype, "adDuration", {
        get: function () { return this.model.adDuration; },
        set: function (value) { this.model.adDuration = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "adTitle", {
        get: function () { return this.model.adTitle; },
        set: function (value) { this.model.adTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "adId", {
        get: function () { return this.model.adId; },
        set: function (value) { this.model.adId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "adPosition", {
        get: function () { return this.model.adPosition; },
        set: function (value) { this.model.adPosition = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "adAssetUrl", {
        get: function () { return this.model.adAssetUrl; },
        set: function (value) { this.model.adAssetUrl = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "adClickThruUrl", {
        get: function () { return this.model.adClickThruUrl; },
        set: function (value) { this.model.adClickThruUrl = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "isVpaid", {
        get: function () { return this.model.isVpaid; },
        set: function (value) { this.model.isVpaid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdItem.prototype, "wrapperAdId", {
        get: function () { return this.model.wrapperAdId; },
        set: function (value) { this.model.wrapperAdId = value; },
        enumerable: true,
        configurable: true
    });
    return AdItem;
}());
exports.AdItem = AdItem;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdPlaybackState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdPlaybackState = (function () {
    function AdPlaybackState(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(AdPlaybackState, "modelName", {
        get: function () { return 'AdPlaybackState'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    AdPlaybackState.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(AdPlaybackState.prototype, "playheadTime", {
        get: function () { return this.model.playheadTime; },
        set: function (value) { this.model.playheadTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "playbackStarted", {
        get: function () { return this.model.playbackStarted; },
        set: function (value) { this.model.playbackStarted = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "volume", {
        get: function () { return this.model.volume; },
        set: function (value) { this.model.volume = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isMuted", {
        get: function () { return this.model.isMuted; },
        set: function (value) { this.model.isMuted = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isFullscreen", {
        get: function () { return this.model.isFullscreen; },
        set: function (value) { this.model.isFullscreen = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isDynamicSwitching", {
        get: function () { return this.model.isDynamicSwitching; },
        set: function (value) { this.model.isDynamicSwitching = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isAutoplay", {
        get: function () { return this.model.isAutoplay; },
        set: function (value) { this.model.isAutoplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isMuteAtPlayStart", {
        get: function () { return this.model.isMuteAtPlayStart; },
        set: function (value) { this.model.isMuteAtPlayStart = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "isCurrentVideoAd", {
        get: function () { return this.model.isCurrentVideoAd; },
        set: function (value) { this.model.isCurrentVideoAd = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdPlaybackState.prototype, "userHasUnmuted", {
        get: function () { return this.model.userHasUnmuted; },
        set: function (value) { this.model.userHasUnmuted = value; },
        enumerable: true,
        configurable: true
    });
    return AdPlaybackState;
}());
exports.AdPlaybackState = AdPlaybackState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/BuildInfo.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/BuildInfo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var BuildInfo = (function () {
    function BuildInfo(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(BuildInfo, "modelName", {
        get: function () { return 'BuildInfo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    BuildInfo.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(BuildInfo.prototype, "libPath", {
        get: function () { return this.model.libPath; },
        set: function (value) { this.model.libPath = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "env", {
        get: function () { return this.model.env; },
        set: function (value) { this.model.env = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "hostname", {
        get: function () { return this.model.hostname; },
        set: function (value) { this.model.hostname = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "playerName", {
        get: function () { return this.model.playerName; },
        set: function (value) { this.model.playerName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "playerVersion", {
        get: function () { return this.model.playerVersion; },
        set: function (value) { this.model.playerVersion = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "streamingLibVersion", {
        get: function () { return this.model.streamingLibVersion; },
        set: function (value) { this.model.streamingLibVersion = value; },
        enumerable: true,
        configurable: true
    });
    return BuildInfo;
}());
exports.BuildInfo = BuildInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentChapterInfo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentChapterInfo = (function () {
    function ContentChapterInfo(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ContentChapterInfo, "modelName", {
        get: function () { return 'ContentChapterInfo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentChapterInfo.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ContentChapterInfo.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ContentChapterInfo.prototype, "currentIndex", {
        get: function () { return this.model.currentIndex; },
        set: function (value) { this.model.currentIndex = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentChapterInfo.prototype, "startTime", {
        get: function () { return this.model.startTime; },
        set: function (value) { this.model.startTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentChapterInfo.prototype, "length", {
        get: function () { return this.model.length; },
        set: function (value) { this.model.length = value; },
        enumerable: true,
        configurable: true
    });
    return ContentChapterInfo;
}());
exports.ContentChapterInfo = ContentChapterInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentMetadata.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentMetadata.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentMetadata = (function () {
    function ContentMetadata(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ContentMetadata, "modelName", {
        get: function () { return 'ContentMetadata'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ContentMetadata.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ContentMetadata.prototype, "assetUrl", {
        get: function () { return this.model.assetUrl; },
        set: function (value) { this.model.assetUrl = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "category", {
        get: function () { return this.model.category; },
        set: function (value) { this.model.category = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "chapterStartTimes", {
        get: function () { return this.model.chapterStartTimes; },
        set: function (value) { this.model.chapterStartTimes = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "closedCaptionPath", {
        get: function () { return this.model.closedCaptionPath; },
        set: function (value) { this.model.closedCaptionPath = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "cms", {
        get: function () { return this.model.cms; },
        set: function (value) { this.model.cms = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "cmsRefGuid", {
        get: function () { return this.model.cmsRefGuid; },
        set: function (value) { this.model.cmsRefGuid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "contextMetadata", {
        get: function () { return this.model.contextMetadata; },
        set: function (value) { this.model.contextMetadata = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "dfpMediaId", {
        get: function () { return this.model.dfpMediaId; },
        set: function (value) { this.model.dfpMediaId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "episodeAbstract", {
        get: function () { return this.model.episodeAbstract; },
        set: function (value) { this.model.episodeAbstract = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "episodeFlag", {
        get: function () { return this.model.episodeFlag; },
        set: function (value) { this.model.episodeFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "episodeNumber", {
        get: function () { return this.model.episodeNumber; },
        set: function (value) { this.model.episodeNumber = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "excludeNielsenTracking", {
        get: function () { return this.model.excludeNielsenTracking; },
        set: function (value) { this.model.excludeNielsenTracking = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "fileType", {
        get: function () { return this.model.fileType; },
        set: function (value) { this.model.fileType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "is360", {
        get: function () { return this.model.is360; },
        set: function (value) { this.model.is360 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "isAffiliateFeed", {
        get: function () { return this.model.isAffiliateFeed; },
        set: function (value) { this.model.isAffiliateFeed = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "isEmbeddable", {
        get: function () { return this.model.isEmbeddable; },
        set: function (value) { this.model.isEmbeddable = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "isPaidContent", {
        get: function () { return this.model.isPaidContent; },
        set: function (value) { this.model.isPaidContent = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "overrideAssetURL", {
        get: function () { return this.model.overrideAssetURL; },
        set: function (value) { this.model.overrideAssetURL = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "seasonNumber", {
        get: function () { return this.model.seasonNumber; },
        set: function (value) { this.model.seasonNumber = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "seriesTitle", {
        get: function () { return this.model.seriesTitle; },
        set: function (value) { this.model.seriesTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "showPreroll", {
        get: function () { return this.model.showPreroll; },
        set: function (value) { this.model.showPreroll = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "useWatermark", {
        get: function () { return this.model.useWatermark; },
        set: function (value) { this.model.useWatermark = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "videoTitle", {
        get: function () { return this.model.videoTitle; },
        set: function (value) { this.model.videoTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentMetadata.prototype, "mediaId", {
        get: function () { return this.model.mediaId; },
        set: function (value) { this.model.mediaId = value; },
        enumerable: true,
        configurable: true
    });
    return ContentMetadata;
}());
exports.ContentMetadata = ContentMetadata;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentPlaybackState.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentPlaybackState = (function () {
    function ContentPlaybackState(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ContentPlaybackState, "modelName", {
        get: function () { return 'ContentPlaybackState'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ContentPlaybackState.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ContentPlaybackState.prototype, "abrInfo", {
        get: function () { return this.model.abrInfo; },
        set: function (value) { this.model.abrInfo = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "averageDroppedFps", {
        get: function () { return this.model.averageDroppedFps; },
        set: function (value) { this.model.averageDroppedFps = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "bufferLength", {
        get: function () { return this.model.bufferLength; },
        set: function (value) { this.model.bufferLength = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "cdn", {
        get: function () { return this.model.cdn; },
        set: function (value) { this.model.cdn = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "contentSegment", {
        get: function () { return this.model.contentSegment; },
        set: function (value) { this.model.contentSegment = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "maxBandwidth", {
        get: function () { return this.model.maxBandwidth; },
        set: function (value) { this.model.maxBandwidth = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "playheadTime", {
        get: function () { return this.model.playheadTime; },
        set: function (value) { this.model.playheadTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "duration", {
        get: function () { return this.model.duration; },
        set: function (value) { this.model.duration = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "playbackBitrate", {
        get: function () { return this.model.playbackBitrate; },
        set: function (value) { this.model.playbackBitrate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "playbackFramerate", {
        get: function () { return this.model.playbackFramerate; },
        set: function (value) { this.model.playbackFramerate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "playbackStarted", {
        get: function () { return this.model.playbackStarted; },
        set: function (value) { this.model.playbackStarted = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentPlaybackState.prototype, "isPlayingLive", {
        get: function () { return this.model.isPlayingLive; },
        set: function (value) { this.model.isPlayingLive = value; },
        enumerable: true,
        configurable: true
    });
    return ContentPlaybackState;
}());
exports.ContentPlaybackState = ContentPlaybackState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/DeliveryInfo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var DeliveryInfo = (function () {
    function DeliveryInfo(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(DeliveryInfo, "modelName", {
        get: function () { return 'DeliveryInfo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryInfo.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    DeliveryInfo.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(DeliveryInfo.prototype, "isMultiCDN", {
        get: function () { return this.model.isMultiCDN; },
        set: function (value) { this.model.isMultiCDN = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryInfo.prototype, "drmType", {
        get: function () { return this.model.drmType; },
        set: function (value) { this.model.drmType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryInfo.prototype, "isP2pAvailable", {
        get: function () { return this.model.isP2pAvailable; },
        set: function (value) { this.model.isP2pAvailable = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryInfo.prototype, "isSslRequired", {
        get: function () { return this.model.isSslRequired; },
        set: function (value) { this.model.isSslRequired = value; },
        enumerable: true,
        configurable: true
    });
    return DeliveryInfo;
}());
exports.DeliveryInfo = DeliveryInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/DomElementCollection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/DomElementCollection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var DomElementCollection = (function () {
    function DomElementCollection(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(DomElementCollection, "modelName", {
        get: function () { return 'DomElementCollection'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElementCollection.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    DomElementCollection.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(DomElementCollection.prototype, "video", {
        get: function () { return this.model.video; },
        set: function (value) { this.model.video = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElementCollection.prototype, "videoContainer", {
        get: function () { return this.model.videoContainer; },
        set: function (value) { this.model.videoContainer = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElementCollection.prototype, "ccContainer", {
        get: function () { return this.model.ccContainer; },
        set: function (value) { this.model.ccContainer = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElementCollection.prototype, "adContainer", {
        get: function () { return this.model.adContainer; },
        set: function (value) { this.model.adContainer = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElementCollection.prototype, "uiContainer", {
        get: function () { return this.model.uiContainer; },
        set: function (value) { this.model.uiContainer = value; },
        enumerable: true,
        configurable: true
    });
    return DomElementCollection;
}());
exports.DomElementCollection = DomElementCollection;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/GlobalAdData.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/GlobalAdData.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var GlobalAdData = (function () {
    function GlobalAdData(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(GlobalAdData, "modelName", {
        get: function () { return 'GlobalAdData'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalAdData.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    GlobalAdData.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(GlobalAdData.prototype, "adCallUrl", {
        get: function () { return this.model.adCallUrl; },
        set: function (value) { this.model.adCallUrl = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalAdData.prototype, "adParams", {
        get: function () { return this.model.adParams; },
        set: function (value) { this.model.adParams = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalAdData.prototype, "isCustomClickTrackingUsed", {
        get: function () { return this.model.isCustomClickTrackingUsed; },
        set: function (value) { this.model.isCustomClickTrackingUsed = value; },
        enumerable: true,
        configurable: true
    });
    return GlobalAdData;
}());
exports.GlobalAdData = GlobalAdData;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/GlobalSettings.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/GlobalSettings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var GlobalSettings = (function () {
    function GlobalSettings(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(GlobalSettings, "modelName", {
        get: function () { return 'GlobalSettings'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    GlobalSettings.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(GlobalSettings.prototype, "allowConcurrentPlayback", {
        get: function () { return this.model.allowConcurrentPlayback; },
        set: function (value) { this.model.allowConcurrentPlayback = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "cms", {
        get: function () { return this.model.cms; },
        set: function (value) { this.model.cms = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "partner", {
        get: function () { return this.model.partner; },
        set: function (value) { this.model.partner = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "useIma", {
        get: function () { return this.model.useIma; },
        set: function (value) { this.model.useIma = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "pageProvidesTealium", {
        get: function () { return this.model.pageProvidesTealium; },
        set: function (value) { this.model.pageProvidesTealium = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalSettings.prototype, "uvpc", {
        get: function () { return this.model.uvpc; },
        set: function (value) { this.model.uvpc = value; },
        enumerable: true,
        configurable: true
    });
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/LiveSegmentData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/LiveSegmentData.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var LiveSegmentData = (function () {
    function LiveSegmentData(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(LiveSegmentData, "modelName", {
        get: function () { return 'LiveSegmentData'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    LiveSegmentData.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(LiveSegmentData.prototype, "publisherBrand", {
        get: function () { return this.model.publisherBrand; },
        set: function (value) { this.model.publisherBrand = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "programTitle", {
        get: function () { return this.model.programTitle; },
        set: function (value) { this.model.programTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "episodeTitle", {
        get: function () { return this.model.episodeTitle; },
        set: function (value) { this.model.episodeTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "seasonNumber", {
        get: function () { return this.model.seasonNumber; },
        set: function (value) { this.model.seasonNumber = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "episodeNumber", {
        get: function () { return this.model.episodeNumber; },
        set: function (value) { this.model.episodeNumber = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "stationTitle", {
        get: function () { return this.model.stationTitle; },
        set: function (value) { this.model.stationTitle = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "clipLength", {
        get: function () { return this.model.clipLength; },
        set: function (value) { this.model.clipLength = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "contentGenre", {
        get: function () { return this.model.contentGenre; },
        set: function (value) { this.model.contentGenre = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "tmsGracenoteId", {
        get: function () { return this.model.tmsGracenoteId; },
        set: function (value) { this.model.tmsGracenoteId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "episodeId", {
        get: function () { return this.model.episodeId; },
        set: function (value) { this.model.episodeId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "adLoadFlag", {
        get: function () { return this.model.adLoadFlag; },
        set: function (value) { this.model.adLoadFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "fullEpisodeFlag", {
        get: function () { return this.model.fullEpisodeFlag; },
        set: function (value) { this.model.fullEpisodeFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "digitalAirDate", {
        get: function () { return this.model.digitalAirDate; },
        set: function (value) { this.model.digitalAirDate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveSegmentData.prototype, "tvAirDate", {
        get: function () { return this.model.tvAirDate; },
        set: function (value) { this.model.tvAirDate = value; },
        enumerable: true,
        configurable: true
    });
    return LiveSegmentData;
}());
exports.LiveSegmentData = LiveSegmentData;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PlaybackConfig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PlaybackConfig = (function () {
    function PlaybackConfig(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(PlaybackConfig, "modelName", {
        get: function () { return 'PlaybackConfig'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    PlaybackConfig.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(PlaybackConfig.prototype, "liveSyncDurationCount", {
        get: function () { return this.model.liveSyncDurationCount; },
        set: function (value) { this.model.liveSyncDurationCount = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "startTime", {
        get: function () { return this.model.startTime; },
        set: function (value) { this.model.startTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "drmParams", {
        get: function () { return this.model.drmParams; },
        set: function (value) { this.model.drmParams = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "maxBitrate", {
        get: function () { return this.model.maxBitrate; },
        set: function (value) { this.model.maxBitrate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "minBitrate", {
        get: function () { return this.model.minBitrate; },
        set: function (value) { this.model.minBitrate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "startBitrate", {
        get: function () { return this.model.startBitrate; },
        set: function (value) { this.model.startBitrate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "capQualityToPlayerSize", {
        get: function () { return this.model.capQualityToPlayerSize; },
        set: function (value) { this.model.capQualityToPlayerSize = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "enableFastSwitchABR", {
        get: function () { return this.model.enableFastSwitchABR; },
        set: function (value) { this.model.enableFastSwitchABR = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "id3HandlingEnabled", {
        get: function () { return this.model.id3HandlingEnabled; },
        set: function (value) { this.model.id3HandlingEnabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "errorRecovery", {
        get: function () { return this.model.errorRecovery; },
        set: function (value) { this.model.errorRecovery = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaybackConfig.prototype, "useDynamicSwitching", {
        get: function () { return this.model.useDynamicSwitching; },
        set: function (value) { this.model.useDynamicSwitching = value; },
        enumerable: true,
        configurable: true
    });
    return PlaybackConfig;
}());
exports.PlaybackConfig = PlaybackConfig;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PlayerOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PlayerOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PlayerOptions = (function () {
    function PlayerOptions(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(PlayerOptions, "modelName", {
        get: function () { return 'PlayerOptions'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    PlayerOptions.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(PlayerOptions.prototype, "enableMutedAutoplay", {
        get: function () { return this.model.enableMutedAutoplay; },
        set: function (value) { this.model.enableMutedAutoplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "enableNativeMobileAutoplay", {
        get: function () { return this.model.enableNativeMobileAutoplay; },
        set: function (value) { this.model.enableNativeMobileAutoplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "enableReplay", {
        get: function () { return this.model.enableReplay; },
        set: function (value) { this.model.enableReplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "enableUnmutedAutoplay", {
        get: function () { return this.model.enableUnmutedAutoplay; },
        set: function (value) { this.model.enableUnmutedAutoplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "id3OwnerIds", {
        get: function () { return this.model.id3OwnerIds; },
        set: function (value) { this.model.id3OwnerIds = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "isEmbedded", {
        get: function () { return this.model.isEmbedded; },
        set: function (value) { this.model.isEmbedded = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "playsInline", {
        get: function () { return this.model.playsInline; },
        set: function (value) { this.model.playsInline = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "uvpcTrackingOverrides", {
        get: function () { return this.model.uvpcTrackingOverrides; },
        set: function (value) { this.model.uvpcTrackingOverrides = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "uiConfig", {
        get: function () { return this.model.uiConfig; },
        set: function (value) { this.model.uiConfig = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerOptions.prototype, "useNativeControls", {
        get: function () { return this.model.useNativeControls; },
        set: function (value) { this.model.useNativeControls = value; },
        enumerable: true,
        configurable: true
    });
    return PlayerOptions;
}());
exports.PlayerOptions = PlayerOptions;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PresentationState.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PresentationState.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PresentationState = (function () {
    function PresentationState(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(PresentationState, "modelName", {
        get: function () { return 'PresentationState'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    PresentationState.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(PresentationState.prototype, "playheadTime", {
        get: function () { return this.model.playheadTime; },
        set: function (value) { this.model.playheadTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "playbackStarted", {
        get: function () { return this.model.playbackStarted; },
        set: function (value) { this.model.playbackStarted = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "volume", {
        get: function () { return this.model.volume; },
        set: function (value) { this.model.volume = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isMuted", {
        get: function () { return this.model.isMuted; },
        set: function (value) { this.model.isMuted = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isFullscreen", {
        get: function () { return this.model.isFullscreen; },
        set: function (value) { this.model.isFullscreen = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isDynamicSwitching", {
        get: function () { return this.model.isDynamicSwitching; },
        set: function (value) { this.model.isDynamicSwitching = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isAutoplay", {
        get: function () { return this.model.isAutoplay; },
        set: function (value) { this.model.isAutoplay = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isMuteAtPlayStart", {
        get: function () { return this.model.isMuteAtPlayStart; },
        set: function (value) { this.model.isMuteAtPlayStart = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "isCurrentVideoAd", {
        get: function () { return this.model.isCurrentVideoAd; },
        set: function (value) { this.model.isCurrentVideoAd = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PresentationState.prototype, "userHasUnmuted", {
        get: function () { return this.model.userHasUnmuted; },
        set: function (value) { this.model.userHasUnmuted = value; },
        enumerable: true,
        configurable: true
    });
    return PresentationState;
}());
exports.PresentationState = PresentationState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceConfig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceConfig = (function () {
    function ResourceConfig(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ResourceConfig, "modelName", {
        get: function () { return 'ResourceConfig'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceConfig.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ResourceConfig.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ResourceConfig.prototype, "preventFlashPlayback", {
        get: function () { return this.model.preventFlashPlayback; },
        set: function (value) { this.model.preventFlashPlayback = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceConfig.prototype, "previewImage", {
        get: function () { return this.model.previewImage; },
        set: function (value) { this.model.previewImage = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceConfig.prototype, "streamType", {
        get: function () { return this.model.streamType; },
        set: function (value) { this.model.streamType = value; },
        enumerable: true,
        configurable: true
    });
    return ResourceConfig;
}());
exports.ResourceConfig = ResourceConfig;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceMetadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceMetadata = (function () {
    function ResourceMetadata(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ResourceMetadata, "modelName", {
        get: function () { return 'ResourceMetadata'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceMetadata.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ResourceMetadata.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ResourceMetadata.prototype, "absoluteStreamTime", {
        get: function () { return this.model.absoluteStreamTime; },
        set: function (value) { this.model.absoluteStreamTime = value; },
        enumerable: true,
        configurable: true
    });
    return ResourceMetadata;
}());
exports.ResourceMetadata = ResourceMetadata;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceState.js":
/*!***************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceState.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceState = (function () {
    function ResourceState(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(ResourceState, "modelName", {
        get: function () { return 'ResourceState'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceState.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    ResourceState.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(ResourceState.prototype, "playbackState", {
        get: function () { return this.model.playbackState; },
        set: function (value) { this.model.playbackState = value; },
        enumerable: true,
        configurable: true
    });
    return ResourceState;
}());
exports.ResourceState = ResourceState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/UserData.js":
/*!**********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/UserData.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurablePropertyContainer_1 = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var UserData = (function () {
    function UserData(config) {
        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
    }
    Object.defineProperty(UserData, "modelName", {
        get: function () { return 'UserData'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "data", {
        get: function () { return (this.model.data); },
        enumerable: true,
        configurable: true
    });
    UserData.prototype.reset = function () { this.model.reset(); };
    Object.defineProperty(UserData.prototype, "playedChapterTime", {
        get: function () { return this.model.playedChapterTime; },
        set: function (value) { this.model.playedChapterTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "podsToSkip", {
        get: function () { return this.model.podsToSkip; },
        set: function (value) { this.model.podsToSkip = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "resumeContentTime", {
        get: function () { return this.model.resumeContentTime; },
        set: function (value) { this.model.resumeContentTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "resumeEpochTime", {
        get: function () { return this.model.resumeEpochTime; },
        set: function (value) { this.model.resumeEpochTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "resumePid", {
        get: function () { return this.model.resumePid; },
        set: function (value) { this.model.resumePid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userConnectionType", {
        get: function () { return this.model.userConnectionType; },
        set: function (value) { this.model.userConnectionType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userCountry", {
        get: function () { return this.model.userCountry; },
        set: function (value) { this.model.userCountry = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userId", {
        get: function () { return this.model.userId; },
        set: function (value) { this.model.userId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userIsp", {
        get: function () { return this.model.userIsp; },
        set: function (value) { this.model.userIsp = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userPpid", {
        get: function () { return this.model.userPpid; },
        set: function (value) { this.model.userPpid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "userStatus", {
        get: function () { return this.model.userStatus; },
        set: function (value) { this.model.userStatus = value; },
        enumerable: true,
        configurable: true
    });
    return UserData;
}());
exports.UserData = UserData;


/***/ }),

/***/ "./node_modules/cv-tracking-adbmobile/dist/AdbMobileAgent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cv-tracking-adbmobile/dist/AdbMobileAgent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var AdbMobileVo_1 = __webpack_require__(/*! ./AdbMobileVo */ "./node_modules/cv-tracking-adbmobile/dist/AdbMobileVo.js");
__webpack_require__(/*! adbmobile */ "./node_modules/cv-tracking-adbmobile/src/adbmobile.js");
var AdbMobileAgent = /** @class */ (function (_super) {
    __extends(AdbMobileAgent, _super);
    function AdbMobileAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAME = 'AdbMobileAgent';
        return _this;
    }
    AdbMobileAgent.prototype.onRegister = function () {
        var _this = this;
        var _a;
        // Safely cast the instance of ADBMobile from the window
        if (typeof window === 'object' && window.ADBMobile) {
            this.ADBMobile = window.ADBMobile;
        }
        if (typeof this.ADBMobile !== 'object') {
            throw ('ADBMobile library not available on the Window');
            this.debug && this.logWarn('onRegister aborted');
            return;
        }
        var onError = function (e) { return _this.onError(e); };
        this.ADBMobile.config.setDebugLogging(this.debug);
        this.ADBMobile.media.setDelegate(this);
        this.vo = new AdbMobileVo_1.AdbMobileVo(this);
        this.eventMap = (_a = {},
            _a[cv_tracking_core_1.PlayerEvents.RESOURCE_START] = function () { return _this.onResourceStart(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_DATA_LOADED] = function () { return _this.onContentDataLoaded(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_PLAYING] = function () { return _this.onContentPlaying(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_PAUSE] = function () { return _this.onContentPause(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_END] = function () { return _this.onContentEnd(); },
            _a[cv_tracking_core_1.PlayerEvents.SEEK_START] = function () { return _this.onSeekStart(); },
            _a[cv_tracking_core_1.PlayerEvents.SEEK_COMPLETE] = function () { return _this.onSeekComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.BUFFER_START] = function () { return _this.onBufferStart(); },
            _a[cv_tracking_core_1.PlayerEvents.BUFFER_COMPLETE] = function () { return _this.onBufferComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_BREAK_START] = function () { return _this.onAdBreakStart(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_START] = function () { return _this.onAdStart(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_COMPLETE] = function () { return _this.onAdComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_BREAK_COMPLETE] = function () { return _this.onAdBreakComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.RESOURCE_END] = function () { return _this.onResourceEnd(); },
            _a[cv_tracking_core_1.PlayerEvents.VIDEO_PLAYBACK_ERROR] = onError,
            _a);
        this.registerEventMap(this.eventMap);
        this.onRegisterDone();
    };
    AdbMobileAgent.prototype.onResourceStart = function () {
    };
    AdbMobileAgent.prototype.onContentDataLoaded = function () {
        if (!this.vo) {
            this.vo = new AdbMobileVo_1.AdbMobileVo(this);
        }
        //let metadataKeys = this.ADBMobile.media.VideoMetadataKeys;
        // mediaObject[this.ADBMobile.media.MediaObjectKey.StandardVideoMetadata] = {
        //     [metadataKeys.ASSET_ID]: this.modelCollection.ContentMetadata.mediaId
        // };
        var mediaObject = this.vo.formatMediaObject();
        var contextData = this.vo.formatContextData();
        this.ADBMobile.media.trackSessionStart(mediaObject, contextData);
    };
    AdbMobileAgent.prototype.onContentPlaying = function () {
        this.ADBMobile.media.trackPlay();
    };
    AdbMobileAgent.prototype.onContentPause = function () {
        this.ADBMobile.media.trackPause();
    };
    AdbMobileAgent.prototype.onContentEnd = function () {
        this.ADBMobile.media.trackComplete();
    };
    AdbMobileAgent.prototype.onSeekStart = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.SeekStart);
    };
    AdbMobileAgent.prototype.onSeekComplete = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.SeekComplete);
    };
    AdbMobileAgent.prototype.onBufferStart = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.BufferStart);
    };
    AdbMobileAgent.prototype.onBufferComplete = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.BufferComplete);
    };
    AdbMobileAgent.prototype.onAdBreakStart = function () {
        if (!this.vo) {
            this.vo = new AdbMobileVo_1.AdbMobileVo(this);
        }
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.AdBreakStart, this.vo.formatAdBreakInfo());
    };
    AdbMobileAgent.prototype.onAdStart = function () {
        if (!this.vo) {
            this.vo = new AdbMobileVo_1.AdbMobileVo(this);
        }
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.AdStart, this.vo.formatAdInfo());
    };
    AdbMobileAgent.prototype.onAdComplete = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.AdComplete);
    };
    AdbMobileAgent.prototype.onAdBreakComplete = function () {
        this.ADBMobile.media.trackEvent(this.ADBMobile.media.Event.AdBreakComplete);
    };
    AdbMobileAgent.prototype.onResourceEnd = function () {
        this.ADBMobile.media.trackSessionEnd();
    };
    AdbMobileAgent.prototype.onError = function (event) {
        var errorInfo = event.data;
        if (this.debug) {
            this.logWarn('onError', errorInfo);
        }
    };
    /*
     * ADBMobile delegate method
     */
    AdbMobileAgent.prototype.getCurrentPlaybackTime = function () {
        return this.modelCollection.ContentPlaybackState.playheadTime;
    };
    /*
     * ADBMobile delegate method
     */
    AdbMobileAgent.prototype.getQoSObject = function () {
        if (!this.vo) {
            this.vo = new AdbMobileVo_1.AdbMobileVo(this);
        }
        return this.vo.formatQosInfo();
    };
    AdbMobileAgent.prototype.destroy = function () {
        this.ADBMobile.media.trackSessionEnd();
        this.ADBMobile.media.setDelegate(null);
        delete this.vo;
        delete this.ADBMobile;
        _super.prototype.destroy.call(this);
    };
    return AdbMobileAgent;
}(cv_tracking_core_1.TrackingAgent));
exports.AdbMobileAgent = AdbMobileAgent;


/***/ }),

/***/ "./node_modules/cv-tracking-adbmobile/dist/AdbMobileVo.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-tracking-adbmobile/dist/AdbMobileVo.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var AdbMobileVo = /** @class */ (function () {
    function AdbMobileVo(agent) {
        this.agent = agent;
    }
    AdbMobileVo.prototype.formatQosInfo = function () {
        var model = this.agent.modelCollection;
        return this.agent.ADBMobile.media.createQoSObject(model.ContentPlaybackState.playbackBitrate || 0, model.PlaybackConfig.startTime || 0, model.ContentPlaybackState.playbackFramerate || 0, model.ContentPlaybackState.averageDroppedFps || 0);
    };
    AdbMobileVo.prototype.formatAdBreakInfo = function () {
        var model = this.agent.modelCollection;
        return this.agent.ADBMobile.media.createAdBreakObject(model.AdBreakInfo.adBreakType + ' Roll Ad Break', model.AdBreakInfo.adBreakPosition, this.agent.getCurrentPlaybackTime(), model.BuildInfo.playerName);
    };
    AdbMobileVo.prototype.formatAdInfo = function () {
        var model = this.agent.modelCollection;
        return this.agent.ADBMobile.media.createAdObject(model.AdItem.adTitle, model.AdItem.adId, model.AdItem.adPosition, model.AdItem.adDuration);
    };
    AdbMobileVo.prototype.formatMediaObject = function () {
        var model = this.agent.modelCollection;
        return this.agent.ADBMobile.media.createMediaObject(model.ContentMetadata.videoTitle, model.ContentMetadata.mediaId, model.ContentPlaybackState.duration, model.ResourceConfig.streamType === cv_tracking_core_1.StreamType.LIVE
            ? this.agent.ADBMobile.media.StreamType.LIVE
            : this.agent.ADBMobile.media.StreamType.VOD);
    };
    AdbMobileVo.prototype.formatContextData = function () {
        var model = this.agent.modelCollection;
        var data = {};
        for (var i in this.agent.contextData) {
            if (this.agent.contextData.hasOwnProperty(i)) {
                data[i] = this.agent.contextData[i];
            }
        }
        // Augment with properties from the model
        data.mediaAutoPlay = model.PresentationState.isAutoplay.toString();
        data.mediaMuted = model.PresentationState.isMuteAtPlayStart.toString();
        data.mediaIsPaidContent = model.ContentMetadata.isPaidContent.toString();
        return data;
    };
    return AdbMobileVo;
}());
exports.AdbMobileVo = AdbMobileVo;


/***/ }),

/***/ "./node_modules/cv-tracking-adbmobile/src/adbmobile.js":
/*!*************************************************************!*\
  !*** ./node_modules/cv-tracking-adbmobile/src/adbmobile.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2017 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 * *************************************************************************/

/*! Copyright for external libraries used in ADBMobile library */
/*!
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
ADBMobile_platform=function(){function a(a,b){if(!a)return null;try{return b?window.localStorage.setItem(a,b):window.localStorage.removeItem(a),b}catch(c){_logger.error("Failed to store data element: "+c)}return null}function b(a){if(!a)return null;try{return window.localStorage.getItem(a)}catch(b){_logger.error("Failed to retrieve data element: "+b)}return null}function c(a,b,c,d,e,f){if(!a)return _logger.error("HTTPRequestAsync - URL required but was not passed"),null;c=c||{},e=e||500,f=f||function(){};var g=new XMLHttpRequest;g.onreadystatechange=function(){4==g.readyState&&(f(g.status,g.responseText,d||a),f=function(){})},g.timeout=e,g.ontimeout=function(){f(0,null,a),f=function(){}},g.open(b,a,!0),Object.keys(c).forEach(function(a){g.setRequestHeader(a,this[a])},c),g.send(d)}function d(){return"Chromecast resolution"}function e(){return"undefined"!=typeof cast&&cast.receiver?cast.receiver.VERSION:"Chromecast OS"}function f(){return"Chromecast"}function g(){return"Chromecast App ID"}function h(){return g()}function i(){return Math.floor((new Date).getTime()/1e3)}function j(){return(new Date).getTime()}function k(){return(new Date).toISOString()}function l(){return"00/00/0000 00:00:00 0 "+(new Date).getTimezoneOffset()}function m(a,b){return setInterval(a,b)}function n(a){clearInterval(a)}function o(a){return window.btoa(a)}function p(a){return window.atob(a)}function q(a){var b;if(window.DOMParser){b=(new DOMParser).parseFromString(a,"text/xml")}return b}function r(a){return a.item(0)}return{httpRequestAsync:c,writeValue:a,readValue:b,getResolution:d,getDeviceName:f,getOSVersion:e,getAppID:g,getDefaultPageName:h,getTimeSince1970:i,getTimeSince1970Millis:j,getDateInISOString:k,getTimestampString:l,setInterval:m,clearInterval:n,encodeBase64String:o,decodeBase64String:p,parseXML:q,getBaseItem:r}}(),ADBMobile=function(){var a=function(){function a(){i=ADBMobile_platform.readValue("adb_aid"),j=ADBMobile_platform.readValue("adb_ignore_aid")}function b(){return"yxxxxxxxxxxxxxxx-zxxxxxxxxxxxxxxx".replace(/[xyz]/g,function(a){return"0123456789ABCDEF".charAt(Math.floor(Math.random()*({y:7,x:16,z:4}[a]||0)))})}function c(){i=null,j=null,ADBMobile_platform.writeValue("adb_aid",""),ADBMobile_platform.writeValue("adb_ignore_aid","")}function d(a){h.isFunction(a)&&(l.push({callback:a}),f())}function f(){if(!m){var a=l.shift();if(a){m=!0;var c=a.callback,d=!1;do{if(e.getPrivacyStatus()!==e.PRIVACY_STATUS_OPT_IN){c(null);break}if(i){c(i);break}if(j&&e.visitorIDServiceEnabled()){c(null);break}d=!0}while(!1);if(!d)return m=!1,void f();k.getMarketingCloudIDAsync(function(a){var d=(e.ssl()?"https":"http")+"://"+e.trackingServer()+"/id";a&&(d+=k.getAnalyticsIDRequestParameterString()),ADBMobile_platform.httpRequestAsync(d,"GET",{},null,500,function(a,d){if(e.getPrivacyStatus()!==e.PRIVACY_STATUS_OPT_IN)g.debug("[Aid] Dropping response as privacy is not set to opted in."),c(null);else{if(200==a&&d)try{i=JSON.parse(d).id,ADBMobile_platform.writeValue("adb_aid",i)}catch(h){g.debug("[Aid] Error parsing aid call response.")}!i&&e.visitorIDServiceEnabled()?ADBMobile_platform.writeValue("adb_ignore_aid",!0):ADBMobile_platform.readValue("adb_aid")||(i=b(),ADBMobile_platform.writeValue("adb_aid",i)),i&&e.visitorIDServiceEnabled()&&k.idSync({AVID:i}),c(i)}m=!1,f()})})}}}var i,j,l=[],m=!1;return{init:a,getAIDAsync:d,purgeAid:c}}(),b=function(){function a(a,c){var d={};b(c)&&Object.keys(c).forEach(function(a){d[a]=this[a]},c),g(d,{pageName:a||ADBMobile_platform.getDefaultPageName()},ADBMobile_platform.getTimeSince1970())}function b(a){return null!==a&&(void 0!==a&&a.constructor==={}.constructor)}function d(a,c,d){var e={};b(c)&&Object.keys(c).forEach(function(a){e[a]=this[a]},c),e["a.internalaction"]=a;var f={pe:"lnk_o",pev2:"ADBINTERNAL:"+a,pageName:ADBMobile_platform.getDefaultPageName()};g(e,f,d)}function f(a,c){var d={};b(c)&&Object.keys(c).forEach(function(a){d[a]=this[a]},c),d["a.action"]=a;var e={pe:"lnk_o",pev2:"AMACTION:"+a,pageName:ADBMobile_platform.getDefaultPageName()};g(d,e,ADBMobile_platform.getTimeSince1970())}function g(a,b,d){if(e.analyticsEnabled()){a=a||{},b=b||{},d=d||ADBMobile_platform.getTimeSince1970(),a["a.Resolution"]=ADBMobile_platform.getResolution(),a["a.DeviceName"]=ADBMobile_platform.getDeviceName(),a["a.OSVersion"]=ADBMobile_platform.getOSVersion(),a["a.AppID"]=ADBMobile_platform.getAppID();var f=e.getUserIdentifier();f&&(b.vid=f),e.offlineTrackingEnabled()&&(b.ts=d),b.ce=e.characterSet(),b.t=ADBMobile_platform.getTimestampString(),Object.keys(a).forEach(function(a){"&&"===a.slice(0,2)&&(b[a.slice(2)]=this[a],delete this[a])},a);var g="ndh=1"+h.serializeParameters(b)+h.serializeContextData(a);c.queue(g,ADBMobile_platform.getTimeSince1970()),p.checkFor3rdPartyCallbacks(b,a)}}return{trackAction:f,trackState:a,trackInternal:d}}(),c=function(){function b(a,b){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN?(g.debug("Analytics - Queued Hit("+a+")"),l.push({frag:a,ts:b}),c()):g.debug("Analytics - Not queueing hit. Privacy is not set to optedin.")}function c(){if(!m){m=!0;var b=l.shift();if(!b)return void(m=!1);if(!e.offlineTrackingEnabled()){var i=ADBMobile_platform.getTimeSince1970()-b.ts;if(i>60)return g.debug("Analytics - Hit is greater than 60 seconds old ("+i+"s), will be deleted ("+b.frag+")"),m=!1,void c()}k.idSync(null,function(e){var i=b.frag;e&&(i+=h.serializeParameters(k.getAnalyticsParameters())),a.getAIDAsync(function(a){a&&(i+=h.serializeKeyValuePair("aid",a)),ADBMobile_platform.httpRequestAsync(f(),"POST",{"Content-type":"application/x-www-form-urlencoded"},i,2e3,function(a,b,e){if(200==a){g.debug("Analytics - Successfully sent hit ("+e+")");var f=null;if(b)try{f=JSON.parse(b)}catch(h){f=null}f?(g.debug("Analytics - JSON response received: "+b),d.processJsonResponse(f)):g.debug("Analytics - Empty or non JSON response received")}else g.error("Analytics - Unable to send hit ("+e+") response ("+b+")");m=!1,c()})})})}}function f(){var a=e.ssl()?"https":"http";return a+="://"+e.trackingServer()+"/b/ss/"+e.reportSuiteIDs()+"/"+e.getAnalyticsResponseType()+"/"+j.codeVersion+"/s"+Math.floor(1e7*Math.random())}function i(){l=[]}var l=[],m=!1;return{queue:b,purgeAnalyticsQueue:i}}(),d=function(){function a(){if(!v){v=!0;var b=u.shift();if(!b)return void(v=!1);ADBMobile_platform.httpRequestAsync(b,"GET",{},"",2e3,function(b,c,d){if(200==b&&e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN){g.debug("Audience Manager - Successfully Sent Signal ("+d+"), response ("+c+")");var f=null;try{f=JSON.parse(c)}catch(h){g.debug("Audience Manager - Unable to parse response ("+h+")")}f&&t(f)}else g.error("Audience Manager - Unable to send signal ("+d+")");v=!1,a()})}}function b(b){if(e.audienceManagerEnabled())if(e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN){var d=c(b);g.debug("Audience Manager - Queued Signal("+d+")"),u.push(d),a()}else g.debug("Audience Manager - Not queueing hit. Privacy is not set to optedin.")}function c(a){return(d()+f(a)+i()+"&d_ptfm=appletv&d_dst=1&d_rtbd=json").replace(/\?\&/i,"?")}function d(){return e.ssl()?"https":"http://"+e.aamServer()+"/event?"}function f(a){a=a||{};var b="";return Object.keys(a).forEach(function(a){b+=h.serializeKeyValuePair(j(a),this[a])},a),b}function i(){var a="",b=r()||null;b&&(a+=h.serializeKeyValuePair("d_uuid",b));var c=o()||null,d=p()||null;return c&&d&&(a+=h.serializeKeyValuePair("d_dpid",c)+h.serializeKeyValuePair("d_dpuuid",d)),a+=k.getAAMParameterString()}function j(a){return a.replace("/./g","_")}function l(a){var b=JSON.stringify(a);ADBMobile_platform.writeValue("adb_aam_profile",b)}function m(){var a=ADBMobile_platform.readValue("adb_aam_profile");return JSON.parse(a)}function n(a,b){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN&&(ADBMobile_platform.writeValue("adb_aam_dpid",a),ADBMobile_platform.writeValue("adb_aam_dpuuid",b))}function o(){return ADBMobile_platform.readValue("adb_aam_dpid")}function p(){return ADBMobile_platform.readValue("adb_aam_dpuuid")}function q(a){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN&&ADBMobile_platform.writeValue("adb_aam_uuid",a)}function r(){return ADBMobile_platform.readValue("adb_aam_uuid")}function s(){u=[],ADBMobile_platform.writeValue("adb_aam_profile",""),ADBMobile_platform.writeValue("adb_aam_dpid",""),ADBMobile_platform.writeValue("adb_aam_dpuuid",""),ADBMobile_platform.writeValue("adb_aam_uuid","")}function t(a){var b=a.uuid||null;b&&q(b),(a.dests||[]).map(function(a){var b=a.c||null;b&&(g.debug("Audience Manager - Forwarding 'dests' request ("+b+")"),ADBMobile_platform.httpRequestAsync(b,"GET",{},"",2e3,null))});var c=a.stuff||[],d={};c.map(function(a){var b=a.cn||null,c=a.cv||null;b&&c&&(d[b]=c)}),l(d)}var u=[],v=!1;return{getUUID:r,getDpid:o,getDpuuid:p,setDpidAndDpuuid:n,getVisitorProfile:m,submitSignal:b,purgeAamIdsAndQueue:s,processJsonResponse:t}}(),e=function(){function b(){if(x=p()||null,x&&g.debug("Config - Found custom visitor id("+x+")"),"object"!=typeof ADBMobileConfig||null===ADBMobileConfig)return void g.error("Config - Unable to find defined ADBMobileConfig object.");"object"==typeof ADBMobileConfig.analytics&&(B=ADBMobileConfig.analytics.offlineEnabled||!1,y=ADBMobileConfig.analytics.server||null,z=ADBMobileConfig.analytics.rsids||null,A=ADBMobileConfig.analytics.ssl||!1,C=ADBMobileConfig.analytics.lifecycleTimeout||300,D=ADBMobileConfig.analytics.privacyDefault||"optedin"),g.debug((m(),"Enabled")),"object"==typeof ADBMobileConfig.audienceManager&&(E=ADBMobileConfig.audienceManager.server||null,"boolean"==typeof ADBMobileConfig.audienceManager.analyticsForwardingEnabled&&(F=ADBMobileConfig.audienceManager.analyticsForwardingEnabled||!1)),g.debug((j(),"Enabled")),g.debug("Enabled"),"object"==typeof ADBMobileConfig.marketingCloud&&(G=ADBMobileConfig.marketingCloud.org||null),g.debug((n(),"Enabled")),"object"==typeof ADBMobileConfig.mediaHeartbeat&&(H=ADBMobileConfig.mediaHeartbeat.server||null,I=ADBMobileConfig.mediaHeartbeat.publisher||null,J=ADBMobileConfig.mediaHeartbeat.channel||null,K=ADBMobileConfig.mediaHeartbeat.playerName||null,L=ADBMobileConfig.mediaHeartbeat.ssl||!1,M=ADBMobileConfig.mediaHeartbeat.ovp||null,N=ADBMobileConfig.mediaHeartbeat.sdkVersion||null),g.debug((i(),"Enabled")),"object"==typeof ADBMobileConfig.messages&&(O=ADBMobileConfig.messages),"object"==typeof ADBMobileConfig.remotes&&(P=ADBMobileConfig.remotes)}function i(){return!(!H||!m())}function j(){return!!E}function l(){return F?10:0}function m(){return!(!y||!z)}function n(){return!!G}function o(a){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN&&(ADBMobile_platform.writeValue("adb_vid",a),x=a)}function p(){return x}function q(){x=null,ADBMobile_platform.writeValue("adb_vid","")}function r(a){ADBMobile_platform.writeValue("adb_privacy",a),a===e.PRIVACY_STATUS_OPT_OUT&&t()}function s(){var a=ADBMobile_platform.readValue("adb_privacy");return a||D}function t(){a.purgeAid(),e.purgeUserIdentifier(),c.purgeAnalyticsQueue(),d.purgeAamIdsAndQueue(),k.purgeVisitorIdService()}function u(a){h.isFunction(a)&&f.getAllIdentifiersAsync(a)}function v(){return O}function w(){return P}var x=null,y=null,z=null,A=!1,B=!1,C=300,D="optedin",E=null,F=!1,G=null,H=null,I=null,J=null,K=null,L=!1,M=null,N=null,O=null,P=null;return{getAllIdentifiersAsync:u,purgeUserIdentifier:q,trackingServer:function(){return y},reportSuiteIDs:function(){return z},ssl:function(){return A},offlineTrackingEnabled:function(){return B},lifecycleTimeout:function(){return C},characterSet:function(){return"UTF-8"},privacyDefault:function(){return D},aamServer:function(){return E},marketingCloudOrganizationIdentifier:function(){return G},mTrackingServer:function(){return H},mPublisher:function(){return I},mChannel:function(){return J},mPlayerName:function(){return K},mSSL:function(){return L},mOVP:function(){return M},mSDK:function(){return N},audienceManagerEnabled:j,getAnalyticsResponseType:l,analyticsEnabled:m,visitorIDServiceEnabled:n,mediaHearbeatEnabled:i,setUserIdentifier:o,getUserIdentifier:p,setPrivacyStatus:r,getPrivacyStatus:s,getMessages:v,getRemotes:w,init:b}}();e.PRIVACY_STATUS_OPT_IN="optedin",e.PRIVACY_STATUS_OPT_OUT="optedout";var f=function(){function b(a){var b={clbFn:a};h(b),i(b)}function c(a){if(a.mcidReady&&a.aidReady){var b={},c=f();null!==c&&(b.companyContexts=c);var d=[],e=a.mcid;null!==e&&d.push(e);var h=a.aid;null!==h&&d.push(h);var i=j();null!==i&&d.push(i);var k=l();null!==k&&d.push(k);var n=m();if(null!==n&&d.push(n),d.length>0){var o={userIDs:d},p=[];p.push(o),b.users=p}try{var q=JSON.stringify(b);a.clbFn(q)}catch(r){g.debug("identies.callback threw exception  ["+r+"]")}}}function f(){var a=e.marketingCloudOrganizationIdentifier();return n(a)?[{namespace:"imsOrgID",value:a}]:null}function h(a){k.getMarketingCloudIDAsync(function(b){var d=null;n(b)&&(d={namespace:"4",value:b,type:"namespaceId"}),a.mcid=d,a.mcidReady=!0,c(a)})}function i(b){a.getAIDAsync(function(a){var d=null;n(a)&&(d={namespace:"avid",value:a,type:"integrationCode"}),b.aid=d,b.aidReady=!0,c(b)})}function j(){var a=e.getUserIdentifier();if(n(a)){var b=e.reportSuiteIDs();return{namespace:"vid",value:a,type:"analytics",rsids:"string"==typeof b?b.trim().split(/\s*,\s*/):[]}}return null}function l(){var a=d.getUUID();return n(a)?{namespace:"0",value:a,type:"namespaceId"}:null}function m(){var a=d.getDpid(),b=d.getDpuuid();return n(a)&&n(b)?{namespace:a,value:b,type:"namespaceId"}:null}function n(a){return"string"==typeof a&&0!==a.length}return{getAllIdentifiersAsync:b}}(),g=function(){function a(a){"object"==typeof console&&console&&console.log&&console.log(a)}function b(a){h.isFunction(a)&&(k=a)}function c(a){j=a}function d(){return j}function e(b){j&&(a("ADBMobile Warning: "+b),k&&k(b))}function f(b){j&&(a("ADBMobile Debug: "+b),k&&k(b))}function g(b){a("ADBMobile Error: "+b),k&&k(b)}function i(a){var b="["+a+"] ";return{warning:function(a){e(b+a)},debug:function(a){f(b+a)},error:function(a){g(b+a)}}}var j=!1,k=null;return{setDebugLogging:c,getDebugLogging:d,setLoggerCallback:b,warning:e,debug:f,error:g,instanceWithTag:i}}(),h=function(){function a(a){return"&c."+d(e(a))+"&.c"}function b(a,b){return void 0!==b&&null!==b?"&"+encodeURIComponent(a)+"="+encodeURIComponent(b):""}function c(a){var c="";for(var d in a)a.hasOwnProperty(d)&&(c+=b(d,a[d]));return c}function d(a){var c="";return a=a||{},Object.keys(a).forEach(function(a){this[a].v&&(c+=b(a,this[a].v)),this[a].subValues&&(c+="&"+a+"."+d(this[a].subValues)+"&."+a)},a),c}function e(a){var b={},c=f(a);return Object.keys(c).forEach(function(a){var c=this[a];!function a(b,c,d,e){if(!(e>=d.length)){var f=d[e];if(c[f]||(c[f]={}),d.length-1==e)return void(c[f].v=b);c[f].subValues||(c[f].subValues={}),a(b,c[f].subValues,d,e+1)}}(c,b,a.split("."),0)},c),b}function f(a){var b={};return a=a||{},Object.keys(a).forEach(function(a){if("string"==typeof a){var c=a.replace(j,".").replace(k,"");c&&(b[c]=this[a])}},a),b}function g(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function i(a){return"function"==typeof a}var j=new RegExp("([.]){2,}","g"),k=new RegExp("[^0-9a-zA-Z._]|^[.]{1,}|[.]{1,}$","g");return{serializeContextData:a,serializeKeyValuePair:b,serializeParameters:c,isFunction:i,clone:g,append:h}}(),i={};!function(a){"use strict";var b=function(){return this._ts=ADBMobile_platform.getTimeSince1970Millis(),this._interval=null,this._name=null,this._enabled=!1,this._nextTick=null,this};b.prototype.start=function(a,b){this._enabled?g.debug("Timer -  "+this._name+" timer already started."):(g.debug("Timer - starting "+b+" timer with interval ("+a+")"),this._interval=a,this._name=b,this._ts=ADBMobile_platform.getTimeSince1970Millis(),this._nextTick=this._interval,this._enabled=!0)},b.prototype.stop=function(){this._enabled?(g.debug("Timer - stoping "+this._name+" timer."),this._enabled=!1,this._nextTick=0):g.debug("Timer -  "+this._name+" timer already stopped.")},b.prototype.restartWithNewInterval=function(a){g.debug("Timer - restarting "+this._name+" timer with interval ("+a+")"),this._interval=a,this._ts=ADBMobile_platform.getTimeSince1970Millis(),this._nextTick=this._interval,this._enabled=!0},b.prototype.reset=function(){g.debug("Timer - resetting "+this._name),this._ts=ADBMobile_platform.getTimeSince1970Millis(),this._nextTick=this._interval,this._enabled=!0},b.prototype.ticked=function(){var a=!1,b=ADBMobile_platform.getTimeSince1970Millis()-this._ts;return b>=this._nextTick&&(this._nextTick=b+this._interval,a=!0),a},b.prototype.elapsedTime=function(){return ADBMobile_platform.getTimeSince1970Millis()-this._ts},b.prototype.enabled=function(){return this._enabled},a.Timer=b}(i);var j=function(){return{codeVersion:"cc-js-2.1.0.103-f637d81",mediaAPILevel:4}}(),k=function(){function a(){m=ADBMobile_platform.readValue("adb_visitor_mid"),n=ADBMobile_platform.readValue("adb_visitor_blob"),o=ADBMobile_platform.readValue("adb_visitor_hint"),p=ADBMobile_platform.readValue("adb_visitor_ttl"),q=ADBMobile_platform.readValue("adb_visitor_sync")}function b(){return"yxxxxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return""+Math.floor(10*Math.random())}).replace(/[y]/g,function(){return""+Math.floor(9*Math.random())})}function c(a,b){h.isFunction(b)||(b=function(){}),s.push({identifiers:a,callback:b}),d()}function d(){if(!t){var a=s.shift();if(a){t=!0;var c=a.identifiers,f=a.callback,g=!1;do{if(e.getPrivacyStatus()!==e.PRIVACY_STATUS_OPT_IN){r.debug("Not syncing ID. Privacy is not set to opted in."),f(null);break}if(!e.visitorIDServiceEnabled()){f(null);break}var i=ADBMobile_platform.getTimeSince1970()-q>p;if(m&&!c&&!i){f(m);break}g=!0}while(!1);if(!g)return t=!1,void d();var j=e.marketingCloudOrganizationIdentifier(),k=e.ssl()?"https":"http";k+="://dpm.demdex.net/id?d_rtbd=json&d_ver=2&d_orgid="+j,n&&(k+=h.serializeKeyValuePair("d_blob",n)),m&&(k+=h.serializeKeyValuePair("d_mid",m)),o&&(k+=h.serializeKeyValuePair("dcs_region",o)),c&&Object.keys(c).forEach(function(a){k+="&d_cid_ic="+encodeURIComponent(a)+"%01"+encodeURIComponent(this[a])},c),r.debug("Sending id sync call ("+k+")"),ADBMobile_platform.httpRequestAsync(k,"GET",{},null,2e3,function(a,c){if(e.getPrivacyStatus()!==e.PRIVACY_STATUS_OPT_IN)r.debug("Dropping response as privacy is not set to opted in."),f(null);else{do{if(200!==a){r.error("Failed id sync call ("+a+")");break}if(!c){r.error("Blank response from id sync call");break}r.debug("Received response from server ("+c+")");var g;try{g=JSON.parse(c)}catch(h){g=null}g?g.error_msg?r.error("Error received from server("+g.error_msg+")"):g.d_mid?(m=g.d_mid,n=g.d_blob,o=g.dcs_region,p=g.id_sync_ttl||0):(m=b(),n=null,o=null,p=600):r.error("Unable to parse response("+c+")")}while(!1);q=ADBMobile_platform.getTimeSince1970(),ADBMobile_platform.writeValue("adb_visitor_mid",m),ADBMobile_platform.writeValue("adb_visitor_blob",n),ADBMobile_platform.writeValue("adb_visitor_hint",o),ADBMobile_platform.writeValue("adb_visitor_ttl",p),ADBMobile_platform.writeValue("adb_visitor_sync",q),f(m)}t=!1,d()})}}}function f(a){c(null,a)}function i(){return m?"?mid="+m+"&mcorgid="+e.marketingCloudOrganizationIdentifier():""}function j(){var a={};return m?(a.mid=m,n&&(a.aamb=n),o&&(a.aamlh=o),a):a}function k(){var a="";return m?(a+=h.serializeKeyValuePair("d_mid",m),n&&(a+=h.serializeKeyValuePair("d_blob",n)),o&&(a+=h.serializeKeyValuePair("dcs_region",o)),a):a}function l(){m=null,n=null,o=null,p=null,q=null,ADBMobile_platform.writeValue("adb_visitor_mid",""),ADBMobile_platform.writeValue("adb_visitor_blob",""),ADBMobile_platform.writeValue("adb_visitor_hint",""),ADBMobile_platform.writeValue("adb_visitor_ttl",""),ADBMobile_platform.writeValue("adb_visitor_sync","")}var m,n,o,p,q,r=g.instanceWithTag("Id Service"),s=[],t=!1;return{init:a,getMarketingCloudIDAsync:f,idSync:c,getAnalyticsParameters:j,getAnalyticsIDRequestParameterString:i,getAAMParameterString:k,purgeVisitorIdService:l}}(),l={};!function(a){var b={Start:"start",Play:"play",Pause:"pause",Buffer:"buffer",Stall:"stall"},c={SourceApplication:"sourceErrorExternal",SourcePlayer:"sourceErrorSDK"},d={AdBreakStart:"adBreakStart",AdBreakComplete:"adBreakComplete",AdBreakSkip:"adBreakSkip",AdStart:"adStart",AdComplete:"adComplete",AdSkip:"adSkip",ChapterStart:"chapterStart",ChapterComplete:"chapterComplete",ChapterSkip:"chapterSkip",SeekStart:"seekStart",SeekComplete:"seekComplete",BufferStart:"bufferStart",BufferComplete:"bufferComplete",BitrateChange:"bitrateChange"},e={StandardVideoMetadata:"media_standard_content_metadata",StandardAdMetadata:"media_standard_ad_metadata",VideoResumed:"resumed",PrerollTrackingWaitingTime:"prerolltrackingwaitingtime"},f={VOD:"vod",LIVE:"live",LINEAR:"linear"},g={SHOW:"a.media.show",SEASON:"a.media.season",EPISODE:"a.media.episode",ASSET_ID:"a.media.asset",GENRE:"a.media.genre",FIRST_AIR_DATE:"a.media.airDate",FIRST_DIGITAL_DATE:"a.media.digitalDate",RATING:"a.media.rating",ORIGINATOR:"a.media.originator",NETWORK:"a.media.network",SHOW_TYPE:"a.media.type",AD_LOAD:"a.media.adLoad",MVPD:"a.media.pass.mvpd",AUTHORIZED:"a.media.pass.auth",DAY_PART:"a.media.dayPart",FEED:"a.media.feed",STREAM_FORMAT:"a.media.format"},h={ADVERTISER:"a.media.ad.advertiser",CAMPAIGN_ID:"a.media.ad.campaign",CREATIVE_ID:"a.media.ad.creative",PLACEMENT_ID:"a.media.ad.placement",SITE_ID:"a.media.ad.site",CREATIVE_URL:"a.media.ad.creativeURL"};a.Constants={PlayerEvent:b,Error:c,Event:d,StreamType:f,MediaObjectKey:e,VideoMetadataKeys:g,AdMetadataKeys:h}}(l),function(a){"use strict";function b(){this._processAction=!0,this._store={}}function c(){this._rules=[]}var d=g.instanceWithTag("media/RuleEngine");b.prototype.setRuleName=function(a){this._ruleName=a},b.prototype.getRuleName=function(){return this._ruleName},b.prototype.setData=function(a,b){this._store[a]=b},b.prototype.getData=function(a){return this._store[a]},b.prototype.shouldProcessAction=function(){return this._processAction},b.prototype.stopProcessingAction=function(){this._processAction=!1},b.prototype.startProcessingAction=function(){this._processAction=!0},c.createContext=function(){return new b},c.createPredicate=function(a,b,c){return{fn:a,expectedValue:b,msg:c}},c.prototype.registerRule=function(a,b,c,d,e){this._rules.push({name:a,desc:b,preconditions:c,actions:d,scope:e})},c.prototype.registerEnterExitAction=function(a,b){this._enterAction=a,this._exitAction=b},c.prototype._handleFailure=function(a,b){d.error(a.desc+" -  "+b.msg)},c.prototype._getRule=function(a){for(var b=0;b<this._rules.length;++b)if(this._rules[b].name===a)return this._rules[b];return null},c.prototype.processRule=function(a,b){var e=!0,f=this._getRule(a);if(f){var g=f.scope;b||(b=c.createContext()),b.setRuleName(a);for(var h=!1,i=0;i<f.preconditions.length;++i){var j=f.preconditions[i];if(h=!!j.fn.call(g,b)!==j.expectedValue){this._handleFailure(f,j);break}}if(h)e=!1;else{b.startProcessingAction(),this._enterAction&&this._enterAction.call(g,b);for(var i=0;i<f.actions.length;++i){var k=f.actions[i];if(!b.shouldProcessAction()){d.debug("Stopping actions for "+f.desc);break}k.call(g,b)}this._exitAction&&b.shouldProcessAction()&&this._exitAction.call(g,b)}}else d.warning("No registered event found for ruleName "+a),e=!1;return e},a.RuleEngine=c}(l),function(a){"use strict";function b(){this.id="",this.name="",this.length=0,this.streamType=a.Constants.StreamType.VOD}function c(){this.name=null,this.startTime=null,this.position=0,this.playerName=null}function d(){this.id="",this.name="",this.length=0,this.position=0}function e(){this.name="",this.length=0,this.position=0,this.offset=0}function f(){this.bitrate=0,this.fps=0,this.droppedFrames=0,this.startupTime=0}function h(a,c,d,e){var f=new b;return f.name=a,f.id=c,f.length=d,f.streamType=e,f}function i(a,b,d,e){var f=new c;return f.name=a,f.position=b,f.startTime=d,f.playerName=e,f}function j(a,b,c,e){var f=new d;return f.name=a,f.id=b,f.position=c,f.length=e,f}function k(a,b,c,d){var f=new e;return f.name=a,f.position=b,f.length=c,f.offset=d,f}function l(a,b,c,d){var e=new f;return e.bitrate=a,e.startupTime=b,e.fps=c,e.droppedFrames=d,e}function m(a){return!!a&&(void 0===a.id?(v.warning("MediaInfo does not have value for media-id"),!1):void 0!==a.length||(v.warning("MediaInfo does not have value for playhead"),!1))}function n(a){return!!a&&(void 0!==a.position||(v.warning("AdBreak Info does not have value for position"),!1))}function o(a){return!!a&&(void 0!==a.id||(v.warning("Ad Info does not have value for ad id"),!1))}function p(a){return!!a&&(void 0===a.position?(v.warning("Chapter Info does not have value for chapter position"),!1):void 0===a.name?(v.warning("Chapter Info does not have value for chapter name"),!1):void 0===a.offset?(v.warning("Chapter Info does not have value for chapter offset"),!1):void 0!==a.length||(v.warning("Chapter Info does not have value for chapter length"),!1))}function q(a){return!!a&&(void 0===a.droppedFrames?(v.warning("QoS Info does not have value for dropped frames"),!1):void 0===a.startupTime?(v.warning("QoS Info does not have value for startup time"),!1):void 0===a.fps?(v.warning("QoS Info does not have value for frames per second"),!1):void 0!==a.bitrate||(v.warning("QoS Info does not have value for bitrate"),!1))}function r(a){return!!a&&(a.mSDK()?a.mChannel()?a.mOVP()?!!a.mPlayerName()||(v.warning("Config object does not have value for playername."),!1):(v.warning("Config object does not have value for ovp."),!1):(v.warning("Config object does not have value for channel."),!1):(v.warning("Config object does not have value for sdk."),!1))}function s(a,b){return a===b||null!=a&&"object"==typeof a&&null!=b&&"object"==typeof b&&(a.name===b.name&&(a.position===b.position&&(a.startTime===b.startTime&&a.playerName===b.playerName)))}function t(a,b){return a===b||null!=a&&"object"==typeof a&&null!=b&&"object"==typeof b&&(a.id===b.id&&(a.name===b.name&&(a.length===b.length&&a.position===b.position)))}function u(a,b){return a===b||null!=a&&"object"==typeof a&&null!=b&&"object"==typeof b&&(a.name===b.name&&(a.length===b.length&&(a.position===b.position&&a.offset===b.offset)))}var v=g.instanceWithTag("media/MediaObject");a.MediaObject={MediaInfo:b,AdBreakInfo:c,AdInfo:d,ChapterInfo:e,QoSInfo:f,createMediaObject:h,createAdBreakObject:i,createAdObject:j,createChapterObject:k,createQoSObject:l,isValidMediaInfoObject:m,isValidAdBreakInfoObject:n,isValidAdInfoObject:o,isValidChapterInfoObject:p,isValidQoSInfoObject:q,isValidConfigObject:r,isSameAdBreakInfoObject:s,isSameAdInfoObject:t,isSameChapterInfoObject:u}}(l),function(a){function b(a){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN?(n.debug("Queued Hit"),this._queue.push(a),i.call(this)):n.debug("Not queueing hit. Privacy is not set to optedin.")}function c(a){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN?(n.debug("Queued Hit"),this._asyncQueue.push(a)):n.debug("Not queueing hit. Privacy is not set to optedin.")}function d(){if(this._asyncQueue.length>0){n.debug("Flush requests. Pending requests : "+this._asyncQueue.length);var a=function(){};for(var b in this._asyncQueue)if(this._asyncQueue.hasOwnProperty(b)){var c=j.call(this,this._asyncQueue[b]);n.debug("Sending the Media Heartbeat Hit ("+c+")"),ADBMobile_platform.httpRequestAsync(c,"GET",{},"",2e3,a)}this._asyncQueue=[]}}function f(a,b,c){if(200==a)if(n.debug("Successfully sent hit with response data:"+b),b){var d=ADBMobile_platform.parseXML(b),e={};n.debug("XML response ("+d+")");var f=d.getElementsByTagName("trackingInterval");f&&f.length>0&&(e.trackingInterval=parseInt(ADBMobile_platform.getBaseItem(f).textContent)),f=d.getElementsByTagName("trackExternalErrors"),f&&f.length>0&&(e.trackExternalErrors=parseInt(ADBMobile_platform.getBaseItem(f).textContent)),f=d.getElementsByTagName("setupCheckInterval"),f&&f.length>0&&(e.setupCheckInterval=parseInt(ADBMobile_platform.getBaseItem(f).textContent)),this._settingsFn&&this._settingsFn(e)}else n.debug("Empty or invalid XML response received");else n.error("Unable to send hit: "+c),n.debug("Response code "+a);this._currentHit=null,i.call(this)}function i(){if(this._queue.length>0&&!this._currentHit){this._currentHit=this._queue.shift();var a=this,b=j.call(this,this._currentHit);n.debug("Sending the Media Heartbeat Hit ("+b+")"),ADBMobile_platform.httpRequestAsync(b,"GET",{},"",2e3,function(b,c,d){f.call(a,b,c,d)})}}function j(a){var b=!1;a.r&&(b=!0);var c=h.serializeParameters(a);return c.length>2&&(c=c.substring(1)),k.call(this,b)+c}function k(a){var b="";if(e.mTrackingServer){if(b=e.mSSL()?"https":"http",b=b+"://"+e.mTrackingServer(),a){b=b+"/settings/"+e.mPublisher().replace(o,"-")+".xml"}b+="?"}return b}function l(){var a={r:ADBMobile_platform.getTimeSince1970()};b.call(this,a)}function m(a){if(!a)throw new Error("Error initializing serializeAndSendHeartbeat");this._settingsFn=a,this._asyncQueue=[],this._queue=[],this._currentHit=null}var n=g.instanceWithTag("media/SerializeAndSendHeartbeat"),o=new RegExp("[^a-zA-Z0-9]+","g");a._serializeAndSendHeartbeat={init:m,queueRequestsForResponse:b,queueAsyncRequest:c,flushAsyncRequests:d,asyncStatusRequest:l}}(l),function(a){"use strict";function b(a,b,c){this.taskFn=a,this.scope=b,this.interval=c,this.remainingInterval=c}function c(){this._tasks=[],this._pausedTasks=[]}var d=g.instanceWithTag("media/TaskScheduler");b.prototype.elapsedTime=function(a){this.remainingInterval-=a},b.prototype.shouldExecute=function(){return this.remainingInterval<=0},b.prototype.execute=function(){this.taskFn.call(this.scope)},c.prototype._getCurrentTimeInMS=function(){return(new Date).getTime()},c.prototype._runTasksForTime=function(a){var b=[],c=a-this._lastTickTime;this._lastTickTime=a;for(var d=0;d<this._tasks.length;){var e=this._tasks[d];e.elapsedTime(c),e.shouldExecute()?(b.push(e),this._tasks.splice(d,1)):++d}this._checkStopTimer();for(var f=0;f<b.length;++f)b[f].execute()},c.prototype._onTick=function(){var a=this._getCurrentTimeInMS();this._runTasksForTime(a)},c.prototype._startTimer=function(){var a=this;this._timer||(d.debug("#startTimer()"),a._lastTickTime=this._getCurrentTimeInMS(),this._timer=ADBMobile_platform.setInterval(function(){a._onTick()},e))},c.prototype._stopTimer=function(){this._timer&&(d.debug("#stopTimer()"),ADBMobile_platform.clearInterval(this._timer),this._timer=null)},c.prototype._checkStartTimer=function(){this._tasks.length>0&&this._startTimer()},c.prototype._checkStopTimer=function(){0===this._tasks.length&&this._stopTimer()},c.prototype._removeTask=function(a,b){for(var c=0;c<a.length;++c)if(a[c]===b)return a.splice(c,1),!0;return!1},c.prototype.scheduleTask=function(a,c,e){if(d.debug("#scheduleTask()"),!a)throw new Error("Reference to the taskFn cannot be NULL");var f=new b(a,c,e);return this._tasks.push(f),this._checkStartTimer(),f},c.prototype.cancelTask=function(a){d.debug("#cancelTask()"),this._removeTask(this._tasks,a),this._checkStopTimer()},c.prototype.pauseTask=function(a){d.debug("#pauseTask()"),this._removeTask(this._tasks,a)&&this._pausedTasks.push(a),this._checkStopTimer()},c.prototype.resumeTask=function(a){d.debug("#resumeTask()"),this._removeTask(this._pausedTasks,a)&&this._tasks.push(a),this._checkStartTimer()},c.prototype.clearTasks=function(){this._stopTimer(),this._tasks=[],this._pausedTasks=[]};var e=250;a.TaskScheduler=c}(l),function(a){function b(a,b,c){var d=this._timers[a];d&&(d.timerHandle.restartWithNewInterval(b),o.debug("Updated timer:"+a+" to interval:"+b),c&&(o.debug("Updating the defaultInterval for timer:"+a+" from:"+d.defaultInterval+" to:"+b),d.defaultInterval=b))}function c(a){var b=m.call(this,a);return!!(b&&b.enabled()&&b.ticked())}function d(){var a=this;Object.keys(this._timers).forEach(function(b){a._timers[b].autoStart&&j.call(a,b)}),this._active=!0,this._intervalContext=ADBMobile_platform.setInterval(function(){e.call(a)},250)}function e(){var a=this;Object.keys(this._timers).forEach(function(b){c.call(a,b)&&a._callbackFn&&a._callbackFn(b)})}function f(){if(h.call(this)){var a=this
;Object.keys(this._timers).forEach(function(b){k.call(a,b)}),this._active=!1}}function h(){return this._active}function j(a){var b=this._timers[a];b&&(o.debug("#startTimer starting timer name:"+a),b.timerHandle.start(b.defaultInterval,a))}function k(a){var b=this._timers[a];b&&(o.debug("#stopTimer stopping timer name:"+a),b.timerHandle.stop())}function l(a,b,c){var d={};d.timerHandle=new p,d.defaultInterval=b,d.autoStart=c,this._timers[a]=d,o.debug("#addTimer added timer name:"+a+" interval:"+b)}function m(a){var b=this._timers[a];return b?b.timerHandle:null}function n(a){if(!a)throw new Error("Error initializing ClockService.");this._callbackFn=a,this._reporting_timer="ReportingTimer",this._checkstatus_timer="CheckStatusTimer",this._flushfilter_timer="FlushFilterTimer",this._playhead_timer="PlayheadTimer",this._active=!1,this._timers={},l.call(this,this._reporting_timer,1e4,!0),l.call(this,this._checkstatus_timer,6e4,!0),l.call(this,this._flushfilter_timer,250,!0),l.call(this,this._playhead_timer,1e3,!1)}var o=g.instanceWithTag("media/ClockService"),p=i.Timer;a._clockservice={restartWithNewInterval:b,startClockService:d,stopClockService:f,startTimer:j,stopTimer:k,isActive:h,getTimerHandle:m,init:n}}(l),function(b){function c(){this.delegate=null,this.resetState()}function d(a){this.isInAdValue=a}function f(a){this._isActiveTrackingValue=a}function h(a){this.isInChapterValue=a}function i(){return this._isActiveTrackingValue}function j(a){this._isBufferingValue=a,X.call(this)}function l(){return this._isBufferingValue}function m(a){this._isPausedValue=a,this._playbackStared=!0,X.call(this)}function n(){return this._isPausedValue}function o(){return this._playbackStared&&!this._isPausedValue&&!this._isSeekingValue&&!this._isBufferingValue}function p(){return this._playbackStared}function q(a){this._isSeekingValue=a,X.call(this)}function r(){return this._isSeekingValue}function s(a){this._isInStallValue=a,X.call(this)}function t(){return this._isInStallValue}function u(){return this.isInAdValue}function v(){return this.isInChapterValue}function w(){return this._isSessionActive}function x(a){this._isSessionActive=a}function y(){return this.currMediaInfo}function z(){return this.currAdBreakInfo}function A(){return this.currAdInfo}function B(){return this.currChapterInfo}function C(){var a;return this.delegate&&"function"==typeof this.delegate.getQoSObject?a=this.delegate.getQoSObject():this.delegate&&"function"==typeof this.delegate.getQoSInfo&&(a=this.delegate.getQoSInfo()),a?ca.isValidQoSInfoObject(a)||(ba.warning("QoSInfo object is not valid"),a=null):ba.warning("QoSInfo object not set."),a}function D(){var a=this.currMediaContextData;return a||ba.debug("Media context data is not set."),a}function E(){var a=this.currChapterContextData;return a||ba.debug("Chapter context data is not set."),a}function F(){var a=this.currAdContextData;return a||ba.debug("Ad context data is not set."),a}function G(a){this.currMediaInfo=a}function H(a){this.currAdBreakInfo=a}function I(a){this.currAdInfo=a}function J(a){this.currChapterInfo=a}function K(a){this.currMediaContextData=a}function L(a){this.currAdContextData=a}function M(a){this.currChapterContextData=a}function N(){this.eventTSMap={},this.assetRefContext={},this.setInAdTo(!1),this.setAdInfo(null),this.setAdContextData(null),this.setInChapterTo(!1),this.setChapterInfo(null),this.setChapterContextData(null),this.setAdBreakInfo(null)}function O(){this.setIsActiveTracking(!1),this.setIsActiveSession(!1),this._playbackStared=!1,this._isBufferingValue=!1,this._isInStallValue=!1,this._isPausedValue=!1,this._isSeekingValue=!1,this._isVideoIdleValue=!1,this._idleStateTS=ADBMobile_platform.getTimeSince1970Millis(),this._playhead=0,this.mid=null,this.mid_start=!1,this.aid=null,this.aid_start=!1,this.setMediaInfo(null),this.setMediaContextData(null),N.call(this)}function P(){this.assetRefContext.state=W.call(this),this.assetRefContext.ts=ADBMobile_platform.getTimeSince1970Millis(),this.assetRefContext.playhead=this._playhead}function Q(){return this.assetRefContext}function R(a,b){this.eventTSMap[a]=b}function S(a){return this.eventTSMap[a]||(this.eventTSMap[a]="-1"),this.eventTSMap[a]}function T(a){a&&(!a||"function"!=typeof a.getCurrentPlaybackTime||"function"!=typeof a.getQoSInfo&&"function"!=typeof a.getQoSObject)?ba.error("setDelegate error. The delegate object is required to have the following functions: getCurrentPlaybackTime, getQoSInfo"):this.delegate=a}function U(){return this.delegate}function V(){return this.delegate?(this._playhead=this.delegate.getCurrentPlaybackTime(),this._playhead):(ba.error("Please set the media delegate before starting the video tracking."),-1)}function W(){return this.isInStall()?da.Stall:this.isBuffering()?da.Buffer:this.isPaused()||this.isSeeking()?da.Pause:this.isPlaying()?da.Play:da.Start}function X(){var a=this.isPaused()||this.isBuffering()||this.isSeeking()||this.isInStall();a!=this.isVideoIdle()&&(this._idleStateTS=ADBMobile_platform.getTimeSince1970Millis()),this._isVideoIdleValue=a}function Y(){if(this.isVideoIdle()){var a=this._idleStateTS;return ADBMobile_platform.getTimeSince1970Millis()-a}return 0}function Z(){return this._isVideoIdleValue}function $(){if(!this.mid_start){var a=this;this.mid_start=!0,k.getMarketingCloudIDAsync(function(b){a.mid=b})}return this.mid}function _(){if(!this.aid_start){var b=this;this.aid_start=!0,a.getAIDAsync(function(a){b.aid=a})}return this.aid}function aa(){return e.getUserIdentifier()}var ba=g.instanceWithTag("media/MediaContext"),ca=b.MediaObject,da=b.Constants.PlayerEvent;b._mediacontext={init:c,setInAdTo:d,setIsActiveTracking:f,setInChapterTo:h,isActiveTracking:i,isPaused:n,isPlaying:o,isSeeking:r,isBuffering:l,isInStall:t,hasPlaybackStarted:p,isInAd:u,isInChapter:v,isActiveSession:w,setIsActiveSession:x,setInPaused:m,setInSeeking:q,setInBuffering:j,setInStall:s,getMediaInfo:y,getAdBreakInfo:z,getAdInfo:A,getChapterInfo:B,getQoSInfo:C,getMediaContextData:D,getChapterContextData:E,getAdContextData:F,setMediaInfo:G,setAdBreakInfo:H,setAdInfo:I,setChapterInfo:J,setMediaContextData:K,setAdContextData:L,setChapterContextData:M,resetState:O,resetToResumeState:N,resetAssetRefContext:P,updateTimeStampForEvent:R,getCurrentPlayhead:V,getCurrentPlaybackState:W,getAssetRefContext:Q,getTimeStampForEvent:S,getDurationSinceIdleState:Y,isVideoIdle:Z,getVisitorID:$,getAdobeAnalyticsID:_,getUserID:aa,setDelegate:T,getDelegate:U}}(l),function(a){function b(){var a={};return a[this._analytics_rsid]=null,a[this._analytics_trackingserver]=null,a[this._analytics_ssl]=null,a[this._user_aid]=null,a[this._user_mid]=null,a[this._user_vid]=null,a[this._cuser_id]=null,a[this._cuser_puuid]=null,a[this._service_ovp]=null,a[this._service_sdk]=null,a[this._service_channel]=null,a[this._service_playername]=null,a[this._service_hbversion]=null,a[this._service_apilevel]=null,a[this._event_sid]=null,a[this._event_type]=null,a[this._event_duration]=null,a[this._event_playhead]=null,a[this._event_ts]=null,a[this._event_prevts]=null,a[this._asset_type]=null,a[this._asset_mediaid]=null,a[this._asset_publisher]=null,a[this._asset_length]=null,a[this._asset_name]=null,a[this._asset_adid]=null,a[this._asset_adsid]=null,a[this._asset_adname]=null,a[this._asset_adlength]=null,a[this._asset_resolver]=null,a[this._asset_podid]=null,a[this._asset_adposition_in_pod]=null,a[this._asset_podname]=null,a[this._asset_podoffset]=null,a[this._stream_chapterid]=null,a[this._stream_chaptersid]=null,a[this._stream_chaptername]=null,a[this._stream_chapterpos]=null,a[this._stream_chapterlength]=null,a[this._stream_chapteroffset]=null,a[this._stream_type]=null,a[this._stream_bitrate]=null,a[this._stream_fps]=null,a[this._stream_droppedFrames]=null,a[this._stream_startup_time]=null,a}function c(a){var c=b.call(this);return n.call(this,c),o.call(this,c),p.call(this,c),q.call(this,c),s.call(this,c),r.call(this,c),a==this._aa_start?(t.call(this,c,a),m.call(this,c)):a==this._aa_ad_start?t.call(this,c,a):a==this._media_start?(this._mediaSessionIdValue=null,t.call(this,c,"start"),y.call(this,c)):a==this._ad_start?(this._adSessionIdValue=null,t.call(this,c,"start"),y.call(this,c),z.call(this,c)):a==this._ad_complete?t.call(this,c,"complete"):a==this._chapter_start?(this._chapterSessionIdValue=null,t.call(this,c,a),y.call(this,c),A.call(this,c)):a==this._chapter_complete?t.call(this,c,a):a==this._bitrate_change?t.call(this,c,a):a==this._media_complete?t.call(this,c,"complete"):a==this._media_end?t.call(this,c,"end"):t.call(this,c,a),c[this._event_sid]=B.call(this),I.isInAd()&&a!==this._media_end&&a!==this._chapter_start&&a!==this._chapter_complete&&w.call(this,c),I.isInChapter()&&a!==this._media_end&&x.call(this,c),c}function f(a){var b,c,f={};if(a==this._media_start)b=I.getMediaContextData(),b&&h.append(f,b),c=I.getMediaInfo(),f["a.contentType"]=c.streamType,f["a.media.name"]=c.id,f["a.media.friendlyName"]=c.name,f["a.media.length"]=Math.floor(c.length)||"0",f["a.media.playerName"]=e.mPlayerName(),f["a.media.channel"]=e.mChannel(),f["a.media.vsid"]=B.call(this),f["a.media.view"]="true",f["&&pev3"]="video",f["&&pe"]="ms_s",d.getDpid()&&(f["&&cid.userId.id"]=d.getDpid()),d.getDpuuid()&&(f["&&cid.puuid.id"]=d.getDpuuid());else if(a==this._ad_start){b=I.getMediaContextData();var g=I.getAdContextData();b&&h.append(f,b),g&&h.append(f,g),c=I.getMediaInfo();var j=I.getAdInfo(),k=I.getAdBreakInfo(),l=i.md5(c.id),m=l+"_"+(k.position||""),n=void 0===k.startTime?I.getCurrentPlayhead():k.startTime;f["a.contentType"]=c.streamType,f["a.media.name"]=c.id,f["a.media.friendlyName"]=c.name,f["a.media.length"]=Math.floor(c.length)||"0",f["a.media.playerName"]=e.mPlayerName(),f["a.media.channel"]=e.mChannel(),f["a.media.vsid"]=B.call(this),f["a.media.ad.name"]=j.id,f["a.media.ad.friendlyName"]=j.name,f["a.media.ad.podFriendlyName"]=k.name||"",f["a.media.ad.length"]=Math.floor(j.length)||"0",f["a.media.ad.playerName"]=k.playerName||e.mPlayerName(),f["a.media.ad.pod"]=m,f["a.media.ad.podPosition"]=Math.floor(j.position)||"0",f["a.media.ad.podSecond"]=Math.floor(n)||"0",f["a.media.ad.view"]=!0,f["&&pev3"]="videoAd",f["&&pe"]="msa_s",d.getDpid()&&(f["&&cid.userId.id"]=d.getDpid()),d.getDpuuid()&&(f["&&cid.puuid.id"]=d.getDpuuid())}return f}function l(){this._mediaSessionIdValue=null,this._adSessionIdValue=null,this._chapterSessionIdValue=null}function m(a){d.getDpid()&&(a[this._cuser_id]=d.getDpid()),d.getDpuuid()&&(a[this._cuser_puuid]=d.getDpuuid())}function n(a){a[this._analytics_rsid]=e.reportSuiteIDs(),a[this._analytics_trackingserver]=e.trackingServer(),e.ssl()?a[this._analytics_ssl]=1:a[this._analytics_ssl]=0}function o(a){a[this._user_aid]=I.getAdobeAnalyticsID(),a[this._user_mid]=I.getVisitorID(),a[this._user_vid]=I.getUserID()}function p(a){var b=k.getAnalyticsParameters();b&&(b.aamb&&(a[this._aam_blob]=b.aamb),b.aamlh&&(a[this._aam_loc_hint]=b.aamlh))}function q(a){a[this._service_ovp]=e.mOVP(),a[this._service_sdk]=e.mSDK(),a[this._service_channel]=e.mChannel(),a[this._service_playername]=e.mPlayerName(),a[this._service_hbversion]=j.codeVersion,a[this._service_apilevel]=j.mediaAPILevel}function r(a){var b=I.getMediaInfo();b&&(a[this._stream_type]=b.streamType);var c=I.getQoSInfo();if(c){var d=Number(c.droppedFrames),e=Number(c.startupTime),f=Number(c.fps),g=Number(c.bitrate);isNaN(d)||(a[this._stream_droppedFrames]=Math.floor(d)),isNaN(e)||(a[this._stream_startup_time]=Math.floor(e)),isNaN(f)||(a[this._stream_fps]=Math.floor(f)),isNaN(g)||(a[this._stream_bitrate]=Math.floor(g))}}function s(a){var b=I.getMediaInfo();a[this._asset_type]="main",b&&(a[this._asset_mediaid]=b.id,a[this._asset_length]=Math.floor(b.length),a[this._asset_name]=b.name),a[this._asset_publisher]=e.mPublisher()}function t(a,b){var c=I.getCurrentPlayhead();"number"==typeof c&&(a[this._event_playhead]=Math.floor(c)),a[this._event_type]=b,u.call(this,a,b),v.call(this,a,b)}function u(a,b){var c=b;if(I.isInAd()){c=I.getAdInfo().id+"_"+b}var d=ADBMobile_platform.getTimeSince1970Millis(),e=I.getTimeStampForEvent(c);a[this._event_prevts]=e,a[this._event_ts]=d,I.updateTimeStampForEvent(c,d)}function v(a,b){var c=0,d=I.getAssetRefContext();if(d.state&&d.state===b){var e=0,f=a[this._event_ts];if(null!=f&&null!=d.ts&&(e=Math.abs(f-d.ts)),c=e,e>J)G.warning("Resetting duration to 0 as calculated duration ("+e+" ms) exceeds 10 mins"),c=0;else if(d.state===this._media_event_play&&!I.isInAd()){var g=a[this._event_playhead];if(null!=g&&null!=d.playhead){var h=1e3*Math.abs(g-d.playhead),i=Math.abs(e-h);i>K&&(c=Math.min(e,h),G.warning("Resetting duration to "+c+" ms as calculated error delta ("+i+" ms) exceeds 2 secs"))}}}a[this._event_duration]=c}function w(a){a[this._asset_type]="ad";var b=I.getAdBreakInfo();if(b&&!b._isEmptyAdBreak){a[this._asset_resolver]=b.playerName||e.mPlayerName(),a[this._asset_podname]=b.name,a[this._asset_podoffset]=Math.floor(b.startTime);var c=i.md5(a[this._asset_mediaid]);a[this._asset_podid]=c+"_"+b.position}var d=I.getAdInfo();d&&(a[this._asset_adid]=d.id,a[this._asset_adname]=d.name,a[this._asset_adlength]=Math.floor(d.length),a[this._asset_adposition_in_pod]=d.position),a[this._asset_adsid]=D.call(this)}function x(a){a[this._stream_chaptersid]=C.call(this);var b=I.getChapterInfo();if(b){a[this._stream_chapterpos]=b.position;var c=i.md5(a[this._asset_mediaid]);a[this._stream_chapterid]=c+"_"+a[this._stream_chapterpos],a[this._stream_chaptername]=b.name,a[this._stream_chapteroffset]=Math.floor(b.offset),a[this._stream_chapterlength]=Math.floor(b.length)}}function y(a){var b=I.getMediaContextData();if(b)for(var c in b)if(b.hasOwnProperty(c)){var d=this.metaKey+c;a[d]=b[c]}}function z(a){var b=I.getAdContextData();if(b)for(var c in b)if(b.hasOwnProperty(c)){var d=this.metaKey+c;a[d]=b[c]}}function A(a){var b=I.getChapterContextData();if(b)for(var c in b)if(b.hasOwnProperty(c)){var d=this.metaKey+c;a[d]=b[c]}}function B(){return this._mediaSessionIdValue||(this._mediaSessionIdValue=E.call(this)),this._mediaSessionIdValue}function C(){return this._chapterSessionIdValue||(this._chapterSessionIdValue=E.call(this)),this._chapterSessionIdValue}function D(){return this._adSessionIdValue||(this._adSessionIdValue=E.call(this)),this._adSessionIdValue}function E(){return""+ADBMobile_platform.getTimeSince1970Millis()+Math.floor(1e9*Math.random()+1)}function F(){this._analytics_rsid="s:sc:rsid",this._analytics_trackingserver="s:sc:tracking_server",this._analytics_ssl="h:sc:ssl",this._user_aid="s:user:aid",this._user_mid="s:user:mid",this._user_vid="s:user:id",this._aam_blob="s:aam:blob",this._aam_loc_hint="l:aam:loc_hint",this._cuser_id="s:cuser:userId.id",this._cuser_puuid="s:cuser:puuid.id",this._service_sdk="s:sp:sdk",this._service_apilevel="l:sp:hb_api_lvl",this._service_channel="s:sp:channel",this._service_ovp="s:sp:ovp",this._service_playername="s:sp:player_name",this._service_hbversion="s:sp:hb_version",this._asset_type="s:asset:type",this._asset_publisher="s:asset:publisher",this._asset_mediaid="s:asset:video_id",this._asset_length="l:asset:length",this._asset_name="s:asset:name",this._stream_type="s:stream:type",this._stream_droppedFrames="l:stream:dropped_frames",this._stream_startup_time="l:stream:startup_time",this._stream_fps="l:stream:fps",this._stream_bitrate="l:stream:bitrate",this._stream_chaptersid="s:stream:chapter_sid",this._stream_chapterid="s:stream:chapter_id",this._stream_chaptername="s:stream:chapter_name",this._stream_chapteroffset="l:stream:chapter_offset",this._stream_chapterpos="l:stream:chapter_pos",this._stream_chapterlength="l:stream:chapter_length",this._asset_resolver="s:asset:resolver",this._asset_adid="s:asset:ad_id",this._asset_adsid="s:asset:ad_sid",this._asset_adname="s:asset:ad_name",this._asset_adlength="l:asset:ad_length",this._asset_podid="s:asset:pod_id",this._asset_adposition_in_pod="s:asset:pod_position",this._asset_podname="s:asset:pod_name",this._asset_podoffset="l:asset:pod_offset",this._event_sid="s:event:sid",this._event_ts="l:event:ts",this._event_prevts="l:event:prev_ts",this._event_type="s:event:type",this._event_duration="l:event:duration",this._event_playhead="l:event:playhead",this._mediaSessionIdValue=null,this._chapterSessionIdValue=null,this._adSessionIdValue=null,this.metaKey="s:meta:",this._aa_start="aa_start",this._aa_ad_start="aa_ad_start",this._bitrate_change="bitrate_change",this._chapter_start="chapter_start",this._chapter_complete="chapter_complete",this._ad_start="media-ad-start",this._ad_complete="media-ad-complete",this._media_start="media-start",this._media_complete="media-complete",this._media_end="media-end",this._media_resume="resume",this._media_event_play=H.Play,this._media_event_pause=H.Pause,this._media_event_buffer=H.Buffer,this._media_event_stall=H.Stall,this._media_event_start=H.Start,this._error="error"}var G=g.instanceWithTag("media/ParamsResolver"),H=a.Constants.PlayerEvent,I=a._mediacontext,J=6e5,K=2e3;a._paramsResolver={init:F,resolveDataForEvent:c,getContextData:f,resetSessionIds:l}}(l),function(a){function c(){Ha.init(v.bind(this)),Fa.init(u.bind(this)),Ga.init(),Ia.init(),this._isEnabled=e.mediaHearbeatEnabled(),this._taskScheduler=new Ca,this._ruleEngine=new Ba,va.call(this),wa.call(this)}function d(){return this._isEnabled}function f(){this._isEnabled=!0}function i(){this._isEnabled=!1}function j(a,b){za.debug("#::trackSessionStart()");var c=Ba.createContext();c.setData(Ma,a),c.setData(Qa,ya(b)),ua.call(this,Ja.SessionStart,c)}function k(){za.debug("#::trackSessionEnd()"),ua.call(this,Ja.SessionEnd)}function l(){za.debug("#::trackPlay()"),ua.call(this,Ja.Play)}function m(){za.debug("#::trackPause()"),ua.call(this,Ja.Pause)}function n(){za.debug("#::trackComplete()"),ua.call(this,Ja.VideoComplete)}function o(a){za.debug("#::trackError()");var b=Ba.createContext();b.setData(Ra,a||"unknown_error_id"),b.setData(Sa,"sourceErrorSDK"),ua.call(this,Ja.Error,b)}function p(a,b,c){za.debug("#::trackEvent("+a+")");var d,e=Ba.createContext();switch(a){case Aa.AdBreakStart:e.setData(Na,b),e.setData(Qa,ya(c)),d=Ja.AdBreakStart;break;case Aa.AdBreakComplete:case Aa.AdBreakSkip:d=Ja.AdBreakComplete;break;case Aa.AdStart:e.setData(Oa,b),e.setData(Qa,ya(c)),d=Ja.AdStart;break;case Aa.AdComplete:d=Ja.AdComplete;break;case Aa.AdSkip:d=Ja.AdSkip;break;case Aa.SeekStart:d=Ja.SeekStart;break;case Aa.SeekComplete:d=Ja.SeekComplete;break;case Aa.ChapterStart:e.setData(Pa,b),e.setData(Qa,ya(c)),d=Ja.ChapterStart;break;case Aa.ChapterComplete:d=Ja.ChapterComplete;break;case Aa.ChapterSkip:d=Ja.ChapterSkip;break;case Aa.BufferStart:d=Ja.BufferStart;break;case Aa.BufferComplete:d=Ja.BufferComplete;break;case Aa.BitrateChange:d=Ja.BitrateChange;break;default:return void za.error("#::trackEvent() - Unsupported event.")}ua.call(this,d,e)}function q(a){za.debug("#::setDelegate()"),e.mediaHearbeatEnabled()?Ia.setDelegate(a):za.debug("#::setDelegate: ADB Media is not configured correctly.")}function r(a,b){za.debug("[Deprecated] #trackLoad()"),this._trackLoadInfo={mediaInfo:a,contextData:b}}function s(){za.debug("[Deprecated] #trackStart()"),this._trackLoadInfo?j.call(this,this._trackLoadInfo.mediaInfo,this._trackLoadInfo.contextData):za.debug("[Deprecated] Call #trackLoad(mediaInfo, contextData) before #trackStart()")}function t(){za.debug("[Deprecated] #trackUnload()"),k.call(this)}function u(a){switch(a){case Fa._checkstatus_timer:Ha.asyncStatusRequest();break;case Fa._flushfilter_timer:Ha.flushAsyncRequests();break;case Fa._reporting_timer:x.call(this);break;case Fa._playhead_timer:w.call(this)}}function v(a){if(a.setupCheckInterval)if("number"==typeof a.setupCheckInterval){za.debug("hbSettingsCallback: Updating the check status interval to: "+a.setupCheckInterval);var b=1e3*a.setupCheckInterval;Fa.restartWithNewInterval(Fa._checkstatus_timer,b,!0)}else za.debug("hbSettingsCallback: Interval not an Integer");else za.debug("hbSettingsCallback: setupCheckInterval is invalid")}function w(){var a=Ia.getCurrentPlayhead(),b=Ba.createContext();b.setData(Ta,a),ta.call(this,b),qa.call(this,b)}function x(){z.call(this)&&(na.call(this),ma.call(this))}function y(){return Ia.isActiveTracking()}function z(){return Ia.isActiveSession()}function A(){return!!Ia.getDelegate()}function B(){return Ia.isInAd()}function C(){return!!Ia.getAdBreakInfo()}function D(){return Ia.isInChapter()}function E(){return Ia.isBuffering()}function F(){return Ia.isSeeking()}function G(a){var b=a.getData(Ma);if(b&&Ea.isValidMediaInfoObject(b)){var c=b[Da.VideoResumed];null!=c&&"boolean"!=typeof c&&za.warning("Ignoring value set for MediaObjectKey.VideoResumed in MediaObject as we expect a boolean value");var d=b[Da.PrerollTrackingWaitingTime];if(null!=d){("string"==typeof d||"number"==typeof d)&&!isNaN(d)||za.warning("Ignoring value set for MediaObjectKey.PrerollTrackingWaitingTime in MediaObject as we expect a valid duration as number in milliseconds.")}var e=b[Da.StandardVideoMetadata];return null!=e&&"object"!=typeof e&&za.warning("Ignoring value set for MediaObjectKey.StandardVideoMetadata in MediaObject as we expect a valid object with kv pairs."),!0}return!1}function H(a){var b=a.getData(Na);return b&&Ea.isValidAdBreakInfoObject(b)}function I(a){var b=a.getData(Na),c=Ia.getAdBreakInfo();return!(c&&Ea.isSameAdBreakInfoObject(c,b))}function J(a){var b=a.getData(Oa);if(b&&Ea.isValidAdBreakInfoObject(b)){var c=b[La];null!=c&&"boolean"!=typeof c&&za.warning("Ignoring value set for MediaObjectKey.GranularAdTracking in AdObject as we expect a boolean value.");var d=b[Da.StandardAdMetadata];return null!=d&&"object"!=typeof d&&za.warning("Ignoring value set for MediaObjectKey.StandardAdMetadata in AdObject as we expect a valid object with kv pairs."),!0}return!1}function K(a){var b=a.getData(Oa),c=Ia.getAdInfo();return!(c&&Ea.isSameAdInfoObject(c,b))}function L(a){var b=a.getData(Pa);return b&&Ea.isValidChapterInfoObject(b)}function M(a){var b=a.getData(Pa),c=Ia.getChapterInfo();return!(c&&Ea.isSameChapterInfoObject(c,b))}function N(){this._prerollWaitEnabled&&(za.debug("Executing deferred API:trackPlay."),this._prerollWaitEnabled=!1,this._playTaskHandle=null,ua.call(this,Ja.Play))}function O(a){var b=a.getRuleName();if(this._prerollWaitEnabled)if(this._playReceived)switch(b){case Ja.SeekStart:case Ja.BufferStart:za.debug("Cancelling scheduled API:trackPlay because of SeekStart/BufferStart event"),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null;break;case Ja.SeekComplete:case Ja.BufferComplete:za.debug("Rescheduled API:trackPlay after SeekComplete/BufferComplete event"),this._playTaskHandle=this._taskScheduler.scheduleTask(N,this,this._prerollWaitTime);break;case Ja.Play:za.debug("Dropping API:trackPlay as we already have a API:trackPlay scheduled."),a.stopProcessingAction();break;case Ja.Pause:za.debug("Cancelling scheduled API:trackPlay because of API:trackPause call."),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null,this._prerollWaitEnabled=!1;break;case Ja.AdBreakStart:za.debug("Received API:trackEvent(AdBreakStart) within "+this._prerollWaitTime+" ms after API:trackPlay. We will track this as preroll AdBreak."),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null,this._prerollWaitEnabled=!1}else switch(b){case Ja.Play:za.debug("Deferring API:trackPlay for "+this._prerollWaitTime+" ms."),this._playReceived=!0,this._playTaskHandle=this._taskScheduler.scheduleTask(N,this,this._prerollWaitTime),a.stopProcessingAction();break;case Ja.AdBreakStart:za.debug("Received trackEvent(AdBreakStart) before first trackPlay."),this._prerollWaitEnabled=!1}}function P(a){a.getRuleName()!==Ja.AdStart||Ia.hasPlaybackStarted()||ua.call(this,Ja.Play)}function Q(){Fa.startClockService(),Ha.asyncStatusRequest()}function R(a){var b=a.getData(Ma),c=a.getData(Qa)||{},d=b[Da.StandardVideoMetadata];d&&"object"==typeof d&&h.append(c,ya(d));var e=b[Da.PrerollTrackingWaitingTime];"string"!=typeof e&&"number"!=typeof e||isNaN(e)||(this._prerollWaitTime=Number(e),this._prerollWaitTime<=0&&(this._prerollWaitEnabled=!1));var f=!!b[Da.VideoResumed];Ia.setMediaInfo(b),Ia.setMediaContextData(c),Ia.setIsActiveTracking(!0),Ia.setIsActiveSession(!0),xa.call(this,Ga._media_start),f&&xa.call(this,Ga._media_resume),Ia.resetAssetRefContext()}function S(a){Ia.isActiveSession()||(za.debug("API:trackComplete has already cleaned up Heartbeat instance."),U.call(this,a),a.stopProcessingAction())}function T(a){if(Ia.isActiveSession()){var b=a.getRuleName()===Ja.VideoComplete?Ga._media_complete:Ga._media_end;xa.call(this,b),Ia.setIsActiveSession(!1)}}function U(){Fa.stopClockService(),Ha.flushAsyncRequests(),Ia.setIsActiveTracking(!1),wa.call(this)}function V(a){var b=a.getData(Na);Ia.setAdBreakInfo(b)}function W(){Ia.setAdBreakInfo(null)}function X(a){var b=a.getData(Oa),c=a.getData(Qa)||{},d=b[Da.StandardAdMetadata];d&&"object"==typeof d&&h.append(c,ya(d)),Ia.setInAdTo(!0),Ia.setAdInfo(b),Ia.setAdContextData(c),xa.call(this,Ga._ad_start),Ia.resetAssetRefContext();var e=!0,f=b[La];"boolean"==typeof f&&(e=f,za.debug("#::_cmdAdStart() Overriding granularAdTracking flag to:"+e)),e&&(Fa.restartWithNewInterval(Fa._reporting_timer,Xa),za.debug("#::_cmdAdStart() Setting AD tracking granularity to:"+Xa+"ms"))}function Y(){xa.call(this,Ga._ad_complete),Ia.setInAdTo(!1),Ia.setAdContextData(null),Ia.setAdInfo(null),Ia.resetAssetRefContext(),Fa.restartWithNewInterval(Fa._reporting_timer,Ya)}function Z(){Ia.isInAd()&&(Ia.setInAdTo(!1),Ia.setAdInfo(null),Ia.setAdContextData(null),Ia.resetAssetRefContext(),Fa.restartWithNewInterval(Fa._reporting_timer,Ya))}function $(a){var b=a.getData(Pa),c=a.getData(Qa);Ia.setInChapterTo(!0),Ia.setChapterInfo(b),Ia.setChapterContextData(c),xa.call(this,Ga._chapter_start),Ia.resetAssetRefContext(),Ia.isPlaying()&&ma.call(this,a)}function _(){xa.call(this,Ga._chapter_complete),Ia.setInChapterTo(!1),Ia.setChapterInfo(null),Ia.setChapterContextData(null),Ia.resetAssetRefContext()}function aa(){Ia.isInChapter()&&(Ia.setInChapterTo(!1),Ia.setChapterInfo(null),Ia.setChapterContextData(null),Ia.resetAssetRefContext())}function ba(){Ia.setInPaused(!1),Ia.resetAssetRefContext()}function ca(){Ia.setInPaused(!0),Ia.resetAssetRefContext()}function da(){Ia.setInSeeking(!0),Ia.resetAssetRefContext()}function ea(){Ia.isSeeking()&&(Ia.setInSeeking(!1),Ia.resetAssetRefContext())}function fa(){Ia.setInBuffering(!0),Ia.resetAssetRefContext()}function ga(){Ia.isBuffering()&&(Ia.setInBuffering(!1),Ia.resetAssetRefContext())}function ha(){za.debug("#::_cmdStartPlayheadTimer()"),Fa.startTimer(Fa._playhead_timer)}function ia(){za.debug("#::_cmdStopPlayheadTimer()"),Fa.stopTimer(Fa._playhead_timer),sa.call(this)}function ja(a){var b=Fa.getTimerHandle(Fa._reporting_timer);b&&b.elapsedTime()>250&&ma.call(this,a)}function ka(){xa.call(this,Ga._bitrate_change)}function la(a){var b=a.getData(Ra),c=a.getData(Sa),d={"s:event:source":c,"s:event:id":b};xa.call(this,Ga._error,d)}function ma(){if(za.debug("#_cmdTrackPlaybackState()"),this._isTrackingSuspended)return void za.debug("#_cmdTrackPlaybackState: Tracking Suspended, not sending any ping.");if(Ia.isSeeking())return void za.debug("#_cmdTrackPlaybackState: In Seek State, not sending any ping.");xa.call(this,Ia.getCurrentPlaybackState()),Ia.resetAssetRefContext();var a=Fa.getTimerHandle(Fa._reporting_timer);a&&a.reset()}function na(){if(this._isTrackingSuspended){if(Ia.isVideoIdle())return void za.debug("#_cmdDetectVideoIdle: [Video idle] Stays in suspendTracking");za.debug("#_cmdDetectVideoIdle: [Video resumes] suspendTracking -> resumeTracking"),pa.call(this)}if(Ia.isVideoIdle()&&Ia.getDurationSinceIdleState()>Va)return za.debug("#_cmdDetectVideoIdle: [Video idle] Enters suspendTracking"),void oa.call(this)}function oa(){za.debug("#_suspendTracking()"),xa.call(this,Ga._media_end),this._isTrackingSuspended=!0}function pa(){za.debug("#_resumeTracking()");var a,b,c,d,e,f=!1,g=!1;Ia.isInAd()&&(f=!0,a=Ia.getAdInfo(),b=Ia.getAdContextData(),c=Ia.getAdBreakInfo()),Ia.isInChapter()&&(g=!0,d=Ia.getChapterInfo(),e=Ia.getChapterContextData()),Ia.resetToResumeState(),Ga.resetSessionIds(),this._isTrackingSuspended=!1,xa.call(this,Ga._media_start),xa.call(this,Ga._media_resume),g&&(Ia.setInChapterTo(!0),Ia.setChapterInfo(d),Ia.setChapterContextData(e),xa.call(this,Ga._chapter_start)),f&&(Ia.setInAdTo(!0),Ia.setAdBreakInfo(c),Ia.setAdInfo(a),Ia.setAdContextData(b),xa.call(this,Ga._ad_start)),ma.call(this)}function qa(a){if(!Ia.isInAd()){var b=a.getData(Ta);b!=this._previousPlayhead?sa.call(this):this._previousPlayhead>=0&&!Ia.isInStall()&&++this._stalledPlayheadCount>=Ua&&ra.call(this),this._previousPlayhead=b}}function ra(){za.debug("#_cmdStallStart()"),ja.call(this,null),Ia.setInStall(!0),Ia.resetAssetRefContext()}function sa(){Ia.isInStall()&&(za.debug("#_cmdStallComplete()"),ja.call(this,null),Ia.setInStall(!1),Ia.resetAssetRefContext()),this._stalledPlayheadCount=0}function ta(a){if(!this._contentStarted&&!Ia.isInAd()&&Ia.isPlaying()){var b=a.getData(Ta);null==this._firstContentPlayhead?this._firstContentPlayhead=b:b>this._firstContentPlayhead&&(za.debug("#_cmdDetectContentStart Sending Content Start Ping"),ma.call(this,a),this._contentStarted=!0)}}function ua(a,b){return this._ruleEngine.processRule(a,b)}function va(){this._ruleEngine.registerEnterExitAction(O,P),this._ruleEngine.registerRule(Ja.SessionStart,"API:trackSessionStart",[Ba.createPredicate(A,!0,Ka.ErrNoDelegate),Ba.createPredicate(y,!1,Ka.ErrInTracking),Ba.createPredicate(G,!0,Ka.ErrInvalidMediaObject)],[Q,R],this),this._ruleEngine.registerRule(Ja.SessionEnd,"API:trackSessionEnd",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking)],[S,ja,Z,W,aa,T,U],this),this._ruleEngine.registerRule(Ja.VideoComplete,"API:trackComplete",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia)],[ja,ia,Z,W,aa,T],this),this._ruleEngine.registerRule(Ja.Error,"API:trackError",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia)],[la],this),this._ruleEngine.registerRule(Ja.Play,"API:trackPlay",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia)],[ja,ea,ga,ba,na,ma,ha],this),this._ruleEngine.registerRule(Ja.Pause,"API:trackPause",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(E,!1,Ka.ErrInBuffer),Ba.createPredicate(F,!1,Ka.ErrInSeek)],[ja,ia,ca,ma],this),this._ruleEngine.registerRule(Ja.BufferStart,"API:trackEvent(BufferStart)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(E,!1,Ka.ErrInBuffer),Ba.createPredicate(F,!1,Ka.ErrInSeek)],[ja,ia,fa,ma],this),this._ruleEngine.registerRule(Ja.BufferComplete,"API:trackEvent(BufferComplete)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(E,!0,Ka.ErrNotInBuffer)],[ja,ga,na,ha],this),this._ruleEngine.registerRule(Ja.SeekStart,"API:trackEvent(SeekStart)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(E,!1,Ka.ErrInBuffer),Ba.createPredicate(F,!1,Ka.ErrInSeek)],[ja,ia,da],this),this._ruleEngine.registerRule(Ja.SeekComplete,"API:trackEvent(SeekComplete)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(F,!0,Ka.ErrNotInSeek)],[ja,ea,na,ha],this),this._ruleEngine.registerRule(Ja.AdBreakStart,"API:trackEvent(AdBreakStart)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(H,!0,Ka.ErrInvalidAdBreakObject),Ba.createPredicate(I,!0,Ka.ErrDuplicateAdBreakObject)],[ja,Z,W,V],this),this._ruleEngine.registerRule(Ja.AdBreakComplete,"API:trackEvent(AdBreakComplete)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(C,!0,Ka.ErrNotInAdBreak)],[ja,Z,W],this),
this._ruleEngine.registerRule(Ja.AdStart,"API:trackEvent(AdStart)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(C,!0,Ka.ErrNotInAdBreak),Ba.createPredicate(J,!0,Ka.ErrInvalidAdObject),Ba.createPredicate(K,!0,Ka.ErrDuplicateAdObject)],[ja,Z,X],this),this._ruleEngine.registerRule(Ja.AdComplete,"API:trackEvent(AdComplete)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(C,!0,Ka.ErrNotInAdBreak),Ba.createPredicate(B,!0,Ka.ErrNotInAd)],[ja,Y],this),this._ruleEngine.registerRule(Ja.AdSkip,"API:trackEvent(AdSkip)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(C,!0,Ka.ErrNotInAdBreak),Ba.createPredicate(B,!0,Ka.ErrNotInAd)],[ja,Z],this),this._ruleEngine.registerRule(Ja.ChapterStart,"API:trackEvent(ChapterStart)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(L,!0,Ka.ErrInvalidChapterObject),Ba.createPredicate(M,!0,Ka.ErrDuplicateChapterObject)],[ja,aa,$],this),this._ruleEngine.registerRule(Ja.ChapterComplete,"API:trackEvent(ChapterComplete)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(D,!0,Ka.ErrNotInChapter)],[ja,_],this),this._ruleEngine.registerRule(Ja.ChapterSkip,"API:trackEvent(ChapterSkip)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia),Ba.createPredicate(D,!0,Ka.ErrNotInChapter)],[ja,aa],this),this._ruleEngine.registerRule(Ja.BitrateChange,"API:trackEvent(BitrateChange)",[Ba.createPredicate(y,!0,Ka.ErrNotInTracking),Ba.createPredicate(z,!0,Ka.ErrNotInMedia)],[ka],this)}function wa(){this._isTrackingSuspended=!1,this._previousPlayhead=-1,this._stalledPlayheadCount=0,this._trackLoadInfo=null,this._prerollWaitEnabled=!0,this._prerollWaitTime=Wa,this._playReceived=!1,this._playTaskHandle=null,this._contentStarted=!1,this._firstContentPlayhead=null,this._taskScheduler.clearTasks(),Ia.resetState(),Ga.resetSessionIds()}function xa(a,c){if(za.debug("#sendHit( "+a+" )"),this._isTrackingSuspended)return void za.debug("#sendHit( "+a+" ) - inIdleState");if(this._spyHook_&&"function"==typeof this._spyHook_)return void this._spyHook_.apply(this,arguments);var d=Ga.resolveDataForEvent(a);c&&h.append(d,c),Ha.queueAsyncRequest(d);var e;if(a===Ga._media_start){e=Ga.getContextData(Ga._media_start),b.trackAction("",e);var f=Ga.resolveDataForEvent(Ga._aa_start);Ha.queueAsyncRequest(f)}else if(a===Ga._ad_start){e=Ga.getContextData(Ga._ad_start),b.trackAction("",e);var g=Ga.resolveDataForEvent(Ga._aa_ad_start);Ha.queueAsyncRequest(g)}}function ya(a){if(null==a||"object"!=typeof a)return null;var b={};for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];"number"!=typeof d&&"string"!=typeof d&&"boolean"!=typeof d||(b[c]=d)}return b}var za=g.instanceWithTag("media/MediaHeartbeat"),Aa=a.Constants.Event,Ba=a.RuleEngine,Ca=a.TaskScheduler,Da=a.Constants.MediaObjectKey,Ea=a.MediaObject,Fa=a._clockservice,Ga=a._paramsResolver,Ha=a._serializeAndSendHeartbeat,Ia=a._mediacontext,Ja={SessionStart:0,SessionEnd:1,VideoComplete:2,Play:3,Pause:4,Error:5,AdBreakStart:6,AdBreakComplete:7,AdStart:8,AdComplete:9,AdSkip:10,ChapterStart:11,ChapterComplete:12,ChapterSkip:13,SeekStart:14,SeekComplete:15,BufferStart:16,BufferComplete:17,BitrateChange:18,TimedMetadataUpdate:19},Ka={ErrNoDelegate:'Media module has no delegate set, call "API:setDelegate" to set a valid delgate before starting a tracking session.',ErrNotInTracking:'Media module is not in active tracking session, call "API:trackSessionStart" to begin a new tracking session.',ErrInTracking:'Media module is in active tracking session, call "API:trackSessionEnd" to end current tracking session.',ErrNotInMedia:'Media module has completed tracking session, call "API:trackSessionEnd" first to end current session and then begin a new tracking session.',ErrInBuffer:'Media module is tracking buffer events, call "API:trackEvent(BufferComplete)" first to stop tracking buffer events.',ErrNotInBuffer:'Media module is not tracking buffer events, call "API:trackEvent(BufferStart)" before "API:trackEvent(BufferComplete)".',ErrInSeek:'Media module is tracking seek events, call "API:trackEvent(SeekComplete)" first to stop tracking seek events.',ErrNotInSeek:'Media module is not tracking seek events, call "API:trackEvent(SeekStart)" before "API:trackEvent(SeekComplete)".',ErrNotInAdBreak:'Media module is not tracking any AdBreak, call "API:trackEvent(AdBreakStart)" to begin tracking AdBreak',ErrNotInAd:'Media module is not tracking any Ad, call "API:trackEvent(AdStart)" to begin tracking Ad',ErrNotInChapter:'Media module is not tracking any Chapter, call "API:trackEvent(ChapterStart)" to begin tracking Chapter',ErrInvalidMediaObject:'MediaInfo passed into "API:trackSessionStart" is invalid.',ErrInvalidAdBreakObject:'AdBreakInfo passed into "API:trackEvent(AdBreakStart)" is invalid.',ErrDuplicateAdBreakObject:'Media module is currently tracking the AdBreak passed into "API:trackEvent(AdBreakStart)".',ErrInvalidAdObject:'AdInfo passed into "API:trackEvent(AdStart)" is invalid.',ErrDuplicateAdObject:'Media module is currently tracking the Ad passed into "API:trackEvent(AdStart)".',ErrInvalidChapterObject:'ChapterInfo passed into "API:trackEvent(ChapterStart)" is invalid.',ErrDuplicateChapterObject:'Media module is currently tracking the Chapter passed into "API:trackEvent(ChapterStart)".',ErrInvalidTimedMetadataObject:'TimedMetadata passed into "API:trackEvent(TimedMetadataUpdate)" is invalid.'},La="granular_ad_tracking",Ma="key_media_object",Na="key_adbreak_object",Oa="key_ad_object",Pa="key_chapter_object",Qa="key_custom_metadata",Ra="key_error_id",Sa="key_error_source",Ta="key_playhead",Ua=2,Va=18e5,Wa=250,Xa=1e3,Ya=1e4;a._mediaHeartbeat={init:c,isEnabled:d,enable:f,disable:i,setDelegate:q,trackSessionStart:j,trackSessionEnd:k,trackPlay:l,trackPause:m,trackComplete:n,trackEvent:p,trackError:o,trackLoad:r,trackUnload:t,trackStart:s},a._MediaHeartbeatErrorMessage=Ka}(l),function(a){var b=a._mediaHeartbeat,c=a.Constants,d=a.MediaObject;a.init=b.init.bind(b),a.enable=b.enable.bind(b),a.isEnabled=b.isEnabled.bind(b),a.disable=b.disable.bind(b),a.setDelegate=b.setDelegate.bind(b),a.trackSessionStart=b.trackSessionStart.bind(b),a.trackSessionEnd=b.trackSessionEnd.bind(b),a.trackPlay=b.trackPlay.bind(b),a.trackPause=b.trackPause.bind(b),a.trackComplete=b.trackComplete.bind(b),a.trackEvent=b.trackEvent.bind(b),a.trackError=b.trackError.bind(b),a.trackStart=b.trackStart.bind(b),a.trackLoad=b.trackLoad.bind(b),a.trackUnload=b.trackUnload.bind(b),a.StreamType=c.StreamType,a.Event=c.Event,a.MediaObjectKey=c.MediaObjectKey,a.VideoMetadataKeys=c.VideoMetadataKeys,a.AdMetadataKeys=c.AdMetadataKeys,a.createMediaObject=d.createMediaObject,a.createAdBreakObject=d.createAdBreakObject,a.createChapterObject=d.createChapterObject,a.createAdObject=d.createAdObject,a.createQoSObject=d.createQoSObject,a.MediaInfo=d.MediaInfo,a.AdBreakInfo=d.AdBreakInfo,a.AdInfo=d.AdInfo,a.ChapterInfo=d.ChapterInfo,a.QoSInfo=d.QoSInfo}(l);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(b=b.toString(),this.values)for(var c=0;c<this.values.length;++c)if(-1!==b.indexOf(this.values[c]))return!0;return!1},a.MatcherContains=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){var c=a.length-b.length,d=a.lastIndexOf(b,c);return-1!==d&&d===c}function c(a,b){this.key=a,this.values=b}c.prototype.matches=function(a){var c=a[this.key];if("string"!=typeof c&&"number"!=typeof c)return!1;if(c=c.toString(),this.values)for(var d=0;d<this.values.length;++d)if(b(c,this.values[d].toString()))return!0;return!1},a.MatcherEndsWith=c}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(b=b.toString(),this.values)for(var c=0;c<this.values.length;++c)if(b===this.values[c].toString())return!0;return!1},a.MatcherEquals=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){return void 0!==a[this.key]},a.MatcherExists=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(isNaN(Number(b)))return!1;if(this.values)for(var c=0;c<this.values.length;++c)if(Number(b)>Number(this.values[c]))return!0;return!1},a.MatcherGreaterThan=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(isNaN(Number(b)))return!1;if(this.values)for(var c=0;c<this.values.length;++c)if(Number(b)>=Number(this.values[c]))return!0;return!1},a.MatcherGreaterThanOrEqual=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(isNaN(Number(b)))return!1;if(this.values)for(var c=0;c<this.values.length;++c)if(Number(b)<Number(this.values[c]))return!0;return!1},a.MatcherLessThan=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){this.key=a,this.values=b}b.prototype.matches=function(a){var b=a[this.key];if("string"!=typeof b&&"number"!=typeof b)return!1;if(isNaN(Number(b)))return!1;if(this.values)for(var c=0;c<this.values.length;++c)if(Number(b)<=Number(this.values[c]))return!0;return!1},a.MatcherLessThanOrEqual=b}(m);var m=m||{};!function(a){"use strict";function b(b,c){this.containsHandler=new a.MatcherContains(b,c)}b.prototype.matches=function(a){return!this.containsHandler.matches(a)},a.MatcherNotContains=b}(m);var m=m||{};!function(a){"use strict";function b(b,c){this.equalsHandler=new a.MatcherEquals(b,c)}b.prototype.matches=function(a){return!this.equalsHandler.matches(a)},a.MatcherNotEquals=b}(m);var m=m||{};!function(a){"use strict";function b(b,c){this._handler=new a.MatcherExists(b,c)}b.prototype.matches=function(a){return!this._handler.matches(a)},a.MatcherNotExists=b}(m);var m=m||{};!function(a){"use strict";function b(a,b){return 0===a.indexOf(b)}function c(a,b){this.key=a,this.values=b}c.prototype.matches=function(a){var c=a[this.key];if("string"!=typeof c&&"number"!=typeof c)return!1;if(c=c.toString(),this.values)for(var d=0;d<this.values.length;++d)if(b(c,this.values[d].toString()))return!0;return!1},a.MatcherStartsWith=c}(m);var n=function(){function a(a){return this.JSON_CONFIG_TEMPLATE="template",this.JSON_CONFIG_MESSAGE_ID="messageId",this.JSON_CONFIG_SHOW_RULE="showRule",this.JSON_CONFIG_START_DATE="startDate",this.MESSAGE_JSON_PAYLOAD="payload",this.JSON_CONFIG_END_DATE="endDate",this.JSON_CONFIG_SHOW_OFFLINE="showOffline",this.JSON_CONFIG_AUDIENCES="audiences",this.JSON_CONFIG_TRIGGERS="triggers",this.JSON_CONFIG_ASSETS="assets",this.MESSAGE_IMAGE_CACHE_DIR="messageImages",this.JSON_DEFAULT_START_DATE=0,this.JSON_DEFAULT_SHOW_OFFLINE="false",this.MESSAGE_ENUM_STRING_UNKNOWN="unknown",this.MESSAGE_SHOW_RULE_STRING_ALWAYS="always",this.MESSAGE_SHOW_RULE_STRING_ONCE="once",this.MESSAGE_SHOW_RULE_STRING_UNTIL_CLICK="untilClick",this.MESSAGE_TEMPLATE_STRING_ALERT="alert",this.MESSAGE_TEMPLATE_STRING_FULLSCREEN="fullscreen",this.MESSAGE_TEMPLATE_STRING_LOCAL_NOTIFICATION="local",this.MESSAGE_TEMPLATE_STRING_CALLBACK="callback",this.MESSAGE_TYPE_HANDLER="handler",this.MESSAGE_TYPE="type",this.COMBINED_VARS="combinedVars",this.ADB_TEMPLATE_CALLBACK_URL="templateurl",this.ADB_TEMPLATE_CALLBACK_BODY="templatebody",this.ADB_TEMPLATE_CALLBACK_TYPE="contenttype",this.ADB_TEMPLATE_CALLBACK_TIMEOUT="timeout",this.ADB_TEMPLATE_TOKEN_START="{",this.ADB_TEMPLATE_TOKEN_END="}",this.ADB_TEMPLATE_TIMEOUT_DEFAULT=2,this.message={},this.message[this.JSON_CONFIG_MESSAGE_ID]="",this.message[this.JSON_CONFIG_TEMPLATE]="",this.message[this.MESSAGE_TYPE_HANDLER]=null,this.message[this.JSON_CONFIG_START_DATE]=this.JSON_DEFAULT_START_DATE,this.message[this.JSON_CONFIG_END_DATE]=null,this.message[this.JSON_DEFAULT_SHOW_OFFLINE]=this.JSON_DEFAULT_SHOW_OFFLINE,this.message[this.JSON_CONFIG_AUDIENCES]=[],this.message[this.JSON_CONFIG_TRIGGERS]=[],this.message[this.MESSAGE_TYPE]=null,this.message[this.COMBINED_VARS]={},this.validLetters={},this.validLetters.a=1,this.validLetters.b=1,this.validLetters.c=1,this.validLetters.d=1,this.validLetters.e=1,this.validLetters.f=1,this.validLetters.g=1,this.validLetters.h=1,this.validLetters.i=1,this.validLetters.j=1,this.validLetters.k=1,this.validLetters.l=1,this.validLetters.m=1,this.validLetters.n=1,this.validLetters.o=1,this.validLetters.p=1,this.validLetters.q=1,this.validLetters.r=1,this.validLetters.s=1,this.validLetters.t=1,this.validLetters.u=1,this.validLetters.v=1,this.validLetters.w=1,this.validLetters.x=1,this.validLetters.y=1,this.validLetters.z=1,this.validLetters[0]=1,this.validLetters[1]=1,this.validLetters[2]=1,this.validLetters[3]=1,this.validLetters[4]=1,this.validLetters[5]=1,this.validLetters[6]=1,this.validLetters[7]=1,this.validLetters[8]=1,this.validLetters[9]=1,this.validLetters._=1,this.validLetters["."]=1,this.validLetters["%"]=1,b.call(this,a)?this:(g.warning("Message - Initialization failed"),null)}function b(a){if("object"==typeof a)return a[this.JSON_CONFIG_TEMPLATE]?(this.message[this.JSON_CONFIG_TEMPLATE]=a[this.JSON_CONFIG_TEMPLATE],this.message[this.JSON_CONFIG_TEMPLATE]!=this.MESSAGE_TEMPLATE_STRING_CALLBACK?(g.warning("Message - unable to create instance of message with that template"),!1):(this.message[this.MESSAGE_TYPE]=this.MESSAGE_TEMPLATE_STRING_CALLBACK,c.call(this,a))):(g.warning("Message - template is required for postback message"),!1)}function c(a){if(a){if(!a[this.JSON_CONFIG_MESSAGE_ID]||""===a[this.JSON_CONFIG_MESSAGE_ID])return g.warning("Message - unable to create instance of message without message id"),!1;if(this.message[this.JSON_CONFIG_MESSAGE_ID]=a[this.JSON_CONFIG_MESSAGE_ID],!a[this.MESSAGE_JSON_PAYLOAD])return g.warning("Data Callback - Unable to create data callback. payload is empty"),!1;this.message[this.MESSAGE_JSON_PAYLOAD]=a[this.MESSAGE_JSON_PAYLOAD];if(!d.call(this))return!1;if(a[this.JSON_CONFIG_SHOW_RULE]&&""!==a[this.JSON_CONFIG_SHOW_RULE]){if(a[this.JSON_CONFIG_SHOW_RULE]==this.message[this.MESSAGE_ENUM_STRING_UNKNOWN])return g.warning("Message - Messages - Unable to create message. showrule is invalid"),!1;if(!f.call(this,a[this.JSON_CONFIG_SHOW_RULE]))return g.warning("Message - unsupported message rule"),!1;this.message[this.JSON_CONFIG_SHOW_RULE]=a[this.JSON_CONFIG_SHOW_RULE]}var b;if(b=a[this.JSON_CONFIG_START_DATE]&&""!==a[this.JSON_CONFIG_START_DATE]?a[this.JSON_CONFIG_START_DATE]:this.JSON_DEFAULT_START_DATE,this.message[this.JSON_CONFIG_START_DATE]=b,!a[this.JSON_CONFIG_END_DATE]||""===a[this.JSON_CONFIG_END_DATE])return g.warning("Message - cannot create message. endDate is invalid."),!1;this.message[this.JSON_CONFIG_END_DATE]=a[this.JSON_CONFIG_END_DATE],a[this.JSON_CONFIG_SHOW_OFFLINE]&&""!==a[this.JSON_CONFIG_SHOW_OFFLINE]?this.message[this.JSON_CONFIG_SHOW_OFFLINE]=a[this.JSON_CONFIG_SHOW_OFFLINE]:this.message[this.JSON_CONFIG_SHOW_OFFLINE]=this.message[this.JSON_DEFAULT_SHOW_OFFLINE];var c,e;if(a[this.JSON_CONFIG_AUDIENCES]){var h=a[this.JSON_CONFIG_AUDIENCES];for(e=0;e<h.length;++e){var i=h[e];c=new o.Matcher(i),this.message[this.JSON_CONFIG_AUDIENCES].push(c)}}if(a[this.JSON_CONFIG_TRIGGERS]){var j=a[this.JSON_CONFIG_TRIGGERS];for(e=0;e<j.length;++e){var k=j[e];c=new o.Matcher(k),this.message[this.JSON_CONFIG_TRIGGERS].push(c)}return this.message[this.JSON_CONFIG_TRIGGERS].length<=0?(g.warning("Messages - Unable to load message - at least one valid trigger is required for a message."),!1):(g.debug("Messages - "+this.message[this.JSON_CONFIG_TRIGGERS].length+" triggers found"),!0)}return g.warning("Messages - empty messages"),!1}}function d(){var a=this.message[this.MESSAGE_JSON_PAYLOAD];return a[this.ADB_TEMPLATE_CALLBACK_URL]&&""!==a[this.ADB_TEMPLATE_CALLBACK_URL]?(this.message[this.ADB_TEMPLATE_CALLBACK_URL]=a[this.ADB_TEMPLATE_CALLBACK_URL],a[this.ADB_TEMPLATE_CALLBACK_TIMEOUT]?this.message[this.ADB_TEMPLATE_CALLBACK_TIMEOUT]=a[this.ADB_TEMPLATE_CALLBACK_TIMEOUT]:(g.warning("Data Callback - setting default timeout"),this.message[this.ADB_TEMPLATE_CALLBACK_TIMEOUT]=this.message[this.ADB_TEMPLATE_TIMEOUT_DEFAULT]),a[this.ADB_TEMPLATE_CALLBACK_BODY]&&""!==a[this.ADB_TEMPLATE_CALLBACK_BODY]?(this.message[this.ADB_TEMPLATE_CALLBACK_BODY]=a[this.ADB_TEMPLATE_CALLBACK_BODY],this.message[this.ADB_TEMPLATE_CALLBACK_TYPE]=a[this.ADB_TEMPLATE_CALLBACK_TYPE]):g.warning("Data Callback - Unable to read templatebody. This is not a required field"),!0):(g.warning("Data Callback - Unable to create data callback. templateurl is required"),!1)}function f(a){return a===this.MESSAGE_SHOW_RULE_STRING_ALWAYS||a===this.MESSAGE_SHOW_RULE_STRING_ONCE}function i(a){return a}function l(a){var b={};k.getMarketingCloudIDAsync(function(a){b["%mcid%"]=a}),b["%timestampz%"]=ADBMobile_platform.getDateInISOString(),b["%timestampu%"]=ADBMobile_platform.getTimeSince1970(),b["%sdkver%"]=j.codeVersion,b["%cachebust%"]=""+1e8*Math.random();var c=h.serializeParameters(a);if(c.length>2&&(c=c.substring(1)),b["%all_url%"]=c,a){var d=JSON.stringify(a);d&&(b["%all_json%"]=d)}return b}function m(a){var b=[];if(a&&""!==a){var c,d=a.length;for(c=0;c<d;c++){if(a.substring(c,c+1)===this.ADB_TEMPLATE_TOKEN_START){var e;for(e=c+1;e<d;e++){if(a.substring(e,e+1)===this.ADB_TEMPLATE_TOKEN_END)break}if(e==d)break;var f=a.substring(c,e+1);!0===r.call(this,f.substring(1,f.length-1))&&(b.push(f),c=e)}}}else g.warning("findTokensForExpansion: empty string with tokens");return b}function n(a,b){var c={},d=this.message[this.COMBINED_VARS]||{};if(a)for(var e=0;e<a.length;++e){var f=a[e],g=f.substring(1,f.length-1).toLowerCase(),h=d[g];c[f]=h?b?encodeURIComponent(h):h:""}return c}function p(a,b){var c,d=a;for(c in b)if(b.hasOwnProperty(c))for(;-1!=d.indexOf(c);){var e=d.indexOf(c),f=b[c],g=d.slice(0,e),h=d.slice(e+c.length);d=""!==f?g+f+h:g+h}return d}function q(a,b){e.getPrivacyStatus()===e.PRIVACY_STATUS_OPT_IN&&(g.debug("Messaging - Sending signal request ("+a.toString()+")"),ADBMobile_platform.httpRequestAsync(a,"POST",{"Content-type":"application/x-www-form-urlencoded"},b,2e3,function(a,b,c){200==a?g.debug("Messaging - Successfully sent hit ("+c+")"):g.error("Messaging - Unable to send hit ("+c+") response ("+b+")")}))}function r(a){var b,c=!0;for(b=0;b<a.length;b++){var d=a.charAt(b).toLowerCase();if(!this.validLetters[d]){c=!1;break}}return c}return a.prototype.shouldShowForVariables=function(a,b){var c={};if(b&&h.append(c,b),a&&h.append(c,a),h.append(c,l.call(this,c)),this.message[this.COMBINED_VARS]=c,this.message[this.JSON_CONFIG_START_DATE]&&ADBMobile_platform.getTimeSince1970()<this.message[this.JSON_CONFIG_START_DATE])return!1;if(this.message[this.JSON_CONFIG_END_DATE]&&ADBMobile_platform.getTimeSince1970()>this.message[this.JSON_CONFIG_END_DATE])return!1;var d=this.message[this.JSON_CONFIG_TRIGGERS];if(d)for(var e=i.call(this,b),f=0;f<d.length;++f){var g=d[f];if(!g.matchesInMaps(a,e))return!1}return!0},a.prototype.show=function(){var a=this.message[this.ADB_TEMPLATE_CALLBACK_URL],b=a,c=m.call(this,a),d=n.call(this,c,!0),e=["{%all_url%}"],f=n.call(this,e,!1);h.append(d,f),d&&(b=p.call(this,a,d));var g=this.message[this.ADB_TEMPLATE_CALLBACK_BODY],i=g;if(g){var j=ADBMobile_platform.decodeBase64String(g),k=m.call(this,j),l=this.message[this.ADB_TEMPLATE_CALLBACK_TYPE],o=!0;l&&-1!=l.toLowerCase().search("application/json")&&(o=!1);var r=n.call(this,k,o),s=[];s.push("{%all_url%}"),s.push("{%all_json%}");var t=n.call(this,s,!1);h.append(r,t),r&&(i=p.call(this,j,r))}q.call(this,b,i)},{Message:a}}(),o=function(){"use strict";function a(a,b,c){if(!m||!a||!b)return null;var d=null;switch(a){case"eq":d=m.MatcherEquals;break;case"ne":d=m.MatcherNotEquals;break;case"gt":d=m.MatcherGreaterThan;break;case"lt":d=m.MatcherLessThan;break;case"ge":d=m.MatcherGreaterThanOrEqual;break;case"le":d=m.MatcherLessThanOrEqual;break;case"co":d=m.MatcherContains;break;case"nc":d=m.MatcherNotContains;break;case"sw":d=m.MatcherStartsWith;break;case"ew":d=m.MatcherEndsWith;break;case"ex":d=m.MatcherExists;break;case"nx":d=m.MatcherNotExists}var e=b.toLowerCase();return d?new d(e,c):null}function b(b){return b&&(this._json=b,this._handler=a(b.matches,b.key,b.values)),this}return b.prototype.matchesInMaps=function(a,b){if(this._handler){var c={};return h.append(c,a),h.append(c,b),this._handler.matches(c)}return!1},{Matcher:b}}(),p=function(){function a(){k=[],l=!1,m=[]}function b(a){if(a){for(var b=[],c=0;c<a.length;++c)"callback"===a[c].template&&b.push(new n.Message(a[c]));k=b}}function c(){for(var a=0;a<m.length;++a)i(m[a].vars,m[a].cData);m=[],l=!0}function d(){b(e.getMessages());var a=e.getRemotes();a&&a.messages?ADBMobile_platform.httpRequestAsync(a.messages,"GET",{},null,500,function(a,d){if(200==a&&d)try{b(JSON.parse(d).messages)}catch(e){g.debug("remotes.messages - Unable to parse response ("+e+")")}c()}):c()}function f(a){var b={};for(var c in a)if(a.hasOwnProperty(c)){var d=c.toLowerCase();b[d]=a[c]}return b}function i(a,b){try{if(k&&k.length>0)for(var c=f(a),d=f(b),e=0;e<k.length;++e){var h=k[e];h&&h.shouldShowForVariables(c,d)&&h.show()}}catch(i){g.warning("Messages - checkFor3rdPartyCallbacks Failed with exception "+i.message)}}function j(a,b){if(a&&b)return l?void i(a,b):void m.push({vars:h.clone(a),cData:h.clone(b)})}var k=[],l=!1,m=[];return{init:d,checkFor3rdPartyCallbacks:j,reset:a}}();!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;c<16;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.md5=t}(i);var q={version:j,analytics:{trackState:b.trackState,trackAction:b.trackAction,getTrackingIdentifier:a.getAIDAsync},config:{setUserIdentifier:e.setUserIdentifier,getUserIdentifier:e.getUserIdentifier,getAllIdentifiersAsync:e.getAllIdentifiersAsync,setPrivacyStatus:e.setPrivacyStatus,getPrivacyStatus:e.getPrivacyStatus,setLoggerCallback:g.setLoggerCallback,setDebugLogging:g.setDebugLogging,getDebugLogging:g.getDebugLogging,PRIVACY_STATUS_OPT_IN:e.PRIVACY_STATUS_OPT_IN,PRIVACY_STATUS_OPT_OUT:e.PRIVACY_STATUS_OPT_OUT},visitor:{syncIdentifiers:k.idSync,getMarketingCloudID:k.getMarketingCloudIDAsync},audienceManager:{submitSignal:d.submitSignal,getVisitorProfile:d.getVisitorProfile,getDpid:d.getDpid,getDpuuid:d.getDpuuid,setDpidAndDpuuid:d.setDpidAndDpuuid},media:{setDelegate:l.setDelegate,trackSessionStart:l.trackSessionStart,trackPlay:l.trackPlay,trackPause:l.trackPause,trackError:l.trackError,trackEvent:l.trackEvent,trackComplete:l.trackComplete,trackSessionEnd:l.trackSessionEnd,StreamType:l.StreamType,Event:l.Event,MediaObjectKey:l.MediaObjectKey,VideoMetadataKeys:l.VideoMetadataKeys,AdMetadataKeys:l.AdMetadataKeys,createMediaObject:l.createMediaObject,createAdBreakObject:l.createAdBreakObject,createChapterObject:l.createChapterObject,createAdObject:l.createAdObject,createQoSObject:l.createQoSObject,trackLoad:l.trackLoad,trackStart:l.trackStart,trackUnload:l.trackUnload,MediaInfo:l.MediaInfo,AdInfo:l.AdInfo,ChapterInfo:l.ChapterInfo,AdBreakInfo:l.AdBreakInfo,QoSInfo:l.QoSInfo,BUFFER_START:l.Event.BufferStart,BUFFER_COMPLETE:l.Event.BufferComplete,SEEK_START:l.Event.SeekStart,SEEK_COMPLETE:l.Event.SeekComplete,BITRATE_CHANGE:l.Event.BitrateChange,CHAPTER_START:l.Event.ChapterStart,CHAPTER_COMPLETE:l.Event.ChapterComplete,CHAPTER_SKIP:l.Event.ChapterSkip,AD_BREAK_START:l.Event.AdBreakStart,AD_BREAK_COMPLETE:l.Event.AdBreakComplete,AD_BREAK_SKIP:l.Event.AdBreakSkip,AD_START:l.Event.AdStart,AD_COMPLETE:l.Event.AdComplete,AD_SKIP:l.Event.AdSkip,STREAM_TYPE_LIVE:l.StreamType.LIVE,STREAM_TYPE_VOD:l.StreamType.VOD}};return e.init(),a.init(),k.init(),p.init(),l.init(),q}();


/***/ }),

/***/ "./node_modules/cv-tracking-api/dist/api/TrackingApi.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-tracking-api/dist/api/TrackingApi.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var MuxAgent_1 = __webpack_require__(/*! cv-tracking-mux/dist/MuxAgent */ "./node_modules/cv-tracking-mux/dist/MuxAgent.js");
var TrackingApi = /** @class */ (function (_super) {
    tslib_1.__extends(TrackingApi, _super);
    function TrackingApi() {
        var _this = _super.call(this, {}) || this;
        _this.isDebug = false;
        _this.agents = [];
        _this.modelCollection = new cv_tracking_core_1.ModelCollection();
        return _this;
    }
    Object.defineProperty(TrackingApi.prototype, "debug", {
        get: function () {
            return this.isDebug;
        },
        set: function (debug) {
            this.isDebug = debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackingApi.prototype, "model", {
        get: function () {
            return this.modelCollection;
        },
        set: function (modelCollection) {
            this.modelCollection = modelCollection;
        },
        enumerable: true,
        configurable: true
    });
    TrackingApi.prototype.notify = function (playerEvent) {
        if (playerEvent === cv_tracking_core_1.PlayerEvents.TRACKING_CONFIG_READY) {
            this.registerAgents();
        }
        this.emit(playerEvent);
    };
    TrackingApi.prototype.onError = function (errorInfo) {
        this.emit(cv_tracking_core_1.PlayerEvents.VIDEO_PLAYBACK_ERROR, errorInfo);
    };
    TrackingApi.prototype.setContextData = function (contextData) {
        if (typeof contextData !== 'object') {
            throw ('contextData is not an Object');
            return;
        }
        this.contextData = contextData;
    };
    TrackingApi.prototype.registerAgents = function () {
        var _this = this;
        var upvc = this.modelCollection.GlobalSettings.uvpc;
        //TODO Error handling if uvpc is empty or not an Array
        if (!Array.isArray(upvc)) {
            return;
        }
        upvc.forEach(function (config) {
            if (!config.enabled) {
                return;
            }
            switch (config.name) {
                case cv_tracking_core_1.TrackingModules.MUX:
                    _this.initAgent(MuxAgent_1.MuxAgent, config);
                    break;
                default:
                    break;
            }
        });
    };
    TrackingApi.prototype.initAgent = function (Agent, config) {
        var agent = new Agent(this, config);
        this.agents.push(agent);
        agent.onRegister();
    };
    TrackingApi.prototype.destroy = function () {
        this.agents.forEach(function (agent) {
            // Safely destroy agents. Check if observable is still set
            if (agent.observable) {
                agent.destroy();
            }
        });
        delete this.agents;
        delete this.modelCollection;
        delete this.isDebug;
        _super.prototype.destroy.call(this);
    };
    return TrackingApi;
}(cv_tracking_core_1.Emitter));
exports.TrackingApi = TrackingApi;


/***/ }),

/***/ "./node_modules/cv-tracking-api/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/cv-tracking-api/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cv_model_1 = __webpack_require__(/*! cv-model */ "./node_modules/cv-model/dist/index.js");
exports.PlayerEvents = cv_model_1.PlayerEvents;
exports.ModelCollection = cv_model_1.ModelCollection;
exports.StreamType = cv_model_1.StreamType;
var cv_core_1 = __webpack_require__(/*! cv-core */ "./node_modules/cv-core/dist/index.js");
exports.Logger = cv_core_1.Logger;
exports.LogLevel = cv_core_1.LogLevel;
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
exports.TrackingEvent = cv_tracking_core_1.TrackingEvent;
exports.TrackingAgent = cv_tracking_core_1.TrackingAgent;
exports.TrackingUtil = cv_tracking_core_1.TrackingUtil;
exports.TrackingModules = cv_tracking_core_1.TrackingModules;
var TrackingApi_1 = __webpack_require__(/*! ./api/TrackingApi */ "./node_modules/cv-tracking-api/dist/api/TrackingApi.js");
exports.Tracking = TrackingApi_1.TrackingApi;


/***/ }),

/***/ "./node_modules/cv-tracking-comscore/dist/ComscoreAgent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-tracking-comscore/dist/ComscoreAgent.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComscoreVo_1 = __webpack_require__(/*! ./ComscoreVo */ "./node_modules/cv-tracking-comscore/dist/ComscoreVo.js");
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var ns_ = __webpack_require__(/*! cv-tracking-comscore */ "./node_modules/cv-tracking-comscore/dist/comscore.js");
var ComscoreAgent = /** @class */ (function (_super) {
    __extends(ComscoreAgent, _super);
    function ComscoreAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAME = 'ComscoreAgent';
        _this.isAdPlaying = false;
        _this.isTrackContentPlayPending = false;
        return _this;
    }
    ComscoreAgent.prototype.onRegister = function () {
        var _this = this;
        var _a;
        this.vo = new ComscoreVo_1.ComscoreVo(this);
        this.eventMap = (_a = {},
            _a[cv_tracking_core_1.PlayerEvents.AD_START] = function () { return _this.onAdStart(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_COMPLETE] = function () { return _this.onAdComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_START] = function () { return _this.onContentStart(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_END] = function () { return _this.onContentEnd(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_PLAYING] = function () { return _this.onContentPlaying(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_PAUSE] = function () { return _this.onContentPause(); },
            _a[cv_tracking_core_1.PlayerEvents.RESOURCE_START] = function () { return _this.onResourceStart(); },
            _a[cv_tracking_core_1.PlayerEvents.RESOURCE_END] = function () { return _this.onResourceEnd(); },
            _a[cv_tracking_core_1.PlayerEvents.VIDEO_PROGRESS] = function () { return _this.onVideoProgress(); },
            _a[cv_tracking_core_1.PlayerEvents.LIVE_SEGMENT_START] = function () { return _this.onLiveSegmentStart(); },
            _a[cv_tracking_core_1.PlayerEvents.LIVE_SEGMENT_END] = function () { return _this.onLiveSegmentEnd(); },
            _a);
        this.registerEventMap(this.eventMap);
        this.onRegisterDone();
    };
    ComscoreAgent.prototype.createStreamingTag = function () {
        var config = this.vo.getComscoreConfig();
        this.streamingTag = new ns_.ReducedRequirementsStreamingAnalytics(config);
    };
    ComscoreAgent.prototype.onAdStart = function () {
        this.isAdPlaying = true;
        this.trackAdPlay();
    };
    ComscoreAgent.prototype.onAdComplete = function () {
        this.isAdPlaying = false;
        this.trackStop();
    };
    ComscoreAgent.prototype.onContentStart = function () {
        this.isAdPlaying = false;
        this.isTrackContentPlayPending = true;
    };
    ComscoreAgent.prototype.onContentEnd = function () {
        this.trackStop();
    };
    ComscoreAgent.prototype.onContentPlaying = function () {
        if (this.isAdPlaying) {
            this.trackAdPlay();
        }
        else {
            this.trackContentPlay();
        }
    };
    ComscoreAgent.prototype.onContentPause = function () {
        this.trackStop();
    };
    ComscoreAgent.prototype.onResourceStart = function () {
        this.createStreamingTag();
    };
    ComscoreAgent.prototype.onResourceEnd = function () {
        this.trackStop();
        this.streamingTag = null;
    };
    ComscoreAgent.prototype.onLiveSegmentStart = function () {
        this.liveSegmentData = this.vo.formatLiveSegmentMetadata();
        if (this.vo.getIsLive(this.modelCollection) && this.liveSegmentData) {
            this.isTrackContentPlayPending = true;
            this.trackStop();
            // Start a new instance of Streaming Tag if changing stations (channels)
            if (this.streamingTag && this.contentMetadata && this.vo.hasLiveStationChanged()) {
                this.createStreamingTag();
            }
        }
    };
    ComscoreAgent.prototype.onLiveSegmentEnd = function () {
        this.trackStop();
    };
    ComscoreAgent.prototype.onVideoProgress = function () {
        if (this.isTrackContentPlayPending) {
            this.isTrackContentPlayPending = false;
            this.trackContentPlay();
        }
    };
    ComscoreAgent.prototype.trackAdPlay = function () {
        this.streamingTag && this.streamingTag.playVideoAdvertisement(this.vo.formatAdMetaData(), this.vo.getAdType());
    };
    ComscoreAgent.prototype.trackContentPlay = function () {
        this.contentMetadata = this.vo.formatContentMetadata();
        if (this.liveSegmentData) {
            this.contentMetadata = cv_tracking_core_1.TrackingUtil.copyObjectWithKeyMap(this.vo.getSegmentKeyMap(), this.liveSegmentData, this.contentMetadata);
        }
        this.streamingTag && this.streamingTag.playVideoContentPart(this.contentMetadata, this.vo.getContentType());
    };
    ComscoreAgent.prototype.trackStop = function () {
        this.streamingTag && this.streamingTag.stop();
    };
    ComscoreAgent.prototype.destroy = function () {
        this.trackStop();
        delete this.streamingTag;
        delete this.vo;
        delete this.liveSegmentData;
        delete this.contentMetadata;
        _super.prototype.destroy.call(this);
    };
    //test hook only?
    ComscoreAgent.prototype.getComscoreAgent = function () {
        return ns_ || null;
    };
    return ComscoreAgent;
}(cv_tracking_core_1.TrackingAgent));
exports.ComscoreAgent = ComscoreAgent;


/***/ }),

/***/ "./node_modules/cv-tracking-comscore/dist/ComscoreVo.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-tracking-comscore/dist/ComscoreVo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var ns_ = __webpack_require__(/*! cv-tracking-comscore */ "./node_modules/cv-tracking-comscore/dist/comscore.js");
var ComscoreVo = /** @class */ (function () {
    function ComscoreVo(agent) {
        this.agent = agent;
        this.comscoreNull = '*null';
        var config = agent.config;
        //TODO What about old vs new casing partnerID vs partnerId ??
        this.partnerId = cv_tracking_core_1.TrackingUtil.getParamValue('partnerID', config);
        this.c2Param = cv_tracking_core_1.TrackingUtil.getParamValue('c2', config);
        this.c3Param = cv_tracking_core_1.TrackingUtil.getParamValue('c3', config);
        this.c4Param = cv_tracking_core_1.TrackingUtil.getParamValue('c4', config);
        this.c6Param = cv_tracking_core_1.TrackingUtil.getParamValue('c6', config);
    }
    ComscoreVo.prototype.formatAdMetaData = function () {
        var model = this.agent.modelCollection;
        return {
            ns_st_cl: model.AdItem.adDuration,
        };
    };
    ComscoreVo.prototype.formatLiveSegmentMetadata = function () {
        var model = this.agent.modelCollection;
        return {
            ns_st_pu: model.LiveSegmentData.publisherBrand,
            ns_st_pr: model.LiveSegmentData.programTitle,
            ns_st_ep: model.LiveSegmentData.episodeTitle,
            ns_st_sn: model.LiveSegmentData.seasonNumber,
            ns_st_en: model.LiveSegmentData.episodeNumber,
            ns_st_st: model.LiveSegmentData.stationTitle,
            ns_st_cl: model.LiveSegmentData.clipLength,
            ns_st_ge: model.LiveSegmentData.contentGenre,
            ns_st_ti: model.LiveSegmentData.tmsGracenoteId,
            //ns_st_tep: model.LiveSegmentData.episodeId
            ns_st_ia: model.LiveSegmentData.adLoadFlag,
            ns_st_ce: model.LiveSegmentData.fullEpisodeFlag,
            ns_st_ddt: model.LiveSegmentData.digitalAirDate,
            ns_st_tdt: model.LiveSegmentData.tvAirDate
        };
    };
    ComscoreVo.prototype.formatContentMetadata = function () {
        var model = this.agent.modelCollection;
        var isLive = this.getIsLive(model);
        var sn = model.ContentMetadata.seasonNumber;
        var en = model.ContentMetadata.episodeNumber;
        var c4 = null; //TODO model.ContentMetadata.comscore_c4 //NEEDS REVIEW Session Option
        // Override
        var c6 = model.ContentMetadata.videoTitle;
        var paddedSn = this.comscoreNull;
        var paddedEn = this.comscoreNull;
        if (!isNaN(sn) && !isNaN(en)) {
            paddedSn = this.padSingleDigitWithZero(sn);
            paddedEn = this.padSingleDigitWithZero(en);
            c6 += ('--' + paddedSn + paddedEn);
        }
        return {
            ns_st_ci: cv_tracking_core_1.Util.getDefinedString(model.ContentMetadata.cmsRefGuid, model.ContentMetadata.mediaId, '0'),
            ns_st_cl: isLive ? 0 : model.ContentPlaybackState.duration,
            ns_st_pu: 'liveSegment Data Needed in model',
            ns_st_pr: cv_tracking_core_1.Util.getDefinedString(model.ContentMetadata.seriesTitle, model.ContentMetadata.videoTitle),
            ns_st_ep: model.ContentMetadata.videoTitle.split('-')[1],
            ns_st_sn: paddedSn,
            ns_st_en: paddedEn,
            ns_st_ge: model.ContentMetadata.category || this.comscoreNull,
            //ns_st_tep: this.comscoreNull, //TODO commented out in uvpjs ComScoreAgent So we need
            ns_st_ia: isLive ? 1 : 0,
            ns_st_ddt: this.comscoreNull,
            ns_st_tdt: this.comscoreNull,
            ns_st_st: this.c4Param || this.comscoreNull,
            ns_st_ce: model.ContentMetadata.episodeFlag ? 1 : 0,
            c3: this.c3Param || model.BuildInfo.playerName,
            c4: c4 || this.c4Param || this.comscoreNull,
            c6: this.c6Param || c6
        };
    };
    ComscoreVo.prototype.getSegmentKeyMap = function () {
        return {
            publisherBrand: 'ns_st_pu',
            programTitle: 'ns_st_pr',
            episodeTitle: 'ns_st_ep',
            seasonNumber: 'ns_st_sn',
            episodeNumber: 'ns_st_en',
            stationTitle: 'ns_st_st',
            clipLength: 'ns_st_cl',
            contentGenre: 'ns_st_ge',
            tmsGracenoteId: 'ns_st_ti',
            // episodeId:       'ns_st_tep',
            adLoadFlag: 'ns_st_ia',
            fullEpisodeFlag: 'ns_st_ce',
            digitalAirDate: 'ns_st_ddt',
            tvAirDate: 'ns_st_tdt' /* 2018-08-30 */
        };
    };
    ComscoreVo.prototype.getIsLive = function (model) {
        return model.ResourceConfig.streamType === cv_tracking_core_1.StreamType.LIVE;
    };
    ComscoreVo.prototype.getAdType = function () {
        var model = this.agent.modelCollection;
        var adId = model.AdItem.adId.split('_')[0];
        var types = ns_.ReducedRequirementsStreamingAnalytics.AdType;
        var adType;
        if (this.getIsLive(model)) {
            adType = types.LinearLive;
        }
        else if (adId === 'pre') {
            adType = types.LinearOnDemandPreRoll;
        }
        else if (adId === 'mid') {
            adType = types.LinearOnDemandMidRoll;
        }
        else {
            adType = types.LinearOnDemandPostRoll;
        }
        return adType;
    };
    ComscoreVo.prototype.getContentType = function () {
        var types = ns_.ReducedRequirementsStreamingAnalytics.ContentType;
        return this.getIsLive(this.agent.modelCollection) ? types.Live : types.LongFormOnDemand;
    };
    ComscoreVo.prototype.getComscoreConfig = function () {
        return {
            publisherId: this.c2Param || ComscoreVo.PUBLISHER_ID,
            ns_st_pu: this.partnerId || 'todo' //Model.sessionOptions.partner not sure yet src
        };
    };
    ComscoreVo.prototype.hasLiveStationChanged = function () {
        var map = this.getSegmentKeyMap();
        return this.formatLiveSegmentMetadata()[map.stationTitle] !== this.formatContentMetadata()[map.stationTitle];
    };
    ComscoreVo.prototype.padSingleDigitWithZero = function (n) {
        return (n > 0 && n < 10 ? "0" : "") + n.toString();
    };
    ComscoreVo.PUBLISHER_ID = '3005086';
    return ComscoreVo;
}());
exports.ComscoreVo = ComscoreVo;


/***/ }),

/***/ "./node_modules/cv-tracking-comscore/dist/comscore.js":
/*!************************************************************!*\
  !*** ./node_modules/cv-tracking-comscore/dist/comscore.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Copyright (c) 2017 comScore, Inc.
 * All rights reserved.
 * By using this software, you are agreeing to be bound by the
 * terms of these policies: http://www.comscore.com/About_comScore/Privacy_Policy
 */
!function(a,b){"use strict"; true?(b(a.ns_=a.ns_||{}),!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return a.ns_}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}(this,function(a){"use strict";a.ns_=a;var b=b||{};b.indexOf=function(a,b){var c=-1;return this.forEach(b,function(b,d){b==a&&(c=d)}),c},b.forEach=function(a,b,c){try{if("function"==typeof b)if(c="undefined"!=typeof c?c:null,"number"!=typeof a.length||"undefined"==typeof a[0]){var d="undefined"!=typeof a.__proto__;for(var e in a)a.hasOwnProperty(e)&&(!d||d&&"undefined"==typeof a.__proto__[e])&&"function"!=typeof a[e]&&b.call(c,a[e],e)}else for(var f=0,g=a.length;f<g;f++)b.call(c,a[f],f)}catch(h){}};var b=b||{};b.parseBoolean=function(a,b){return b=b||!1,a?"0"!=a:b},b.parseInteger=function(a,b){return null==a||isNaN(a)?b||0:parseInt(a)},b.parseLong=function(a,b){var c=Number(a);return null==a||isNaN(c)?b||0:c},b.toString=function(a){if("undefined"==typeof a)return"undefined";if("string"==typeof a)return a;if(a instanceof Array)return a.join(",");var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b||a.toString()};var b=b||{};b.filter=function(a,b){var c={};for(var d in b)b.hasOwnProperty(d)&&a(b[d])&&(c[d]=b[d]);return c},b.extend=function(a){var b,c=arguments.length;a=a||{};for(var d=1;d<c;d++)if(b=arguments[d])for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a};var b=b||{};b.cloneObject=function(a){if(null==a||"object"!=typeof a)return a;var b=function(){function a(){}function b(b){return"object"==typeof b?(a.prototype=b,new a):b}function c(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}function d(){this.copiedObjects=[];var a=this;this.recursiveDeepCopy=function(b){return a.deepCopy(b)},this.depth=0}function e(a,b){var c=new d;return b&&(c.maxDepth=b),c.deepCopy(a)}function f(a){return"undefined"!=typeof window&&window&&window.Node?a instanceof Node:"undefined"!=typeof document&&a===document||"number"==typeof a.nodeType&&a.attributes&&a.childNodes&&a.cloneNode}var g=[];return c.prototype={constructor:c,canCopy:function(){return!1},create:function(a){},populate:function(a,b,c){}},d.prototype={constructor:d,maxDepth:256,cacheResult:function(a,b){this.copiedObjects.push([a,b])},getCachedResult:function(a){for(var b=this.copiedObjects,c=b.length,d=0;d<c;d++)if(b[d][0]===a)return b[d][1]},deepCopy:function(a){if(null===a)return null;if("object"!=typeof a)return a;var b=this.getCachedResult(a);if(b)return b;for(var c=0;c<g.length;c++){var d=g[c];if(d.canCopy(a))return this.applyDeepCopier(d,a)}throw new Error("Unable to clone the following object "+a)},applyDeepCopier:function(a,b){var c=a.create(b);if(this.cacheResult(b,c),this.depth++,this.depth>this.maxDepth)throw new Error("Maximum recursion depth exceeded.");return a.populate(this.recursiveDeepCopy,b,c),this.depth--,c}},e.DeepCopier=c,e.deepCopiers=g,e.register=function(a){a instanceof c||(a=new c(a)),g.unshift(a)},e.register({canCopy:function(){return!0},create:function(a){return a instanceof a.constructor?b(a.constructor.prototype):{}},populate:function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&(c[d]=a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Array},create:function(a){return new a.constructor},populate:function(a,b,c){for(var d=0;d<b.length;d++)c.push(a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Date},create:function(a){return new Date(a)}}),e.register({canCopy:function(a){return f(a)},create:function(a){return"undefined"!=typeof document&&a===document?document:a.cloneNode(!1)},populate:function(a,b,c){if("undefined"!=typeof document&&b===document)return document;if(b.childNodes&&b.childNodes.length)for(var d=0;d<b.childNodes.length;d++){var e=a(b.childNodes[d]);c.appendChild(e)}}}),{deepCopy:e}}();return b.deepCopy(a)};var b=b||{};b.getNamespace=function(){return a.ns_||a},b.uid=function(){var a=1;return function(){return+new Date+"_"+a++}}(),b.isEmpty=function(a){return void 0===a||null===a||""===a||a instanceof Array&&0===a.length},b.isNotEmpty=function(a){return!this.isEmpty(a)},b.safeGet=function(a,b){return b=this.exists(b)?b:"",this.exists(a)?a:b},b.isTrue=function(a){return"undefined"!=typeof a&&("string"==typeof a?(a=a.toLowerCase(),"true"===a||"1"===a||"on"===a):!!a)},b.regionMatches=function(a,b,c,d,e){if(b<0||d<0||b+e>a.length||d+e>c.length)return!1;for(;--e>=0;){var f=a.charAt(b++),g=c.charAt(d++);if(f!=g)return!1}return!0},b.exists=function(a){return"undefined"!=typeof a&&null!=a},!function(){var a=[],c=!1,d=!0,e=1e3;b.onSystemClockJump=function(b,f){a.push(b),c||(c=!0,e=f||e,d=+new Date,setInterval(function(){var b=d+e,c=+new Date;d=c;var f=c-b;if(Math.abs(f)>e)for(var g=0;g<a.length;++g)a[g](f>0)},e))}}();var b=b||{};b.hasPageVisibilityAPISupport=function(){if("undefined"==typeof document)return!1;var a=!1;return"undefined"!=typeof document.hidden?a=!0:"undefined"!=typeof document.mozHidden?a=!0:"undefined"!=typeof document.msHidden?a=!0:"undefined"!=typeof document.webkitHidden&&(a=!0),function(){return a}}(),b.getPageVisibilityAPI=function(){if("undefined"==typeof document)return null;var a,b,c;"undefined"!=typeof document.hidden?(a="hidden",b="visibilitychange",c="visibilityState"):"undefined"!=typeof document.mozHidden?(a="mozHidden",b="mozvisibilitychange",c="mozVisibilityState"):"undefined"!=typeof document.msHidden?(a="msHidden",b="msvisibilitychange",c="msVisibilityState"):"undefined"!=typeof document.webkitHidden&&(a="webkitHidden",b="webkitvisibilitychange",c="webkitVisibilityState");var d={hidden:a,visibilityChange:b,state:c};return function(){return d}}(),b.isTabInBackground=function(){if("undefined"==typeof document)return null;var a=b.getPageVisibilityAPI();return function(){return document[a.hidden]}}(),b.getBrowserName=function(){if(!navigator)return"";var a,b,c=navigator.userAgent||"",d=navigator.appName||"";return(b=c.indexOf("Opera"))!=-1||(b=c.indexOf("OPR/"))!=-1?d="Opera":(b=c.indexOf("Android"))!=-1?d="Android":(b=c.indexOf("Chrome"))!=-1?d="Chrome":(b=c.indexOf("Safari"))!=-1?d="Safari":(b=c.indexOf("Firefox"))!=-1?d="Firefox":(b=c.indexOf("IEMobile"))!=-1?d="Internet Explorer Mobile":"Microsoft Internet Explorer"==d||"Netscape"==d?d="Internet Explorer":(a=c.lastIndexOf(" ")+1)<(b=c.lastIndexOf("/"))?(d=c.substring(a,b),d.toLowerCase()==d.toUpperCase()&&(d=navigator.appName)):d="unknown",d},b.getBrowserFullVersion=function(){if(!navigator)return"";var a,b,c,d,e=navigator.userAgent||"",f=navigator.appName||"",g=navigator.appVersion?""+parseFloat(navigator.appVersion):"";return(b=e.indexOf("Opera"))!=-1?(g=e.substring(b+6),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("OPR/"))!=-1?g=e.substring(b+4):(b=e.indexOf("Android"))!=-1?g=e.substring(b+11):(b=e.indexOf("Chrome"))!=-1?g=e.substring(b+7):(b=e.indexOf("Safari"))!=-1?(g=e.substring(b+7),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("Firefox"))!=-1?g=e.substring(b+8):"Microsoft Internet Explorer"==f?(d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):"Netscape"==f?(d=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):g=e.lastIndexOf(" ")+1<(b=e.lastIndexOf("/"))?e.substring(b+1):"unknown",g=g.toString(),(c=g.indexOf(";"))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(" "))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(")"))!=-1&&(g=g.substring(0,c)),a=parseInt(""+g,10),isNaN(a)&&(g=""+parseFloat(navigator.appVersion)),g},b.browserAcceptsLargeURLs=function(){return"undefined"==typeof window||(null!==window.ActiveXObject,!0)},b.isBrowser=function(){return"undefined"!=typeof window&&"undefined"!=typeof document},b.isWebSecure=function(){return"undefined"!=typeof document&&null!=document&&"s"===document.location.href.charAt(4)};var c=function(){var a=1e4;return function(b,c){function d(a){a=a||[];var c=[h,+new Date];return b&&c.push(b),a=Array.prototype.slice.call(a),c=c.concat(a)}function e(a){var b,d,e;if("boolean"==typeof c||!c)return!!c;if(e=a.join(" "),c instanceof Array&&c.length>0){for(b=0;b<c.length;++b)if(d=c[b],d instanceof RegExp&&d.test(e))return!0;return!1}if("object"==typeof c){var f=!1;if(c.hide instanceof Array)for(b=0;b<c.hide.length;++b)if(d=c.hide[b],d instanceof RegExp&&d.test(e)){f=!0;break}if(c.show instanceof Array)for(b=0;b<c.show.length;++b)if(d=c.show[b],d instanceof RegExp&&d.test(e))return!0;return!f&&!c.show}return!0}function f(b){var d=i.length;if(d>a||"object"==typeof c&&c.max&&d>c.max){var e="object"==typeof c&&c.max||a;i=i.slice(-Math.floor(e/2)),i.push("Previous logs: "+d)}i.push(b)}var g=this,h="comScore",i=[];g.log=function(){var a=d(arguments);f(a),"undefined"!=typeof console&&"function"==typeof console.log&&e(a)&&console.log.apply(console,a)},g.warn=function(){var a=d(arguments);f(a),"undefined"!=typeof console&&"function"==typeof console.warn&&e(a)&&console.warn.apply(console,a)},g.error=function(){var a=d(arguments);f(a),"undefined"!=typeof console&&"function"==typeof console.error&&e(a)&&console.error.apply(console,a)},g.apiCall=function(a){for(var b=["API call to:",a],c=1;c<arguments.length;++c)b.push("arg"+c+":",arguments[c]);this.log.apply(this,b)},g.infoLog=function(){var a=["Trace log:"];a.push.apply(a,Array.prototype.slice.call(arguments)),this.log.apply(this,a)},g.deprecation=function(a,b){var c=["Deprecated API:",a,"is deprecated and will be eventually removed."];b&&c.push("Use",b,"instead."),this.warn.apply(this,c)},g.getLogHistory=function(){return i}}}();return a.StreamingAnalytics=a.StreamingAnalytics||function(){var a=function(){var a="cs_";return function(){var c="undefined"!=typeof localStorage?localStorage:null;b.extend(this,{get:function(b){return c&&c.getItem(a+b)},set:function(b,d){c&&c.setItem(a+b,d)},has:function(b){return c&&c.getItem(a+b)},remove:function(b){c&&c.removeItem(a+b)},clear:function(){for(var b=0;c&&b<c.length;++b){var d=c.key(b);d.substr(0,a.length)===a&&c.removeItem(d)}}})}}(),d=function(a,b){if("undefined"==typeof Image)return void("function"==typeof setTimeout?b&&setTimeout(b,0):b&&b());var c=new Image;c.onload=function(){b&&b(200),c=null},c.onerror=function(){b&&b(),c=null},c.src=a},e=function(a,b,c){"function"==typeof setTimeout?c&&setTimeout(function(){c(200)},0):c&&c(200)},f=function(){return{dir:function(){return null},append:function(a,b,c){},write:function(a,b,c){},deleteFile:function(){return!1},read:function(){return null}}}(),g=function(){return{PLATFORM:"generic",httpGet:d,httpPost:e,Storage:a,IO:f,onDataFetch:function(a){a()},getCrossPublisherId:function(){return null},getAppName:function(){return h.UNKNOWN_VALUE},getAppVersion:function(){return h.UNKNOWN_VALUE},getVisitorId:function(){return+new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return h.UNKNOWN_VALUE},getPlatformVersion:function(){return h.UNKNOWN_VALUE},getPlatformName:function(){return"js"},getRuntimeName:function(){return h.UNKNOWN_VALUE},getRuntimeVersion:function(){return h.UNKNOWN_VALUE},getDisplayResolution:function(){return h.UNKNOWN_RESOLUTION},getApplicationResolution:function(){return h.UNKNOWN_RESOLUTION},getLanguage:function(){return h.UNKNOWN_VALUE},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(a,b){return setTimeout(a,b)},clearTimeout:function(a){return clearTimeout(a)},getDeviceArchitecture:function(){return h.UNKNOWN_VALUE},getConnectionType:function(){return h.UNKNOWN_VALUE},getDeviceJailBrokenFlag:function(){return h.UNKNOWN_VALUE},isConnectionSecure:function(){return!1},processMeasurementLabels:function(){}}}(),h={UNKNOWN_VALUE:"unknown",UNKNOWN_RESOLUTION:"0x0"};b.jsonObjectToStringDictionary=function(a){var b={};for(var c in a){var d=a[c];null===d||void 0===d?b[c]=d:b[c]=a[c]+""}return b},b.getKeys=function(a,b){var c,d=[];for(c in a)b&&!b.test(c)||!a.hasOwnProperty(c)||(d[d.length]=c);return d},b.fixEventTime=function(a){if(a.ns_ts)return parseInt(a.ns_ts);var b=+new Date;return a.ns_ts=b+"",b},b.isBrowser=function(){return"undefined"!=typeof window&&"undefined"!=typeof document},b.addNewPlaybackInterval=function(a,c,d,e){var f={};if(!(d>=c))return b.cloneObject(a);if(f.start=c,f.end=d,0==a.length)return a.push(f),b.cloneObject(a);var g;for(g=0;g<a.length;g++)if(f.start>=a[g].start&&f.end<=a[g].end)return b.cloneObject(a);var h,i=!1;for(h=0;h<a.length;h++)if(h+1===a.length&&f.start>=a[h].start||f.start>=a[h].start&&f.start<a[h+1].start){a.splice(h+1,0,f),i=!0;break}i||a.splice(0,0,f);var j=[a[0]];for(g=1;g<a.length;g++)j[j.length-1].end+e<a[g].start?j.push(a[g]):j[j.length-1].end<a[g].end&&(j[j.length-1].end=a[g].end);return b.cloneObject(j)},b.stateToString=function(a){var b=H.InternalStates;for(var c in b)if(b.hasOwnProperty(c)&&b[c]==a)return c};var i=function(){var a=["play","pause","pause-on-buffering","end","buffer","buffer-stop","keep-alive","hb","custom","load","start","skstart","adskip","cta","error","trans","drmfa","drmap","drmde","bitrt","playrt","volume","window","audio","video","subs","cdn"];return{PLAY:0,PAUSE:1,PAUSE_ON_BUFFERING:2,END:3,BUFFER:4,BUFFER_STOP:5,KEEPALIVE:6,HEARTBEAT:7,CUSTOM:8,LOAD:9,ENGAGE:10,SEEK_START:11,AD_SKIP:12,CTA:13,ERROR:14,TRANSFER:15,DRM_FAILED:16,DRM_APPROVED:17,DRM_DENIED:18,BIT_RATE:19,PLAYBACK_RATE:20,VOLUME:21,WINDOW_STATE:22,AUDIO:23,VIDEO:24,SUBS:25,CDN:26,toString:function(b){return a[b]}}}(),j=function(){return{IDLE:0,PLAYBACK_NOT_STARTED:1,PLAYING:2,PAUSED:3,BUFFERING_BEFORE_PLAYBACK:4,BUFFERING_DURING_PLAYBACK:5,BUFFERING_DURING_SEEKING:6,BUFFERING_DURING_PAUSE:7,SEEKING_BEFORE_PLAYBACK:8,SEEKING_DURING_PLAYBACK:9,SEEKING_DURING_BUFFERING:10,SEEKING_DURING_PAUSE:11,PAUSED_DURING_BUFFERING:12}}(),k=function(){var a=["c","s","r"];return{SINGLE_CLIP:0,SEGMENTED:1,REDUCED:2,toString:function(b){return a[b]}}}(),l={STREAMINGANALYTICS_VERSION:"6.1.1.171219",MODEL_VERSION:"5.8",LOG_NAMESPACE:"STA",DEFAULT_PLAYERNAME:"js_api",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",RESTRICTED_URL_LENGTH_LIMIT:2048,URL_LENGTH_LIMIT:4096,THROTTLING_DELAY:500,INTERVAL_MERGE_TOLERANCE:500,SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL:1e3,SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL:500,DEFAULT_ASSET_PLAYBACK_RATE:100,STANDARD_METADATA_LABELS:["ns_st_st","ns_st_ci","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_li","ns_st_ad","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pu","c3","c4","c6"],LABELS_ORDER:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_alias","ca_ns_alias","cb_ns_alias","cc_ns_alias","cd_ns_alias","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_bv","ns_ap_cv","ns_ap_smv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","cs_partner","cs_xcid","cs_impid","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_ap_ie","ns_st_sv","ns_st_pv","ns_st_smv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sc","ns_st_psq","ns_st_asq","ns_st_sq","ns_st_ppc","ns_st_apc","ns_st_spc","ns_st_atpc","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_sl","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_ad","ns_st_li","ns_st_ci","ns_st_si","ns_st_pt","ns_st_dpt","ns_st_ipt","ns_st_ap","ns_st_dap","ns_st_et","ns_st_det","ns_st_upc","ns_st_dupc","ns_st_iupc","ns_st_upa","ns_st_dupa","ns_st_iupa","ns_st_lpc","ns_st_dlpc","ns_st_lpa","ns_st_dlpa","ns_st_pa","ns_st_ldw","ns_st_ldo","ns_st_ie","ns_ap_jb","ns_ap_et","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ca_cs_c12u","cb_cs_c12u","cc_cs_c12u","cd_cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_ap_cfg","ns_ap_env","ns_ap_ais","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_dbc","ns_st_bt","ns_st_dbt","ns_st_bp","ns_st_lt","ns_st_skc","ns_st_dskc","ns_st_ska","ns_st_dska","ns_st_skd","ns_st_skt","ns_st_dskt","ns_st_pc","ns_st_dpc","ns_st_pp","ns_st_br","ns_st_pbr","ns_st_rt","ns_st_prt","ns_st_ub","ns_st_vo","ns_st_pvo","ns_st_ws","ns_st_pws","ns_st_ki","ns_st_rp","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pl","ns_st_pr","ns_st_tpr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_tep","ns_st_sr","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_stc","ns_st_ce","ns_st_ia","ns_st_dt","ns_st_ddt","ns_st_tdt","ns_st_tm","ns_st_dtm","ns_st_ttm","ns_st_de","ns_st_pu","ns_st_ti","ns_st_cu","ns_st_fee","ns_st_ft","ns_st_at","ns_st_pat","ns_st_vt","ns_st_pvt","ns_st_tt","ns_st_ptt","ns_st_cdn","ns_st_pcdn","ns_st_amg","ns_st_ami","ns_st_amp","ns_st_amt","ns_st_ams","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","ns_ecommerce","ns_ec_sv","ns_client_id","ns_order_id","ns_ec_cur","ns_orderline_id","ns_orderlines","ns_prod_id","ns_qty","ns_prod_price","ns_prod_grp","ns_brand","ns_shop","ns_category","category","ns_c","ns_search_term","ns_search_result","ns_m_exp","ns_m_chs","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er","ns_st_amc"]},m=function(){function a(){function a(){f={},f.ns_st_cl="0",f.ns_st_pn="1",f.ns_st_tp="0",f.ns_st_cn="1",f.ns_st_skd="0",f.ns_st_ci="0",f.c3="*null",f.c4="*null",f.c6="*null",f.ns_st_st="*null",f.ns_st_pu="*null",f.ns_st_pr="*null",f.ns_st_ep="*null",f.ns_st_sn="*null",f.ns_st_en="*null",f.ns_st_ct="*null",g={},e=!1,d=!1,c=h.UNKNOWN_VALUE,i=!0,j=0,k=NaN,p=0,n=0,m=NaN,q=0,r=NaN,t=0,s=0,o=0,w=NaN,u=[],v=[],x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=NaN,F=0,G=0,H=0,I=!1,J=NaN,N=!1,M=0,Q=0,K=0,L=0,O=0,P=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=!1,_=l.DEFAULT_ASSET_PLAYBACK_RATE}var c,d,e,f,g,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa=this,ba=l.INTERVAL_MERGE_TOLERANCE;b.extend(this,{getHash:function(){return c},setHash:function(a){c=a},setPlaybackIntervalMergeTolerance:function(a){ba=a},getPlaybackIntervalMergeTolerance:function(){return ba},setInternalLabel:function(a,b){f[a]=b},getInternalLabel:function(a){return f[a]},hasInternalLabel:function(a){return null!=f[a]},setLabels:function(a){a&&b.extend(g,a)},getLabels:function(){return g},setLabel:function(a,b){g[a]=b},getLabel:function(a){return g[a]},hasLabel:function(a){return a in g},getClipNumber:function(){return parseInt(aa.getInternalLabel("ns_st_cn"))},setClipNumber:function(a){aa.setInternalLabel("ns_st_cn",a+"")},getPartNumber:function(){return aa.hasLabel("ns_st_pn")?parseInt(aa.getLabel("ns_st_pn")):parseInt(aa.getInternalLabel("ns_st_pn"))},createLabels:function(a,c){var d=a||{},h=b.isEmpty(d.ns_st_pt)?aa.getPlaybackTime():parseInt(d.ns_st_pt);d.ns_st_pt=h+(isNaN(k)?0:c-k)+"",d.ns_st_dpt=h+(isNaN(k)?0:c-k)-n+"",d.ns_st_ipt=h+(isNaN(k)?0:c-k)-o+"";var i=b.isEmpty(d.ns_st_et)?aa.getElapsedTime():parseInt(d.ns_st_et);d.ns_st_et=i+(isNaN(r)?0:c-r)+"",d.ns_st_det=i+(isNaN(r)?0:c-r)-s+"";var j=b.isEmpty(d.ns_st_bt)?aa.getBufferingTime():parseInt(d.ns_st_bt);d.ns_st_bt=j+"",d.ns_st_dbt=j+(isNaN(E)?0:c-E)-F+"";for(var l,m=parseInt(d.ns_st_po),p=b.addNewPlaybackInterval(b.cloneObject(aa.getSegmentPlaybackIntervals()),_<0?m:w,_<0?w:m,ba),q=b.addNewPlaybackInterval(b.cloneObject(aa.getAssetPlaybackIntervals()),_<0?m:w,_<0?w:m,ba),t=0,u=0,v=0;v<p.length;v++)l=Math.abs(p[v].end-p[v].start),t+=l,l>u&&(u=l);var D=0,G=0;for(v=0,l;v<q.length;v++)l=Math.abs(q[v].end-q[v].start),D+=l,l>G&&(G=l);d.ns_st_upc=t+"",d.ns_st_dupc=t-x+"",d.ns_st_iupc=t-y+"",t>y?d.ns_st_iupc=t-y+"":d.ns_st_iupc="0",d.ns_st_lpc=u+"",d.ns_st_dlpc=u-z+"",d.ns_st_upa=D+"",d.ns_st_dupa=D-A+"",D>B?d.ns_st_iupa=D-B+"":d.ns_st_iupa="0",d.ns_st_lpa=G+"",d.ns_st_dlpa=G-C+"";var I=b.isEmpty(d.ns_st_pc)?aa.getPauses():parseInt(d.ns_st_pc);d.ns_st_pc=I+"",d.ns_st_dpc=I-S+"";var J=b.isEmpty(d.ns_st_skc)?aa.getSeeks():parseInt(d.ns_st_skc);d.ns_st_skc=J+"",d.ns_st_dskc=J-U+"";var K=b.isEmpty(d.ns_st_bc)?aa.getBuffers():parseInt(d.ns_st_bc);d.ns_st_bc=K+"",d.ns_st_dbc=K-H+"";var M=b.isEmpty(d.ns_st_skt)?aa.getSeekingTime():parseInt(d.ns_st_skt);d.ns_st_skt=M+"",d.ns_st_dskt=M-L+"";var N=b.isEmpty(d.ns_st_ska)?aa.getSeekingAmount():parseInt(d.ns_st_ska);return d.ns_st_ska=N+"",d.ns_st_dska=N-P+"",e&&(d.ns_st_spc=V+"",d.ns_st_apc=W+"",d.ns_st_sq=X+"",d.ns_st_asq=Y+""),e||0!=Z?d.ns_st_sc=Z+"":d.ns_st_sc="1",d.ns_st_rt=_+"",b.extend(d,f,g),d},updateDeltaLabels:function(a){n=parseInt(a.ns_st_pt),s=parseInt(a.ns_st_et),F=parseInt(a.ns_st_bt),x=parseInt(a.ns_st_upc),z=parseInt(a.ns_st_lpc),A=parseInt(a.ns_st_upa),C=parseInt(a.ns_st_lpa),S=parseInt(a.ns_st_pc),U=parseInt(a.ns_st_skc),H=parseInt(a.ns_st_bc),L=parseInt(a.ns_st_skt),P=parseInt(a.ns_st_ska),aa.setSeekingDirection(0)},updateIndependentLabels:function(a){o=parseInt(a.ns_st_pt),y=parseInt(a.ns_st_upc),B=parseInt(a.ns_st_upa)},getVideoTrack:function(){return aa.getInternalLabel("ns_st_vt")},setVideoTrack:function(a){aa.setInternalLabel("ns_st_vt",a+"")},getAudioTrack:function(){return aa.getInternalLabel("ns_st_at")},setAudioTrack:function(a){aa.setInternalLabel("ns_st_at",a+"")},getSubtitleTrack:function(){return aa.getInternalLabel("ns_st_tt")},setSubtitleTrack:function(a){aa.setInternalLabel("ns_st_tt",a+"")},getCDN:function(){return aa.getInternalLabel("ns_st_cdn")},setCDN:function(a){aa.setInternalLabel("ns_st_cdn",a+"")},getSegmentPlaybackIntervals:function(){return u},setAssetPlaybackIntervals:function(a){u=a},getAssetPlaybackIntervals:function(){return v},incrementPauses:function(){R++},incrementSeeks:function(){T++},incrementPlayCounter:function(){X++},getPlayCounter:function(){return X},getBufferingTime:function(){return D},setBufferingTime:function(a){D=a},addBufferingTime:function(a){if(!isNaN(E)){var b=aa.getBufferingTime();b+=a-E,aa.setBufferingTime(b),E=NaN}},setPlaybackStartPosition:function(a){w=parseInt(a)},getPlaybackStartPosition:function(){return w},addInterval:function(a){isNaN(w)||isNaN(a)||(u=b.addNewPlaybackInterval(u,_<0?a:w,_<0?w:a,ba),v=b.addNewPlaybackInterval(v,_<0?a:w,_<0?w:a,ba),w=NaN)},getElapsedTime:function(){return q},setElapsedTime:function(a){q=a},addElapsedTime:function(a){if(!isNaN(r)){var b=aa.getElapsedTime();b+=a-r,aa.setElapsedTime(b),r=NaN}},getElapsedTimestamp:function(){return r},setElapsedTimestamp:function(a){r=a},addPlaybackTime:function(a){if(!isNaN(k)){var b=aa.getPlaybackTime();b+=a-k,aa.setPlaybackTime(b),k=NaN}},getPlaybackTime:function(){return j},getExpectedPlaybackPosition:function(a){return isNaN(k)?p:p+Math.floor((a-k)*_/100)},setPlaybackTimeOffset:function(a){p=a},getPlaybackTimeOffset:function(){return p},setPlaybackTime:function(a){j=a},getPlaybackTimestamp:function(){return k},setPlaybackTimestamp:function(a){k=a},setPreviousPlaybackTime:function(a){n=a},setPreviousPlaybackTimestamp:function(a){m=a},getBufferingTimestamp:function(){return E},setBufferingTimestamp:function(a){E=a},getPauses:function(){return R},setPauses:function(a){R=a},getSeeks:function(){return T},setSeeks:function(a){T=a},setSeeking:function(a){I=a},isSeeking:function(){return I},setCollectingSeekingTime:function(a){N=a},isCollectingSeekingTime:function(){return N},setAssetStarted:function(a){d=a},isAssetStarted:function(){return d},setPlaybackStarted:function(a){e=a},isPlaybackStarted:function(){return e},setSeekingTimestamp:function(a){J=a},getSeekingTimestamp:function(){return J},addSeekingTime:function(a){if(!isNaN(J)){var b=aa.getSeekingTime();b+=a-J,aa.setSeekingTime(b),J=NaN}},getSeekingTime:function(){return K},setSeekingTime:function(a){K=a},setSeekingTimeBeforeEnd:function(a){Q=a},getSeekingTimeBeforeEnd:function(){return Q},setSeekStartPosition:function(a){M=a},getSeekStartPosition:function(){return M},setSeekingAmount:function(a){O=a},getSeekingAmount:function(){return O},addSeekingAmount:function(a){var b=aa.getSeekingAmount();b+=Math.abs(a-M),aa.setSeekingAmount(b);var c;M==a?c=0:M>a?c=-1:M<a&&(c=1),aa.setSeekingDirection(c),M=0},getSeekingDirection:function(){return parseInt(aa.getInternalLabel("ns_st_skd"))},setSeekingDirection:function(a){aa.setInternalLabel("ns_st_skd",a+"")},resetAssetLifecycleLabels:function(){j=0,n=0,o=0,D=0,F=0,G=0,H=0,R=0,S=0,X=0,v=[],A=0,B=0,C=0,q=0,s=0,K=0,L=0,O=0,P=0,T=0,U=0},incrementSegmentPlaybackCounter:function(){V++},incrementAssetLoadCounter:function(){Z++},incrementAssetPlaybackCounter:function(){W++},getPreviousUniquePlaybackInterval:function(){return x},setPreviousUniquePlaybackInterval:function(a){x=a},getPreviousEventIndependentUniquePlaybackInterval:function(){return y},setPreviousEventIndependentUniquePlaybackInterval:function(a){y=a},setPreviousLongestPlaybackInterval:function(a){z=a},getPreviousLongestPlaybackInterval:function(){return z},resetAssetPlaybackIntervals:function(){v=[],A=0,B=0,C=0},setSegmentPlaybackCounter:function(a){V=a},setAssetLoadCounter:function(a){Z=a},setAssetPlaybackCounter:function(a){W=a},setLowestPartNumberPlayed:function(a){t=a},getSegmentPlaybackCounter:function(){return V},getAssetLoadCounter:function(){return Z},getAssetPlaybackCounter:function(){return W},getLowestPartNumberPlayed:function(){return t},getBuffers:function(){return G},incrementBufferCount:function(){G++},getPreviousBufferingTime:function(){return F},setPlaySequenceCounter:function(a){Y=a},incrementPlaySequenceCounter:function(){Y++},getPlaySequenceCounter:function(){return Y},isPlaybackSessionLooping:function(){return $},setPlaybackSessionLooping:function(a){$=a},enableAutoCalculatePositions:function(a){i=!!a},isAutoCalculatePositionsEnabled:function(){return i},getPlaybackRate:function(){return _},setPlaybackRate:function(a){_=a}}),a()}return a.resetAsset=function(a,b,c){for(var d=a.getLabels(),e={},f=0;c&&f<c.length;++f)d.hasOwnProperty(c[f])&&(e[c[f]]=d[c[f]]);b.setLabels(e),b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())},a}(),n=function(){function a(a){function c(){d=new m,h={},h.ns_st_id=+new Date+"",k={},e=NaN,f=0,g=NaN,o={},p=0,n=!1,q=!1,r=0,t=0,s=0,u=1,v=0,w=[]}var d,e,f,g,h,k,n,o,p,q,r,s,t,u,v,w,x=this;b.extend(this,{resetAsset:function(){var a=d;d=new m,m.resetAsset(a,d)},hashExists:function(a){return null!=o[a]},storeHash:function(a){o[a]={}},removeHash:function(a){delete o[a]},storeAssetPlaybackCounters:function(){for(var a in o)if(o.hasOwnProperty(a)&&o[a].clipNumber===d.getClipNumber()){b.extend(o[a],{segmentPlaybackCounter:d.getSegmentPlaybackCounter(),assetLoadCounter:d.getAssetLoadCounter(),assetPlaybackCounter:d.getAssetPlaybackCounter(),lowestPartNumberPlayed:d.getLowestPartNumberPlayed(),seeking:d.isSeeking(),seekingTimeBeforeEnd:d.getSeekingTimeBeforeEnd(),seekingStartPosition:d.getSeekStartPosition(),segmentPlaybackIntervals:d.getSegmentPlaybackIntervals(),videoTrack:d.getVideoTrack(),audioTrack:d.getAudioTrack(),subtitleTrack:d.getSubtitleTrack(),cdn:d.getCDN(),playSequenceCounter:d.getPlaySequenceCounter(),previousUniquePlaybackInterval:d.getPreviousUniquePlaybackInterval(),previousEventIndependentUniquePlaybackInterval:d.getPreviousEventIndependentUniquePlaybackInterval(),previousLongestPlaybackInterval:d.getPreviousLongestPlaybackInterval()});break}},getStoredAssetRegisters:function(a){return o[a]},getClipNumber:function(a){return o[a].clipNumber},getMaxClipNumber:function(){return p},storeClipNumber:function(a,b){o[a].clipNumber=b,b>p&&(p=b)},setLabels:function(a){null!=a&&b.extend(k,a)},getLabels:function(){return k},setLabel:function(a,b){var c={};c[a]=b,x.setLabels(c)},getLabel:function(a){return k[a]},getAsset:function(){return d},addInternalErrorFlag:function(a){for(var b=0;b<w.length;++b)if(w[b]==a)return;w.push(a)},createLabels:function(c,e){var f=c||{},i=b.isEmpty(f.ns_st_pa)?x.getPlaybackTime():parseInt(f.ns_st_pa);return f.ns_st_pa=i+(isNaN(g)?0:e-g)+"",f.ns_st_pp=t+"",f.ns_st_sp=u+"",f.ns_st_bp=v+"",q||(f.ns_st_pb=null!=f.ns_st_pb?f.ns_st_pb:"1"),d.isPlaybackStarted()&&(f.ns_st_ppc=r+"",f.ns_st_psq=s+""),w.length>0&&(f.ns_st_ie=(f.ns_st_ie?f.ns_st_ie+";":"")+w.join(";")),b.extend(f,h,k),a.getPlaybackSession().getAsset().createLabels(f,e),f},incrementPlayCounter:function(){u++},incrementPauses:function(){t++},addPlaybackTime:function(a){if(!isNaN(g)){var b=x.getPlaybackTime();b+=a-g,x.setPlaybackTime(b),g=NaN}},addBufferingTime:function(a){if(!isNaN(e)){var b=x.getBufferingTime();b+=a-e,x.setBufferingTime(b),e=NaN}},getBufferingTime:function(){return v},setBufferingTime:function(a){v=a},getPlaybackTime:function(){return f},setBufferingTimestamp:function(a){e=a},getBufferingTimestamp:function(){return e},setPlaybackTime:function(a){f=a},setPlaybackTimestamp:function(a){g=a},getPlaybackTimestamp:function(){return g},getPauses:function(){return t},setPauses:function(a){t=a},isPlaybackSessionStarted:function(){return n},setPlaybackSessionStarted:function(a){n=a},getPlaybackCounter:function(){return r},incrementPlaybackCounter:function(){r++},setFirstEventSent:function(a){q=a},setPlaySequenceCounter:function(a){s=a},incrementPlaySequenceCounter:function(){s++},getPlaybackSessionID:function(){return h.ns_st_id},setAsset:function(c,d){a.getLogging().apiCall("setAsset",c,d),c=b.jsonObjectToStringDictionary(c);var e=a.getStateMachine().getCurrentState();if(e!=j.IDLE){a.getLogging().infoLog("Ending the current Clip. It was in state:",b.stateToString(e));var f={};a.getStaCore().newEvent(i.END,b.fixEventTime(f),f)}var g="",h=0;if(null!=c.ns_st_cn)g=c.ns_st_cn;else for(var k=0;k<l.STANDARD_METADATA_LABELS.length;k++)c[l.STANDARD_METADATA_LABELS[k]]&&(g+=l.STANDARD_METADATA_LABELS[k]+":"+c[l.STANDARD_METADATA_LABELS[k]]+";");var m=x,n=m.getAsset();n.isAssetStarted()?(m.hashExists(n.getHash())||(m.storeHash(n.getHash()),m.storeClipNumber(n.getHash(),n.getClipNumber())),m.storeAssetPlaybackCounters(),h=m.hashExists(g)?m.getClipNumber(g):b.exists(c.ns_st_cn)?parseInt(c.ns_st_cn):m.getMaxClipNumber()+1):h=m.hashExists(g)?m.getClipNumber(g):n.getClipNumber(),m.resetAsset(),n=m.getAsset(),n.setHash(g),n.setClipNumber(h),n.setLabels(c);var o=m.getStoredAssetRegisters(g);o&&(n.setAssetStarted(!0),n.setSegmentPlaybackCounter(o.segmentPlaybackCounter),n.setAssetLoadCounter(o.assetLoadCounter),n.setAssetPlaybackCounter(o.assetPlaybackCounter),n.setLowestPartNumberPlayed(o.lowestPartNumberPlayed),n.setSeeking(o.seeking),n.setSeekingTimeBeforeEnd(o.seekingTimeBeforeEnd),n.setSeekStartPosition(o.seekingStartPosition),n.setAssetPlaybackIntervals(o.segmentPlaybackIntervals),o.videoTrack&&n.setVideoTrack(o.videoTrack),o.audioTrack&&n.setAudioTrack(o.audioTrack),o.subtitleTrack&&n.setSubtitleTrack(o.subtitleTrack),o.cdn&&n.setCDN(o.cdn),n.setPlaySequenceCounter(o.playSequenceCounter),n.setPreviousUniquePlaybackInterval(o.previousUniquePlaybackInterval),
n.setPreviousEventIndependentUniquePlaybackInterval(o.previousEventIndependentUniquePlaybackInterval),n.setPreviousLongestPlaybackInterval(o.previousLongestPlaybackInterval)),n.incrementAssetLoadCounter(),n.isAssetStarted()&&d&&m.incrementPlayCounter(),d&&(m.setPlaySequenceCounter(0),n.setPlaybackSessionLooping(!0)),!b.exists(c.ns_st_tp)&&b.exists(c.ns_st_ad)&&b.isNotEmpty(c.ns_st_ad)&&"0"!==c.ns_st_ad&&n.setInternalLabel("ns_st_tp","1")}}),c()}return a.resetPlaybackSession=function(a,b,c){for(var d=b.getAsset(),e=b.getLabels(),f={},g=0;c&&g<c.length;g++)e.hasOwnProperty(c[g])&&(f[c[g]]=e[c[g]]);a.getPlaybackSession().setLabels(f),m.resetAsset(d,a.getPlaybackSession().getAsset(),c)},a}(),o=function(){return function(a){function c(){e=1}function d(c){f=b.extend({},c);var d=a.getStaCore().getLiveEndpointURL();if(a.getAppCore()){if(a.getStaCore().isProperlyInitialized()){var e=a.getStaCore().getExports().et;if("function"==typeof a.getAppCore().getMeasurementDispatcher){var g=a.getAppCore().getMeasurementDispatcher();g.send(e.HIDDEN,c,d)}else{var h=a.getStaCore().getExports().am,i=h.newApplicationMeasurement(a.getAppCore(),e.HIDDEN,c,d);a.getAppCore().getQueue().offer(i)}}}else d&&a.getStaCore().getPlatformAPI().httpGet(a.getStaCore().prepareUrl(d,c))}var e,f,g=this,h=[];b.extend(this,{newEvent:function(a){for(var b=0;b<h.length;++b)h[b](a.eventLabels);d(a.eventLabels),a.eventType!=i.HEARTBEAT&&g.incrementEventCounter()},addMeasurementListener:function(a){"function"==typeof a&&h.push(a)},removeMeasurementListener:function(a){for(var b=NaN,c=0;c<h.length;++c)if(h[c]==a){b=c;break}isNaN(b)||h.splice(b,1)},getEventCounter:function(){return e},incrementEventCounter:function(){e++},setEventCounter:function(a){e=a},getMeasurementSnapshot:function(){return f}}),c()}}(),p=function(){return function(a){function c(){g=0,h=0}function d(){h++;var c={},d=b.fixEventTime(c);c.ns_st_hc=a.getHeartbeat().getCount()+"";var e=a.getStaCore().createLabels(i.HEARTBEAT,c,d);a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),g=0,j.resume()}function e(){null!=f&&(a.getStaCore().getPlatformAPI().clearTimeout(f),f=null)}var f,g,h,j=this,k=l.DEFAULT_HEARTBEAT_INTERVAL;b.extend(this,{getCount:function(){return h},setIntervals:function(a){k=a},getInterval:function(a){var b=0;if(null!=k)for(var c=0;c<k.length;c++){var d=k[c],e=d.playingtime;if(!e||a<e){b=d.interval;break}}return b},getIntervals:function(){return k},resume:function(){e();var b=j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime()+(+new Date-a.getPlaybackSession().getAsset().getPlaybackTimestamp()));if(b>0){var c=g>0?g:b;f=a.getStaCore().getPlatformAPI().setTimeout(d,c)}g=0},pause:function(){e();var b=j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime()+(+new Date-a.getPlaybackSession().getAsset().getPlaybackTimestamp()));g=b-(a.getPlaybackSession().getAsset().getPlaybackTime()+(+new Date-a.getPlaybackSession().getAsset().getPlaybackTimestamp()))%b}}),c()}}(),q=function(){return function(a){function c(){}function d(){var c={},d=b.fixEventTime(c);a.getStaCore().newPseudoEvent(i.KEEPALIVE,d,c),g.start()}function e(){null!=f&&(a.getStaCore().getPlatformAPI().clearTimeout(f),f=null)}var f,g=this,h=l.DEFAULT_KEEP_ALIVE_INTERVAL;b.extend(g,{start:function(){e(),f=a.getStaCore().getPlatformAPI().setTimeout(d,h)},stop:e,setInterval:function(a){h=a},getInterval:function(){return h}}),c()}}(),r=function(){return function(a){function c(){f=j.IDLE,e=null,d=NaN}var d,e,f,g=this;b.extend(g,{eventTypeToState:function(a){if(f==j.IDLE){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.PLAYBACK_NOT_STARTED){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK;if(a==i.END||a==i.AD_SKIP)return j.IDLE}else if(f==j.PLAYING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED;if(a==i.SEEK_START)return j.SEEKING_DURING_PLAYBACK}else if(f==j.PAUSED){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE}else if(f==j.BUFFERING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK}else if(f==j.BUFFERING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING;if(a==i.PAUSE_ON_BUFFERING)return j.PAUSED_DURING_BUFFERING;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER_STOP)return j.SEEKING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE;if(a==i.BUFFER_STOP||a==i.PAUSE)return j.PAUSED}else if(f==j.SEEKING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.SEEKING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_SEEKING}else if(f==j.SEEKING_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_SEEKING}else if(f==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE}else if(f==j.PAUSED_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING}return null},getCurrentState:function(){return f},newEvent:function(a,b){var c=g.eventTypeToState(a);f!=c&&(e=f,f=c,d=b)},getPreviousState:function(){return e},getLastStateChangeTimestamp:function(){return d}}),c()}}(),s=function(){return function(a){var c=this;b.extend(c,{onSeekStartWhenPausedOrBufferingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking()?a.getPlaybackSession().getAsset().isCollectingSeekingTime()||(a.getPlaybackSession().getAsset().setSeekingTimestamp(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)):a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().isSeeking()||(a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onBufferWhenSeekingOrPaused:function(b,c){a.getPlaybackSession().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onPlayWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)},onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause:function(b,c){a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause:function(c,d){a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onBufferStopOrOnPlayWhenBufferingDuringPlayback:function(b,c){var d=parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(),a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getHeartbeat().resume(),a.getKeepAlive().start()}})}}(),t=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaybackSession().addBufferingTime(c),a.getPlaybackSession().getAsset().addBufferingTime(c),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onBufferStop:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()?a.getPlaybackSession().getAsset().isCollectingSeekingTime()||(a.getPlaybackSession().getAsset().setSeekingTimestamp(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)):a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().isSeeking()||(a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().setPlaybackStarted(!0),(a.getPlaybackSession().getAsset().isPlaybackSessionLooping()||0==a.getPlaybackSession().getPlaybackCounter())&&(a.getPlaybackSession().incrementPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)),a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().setPlaybackStarted(!0),a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),(0==a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()||a.getPlaybackSession().getAsset().getPartNumber()<=a.getPlaybackSession().getAsset().getLowestPartNumberPlayed())&&(a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()),a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaySequenceCounter(0),a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getStaCore().isLoadingTimeSent()||(c.ns_st_lt=a.getStaCore().getLoadTimeOffset()+b-a.getStaCore().getInitTimestamp()+"",a.getStaCore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),u=function(){return function(a){var c=this;b.extend(c,{onEndAndSkip:function(c,d){a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().addBufferingTime(c),a.getPlaybackSession().getAsset().addBufferingTime(c),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onPause:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),v=function(){return function(a){var c=this;b.extend(c,{onPauseOnBuffering:function(b,c){parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses();var d=a.getStaCore().createLabels(i.PAUSE,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels),a.getEventManager().newEvent(d),a.getPlaybackSession().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().setBufferingTimestamp(b)},onEndOrAdSkip:function(c,d){parseInt(d.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(),a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().addBufferingTime(c),a.getPlaybackSession().getAsset().addBufferingTime(c),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(),a.getHeartbeat().pause(),a.getKeepAlive().stop(),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses();var e=a.getStaCore().createLabels(i.PAUSE,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)},onPause:function(b,c){parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses();var d=a.getStaCore().createLabels(i.PAUSE,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels),a.getEventManager().newEvent(d)}})}}(),w=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getStaCore().stopPausedOnBufferingTimer(),a.getPlaybackSession().addBufferingTime(c),a.getPlaybackSession().getAsset().addBufferingTime(c),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onPause:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses(),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),x=function(){return function(a){var c=this;b.extend(c,{onBuffer:function(b,c){a.getPlaybackSession().setPlaybackSessionStarted(!0),a.getPlaybackSession().getAsset().setAssetStarted(!0),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()),a.getPlaybackSession().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().setPlaybackSessionStarted(!0),a.getPlaybackSession().getAsset().setAssetStarted(!0),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()),a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().setPlaybackSessionStarted(!0),a.getPlaybackSession().getAsset().setAssetStarted(!0),(a.getPlaybackSession().getAsset().isPlaybackSessionLooping()||0==a.getPlaybackSession().getPlaybackCounter())&&(a.getPlaybackSession().incrementPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().setPlaybackStarted(!0),a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(),(0==a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()||a.getPlaybackSession().getAsset().getPartNumber()<=a.getPlaybackSession().getAsset().getLowestPartNumberPlayed())&&(a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()),a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaySequenceCounter(0),a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getStaCore().isLoadingTimeSent()||(c.ns_st_lt=a.getStaCore().getLoadTimeOffset()+b-a.getStaCore().getInitTimestamp()+"",a.getStaCore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),y=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),z=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().addBufferingTime(c),a.getPlaybackSession().getAsset().addBufferingTime(c),a.getPlaybackSession().getAsset().addElapsedTime(c),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onBufferStop:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().isSeeking()?a.getPlaybackSession().getAsset().isCollectingSeekingTime()||(a.getPlaybackSession().getAsset().setSeekingTimestamp(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)):a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().isSeeking()||(a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onPause:function(b,c){a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().addBufferingTime(b),a.getPlaybackSession().getAsset().addBufferingTime(b),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),A=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking()?a.getPlaybackSession().getAsset().setSeekingTimestamp(b):a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().isSeeking()||(a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().setPlaybackSessionStarted(!0),(a.getPlaybackSession().getAsset().isPlaybackSessionLooping()||0==a.getPlaybackSession().getPlaybackCounter())&&(a.getPlaybackSession().incrementPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)),a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().setPlaybackStarted(!0),a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(),(0==a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()||a.getPlaybackSession().getAsset().getPartNumber()<=a.getPlaybackSession().getAsset().getLowestPartNumberPlayed())&&(a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()),a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaySequenceCounter(0),a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getStaCore().isLoadingTimeSent()||(c.ns_st_lt=a.getStaCore().getLoadTimeOffset()+b-a.getStaCore().getInitTimestamp()+"",a.getStaCore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)},onBuffer:function(){a.getPlaybackSession().setBufferingTimestamp(eventTimestamp),a.getPlaybackSession().getAsset().setBufferingTimestamp(eventTimestamp)}})}}(),B=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().addPlaybackTime(c),a.getPlaybackSession().getAsset().addPlaybackTime(c),a.getPlaybackSession().getAsset().addElapsedTime(c),a.getPlaybackSession().getAsset().addInterval(e);var f=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(f.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(f.eventLabels),a.getEventManager().newEvent(f),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onBuffer:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getKeepAlive().stop(),a.getPlaybackSession().addPlaybackTime(b),a.getPlaybackSession().getAsset().addPlaybackTime(b),a.getPlaybackSession().getAsset().addInterval(d),a.getStaCore().isPauseOnBufferingEnabled()&&a.getStaCore().startPausedOnBufferingTimer(b,c),a.getPlaybackSession().getAsset().incrementBufferCount(),a.getPlaybackSession().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().setBufferingTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getKeepAlive().stop(),a.getPlaybackSession().addPlaybackTime(b),a.getPlaybackSession().getAsset().addPlaybackTime(b),a.getPlaybackSession().getAsset().addInterval(d),a.getPlaybackSession().getAsset().incrementSeeks(),a.getPlaybackSession().getAsset().setSeeking(!0),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0),a.getPlaybackSession().getAsset().setSeekStartPosition(d),a.getPlaybackSession().getAsset().setSeekingTimestamp(b),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses();var e=a.getStaCore().createLabels(i.PAUSE,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getKeepAlive().stop(),a.getPlaybackSession().addPlaybackTime(b),a.getPlaybackSession().getAsset().addPlaybackTime(b),a.getPlaybackSession().getAsset().addInterval(d),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses();var e=a.getStaCore().createLabels(i.PAUSE,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),C=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onPause:function(b,c){a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),(a.getPlaybackSession().getAsset().isPlaybackSessionLooping()||0==a.getPlaybackSession().getPlaybackCounter())&&(a.getPlaybackSession().incrementPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)),a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().getAsset().setPlaybackStarted(!0),a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(),(0==a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()||a.getPlaybackSession().getAsset().getPartNumber()<=a.getPlaybackSession().getAsset().getLowestPartNumberPlayed())&&(a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()),a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(),a.getPlaybackSession().getAsset().setPlaySequenceCounter(0),a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getStaCore().isLoadingTimeSent()||(c.ns_st_lt=a.getStaCore().getLoadTimeOffset()+b-a.getStaCore().getInitTimestamp()+"",a.getStaCore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),D=function(){return function(a){var c=this;b.extend(c,{onPause:function(b,c){a.getPlaybackSession().incrementPauses(),a.getPlaybackSession().getAsset().incrementPauses(),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b)}})}}(),E=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){parseInt(d.ns_st_po);a.getStaCore().resetHeartbeat(),a.getKeepAlive().stop(),a.getPlaybackSession().getAsset().addElapsedTime(c);var e=a.getStaCore().createLabels(i.END,d,c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e),a.getPlaybackSession().getAsset().isSeeking()&&a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c-a.getPlaybackSession().getAsset().getSeekingTimestamp()),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().storeAssetPlaybackCounters(),a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(),a.getPlaybackSession().getAsset().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getStaCore().resetPlaybackSession()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),a.getPlaybackSession().getAsset().incrementPlayCounter(),a.getPlaybackSession().getAsset().isSeeking()&&(a.getPlaybackSession().getAsset().isCollectingSeekingTime()&&(a.getPlaybackSession().getAsset().addSeekingTime(b),a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)),a.getPlaybackSession().getAsset().addSeekingAmount(d),a.getPlaybackSession().getAsset().setSeeking(!1)),a.getPlaybackSession().getAsset().addElapsedTime(b),a.getPlaybackSession().getAsset().setElapsedTimestamp(b),a.getPlaybackSession().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackTimestamp(b),a.getPlaybackSession().getAsset().setPlaybackStartPosition(d),a.getStaCore().isLoadingTimeSent()||(c.ns_st_lt=a.getStaCore().getLoadTimeOffset()+b-a.getStaCore().getInitTimestamp()+"",a.getStaCore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().start();var e=a.getStaCore().createLabels(i.PLAY,c,b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels),a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels),a.getEventManager().newEvent(e)}})}}(),F=function(){return function(a){function d(){if(F=new G(ea),b.getNamespace().comScore?(fa=b.getNamespace().comScore.exports,F.setAppCore(fa.c())):F.setAppCore(null),a.publisherId){ea.setLabel("c2",a.publisherId);var d=a.secure;!d&&F.getAppCore()?d=F.getAppCore().isSecure():!d&&b.isBrowser()&&(d=b.isWebSecure());var e=(d?"https://sb":"http://b")+".scorecardresearch.com/p?c1=2";ea.setLiveEndpointURL(e)}a.liveEndpointURL&&ea.setLiveEndpointURL(a.liveEndpointURL),F.setKeepAlive(new q(F)),F.setHeartbeat(new p(F)),F.setEventManager(new o(F)),F.setStateMachine(new r),F.setLogging(new c(l.LOG_NAMESPACE,a.debug)),F.setPlaybackSession(new n(F)),H=new x(F),I=new y(F),J=new A(F),K=new B(F),L=new t(F),M=new v(F),N=new w(F),O=new u(F),P=new z(F),Q=new C(F),R=new D(F),S=new E(F),T=new s(F),U=!1,V=0,W=+new Date,Y=!0,$=!1,aa=[],a.systemClockJumpDetection&&ea.enableSystemClockJumpsDetection(parseInt(a.systemClockJumpDetectionInterval))}function e(a){var b=F.getStateMachine().getCurrentState();if(b==j.IDLE||b==j.PLAYBACK_NOT_STARTED||b==j.BUFFERING_BEFORE_PLAYBACK||b==j.SEEKING_BEFORE_PLAYBACK){if(a==i.PLAY)return!0}else if(b==j.PLAYING){if(a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE)return!0}else if(b==j.PAUSED||b==j.BUFFERING_DURING_PAUSE||b==j.SEEKING_DURING_PLAYBACK||b==j.SEEKING_DURING_BUFFERING||b==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_PLAYBACK){if(a==i.PAUSE_ON_BUFFERING||a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.PAUSED_DURING_BUFFERING&&(a==i.END||a==i.AD_SKIP||a==i.BUFFER_STOP||a==i.PLAY))return!0;return!1}function f(a,b,c){var d=F.getStateMachine().getCurrentState();a==i.AD_SKIP&&!c.hasOwnProperty("ns_st_ui")&&e(a)?c.ns_st_ui="skip":a==i.SEEK_START&&!c.hasOwnProperty("ns_st_ui")&&e(a)&&(c.ns_st_ui="seek"),d==j.IDLE?a==i.BUFFER?H.onBuffer(b,c):a==i.SEEK_START?H.onSeekStart(b,c):a==i.PLAY&&H.onPlay(b,c):d==j.PLAYBACK_NOT_STARTED?a==i.END||a==i.AD_SKIP?J.onEndOrAdSkip(b,c):a==i.SEEK_START?J.onSeekStart(b,c):a==i.PLAY?J.onPlay(b,c):a==i.BUFFER&&J.onBuffer(b,c):d==j.PLAYING?a==i.END||a==i.AD_SKIP?K.onEndOrAdSkip(b,c):a==i.BUFFER?K.onBuffer(b,c):a==i.SEEK_START?K.onSeekStart(b,c):a==i.PAUSE&&K.onPause(b,c):d==j.PAUSED?a==i.END||a==i.AD_SKIP?I.onEndOrAdSkip(b,c):a==i.PLAY?I.onPlay(b,c):a==i.BUFFER?T.onBufferWhenSeekingOrPaused(b,c):a==i.SEEK_START&&T.onSeekStartWhenPausedOrBufferingDuringPause(b,c):d==j.BUFFERING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?L.onEndOrAdSkip(b,c):a==i.BUFFER_STOP?L.onBufferStop(b,c):a==i.SEEK_START?L.onSeekStart(b,c):a==i.PAUSE?L.onPause(b,c):a==i.PLAY&&L.onPlay(b,c):d==j.BUFFERING_DURING_PLAYBACK?a==i.PAUSE_ON_BUFFERING?M.onPauseOnBuffering(b,c):a==i.BUFFER_STOP?T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b,c):a==i.END||a==i.AD_SKIP?M.onEndOrAdSkip(b,c):a==i.SEEK_START?M.onSeekStart(b,c):a==i.PAUSE?M.onPause(b,c):a==i.PLAY&&T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b,c):d==j.BUFFERING_DURING_SEEKING?a==i.END||a==i.AD_SKIP?N.onEndOrAdSkip(b,c):a==i.PAUSE?N.onPause(b,c):a==i.PLAY?N.onPlay(b,c):a==i.BUFFER_STOP&&T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,c):d==j.BUFFERING_DURING_PAUSE?a==i.END||a==i.AD_SKIP?O.onEndAndSkip(b,c):a==i.PAUSE?O.onPause(b,c):a==i.PLAY?O.onPlay(b,c):a==i.SEEK_START?T.onSeekStartWhenPausedOrBufferingDuringPause(b,c):a==i.BUFFER_STOP&&T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,c):d==j.SEEKING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?Q.onEndOrAdSkip(b,c):a==i.PAUSE?Q.onPause(b,c):a==i.PLAY?Q.onPlay(b,c):a==i.BUFFER&&T.onBufferWhenSeekingOrPaused(b,c):d==j.SEEKING_DURING_PLAYBACK?a==i.END||a==i.AD_SKIP?S.onEndOrAdSkip(b,c):a==i.PLAY?S.onPlay(b,c):a==i.BUFFER?T.onBufferWhenSeekingOrPaused(b,c):a==i.PAUSE&&T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,c):d==j.SEEKING_DURING_BUFFERING?a==i.PAUSE?R.onPause(b,c):a==i.BUFFER?T.onBufferWhenSeekingOrPaused(b,c):a==i.PLAY?T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,c):a==i.END||a==i.AD_SKIP?T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,c):a==i.BUFFER_STOP&&T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,c):d==j.PAUSED_DURING_BUFFERING?a==i.END||a==i.AD_SKIP?P.onEndOrAdSkip(b,c):a==i.BUFFER_STOP?P.onBufferStop(b,c):a==i.SEEK_START?P.onSeekStart(b,c):a==i.PAUSE?P.onPause(b,c):a==i.PLAY&&P.onPlay(b,c):d==j.SEEKING_DURING_PAUSE&&(a==i.BUFFER?T.onBufferWhenSeekingOrPaused(b,c):a==i.PLAY?T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,c):a==i.PAUSE?T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,c):a==i.END||a==i.AD_SKIP?T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,c):a==i.BUFFER_STOP&&T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,c)),e(a)&&F.getPlaybackSession().setFirstEventSent(!0)}function m(a,c){for(var d,e=ka.encodeURIComponent||escape,f=[],g=l.LABELS_ORDER,h=a.split("?"),i=h[0],j=h[1],k=j.split("&"),m=0,n=k.length;m<n;m++){var o=k[m].split("="),p=unescape(o[0]),q=unescape(o[1]);p&&(c[p]=q)}for(var r={},s=0,t=g.length;s<t;s++){var u=g[s];if(c.hasOwnProperty(u)){var v=c[u];"undefined"!=typeof v&&null!=v&&(r[u]=!0,f.push(e(u)+"="+e(c[u])))}}for(var w in c)if(c.hasOwnProperty(w)){if(r[w])continue;var x=c[w];"undefined"!=typeof x&&null!=x&&f.push(e(w)+"="+e(c[w]))}d=i+"?"+f.join("&"),d=d+(d.indexOf("&c8=")<0?"&c8="+e(la.title):"")+(d.indexOf("&c7=")<0?"&c7="+e(la.URL):"")+(d.indexOf("&c9=")<0?"&c9="+e(la.referrer):"");var y=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT;if(d.length>y&&d.indexOf("&")>0){var z=d.substr(0,y-8).lastIndexOf("&");d=(d.substring(0,z)+"&ns_cut="+e(d.substring(z+1))).substr(0,y)}return d}var F,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea=this,fa={},ga=l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,ha=l.THROTTLING_DELAY,ia={},ja=!1;b.extend(ea,{getConfiguration:function(){return a||{}},enableSystemClockJumpsDetection:function(a){(a<l.SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL||!a)&&(a=l.SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL),b.onSystemClockJump(function(a){da=a,ja=!0},a)},createLabels:function(a,c,d){var e=!1;if(a==i.HEARTBEAT){var f=isNaN(X)?W:X;X=d,(d<f||ja)&&(e=!0,ja=!1,d<f?(F.getPlaybackSession().addInternalErrorFlag("1"),F.getLogging().infoLog("System clock jump detected","to the far past")):da?(F.getPlaybackSession().addInternalErrorFlag("3"),F.getLogging().infoLog("System clock jump detected","to the future")):(F.getPlaybackSession().addInternalErrorFlag("2"),F.getLogging().infoLog("System clock jump detected","to the near past")),d=f)}var g={};if("undefined"!=typeof document){var h=document;g.c7=h.URL,g.c8=h.title,g.c9=h.referrer}return g.ns_ts=+new Date+"",g.ns_st_ev=i.toString(a),g.ns_st_mp=l.DEFAULT_PLAYERNAME,g.ns_st_mv=l.STREAMINGANALYTICS_VERSION,g.ns_st_ub="0",g.ns_st_br="0",g.ns_st_pn="1",g.ns_st_tp="0",g.ns_st_it=k.toString(k.SINGLE_CLIP),g.ns_st_sv=l.STREAMINGANALYTICS_VERSION,g.ns_st_smv=l.MODEL_VERSION,g.ns_type="hidden",g.ns_st_ec=F.getEventManager().getEventCounter()+"",g.ns_st_ki=F.getKeepAlive().getInterval()+"",F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled()?g.ns_st_po=F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(d)+"":g.ns_st_po=ca+"",ca=parseInt(g.ns_st_po),b.extend(g,ea.getLabels()),F.getPlaybackSession().createLabels(g,d),b.extend(g,c),e&&(F.getPlaybackSession().setPlaybackTimestamp(X-parseInt(g.ns_st_pt)),F.getPlaybackSession().getAsset().setPlaybackTimestamp(X-parseInt(g.ns_st_pt)),F.getPlaybackSession().getAsset().setElapsedTimestamp(X-parseInt(g.ns_st_et)),F.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&F.getPlaybackSession().getAsset().setBufferingTimestamp(X-parseInt(g.ns_st_bp))),{eventType:a,eventLabels:g}},newEvent:function(a,c,d,e){ea.stopDelayedTransitionTimer();var g=F.getStateMachine().getCurrentState(),h=F.getStateMachine().eventTypeToState(a);if(null==h||h==g)return void F.getLogging().infoLog("Ignored event:",i.toString(a),"during state",b.stateToString(g),d);if(ea.isThrottlingEnabled()&&(g==j.PLAYING||g==j.PAUSED)&&(h==j.PLAYING||h==j.PAUSED)&&!e){F.getLogging().infoLog("Throttled event:",i.toString(a),"during state",b.stateToString(g),d,ea.getThrottlingDelay(),"ms");var k=function(a,b,d){return function(){ea.newEvent(a,c,d,!0)}}(a,h,d);return void(_=F.getPlatformAPI().setTimeout(k,ea.getThrottlingDelay()))}var l=isNaN(X)?W:X;X=c;var m=!1;(c<l||ja)&&(m=!0,ja=!1,c<l?(F.getPlaybackSession().addInternalErrorFlag("1"),F.getLogging().infoLog("System clock jump detected","to the far past")):da?(F.getPlaybackSession().addInternalErrorFlag("3"),F.getLogging().infoLog("System clock jump detected","to the future")):(F.getPlaybackSession().addInternalErrorFlag("2"),F.getLogging().infoLog("System clock jump detected","to the near past")),c=l),d.ns_st_po||(F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled()?F.getStateMachine().getCurrentState()==j.IDLE?d.ns_st_po="0":d.ns_st_po=F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c)+"":d.ns_st_po=ca+""),ca=parseInt(d.ns_st_po),F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)),f(a,c,d);var n=0;isNaN(F.getStateMachine().getLastStateChangeTimestamp())||(n=c-F.getStateMachine().getLastStateChangeTimestamp()),F.getStateMachine().newEvent(a,c),m&&(h!=j.IDLE&&h!=j.PLAYBACK_NOT_STARTED&&h!=j.SEEKING_BEFORE_PLAYBACK&&h!=j.BUFFERING_BEFORE_PLAYBACK&&F.getPlaybackSession().getAsset().setElapsedTimestamp(X),h!=j.BUFFERING_BEFORE_PLAYBACK&&h!=j.BUFFERING_DURING_PAUSE&&h!=j.BUFFERING_DURING_PLAYBACK&&h!=j.BUFFERING_DURING_SEEKING&&h!=j.PAUSED_DURING_BUFFERING||(F.getPlaybackSession().setBufferingTimestamp(X),F.getPlaybackSession().getAsset().setBufferingTimestamp(X)),h!=j.PLAYING&&h!=j.BUFFERING_DURING_PLAYBACK||(F.getPlaybackSession().setPlaybackTimestamp(X),F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)),h!=j.SEEKING_BEFORE_PLAYBACK&&h!=j.SEEKING_DURING_BUFFERING&&h!=j.SEEKING_DURING_PAUSE&&h!=j.SEEKING_DURING_PLAYBACK&&h!=j.BUFFERING_DURING_SEEKING||F.getPlaybackSession().getAsset().setSeekingTimestamp(X)),F.getLogging().log("Transition from",b.stateToString(g),"to",b.stateToString(h),"due to event:",i.toString(a));for(var o=0,p=aa.length;o<p;o++)aa[o](g,h,d,n)},newPseudoEvent:function(a,c,d){if((a==i.LOAD||a==i.ENGAGE)&&F.getStateMachine().getCurrentState()!=j.IDLE)return void F.getLogging().infoLog("Ignored pseudo-event:",i.toString(a),"during state",b.stateToString(F.getStateMachine().getCurrentState()),d);a==i.ERROR&&null==d.ns_st_er&&(d.ns_st_er=h.UNKNOWN_VALUE),a==i.TRANSFER&&null==d.ns_st_rp&&(d.ns_st_rp=h.UNKNOWN_VALUE);var e,f,g,k,l=!0,m=!1;switch(a){case i.BIT_RATE:e="ns_st_br",f="ns_st_pbr";break;case i.PLAYBACK_RATE:e="ns_st_rt",f="ns_st_prt";break;case i.VOLUME:e="ns_st_vo",f="ns_st_pvo";break;case i.WINDOW_STATE:e="ns_st_ws",f="ns_st_pws";break;case i.AUDIO:e="ns_st_at",f="ns_st_pat";break;case i.VIDEO:e="ns_st_vt",f="ns_st_pvt";break;case i.SUBS:e="ns_st_tt",f="ns_st_ptt";break;case i.CDN:e="ns_st_cdn",f="ns_st_pcdn";break;default:l=!1}if(l&&e in d)switch(k=d[e],a){case i.BIT_RATE:case i.VOLUME:case i.WINDOW_STATE:e in ia&&(g=ia[e],d[f]=g,m=k==g+""),ia[e]=d[e];break;case i.AUDIO:case i.VIDEO:case i.SUBS:case i.CDN:F.getPlaybackSession().getAsset().hasInternalLabel(e)&&(g=F.getPlaybackSession().getAsset().getInternalLabel(e),d[f]=g,m=k==g+""),F.getPlaybackSession().getAsset().setInternalLabel(e,d[e]);break;case i.PLAYBACK_RATE:g=F.getPlaybackSession().getAsset().getPlaybackRate(),d[f]=g+""}if(l&&F.getStateMachine().getCurrentState()!=j.PLAYING&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||l&&m)return a==i.PLAYBACK_RATE&&F.getPlaybackSession().getAsset().setPlaybackRate(parseInt(d.ns_st_rt)),void F.getLogging().infoLog("No measurement send for the pseudo-event:",i.toString(a),"during state",b.stateToString(F.getStateMachine().getCurrentState()),d);var n=isNaN(X)?W:X;X=c;var o=!1;(c<n||ja)&&(o=!0,ja=!1,c<n?(F.getPlaybackSession().addInternalErrorFlag("1"),F.getLogging().infoLog("System clock jump detected","to the far past")):da?(F.getPlaybackSession().addInternalErrorFlag("3"),F.getLogging().infoLog("System clock jump detected","to the future")):(F.getPlaybackSession().addInternalErrorFlag("2"),F.getLogging().infoLog("System clock jump detected","to the near past")),c=n),d.ns_st_po||(F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled()?d.ns_st_po=F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c)+"":d.ns_st_po=ca+""),ca=parseInt(d.ns_st_po),F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)),F.getStateMachine().getCurrentState()!=j.IDLE&&F.getStateMachine().getCurrentState()!=j.PLAYBACK_NOT_STARTED&&F.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&(F.getPlaybackSession().getAsset().addElapsedTime(c),F.getPlaybackSession().getAsset().setElapsedTimestamp(c)),F.getStateMachine().getCurrentState()!=j.PLAYING&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||(F.getPlaybackSession().addPlaybackTime(c),F.getPlaybackSession().setPlaybackTimestamp(c),F.getPlaybackSession().getAsset().addPlaybackTime(c),F.getPlaybackSession().getAsset().setPlaybackTimestamp(c),F.getPlaybackSession().getAsset().addInterval(parseInt(d.ns_st_po)),F.getPlaybackSession().getAsset().setPlaybackStartPosition(parseInt(d.ns_st_po))),F.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PAUSE&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING||(F.getPlaybackSession().addBufferingTime(c),F.getPlaybackSession().setBufferingTimestamp(c),F.getPlaybackSession().getAsset().addBufferingTime(c),F.getPlaybackSession().getAsset().setBufferingTimestamp(c));var p=ea.createLabels(a,d,c);F.getPlaybackSession().getAsset().updateDeltaLabels(p.eventLabels),F.getPlaybackSession().getAsset().updateIndependentLabels(p.eventLabels),F.getEventManager().newEvent(p),a==i.PLAYBACK_RATE&&F.getPlaybackSession().getAsset().setPlaybackRate(parseInt(d.ns_st_rt)),o&&(F.getStateMachine().getCurrentState()!=j.PLAYING&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||(F.getPlaybackSession().setPlaybackTimestamp(X),F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)),F.getStateMachine().getCurrentState()!=j.IDLE&&F.getStateMachine().getCurrentState()!=j.PLAYBACK_NOT_STARTED&&F.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&F.getPlaybackSession().getAsset().setElapsedTimestamp(X),F.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PAUSE&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING&&F.getStateMachine().getCurrentState()!=j.PAUSED_DURING_BUFFERING||(F.getPlaybackSession().setBufferingTimestamp(X),F.getPlaybackSession().getAsset().setBufferingTimestamp(X)),F.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.SEEKING_DURING_BUFFERING&&F.getStateMachine().getCurrentState()!=j.SEEKING_DURING_PAUSE&&F.getStateMachine().getCurrentState()!=j.SEEKING_DURING_PLAYBACK&&F.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING||F.getPlaybackSession().getAsset().setSeekingTimestamp(X))},getState:function(){return F.getStateMachine().getCurrentState()},addListener:function(a){aa.push(a)},removeListener:function(a){aa.splice(b.indexOf(a,aa),1)},getLabel:function(a){return ia[a]},getLabels:function(){return ia},setLabel:function(a,b){null==b?delete ia[a]:ia[a]=b},setLabels:function(a){for(var b in a)a.hasOwnProperty(b)&&ea.setLabel(b,a[b])},getPlatformAPI:function(){return F.getAppCore()?F.getAppCore().getPlatformAPI():g},getExports:function(){return fa},isProperlyInitialized:function(){var a=F.getAppCore().getAppContext(),b=F.getAppCore().getSalt(),c=F.getAppCore().getPixelURL();return a&&c&&b},setThrottlingDelay:function(a){ha=a},getThrottlingDelay:function(){return ha},isThrottlingEnabled:function(){return $},setThrottlingEnabled:function(a){$=a},isLoadingTimeSent:function(){return U},setLoadingTimeSent:function(a){U=a},getLoadTimeOffset:function(){return V},setLoadTimeOffset:function(a){V=a},getInitTimestamp:function(){return W},setPauseOnBufferingInterval:function(a){ga=a},getPauseOnBufferingInterval:function(){return ga},isPauseOnBufferingEnabled:function(){return Y},setPauseOnBufferingEnabled:function(a){Y=a},startPausedOnBufferingTimer:function(a,c){ea.stopPausedOnBufferingTimer(),Z=ea.getPlatformAPI().setTimeout(function(){var a={},d=b.fixEventTime(a),e=parseInt(c.ns_st_po);a.ns_st_po=e+"",ea.newEvent(i.PAUSE_ON_BUFFERING,d,a)},ga)},stopPausedOnBufferingTimer:function(){null!=Z&&(ea.getPlatformAPI().clearTimeout(Z),Z=null)},stopDelayedTransitionTimer:function(){_&&(ea.getPlatformAPI().clearTimeout(_),_=null)},setLiveEndpointURL:function(a){if(null==a||0==a.length)return null;var b=decodeURIComponent||unescape,c=a.indexOf("?");if(c>=0){if(c<a.length-1){for(var d=a.substring(c+1).split("&"),e=0,f=d.length;e<f;e++){var g=d[e],h=g.split("=");2==h.length?ea.setLabel(h[0],b(h[1])):1==h.length&&ea.setLabel(l.PAGE_NAME_LABEL,b(h[0]))}a=a.substring(0,c+1)}}else a+="?";return ba=a},getLiveEndpointURL:function(){return ba?ba:"undefined"!=typeof ns_p&&"string"==typeof ns_p.src?ba=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):"string"==typeof ns_pixelUrl?ba=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},getStaSM:function(){return F},resetPlaybackSession:function(a){var b=F.getPlaybackSession();F.setPlaybackSession(new n(F)),n.resetPlaybackSession(F,b,a)},resetHeartbeat:function(){F.getHeartbeat().pause();var a=F.getHeartbeat().getIntervals();F.setHeartbeat(new p(F)),F.getHeartbeat().setIntervals(a)}});var ka,la;b.isBrowser()?(ka=window,la=document):(ka={},la={location:{href:""},title:"",URL:"",referrer:"",cookie:""}),b.extend(ea,{prepareUrl:m}),d()}}(),G=function(){return function(a){var c,d,e,f,g,h,i,j=this;b.extend(j,{getAppCore:function(){return c},getStaCore:function(){return a},getEventManager:function(){return d},getStateMachine:function(){return e},getHeartbeat:function(){return f},getKeepAlive:function(){return g},getPlaybackSession:function(){return h},getLogging:function(){return i},setAppCore:function(a){c=a},setKeepAlive:function(a){g=a},setHeartbeat:function(a){f=a},setEventManager:function(a){d=a},setStateMachine:function(a){e=a},setPlaybackSession:function(a){h=a},setLogging:function(a){i=a}})}}(),H=function(){return function(a){function c(){a=b.extend({},a),f=new F(a),f.getStaSM().getLogging().log("New StreamingAnalytics instance with configuration",a)}function d(a){var c,d;if(c="object"==typeof arguments[1]?arguments[1]:"object"==typeof arguments[2]?arguments[2]:{},d="number"==typeof arguments[1]?arguments[1]:"number"==typeof arguments[2]?arguments[2]:NaN,
i.toString(a)){c=b.jsonObjectToStringDictionary(c);var e=b.fixEventTime(c);c.ns_st_po||isNaN(d)||(c.ns_st_po=b.parseInteger(d,0)+""),a==i.PLAY||a==i.PAUSE||a==i.BUFFER||a==i.END||a==i.SEEK_START||a==i.AD_SKIP||a==i.BUFFER_STOP?f.newEvent(a,e,c):f.newPseudoEvent(a,e,c)}}function e(){h&&f.getStaSM().getStateMachine().getCurrentState()!=j.IDLE&&g.notifyEnd()}var f,g=this,h=!0;b.extend(this,{isProperlyInitialized:function(){return f.isProperlyInitialized()},reset:function(a){d(i.END);var b=f;b.getStaSM().getKeepAlive().stop(),b.getStaSM().getHeartbeat().pause(),f=new F(b.getConfiguration()),n.resetPlaybackSession(f.getStaSM(),b.getStaSM().getPlaybackSession(),a)},setPauseOnBufferingInterval:function(a){f.setPauseOnBufferingInterval(a)},getPauseOnBufferingInterval:function(){return f.getPauseOnBufferingInterval()},setKeepAliveInterval:function(a){f.getStaSM().getKeepAlive().setInterval(a)},getKeepAliveInterval:function(){return f.getStaSM().getKeepAlive().getInterval()},setHeartbeatIntervals:function(a){f.getStaSM().getHeartbeat().setIntervals(a)},notifyPlay:function(a,b){f.getStaSM().getLogging().apiCall("notifyPlay",a,b),d(i.PLAY,a,b)},notifyPause:function(a,b){f.getStaSM().getLogging().apiCall("notifyPause",a,b),d(i.PAUSE,a,b)},notifyEnd:function(a,b){f.getStaSM().getLogging().apiCall("notifyEnd",a,b),d(i.END,a,b)},notifyBufferStart:function(a,b){f.getStaSM().getLogging().apiCall("notifyBufferStart",a,b),d(i.BUFFER,a,b)},notifyBufferStop:function(a,b){f.getStaSM().getLogging().apiCall("notifyBufferStop",a,b),d(i.BUFFER_STOP,a,b)},notifyLoad:function(a,b){f.getStaSM().getLogging().apiCall("notifyLoad",a,b),d(i.LOAD,a,b)},notifyEngage:function(a,b){f.getStaSM().getLogging().apiCall("notifyEngage",a,b),d(i.ENGAGE,a,b)},notifySeekStart:function(a,b){f.getStaSM().getLogging().apiCall("notifySeekStart",a,b),d(i.SEEK_START,a,b)},notifySkipAd:function(a,b){f.getStaSM().getLogging().apiCall("notifySkipAd",a,b),d(i.AD_SKIP,a,b)},notifyCallToAction:function(a,b){f.getStaSM().getLogging().apiCall("notifyCallToAction",a,b),d(i.CTA,a,b)},notifyError:function(a,b){f.getStaSM().getLogging().apiCall("notifyError",a,b),d(i.ERROR,a,b)},notifyTransferPlayback:function(a,b){f.getStaSM().getLogging().apiCall("notifyTransferPlayback",a,b),d(i.TRANSFER,a,b)},notifyDrmFail:function(a,b){f.getStaSM().getLogging().apiCall("notifyDrmFail",a,b),d(i.DRM_FAILED,a,b)},notifyDrmApprove:function(a,b){f.getStaSM().getLogging().apiCall("notifyDrmApprove",a,b),d(i.DRM_APPROVED,a,b)},notifyDrmDeny:function(a,b){f.getStaSM().getLogging().apiCall("notifyDrmDeny",a,b),d(i.DRM_DENIED,a,b)},notifyChangeBitrate:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeBitrate",a,b,c),null!=a){var e=c||{};e.ns_st_br=a+"",d(i.BIT_RATE,e,b)}},notifyChangePlaybackRate:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangePlaybackRate",a,b,c),null!=a){var e=c||{};e.ns_st_rt=a+"",d(i.PLAYBACK_RATE,e,b)}},notifyChangeVolume:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeVolume",a,b,c),null!=a){var e=c||{};e.ns_st_vo=a+"",d(i.VOLUME,e,b)}},notifyChangeWindowState:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeWindowState",a,b,c),null!=a){var e=c||{};e.ns_st_ws=a+"",d(i.WINDOW_STATE,e,b)}},notifyChangeAudioTrack:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeAudioTrack",a,b,c),null!=a){var e=c||{};e.ns_st_at=a+"",d(i.AUDIO,e,b)}},notifyChangeVideoTrack:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeVideoTrack",a,b,c),null!=a){var e=c||{};e.ns_st_vt=a+"",d(i.VIDEO,e,b)}},notifyChangeSubtitleTrack:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeSubtitleTrack",a,b,c),null!=a){var e=c||{};e.ns_st_tt=a+"",d(i.SUBS,e,b)}},notifyChangeCdn:function(a,b,c){if(f.getStaSM().getLogging().apiCall("notifyChangeCdn",a,b,c),null!=a){var e=c||{};e.ns_st_cdn=a+"",d(i.CDN,e,b)}},notifyCustomEvent:function(a,b){f.getStaSM().getLogging().apiCall("notifyCustomEvent",a,b),d(i.CUSTOM,a,b)},getLabels:function(){return f.getLabels()},getState:function(){return f.getStaSM().getStateMachine().getCurrentState()},setLabels:function(a){f.setLabels(a)},getLabel:function(a){return f.getLabel(a)},setLabel:function(a,b){f.setLabel(a,b)},getLoadTimeOffset:function(){return f.getLoadTimeOffset()},setLoadTimeOffset:function(a){f.setLoadTimeOffset(a)},setLiveEndpointURL:function(a){return f.setLiveEndpointURL(a)},getLiveEndpointURL:function(){return f.getLiveEndpointURL()},isPauseOnBufferingEnabled:function(){return f.isPauseOnBufferingEnabled()},setPauseOnBufferingEnabled:function(a){f.setPauseOnBufferingEnabled(a)},isThrottlingEnabled:function(){return f.isThrottlingEnabled()},setThrottlingEnabled:function(a){f.setThrottlingEnabled(a)},setThrottlingDelay:function(a){f.setThrottlingDelay(a)},getThrottlingDelay:function(){return f.getThrottlingDelay()},setPlaybackIntervalMergeTolerance:function(a){f.getStaSM().getPlaybackSession().getAsset().setPlaybackIntervalMergeTolerance(a)},getPlaybackIntervalMergeTolerance:function(){return f.getStaSM().getPlaybackSession().getAsset().getPlaybackIntervalMergeTolerance()},createPlaybackSession:function(a){f.getStaSM().getLogging().apiCall("createPlaybackSession",a),a=b.jsonObjectToStringDictionary(a);var c=f.getStaSM().getStateMachine().getCurrentState();c!=j.IDLE&&(f.getStaSM().getLogging().infoLog("Ending the current Clip. It was in state:",b.stateToString(c)),g.notifyEnd()),f.getStaSM().getPlaybackSession().isPlaybackSessionStarted()&&f.resetPlaybackSession(),f.getStaSM().getPlaybackSession().setLabels(a)},getVersion:function(){return l.STREAMINGANALYTICS_VERSION},addListener:function(a){f.addListener(a)},removeListener:function(a){f.removeListener(a)},addMeasurementListener:function(a){f.getStaSM().getEventManager().addMeasurementListener(a)},removeMeasurementListener:function(a){f.getStaSM().getEventManager().removeMeasurementListener(a)},getPlaybackSession:function(){return f.getStaSM().getPlaybackSession()},setExitEndEventEnabled:function(a){h=a},isExitEndEventEnabled:function(){return h},getPlatformAPI:function(){return f.getPlatformAPI()},_getLogHistory:function(){return f.getStaSM().getLogging().getLogHistory()}}),b.isBrowser()&&(window.addEventListener?(window.addEventListener("beforeunload",e),window.addEventListener("unload",e)):window.attachEvent&&(window.attachEvent("onbeforeunload",e),window.attachEvent("onunload",e))),c()}}();return H.PlayerEvents=i,H.InternalStates=j,H.ImplementationType=k,H.Constants=l,H}(),a.ReducedRequirementsStreamingAnalytics=a.ReducedRequirementsStreamingAnalytics||function(){var d={LongFormOnDemand:"12",ShortFormOnDemand:"11",Live:"13",UserGeneratedLongFormOnDemand:"22",UserGeneratedShortFormOnDemand:"21",UserGeneratedLive:"23",Bumper:"99",Other:"00"},e={LinearOnDemandPreRoll:"11",LinearOnDemandMidRoll:"12",LinearOnDemandPostRoll:"13",LinearLive:"21",BrandedOnDemandPreRoll:"31",BrandedOnDemandMidRoll:"32",BrandedOnDemandPostRoll:"33",BrandedOnDemandContent:"34",BrandedOnDemandLive:"35",Other:"00"},f=a.StreamingAnalytics,g=a.StreamingAnalytics.InternalStates||null,h=a.StreamingAnalytics.ImplementationType||null,i=null!=a.StreamingAnalytics.InternalStates&&null!=a.StreamingAnalytics.ImplementationType,j=a.StreamingAnalytics.Constants,k=function(a){function k(){i&&(b.exists(a)&&(a.customerC2||a.publisherId)||b.getNamespace().comScore?t=new f(a):w.error("Cannot instantiate StreamingAnalytics","The property publisherId was not provided (or incorrectly provided) in the StreamingAnalytics configuration."),t&&t.setLabel("ns_st_it",h.toString(h.REDUCED)))}function l(a){for(var b in j.STANDARD_METADATA_LABELS)if(j.STANDARD_METADATA_LABELS.hasOwnProperty(b)&&!m(j.STANDARD_METADATA_LABELS[b],q,a))return!1;return!0}function m(a,c,d){return!!(b.exists(a)&&b.exists(c)&&b.exists(d)&&(c.hasOwnProperty(a)&&d.hasOwnProperty(a)&&c[a]===d[a]||!c.hasOwnProperty(a)&&!d.hasOwnProperty(a)))}function n(a){t.getPlaybackSession().setAsset(a),q=a,t.notifyPlay()}function o(a){var b=a||{};b.ns_st_ad="1",b.ns_st_an=++r+"",t.getPlaybackSession().setAsset(b),t.notifyPlay(),s=!1}function p(a,b){v==u.None&&(v=b),s&&v==b&&l(a)?(t.getPlaybackSession().getAsset().setLabels(a),t.getState()!=g.PLAYING&&t.notifyPlay()):n(a),s=!0,v=b}var q=null,r=0,s=!1,t=null,u={None:0,AudioContent:1,VideoContent:2},v=u.None,w=new c("TTSTA",(a||{}).debug);b.extend(this,{playVideoAdvertisement:function(a,c){if(t){w.apiCall("playVideoAdvertisement",a,c);var d={ns_st_ct:"va"};c?d.ns_st_ct="va"+c:w.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."),c!=e.LinearLive&&c!=e.BrandedOnDemandLive||(d.ns_st_li="1"),a&&b.extend(d,a),o(d)}},playAudioAdvertisement:function(a,c){if(t){w.apiCall("playAudioAdvertisement",a,c);var d={ns_st_ct:"aa"};c?d.ns_st_ct="aa"+c:w.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."),c!=e.LinearLive&&c!=e.BrandedOnDemandLive||(d.ns_st_li="1"),a&&b.extend(d,a),o(d)}},playVideoContentPart:function(a,c){if(t){w.apiCall("playVideoContentPart",a,c);var e={ns_st_ct:"vc"};c?e.ns_st_ct="vc"+c:w.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."),c!=d.Live&&c!=d.UserGeneratedLive||(e.ns_st_li="1"),a&&b.extend(e,a),p(e,u.VideoContent)}},playAudioContentPart:function(a,c){if(t){w.apiCall("playAudioContentPart",a,c);var e={ns_st_ct:"ac"};c?e.ns_st_ct="ac"+c:w.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."),c!=d.Live&&c!=d.UserGeneratedLive||(e.ns_st_li="1"),a&&b.extend(e,a),p(e,u.AudioContent)}},stop:function(){t&&(w.apiCall("stop"),t.notifyPause())}}),k()};return k.ContentType=d,k.AdType=e,k}(),a});

/***/ }),

/***/ "./node_modules/cv-tracking-core/dist/agent/TrackingAgent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cv-tracking-core/dist/agent/TrackingAgent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cv_core_1 = __webpack_require__(/*! cv-core */ "./node_modules/cv-core/dist/index.js");
var TrackingEvent_1 = __webpack_require__(/*! ../enum/TrackingEvent */ "./node_modules/cv-tracking-core/dist/enum/TrackingEvent.js");
var TrackingAgent = /** @class */ (function () {
    function TrackingAgent(observable, config) {
        this.observable = observable;
        this.config = config;
        this.NAME = 'TrackingAgent';
        this.debugLabel = '[Tracking]';
        this.logger = new cv_core_1.Logger({
            logLevel: cv_core_1.LogLevel.DEBUG
        });
    }
    TrackingAgent.prototype.on = function (name, listener) {
        this.observable.on(name, listener.bind(this));
    };
    TrackingAgent.prototype.off = function (name, listener) {
        this.observable.off(name, listener.bind(this));
    };
    Object.defineProperty(TrackingAgent.prototype, "modelCollection", {
        get: function () {
            return this.observable.modelCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackingAgent.prototype, "contextData", {
        get: function () {
            return this.observable.contextData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackingAgent.prototype, "playerManager", {
        get: function () {
            return this.observable.playerManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackingAgent.prototype, "debug", {
        get: function () {
            return this.observable.debug;
        },
        enumerable: true,
        configurable: true
    });
    // Override in Agent instance
    TrackingAgent.prototype.onRegister = function () { };
    TrackingAgent.prototype.onRegisterDone = function () {
        var _this = this;
        this.debugLabel += ' ' + this.NAME;
        this.debug && this.logInfo('onRegisterDone');
        this.onRegister = function () {
            _this.debug && _this.logInfo('agent already registered');
        };
        this.observable.emit(TrackingEvent_1.TrackingEvent.AGENT_REGISTERED);
    };
    TrackingAgent.prototype.logInfo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [cv_core_1.LogLevel.INFO, this.debugLabel].concat(args));
    };
    TrackingAgent.prototype.logDebug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [cv_core_1.LogLevel.DEBUG, this.debugLabel].concat(args));
    };
    TrackingAgent.prototype.logWarn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [cv_core_1.LogLevel.WARN, this.debugLabel].concat(args));
    };
    TrackingAgent.prototype.logError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [cv_core_1.LogLevel.ERROR, this.debugLabel].concat(args));
    };
    TrackingAgent.prototype.registerEventMap = function (eventMap) {
        this.processEventMap(eventMap);
    };
    TrackingAgent.prototype.unregisterEventMap = function (eventMap) {
        this.processEventMap(eventMap, true);
    };
    TrackingAgent.prototype.processEventMap = function (eventMap, remove) {
        if (!eventMap) {
            return;
        }
        for (var eventKey in eventMap) {
            if (!eventMap.hasOwnProperty(eventKey)) {
                continue;
            }
            if (remove) {
                this.off(eventKey, eventMap[eventKey]);
            }
            else {
                this.on(eventKey, eventMap[eventKey]);
            }
        }
    };
    TrackingAgent.prototype.destroy = function () {
        if (this.eventMap) {
            this.unregisterEventMap(this.eventMap);
        }
        delete this.observable;
        delete this.config;
        delete this.logger;
        delete this.debugLabel;
        delete this.eventMap;
    };
    return TrackingAgent;
}());
exports.TrackingAgent = TrackingAgent;


/***/ }),

/***/ "./node_modules/cv-tracking-core/dist/enum/TrackingEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/cv-tracking-core/dist/enum/TrackingEvent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackingEvent;
(function (TrackingEvent) {
    TrackingEvent["AGENT_REGISTERED"] = "AGENT_REGISTERED";
    TrackingEvent["AGENT_DESTROYED"] = "AGENT_DESTROYED";
})(TrackingEvent = exports.TrackingEvent || (exports.TrackingEvent = {}));


/***/ }),

/***/ "./node_modules/cv-tracking-core/dist/enum/TrackingModules.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-tracking-core/dist/enum/TrackingModules.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackingModules;
(function (TrackingModules) {
    TrackingModules["COMSCORE"] = "ComScore_ss";
    TrackingModules["CONVIVA"] = "ConvivaQOSPluginJS";
    TrackingModules["HEARTBEAT"] = "SiteCatalyst";
    TrackingModules["NIELSEN"] = "NielsenTracking_SDK";
    TrackingModules["MUX"] = "MuxQOSPluginJS";
    TrackingModules["ADBMOBILE"] = "ADBMobileConfig";
    TrackingModules["CONVIVA_CHROMECAST"] = "ConvivaChromecast";
})(TrackingModules = exports.TrackingModules || (exports.TrackingModules = {}));


/***/ }),

/***/ "./node_modules/cv-tracking-core/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-tracking-core/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackingAgent_1 = __webpack_require__(/*! ./agent/TrackingAgent */ "./node_modules/cv-tracking-core/dist/agent/TrackingAgent.js");
exports.TrackingAgent = TrackingAgent_1.TrackingAgent;
var TrackingEvent_1 = __webpack_require__(/*! ./enum/TrackingEvent */ "./node_modules/cv-tracking-core/dist/enum/TrackingEvent.js");
exports.TrackingEvent = TrackingEvent_1.TrackingEvent;
var TrackingModules_1 = __webpack_require__(/*! ./enum/TrackingModules */ "./node_modules/cv-tracking-core/dist/enum/TrackingModules.js");
exports.TrackingModules = TrackingModules_1.TrackingModules;
var TrackingUtil_1 = __webpack_require__(/*! ./util/TrackingUtil */ "./node_modules/cv-tracking-core/dist/util/TrackingUtil.js");
exports.TrackingUtil = TrackingUtil_1.TrackingUtil;
var cv_model_1 = __webpack_require__(/*! cv-model */ "./node_modules/cv-model/dist/index.js");
exports.PlayerEvents = cv_model_1.PlayerEvents;
exports.ModelCollection = cv_model_1.ModelCollection;
exports.StreamType = cv_model_1.StreamType;
exports.AdBreakType = cv_model_1.AdBreakType;
var cv_core_1 = __webpack_require__(/*! cv-core */ "./node_modules/cv-core/dist/index.js");
exports.Emitter = cv_core_1.Emitter;
exports.Logger = cv_core_1.Logger;
exports.LogLevel = cv_core_1.LogLevel;
exports.Util = cv_core_1.Util;


/***/ }),

/***/ "./node_modules/cv-tracking-core/dist/util/TrackingUtil.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-tracking-core/dist/util/TrackingUtil.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackingUtil = /** @class */ (function () {
    function TrackingUtil() {
    }
    TrackingUtil.getParamValue = function (key, config) {
        var value;
        if (Array.isArray(config.params)) {
            config.params.forEach(function (item) {
                if (item.name === key) {
                    value = item.value;
                }
            });
        }
        return value;
    };
    TrackingUtil.copyObjectWithKeyMap = function (keyMap, fromData, toData) {
        var data = toData;
        if (keyMap && fromData && toData) {
            for (var key in keyMap) {
                if (keyMap.hasOwnProperty(key) && fromData.hasOwnProperty(key) && fromData[key] !== null) {
                    data[keyMap[key]] = fromData[key];
                }
            }
        }
        return data;
    };
    return TrackingUtil;
}());
exports.TrackingUtil = TrackingUtil;


/***/ }),

/***/ "./node_modules/cv-tracking-mux/dist/MuxAgent.js":
/*!*******************************************************!*\
  !*** ./node_modules/cv-tracking-mux/dist/MuxAgent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MuxVo_1 = __webpack_require__(/*! ./MuxVo */ "./node_modules/cv-tracking-mux/dist/MuxVo.js");
var mux = __webpack_require__(/*! cv-tracking-mux */ "./node_modules/cv-tracking-mux/dist/mux.js");
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var MuxAgent = /** @class */ (function (_super) {
    __extends(MuxAgent, _super);
    function MuxAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAME = 'MuxAgent';
        _this.hasMuxStarted = false;
        _this.hasVideoElement = false;
        _this.isAdPaused = false;
        return _this;
    }
    MuxAgent.prototype.onRegister = function () {
        var _this = this;
        var _a;
        var onError = function (e) { return _this.onError(e); };
        this.eventMap = (_a = {},
            _a[cv_tracking_core_1.PlayerEvents.PLAYER_START_ERROR] = onError,
            _a[cv_tracking_core_1.PlayerEvents.VIDEO_START_ERROR] = onError,
            _a[cv_tracking_core_1.PlayerEvents.VIDEO_PLAYBACK_ERROR] = onError,
            _a[cv_tracking_core_1.PlayerEvents.PLAYER_LOADED] = function () { return _this.onPlayerLoaded(); },
            _a[cv_tracking_core_1.PlayerEvents.CONTENT_DATA_LOADED] = function () { return _this.onContentDataLoaded(); },
            _a[cv_tracking_core_1.PlayerEvents.VIDEO_PROGRESS] = function () { return _this.onVideoProgress(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_REQUEST] = function () { return _this.onAdRequest(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_RESPONSE] = function () { return _this.onAdResponse(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_BREAK_START] = function () { return _this.onAdBreakStart(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_LOADED] = function () { return _this.onAdLoaded(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_START] = function () { return _this.onAdStart(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_SKIP] = function () { return _this.onAdSkip(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_COMPLETE] = function () { return _this.onAdComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_BREAK_COMPLETE] = function () { return _this.onAdBreakComplete(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_ERROR] = function () { return _this.onAdError(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_FIRST_QUARTILE] = function () { return _this.onAdFirstQuartile(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_MID_POINT] = function () { return _this.onAdMidPoint(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_THIRD_QUARTILE] = function () { return _this.onAdThirdQuartile(); },
            _a[cv_tracking_core_1.PlayerEvents.AD_CLICK] = function () { return _this.onAdClick(); },
            _a);
        this.registerEventMap(this.eventMap);
        this.vo = new MuxVo_1.MuxVo(this);
        this.onRegisterDone();
    };
    MuxAgent.prototype.onPlayerLoaded = function () {
        if (!this.modelCollection.DomElementCollection.video) {
            this.logError('Video element is unset');
            return;
        }
        this.hasVideoElement = true;
    };
    MuxAgent.prototype.onContentDataLoaded = function () {
        if (!(mux && typeof mux.monitor === 'function' && this.hasVideoElement)) {
            if (this.debug) {
                this.logWarn('Unable to start mux monitor');
            }
            return;
        }
        if (!this.hasMuxStarted) {
            this.startMuxMonitor();
            this.hasMuxStarted = true;
        }
        else {
            this.sendEvent(MuxVo_1.MuxVo.VIDEO_CHANGE);
        }
    };
    MuxAgent.prototype.onAdRequest = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_REQUEST);
    };
    MuxAgent.prototype.onAdResponse = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_RESPONSE);
    };
    MuxAgent.prototype.onAdBreakStart = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_BREAK_START);
    };
    MuxAgent.prototype.onAdLoaded = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_PLAY);
    };
    MuxAgent.prototype.onAdStart = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_PLAYING);
    };
    MuxAgent.prototype.onAdClick = function () {
        this.isAdPaused = true;
        this.sendEvent(MuxVo_1.MuxVo.AD_PAUSE);
    };
    MuxAgent.prototype.onVideoProgress = function () {
        if (this.isAdPaused) {
            this.isAdPaused = false;
            this.sendEvent(MuxVo_1.MuxVo.AD_PLAY);
            this.sendEvent(MuxVo_1.MuxVo.AD_PLAYING);
        }
    };
    MuxAgent.prototype.onAdSkip = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_ENDED);
    };
    MuxAgent.prototype.onAdComplete = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_ENDED);
    };
    MuxAgent.prototype.onAdError = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_ERROR);
    };
    MuxAgent.prototype.onAdBreakComplete = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_BREAK_END);
    };
    MuxAgent.prototype.onAdFirstQuartile = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_FIRST_QUARTILE);
    };
    MuxAgent.prototype.onAdMidPoint = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_MID_POINT);
    };
    MuxAgent.prototype.onAdThirdQuartile = function () {
        this.sendEvent(MuxVo_1.MuxVo.AD_THIRD_QUARTILE);
    };
    MuxAgent.prototype.onError = function (event) {
        var errorInfo = event.data;
        if (this.debug) {
            this.logWarn('onError', errorInfo);
        }
        if (!errorInfo.isFatal) {
            // Per Mux: This event should only be used for fatal errors.
            // Do not mux.emit "errors" that do not result in playback failure.
            return;
        }
        mux.emit(this.modelCollection.DomElementCollection.video, MuxVo_1.MuxVo.ERROR, {
            player_error_code: errorInfo.code,
            player_error_message: errorInfo.message
        });
    };
    MuxAgent.prototype.startMuxMonitor = function () {
        if (!this.vo || !this.modelCollection.DomElementCollection.video) {
            return;
        }
        mux.monitor(this.modelCollection.DomElementCollection.video, {
            debug: this.debug,
            data: this.vo.formatMetadata()
        });
    };
    MuxAgent.prototype.sendEvent = function (eventName) {
        if (!this.vo) {
            return;
        }
        if (!this.hasMuxStarted) {
            this.startMuxMonitor();
            this.hasMuxStarted = true;
        }
        mux.emit(this.modelCollection.DomElementCollection.video, eventName, this.vo.formatMetadata());
    };
    MuxAgent.prototype.destroy = function () {
        if (this.modelCollection.DomElementCollection.video) {
            mux.destroyMonitor(this.modelCollection.DomElementCollection.video);
        }
        delete this.vo;
        _super.prototype.destroy.call(this);
    };
    return MuxAgent;
}(cv_tracking_core_1.TrackingAgent));
exports.MuxAgent = MuxAgent;


/***/ }),

/***/ "./node_modules/cv-tracking-mux/dist/MuxVo.js":
/*!****************************************************!*\
  !*** ./node_modules/cv-tracking-mux/dist/MuxVo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cv_tracking_core_1 = __webpack_require__(/*! cv-tracking-core */ "./node_modules/cv-tracking-core/dist/index.js");
var MuxVo = /** @class */ (function () {
    function MuxVo(agent) {
        this.agent = agent;
        var config = agent.config;
        this.envKey = cv_tracking_core_1.TrackingUtil.getParamValue('propertyKey', config) || MuxVo.DEFAULT_PROPERTY_KEY;
        this.experimentName = cv_tracking_core_1.TrackingUtil.getParamValue('experimentName', config) || '';
        this.subPropertyId = cv_tracking_core_1.TrackingUtil.getParamValue('subPropertyId', config) || '';
    }
    MuxVo.prototype.formatMetadata = function () {
        var model = this.agent.modelCollection;
        return {
            env_key: this.envKey,
            page_type: '',
            viewer_user_id: '',
            experiment_name: this.experimentName,
            sub_property_id: this.subPropertyId,
            player_name: model.BuildInfo.playerName,
            player_version: model.BuildInfo.playerVersion,
            player_init_time: -1,
            video_id: model.ContentMetadata.mediaId,
            video_title: model.ContentMetadata.videoTitle,
            video_series: model.ContentMetadata.seriesTitle,
            video_producer: '',
            video_content_type: model.ContentMetadata.episodeFlag ? 'episode' : 'clip',
            video_language_code: '',
            video_variant_name: '',
            video_variant_id: '',
            video_duration: model.ContentPlaybackState.duration,
            video_stream_type: model.ResourceConfig.streamType,
            video_encoding_variant: '',
            video_cdn: model.ContentPlaybackState.cdn
        };
    };
    MuxVo.DEFAULT_PROPERTY_KEY = 'ec83cce4c209447a2af3d62f2';
    MuxVo.VIDEO_CHANGE = 'videochange';
    MuxVo.ERROR = 'error';
    MuxVo.PAUSE = 'pause';
    MuxVo.PLAY = 'play';
    MuxVo.PLAYING = 'playing';
    MuxVo.AD_BREAK_START = 'adbreakstart';
    MuxVo.AD_BREAK_END = 'adbreakend';
    MuxVo.AD_PLAY = 'adplay';
    MuxVo.AD_PLAYING = 'adplaying';
    MuxVo.AD_PAUSE = 'adpause';
    MuxVo.AD_ENDED = 'adended';
    MuxVo.AD_ERROR = 'aderror';
    MuxVo.AD_REQUEST = 'adrequest';
    MuxVo.AD_RESPONSE = 'adresponse';
    MuxVo.AD_FIRST_QUARTILE = 'adfirstquartile';
    MuxVo.AD_MID_POINT = 'admidpoint';
    MuxVo.AD_THIRD_QUARTILE = 'adthirdquartile';
    return MuxVo;
}());
exports.MuxVo = MuxVo;


/***/ }),

/***/ "./node_modules/cv-tracking-mux/dist/mux.js":
/*!**************************************************!*\
  !*** ./node_modules/cv-tracking-mux/dist/mux.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * mux-embed
 * @version 2.5.0
 * @copyright 2018 Mux, Inc
 */
(function(){var define=false;
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(a){if(i[a])return i[a].exports;var r=i[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t){function i(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}function a(e,t){for(var i=-1,a=Array(e);++i<e;)a[i]=t(i);return a}function r(e,t){var i=j(e)||h(e)?a(e.length,String):[],r=i.length,n=!!r;for(var o in e)!t&&!k.call(e,o)||n&&("length"==o||l(o,r))||i.push(o);return i}function n(e,t,i){var a=e[t];k.call(e,t)&&f(a,i)&&(void 0!==i||t in e)||(e[t]=i)}function o(e){if(!c(e))return A(e);var t=[];for(var i in Object(e))k.call(e,i)&&"constructor"!=i&&t.push(i);return t}function s(e,t){return t=M(void 0===t?e.length-1:t,0),function(){for(var a=arguments,r=-1,n=M(a.length-t,0),o=Array(n);++r<n;)o[r]=a[t+r];r=-1;for(var s=Array(t+1);++r<t;)s[r]=a[r];return s[t]=o,i(e,this,s)}}function u(e,t,i,a){i||(i={});for(var r=-1,o=t.length;++r<o;){var s=t[r],u=a?a(i[s],e[s],s,i,e):void 0;n(i,s,void 0===u?e[s]:u)}return i}function l(e,t){return!!(t=null==t?w:t)&&("number"==typeof e||T.test(e))&&e>-1&&e%1==0&&e<t}function d(e,t,i){if(!y(i))return!1;var a=typeof t;return!!("number"==a?p(i)&&l(t,i.length):"string"==a&&t in i)&&f(i[t],e)}function c(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||O)}function f(e,t){return e===t||e!==e&&t!==t}function h(e){return _(e)&&k.call(e,"callee")&&(!D.call(e,"callee")||P.call(e)==x)}function p(e){return null!=e&&m(e.length)&&!v(e)}function _(e){return b(e)&&p(e)}function v(e){var t=y(e)?P.call(e):"";return t==S||t==E}function m(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){return!!e&&"object"==typeof e}function g(e){return p(e)?r(e):o(e)}var w=9007199254740991,x="[object Arguments]",S="[object Function]",E="[object GeneratorFunction]",T=/^(?:0|[1-9]\d*)$/,O=Object.prototype,k=O.hasOwnProperty,P=O.toString,D=O.propertyIsEnumerable,A=function(e,t){return function(i){return e(t(i))}}(Object.keys,Object),M=Math.max,R=!D.call({valueOf:1},"valueOf"),j=Array.isArray,L=function(e){return s(function(t,i){var a=-1,r=i.length,n=r>1?i[r-1]:void 0,o=r>2?i[2]:void 0;for(n=e.length>3&&"function"==typeof n?(r--,n):void 0,o&&d(i[0],i[1],o)&&(n=r<3?void 0:n,r=1),t=Object(t);++a<r;){var s=i[a];s&&e(t,s,a,n)}return t})}(function(e,t){if(R||c(t)||p(t))return void u(t,g(t),e);for(var i in t)k.call(t,i)&&n(e,i,t[i])});e.exports=L},function(e,t,i){"use strict";function a(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,i){(function(t){var i;i="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=i}).call(t,i(5))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(18),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=r.default.methodFactory;r.default.methodFactory=function(e,t,i){var a=n(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},r.default.setLevel(r.default.getLevel()),t.default=r.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractHostnameAndDomain=void 0;var a=i(7),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(e){var t=r.default.createElement("a");t.href=e;var i=t.hostname,a=i.match(/[^\.]+\.[^\.]+$/),n=void 0;return a&&a.length&&(n=a[0]),[i,n]};t.extractHostnameAndDomain=n},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},r=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)};t.generateUUID=a,t.generateShortID=r},function(e,t,i){(function(t){var a,r=void 0!==t?t:"undefined"!=typeof window?window:{},n=i(20);"undefined"!=typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),e.exports=a}).call(t,i(5))},function(e,t,i){"use strict";function a(e){e=e||"",e=e.match(/[^\r\n]+/g)||[];for(var t={},i=0;i<e.length;i++){var a=e[i].split(/\s*:\s*(.+)/);3===a.length&&(t[a[0]]=a[1])}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findMediaElement=t.getMuxPlayerId=void 0;var a=i(6),r=function(e){return e&&void 0!==e.nodeName?(e.muxId||(e.muxId=e.id||(0,a.generateShortID)()),e.muxId):e},n=function(e){var t=void 0;return e&&void 0!==e.nodeName?(t=e,e=r(t)):t=document.querySelector(e),[t,e,t&&t.nodeName?t.nodeName.toLowerCase():""]};t.getMuxPlayerId=r,t.findMediaElement=n},function(e,t,i){"use strict";function a(){return"1"===(n.default.doNotTrack||n.default.navigator.doNotTrack||n.default.navigator.msDoNotTrack)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(2),n=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,i){"use strict";var a=i(40),r=i(41),n=i(14);e.exports={formats:n,parse:r,stringify:a}},function(e,t,i){"use strict";var a=Object.prototype.hasOwnProperty,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){for(var t;e.length;){var i=e.pop();if(t=i.obj[i.prop],Array.isArray(t)){for(var a=[],r=0;r<t.length;++r)void 0!==t[r]&&a.push(t[r]);i.obj[i.prop]=a}}return t};t.arrayToObject=function(e,t){for(var i=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(i[a]=e[a]);return i},t.merge=function(e,i,r){if(!i)return e;if("object"!=typeof i){if(Array.isArray(e))e.push(i);else{if("object"!=typeof e)return[e,i];(r.plainObjects||r.allowPrototypes||!a.call(Object.prototype,i))&&(e[i]=!0)}return e}if("object"!=typeof e)return[e].concat(i);var n=e;return Array.isArray(e)&&!Array.isArray(i)&&(n=t.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(i)?(i.forEach(function(i,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t.merge(e[n],i,r):e.push(i):e[n]=i}),e):Object.keys(i).reduce(function(e,n){var o=i[n];return a.call(e,n)?e[n]=t.merge(e[n],o,r):e[n]=o,e},n)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,i){return e[i]=t[i],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),i="",a=0;a<t.length;++a){var n=t.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?i+=t.charAt(a):n<128?i+=r[n]:n<2048?i+=r[192|n>>6]+r[128|63&n]:n<55296||n>=57344?i+=r[224|n>>12]+r[128|n>>6&63]+r[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(a)),i+=r[240|n>>18]+r[128|n>>12&63]+r[128|n>>6&63]+r[128|63&n])}return i},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],i=[],a=0;a<t.length;++a)for(var r=t[a],o=r.obj[r.prop],s=Object.keys(o),u=0;u<s.length;++u){var l=s[u],d=o[l];"object"==typeof d&&null!==d&&-1===i.indexOf(d)&&(t.push({obj:o,prop:l}),i.push(d))}return n(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t,i){"use strict";var a=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function n(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),o=n[0],u=c[o];u||(s.default.info("Data key word `"+n[0]+"` not expected in "+a),u=o+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),h[e]?u+=h[e]:(s.default.info("Data key word `"+e+"` not expected in "+a),u+="_"+e+"_")}),r?i[u]=e[a]:t[u]=e[a]}}),(0,l.default)(t,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=i(3),s=a(o),u=i(0),l=a(u),d={a:"env",b:"beacon",d:"ad",e:"event",f:"experiment",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},c=r(d),f={ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cd:"code",cg:"category",cn:"config",co:"count",ce:"counter",cp:"complete",ct:"content",cu:"current",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",du:"duration",dv:"device",ec:"encoding",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",fi:"first",fm:"family",ft:"format",fq:"frequency",fr:"frame",fs:"fullscreen",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mx:"mux",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",ph:"playhead",pi:"plugin",pl:"preroll",po:"poster",pr:"preload",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},h=r(f)},function(e,t,i){"use strict";e.exports=i(17).default},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=i(2),o=a(n),s=i(9),u=i(3),l=a(u),d=i(10),c=a(d),f=i(19),h=a(f),p=i(48),_=a(p),v=i(49),m=a(v),y={},b=function e(t){var i=arguments;"string"==typeof t?e.hasOwnProperty(t)?o.default.setTimeout(function(){i=Array.prototype.splice.call(i,1),e[t].apply(null,i)},0):l.default.warn("`"+t+"` is an unknown task"):"function"==typeof t?o.default.setTimeout(function(){t(e)},0):l.default.warn("`"+t+"` is invalid.")};b.loaded=Date.now(),b.VERSION="2.5.0",b.API_VERSION="2.0",b.PLAYER_TRACKED=!1,b.monitor=function(e,t){return(0,_.default)(b,e,t)},b.destroyMonitor=function(e){var t=(0,s.findMediaElement)(e),i=r(t,1),a=i[0];a&&a.mux&&"function"==typeof a.mux.destroy?a.mux.destroy():l.default.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},b.addHLSJS=function(e,t){var i=(0,s.getMuxPlayerId)(e);y[i]?y[i].addHLSJS(t):l.default.error("A monitor for `"+i+"` has not been initialized.")},b.addDashJS=function(e,t){var i=(0,s.getMuxPlayerId)(e);y[i]?y[i].addDashJS(t):l.default.error("A monitor for `"+i+"` has not been initialized.")},b.removeHLSJS=function(e){var t=(0,s.getMuxPlayerId)(e);y[t]?y[t].removeHLSJS():l.default.error("A monitor for `"+t+"` has not been initialized.")},b.removeDashJS=function(e,t){var i=(0,s.getMuxPlayerId)(e);y[i]?y[i].removeDashJS(t):l.default.error("A monitor for `"+i+"` has not been initialized.")},b.init=function(e,t){var i=(0,s.getMuxPlayerId)(e);y[i]=new h.default(b,i,t)},b.emit=function(e,t,i){var a=(0,s.getMuxPlayerId)(e);y[a]?(y[a].emit(t,i),"destroy"===t&&delete y[a]):l.default.error("A monitor for `"+a+"` has not been initialized.")},(0,c.default)()&&l.default.info("The browser's Do Not Track flag is enabled - Mux beaconing may be disabled."),o.default.addEventListener("unload",function(){b.WINDOW_UNLOADING=!0},!1),b.checkDoNotTrack=c.default,b.log=l.default,b.utils=m.default,t.default=b},function(e,t,i){var a,r;!function(n,o){"use strict";a=o,void 0!==(r="function"==typeof a?a.call(t,i,t,e):a)&&(e.exports=r)}(0,function(){"use strict";function e(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function t(t){return"debug"===t&&(t="log"),typeof console!==s&&(void 0!==console[t]?e(console,t):void 0!==console.log?e(console,"log"):o)}function i(e,t){for(var i=0;i<u.length;i++){var a=u[i];this[a]=i<e?o:this.methodFactory(a,e,t)}this.log=this.debug}function a(e,t,a){return function(){typeof console!==s&&(i.call(this,t,a),this[e].apply(this,arguments))}}function r(e,i,r){return t(e)||a.apply(this,arguments)}function n(e,t,a){function n(e){var t=(u[e]||"silent").toUpperCase();if(typeof window!==s){try{return void(window.localStorage[c]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"="+t+";"}catch(e){}}}function o(){var e;if(typeof window!==s){try{e=window.localStorage[c]}catch(e){}if(typeof e===s)try{var t=window.document.cookie,i=t.indexOf(encodeURIComponent(c)+"=");i&&(e=/^([^;]+)/.exec(t.slice(i))[1])}catch(e){}return void 0===d.levels[e]&&(e=void 0),e}}var l,d=this,c="loglevel";e&&(c+=":"+e),d.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},d.methodFactory=a||r,d.getLevel=function(){return l},d.setLevel=function(t,a){if("string"==typeof t&&void 0!==d.levels[t.toUpperCase()]&&(t=d.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=d.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(l=t,!1!==a&&n(t),i.call(d,t,e),typeof console===s&&t<d.levels.SILENT)return"No console available for logging"},d.setDefaultLevel=function(e){o()||d.setLevel(e,!1)},d.enableAll=function(e){d.setLevel(d.levels.TRACE,e)},d.disableAll=function(e){d.setLevel(d.levels.SILENT,e)};var f=o();null==f&&(f=null==t?"WARN":t),d.setLevel(f,!1)}var o=function(){},s="undefined",u=["trace","debug","info","warn","error"],l=new n,d={};l.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new n(e,l.getLevel(),l.methodFactory)),t};var c=typeof window!==s?window.log:void 0;return l.noConflict=function(){return typeof window!==s&&window.log===l&&(window.log=c),l},l})},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=i(3),o=a(n),s=i(0),u=a(s),l=i(6),d=i(4),c=i(2),f=a(c),h=i(1),p=a(h),_=i(21),v=a(_),m=i(23),y=i(24),b=i(25),g=a(b),w=i(26),x=a(w),S=i(27),E=a(S),T=i(28),O=a(T),k=i(29),P=a(k),D=i(30),A=a(D),M=i(31),R=a(M),j=i(32),L=a(j),I=i(33),q=a(I),C=i(34),N=a(C),B=i(35),H=a(B),F=i(36),G=a(F),U=i(37),W=a(U),V=i(38),J=a(V),$=i(47),Q=a($),z=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled"],X=function(e,t,i){var a=this;this.DOM_CONTENT_LOADED_EVENT_END=f.default.performance&&f.default.performance.timing.domContentLoadedEventEnd,this.NAVIGATION_START=f.default.performance&&f.default.performance.timing.navigationStart;var r={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,sampleRate:1,beaconDomain:"litix.io",disableCookies:!1,respectDoNotTrack:!0};this.mux=e,this.id=t,i=(0,u.default)(r,i),i.data=i.data||{},i.data.property_key&&(i.data.env_key=i.data.property_key,delete i.data.property_key),o.default.setLevel(i.debug?"debug":"warn"),this.getPlayheadTime=i.getPlayheadTime,this.getStateData=i.getStateData||function(){},this.getAdData=i.getAdData||function(){},this.minimumRebufferDuration=i.minimumRebufferDuration,this.sustainedRebufferThreshold=i.sustainedRebufferThreshold,this.playbackHeartbeatTime=i.playbackHeartbeatTime,this.playbackEventDispatcher=new J.default(e,i.data.env_key,i),this.data={player_instance_id:(0,l.generateShortID)(),mux_sample_rate:i.sampleRate,beacon_domain:i.beaconDomain},this.data.view_sequence_number=1,this.data.player_sequence_number=1,this.oldEmit=this.emit,this.emit=function(e,t){t=(0,u.default)({viewer_time:Date.now()},t),this.oldEmit(e,t)},this.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),(0,u.default)(this.data,t),this._initializeViewData();var i=function(){void 0===this.data.view_start&&(this.data.view_start=Date.now(),this.emit("viewstart"))}.bind(this);this.one("play",i),this.one("adbreakstart",i)}),this.on("videochange",function(e,t){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",t)}),this.on("destroy",this.destroy);var n=this.destroy.bind(this);f.default.addEventListener("unload",n,!1),this.on("destroy",function(){f.default.removeEventListener("unload",n)}),this.on("playerready",function(e,t){(0,u.default)(this.data,t)}),z.forEach(function(e){a.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),(0,u.default)(this.data,i),this._sanitizeData()}),a.on("after"+e,function(){this.send(e)})}),this.on("viewend",function(e,t){(0,u.default)(a.data,t)});var s=function(e){var t=Date.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};this.one("playerready",s),E.default.apply(this),W.default.apply(this),N.default.apply(this),A.default.apply(this),x.default.apply(this),q.default.apply(this),O.default.apply(this),P.default.apply(this),H.default.apply(this),R.default.apply(this),L.default.apply(this),G.default.apply(this),Q.default.apply(this),i.hlsjs&&this.addHLSJS(i),i.dashjs&&this.addDashJS(i),this.emit("viewinit",i.data)};(0,u.default)(X.prototype,g.default.prototype),(0,u.default)(X.prototype,A.default.prototype),(0,u.default)(X.prototype,N.default.prototype),(0,u.default)(X.prototype,x.default.prototype),(0,u.default)(X.prototype,O.default.prototype),(0,u.default)(X.prototype,P.default.prototype),(0,u.default)(X.prototype,H.default.prototype),(0,u.default)(X.prototype,R.default.prototype),(0,u.default)(X.prototype,L.default.prototype),X.prototype.destroy=function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),f.default.clearTimeout(this._heartBeatTimeout))},X.prototype.send=function(e){var t=(0,u.default)({},this.data);if(1===t.player_error_code&&(delete t.player_error_code,delete t.player_error_message),t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=(0,d.extractHostnameAndDomain)(t.video_source_url),a=r(i,2),n=a[0],o=a[1];t.video_source_domain=o,t.video_source_hostname=n}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat()},X.prototype._updateStateData=function(){(0,u.default)(this.data,this.getStateData()),this.getPlayheadTime&&(this.data.player_playhead_time=this.getPlayheadTime()),this._sanitizeData()},X.prototype._sanitizeData=function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i})},X.prototype._resetVideoData=function(e,t){var i=this;Object.keys(this.data).forEach(function(e){0===e.indexOf("video_")&&delete i.data[e]})},X.prototype._resetViewData=function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1},X.prototype._resetErrorData=function(e,t){delete this.data.player_error_code,delete this.data.player_error_message},X.prototype._initializeViewData=function(){var e=this,t=this.data.view_id=(0,l.generateUUID)();this.data.video_id||(this.data.video_id=(0,v.default)(this.data.player_source_url));var i=function(){t===e.data.view_id&&(0,p.default)(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()},X.prototype._restartHeartBeat=function(){var e=this;f.default.clearTimeout(this._heartBeatTimeout),this.viewErrored||(this._heartBeatTimeout=f.default.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4))},X.prototype.addHLSJS=function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,void(0,m.monitorHLSJS)(this.mux,this.id,e.hlsjs,{},e.Hls||f.default.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")},X.prototype.removeHLSJS=function(){this.hlsjs&&((0,m.stopMonitoringHLSJS)(this.id,this.hlsjs),this.hlsjs=void 0)},X.prototype.addDashJS=function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,void(0,y.monitorDashJS)(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")},X.prototype.removeDashJS=function(){this.dashjs&&((0,y.stopMonitoringDashJS)(this.id,this.dashjs),this.dashjs=void 0)},t.default=X},function(e,t){},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=o.default.createElement("a");t.href=e;var i=t.pathname.replace(/\.[^\/.]+$/,"");return u.default.encode(t.host+i).split("=")[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=i(7),o=a(n),s=i(22),u=a(s)},function(e,t,i){(function(e,a){var r;!function(n){var o="object"==typeof t&&t,s=("object"==typeof e&&e&&e.exports,"object"==typeof a&&a);var u=function(e){this.message=e};u.prototype=new Error,u.prototype.name="InvalidCharacterError";var l=function(e){throw new u(e)},d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=/[\t\n\f\r ]/g,f=function(e){e=String(e).replace(c,"");var t=e.length;t%4==0&&(e=e.replace(/==?$/,""),t=e.length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&l("Invalid character: the string to be decoded is not correctly encoded.");for(var i,a,r=0,n="",o=-1;++o<t;)a=d.indexOf(e.charAt(o)),i=r%4?64*i+a:a,r++%4&&(n+=String.fromCharCode(255&i>>(-2*r&6)));return n},h=function(e){e=String(e),/[^\0-\xFF]/.test(e)&&l("The string to be encoded contains characters outside of the Latin1 range.");for(var t,i,a,r,n=e.length%3,o="",s=-1,u=e.length-n;++s<u;)t=e.charCodeAt(s)<<16,i=e.charCodeAt(++s)<<8,a=e.charCodeAt(++s),r=t+i+a,o+=d.charAt(r>>18&63)+d.charAt(r>>12&63)+d.charAt(r>>6&63)+d.charAt(63&r);return 2==n?(t=e.charCodeAt(s)<<8,i=e.charCodeAt(++s),r=t+i,o+=d.charAt(r>>10)+d.charAt(r>>4&63)+d.charAt(r<<2&63)+"="):1==n&&(r=e.charCodeAt(s),o+=d.charAt(r>>2)+d.charAt(r<<4&63)+"=="),o},p={encode:h,decode:f,version:"0.1.0"};void 0!==(r=function(){return p}.call(t,i,t,e))&&(e.exports=r)}()}).call(t,i(11)(e),i(5))},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){function a(a,r){try{var n=void 0,y=void 0,b=void 0,g=void 0,w=void 0,x=void 0,S=void 0,E=void 0,T=void 0,O=void 0,k=void 0,P=void 0,D=null,A=void 0;if(a!==s.Events.FRAG_BUFFERED&&r.networkDetails&&r.networkDetails.getAllResponseHeaders){_=r.networkDetails.getAllResponseHeaders(),T=r.networkDetails.responseURL;var M=(0,c.extractHostnameAndDomain)(T);P=o(M,1)[0]}else a===s.Events.FRAG_BUFFERED&&(_=v[r.frag.loadIdx][0],P=v[r.frag.loadIdx][1],delete v[r.frag.loadIdx]);if(a===s.Events.FRAG_LOADED)return void(v[r.frag.loadIdx]=[_,P]);f=i.currentLevel,S=i.levels,a===s.Events.MANIFEST_LOADED||a===s.Events.LEVEL_LOADED?(O="manifest",w=0,k=-1):(O="media",w=r.frag.duration,k=r.frag.startPTS),f>=0&&(E=S[f],h=void 0!==E.width?E.width:0,p=void 0!==E.height?E.height:0),a===s.Events.MANIFEST_LOADED&&(D={},S.forEach(function(e,t){D[t]={},D[t].width=void 0!==e.width?e.width:0,D[t].height=void 0!==e.height?e.height:0,D[t].bitrate=e.bitrate,D[t].attrs=e.attrs}),m.media=D),x=u.default.performance.timing.navigationStart,g=r.stats.total,n=x+r.stats.trequest,y=x+r.stats.tfirst,b=x+r.stats.tload,A={request_event_type:a,request_start:n,request_response_start:y,request_response_end:b,request_bytes_loaded:g,request_type:O,request_response_headers:(0,d.default)(_),request_hostname:P},"audio"!==O&&"video"!==O&&"media"!==O||(A.request_media_duration=w),-1!==f&&(A.request_current_level=f),-1!==k&&(A.request_media_start_time=k),"video"!==O&&"media"!==O||(A.request_video_width=h,A.request_video_height=p),null!==D&&(A.request_rendition_lists=m),e.emit(t,"requestcompleted",A)}catch(e){l.warn("hlsjs-monitor.js onHLSRequestLoaded() Exception",e)}}function r(i,a){var r=a.details;if(r===s.ErrorDetails.MANIFEST_LOAD_ERROR||r===s.ErrorDetails.MANIFEST_LOAD_TIMEOUT||r===s.ErrorDetails.FRAG_LOAD_ERROR||r===s.ErrorDetails.FRAG_LOAD_TIMEOUT||r===s.ErrorDetails.LEVEL_LOAD_ERROR||r===s.ErrorDetails.LEVEL_LOAD_TIMEOUT)try{var n=void 0,o=void 0,u="",d=0,c="";switch(r){case s.ErrorDetails.MANIFEST_LOAD_ERROR:d=a.response.code,c=a.response.text,u=a.context.url;break;case s.ErrorDetails.MANIFEST_LOAD_TIMEOUT:u=a.context.url;break;case s.ErrorDetails.LEVEL_LOAD_ERROR:d=a.response.code,c=a.response.text,u=a.context.url;break;case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:u=a.context.url;break;case s.ErrorDetails.FRAG_LOAD_ERROR:d=a.response.code,c=a.response.text,u=a.frag.url;break;case s.ErrorDetails.FRAG_LOAD_TIMEOUT:u=a.frag.url}n=u.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/),o=n&&n[3],e.emit(t,"requestfailed",{request_error:r,request_url:u,request_hostname:o,request_type:"media",request_error_code:d,request_error_text:c})}catch(e){l.warn("hlsjs-monitor.js onHLSRequestError() Exception",e)}}function n(i,a){try{var r=void 0,n=void 0,o=a.frag._url;r=o.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/),n=r&&r[3],e.emit(t,"requestcanceled",{request_cancel:i,request_url:o,request_hostname:n,request_type:"media"})}catch(e){l.warn("hlsjs-monitor.js onHLSRequestCancel() Exception",e)}}var s=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments[4]),l=e.log;if(!u.default.performance||!u.default.performance.timing)return void l.warn("window.performance.timing not supported. Not tracking HLS.js.");var f=-1,h=0,p=0,_="",v={},m={video:{},audio:{},media:{}};i._muxPluginData=i._muxPluginData||{},i._muxPluginData[t]={},i.on(s.Events.FRAG_LOADED,a),i.on(s.Events.FRAG_BUFFERED,a),i.on(s.Events.MANIFEST_LOADED,a),i.on(s.Events.LEVEL_LOADED,a),i.on(s.Events.ERROR,r),i.on(s.Events.FRAG_LOAD_EMERGENCY_ABORTED,n),i._muxPluginData[t].stopMonitoring=function(){i.off(s.Events.FRAG_LOADED,a),i.off(s.Events.FRAG_BUFFERED,a),i.off(s.Events.MANIFEST_LOADED,a),i.off(s.Events.LEVEL_LOADED,a),i.off(s.Events.ERROR,r),i.off(s.Events.FRAG_LOAD_EMERGENCY_ABORTED,n)}}function n(e,t){t&&t._muxPluginData&&t._muxPluginData[e]&&t._muxPluginData[e].stopMonitoring()}Object.defineProperty(t,"__esModule",{value:!0}),t.stopMonitoringHLSJS=t.monitorHLSJS=void 0;var o=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=i(2),u=a(s),l=i(8),d=a(l),c=i(4);t.monitorHLSJS=r,t.stopMonitoringHLSJS=n},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){function a(a){try{var r=void 0,u=void 0,y=void 0,b=void 0,g=void 0,w=void 0,x=void 0,S=void 0,E=void 0,T=void 0,O=void 0,k=void 0,P=void 0,D=void 0,A=void 0,M=void 0,R=void 0,j=void 0,L=void 0,I=null;L=a.type,"manifestLoaded"===L?(I={},j="",M=NaN):(I=a.chunk.mediaInfo.bitrateList,j=a.chunk.mediaInfo.type,M=a.chunk.start),s="video"===j?i.getQualityFor("video"):i.getQualityFor("audio"),"manifestLoaded"===L||m&&v||(p={},I.forEach(function(e,t){p[t]={},p[t].width=void 0!==e.width?e.width:0,p[t].height=void 0!==e.height?e.height:0,p[t].bitrate=e.bandwidth,p[t].attrs={}}),"video"===j?(_.video=p,m=!0):(_.audio=p,v=!0)),"initFragmentLoaded"===L?"video"===j?(A="video_init",D=I[s]):"audio"===j?(A="audio_init",D=I[0]):(A="media",D=I[s]):"mediaFragmentLoaded"===L?"video"===j?(A="video",D=I[s]):"audio"===j?(A="audio",D=I[0]):(A="media",D=I[s]):"manifestLoaded"===L&&(A="manifest",D={}),l=D.width,f=D.height,h=D.bandwidth,"manifestLoaded"===L?(x=a.data.url,b=0,r=0,u=0,y=0,S=0,k=""):(g=a.fragmentModel.getRequests({state:"executed"}),w=g[g.length-1],x=w.url,E=w.mediaType,b=w.bytesLoaded,r=new Date(w.requestStartDate).getTime(),u=new Date(w.firstByteDate).getTime(),y=new Date(w.requestEndDate).getTime(),S=Number.isNaN(w.duration)?0:w.duration,T=i.getMetricsFor(E).HttpList,O=T[T.length-1],k=O._responseHeaders);var q=(0,c.extractHostnameAndDomain)(x);R=o(q,1)[0],"manifestLoaded"!==L&&"initFragmentLoaded"!==L||(b=-1),P={request_event_type:L,request_start:r,request_response_start:u,request_response_end:y,request_bytes_loaded:b,request_type:A,request_response_headers:(0,d.default)(k),request_hostname:R},"audio"!==A&&"video"!==A&&"media"!==A||(P.request_media_duration=S),isNaN(M)||(P.request_media_start_time=M),void 0!==h&&(P.request_labeled_bitrate=h),-1!==s&&(P.request_current_level=s),"video"!==A&&"media"!==A||(P.request_video_width=l,P.request_video_height=f),null!==p&&(P.request_rendition_lists=_),e.emit(t,"requestcompleted",P)}catch(e){n.warn("dashjs-monitor.js onDASHRequestLoaded() Exception: ",e)}}function r(i){var a=u.default.event;try{var r=void 0,o=void 0,s=i.error+"_"+i.event.id+"_"+i.event.request.type,l=i.event.url,d=i.event.request.mediaType,c=a.currentTarget.status,f=a.currentTarget.statusText;r=l.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/),o=r&&r[3],e.emit(t,"requestfailed",{request_error:s,request_url:l,request_hostname:o,request_type:d,request_error_code:c,request_error_text:f})}catch(e){n.warn("dashjs-monitor.js onDASHRequestError() Exception: ",e)}}var n=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],e.log);if(!i||!i.on)return void n.warn("Invalid dash.js player reference. Monitoring blocked.");var s=-1,l=0,f=0,h=0,p=null,_={video:{},audio:{},media:{}},v=!1,m=!1;i._muxPluginData=i._muxPluginData||{},i._muxPluginData[t]={},i.on("mediaFragmentLoaded",a),i.on("initFragmentLoaded",a),i.on("manifestLoaded",a),i.on("error",r),i._muxPluginData[t].stopMonitoring=function(){i.off("mediaFragmentLoaded",a),i.off("initFragmentLoaded",a),i.off("manifestLoaded",a),i.off("error",r)}}function n(e,t){t&&t._muxPluginData&&t._muxPluginData[e]&&t._muxPluginData[e].stopMonitoring()}Object.defineProperty(t,"__esModule",{value:!0}),t.stopMonitoringDashJS=t.monitorDashJS=void 0;var o=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=i(2),u=a(s),l=i(8),d=a(l),c=i(4);t.monitorDashJS=r,t.stopMonitoringDashJS=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){},r=0;a.prototype.on=function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++r,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t},a.prototype.off=function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})},a.prototype.one=function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++r;var n=function r(){a.off(e,r),t.apply(i||this,arguments)};n._eventEmitterGuid=t._eventEmitterGuid,this.on(e,n)},a.prototype.emit=function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],o=function(t,a){t=t.slice(),t.forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t)}},t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,this.on("playing",function(){this._playheadShouldBeProgressing=!0}),this.on("play",this._startPlaybackHeartbeatInterval),this.on("adbreakstart",this._startPlaybackHeartbeatInterval),this.on("adplay",this._startPlaybackHeartbeatInterval),this.on("seeking",this._startPlaybackHeartbeatInterval),this.on("devicewake",this._startPlaybackHeartbeatInterval),this.on("pause",this._stopPlaybackHeartbeatInterval),this.on("ended",this._stopPlaybackHeartbeatInterval),this.on("viewend",this._stopPlaybackHeartbeatInterval),this.on("error",this._stopPlaybackHeartbeatInterval),this.on("adpause",this._stopPlaybackHeartbeatInterval),this.on("adbreakend",this._stopPlaybackHeartbeatInterval),this.on("seeked",function(){this.data.player_is_paused&&this._stopPlaybackHeartbeatInterval()}),this.on("timeupdate",function(){null!==this._playbackHeartbeatInterval&&this.emit("playbackheartbeat")}),this.on("devicesleep",function(e,t){null!==this._playbackHeartbeatInterval&&(r.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend",{viewer_time:t.viewer_time}),this._playbackHeartbeatInterval=null)})};n.prototype._startPlaybackHeartbeatInterval=function(){var e=this;null===this._playbackHeartbeatInterval&&(this.emit("playbackheartbeat"),this._playbackHeartbeatInterval=r.default.setInterval(function(){e.emit("playbackheartbeat")},this.playbackHeartbeatTime))},n.prototype._stopPlaybackHeartbeatInterval=function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(r.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)},t.default=n},function(e,t,i){"use strict";function a(){var e=this;this.on("viewinit",function(){e.viewErrored=!1}),this.on("error",function(){e.viewErrored=!0})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._watchTimeTrackerLastCheckedTime=null,this.on("playbackheartbeat",this._updateWatchTime),this.on("playbackheartbeatend",this._clearWatchTimeState)};n.prototype._updateWatchTime=function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),(0,r.default)(this.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i},n.prototype._clearWatchTimeState=function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null},t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._playbackTimeTrackerLastPlayheadPosition=-1,this.on("playbackheartbeat",this._updatePlaybackTime),this.on("playbackheartbeatend",this._clearPlaybackTimeState),this.on("seeking",this._clearPlaybackTimeState)};n.prototype._updatePlaybackTime=function(){var e=this.data.player_playhead_time;if(this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition){var t=e-this._playbackTimeTrackerLastPlayheadPosition;t<=1e3&&(0,r.default)(this.data,"view_content_playback_time",t)}this._playbackTimeTrackerLastPlayheadPosition=e},n.prototype._clearPlaybackTimeState=function(){this._updatePlaybackTime(),this._playbackTimeTrackerLastPlayheadPosition=-1},t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){this.on("playbackheartbeat",this._updatePlayheadTime),this.on("playbackheartbeatend",this._updatePlayheadTime),this.on("timeupdate",this._updatePlayheadTime),this.on("destroy",function(){this.off("timeupdate",this._updatePlayheadTime)})};a.prototype._updatePlayheadTime=function(e,t){if(t.player_playhead_time)this.data.player_playhead_time=t.player_playhead_time;else if(this.getPlayheadTime){var i=this.getPlayheadTime();void 0!==i&&(this.data.player_playhead_time=i)}},t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,this.on("playbackheartbeat",this._checkIfRebuffering),this.on("playbackheartbeatend",this._cleanupRebufferTracker),this.on("seeking",function(){this._cleanupRebufferTracker(null,{viewer_time:Date.now()})})};n.prototype._checkIfRebuffering=function(e,t){if(this.isSeeking||this.isAdBreak||!this._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return this._prepareRebufferTrackerState(t.viewer_time),void this._updateRebufferMetrics();if(this._lastPlayheadTime!==this.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;i>=this.sustainedRebufferThreshold&&(this._rebuffering?this._updateRebufferMetrics(t.viewer_time-this._lastCheckedTime):(this._rebuffering=!0,(0,r.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(i),this.emit("rebufferstart"))),this._lastCheckedTime=t.viewer_time},n.prototype._clearRebufferTrackerState=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null},n.prototype._prepareRebufferTrackerState=function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e},n.prototype._cleanupRebufferTracker=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this._updateRebufferMetrics(t.viewer_time-this._lastCheckedTime),this.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return void this._updateRebufferMetrics();var a=this.data.player_playhead_time-this._lastPlayheadTime,n=t.viewer_time-this._lastPlayheadTimeUpdatedTime;a>0&&n-a>this.minimumRebufferDuration?((0,r.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(n-a),this.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-a})):this._updateRebufferMetrics()}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()},n.prototype._updateRebufferMetrics=function(e){e>0&&(0,r.default)(this.data,"view_rebuffer_duration",e),this.data.view_watch_time>=0&&this.data.view_rebuffer_count>0&&(this.data.view_rebuffer_frequency=this.data.view_rebuffer_count/this.data.view_watch_time,this.data.view_rebuffer_percentage=this.data.view_rebuffer_duration/this.data.view_watch_time)},t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){this.on("viewinit",function(){var e=this.data,t=e.view_id,i=function(e,i){var a=i.viewer_time;"playing"===e.type&&void 0===this.data.view_time_to_first_frame?this.calculateTimeToFirstFrame(a||Date.now(),t):"adplaying"!==e.type||void 0!==this.data.view_time_to_first_frame&&!this.inPrerollPosition()||this.calculateTimeToFirstFrame(a||Date.now(),t)};this.one("playing",i),this.one("adplaying",i),this.one("viewend",function(){this.off("playing",i),this.off("adplaying",i)})})};a.prototype.calculateTimeToFirstFrame=function(e,t){t===this.data.view_id&&(this._updateWatchTime(null,{viewer_time:e}),this.data.view_time_to_first_frame=this.data.view_watch_time,(this.data.player_autoplay_on||this.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.data.view_aggregate_startup_time=this.data.view_start+this.data.view_watch_time-this.NAVIGATION_START))},t.default=a},function(e,t,i){"use strict";function a(){var e=this;this.on("viewinit",function(){this._lastPlayheadPosition=-1});var t=["pause","rebufferstart","seeking","error","adbreakstart","hb"],i=["playing","hb"];t.forEach(function(t){e.on(t,function(){if(this._lastPlayheadPosition>=0&&this.data.player_playhead_time>=0&&this._lastPlayerWidth>=0&&this._lastSourceWidth>0&&this._lastPlayerHeight>=0&&this._lastSourceHeight>0){var e=this.data.player_playhead_time-this._lastPlayheadPosition;if(e<0)return void(this._lastPlayheadPosition=-1);var t=Math.min(this._lastPlayerWidth/this._lastSourceWidth,this._lastPlayerHeight/this._lastSourceHeight),i=Math.max(0,t-1),a=Math.max(0,1-t);this.data.view_max_upscale_percentage=Math.max(this.data.view_max_upscale_percentage||0,i),this.data.view_max_downscale_percentage=Math.max(this.data.view_max_downscale_percentage||0,a),(0,n.default)(this.data,"view_total_content_playback_time",e),(0,n.default)(this.data,"view_total_upscaling",i*e),(0,n.default)(this.data,"view_total_downscaling",a*e)}this._lastPlayheadPosition=-1})}),i.forEach(function(t){e.on(t,function(){this._lastPlayheadPosition=this.data.player_playhead_time,this._lastPlayerWidth=this.data.player_width,this._lastPlayerHeight=this.data.player_height,this._lastSourceWidth=this.data.video_source_width,this._lastSourceHeight=this.data.video_source_height})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(1),n=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){this.isSeeking=!1,this.on("seeking",function(e,t){(0,u.default)(this.data,t),this._lastSeekingTime=Date.now(),!1===this.isSeeking&&(this.isSeeking=!0,this.send("seeking"))}),this.on("seeked",function(){this.isSeeking=!1;var e=this._lastSeekingTime||Date.now(),t=Date.now()-e;(0,o.default)(this.data,"view_seek_count",1),(0,o.default)(this.data,"view_seek_duration",t);var i=this.data.view_max_seek_time||0;this.data.view_max_seek_time=Math.max(i,t)}),this.on("viewend",function(){this.isSeeking=!1})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=i(1),o=a(n),s=i(0),u=a(s)},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=i(1),o=a(n),s=i(4),u=i(0),l=a(u),d=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},c=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror"],f=function(){var e=this;this.on("viewinit",function(){this.isAdBreak=!1,this._currentAdRequestNumber=0,this._currentAdResponseNumber=0,this._adRequests=[],this._adResponses=[],this._adHasPlayed=!1,this._wouldBeNewAdPlay=!0,this._prerollPlayTime=void 0}),c.forEach(function(t){return e.on(t,e._updateAdData)});var t=function(){e.isAdBreak=!1};this.on("adbreakstart",function(){this.isAdBreak=!0}),this.on("play",t),this.on("playing",t),this.on("viewend",t),this.on("adrequest",function(e,t){t=(0,l.default)({ad_request_id:"generatedAdRequestId"+this._currentAdRequestNumber++},t),d(this._adRequests,t),(0,o.default)(this.data,"view_ad_request_count"),this.inPrerollPosition()&&(this.data.view_preroll_requested=!0,this._adHasPlayed||(0,o.default)(this.data,"view_preroll_request_count"))}),this.on("adresponse",function(e,t){t=(0,l.default)({ad_request_id:"generatedAdRequestId"+this._currentAdResponseNumber++},t),d(this._adResponses,t);var i=this.findAdRequest(t.ad_request_id);i&&(0,o.default)(this.data,"view_ad_request_time",Math.max(0,t.viewer_time-i.viewer_time))}),this.on("adplay",function(e,t){this._adHasPlayed=!0,this._wouldBeNewAdPlay&&(this._wouldBeNewAdPlay=!1,(0,o.default)(this.data,"view_ad_played_count")),this.inPrerollPosition()&&!this.data.view_preroll_played&&(this.data.view_preroll_played=!0,this._adRequests.length>0&&(this.data.view_preroll_request_time=Math.max(0,t.viewer_time-this._adRequests[0].viewer_time)),this.data.view_start&&(this.data.view_startup_preroll_request_time=Math.max(0,t.viewer_time-this.data.view_start)),this._prerollPlayTime=t.viewer_time)}),this.on("adplaying",function(e,t){this.inPrerollPosition()&&void 0===this.data.view_preroll_load_time&&void 0!==this._prerollPlayTime&&(this.data.view_preroll_load_time=t.viewer_time-this._prerollPlayTime,this.data.view_startup_preroll_load_time=t.viewer_time-this._prerollPlayTime)}),this.on("adended",function(){this._wouldBeNewAdPlay=!0}),this.on("aderror",function(){this._wouldBeNewAdPlay=!0})};f.prototype.inPrerollPosition=function(){return void 0===this.data.view_content_playback_time||this.data.view_content_playback_time<=1e3},f.prototype.findAdRequest=function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]},f.prototype._updateAdData=function(e,t){if(this.inPrerollPosition()){if(!this.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=(0,s.extractHostnameAndDomain)(t.ad_tag_url),a=r(i,2),n=a[0],o=a[1];this.data.view_preroll_ad_tag_domain=o,this.data.view_preroll_ad_tag_hostname=n}if(!this.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var u=(0,s.extractHostnameAndDomain)(t.ad_asset_url),l=r(u,2),d=l[0],c=l[1];this.data.view_preroll_ad_asset_domain=c,this.data.view_preroll_ad_asset_hostname=d}}},t.default=f},function(e,t,i){"use strict";function a(){var e=this,t=void 0,i=void 0,a=function(){(0,n.default)(e.data,"view_waiting_rebuffer_count",1),t=Date.now(),i=window.setInterval(function(){if(t){var i=Date.now();(0,n.default)(e.data,"view_waiting_rebuffer_duration",i-t),t=i}},250)},r=function(){t&&((0,n.default)(e.data,"view_waiting_rebuffer_duration",Date.now()-t),t=!1,window.clearInterval(i))},o=!1,s=function(){o=!0},u=function(){o=!1,r()};this.on("waiting",function(){o&&a()}),this.on("playing",function(){r(),s()}),this.on("pause",u),this.on("seeking",u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(1),n=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,i){"use strict";function a(){var e=this;this.one("playbackheartbeat",o),this.on("playbackheartbeatend",function(){e.off("before*",s),e.one("playbackheartbeat",o)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(0),n=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(){this.lastWallClockTime=Date.now(),this.on("before*",s)},s=function(e){var t=Date.now(),i=this.lastWallClockTime;this.lastWallClockTime=t,t-i>3e4&&(this.emit("devicesleep",{viewer_time:i}),(0,n.default)(this.data,{viewer_time:i}),this.send("devicesleep"),this.emit("devicewake",{viewer_time:t}),(0,n.default)(this.data,{viewer_time:t}),this.send("devicewake"))}},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=i(39),o=i(3),s=a(o),u=i(43),l=a(u),d=i(10),c=a(d),f=i(15),h=a(f),p=i(44),_=a(p),v=i(46),m=a(v),y=i(0),b=a(y),g=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id"],w=["viewstart","error","ended","viewend"],x=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.mux=e,this.envKey=t,this.eventQueue=new _.default((0,l.default)(t,i.beaconDomain)),this.previousBeaconData=null,this.lastEventTime=null,this.sampleRate=i.sampleRate,this.disableCookies=i.disableCookies,this.respectDoNotTrack=i.respectDoNotTrack,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed_version:this.mux.VERSION,page_url:window.location.href,viewer_application_name:m.default.name,viewer_application_version:m.default.version,viewer_application_engine:m.default.layout,viewer_device_name:m.default.product,viewer_device_category:"",viewer_device_manufacturer:m.default.manufacturer,viewer_os_family:m.default.os&&m.default.os.family,viewer_os_architecture:m.default.os&&m.default.os.architecture,viewer_os_version:m.default.os&&m.default.os.version},this.viewerData=this.disableCookies?{}:(0,n.getAndUpdateViewerData)()};x.prototype.send=function(e,t){if(e){if(this.respectDoNotTrack&&(0,c.default)())return s.default.info("Not sending `"+e+"` because Do Not Track is enabled in your browser");if(!t||"object"!==(void 0===t?"undefined":r(t)))return s.default.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:(0,n.getAndUpdateSessionData)(),a={};(0,b.default)(a,this.pageLevelData),(0,b.default)(a,t),(0,b.default)(a,i),(0,b.default)(a,this.viewerData),a.event=e,a.env_key=this.envKey,a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var o=a.mux_sample_number>=this.sampleRate,u=this._deduplicateBeaconData(e,a),l=(0,h.default)(u);if(this.lastEventTime=Date.now(),o)return s.default.info("Not sending event due to sample rate restriction",e,a,l);if(!this.envKey)return s.default.info("Not sending event due to missing environment key",e,a,l);if(!this.rateLimited)if(s.default.info("Sending event",e,a,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(w.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",l=(0,h.default)(a),this.eventQueue.queueEvent(a.event,l),s.default.error("Beaconing disabled due to rate limit.")}},x.prototype.destroy=function(){this.eventQueue.destroy(!1)};var S=function(e,t,i,a){return!(!e||0!==t.indexOf("request_"))&&("request_response_headers"===t||("object"!==(void 0===i?"undefined":r(i))||"object"!==(void 0===a?"undefined":r(a))||Object.keys(i||{}).length!==Object.keys(a||{}).length))};x.prototype._deduplicateBeaconData=function(e,t){var i=this,a={},r=t.view_id;if(!r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||Date.now()-this.lastEventTime>=6e5)a=(0,b.default)({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.keys(t).forEach(function(e){var r=t[e];(r!==i.previousBeaconData[e]||g.indexOf(e)>-1||S(n,e,r,i.previousBeaconData[e]))&&(a[e]=r,i.previousBeaconData[e]=r)})}return a},t.default=x},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getAndUpdateSessionData=t.getAndUpdateViewerData=void 0;var r=i(12),n=a(r),o=i(42),s=a(o),u=i(6),l=function(){var e=void 0;try{e=n.default.parse(s.default.get("muxData")||"")}catch(t){e={}}return e},d=function(e){s.default.set("muxData",n.default.stringify(e),{expires:7300})},c=function(){var e=l();return e.mux_viewer_id=e.mux_viewer_id||(0,u.generateUUID)(),e.msn=e.msn||Math.random(),d(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},f=function(){var e=l(),t=Date.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=(0,u.generateUUID)(),e.sst=t),e.sex=t+15e5,d(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};t.getAndUpdateViewerData=c,t.getAndUpdateSessionData=f},function(e,t,i){"use strict";var a=i(13),r=i(14),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(e){return o.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(t,i,r,n,o,u,l,d,c,f,h,p){var _=t;if("function"==typeof l)_=l(i,_);else if(_ instanceof Date)_=f(_);else if(null===_){if(n)return u&&!p?u(i,s.encoder):i;_=""}if("string"==typeof _||"number"==typeof _||"boolean"==typeof _||a.isBuffer(_)){if(u){return[h(p?i:u(i,s.encoder))+"="+h(u(_,s.encoder))]}return[h(i)+"="+h(String(_))]}var v=[];if(void 0===_)return v;var m;if(Array.isArray(l))m=l;else{var y=Object.keys(_);m=d?y.sort(d):y}for(var b=0;b<m.length;++b){var g=m[b];o&&null===_[g]||(v=Array.isArray(_)?v.concat(e(_[g],r(i,g),r,n,o,u,l,d,c,f,h,p)):v.concat(e(_[g],i+(c?"."+g:"["+g+"]"),r,n,o,u,l,d,c,f,h,p)))}return v};e.exports=function(e,t){var i=e,o=t?a.assign({},t):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===o.delimiter?s.delimiter:o.delimiter,d="boolean"==typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,c="boolean"==typeof o.skipNulls?o.skipNulls:s.skipNulls,f="boolean"==typeof o.encode?o.encode:s.encode,h="function"==typeof o.encoder?o.encoder:s.encoder,p="function"==typeof o.sort?o.sort:null,_=void 0!==o.allowDots&&o.allowDots,v="function"==typeof o.serializeDate?o.serializeDate:s.serializeDate,m="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if(void 0===o.format)o.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,o.format))throw new TypeError("Unknown format option provided.");var y,b,g=r.formatters[o.format];"function"==typeof o.filter?(b=o.filter,i=b("",i)):Array.isArray(o.filter)&&(b=o.filter,y=b);var w=[];if("object"!=typeof i||null===i)return"";var x;x=o.arrayFormat in n?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var S=n[x];y||(y=Object.keys(i)),p&&y.sort(p);for(var E=0;E<y.length;++E){var T=y[E];c&&null===i[T]||(w=w.concat(u(i[T],T,S,d,c,f?h:null,b,p,_,v,g,m)))}var O=w.join(l),k=!0===o.addQueryPrefix?"?":"";return O.length>0?k+O:""}},function(e,t,i){"use strict";var a=i(13),r=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(e,t){for(var i={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,o=t.parameterLimit===1/0?void 0:t.parameterLimit,s=a.split(t.delimiter,o),u=0;u<s.length;++u){var l,d,c=s[u],f=c.indexOf("]="),h=-1===f?c.indexOf("="):f+1;-1===h?(l=t.decoder(c,n.decoder),d=t.strictNullHandling?null:""):(l=t.decoder(c.slice(0,h),n.decoder),d=t.decoder(c.slice(h+1),n.decoder)),r.call(i,l)?i[l]=[].concat(i[l]).concat(d):i[l]=d}return i},s=function(e,t,i){for(var a=t,r=e.length-1;r>=0;--r){var n,o=e[r];if("[]"===o)n=[],n=n.concat(a);else{n=i.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,u=parseInt(s,10);!isNaN(u)&&o!==s&&String(u)===s&&u>=0&&i.parseArrays&&u<=i.arrayLimit?(n=[],n[u]=a):n[s]=a}a=n}return a},u=function(e,t,i){if(e){var a=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,u=n.exec(a),l=u?a.slice(0,u.index):a,d=[];if(l){if(!i.plainObjects&&r.call(Object.prototype,l)&&!i.allowPrototypes)return;d.push(l)}for(var c=0;null!==(u=o.exec(a))&&c<i.depth;){if(c+=1,!i.plainObjects&&r.call(Object.prototype,u[1].slice(1,-1))&&!i.allowPrototypes)return;d.push(u[1])}return u&&d.push("["+a.slice(u.index)+"]"),s(d,t,i)}};e.exports=function(e,t){var i=t?a.assign({},t):{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.ignoreQueryPrefix=!0===i.ignoreQueryPrefix,i.delimiter="string"==typeof i.delimiter||a.isRegExp(i.delimiter)?i.delimiter:n.delimiter,i.depth="number"==typeof i.depth?i.depth:n.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:n.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:n.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:n.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:n.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:n.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:n.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:n.strictNullHandling,""===e||null===e||void 0===e)return i.plainObjects?Object.create(null):{};for(var r="string"==typeof e?o(e,i):e,s=i.plainObjects?Object.create(null):{},l=Object.keys(r),d=0;d<l.length;++d){var c=l[d],f=u(c,r[c],i);s=a.merge(s,f,i)}return a.compact(s)}},function(e,t,i){"use strict";var a,r,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){var s=!1;if(a=o,void 0!==(r="function"==typeof a?a.call(t,i,t,e):a)&&(e.exports=r),s=!0,"object"===n(t)&&(e.exports=o(),s=!0),!s){var u=window.Cookies,l=window.Cookies=o();l.noConflict=function(){return window.Cookies=u,l}}}(function(){function e(i){function a(e,r,n){var o;if("undefined"!=typeof document){if(arguments.length>1){if(n=t({path:"/"},a.defaults,n),"number"==typeof n.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*n.expires),n.expires=s}try{o=JSON.stringify(r),/^[\{\[]/.test(o)&&(r=o)}catch(e){}return r=i.write?i.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[\(\)]/g,escape),document.cookie=[e,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}e||(o={});for(var u=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var c=u[d].split("="),f=c.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var h=c[0].replace(l,decodeURIComponent);if(f=i.read?i.read(f,h):i(f,h)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(e===h){o=f;break}e||(o[h]=f)}catch(e){}}return o}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(e,i){a(e,"",t(i,{expires:-1}))},a.withConverter=e,a}var t=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return e(function(){})})},function(e,t,i){"use strict";function a(e,t){return e=e||"",t=t||"litix.io",e.match(/^[a-z0-9]+$/)?"https://"+e+"."+t:"https://img.litix.io/a.gif"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(2),n=a(r),o=i(3),s=a(o),u=i(45),l=a(u),d=i(0),c=a(d),f=i(15),h=a(f),p=!!n.default.XMLHttpRequest&&"withCredentials"in new n.default.XMLHttpRequest,_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:5e3},v=function(e,t){this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=(0,c.default)({},_,t)};v.prototype.queueEvent=function(e,t){var i=(0,c.default)({},t);return p?(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):(l.default.send(this._beaconUrl,i),!0)},v.prototype.flushEvents=function(){p&&(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},v.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),n.default.clearTimeout(this._sendTimeout)},v.prototype._clearBeaconQueue=function(){var e=n.default.navigator,t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,i=this._eventQueue.slice(t);if(t>0&&(0,c.default)(i[i.length-1],(0,h.default)({mux_view_message:"event queue truncated"})),e.sendBeacon)e.sendBeacon(this._beaconUrl,JSON.stringify({events:i}));else if(n.default.XMLHttpRequest){var a=new n.default.XMLHttpRequest;a.open("POST",this._beaconUrl),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify({events:i}))}else l.default.send(this._beaconUrl,i[i.length-1])},v.prototype._sendBeaconQueue=function(){var e=this;if(n.default.XMLHttpRequest&&!this._postInFlight){var t=new n.default.XMLHttpRequest,i=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0,t.onreadystatechange=function(){4===t.readyState&&(200!==t.status?(e._eventQueue=i.concat(e._eventQueue),e._failureCount+=1,s.default.info("Error sending beacon: "+t.status),s.default.info(t.responseText)):e._failureCount=0,e._postInFlight=!1)},t.open("POST",this._beaconUrl),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({events:i}))}},v.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},v.prototype._startBeaconSending=function(){var e=this;n.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=n.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},t.default=v},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(12),n=a(r),o=i(2),s=a(o),u={};u.send=function(e,t){function i(){a.src=o+(r?"&rc="+r:"")}var a=new Image,r=0,o=e+"?"+n.default.stringify(t);return a.addEventListener("error",function(){r>3||s.default.setTimeout(function(){r++,i()},5e3*r)}),i(),a},t.default=u},function(e,t,i){(function(e,a){var r;(function(){"use strict";function n(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t,i){var a={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(a=a[/[\d.]+$/.exec(e)])&&(e="Windows "+a),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=u(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function s(e,t){var i=-1,a=e?e.length:0;if("number"==typeof a&&a>-1&&a<=x)for(;++i<a;)t(e[i],i,e);else l(e,t)}function u(e){return e=p(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:n(e)}function l(e,t){for(var i in e)O.call(e,i)&&t(e[i],i,e)}function d(e){return null==e?n(e):k.call(e).slice(8,-1)}function c(e,t){var i=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(i)||"object"==i&&!e[t])}function f(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function h(e,t){var i=null;return s(e,function(a,r){i=t(i,a,r,e)}),i}function p(e){return String(e).replace(/^ +| +$/g,"")}function _(e){function t(t){return h(t,function(t,i){var a=i.pattern||f(i);return!t&&(t=RegExp("\\b"+a+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+a+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+a+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(a,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=u(t[0].replace(RegExp(a,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function i(){return this.description||""}var a=m,r=e&&"object"==typeof e&&"String"!=d(e);r&&(a=e,e=null);var n=a.navigator||{},s=n.userAgent||"";e||(e=s);var v,b,g=r||E==y,w=r?!!n.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(k.toString()),x=r?"Object":"ScriptBridgingProxyObject",T=r?"Object":"Environment",O=r&&a.java?"JavaPackage":d(a.java),P=r?"Object":"RuntimeObject",D=/\bJava/.test(O)&&a.java,A=D&&d(a.environment)==T,M=D?"a":"α",R=D?"b":"β",j=a.document||{},L=a.operamini||a.opera,I=S.test(I=r&&L?L["[[Class]]"]:d(L))?I:L=null,q=e,C=[],N=null,B=e==s,H=B&&L&&"function"==typeof L.version&&L.version(),F=function(t){return h(t,function(t,i){return t||RegExp("\\b"+(i.pattern||f(i))+"\\b","i").exec(e)&&(i.label||i)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),G=function(t){return h(t,function(t,i){return t||RegExp("\\b"+(i.pattern||f(i))+"\\b","i").exec(e)&&(i.label||i)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),U=t([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),W=function(t){return h(t,function(t,i,a){return t||(i[U]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)]||RegExp("\\b"+f(a)+"(?:\\b|\\w*\\d)","i").exec(e))&&a})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),V=function(t){return h(t,function(t,i){var a=i.pattern||f(i);return!t&&(t=RegExp("\\b"+a+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(t=o(t,a,i.label||i)),t})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(F&&(F=[F]),W&&!U&&(U=t([W])),(v=/\bGoogle TV\b/.exec(U))&&(U=v[0]),/\bSimulator\b/i.test(e)&&(U=(U?U+" ":"")+"Simulator"),"Opera Mini"==G&&/\bOPiOS\b/.test(e)&&C.push("running in Turbo/Uncompressed mode"),"IE"==G&&/\blike iPhone OS\b/.test(e)?(v=_(e.replace(/like iPhone OS/,"")),W=v.manufacturer,U=v.product):/^iP/.test(U)?(G||(G="Safari"),V="iOS"+((v=/ OS ([\d_]+)/i.exec(e))?" "+v[1].replace(/_/g,"."):"")):"Konqueror"!=G||/buntu/i.test(V)?W&&"Google"!=W&&(/Chrome/.test(G)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(U))||/\bAndroid\b/.test(V)&&/^Chrome/.test(G)&&/\bVersion\//i.test(e)?(G="Android Browser",V=/\bAndroid\b/.test(V)?V:"Android"):"Silk"==G?(/\bMobi/i.test(e)||(V="Android",C.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&C.unshift("accelerated")):"PaleMoon"==G&&(v=/\bFirefox\/([\d.]+)\b/.exec(e))?C.push("identifying as Firefox "+v[1]):"Firefox"==G&&(v=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(V||(V="Firefox OS"),U||(U=v[1])):!G||(v=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(G))?(G&&!U&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(v+"/")+8))&&(G=null),(v=U||W||V)&&(U||W||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V))&&(G=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V)?V:v)+" Browser")):"Electron"==G&&(v=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&C.push("Chromium "+v):V="Kubuntu",H||(H=function(t){return h(t,function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",f(G),"(?:Firefox|Minefield|NetFront)"])),(v="iCab"==F&&parseFloat(H)>3&&"WebKit"||/\bOpera\b/.test(G)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(F)&&"WebKit"||!F&&/\bMSIE\b/i.test(e)&&("Mac OS"==V?"Tasman":"Trident")||"WebKit"==F&&/\bPlayStation\b(?! Vita\b)/i.test(G)&&"NetFront")&&(F=[v]),"IE"==G&&(v=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(G+=" Mobile",V="Windows Phone "+(/\+$/.test(v)?v:v+".x"),C.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(G="IE Mobile",V="Windows Phone 8.x",C.unshift("desktop mode"),H||(H=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=G&&"Trident"==F&&(v=/\brv:([\d.]+)/.exec(e))&&(G&&C.push("identifying as "+G+(H?" "+H:"")),G="IE",H=v[1]),B){if(c(a,"global"))if(D&&(v=D.lang.System,q=v.getProperty("os.arch"),V=V||v.getProperty("os.name")+" "+v.getProperty("os.version")),g&&c(a,"system")&&(v=[a.system])[0]){V||(V=v[0].os||null);try{v[1]=a.require("ringo/engine").version,H=v[1].join("."),G="RingoJS"}catch(e){v[0].global.system==a.system&&(G="Narwhal")}}else"object"==typeof a.process&&!a.process.browser&&(v=a.process)?"object"==typeof v.versions?"string"==typeof v.versions.electron?(C.push("Node "+v.versions.node),G="Electron",H=v.versions.electron):"string"==typeof v.versions.nw&&(C.push("Chromium "+H,"Node "+v.versions.node),G="NW.js",H=v.versions.nw):(G="Node.js",q=v.arch,V=v.platform,H=/[\d.]+/.exec(v.version),H=H?H[0]:"unknown"):A&&(G="Rhino");else d(v=a.runtime)==x?(G="Adobe AIR",V=v.flash.system.Capabilities.os):d(v=a.phantom)==P?(G="PhantomJS",H=(v=v.version||null)&&v.major+"."+v.minor+"."+v.patch):"number"==typeof j.documentMode&&(v=/\bTrident\/(\d+)/i.exec(e))?(H=[H,j.documentMode],(v=+v[1]+4)!=H[1]&&(C.push("IE "+H[1]+" mode"),F&&(F[1]=""),H[1]=v),H="IE"==G?String(H[1].toFixed(1)):H[0]):"number"==typeof j.documentMode&&/^(?:Chrome|Firefox)\b/.test(G)&&(C.push("masking as "+G+" "+H),G="IE",H="11.0",F=["Trident"],V="Windows");V=V&&u(V)}if(H&&(v=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(H)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(B&&n.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(N=/b/i.test(v)?"beta":"alpha",H=H.replace(RegExp(v+"\\+?$"),"")+("beta"==N?R:M)+(/\d+\+?/.exec(v)||"")),"Fennec"==G||"Firefox"==G&&/\b(?:Android|Firefox OS)\b/.test(V))G="Firefox Mobile";else if("Maxthon"==G&&H)H=H.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(U))"Xbox 360"==U&&(V=null),"Xbox 360"==U&&/\bIEMobile\b/.test(e)&&C.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(G)&&(!G||U||/Browser|Mobi/.test(G))||"Windows CE"!=V&&!/Mobi/i.test(e))if("IE"==G&&B)try{null===a.external&&C.unshift("platform preview")}catch(e){C.unshift("embedded")}else(/\bBlackBerry\b/.test(U)||/\bBB10\b/.test(e))&&(v=(RegExp(U.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||H)?(v=[v,/BB10/.test(e)],V=(v[1]?(U=null,W="BlackBerry"):"Device Software")+" "+v[0],H=null):this!=l&&"Wii"!=U&&(B&&L||/Opera/.test(G)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==G&&/\bOS X (?:\d+\.){2,}/.test(V)||"IE"==G&&(V&&!/^Win/.test(V)&&H>5.5||/\bWindows XP\b/.test(V)&&H>8||8==H&&!/\bTrident\b/.test(e)))&&!S.test(v=_.call(l,e.replace(S,"")+";"))&&v.name&&(v="ing as "+v.name+((v=v.version)?" "+v:""),S.test(G)?(/\bIE\b/.test(v)&&"Mac OS"==V&&(V=null),v="identify"+v):(v="mask"+v,G=I?u(I.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(v)&&(V=null),B||(H=null)),F=["Presto"],C.push(v));else G+=" Mobile";(v=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(v=[parseFloat(v.replace(/\.(\d)$/,".0$1")),v],"Safari"==G&&"+"==v[1].slice(-1)?(G="WebKit Nightly",N="alpha",H=v[1].slice(0,-1)):H!=v[1]&&H!=(v[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(H=null),v[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==v[0]&&537.36==v[2]&&parseFloat(v[1])>=28&&"WebKit"==F&&(F=["Blink"]),B&&(w||v[1])?(F&&(F[1]="like Chrome"),v=v[1]||(v=v[0],v<530?1:v<532?2:v<532.05?3:v<533?4:v<534.03?5:v<534.07?6:v<534.1?7:v<534.13?8:v<534.16?9:v<534.24?10:v<534.3?11:v<535.01?12:v<535.02?"13+":v<535.07?15:v<535.11?16:v<535.19?17:v<536.05?18:v<536.1?19:v<537.01?20:v<537.11?"21+":v<537.13?23:v<537.18?24:v<537.24?25:v<537.36?26:"Blink"!=F?"27":"28")):(F&&(F[1]="like Safari"),v=v[0],v=v<400?1:v<500?2:v<526?3:v<533?4:v<534?"4+":v<535?5:v<537?6:v<538?7:v<601?8:"8"),F&&(F[1]+=" "+(v+="number"==typeof v?".x":/[.+]/.test(v)?"":"+")),"Safari"==G&&(!H||parseInt(H)>45)&&(H=v)),"Opera"==G&&(v=/\bzbov|zvav$/.exec(V))?(G+=" ",C.unshift("desktop mode"),"zvav"==v?(G+="Mini",H=null):G+="Mobile",V=V.replace(RegExp(" *"+v+"$"),"")):"Safari"==G&&/\bChrome\b/.exec(F&&F[1])&&(C.unshift("desktop mode"),G="Chrome Mobile",H=null,/\bOS X\b/.test(V)?(W="Apple",V="iOS 4.3+"):V=null),H&&0==H.indexOf(v=/[\d.]+$/.exec(V))&&e.indexOf("/"+v+"-")>-1&&(V=p(V.replace(v,""))),F&&!/\b(?:Avant|Nook)\b/.test(G)&&(/Browser|Lunascape|Maxthon/.test(G)||"Safari"!=G&&/^iOS/.test(V)&&/\bSafari\b/.test(F[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(G)&&F[1])&&(v=F[F.length-1])&&C.push(v),C.length&&(C=["("+C.join("; ")+")"]),W&&U&&U.indexOf(W)<0&&C.push("on "+W),U&&C.push((/^on /.test(C[C.length-1])?"":"on ")+U),V&&(v=/ ([\d.+]+)$/.exec(V),b=v&&"/"==V.charAt(V.length-v[0].length-1),V={architecture:32,family:v&&!b?V.replace(v[0],""):V,version:v?v[1]:null,toString:function(){var e=this.version;return this.family+(e&&!b?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(v=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(q))&&!/\bi686\b/i.test(q)?(V&&(V.architecture=64,V.family=V.family.replace(RegExp(" *"+v),"")),G&&(/\bWOW64\b/i.test(e)||B&&/\w(?:86|32)$/.test(n.cpuClass||n.platform)&&!/\bWin64; x64\b/i.test(e))&&C.unshift("32-bit")):V&&/^OS X/.test(V.family)&&"Chrome"==G&&parseFloat(H)>=39&&(V.architecture=64),e||(e=null);var J={};return J.description=e,J.layout=F&&F[0],J.manufacturer=W,J.name=G,J.prerelease=N,J.product=U,J.ua=e,J.version=G&&H,J.os=V||{architecture:null,family:null,version:null,toString:function(){return"null"}},J.parse=_,J.toString=i,J.version&&C.unshift(H),J.name&&C.unshift(G),V&&G&&(V!=String(V).split(" ")[0]||V!=G.split(" ")[0]&&!U)&&C.push(U?"("+V+")":"on "+V),C.length&&(J.description=C.join(" ")),J}var v={function:!0,object:!0},m=v[typeof window]&&window||this,y=m,b=v[typeof t]&&t,g=v[typeof e]&&e&&!e.nodeType&&e,w=b&&g&&"object"==typeof a&&a;!w||w.global!==w&&w.window!==w&&w.self!==w||(m=w);var x=Math.pow(2,53)-1,S=/\bOpera/,E=this,T=Object.prototype,O=T.hasOwnProperty,k=T.toString,P=_();m.platform=P,void 0!==(r=function(){return P}.call(t,i,t,e))&&(e.exports=r)}).call(this)}).call(t,i(11)(e),i(5))},function(e,t,i){"use strict";function a(){function e(e,t){o++;var i=t.request_start,u=t.request_response_start,l=t.request_response_end,d=t.request_bytes_loaded,c=u-i,f=l-u;if(c>0&&f>0&&d>0){var h=d/f*8e3;s++,a+=c,r+=d,n+=f,this.data.view_min_request_throughput=Math.min(this.data.view_min_request_throughput||1/0,h),this.data.view_average_request_throughput=r/n*8e3,this.data.view_max_request_latency=Math.max(this.data.view_max_request_latency||0,c),this.data.view_average_request_latency=a/s}}function t(e,t){o++,u++}function i(e,t){o++,l++}var a=0,r=0,n=0,o=0,s=0,u=0,l=0;this.on("requestcompleted",e),this.on("requestfailed",t),this.on("requestcanceled",i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,i){"use strict";function a(e,t,i){var a=(0,s.findMediaElement)(t),n=r(a,3),d=n[0],c=n[1],f=n[2],h=e.log,p=e.utils.getComputedStyle,_=e.utils.secondsToMs;return d?"video"!==f&&"audio"!==f?h.error("The element of `"+c+"` was not a media element."):(i=i||{},i.data=(0,o.default)({player_software:"HTML5 Video Element",player_software_version:"No Versions",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:"2.5.0"},i.data),i.getPlayheadTime=function(){return _(d.currentTime)},i.getStateData=function(){return{player_is_paused:d.paused,player_playhead_time:_(d.currentTime),player_width:parseInt(p(d,"width")),player_height:parseInt(p(d,"height")),player_autoplay_on:d.autoplay,player_preload_on:d.preload,video_poster_url:d.poster,video_source_url:d.currentSrc,video_source_duration:_(d.duration),video_source_height:d.videoHeight,video_source_width:d.videoWidth}},d.mux=d.mux||{},d.mux.destroy=function(){Object.keys(d.mux.listeners).forEach(function(e){d.removeEventListener(e,d.mux.listeners[e],!1)}),delete d.mux.listeners,e.emit(c,"destroy")},d.mux.swapElement=function(t){var i=(0,s.findMediaElement)(t),a=r(i,3),n=a[0],u=a[1],l=a[2];return n?"video"!==l&&"audio"!==l?e.log.error("The element of `"+u+"` was not a media element."):(n.muxId=d.muxId,delete d.muxId,n.mux=n.mux||{},n.mux.listeners=(0,o.default)({},d.mux.listeners),delete d.mux.listeners,Object.keys(n.mux.listeners).forEach(function(e){d.removeEventListener(e,n.mux.listeners[e],!1),n.addEventListener(e,n.mux.listeners[e],!1)}),n.mux.swapElement=d.mux.swapElement,n.mux.destroy=d.mux.destroy,delete d.mux,void(d=n)):e.log.error("No element was found with the `"+u+"` query selector.")},d.mux.addHLSJS=function(t){e.addHLSJS(c,t)},d.mux.addDashJS=function(t){e.addDashJS(c,t)},d.mux.removeHLSJS=function(){e.removeHLSJS(c)},d.mux.removeDashJS=function(){e.removeDashJS(c)},e.init(c,i),e.emit(c,"playerready"),d.paused||(e.emit(c,"play"),d.readyState>2&&e.emit(c,"playing")),d.mux.listeners={},void u.forEach(function(t){d.mux.listeners[t]=function(){var i={};"error"===t&&(i.player_error_code=d.error&&d.error.code,i.player_error_message=d.error&&l[d.error.code]),e.emit(c,t,i)},d.addEventListener(t,d.mux.listeners[t],!1)})):h.error("No element was found with the `"+c+"` query selector.")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=a;var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),s=i(9),u=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],l={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"}},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(50),n=a(r),o=i(1),s=a(o),u=i(51),l=a(u),d=i(52),c=a(d),f=i(0),h=a(f),p=i(8),_=a(p),v=i(4),m={};m.safeCall=n.default,m.safeIncrement=s.default,m.getComputedStyle=l.default,m.secondsToMs=c.default,m.assign=h.default,m.headersStringToObject=_.default,m.extractHostnameAndDomain=v.extractHostnameAndDomain,t.default=m},function(e,t,i){"use strict";function a(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){n.default.info("safeCall error",e)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(3),n=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,i){"use strict";function a(e,t){if(n.default.defaultView&&n.default.defaultView.getComputedStyle)return n.default.defaultView.getComputedStyle(e,null).getPropertyValue(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=i(7),n=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,i){"use strict";function a(e){return Math.floor(1e3*e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}])});})();


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./ts/src/ChromecastTracker.ts":
/*!*************************************!*\
  !*** ./ts/src/ChromecastTracker.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cv_tracking_api_1 = __webpack_require__(/*! cv-tracking-api */ "./node_modules/cv-tracking-api/dist/index.js");
const AdbMobileAgent_1 = __webpack_require__(/*! cv-tracking-adbmobile/dist/AdbMobileAgent */ "./node_modules/cv-tracking-adbmobile/dist/AdbMobileAgent.js");
const ComscoreAgent_1 = __webpack_require__(/*! cv-tracking-comscore/dist/ComscoreAgent */ "./node_modules/cv-tracking-comscore/dist/ComscoreAgent.js");
class ChromecastTracker extends cv_tracking_api_1.Tracking {
    registerAgents() {
        super.registerAgents();
        let upvc = this.modelCollection.GlobalSettings.uvpc;
        upvc.forEach(config => {
            if (!config.enabled) {
                return;
            }
            switch (config.name) {
                case cv_tracking_api_1.TrackingModules.ADBMOBILE:
                    this.initAgent(AdbMobileAgent_1.AdbMobileAgent, config);
                    break;
                case cv_tracking_api_1.TrackingModules.COMSCORE:
                    this.initAgent(ComscoreAgent_1.ComscoreAgent, config);
                    break;
                default:
                    break;
            }
        });
    }
}
exports.ChromecastTracker = ChromecastTracker;


/***/ }),

/***/ "./ts/src/TrackingReceiver.ts":
/*!************************************!*\
  !*** ./ts/src/TrackingReceiver.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cv_tracking_api_1 = __webpack_require__(/*! cv-tracking-api */ "./node_modules/cv-tracking-api/dist/index.js");
const ChromecastTracker_1 = __webpack_require__(/*! ./ChromecastTracker */ "./ts/src/ChromecastTracker.ts");
class TrackingReceiver {
    constructor() {
        this.isBuffering = false;
        this.context = cast.framework.CastReceiverContext.getInstance();
        this.playerManager = this.context.getPlayerManager();
        this.tracking = new ChromecastTracker_1.ChromecastTracker();
        this.tracking.debug = true;
        this.setEventMapping();
        this.setTrackingConfig();
        this.setPlayerInfo();
        this.context.start();
    }
    setEventMapping() {
        this.addEventListeners({
            [cast.framework.events.EventType.LOADED_METADATA]: this.onLoadedMetadata.bind(this),
            [cast.framework.events.EventType.LOAD_START]: this.onResourceStart.bind(this),
            [cast.framework.events.EventType.PLAYING]: this.onContentPlaying.bind(this),
            [cast.framework.events.EventType.TIME_UPDATE]: this.onVideoProgress.bind(this),
            [cast.framework.events.EventType.PAUSE]: this.onContentPause.bind(this),
            [cast.framework.events.EventType.SEEKING]: this.onSeekStart.bind(this),
            [cast.framework.events.EventType.SEEKED]: this.onSeekComplete.bind(this),
            [cast.framework.events.EventType.CLIP_ENDED]: this.onContentEnd.bind(this),
            [cast.framework.events.EventType.BUFFERING]: this.onBuffering.bind(this),
            [cast.framework.events.EventType.BITRATE_CHANGED]: this.onBitRateChange.bind(this),
            [cast.framework.events.EventType.MEDIA_FINISHED]: this.onResourceEnd.bind(this),
            [cast.framework.events.EventType.ERROR]: this.onError.bind(this),
            [cast.framework.events.EventType.ALL]: this.setPlayheadTime.bind(this)
        });
    }
    addEventListeners(listeners) {
        for (let eventType in listeners) {
            this.playerManager.addEventListener(eventType, listeners[eventType]);
        }
    }
    setTrackingConfig() {
        // Assuming window.uvpc array is already available on the receiver page
        this.tracking.model.GlobalSettings.uvpc = window.uvpc;
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.TRACKING_CONFIG_READY);
    }
    setPlayerInfo() {
        this.tracking.model.BuildInfo.playerName = 'playerName';
        this.tracking.model.BuildInfo.playerVersion = 'playerVersion';
        let videoElement = document.getElementById('myVideoContainer');
        if (videoElement) {
            this.tracking.model.DomElementCollection.video = videoElement;
            this.tracking.notify(cv_tracking_api_1.PlayerEvents.PLAYER_LOADED);
        }
    }
    setPlayheadTime(event) {
        if (!event) {
            return;
        }
        this.tracking.debug && console.log('[Tracking]', event.type, event);
        if (event.currentMediaTime) {
            this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        }
    }
    onLoadedMetadata(event) {
        // Populate metadata
        this.tracking.model.ContentMetadata.mediaId = 'mediaId';
        this.tracking.model.ContentMetadata.videoTitle = 'videoTitle';
        this.tracking.model.ContentMetadata.seriesTitle = 'seriesTitle';
        this.tracking.model.ContentMetadata.episodeFlag = false;
        this.tracking.model.ContentPlaybackState.duration = 30000;
        this.tracking.model.ResourceConfig.streamType = cv_tracking_api_1.StreamType.VOD;
        this.tracking.model.ContentPlaybackState.cdn = 'Akamai';
        this.tracking.model.AdItem.adId = 'pre_roll_id';
        this.tracking.model.AdItem.adDuration = 30;
        this.tracking.model.ContentMetadata.cmsRefGuid = "cmsRefGuid";
        this.tracking.model.ContentMetadata.seasonNumber = 5;
        this.tracking.model.ContentMetadata.episodeNumber = 1;
        this.tracking.model.ContentPlaybackState.duration = 600;
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.CONTENT_DATA_LOADED);
    }
    onResourceStart(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.RESOURCE_START);
    }
    onAdBreakStart() {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.AD_BREAK_START);
    }
    onAdLoaded() {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.AD_LOADED);
    }
    onAdStart() {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.AD_START);
    }
    onAdComplete() {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.AD_COMPLETE);
    }
    onAdBreakComplete() {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.AD_BREAK_COMPLETE);
    }
    onContentPlaying(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.CONTENT_PLAYING);
    }
    onVideoProgress(event) {
        // Only track progress when the playhead is moving
        if (event.currentMediaTime === this.tracking.model.ContentPlaybackState.playheadTime) {
            return;
        }
        if (this.isBuffering) {
            this.tracking.notify(cv_tracking_api_1.PlayerEvents.BUFFER_COMPLETE);
            this.isBuffering = false;
        }
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.VIDEO_PROGRESS);
    }
    onContentPause(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.CONTENT_PAUSE);
        // if (event && event.ended) {
        //     this.tracking.notify(PlayerEvents.CONTENT_END);
        // }
    }
    onSeekStart(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.SEEK_START);
    }
    onSeekComplete(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.SEEK_COMPLETE);
    }
    onContentEnd(event) {
        if (event && event.endedReason && event.endedReason === cast.framework.events.EndedReason.ERROR) {
            this.tracking.onError({
                code: -1,
                message: event.endedReason,
                isFatal: false
            });
        }
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.CONTENT_END);
    }
    onResourceEnd(event) {
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.RESOURCE_END);
    }
    onBuffering(event) {
        if (!this.isBuffering) {
            this.tracking.notify(cv_tracking_api_1.PlayerEvents.BUFFER_START);
            this.isBuffering = true;
        }
    }
    onBitRateChange(event) {
        if (event.totalBitrate) {
            this.tracking.model.ContentPlaybackState.playbackBitrate = event.totalBitrate;
        }
        this.tracking.notify(cv_tracking_api_1.PlayerEvents.BITRATE_CHANGE);
    }
    onError(event) {
        let code = -1;
        let msg = 'Unspecified Error';
        if (event && event.detailedErrorCode && event.error && event.error.message) {
            code = event.detailedErrorCode;
            msg = event.error.message;
        }
        this.tracking.onError({
            code: code,
            message: msg,
            isFatal: false
        });
    }
}
exports.TrackingReceiver = TrackingReceiver;
window.TrackingReceiver = TrackingReceiver;


/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./ts/src/TrackingReceiver.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./ts/src/TrackingReceiver.ts */"./ts/src/TrackingReceiver.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map