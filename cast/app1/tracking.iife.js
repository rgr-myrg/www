(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.vtg || (g.vtg = {})).tracking = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Override() {
    return function (target, propertyKey) {
        target.annotated = target.annotated || {};
        target.annotated.override = target.annotated.override || [];
        target.annotated.override.push(propertyKey);
    };
}
exports.Override = Override;
// Data Decorator
function Data(value) {
    return function (target, propertyKey) {
        if (!target.keys) {
            target.keys = {};
        }
        target.keys[propertyKey] = function (data) {
            if (data.hasOwnProperty(propertyKey) && data[propertyKey]) {
                return data[propertyKey];
            }
            else {
                if (typeof value !== 'boolean') {
                    return value ? value : '';
                }
                else {
                    return value;
                }
            }
        };
    };
}
exports.Data = Data;
exports.ModuleParam = Data;
var DataAccess = /** @class */ (function () {
    function DataAccess(data) {
        this.data = data;
        this.format();
    }
    DataAccess.prototype.format = function () {
        var _this = this;
        var self = this;
        Object.keys(this.keys).forEach(function (key) {
            self[key] = _this.keys[key](_this.data);
        });
        return self;
    };
    DataAccess.prototype.getElapsedTime = function (startTime) {
        var currentTime = (new Date()).getTime();
        return Math.floor((currentTime - startTime) / 1000);
    };
    DataAccess.prototype.getValue = function (key, data) {
        return this.isSet(key, data) ? data[key] : null;
    };
    DataAccess.prototype.isSet = function (key, data) {
        return data.hasOwnProperty(key) && data[key];
    };
    return DataAccess;
}());
exports.DataAccess = DataAccess;
function Destroyable() {
    return function (constructor) {
        constructor.prototype.destroy = function () {
            var _this = this;
            typeof this.onBeforeDestroy === 'function' && this.onBeforeDestroy();
            Object.keys(this).forEach(function (key) {
                if (typeof _this[key] !== 'function') {
                    _this[key] = null;
                }
            });
        };
    };
}
exports.Destroyable = Destroyable;
function Injectable(injectable) {
    return function (constructor) {
        constructor.prototype.injectable = injectable;
    };
}
exports.Injectable = Injectable;
var JsInjector = /** @class */ (function () {
    function JsInjector() {
    }
    JsInjector.prototype.inject = function (injectable) {
        this.scriptSrc = injectable.src;
        this.isDefined = function () {
            // Check if var already exists on the window
            // Ex: window.mux === 'function'
            return View.isVar(injectable.name, injectable.type);
        };
        return this;
    };
    JsInjector.prototype.then = function (handler) {
        if (this.isDefined()) {
            handler(JsInjector.LOADED);
            return;
        }
        View.injectScript(this.scriptSrc, handler);
    };
    JsInjector.ERROR = 'error';
    JsInjector.LOADED = 'loaded';
    return JsInjector;
}());
exports.JsInjector = JsInjector;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.getDefault = function () {
        return this.instance || (this.instance = new this());
    };
    Log.prototype.setLogger = function (logger) {
        if (this.hasLogFunction(logger)) {
            this.logger = logger;
        }
    };
    Log.prototype.getLogger = function () {
        if (!this.logger) {
            this.setLogger(console);
        }
        return this.logger;
    };
    Log.prototype.hasLogFunction = function (logger) {
        return typeof logger === 'object' && typeof logger.log === 'function';
    };
    return Log;
}());
exports.Log = Log;
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.register = function (observer) {
        if (typeof observer === 'object') {
            this.observers.unshift(observer);
            observer.onRegister();
        }
    };
    Observable.prototype.unregister = function (observer) {
        this.observers = this.observers.filter(function (item) { return item !== observer; });
    };
    Observable.prototype.notify = function (notification) {
        if (!this.observers) {
            return;
        }
        for (var i = this.observers.length; i--;) {
            var observer = this.observers[i];
            observer.onNotify.call(observer, notification);
        }
    };
    return Observable;
}());
exports.Observable = Observable;
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.isRunning = false;
    }
    Queue.prototype.add = function (item) {
        this.items.unshift(item);
    };
    Queue.prototype.forEach = function (handler) {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        var i = this.items.length;
        while (i--) {
            var item = this.items.pop();
            if (item) {
                handler(item);
            }
        }
        this.isRunning = false;
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
exports.Queue = Queue;
var RestClient = /** @class */ (function () {
    function RestClient(baseUrl) {
        this.baseUrl = baseUrl;
        this.baseUrl = baseUrl.replace(/^\w*:/, '')
            .replace(/^\/\//, '')
            .replace(/\/*$/, '');
    }
    RestClient.prototype.request = function (options) {
        this.options = options;
        return this;
    };
    RestClient.prototype.then = function (handler) {
        switch (this.options.method) {
            case 'POST':
                this.post(handler);
                break;
            case 'GET':
                this.get(handler);
                break;
        }
    };
    RestClient.prototype.post = function (handler) {
        var xhr = new XMLHttpRequest();
        var url = [this.baseUrl, this.options.path].join('/');
        xhr.open('POST', '//' + url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                handler({
                    xmlHttpRequest: xhr,
                    statusCode: xhr.status,
                    message: xhr.status >= 200 && xhr.status < 300 || xhr.status === 304
                        ? 'ok'
                        : xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            handler({
                xmlHttpRequest: xhr,
                statusCode: xhr.status,
                message: 'error'
            });
        };
        xhr.send(JSON.stringify(this.options.data));
    };
    RestClient.prototype.get = function (handler) {
        var xhr = new XMLHttpRequest();
        var url = [this.baseUrl, this.options.path].join('/');
        var callback = function (xhr, type) {
            handler({
                xmlHttpRequest: xhr,
                statusCode: xhr.status,
                message: type
            });
        };
        xhr.open('GET', '//' + url, true);
        xhr.onload = function () { return callback(xhr, 'load'); };
        xhr.onerror = function () { return callback(xhr, 'error'); };
        xhr.onabort = function () { return callback(xhr, 'abort'); };
        xhr.send(url + JSON.stringify(this.options.data));
    };
    return RestClient;
}());
exports.RestClient = RestClient;
var Timer = /** @class */ (function () {
    function Timer(milliseconds) {
        this.milliseconds = milliseconds;
        this.isRunning = false;
    }
    Timer.prototype.start = function (handler) {
        if (!this.isRunning) {
            this.intervalId = setInterval(handler, this.milliseconds);
            this.isRunning = true;
        }
    };
    Timer.prototype.stop = function () {
        clearInterval(this.intervalId);
        this.isRunning = false;
    };
    return Timer;
}());
exports.Timer = Timer;
var View;
(function (View) {
    function isWindow() {
        return typeof window === 'object';
    }
    View.isWindow = isWindow;
    function isTop() {
        return typeof top === 'object';
    }
    View.isTop = isTop;
    function isVar(name, type) {
        var hier = name.split('.');
        // Check two levels deep. Ex: typeof window['ns_']['comScore']
        if (hier.length === 2) {
            return isWindow() && typeof window[hier[0]] === type
                && typeof window[hier[0]][hier[1]] === type;
        }
        return isWindow() && typeof window[name] === type;
    }
    View.isVar = isVar;
    function getVar(name) {
        return isWindow() && window[name];
    }
    View.getVar = getVar;
    function getScreenSize() {
        var win = window;
        return isWindow() && win.screen && win.screen.width && win.screen.height
            ? win.screen.width + 'x' + win.screen.height
            : 'N/A';
    }
    View.getScreenSize = getScreenSize;
    function injectScript(scriptSrc, handler) {
        if (isWindow()) {
            appendChild(scriptSrc, handler);
        }
        else {
            // Determine injection strategy for other platforms
        }
    }
    View.injectScript = injectScript;
    function appendChild(scriptSrc, handler) {
        var script = window.document.createElement('script');
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.onload = function () { return handler(JsInjector.LOADED); };
        script.onerror = function () { return handler(JsInjector.ERROR); };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    View.appendChild = appendChild;
    function getProtocol() {
        if (!isTop()) {
            return '';
        }
        return top.location.href.search(/^https/) > -1 ? 'https://' : 'http://';
    }
    View.getProtocol = getProtocol;
})(View = exports.View || (exports.View = {}));
var ErrorVo = /** @class */ (function (_super) {
    __extends(ErrorVo, _super);
    function ErrorVo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Data()
    ], ErrorVo.prototype, "code", void 0);
    __decorate([
        Data()
    ], ErrorVo.prototype, "message", void 0);
    __decorate([
        Data()
    ], ErrorVo.prototype, "isFatal", void 0);
    return ErrorVo;
}(DataAccess));
exports.ErrorVo = ErrorVo;
var MetadataVo = /** @class */ (function (_super) {
    __extends(MetadataVo, _super);
    function MetadataVo(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        if (_this.isLive) {
            _this.duration = -1;
        }
        return _this;
    }
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "adBreakDuration", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "adBreakPosition", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adBreakType", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adServerName", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "adDuration", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adTitle", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adId", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "adPosition", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adAssetUrl", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "adClickThruUrl", void 0);
    __decorate([
        Data(false)
    ], MetadataVo.prototype, "isVpaid", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "wrapperAdId", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "assetUrl", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "category", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "cdn", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "currentBitrate", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "duration", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "episode", void 0);
    __decorate([
        Data(false)
    ], MetadataVo.prototype, "episodeFlag", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "episodeTitle", void 0);
    __decorate([
        Data(false)
    ], MetadataVo.prototype, "isLive", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "mediaId", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "ozTamMediaId", void 0);
    __decorate([
        Data(false)
    ], MetadataVo.prototype, "ozTamOptOut", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "playbackFramerate", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "season", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "seriesTitle", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "streamType", void 0);
    __decorate([
        Data(-1)
    ], MetadataVo.prototype, "timestamp", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "videoTitle", void 0);
    __decorate([
        Data(false)
    ], MetadataVo.prototype, "nielsenOptOut", void 0);
    __decorate([
        Data()
    ], MetadataVo.prototype, "airDate", void 0);
    return MetadataVo;
}(DataAccess));
exports.MetadataVo = MetadataVo;
var PlayerInfoVo = /** @class */ (function (_super) {
    __extends(PlayerInfoVo, _super);
    function PlayerInfoVo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "allowConcurrentPlayback", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "bitrate", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "channel", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "cdn", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "cms", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "currentIndex", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "drmDashPlayreadyURL", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "drmDashWidevineURL", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "drmEnabled", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "drmFairplayAppCertURL", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "drmTicketDrmType", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "drmType", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "enableMutedAutoplay", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "enableNativeMobileAutoplay", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "enableReplay", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "enableUnmutedAutoplay", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "framerate", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isAutoplay", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isFullScreen", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isMobile", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isMultiCDN", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isMuteAtPlayStart", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isMuted", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "isSslRequired", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "livestream", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "liveSyncDurationCount", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "maxBitrate", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "minBitrate", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "pageProvidesTealium", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "pagetype", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "partner", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "pguid", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "quality", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "sessionId", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "startTime", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "streamType", void 0);
    __decorate([
        Data(false)
    ], PlayerInfoVo.prototype, "useIma", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userConnectionType", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userCountry", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userIsp", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userPpid", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userStatus", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "viewguid", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "playerName", void 0);
    __decorate([
        Data(-1)
    ], PlayerInfoVo.prototype, "playerInitTime", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "playerVersion", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "userId", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "playerManager", void 0);
    __decorate([
        Data()
    ], PlayerInfoVo.prototype, "videoElement", void 0);
    return PlayerInfoVo;
}(DataAccess));
exports.PlayerInfoVo = PlayerInfoVo;
var AppEvent;
(function (AppEvent) {
    AppEvent["AppClose"] = "appClose";
    AppEvent["AdBreakEnd"] = "adBreakEnd";
    AppEvent["AdBreakStart"] = "adBreakStart";
    AppEvent["AdClick"] = "adClick";
    AppEvent["AdEnd"] = "adEnd";
    AppEvent["AdError"] = "adError";
    AppEvent["AdFirstQuartile"] = "adFirstQuartile";
    AppEvent["AdLoaded"] = "adLoaded";
    AppEvent["AdMidPoint"] = "adMidPoint";
    AppEvent["AdPause"] = "adPause";
    AppEvent["AdRequest"] = "adRequest";
    AppEvent["AdResponse"] = "adResponse";
    AppEvent["AdResume"] = "adResume";
    AppEvent["AdSkip"] = "adSkip";
    AppEvent["AdStart"] = "adStart";
    AppEvent["AdThirdQuartile"] = "adThirdQuartile";
    AppEvent["BitrateChange"] = "bitrateChange";
    AppEvent["BufferEnd"] = "bufferEnd";
    AppEvent["BufferStart"] = "bufferStart";
    AppEvent["ChapterEnd"] = "chapterEnd";
    AppEvent["ChapterStart"] = "chapterStart";
    AppEvent["ChapterSkip"] = "chapterSkip";
    AppEvent["ContentEnd"] = "contentEnd";
    //ContentLoaded = 'contentLoaded',
    AppEvent["ContentPause"] = "contentPause";
    AppEvent["ContentResume"] = "contentResume";
    AppEvent["ContentStart"] = "contentStart";
    AppEvent["ContextData"] = "contextData";
    AppEvent["DashJsLoaded"] = "dashJsLoaded";
    AppEvent["EnterForeground"] = "EnterForeground";
    AppEvent["ExitForeground"] = "ExitForeground";
    AppEvent["FirstQuartile"] = "firstQuartile";
    AppEvent["HlsJsLoaded"] = "hlsJsLoaded";
    AppEvent["LiveSegmentStart"] = "LiveSegmentStart";
    AppEvent["LiveSegmentEnd"] = "LiveSegmentEnd";
    AppEvent["MidQuartile"] = "midQuartile";
    AppEvent["PlayerError"] = "playerError";
    //PlayerLoaded = 'playerLoaded',
    AppEvent["QosEvent"] = "qosEvent";
    AppEvent["SeekEnd"] = "seekEnd";
    AppEvent["SeekStart"] = "seekStart";
    AppEvent["SessionEnd"] = "sessionEnd";
    AppEvent["SessionStart"] = "sessionStart";
    AppEvent["ThirdQuartile"] = "thirdQuartile";
    AppEvent["PlayheadUpdate"] = "playheadUpdate";
})(AppEvent = exports.AppEvent || (exports.AppEvent = {}));
var BuildInfo;
(function (BuildInfo) {
    // Application Platform is populated at build time from bundle.config
    BuildInfo.applicationPlatform = 'Chromecast';
    function isChromecast() {
        return BuildInfo.applicationPlatform === 'Chromecast';
    }
    BuildInfo.isChromecast = isChromecast;
    function isSamsungTv() {
        return BuildInfo.applicationPlatform === 'SamsungTv';
    }
    BuildInfo.isSamsungTv = isSamsungTv;
})(BuildInfo = exports.BuildInfo || (exports.BuildInfo = {}));
var Registrar = /** @class */ (function () {
    function Registrar(observable) {
        this.observable = observable;
    }
    Registrar.prototype.registerAgents = function () {
        var _this = this;
        this.observable.modules.forEach(function (Module) {
            if (_this.isAgentEnabled(Module.NAME)) {
                var agentConfig = _this.getAgentConfig(Module.NAME);
                _this.registerAgent(new Module(agentConfig));
            }
        });
    };
    Registrar.prototype.isAgentEnabled = function (name) {
        return this.observable.config.hasOwnProperty(name)
            && this.observable.config[name].hasOwnProperty('enabled')
            && this.observable.config[name].enabled;
    };
    Registrar.prototype.getAgentConfig = function (name) {
        var agentConfig = this.observable.config[name];
        agentConfig.debug = this.observable.debug;
        agentConfig.name = name;
        return agentConfig;
    };
    Registrar.prototype.registerAgent = function (agent) {
        this.observable.register(agent);
        // Not all agents have injectable sdks
        if (typeof agent.injectable !== 'object') {
            return;
        }
        var injectable = agent.injectable;
        (new JsInjector()).inject(injectable).then(function (response) {
            if (response === JsInjector.LOADED) {
                agent.onSdkLoaded();
            }
        });
    };
    return Registrar;
}());
exports.Registrar = Registrar;
var Tracker = /** @class */ (function (_super) {
    __extends(Tracker, _super);
    function Tracker() {
        var _this = _super.call(this) || this;
        _this.debug = false;
        // Modules list can be created at build time based on the tracking config (uvpc)
        // Or supplied at run time.
        _this.modules = [AdobeAgent, ConvivaCastAgent, OzTamAgent];
        _this.version = 'tracking v0.0.15 Fri, 19 Apr 2019 00:20:07 GMT';
        _this.registrar = new Registrar(_this);
        return _this;
    }
    Tracker.prototype.track = function (eventName, data) {
        data = data || {};
        data.timestamp = (new Date()).getTime();
        this.isDebug() && this.logger.log('[Tracker]', eventName, data);
        _super.prototype.notify.call(this, { name: eventName, body: data });
    };
    Tracker.prototype.setConfig = function (config) {
        this.config = config;
        this.registrar.registerAgents();
    };
    Tracker.prototype.setContextData = function (data) {
        _super.prototype.notify.call(this, { name: AppEvent.ContextData, body: data });
    };
    Tracker.prototype.setDebug = function (debug) {
        this.debug = debug;
    };
    Tracker.prototype.setLogger = function (logger) {
        Log.getDefault().setLogger(logger);
        this.logger = Log.getDefault().getLogger();
    };
    Tracker.prototype.isDebug = function () {
        return this.debug && this.logger ? true : false;
    };
    /**
     * Destroys each observer from the collection. This method is invoked before
     * the object is destroyed via Destroyable decorator
     *
     * @returns {void}
     * @memberof Tracker
     */
    Tracker.prototype.onBeforeDestroy = function () {
        for (var i = this.observers.length; i--;) {
            var observer = this.observers[i];
            observer.destroy && observer.destroy();
        }
    };
    Tracker = __decorate([
        Destroyable()
    ], Tracker);
    return Tracker;
}(Observable));
exports.Tracker = Tracker;
var TrackingAgent = /** @class */ (function () {
    function TrackingAgent(config) {
        this.config = config;
        this.debug = false;
        this.hasSdk = false;
        this.contextData = {};
        this.liveSegmentData = {};
        this.playheadTime = 0;
        this.isAdPlaying = false;
        this.logger = Log.getDefault().getLogger();
        this.debug = config.hasOwnProperty('debug') && config.debug;
        this.queue = new Queue();
        this.isDebug() && this.logger.log(this.config.name, 'starts up');
    }
    TrackingAgent.prototype.onSdkLoaded = function () {
        this.hasSdk = true;
        this.processQueue();
    };
    TrackingAgent.prototype.onNotify = function (notification) {
        // Add to queue if agent sdk isn't ready yet
        if (!this.hasSdk) {
            this.queue.add(notification);
            return;
        }
        this.processQueue();
        this.processNotification(notification);
    };
    TrackingAgent.prototype.processQueue = function () {
        var _this = this;
        if (!this.queue.isEmpty()) {
            this.queue.forEach(function (notification) {
                _this.processNotification(notification);
            });
        }
    };
    TrackingAgent.prototype.processNotification = function (notification) {
        //this.isDebug() && this.logger.log(this.config.name, notification);
        this.notification = notification;
        this.checkForAdPlay();
        // Sync the playhead on every notification
        if (notification.body.playheadTime) {
            this.playheadTime = notification.body.playheadTime;
        }
        switch (notification.name) {
            case AppEvent.SessionStart:
                if (notification.body) {
                    this.playerInfoVo = new PlayerInfoVo(notification.body);
                }
                break;
            case AppEvent.ContentStart:
            case AppEvent.AdBreakStart:
            case AppEvent.AdStart:
                if (notification.body) {
                    this.metadataVo = new MetadataVo(notification.body);
                }
                break;
            case AppEvent.ContextData:
                this.contextData = notification.body;
                break;
            case AppEvent.LiveSegmentStart:
                this.liveSegmentData = notification.body;
                break;
            case AppEvent.LiveSegmentEnd:
                this.liveSegmentData = {};
                break;
            case AppEvent.PlayerError:
                this.errorVo = new ErrorVo(notification.body);
                break;
        }
    };
    TrackingAgent.prototype.isDebug = function () {
        return this.debug && this.logger ? true : false;
    };
    TrackingAgent.prototype.checkForAdPlay = function () {
        switch (this.notification.name) {
            case AppEvent.AdBreakStart:
            case AppEvent.AdStart:
                this.isAdPlaying = true;
                break;
            case AppEvent.AdEnd:
            case AppEvent.AdBreakEnd:
            case AppEvent.ContentStart:
                this.isAdPlaying = false;
                break;
        }
    };
    TrackingAgent.prototype.hasContentCompleted = function () {
        var metadata = this.metadataVo;
        // Live doesn't have duration
        if (metadata && metadata.isLive) {
            return false;
        }
        return this.playheadTime >= metadata.duration * 0.95;
    };
    return TrackingAgent;
}());
exports.TrackingAgent = TrackingAgent;
var ChromecastTracker = /** @class */ (function (_super) {
    __extends(ChromecastTracker, _super);
    function ChromecastTracker() {
        var _this = _super.call(this) || this;
        _this.playheadTime = 0;
        _this.hasLoadStart = false;
        _this.isBuffering = false;
        _this.isAdPlaying = false;
        _this.isPaused = false;
        _this.eventCallback = {};
        _this.context = cast.framework.CastReceiverContext.getInstance();
        _this.playerManager = _this.context.getPlayerManager();
        _this.addEventListeners();
        return _this;
    }
    ChromecastTracker.prototype.addEventListeners = function () {
        var _this = this;
        var _a;
        var type = cast.framework.events.EventType;
        var eventMap = (_a = {},
            _a[type.LOAD_START] = this.onLoadStart,
            _a[type.CLIP_STARTED] = this.onClipStarted,
            _a[type.BUFFERING] = this.onBuffering,
            _a[type.TIME_UPDATE] = this.onTimeUpdate,
            _a[type.BREAK_STARTED] = this.onBreakStarted,
            _a[type.BREAK_CLIP_STARTED] = this.onBreakClipStarted,
            _a[type.BREAK_CLIP_ENDED] = this.onBreakClipEnded,
            _a[type.BREAK_ENDED] = this.onBreakEnded,
            _a[type.PLAYING] = this.onPlaying,
            _a[type.PAUSE] = this.onPause,
            _a[type.SEEKING] = this.onSeeking,
            _a[type.SEEKED] = this.onSeeked,
            _a[type.BITRATE_CHANGED] = this.onBitRateChanged,
            _a[type.CLIP_ENDED] = this.onClipEnded,
            _a[type.MEDIA_FINISHED] = this.onMediaFinished,
            _a[type.ERROR] = this.onPlayerError,
            _a);
        Object.keys(eventMap).forEach(function (key) {
            _this.playerManager.addEventListener(key, eventMap[key].bind(_this));
        });
    };
    ChromecastTracker.prototype.on = function (eventName, callback) {
        this.eventCallback[eventName] = callback;
    };
    ChromecastTracker.prototype.onLoadStart = function (e) {
        this.trackEvent(AppEvent.SessionStart, {
            playerManager: this.playerManager,
            playerInitTime: (new Date()).getTime()
        });
    };
    ChromecastTracker.prototype.onClipStarted = function (e) {
        this.trackEvent(AppEvent.ContentStart);
    };
    ChromecastTracker.prototype.onBuffering = function (e) {
        if (!this.isBuffering) {
            this.isBuffering = true;
            this.trackEvent(AppEvent.BufferStart);
        }
    };
    ChromecastTracker.prototype.onTimeUpdate = function (e) {
        if (this.isBuffering) {
            this.isBuffering = false;
            this.trackEvent(AppEvent.BufferEnd);
        }
        // Don't send progress events if paused
        if (this.isPaused) {
            return;
        }
        if (e.currentMediaTime) {
            this.playheadTime = e.currentMediaTime;
            this.trackEvent(AppEvent.PlayheadUpdate);
        }
    };
    ChromecastTracker.prototype.onBreakStarted = function (e) {
        this.trackEvent(AppEvent.AdBreakStart);
    };
    ChromecastTracker.prototype.onBreakClipStarted = function (e) {
        this.isAdPlaying = true;
        this.trackEvent(AppEvent.AdStart);
    };
    ChromecastTracker.prototype.onBreakClipEnded = function (e) {
        this.isAdPlaying = false;
        this.trackEvent(AppEvent.AdEnd);
    };
    ChromecastTracker.prototype.onBreakEnded = function (e) {
        this.isAdPlaying = false;
        this.trackEvent(AppEvent.AdBreakEnd);
    };
    ChromecastTracker.prototype.onPlaying = function (e) {
        if (this.isPaused) {
            this.isPaused = false;
            this.trackEvent(this.isAdPlaying ? AppEvent.AdResume : AppEvent.ContentResume);
        }
    };
    ChromecastTracker.prototype.onPause = function (e) {
        if (!this.isPaused) {
            this.isPaused = true;
            this.trackEvent(this.isAdPlaying ? AppEvent.AdPause : AppEvent.ContentPause);
        }
    };
    ChromecastTracker.prototype.onSeeking = function (e) {
        this.trackEvent(AppEvent.SeekStart);
    };
    ChromecastTracker.prototype.onSeeked = function (e) {
        this.trackEvent(AppEvent.SeekEnd);
    };
    ChromecastTracker.prototype.onBitRateChanged = function (e) {
        this.trackEvent(AppEvent.BitrateChange, { currentBitrate: e.totalBitrate });
    };
    ChromecastTracker.prototype.onClipEnded = function (e) {
        this.trackEvent(AppEvent.ContentEnd);
    };
    ChromecastTracker.prototype.onMediaFinished = function (e) {
        this.trackEvent(AppEvent.SessionEnd);
    };
    ChromecastTracker.prototype.onPlayerError = function (event) {
        if (event && event.endedReason && event.endedReason === cast.framework.events.EndedReason.ERROR) {
            this.trackEvent(AppEvent.PlayerError, {
                errorCode: event.detailedErrorCode,
                errorMessage: event.endedReason,
                isFatal: false
            });
        }
    };
    ChromecastTracker.prototype.trackEvent = function (name, data) {
        var payload = data || {};
        // Merge data from callback
        if (typeof this.eventCallback[name] === 'function') {
            var eventData_1 = this.eventCallback[name]();
            if (typeof eventData_1 === 'object') {
                Object.keys(eventData_1).forEach(function (key) {
                    payload[key] = eventData_1[key];
                });
                delete this.eventCallback[name];
            }
        }
        // Sync up the tracker with the latest playhead position on every event
        payload.playheadTime = this.playheadTime;
        _super.prototype.track.call(this, name, payload);
    };
    return ChromecastTracker;
}(Tracker));
exports.ChromecastTracker = ChromecastTracker;
var AdobeAgent = /** @class */ (function (_super) {
    __extends(AdobeAgent, _super);
    function AdobeAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasAdobeSession = false;
        _this.isPaused = false;
        _this.hasSdk = true;
        return _this;
    }
    AdobeAgent.prototype.onRegister = function () {
        this.vo = new AdobeVo(this);
        this.restClient = new RestClient(this.debug ? this.vo.devApiServer : this.vo.prodApiServer);
        this.eventQueue = new Queue();
        this.timer = new Timer(this.vo.hbInterval);
    };
    AdobeAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
        switch (notification.name) {
            case AppEvent.AdBreakStart:
                this.trackEvent('adBreakStart');
                break;
            case AppEvent.AdStart:
                this.trackEvent('adStart');
                break;
            case AppEvent.AdClick:
            case AppEvent.AdPause:
                this.trackEvent('pauseStart');
                break;
            case AppEvent.AdEnd:
                this.trackEvent('adComplete');
                break;
            case AppEvent.AdBreakEnd:
                this.trackEvent('adBreakComplete');
                break;
            case AppEvent.ContentStart:
                if (!this.hasAdobeSession) {
                    this.requestAdobeSession();
                }
                this.trackEvent('play');
                break;
            case AppEvent.ContentPause:
                this.isPaused = true;
                this.trackEvent('pauseStart');
                this.pauseHbTracking();
                break;
            case AppEvent.BufferStart:
                this.isPaused = true;
                this.trackEvent('bufferStart');
                this.pauseHbTracking();
                break;
            case AppEvent.ContentResume:
            case AppEvent.PlayheadUpdate:
                if (this.isPaused) {
                    this.isPaused = false;
                    this.trackEvent('play');
                }
                break;
            case AppEvent.SessionEnd:
                this.trackSessionEnd();
                break;
        }
    };
    AdobeAgent.prototype.trackEvent = function (eventName) {
        this.eventQueue.add(eventName);
        this.processEventQueue();
    };
    AdobeAgent.prototype.processEventQueue = function () {
        var _this = this;
        if (!this.hasAdobeSession) {
            return;
        }
        this.eventQueue.forEach(function (item) {
            _this.sendTrackRequest(item);
        });
    };
    AdobeAgent.prototype.sendTrackRequest = function (eventName) {
        var _this = this;
        var options = {
            path: this.apiPath,
            data: this.vo.getPayload(eventName),
            method: 'POST'
        };
        this.isDebug() && this.logger.log(this.config.name, eventName, options);
        this.restClient.request(options).then(function (response) {
            _this.isDebug() && _this.logger.log(_this.config.name, 'statusCode', response.statusCode);
        });
        if (eventName === 'play') {
            this.startHbTracking();
        }
    };
    AdobeAgent.prototype.requestAdobeSession = function () {
        var _this = this;
        var options = {
            path: AdobeVo.SESSION_PATH,
            data: this.vo.getSessionStartData(),
            method: 'POST'
        };
        this.isDebug() && this.logger.log(this.config.name, options);
        this.restClient.request(options).then(function (response) {
            if (response.statusCode === 404) {
                throw ('Error: Server response 404');
            }
            // Ex: /api/v1/sessions/fb7a1c6f02ddf6513fb6b106f84f4ce854fc4d7440f8242c581cdd9a350fa1d4
            var location = response.xmlHttpRequest.getResponseHeader('location');
            if (!location) {
                throw ('Error: Location not found');
            }
            _this.hasAdobeSession = true;
            _this.apiPath = _this.vo.getApiPath(location);
            _this.isDebug() && _this.logger.log(_this.config.name, _this.apiPath);
            _this.processEventQueue();
        });
    };
    AdobeAgent.prototype.startHbTracking = function () {
        var _this = this;
        if (!this.hasAdobeSession) {
            return;
        }
        this.isDebug() && this.logger.log(this.config.name, 'hbInterval', this.vo.hbInterval);
        this.timer.start(function () {
            _this.trackEvent('ping');
        });
    };
    AdobeAgent.prototype.pauseHbTracking = function () {
        this.isDebug() && this.logger.log(this.config.name, 'hb paused');
        this.timer.stop();
    };
    AdobeAgent.prototype.trackSessionEnd = function () {
        this.pauseHbTracking();
        this.hasContentCompleted() && this.trackEvent('sessionComplete');
        this.trackEvent('sessionEnd');
    };
    AdobeAgent.NAME = 'Adobe';
    __decorate([
        Override()
    ], AdobeAgent.prototype, "onRegister", null);
    __decorate([
        Override()
    ], AdobeAgent.prototype, "onNotify", null);
    AdobeAgent = __decorate([
        Destroyable()
    ], AdobeAgent);
    return AdobeAgent;
}(TrackingAgent));
exports.AdobeAgent = AdobeAgent;
var AdobeVo = /** @class */ (function (_super) {
    __extends(AdobeVo, _super);
    function AdobeVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    AdobeVo.prototype.getSessionStartData = function () {
        var playerInfo = this.agent.playerInfoVo;
        var metadata = this.agent.metadataVo;
        var eventData = this.getPayload('sessionStart');
        eventData.params = {
            'analytics.trackingServer': this.trackingServer,
            'analytics.reportSuite': this.reportSuite,
            'analytics.visitorId': this.getValue('visitorId', this.agent.contextData) || '',
            'analytics.enableSSL': this.enableSSL,
            'visitor.marketingCloudOrgId': this.marketingCloudOrgId,
            'media.playerName': playerInfo.playerName,
            'media.contentType': metadata.isLive ? 'Live' : 'VOD',
            'media.length': metadata.duration,
            'media.id': metadata.mediaId,
            'media.name': metadata.videoTitle,
            'media.channel': this.channel,
            'media.sdkVersion': playerInfo.playerVersion,
            'media.show': metadata.seriesTitle,
            'media.season': metadata.season.toString(),
            'media.episode': metadata.episode.toString(),
            'media.genre': metadata.category,
            'media.network': this.channel,
            // Set to 0 for Full Episode, 2 for Clip
            'media.showType': metadata.episodeFlag ? '0' : '2',
            // Set to true if the session was closed and then resumed at a later time, e.g., 
            // the user left the video but eventually came back, and the player resumed the 
            // video from the playhead where it was stopped
            'media.resume': false
        };
        eventData.customMetadata = this.agent.contextData;
        return eventData;
    };
    AdobeVo.prototype.getAdBreakStartData = function () {
        var metadata = this.agent.metadataVo;
        return {
            'media.ad.podFriendlyName': metadata.adBreakType,
            'media.ad.podIndex': metadata.adBreakPosition,
            'media.ad.podPosition': metadata.adBreakPosition,
            'media.ad.podSecond': this.agent.playheadTime
        };
    };
    // https://marketing.adobe.com/resources/help/en_US/sc/appmeasurement/hbvideo/mc-api-req-params.html
    AdobeVo.prototype.getAdItemData = function () {
        var session = this.agent.playerInfoVo;
        var metadata = this.agent.metadataVo;
        return {
            'media.ad.name': metadata.adTitle,
            'media.ad.id': metadata.videoTitle + ' - ' + metadata.adTitle,
            'media.ad.length': metadata.adDuration,
            'media.ad.creativeId': metadata.adId,
            'media.ad.creativeURL': metadata.adAssetUrl,
            'media.ad.playerName': session.playerName,
            'media.ad.podPosition': metadata.adPosition
        };
    };
    AdobeVo.prototype.getApiPath = function (location) {
        location = location.replace(/^\/|\/$/g, '');
        // Ex: {uri}/api/v1/sessions/{sid}/events
        return [location, 'events'].join('/');
    };
    AdobeVo.prototype.getPayload = function (eventName) {
        var metadata = this.agent.metadataVo;
        var params = {};
        switch (eventName) {
            case 'adBreakStart':
                params = this.getAdBreakStartData();
                break;
            case 'adStart':
                params = this.getAdItemData();
                break;
        }
        return {
            eventType: eventName,
            playerTime: {
                playhead: this.agent.playheadTime,
                ts: (new Date()).getTime()
            },
            params: params
        };
    };
    AdobeVo.SESSION_PATH = 'api/v1/sessions';
    __decorate([
        exports.ModuleParam(false)
    ], AdobeVo.prototype, "enableSSL", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "channel", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "reportSuite", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "trackingServer", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "marketingCloudOrgId", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "devApiServer", void 0);
    __decorate([
        exports.ModuleParam()
    ], AdobeVo.prototype, "prodApiServer", void 0);
    __decorate([
        exports.ModuleParam(10000)
    ], AdobeVo.prototype, "hbInterval", void 0);
    AdobeVo = __decorate([
        Destroyable()
    ], AdobeVo);
    return AdobeVo;
}(DataAccess));
exports.AdobeVo = AdobeVo;
var ConvivaCastAgent = /** @class */ (function (_super) {
    __extends(ConvivaCastAgent, _super);
    function ConvivaCastAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConvivaCastAgent.prototype.onRegister = function () {
        this.vo = new ConvivaCastVo(this);
    };
    ConvivaCastAgent.prototype.onSdkLoaded = function () {
        _super.prototype.onSdkLoaded.call(this);
        this.Conviva = View.getVar('Conviva');
    };
    ConvivaCastAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
        this.processNotification(notification);
        switch (notification.name) {
            case AppEvent.ContentStart:
                this.createConvivaSession();
                break;
            case AppEvent.AdBreakStart:
                this.onAdBreakStart();
                break;
            case AppEvent.AdStart:
                this.Conviva.LivePass.adStart(this.convivaSessionId);
                break;
            case AppEvent.AdEnd:
                this.Conviva.LivePass.adEnd(this.convivaSessionId);
                break;
            case AppEvent.AdBreakEnd:
                this.onAdBreakEnd();
                break;
            case AppEvent.BitrateChange:
                this.Conviva.LivePass.setBitrate(this.convivaSessionId, this.metadataVo.currentBitrate);
                break;
            case AppEvent.SessionEnd:
                this.onSessionEnd();
                break;
            case AppEvent.PlayerError:
                this.onPlayerError();
                break;
        }
    };
    ConvivaCastAgent.prototype.createConvivaSession = function () {
        if (!this.playerInfoVo.playerManager) {
            this.isDebug() && this.logger.log('playerManger not provided');
            return;
        }
        if (this.debug) {
            this.Conviva.LivePass.toggleTraces(true);
            this.Conviva.LivePass.initWithSettings(this.vo.customerKey, this.vo.getInitOptions());
        }
        else {
            this.Conviva.LivePass.init(this.vo.customerKey);
        }
        //this.castPlayerManager = <CastPlayerManager>this.notification.body.playerManager;
        this.castPlayerManager = this.playerInfoVo.playerManager;
        this.convivaStreamer = new this.Conviva.ConvivaCastV3StreamerProxy(this.castPlayerManager);
        this.convivaSessionId = this.Conviva.LivePass.createSession(this.convivaStreamer, this.vo.getContentInfo(), this.vo.getSessionOptions());
    };
    ConvivaCastAgent.prototype.onAdBreakStart = function () {
        if (!this.convivaSessionId) {
            this.createConvivaSession();
        }
        // Detach streamer as soon as main content stops playing
        this.Conviva.LivePass.detachStreamer(this.convivaSessionId);
        this.adBreakInfo = this.vo.getAdBreakInfo();
        this.Conviva.LivePass.sendSessionEvent(this.convivaSessionId, 'Conviva.PodStart', this.adBreakInfo);
    };
    ConvivaCastAgent.prototype.onAdBreakEnd = function () {
        // Remove duration from info object. Not needed for 'PodEnd' event
        this.adBreakInfo.podDuration && delete this.adBreakInfo.podDuration;
        this.Conviva.LivePass.sendSessionEvent(this.convivaSessionId, 'Conviva.PodEnd', this.adBreakInfo);
        // Attach streamer as soon as Ads stop playing
        this.Conviva.LivePass.attachStreamer(this.convivaSessionId, this.convivaStreamer);
    };
    ConvivaCastAgent.prototype.onBitRateChange = function () {
        this.Conviva.LivePass.setBitrate(this.convivaSessionId, this.metadataVo.currentBitrate);
    };
    ConvivaCastAgent.prototype.onPlayerError = function () {
        var error = this.vo.getConvivaError();
        this.Conviva.LivePass.reportError(error.sessionId, error.message, error.type);
        if (this.errorVo.isFatal) {
            this.Conviva.LivePass.cleanupSession(this.convivaSessionId);
            this.createConvivaSession();
        }
    };
    ConvivaCastAgent.prototype.onSessionEnd = function () {
        this.hasContentCompleted() && this.Conviva.LivePass.cleanupSession(this.convivaSessionId);
    };
    ConvivaCastAgent.NAME = 'ConvivaCast';
    __decorate([
        Override()
    ], ConvivaCastAgent.prototype, "onRegister", null);
    __decorate([
        Override()
    ], ConvivaCastAgent.prototype, "onSdkLoaded", null);
    __decorate([
        Override()
    ], ConvivaCastAgent.prototype, "onNotify", null);
    ConvivaCastAgent = __decorate([
        Injectable({
            src: 'sdk/conviva-chromecast.js',
            name: 'Conviva',
            type: 'function'
        }),
        Destroyable()
    ], ConvivaCastAgent);
    return ConvivaCastAgent;
}(TrackingAgent));
exports.ConvivaCastAgent = ConvivaCastAgent;
var ConvivaCastVo = /** @class */ (function (_super) {
    __extends(ConvivaCastVo, _super);
    function ConvivaCastVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    ConvivaCastVo.prototype.getInitOptions = function () {
        var gatewayUrl = this.agent.debug ? this.testServerUrl : this.prodServerUrl;
        if (gatewayUrl.search(/^http/) === -1) {
            gatewayUrl = View.getProtocol() + gatewayUrl;
        }
        return {
            gatewayUrl: gatewayUrl
        };
    };
    ConvivaCastVo.prototype.getSessionOptions = function () {
        var _a;
        return _a = {},
            _a[this.agent.Conviva.LivePass.OPTION_EXTERNAL_BITRATE_REPORTING] = true,
            _a;
    };
    ConvivaCastVo.prototype.getContentInfo = function () {
        var playerInfo = this.agent.playerInfoVo;
        var metadata = this.agent.metadataVo;
        var info = new Conviva.ConvivaContentInfo();
        info.playerName = playerInfo.playerName;
        info.streamUrl = metadata.assetUrl;
        info.assetName = metadata.videoTitle;
        info.duration = metadata.duration;
        info.defaultReportingBitrateKbps = metadata.currentBitrate;
        info.defaultReportingResource = metadata.cdn;
        info.encodedFps = metadata.playbackFramerate;
        info.isLive = metadata.isLive;
        info.viewerId = playerInfo.userId;
        info.tags = {
            accessType: playerInfo.userStatus || 'anon',
            contentId: metadata.mediaId || 'N/A',
            contentType: info.isLive ? 'LIVE' : 'VOD',
            isEpisode: metadata.episodeFlag,
            Partner_ID: playerInfo.partner,
            Player_Version: playerInfo.playerVersion,
            seriesTitle: metadata.seriesTitle,
            episodeTitle: metadata.episodeTitle || metadata.videoTitle,
            app: playerInfo.playerName,
            appVersion: playerInfo.playerVersion,
            appRegion: playerInfo.userCountry || 'us',
            drm: playerInfo.drmEnabled,
            drmType: playerInfo.drmType || 'N/A',
            connectionType: playerInfo.userConnectionType || 'unknown',
            winDimension: View.getScreenSize()
        };
        return info;
    };
    ConvivaCastVo.prototype.getAdBreakInfo = function () {
        var metadata = this.agent.metadataVo;
        return {
            podDuration: metadata.adBreakDuration,
            podIndex: metadata.adBreakPosition,
            podPosition: metadata.adBreakType + '-roll'
        };
    };
    ConvivaCastVo.prototype.getConvivaError = function () {
        var errorVo = this.agent.errorVo;
        var errorType = this.agent.Conviva.StreamerError;
        return {
            sessionId: this.agent.convivaSessionId,
            message: [errorVo.code, errorVo.message].join(':'),
            type: errorVo.isFatal ? errorType.SEVERITY_FATAL : errorType.SEVERITY_WARNING
        };
    };
    __decorate([
        exports.ModuleParam()
    ], ConvivaCastVo.prototype, "customerId", void 0);
    __decorate([
        exports.ModuleParam()
    ], ConvivaCastVo.prototype, "customerKey", void 0);
    __decorate([
        exports.ModuleParam(5)
    ], ConvivaCastVo.prototype, "heartbeatInterval", void 0);
    __decorate([
        exports.ModuleParam()
    ], ConvivaCastVo.prototype, "testServerUrl", void 0);
    __decorate([
        exports.ModuleParam()
    ], ConvivaCastVo.prototype, "prodServerUrl", void 0);
    ConvivaCastVo = __decorate([
        Destroyable()
    ], ConvivaCastVo);
    return ConvivaCastVo;
}(DataAccess));
exports.ConvivaCastVo = ConvivaCastVo;
var OzTamAgent = /** @class */ (function (_super) {
    __extends(OzTamAgent, _super);
    function OzTamAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasSessionStart = false;
        _this.isStopped = false;
        return _this;
    }
    OzTamAgent.prototype.onRegister = function () {
        this.vo = new OzTamVo(this);
    };
    OzTamAgent.prototype.onSdkLoaded = function () {
        _super.prototype.onSdkLoaded.call(this);
        this.ozTamService = View.getVar('OzTAMService');
    };
    OzTamAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
        if (this.vo.isOzTamOptOut()) {
            this.isDebug() && this.logger.log(this.config.name, 'OzTam OptOut');
            return;
        }
        switch (notification.name) {
            case AppEvent.ContentStart:
                this.onContentStart();
                break;
            case AppEvent.SeekStart:
                this.ozTamInstance && this.ozTamInstance.seekBegin();
                break;
            case AppEvent.SeekEnd:
                this.ozTamInstance && this.ozTamInstance.seekComplete();
                this.isStopped = true;
                break;
            case AppEvent.ContentPause:
            case AppEvent.BufferStart:
                this.isStopped = true;
                this.ozTamInstance && this.ozTamInstance.haltProgress();
            case AppEvent.ContentEnd:
                this.ozTamInstance && this.ozTamInstance.complete();
                break;
            case AppEvent.ContentResume:
            case AppEvent.PlayheadUpdate:
                if (this.isStopped) {
                    this.isStopped = false;
                    this.ozTamInstance && this.ozTamInstance.resumeProgress();
                }
                break;
        }
    };
    OzTamAgent.prototype.onContentStart = function () {
        if (!this.hasSessionStart) {
            this.startOzTamService();
            this.startOzTamSession();
            this.hasSessionStart = true;
        }
        this.ozTamInstance && this.ozTamInstance.beginPlayback(this.mediaInfo.mediaId, this.mediaInfo.url, this.mediaInfo.mediaDuration, this.mediaInfo.mediaPositionFunction, this.mediaInfo.properties, this.mediaInfo.mediaType);
    };
    OzTamAgent.prototype.startOzTamService = function () {
        var ozTamConfig = this.vo.getConfigInfo();
        this.ozTamInstance = new this.ozTamService(ozTamConfig.publisherId, ozTamConfig.vendorVersion, ozTamConfig.productionMode, ozTamConfig.verboseLogging, ozTamConfig.useHTTPS);
    };
    OzTamAgent.prototype.startOzTamSession = function () {
        this.mediaInfo = this.vo.getMediaInfo();
        this.ozTamInstance && this.ozTamInstance.startSession(this.mediaInfo.mediaId, this.mediaInfo.url, this.mediaInfo.mediaDuration, this.mediaInfo.mediaType);
    };
    OzTamAgent.NAME = 'OzTam';
    __decorate([
        Override()
    ], OzTamAgent.prototype, "onRegister", null);
    __decorate([
        Override()
    ], OzTamAgent.prototype, "onSdkLoaded", null);
    __decorate([
        Override()
    ], OzTamAgent.prototype, "onNotify", null);
    OzTamAgent = __decorate([
        Injectable({
            src: 'sdk/oztam-service.js',
            name: 'OzTAMService',
            type: 'function'
        }),
        Destroyable()
    ], OzTamAgent);
    return OzTamAgent;
}(TrackingAgent));
exports.OzTamAgent = OzTamAgent;
var OzTamVo = /** @class */ (function (_super) {
    __extends(OzTamVo, _super);
    function OzTamVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    OzTamVo.prototype.getConfigInfo = function () {
        return {
            publisherId: this.publisherId,
            vendorVersion: this.getVendorVersion(),
            productionMode: !this.agent.debug,
            verboseLogging: this.agent.debug,
            useHTTPS: top.location.href.search(/^https/) > -1
        };
    };
    OzTamVo.prototype.getVendorVersion = function () {
        var playerInfo = this.agent.playerInfoVo;
        var platformInfo = playerInfo.isMobile ? 'Mobile-Web' : 'Desktop-Web';
        if (BuildInfo.isChromecast()) {
            platformInfo = 'Chromecast';
        }
        return [
            this.platform,
            platformInfo,
            playerInfo.playerVersion
        ].join('_');
    };
    OzTamVo.prototype.getMediaInfo = function () {
        var metadata = this.agent.metadataVo;
        return {
            mediaId: metadata.ozTamMediaId || metadata.mediaId,
            url: metadata.assetUrl,
            mediaDuration: metadata.duration,
            mediaType: metadata.isLive ? 'live' : 'vod',
            mediaPositionFunction: this.getPlayheadTime.bind(this),
            properties: this.getPropertyDictionary()
        };
    };
    OzTamVo.prototype.getPlayheadTime = function () {
        return Math.floor(this.agent.playheadTime);
    };
    OzTamVo.prototype.getPropertyDictionary = function () {
        var playerInfo = this.agent.playerInfoVo;
        var metadata = this.agent.metadataVo;
        var property = {};
        if (metadata.ozTamMediaId) {
            property.altMediaId = metadata.mediaId;
        }
        if (playerInfo.userId) {
            property.demo1 = playerInfo.userId;
        }
        return property;
    };
    OzTamVo.prototype.isOzTamOptOut = function () {
        if (!this.agent.metadataVo) {
            return false;
        }
        return this.agent.metadataVo.ozTamOptOut;
    };
    __decorate([
        exports.ModuleParam()
    ], OzTamVo.prototype, "publisherId", void 0);
    __decorate([
        exports.ModuleParam()
    ], OzTamVo.prototype, "platform", void 0);
    OzTamVo = __decorate([
        Destroyable()
    ], OzTamVo);
    return OzTamVo;
}(DataAccess));
exports.OzTamVo = OzTamVo;

},{}]},{},[1])(1)
});
