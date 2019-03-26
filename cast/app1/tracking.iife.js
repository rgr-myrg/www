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
                    typeof _this[key].destroy === 'function' && _this[key].destroy();
                    _this[key] = null;
                    delete _this[key];
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
            appendToWindow(scriptSrc, handler);
        }
        else {
            // Determine injection strategy for other platforms
        }
    }
    View.injectScript = injectScript;
    function appendToWindow(scriptSrc, handler) {
        var script = window.document.createElement('script');
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.onload = function () { return handler(JsInjector.LOADED); };
        script.onerror = function () { return handler(JsInjector.ERROR); };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    View.appendToWindow = appendToWindow;
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
    AppEvent["PlayerLoaded"] = "playerLoaded";
    AppEvent["PlayheadTime"] = "playheadTime";
    AppEvent["QosEvent"] = "qosEvent";
    AppEvent["SeekEnd"] = "seekEnd";
    AppEvent["SeekStart"] = "seekStart";
    AppEvent["SessionEnd"] = "sessionEnd";
    AppEvent["SessionStart"] = "sessionStart";
    AppEvent["ThirdQuartile"] = "thirdQuartile";
    AppEvent["VideoProgress"] = "videoProgress";
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
        _this.modules = [AdobeAgent, MuxAgent];
        _this.version = 'tracking v0.0.14 Tue, 26 Mar 2019 01:11:55 GMT';
        _this.registrar = new Registrar(_this);
        return _this;
    }
    Tracker.prototype.track = function (eventName, data) {
        data = data || {};
        data.timestamp = (new Date()).getTime();
        this.isDebug() && this.logger.log('Tracker', eventName, data);
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
    // destroy(): void {
    //     (<any> this.config) = null;
    //     (<any> this.logger) = null;
    //     (<any> this.modules) = null;
    //     (<any> this.observers) = null;
    //     (<any> this.playerId) = null;
    //     (<any> this.registrar) = null;
    //     (<any> this.version) = null;
    // }
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
        this.isDebug() && this.logger.log(this.config.name, notification);
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
    ChromecastTracker.prototype.onLoadStart = function (_e) {
        this.trackEvent(AppEvent.SessionStart, {
            playerManager: this.playerManager,
            playerInitTime: (new Date()).getTime()
        });
    };
    ChromecastTracker.prototype.onClipStarted = function (_e) {
        this.trackEvent(AppEvent.ContentStart);
    };
    ChromecastTracker.prototype.onBuffering = function (_e) {
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
        if (this.isPaused) {
            return;
        }
        if (e.currentMediaTime) {
            this.playheadTime = e.currentMediaTime;
            this.trackEvent(AppEvent.VideoProgress);
        }
    };
    ChromecastTracker.prototype.onBreakStarted = function (_e) {
        this.trackEvent(AppEvent.AdBreakStart);
    };
    ChromecastTracker.prototype.onBreakClipStarted = function (_e) {
        this.isAdPlaying = true;
        this.trackEvent(AppEvent.AdStart);
    };
    ChromecastTracker.prototype.onBreakClipEnded = function (_e) {
        this.isAdPlaying = false;
        this.trackEvent(AppEvent.AdEnd);
    };
    ChromecastTracker.prototype.onBreakEnded = function (_e) {
        this.isAdPlaying = false;
        this.trackEvent(AppEvent.AdBreakEnd);
    };
    ChromecastTracker.prototype.onPlaying = function (_e) {
        if (this.isPaused) {
            this.isPaused = false;
            this.trackEvent(this.isAdPlaying ? AppEvent.AdResume : AppEvent.ContentResume);
        }
    };
    ChromecastTracker.prototype.onPause = function (_e) {
        if (!this.isPaused) {
            this.isPaused = true;
            this.trackEvent(this.isAdPlaying ? AppEvent.AdPause : AppEvent.ContentPause);
        }
    };
    ChromecastTracker.prototype.onSeeking = function (_e) {
        this.trackEvent(AppEvent.SeekStart);
    };
    ChromecastTracker.prototype.onSeeked = function (_e) {
        this.trackEvent(AppEvent.SeekEnd);
    };
    ChromecastTracker.prototype.onBitRateChanged = function (e) {
        this.trackEvent(AppEvent.BitrateChange, { currentBitrate: e.totalBitrate });
    };
    ChromecastTracker.prototype.onClipEnded = function (_e) {
        this.trackEvent(AppEvent.ContentEnd);
    };
    ChromecastTracker.prototype.onMediaFinished = function (_e) {
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
            case AppEvent.VideoProgress:
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
        // if (!this.hasAdobeSession) {
        //     this.requestAdobeSession();
        // }
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
        this.isDebug() && this.logger.info(this.config.name, eventName, options);
        this.restClient.request(options).then(function (response) {
            _this.isDebug() && _this.logger.info(_this.config.name, 'statusCode', response.statusCode);
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
        this.isDebug() && this.logger.info(this.config.name, options);
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
            _this.isDebug() && _this.logger.info(_this.config.name, _this.apiPath);
            _this.processEventQueue();
        });
    };
    AdobeAgent.prototype.startHbTracking = function () {
        var _this = this;
        if (!this.hasAdobeSession) {
            return;
        }
        this.isDebug() && this.logger.info(this.config.name, 'hbInterval', this.vo.hbInterval);
        this.timer.start(function () {
            _this.trackEvent('ping');
        });
    };
    AdobeAgent.prototype.pauseHbTracking = function () {
        this.isDebug() && this.logger.info(this.config.name, 'hb paused');
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
var MuxAgent = /** @class */ (function (_super) {
    __extends(MuxAgent, _super);
    function MuxAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasMonitor = false;
        _this.isAdPaused = false;
        return _this;
    }
    MuxAgent.prototype.onRegister = function () {
        this.vo = new MuxVo(this);
    };
    MuxAgent.prototype.onSdkLoaded = function () {
        _super.prototype.onSdkLoaded.call(this);
        this.mux = View.getVar('mux');
    };
    MuxAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
        switch (notification.name) {
            case AppEvent.ContentStart:
                if (this.hasMonitor) {
                    this.trackEvent('videochange');
                }
                this.startMuxMonitor();
                break;
            case AppEvent.DashJsLoaded:
                this.onDashJsLoaded();
                break;
            case AppEvent.HlsJsLoaded:
                this.onHlsJsLoaded();
                break;
            case AppEvent.AdLoaded:
                this.trackAdEvent('adplay');
                break;
            case AppEvent.AdStart:
                this.trackAdEvent('adplaying');
                break;
            case AppEvent.AdClick:
            case AppEvent.AdPause:
                this.isAdPaused = true;
                this.trackAdEvent('adpause');
                break;
            case AppEvent.VideoProgress:
            case AppEvent.AdResume:
                if (this.isAdPaused) {
                    this.isAdPaused = false;
                    this.trackAdEvent('adplay');
                    this.trackAdEvent('adplaying');
                }
                break;
            case AppEvent.AdSkip:
            case AppEvent.AdEnd:
                this.trackAdEvent('adended');
                break;
            case AppEvent.AdRequest:
            case AppEvent.AdResponse:
            case AppEvent.AdBreakStart:
            case AppEvent.AdError:
            case AppEvent.AdBreakEnd:
            case AppEvent.AdFirstQuartile:
            case AppEvent.AdMidPoint:
            case AppEvent.AdThirdQuartile:
                this.trackAdEvent(notification.name.toLowerCase());
                break;
            case AppEvent.PlayerError:
                this.onPlayerError();
                break;
        }
    };
    MuxAgent.prototype.trackEvent = function (eventName) {
        this.startMuxMonitor() && this.mux.emit(this.playerInfoVo.videoElement, eventName, this.vo.getMuxMetadata());
    };
    MuxAgent.prototype.trackAdEvent = function (eventName) {
        this.startMuxMonitor() && this.mux.emit(this.playerInfoVo.videoElement, eventName, this.vo.getAdData());
    };
    MuxAgent.prototype.startMuxMonitor = function () {
        if (!this.hasSdk) {
            this.isDebug() && this.logger.warn('Sdk not loaded');
            return false;
        }
        if (!this.playerInfoVo.videoElement) {
            this.isDebug() && this.logger.warn('videoElement missing');
            return false;
        }
        if (!this.hasMonitor) {
            this.mux.monitor(this.vo.getVideoElement(), this.vo.getMuxOptions());
            this.hasMonitor = true;
        }
        return this.hasMonitor;
    };
    MuxAgent.prototype.onDashJsLoaded = function () {
        var dashJsPlayer = this.vo.getDashJsPlayer();
        if (!dashJsPlayer) {
            return;
        }
        this.startMuxMonitor() && this.mux.addDashJS({
            dashjs: dashJsPlayer
        });
    };
    MuxAgent.prototype.onHlsJsLoaded = function () {
        var hlsJsPlayer = this.vo.getHlsJsPlayer();
        var hlsJsLib = View.getVar('Hls');
        if (!hlsJsPlayer || !hlsJsLib) {
            return;
        }
        this.startMuxMonitor() && this.mux.addHLSJS({
            hlsjs: hlsJsPlayer,
            Hls: hlsJsLib
        });
    };
    MuxAgent.prototype.onPlayerError = function () {
        if (!this.vo.isFatalError()) {
            // Per Mux: This event should only be used for fatal errors.
            // Do not mux.emit "errors" that do not result in playback failure.
            return;
        }
        this.startMuxMonitor() && this.mux.emit(this.playerInfoVo.videoElement, 'error', this.vo.getErrorInfo());
    };
    MuxAgent.prototype.onBeforeDestroy = function () {
        this.mux.removeDashJS();
        this.mux.removeHLSJS();
        this.mux.destroyMonitor(this.vo.getVideoElement());
    };
    MuxAgent.NAME = 'Mux';
    __decorate([
        Override()
    ], MuxAgent.prototype, "onRegister", null);
    __decorate([
        Override()
    ], MuxAgent.prototype, "onSdkLoaded", null);
    __decorate([
        Override()
    ], MuxAgent.prototype, "onNotify", null);
    MuxAgent = __decorate([
        Injectable({
            src: '//src.litix.io/core/2/mux.js',
            name: 'mux',
            type: 'function'
        }),
        Destroyable()
    ], MuxAgent);
    return MuxAgent;
}(TrackingAgent));
exports.MuxAgent = MuxAgent;
var MuxVo = /** @class */ (function (_super) {
    __extends(MuxVo, _super);
    function MuxVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    MuxVo.prototype.getVideoElement = function () {
        return this.agent.playerInfoVo.videoElement;
    };
    MuxVo.prototype.getMuxOptions = function () {
        return {
            debug: this.agent.debug,
            data: this.getMuxMetadata()
        };
    };
    MuxVo.prototype.getMuxMetadata = function () {
        var session = this.agent.playerInfoVo;
        var metadata = this.agent.metadataVo;
        return {
            env_key: this.envKey,
            page_type: '',
            viewer_user_id: session.userId,
            experiment_name: this.experimentName,
            sub_property_id: this.subPropertyId,
            player_name: session.playerName,
            player_version: session.playerVersion,
            player_init_time: session.playerInitTime,
            video_id: metadata.mediaId,
            video_title: metadata.videoTitle,
            video_series: metadata.seriesTitle,
            video_producer: '',
            video_content_type: metadata.episodeFlag ? 'episode' : 'clip',
            video_language_code: '',
            video_variant_name: '',
            video_variant_id: '',
            video_duration: metadata.duration,
            video_stream_type: metadata.isLive ? 'live' : 'on-demand',
            video_encoding_variant: '',
            video_cdn: metadata.cdn
        };
    };
    MuxVo.prototype.getAdData = function () {
        var metadata = this.agent.metadataVo;
        return {
            ad_tag_url: metadata.adAssetUrl,
            ad_asset_url: metadata.adAssetUrl
        };
    };
    MuxVo.prototype.getErrorInfo = function () {
        var data = this.agent.notification.body;
        return {
            player_error_code: this.isSet('errorCode', data) ? data.errorCode : -1,
            player_error_message: this.getValue('errorMessage', data)
        };
    };
    MuxVo.prototype.getDashJsPlayer = function () {
        return this.getValue('dashJsPlayer', this.agent.notification.body);
    };
    MuxVo.prototype.getHlsJsPlayer = function () {
        return this.getValue('hlsJsPlayer', this.agent.notification.body);
    };
    MuxVo.prototype.isFatalError = function () {
        var data = this.agent.notification.body;
        return this.isSet('isFatal', data);
    };
    __decorate([
        exports.ModuleParam('ec83cce4c209447a2af3d62f2')
    ], MuxVo.prototype, "envKey", void 0);
    __decorate([
        exports.ModuleParam()
    ], MuxVo.prototype, "experimentName", void 0);
    __decorate([
        exports.ModuleParam()
    ], MuxVo.prototype, "subPropertyId", void 0);
    MuxVo = __decorate([
        Destroyable()
    ], MuxVo);
    return MuxVo;
}(DataAccess));
exports.MuxVo = MuxVo;

},{}]},{},[1])(1)
});
