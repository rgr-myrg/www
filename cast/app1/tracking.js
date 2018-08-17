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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/src/TrackingReceiver.ts");
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
module.exports = BaseClass;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/CoreEvent.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-core/dist/core/CoreEvent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var CoreEvent = (function () {
    function CoreEvent(type, target, data) {
        this.timeStamp = Date.now();
        this.data = data;
        this.target = target;
        this.type = type;
    }
    return CoreEvent;
}());
module.exports = CoreEvent;


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
var BaseClass = __webpack_require__(/*! ./BaseClass */ "./node_modules/cv-core/dist/core/BaseClass.js");
var CoreEvent = __webpack_require__(/*! ./CoreEvent */ "./node_modules/cv-core/dist/core/CoreEvent.js");
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
        var e = new CoreEvent(name, this, data), list = this.eventMap[name], n = list ? list.length : 0;
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
}(BaseClass));
module.exports = Emitter;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/Logger.js":
/*!**************************************************!*\
  !*** ./node_modules/cv-core/dist/core/Logger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ut = __webpack_require__(/*! ./Util */ "./node_modules/cv-core/dist/core/Util.js");
var LogLevel = __webpack_require__(/*! ../enum/LogLevel */ "./node_modules/cv-core/dist/enum/LogLevel.js");
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
        this.id = ut.uid8();
        if (opts.container && opts.width && opts.height) {
            this.createDomConsole();
            this.useConsole = false;
        }
        this.logLevel = this.opts.logLevel || LogLevel.INFO;
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
        if (LogLevel.ERROR > this.pLogLevel)
            return;
        if (this.useConsole) {
            console.error(msg);
        }
        else {
            this.domError(msg);
        }
    };
    Logger.prototype.warn = function (msg) {
        if (LogLevel.WARN > this.pLogLevel)
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
        this.log(LogLevel.ANY, d.outerHTML);
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
module.exports = Logger;


/***/ }),

/***/ "./node_modules/cv-core/dist/core/Util.js":
/*!************************************************!*\
  !*** ./node_modules/cv-core/dist/core/Util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
    return Util;
}());
module.exports = Util;


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/LogLevel.js":
/*!****************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/LogLevel.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["OFF"] = 0] = "OFF";
    LogLevel[LogLevel["ANY"] = 100] = "ANY";
    LogLevel[LogLevel["ERROR"] = 200] = "ERROR";
    LogLevel[LogLevel["WARN"] = 300] = "WARN";
    LogLevel[LogLevel["INFO"] = 400] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 500] = "DEBUG";
})(LogLevel || (LogLevel = {}));
module.exports = LogLevel;


/***/ }),

/***/ "./node_modules/cv-core/dist/enum/TrackingModules.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-core/dist/enum/TrackingModules.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TrackingModules;
(function (TrackingModules) {
    TrackingModules["COMSCORE"] = "ComScore_ss";
    TrackingModules["CONVIVA"] = "ConvivaQOSPluginJS";
    TrackingModules["HEARTBEAT"] = "SiteCatalyst";
    TrackingModules["NIELSEN"] = "NielsenTracking_SDK";
    TrackingModules["MUX"] = "MuxQOSPluginJS";
})(TrackingModules || (TrackingModules = {}));
module.exports = TrackingModules;


/***/ }),

/***/ "./node_modules/cv-model/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cv-model/dist/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AdBreakType = __webpack_require__(/*! ./src/enum/AdBreakType */ "./node_modules/cv-model/dist/src/enum/AdBreakType.js");
var ModelName = __webpack_require__(/*! ./src/enum/ModelName */ "./node_modules/cv-model/dist/src/enum/ModelName.js");
var PlaybackState = __webpack_require__(/*! ./src/enum/PlaybackState */ "./node_modules/cv-model/dist/src/enum/PlaybackState.js");
var PlayerEvents = __webpack_require__(/*! ./src/enum/PlayerEvents */ "./node_modules/cv-model/dist/src/enum/PlayerEvents.js");
var StreamType = __webpack_require__(/*! ./src/enum/StreamType */ "./node_modules/cv-model/dist/src/enum/StreamType.js");
var config = __webpack_require__(/*! ./src/cfg/index */ "./node_modules/cv-model/dist/src/cfg/index.js");
var BuildInfo = __webpack_require__(/*! ./src/model/BuildInfo */ "./node_modules/cv-model/dist/src/model/BuildInfo.js");
var GlobalSettings = __webpack_require__(/*! ./src/model/GlobalSettings */ "./node_modules/cv-model/dist/src/model/GlobalSettings.js");
var AdBreakInfo = __webpack_require__(/*! ./src/model/AdBreakInfo */ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js");
var AdItem = __webpack_require__(/*! ./src/model/AdItem */ "./node_modules/cv-model/dist/src/model/AdItem.js");
var AdPlaybackState = __webpack_require__(/*! ./src/model/AdPlaybackState */ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js");
var ContentChapterInfo = __webpack_require__(/*! ./src/model/ContentChapterInfo */ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js");
var ContentMetadata = __webpack_require__(/*! ./src/model/ContentMetadata */ "./node_modules/cv-model/dist/src/model/ContentMetadata.js");
var ContentPlaybackState = __webpack_require__(/*! ./src/model/ContentPlaybackState */ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js");
var DeliveryInfo = __webpack_require__(/*! ./src/model/DeliveryInfo */ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js");
var DomElementCollection = __webpack_require__(/*! ./src/model/DomElementCollection */ "./node_modules/cv-model/dist/src/model/DomElementCollection.js");
var GlobalAdData = __webpack_require__(/*! ./src/model/GlobalAdData */ "./node_modules/cv-model/dist/src/model/GlobalAdData.js");
var PlaybackConfig = __webpack_require__(/*! ./src/model/PlaybackConfig */ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js");
var PlayerOptions = __webpack_require__(/*! ./src/model/PlayerOptions */ "./node_modules/cv-model/dist/src/model/PlayerOptions.js");
var PresentationState = __webpack_require__(/*! ./src/model/PresentationState */ "./node_modules/cv-model/dist/src/model/PresentationState.js");
var ResourceMetadata = __webpack_require__(/*! ./src/model/ResourceMetadata */ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js");
var ResourceState = __webpack_require__(/*! ./src/model/ResourceState */ "./node_modules/cv-model/dist/src/model/ResourceState.js");
var ResourceConfig = __webpack_require__(/*! ./src/model/ResourceConfig */ "./node_modules/cv-model/dist/src/model/ResourceConfig.js");
var UserData = __webpack_require__(/*! ./src/model/UserData */ "./node_modules/cv-model/dist/src/model/UserData.js");
var ModelCollection = __webpack_require__(/*! ./src/ModelCollection */ "./node_modules/cv-model/dist/src/ModelCollection.js");
module.exports = {
    config: config,
    AdBreakType: AdBreakType,
    ModelName: ModelName,
    PlaybackState: PlaybackState,
    PlayerEvents: PlayerEvents,
    StreamType: StreamType,
    BuildInfo: BuildInfo,
    GlobalSettings: GlobalSettings,
    AdBreakInfo: AdBreakInfo,
    AdItem: AdItem,
    AdPlaybackState: AdPlaybackState,
    ContentChapterInfo: ContentChapterInfo,
    ContentMetadata: ContentMetadata,
    ContentPlaybackState: ContentPlaybackState,
    DeliveryInfo: DeliveryInfo,
    DomElementCollection: DomElementCollection,
    GlobalAdData: GlobalAdData,
    PlaybackConfig: PlaybackConfig,
    PlayerOptions: PlayerOptions,
    PresentationState: PresentationState,
    ResourceMetadata: ResourceMetadata,
    ResourceState: ResourceState,
    ResourceConfig: ResourceConfig,
    UserData: UserData,
    ModelCollection: ModelCollection
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Generator = __webpack_require__(/*! ./Generator */ "./node_modules/cv-model/dist/src/Generator.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var ConfigurablePropertyContainer = (function () {
    function ConfigurablePropertyContainer(config) {
        this.pData = {};
        this.defaultValues = {};
        Generator.generateModel(this, config, this.pData, this.defaultValues);
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
module.exports = ConfigurablePropertyContainer;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Generator.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Generator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Validator = __webpack_require__(/*! ./Validator */ "./node_modules/cv-model/dist/src/Validator.js");
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
                    if (!Validator.checkType(txVal, type)) {
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
module.exports = Generator;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/ModelCollection.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/ModelCollection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var config = __webpack_require__(/*! ./cfg/index */ "./node_modules/cv-model/dist/src/cfg/index.js");
var BuildInfo = __webpack_require__(/*! ./model/BuildInfo */ "./node_modules/cv-model/dist/src/model/BuildInfo.js");
var GlobalSettings = __webpack_require__(/*! ./model/GlobalSettings */ "./node_modules/cv-model/dist/src/model/GlobalSettings.js");
var AdBreakInfo = __webpack_require__(/*! ./model/AdBreakInfo */ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js");
var AdItem = __webpack_require__(/*! ./model/AdItem */ "./node_modules/cv-model/dist/src/model/AdItem.js");
var AdPlaybackState = __webpack_require__(/*! ./model/AdPlaybackState */ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js");
var ContentChapterInfo = __webpack_require__(/*! ./model/ContentChapterInfo */ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js");
var ContentMetadata = __webpack_require__(/*! ./model/ContentMetadata */ "./node_modules/cv-model/dist/src/model/ContentMetadata.js");
var ContentPlaybackState = __webpack_require__(/*! ./model/ContentPlaybackState */ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js");
var DeliveryInfo = __webpack_require__(/*! ./model/DeliveryInfo */ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js");
var DomElementCollection = __webpack_require__(/*! ./model/DomElementCollection */ "./node_modules/cv-model/dist/src/model/DomElementCollection.js");
var GlobalAdData = __webpack_require__(/*! ./model/GlobalAdData */ "./node_modules/cv-model/dist/src/model/GlobalAdData.js");
var PlaybackConfig = __webpack_require__(/*! ./model/PlaybackConfig */ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js");
var PlayerOptions = __webpack_require__(/*! ./model/PlayerOptions */ "./node_modules/cv-model/dist/src/model/PlayerOptions.js");
var PresentationState = __webpack_require__(/*! ./model/PresentationState */ "./node_modules/cv-model/dist/src/model/PresentationState.js");
var ResourceMetadata = __webpack_require__(/*! ./model/ResourceMetadata */ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js");
var ResourceState = __webpack_require__(/*! ./model/ResourceState */ "./node_modules/cv-model/dist/src/model/ResourceState.js");
var ResourceConfig = __webpack_require__(/*! ./model/ResourceConfig */ "./node_modules/cv-model/dist/src/model/ResourceConfig.js");
var UserData = __webpack_require__(/*! ./model/UserData */ "./node_modules/cv-model/dist/src/model/UserData.js");
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
            BuildInfo,
            GlobalSettings,
            AdBreakInfo,
            AdItem,
            AdPlaybackState,
            ContentChapterInfo,
            ContentMetadata,
            ContentPlaybackState,
            DeliveryInfo,
            DomElementCollection,
            GlobalAdData,
            PlaybackConfig,
            PlayerOptions,
            PresentationState,
            ResourceMetadata,
            ResourceState,
            ResourceConfig,
            UserData,
        ], i = models.length;
        while (i--) {
            var c = models[i], n = c.modelName, cfg = config[this.classToCfgName(n)];
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
module.exports = ModelCollection;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Transformer.js":
/*!*******************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Transformer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
module.exports = Transformer;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/Validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/Validator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
module.exports = Validator;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
var AdBreakType = __webpack_require__(/*! ../enum/AdBreakType */ "./node_modules/cv-model/dist/src/enum/AdBreakType.js");
module.exports = {
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
            return (val === AdBreakType.MID || val === AdBreakType.POST || val === AdBreakType.PRE)
                ? val : null;
        }
    },
    adServerName: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty
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

module.exports = {
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

module.exports = {
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

module.exports = {
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

module.exports = {
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

module.exports = {
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
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
        validator: Validator.notEmpty
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    isMultiCDN: {
        type: 'boolean',
        defaultValue: false,
    },
    drmType: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty
    },
    isP2pAvailable: {
        type: 'boolean',
        defaultValue: false,
    },
    isSslRequired: {
        type: 'boolean',
        defaultValue: false,
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    adCallUrl: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    allowConcurrentPlayback: {
        type: 'boolean',
        defaultValue: true,
    },
    cms: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty
    },
    partner: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty
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
    },
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var build_info_config = __webpack_require__(/*! ./build_info_config */ "./node_modules/cv-model/dist/src/cfg/build_info_config.js");
var global_settings_config = __webpack_require__(/*! ./global_settings_config */ "./node_modules/cv-model/dist/src/cfg/global_settings_config.js");
var ad_break_info_config = __webpack_require__(/*! ./ad_break_info_config */ "./node_modules/cv-model/dist/src/cfg/ad_break_info_config.js");
var ad_item_config = __webpack_require__(/*! ./ad_item_config */ "./node_modules/cv-model/dist/src/cfg/ad_item_config.js");
var ad_playback_state_config = __webpack_require__(/*! ./ad_playback_state_config */ "./node_modules/cv-model/dist/src/cfg/ad_playback_state_config.js");
var content_chapter_info_config = __webpack_require__(/*! ./content_chapter_info_config */ "./node_modules/cv-model/dist/src/cfg/content_chapter_info_config.js");
var content_metadata_config = __webpack_require__(/*! ./content_metadata_config */ "./node_modules/cv-model/dist/src/cfg/content_metadata_config.js");
var content_playback_state_config = __webpack_require__(/*! ./content_playback_state_config */ "./node_modules/cv-model/dist/src/cfg/content_playback_state_config.js");
var delivery_info_config = __webpack_require__(/*! ./delivery_info_config */ "./node_modules/cv-model/dist/src/cfg/delivery_info_config.js");
var dom_element_collection_config = __webpack_require__(/*! ./dom_element_collection_config */ "./node_modules/cv-model/dist/src/cfg/dom_element_collection_config.js");
var global_ad_data_config = __webpack_require__(/*! ./global_ad_data_config */ "./node_modules/cv-model/dist/src/cfg/global_ad_data_config.js");
var playback_config_config = __webpack_require__(/*! ./playback_config_config */ "./node_modules/cv-model/dist/src/cfg/playback_config_config.js");
var player_options_config = __webpack_require__(/*! ./player_options_config */ "./node_modules/cv-model/dist/src/cfg/player_options_config.js");
var presentation_state_config = __webpack_require__(/*! ./presentation_state_config */ "./node_modules/cv-model/dist/src/cfg/presentation_state_config.js");
var resource_metadata_config = __webpack_require__(/*! ./resource_metadata_config */ "./node_modules/cv-model/dist/src/cfg/resource_metadata_config.js");
var resource_state_config = __webpack_require__(/*! ./resource_state_config */ "./node_modules/cv-model/dist/src/cfg/resource_state_config.js");
var user_data_config = __webpack_require__(/*! ./user_data_config */ "./node_modules/cv-model/dist/src/cfg/user_data_config.js");
module.exports = {
    build_info_config: build_info_config,
    global_settings_config: global_settings_config,
    ad_break_info_config: ad_break_info_config,
    ad_item_config: ad_item_config,
    ad_playback_state_config: ad_playback_state_config,
    content_chapter_info_config: content_chapter_info_config,
    content_metadata_config: content_metadata_config,
    content_playback_state_config: content_playback_state_config,
    delivery_info_config: delivery_info_config,
    dom_element_collection_config: dom_element_collection_config,
    global_ad_data_config: global_ad_data_config,
    playback_config_config: playback_config_config,
    player_options_config: player_options_config,
    presentation_state_config: presentation_state_config,
    resource_metadata_config: resource_metadata_config,
    resource_state_config: resource_state_config,
    user_data_config: user_data_config,
};


/***/ }),

/***/ "./node_modules/cv-model/dist/src/cfg/playback_config_config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/cfg/playback_config_config.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
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
            return Validator.isTypedArray(value, 'string');
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

var Transformer = __webpack_require__(/*! ../Transformer */ "./node_modules/cv-model/dist/src/Transformer.js");
var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    playheadTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator.isPositiveNumber,
    },
    playbackStarted: {
        type: 'boolean',
        defaultValue: false,
    },
    volume: {
        type: 'number',
        defaultValue: 0.35,
        setterTransformer: function (value) {
            return Transformer.clampValue(value, 0, 1);
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    absoluteStreamTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator.isPositiveNumber,
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

var PlaybackState = __webpack_require__(/*! ../enum/PlaybackState */ "./node_modules/cv-model/dist/src/enum/PlaybackState.js");
module.exports = {
    playbackState: {
        type: 'number',
        defaultValue: null,
        validator: function (value) {
            return typeof value === 'number' && PlaybackState[value] !== undefined;
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

var Validator = __webpack_require__(/*! ../Validator */ "./node_modules/cv-model/dist/src/Validator.js");
module.exports = {
    playedChapterTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator.isPositiveNumber,
    },
    podsToSkip: {
        type: 'object',
        defaultValue: null,
        validator: function (value) {
            return Validator.isTypedArray(value, 'number');
        },
    },
    resumeContentTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator.isPositiveNumber,
    },
    resumeEpochTime: {
        type: 'number',
        defaultValue: NaN,
        validator: Validator.isPositiveNumber,
    },
    resumePid: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userConnectionType: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userCountry: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userId: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userIsp: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userPpid: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
    },
    userStatus: {
        type: 'string',
        defaultValue: null,
        validator: Validator.notEmpty,
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

var AdBreakType;
(function (AdBreakType) {
    AdBreakType["PRE"] = "PRE";
    AdBreakType["MID"] = "MID";
    AdBreakType["POST"] = "POST";
})(AdBreakType || (AdBreakType = {}));
module.exports = AdBreakType;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/ModelName.js":
/*!**********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/ModelName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
})(ModelName || (ModelName = {}));
module.exports = ModelName;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/PlaybackState.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/PlaybackState.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PlaybackState;
(function (PlaybackState) {
    PlaybackState[PlaybackState["EMPTY"] = -2] = "EMPTY";
    PlaybackState[PlaybackState["LOADING"] = -1] = "LOADING";
    PlaybackState[PlaybackState["STOPPED"] = 0] = "STOPPED";
    PlaybackState[PlaybackState["PLAYING"] = 1] = "PLAYING";
    PlaybackState[PlaybackState["PAUSED"] = 2] = "PAUSED";
    PlaybackState[PlaybackState["BUFFERING"] = 3] = "BUFFERING";
})(PlaybackState || (PlaybackState = {}));
module.exports = PlaybackState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/PlayerEvents.js":
/*!*************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/PlayerEvents.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
})(PlayerEvents || (PlayerEvents = {}));
module.exports = PlayerEvents;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/enum/StreamType.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/enum/StreamType.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var StreamType;
(function (StreamType) {
    StreamType["VOD"] = "VOD";
    StreamType["LIVE"] = "LIVE";
    StreamType["DVR"] = "DVR";
    StreamType["ARCHIVE"] = "ARCHIVE";
})(StreamType || (StreamType = {}));
module.exports = StreamType;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdBreakInfo.js":
/*!*************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdBreakInfo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdBreakInfo = (function () {
    function AdBreakInfo(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = AdBreakInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdItem.js":
/*!********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdItem.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdItem = (function () {
    function AdItem(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = AdItem;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/AdPlaybackState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/AdPlaybackState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var AdPlaybackState = (function () {
    function AdPlaybackState(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = AdPlaybackState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/BuildInfo.js":
/*!***********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/BuildInfo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var BuildInfo = (function () {
    function BuildInfo(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = BuildInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentChapterInfo.js":
/*!********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentChapterInfo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentChapterInfo = (function () {
    function ContentChapterInfo(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ContentChapterInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentMetadata.js":
/*!*****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentMetadata.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentMetadata = (function () {
    function ContentMetadata(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ContentMetadata;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ContentPlaybackState.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ContentPlaybackState.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ContentPlaybackState = (function () {
    function ContentPlaybackState(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ContentPlaybackState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/DeliveryInfo.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/DeliveryInfo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var DeliveryInfo = (function () {
    function DeliveryInfo(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = DeliveryInfo;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/DomElementCollection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/DomElementCollection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var DomElementCollection = (function () {
    function DomElementCollection(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = DomElementCollection;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/GlobalAdData.js":
/*!**************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/GlobalAdData.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var GlobalAdData = (function () {
    function GlobalAdData(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = GlobalAdData;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/GlobalSettings.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/GlobalSettings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var GlobalSettings = (function () {
    function GlobalSettings(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = GlobalSettings;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PlaybackConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PlaybackConfig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PlaybackConfig = (function () {
    function PlaybackConfig(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = PlaybackConfig;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PlayerOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PlayerOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PlayerOptions = (function () {
    function PlayerOptions(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = PlayerOptions;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/PresentationState.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/PresentationState.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var PresentationState = (function () {
    function PresentationState(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = PresentationState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceConfig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceConfig = (function () {
    function ResourceConfig(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ResourceConfig;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceMetadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceMetadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceMetadata = (function () {
    function ResourceMetadata(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ResourceMetadata;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/ResourceState.js":
/*!***************************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/ResourceState.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var ResourceState = (function () {
    function ResourceState(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = ResourceState;


/***/ }),

/***/ "./node_modules/cv-model/dist/src/model/UserData.js":
/*!**********************************************************!*\
  !*** ./node_modules/cv-model/dist/src/model/UserData.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigurablePropertyContainer = __webpack_require__(/*! ../ConfigurablePropertyContainer */ "./node_modules/cv-model/dist/src/ConfigurablePropertyContainer.js");
var UserData = (function () {
    function UserData(config) {
        this.model = new ConfigurablePropertyContainer(config);
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
module.exports = UserData;


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

/***/ "./node_modules/cv-tracking/dist/Tracking.js":
/*!***************************************************!*\
  !*** ./node_modules/cv-tracking/dist/Tracking.js ***!
  \***************************************************/
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
var Emitter = __webpack_require__(/*! cv-core/dist/core/Emitter */ "./node_modules/cv-core/dist/core/Emitter.js");
var TrackingModules = __webpack_require__(/*! cv-core/dist/enum/TrackingModules */ "./node_modules/cv-core/dist/enum/TrackingModules.js");
var PlayerEvents = __webpack_require__(/*! cv-model/dist/src/enum/PlayerEvents */ "./node_modules/cv-model/dist/src/enum/PlayerEvents.js");
var ModelCollection = __webpack_require__(/*! cv-model/dist/src/ModelCollection */ "./node_modules/cv-model/dist/src/ModelCollection.js");
var MuxAgent_1 = __webpack_require__(/*! ./agent/MuxAgent */ "./node_modules/cv-tracking/dist/agent/MuxAgent.js");
var Tracking = /** @class */ (function (_super) {
    __extends(Tracking, _super);
    // constructor(public modelCollection: ModelCollection) {
    //     super({});
    // }
    function Tracking() {
        var _this = _super.call(this, {}) || this;
        _this.isDebug = false;
        _this.agents = [];
        _this.modelCollection = new ModelCollection();
        return _this;
    }
    Object.defineProperty(Tracking.prototype, "debug", {
        get: function () {
            return this.isDebug;
        },
        set: function (debug) {
            this.isDebug = debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tracking.prototype, "model", {
        get: function () {
            return this.modelCollection;
        },
        enumerable: true,
        configurable: true
    });
    Tracking.prototype.notify = function (playerEvent) {
        if (playerEvent === PlayerEvents.TRACKING_CONFIG_READY) {
            this.registerAgents();
        }
        this.emit(playerEvent);
    };
    Tracking.prototype.onError = function (errorInfo) {
        this.emit(PlayerEvents.VIDEO_PLAYBACK_ERROR, errorInfo);
    };
    Tracking.prototype.registerAgents = function () {
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
                case TrackingModules.MUX:
                    _this.initAgent(MuxAgent_1.MuxAgent, config);
                    break;
                default:
                    break;
            }
        });
    };
    Tracking.prototype.initAgent = function (Agent, config) {
        var agent = new Agent(this, config);
        this.agents.push(agent);
        agent.onRegister();
    };
    return Tracking;
}(Emitter));
exports.Tracking = Tracking;


/***/ }),

/***/ "./node_modules/cv-tracking/dist/agent/BaseAgent.js":
/*!**********************************************************!*\
  !*** ./node_modules/cv-tracking/dist/agent/BaseAgent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel = __webpack_require__(/*! cv-core/dist/enum/LogLevel */ "./node_modules/cv-core/dist/enum/LogLevel.js");
var Logger = __webpack_require__(/*! cv-core/dist/core/Logger */ "./node_modules/cv-core/dist/core/Logger.js");
var BaseAgent = /** @class */ (function () {
    function BaseAgent(observable, config) {
        this.observable = observable;
        this.config = config;
        this.NAME = 'BaseAgent';
        this.debugLabel = '[Tracking]';
        this.logger = new Logger({
            logLevel: LogLevel.DEBUG
        });
    }
    BaseAgent.prototype.on = function (name, listener) {
        this.observable.on(name, listener.bind(this));
    };
    Object.defineProperty(BaseAgent.prototype, "modelCollection", {
        get: function () {
            return this.observable.modelCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseAgent.prototype, "debug", {
        get: function () {
            return this.observable.debug;
        },
        enumerable: true,
        configurable: true
    });
    // Override in Agent instance
    BaseAgent.prototype.onRegister = function () { };
    BaseAgent.prototype.onRegisterDone = function () {
        var _this = this;
        this.debugLabel += ' ' + this.NAME;
        this.debug && this.logInfo('onRegisterDone');
        this.onRegister = function () {
            _this.debug && _this.logInfo('agent already registered');
        };
    };
    BaseAgent.prototype.logInfo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [LogLevel.INFO, this.debugLabel].concat(args));
    };
    BaseAgent.prototype.logDebug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [LogLevel.DEBUG, this.debugLabel].concat(args));
    };
    BaseAgent.prototype.logWarn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [LogLevel.WARN, this.debugLabel].concat(args));
    };
    BaseAgent.prototype.logError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        (_a = this.logger).log.apply(_a, [LogLevel.ERROR, this.debugLabel].concat(args));
    };
    BaseAgent.prototype.destroy = function () {
        delete this.observable;
        delete this.config;
        delete this.logger;
        delete this.debugLabel;
    };
    return BaseAgent;
}());
exports.BaseAgent = BaseAgent;


/***/ }),

/***/ "./node_modules/cv-tracking/dist/agent/MuxAgent.js":
/*!*********************************************************!*\
  !*** ./node_modules/cv-tracking/dist/agent/MuxAgent.js ***!
  \*********************************************************/
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
var mux = __webpack_require__(/*! cv-tracking-mux */ "./node_modules/cv-tracking-mux/dist/mux.js");
var cv_model_1 = __webpack_require__(/*! cv-model */ "./node_modules/cv-model/dist/index.js");
var BaseAgent_1 = __webpack_require__(/*! ./BaseAgent */ "./node_modules/cv-tracking/dist/agent/BaseAgent.js");
var MuxVo_1 = __webpack_require__(/*! ../vo/MuxVo */ "./node_modules/cv-tracking/dist/vo/MuxVo.js");
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
        var onError = function (e) { return _this.onError(e); };
        this.on(cv_model_1.PlayerEvents.PLAYER_START_ERROR, onError);
        this.on(cv_model_1.PlayerEvents.VIDEO_START_ERROR, onError);
        this.on(cv_model_1.PlayerEvents.VIDEO_PLAYBACK_ERROR, onError);
        this.on(cv_model_1.PlayerEvents.PLAYER_LOADED, function () { return _this.onPlayerLoaded(); });
        this.on(cv_model_1.PlayerEvents.CONTENT_DATA_LOADED, function () { return _this.onContentDataLoaded(); });
        this.on(cv_model_1.PlayerEvents.AD_REQUEST, function () { return _this.onAdRequest(); });
        this.on(cv_model_1.PlayerEvents.AD_RESPONSE, function () { return _this.onAdResponse(); });
        this.on(cv_model_1.PlayerEvents.AD_BREAK_START, function () { return _this.onAdBreakStart(); });
        this.on(cv_model_1.PlayerEvents.AD_LOADED, function () { return _this.onAdLoaded(); });
        this.on(cv_model_1.PlayerEvents.AD_START, function () { return _this.onAdStart(); });
        this.on(cv_model_1.PlayerEvents.AD_SKIP, function () { return _this.onAdSkip(); });
        this.on(cv_model_1.PlayerEvents.AD_COMPLETE, function () { return _this.onAdComplete(); });
        this.on(cv_model_1.PlayerEvents.AD_BREAK_COMPLETE, function () { return _this.onAdBreakComplete(); });
        this.on(cv_model_1.PlayerEvents.AD_ERROR, function () { return _this.onAdError(); });
        this.on(cv_model_1.PlayerEvents.AD_FIRST_QUARTILE, function () { return _this.onAdFirstQuartile(); });
        this.on(cv_model_1.PlayerEvents.AD_MID_POINT, function () { return _this.onAdMidPoint(); });
        this.on(cv_model_1.PlayerEvents.AD_THIRD_QUARTILE, function () { return _this.onAdThirdQuartile(); });
        this.on(cv_model_1.PlayerEvents.AD_CLICK, function () { return _this.onAdClick(); });
        this.on(cv_model_1.PlayerEvents.VIDEO_PROGRESS, function () { return _this.onVideoProgress(); });
        this.vo = new MuxVo_1.MuxVo(this.config);
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
            // Do not use this for "errors" that do not result in playback failure.
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
            data: this.vo.formatMetadata(this.modelCollection)
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
        mux.emit(this.modelCollection.DomElementCollection.video, eventName, this.vo.formatMetadata(this.modelCollection));
    };
    MuxAgent.prototype.destroy = function () {
        if (this.modelCollection.DomElementCollection.video) {
            mux.destroyMonitor(this.modelCollection.DomElementCollection.video);
        }
        delete this.vo;
        _super.prototype.destroy.call(this);
    };
    return MuxAgent;
}(BaseAgent_1.BaseAgent));
exports.MuxAgent = MuxAgent;


/***/ }),

/***/ "./node_modules/cv-tracking/dist/util/Util.js":
/*!****************************************************!*\
  !*** ./node_modules/cv-tracking/dist/util/Util.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getParamValue = function (key, config) {
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
    return Util;
}());
exports.Util = Util;


/***/ }),

/***/ "./node_modules/cv-tracking/dist/vo/MuxVo.js":
/*!***************************************************!*\
  !*** ./node_modules/cv-tracking/dist/vo/MuxVo.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../util/Util */ "./node_modules/cv-tracking/dist/util/Util.js");
var MuxVo = /** @class */ (function () {
    function MuxVo(config) {
        this.envKey = Util_1.Util.getParamValue('propertyKey', config) || MuxVo.DEFAULT_PROPERTY_KEY;
        this.experimentName = Util_1.Util.getParamValue('experimentName', config) || '';
        this.subPropertyId = Util_1.Util.getParamValue('subPropertyId', config) || '';
    }
    MuxVo.prototype.formatMetadata = function (modelCollection) {
        return {
            env_key: this.envKey,
            page_type: '',
            viewer_user_id: '',
            experiment_name: this.experimentName,
            sub_property_id: this.subPropertyId,
            player_name: modelCollection.BuildInfo.playerName,
            player_version: modelCollection.BuildInfo.playerVersion,
            player_init_time: -1,
            video_id: modelCollection.ContentMetadata.mediaId,
            video_title: modelCollection.ContentMetadata.videoTitle,
            video_series: modelCollection.ContentMetadata.seriesTitle,
            video_producer: '',
            video_content_type: modelCollection.ContentMetadata.episodeFlag ? 'episode' : 'clip',
            video_language_code: '',
            video_variant_name: '',
            video_variant_id: '',
            video_duration: modelCollection.ContentPlaybackState.duration,
            video_stream_type: modelCollection.ResourceConfig.streamType,
            video_encoding_variant: '',
            video_cdn: modelCollection.ContentPlaybackState.cdn
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

/***/ "./ts/src/TrackingReceiver.ts":
/*!************************************!*\
  !*** ./ts/src/TrackingReceiver.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import * as uvp from 'cv-tracking';
const cv_model_1 = __webpack_require__(/*! cv-model */ "./node_modules/cv-model/dist/index.js");
const Tracking_1 = __webpack_require__(/*! cv-tracking/dist/Tracking */ "./node_modules/cv-tracking/dist/Tracking.js");
const StreamType = __webpack_require__(/*! cv-model/dist/src/enum/StreamType */ "./node_modules/cv-model/dist/src/enum/StreamType.js");
class TrackingReceiver {
    // https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events
    // eventMap: any = {
    //     [cast.framework.events.EventType.LOADED_METADATA]: this.onLoadedMetadata,
    //     [cast.framework.events.EventType.PLAYING]: this.onContentPlaying,
    //     [cast.framework.events.EventType.PROGRESS]: this.onVideoProgress,
    //     [cast.framework.events.EventType.PAUSE]: this.onContentPause,
    //     [cast.framework.events.EventType.SEEKING]: this.onSeekStart,
    //     [cast.framework.events.EventType.SEEKED]: this.onSeekComplete,
    //     [cast.framework.events.EventType.CLIP_ENDED]: this.onContentEnd,
    //     [cast.framework.events.EventType.BUFFERING]: this.onBuffering,
    //     [cast.framework.events.EventType.BITRATE_CHANGED]: this.onBitRateChange,
    //     [cast.framework.events.EventType.ERROR]: this.onError
    // };
    constructor() {
        this.isBuffering = false;
        this.context = cast.framework.CastReceiverContext.getInstance();
        this.playerManager = this.context.getPlayerManager();
        this.tracking = new Tracking_1.Tracking();
        this.tracking.debug = true;
        this.setEventMapping();
        this.setTrackingConfig();
        this.setPlayerInfo();
        this.context.start();
    }
    setEventMapping() {
        // https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events
        this.eventMap = {
            [cast.framework.events.EventType.LOADED_METADATA]: this.onLoadedMetadata,
            [cast.framework.events.EventType.PLAYING]: this.onContentPlaying,
            [cast.framework.events.EventType.PROGRESS]: this.onVideoProgress,
            [cast.framework.events.EventType.PAUSE]: this.onContentPause,
            [cast.framework.events.EventType.SEEKING]: this.onSeekStart,
            [cast.framework.events.EventType.SEEKED]: this.onSeekComplete,
            [cast.framework.events.EventType.CLIP_ENDED]: this.onContentEnd,
            [cast.framework.events.EventType.BUFFERING]: this.onBuffering,
            [cast.framework.events.EventType.BITRATE_CHANGED]: this.onBitRateChange,
            [cast.framework.events.EventType.ERROR]: this.onError
        };
        this.playerManager.addEventListener(cast.framework.events.EventType.ALL, (event) => {
            if (event.currentMediaTime) {
                this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
            }
            this.tracking.debug && console.log('[Tracking] => ' + event.type, event);
            this.eventMap[event.type] && this.eventMap[event.type](event);
        });
    }
    setTrackingConfig() {
        // Assuming window.uvpc array is already available on the receiver page
        this.tracking.model.GlobalSettings.uvpc = window.uvpc;
        this.tracking.notify(cv_model_1.PlayerEvents.TRACKING_CONFIG_READY);
    }
    setPlayerInfo() {
        this.tracking.model.BuildInfo.playerName = 'playerName';
        this.tracking.model.BuildInfo.playerVersion = 'playerVersion';
        let videoElement = document.getElementById('myVideoContainer');
        if (videoElement) {
            this.tracking.model.DomElementCollection.video = videoElement;
            this.tracking.notify(cv_model_1.PlayerEvents.PLAYER_LOADED);
        }
    }
    // addEventListener(): void {
    //     this.playerManager.addEventListener(
    //         cast.framework.events.EventType.ALL,
    //         (event: any) => {
    //             if (event.currentMediaTime) {
    //                 this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
    //             }
    //
    //             this.tracking.debug && console.log('[Tracking] => ' + event.type, event);
    //
    //             this.eventMap[event.type] && this.eventMap[event.type](event);
    //         }
    //     );
    // }
    onLoadedMetadata(event) {
        // Populate metadata
        this.tracking.model.ContentMetadata.mediaId = 'mediaId';
        this.tracking.model.ContentMetadata.videoTitle = 'videoTitle';
        this.tracking.model.ContentMetadata.seriesTitle = 'seriesTitle';
        this.tracking.model.ContentMetadata.episodeFlag = false;
        this.tracking.model.ContentPlaybackState.duration = 30000;
        this.tracking.model.ResourceConfig.streamType = StreamType.VOD;
        this.tracking.model.ContentPlaybackState.cdn = 'Akamai';
        this.tracking.notify(cv_model_1.PlayerEvents.CONTENT_DATA_LOADED);
    }
    onContentPlaying(event) {
        this.tracking.notify(cv_model_1.PlayerEvents.CONTENT_PLAYING);
    }
    onVideoProgress(event) {
        if (this.isBuffering) {
            this.tracking.notify(cv_model_1.PlayerEvents.BUFFER_COMPLETE);
            this.isBuffering = false;
        }
        this.tracking.notify(cv_model_1.PlayerEvents.VIDEO_PROGRESS);
    }
    onContentPause(event) {
        this.tracking.notify(cv_model_1.PlayerEvents.CONTENT_PAUSE);
        if (event.ended) {
            this.tracking.notify(cv_model_1.PlayerEvents.CONTENT_END);
        }
    }
    onSeekStart(event) {
        this.tracking.notify(cv_model_1.PlayerEvents.SEEK_START);
    }
    onSeekComplete(event) {
        this.tracking.notify(cv_model_1.PlayerEvents.SEEK_COMPLETE);
    }
    onContentEnd(event) {
        if (event.endedReason && event.endedReason === cast.framework.events.EndedReason.ERROR) {
            this.tracking.onError({
                code: 1,
                message: 'error',
                isFatal: false
            });
        }
        this.tracking.notify(cv_model_1.PlayerEvents.CONTENT_END);
    }
    onBuffering(event) {
        if (!this.isBuffering) {
            this.tracking.notify(cv_model_1.PlayerEvents.BUFFER_START);
            this.isBuffering = true;
        }
    }
    onBitRateChange(event) {
        if (event.totalBitrate) {
            this.tracking.model.ContentPlaybackState.playbackBitrate = event.totalBitrate;
        }
        this.tracking.notify(cv_model_1.PlayerEvents.BITRATE_CHANGE);
    }
    onError(event) {
        if (!(event.detailedErrorCode && event.error.message)) {
            return;
        }
        this.tracking.onError({
            code: event.detailedErrorCode,
            message: event.error.message,
            isFatal: false
        });
    }
    addEventListeners() {
        console.log('[TRACKING] addEventListener');
        //https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.LOADED_METADATA,
        //     (event: any) => {
        //         console.log('[TRACKING] LOADED_METADATA', event);
        //         this.tracking.model.ContentMetadata.mediaId = 'mediaId';
        //         this.tracking.model.ContentMetadata.videoTitle = 'videoTitle';
        //         this.tracking.model.ContentMetadata.seriesTitle = 'seriesTitle';
        //         this.tracking.model.ContentMetadata.episodeFlag = false;
        //         this.tracking.model.ContentPlaybackState.duration = 30000;
        //         this.tracking.model.ResourceConfig.streamType = StreamType.VOD;
        //         this.tracking.model.ContentPlaybackState.cdn = 'Akamai';
        //
        //         this.tracking.notify(PlayerEvents.CONTENT_DATA_LOADED);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.PLAYING,
        //     (event: any) => {
        //         console.log('[TRACKING] PLAYING');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         this.tracking.notify(PlayerEvents.CONTENT_PLAYING);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.PROGRESS,
        //     (event: any) => {
        //         console.log('[TRACKING] PROGRESS');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         if (this.isBuffering) {
        //             this.tracking.notify(PlayerEvents.BUFFER_COMPLETE);
        //             this.isBuffering = false;
        //         }
        //
        //         this.tracking.notify(PlayerEvents.VIDEO_PROGRESS);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.PAUSE,
        //     (event: any) => {
        //         console.log('[TRACKING] PAUSE');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         this.tracking.notify(PlayerEvents.CONTENT_PAUSE);
        //
        //         if (event.ended) {
        //             this.tracking.notify(PlayerEvents.CONTENT_END);
        //         }
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.SEEKING,
        //     (event: any) => {
        //         console.log('[TRACKING] SEEKING');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         this.tracking.notify(PlayerEvents.SEEK_START);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.SEEKED,
        //     (event: any) => {
        //         console.log('[TRACKING] SEEKED');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         this.tracking.notify(PlayerEvents.SEEK_COMPLETE);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.CLIP_ENDED,
        //     (event: any) => {
        //         console.log('[TRACKING] CLIP_ENDED');
        //         this.tracking.model.ContentPlaybackState.playheadTime = event.currentMediaTime;
        //         if (event.endedReason === cast.framework.events.EndedReason.ERROR) {
        //             this.tracking.onError({
        //                 code: 1,
        //                 message: 'error',
        //                 isFatal: false
        //             });
        //         }
        //
        //         this.tracking.notify(PlayerEvents.CONTENT_END);
        //     }
        // );
        this.playerManager.addEventListener(cast.framework.events.EventType.ENDED, (event) => {
            console.log('[TRACKING] ENDED');
        });
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.BUFFERING,
        //     (event: any) => {
        //         console.log('[TRACKING] BUFFERING');
        //         if (!this.isBuffering) {
        //             this.tracking.notify(PlayerEvents.BUFFER_START);
        //             this.isBuffering = true;
        //         }
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.BITRATE_CHANGED,
        //     (event: any) => {
        //         console.log('[TRACKING] BITRATE_CHANGED', event);
        //         if (event.totalBitrate) {
        //             this.tracking.model.ContentPlaybackState.playbackBitrate = event.totalBitrate;
        //         }
        //         this.tracking.notify(PlayerEvents.BITRATE_CHANGE);
        //     }
        // );
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.ERROR,
        //     (event: any) => {
        //         console.log('[TRACKING] ERROR');
        //         this.tracking.onError({
        //             code: event.detailedErrorCode,
        //             message: event.error.message,
        //             isFatal: false
        //         });
        //     }
        // );
    }
}
exports.TrackingReceiver = TrackingReceiver;
window.TrackingReceiver = TrackingReceiver;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map