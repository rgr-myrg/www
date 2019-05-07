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
function ModuleParam(value) {
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
exports.ModuleParam = ModuleParam;
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
        this.debug = false;
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
    Observable.prototype.deregister = function (observer) {
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
            appendChildToHead(scriptSrc, handler);
        }
        else {
            // Determine injection strategy for other platforms
        }
    }
    View.injectScript = injectScript;
    function appendChildToHead(scriptSrc, handler) {
        var script = window.document.createElement('script');
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.onload = function () { return handler(JsInjector.LOADED); };
        script.onerror = function () { return handler(JsInjector.ERROR); };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    View.appendChildToHead = appendChildToHead;
    function getProtocol() {
        if (!isTop()) {
            return '';
        }
        return top.location.href.search(/^https/) > -1 ? 'https://' : 'http://';
    }
    View.getProtocol = getProtocol;
})(View = exports.View || (exports.View = {}));
var DataProxy = /** @class */ (function () {
    function DataProxy() {
        this.metadata = new DataVo();
    }
    DataProxy.getDefault = function () {
        return this.instance || (this.instance = new this());
    };
    DataProxy.prototype.update = function (data) {
        this.metadata = Object.assign(this.metadata, data);
        this.metadata.timestamp = (new Date()).getTime();
    };
    DataProxy.prototype.getData = function () {
        return this.metadata;
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;
var DataVo = /** @class */ (function () {
    function DataVo() {
        /* Player Info */
        this.playerName = '';
        this.playerVersion = '';
        this.playerInitTime = -1;
        this.playerManager = {};
        this.dashJsPlayer = {};
        this.hlsJsPlayer = {};
        this.videoElement = {};
        this.isMobile = false;
        this.hasSessionResumed = false;
        this.sessionId = '';
        /* Ad Break Info */
        this.adBreakType = '';
        this.adBreakPosition = -1;
        this.adBreakDuration = -1;
        /* Ad Item Info */
        this.adTitle = '';
        this.adId = '';
        this.adAssetUrl = '';
        this.adDuration = -1;
        this.adPosition = -1;
        /* Content Info */
        this.assetUrl = '';
        this.category = '';
        this.mediaId = '';
        this.episodeTitle = '';
        this.seriesTitle = '';
        this.videoTitle = '';
        this.airDate = '';
        this.duration = -1;
        this.episodeFlag = false;
        this.isLive = false;
        this.timestamp = -1;
        this.playhead = -1;
        this.season = -1;
        this.episode = -1;
        this.liveSegmentData = {};
        /* Playback Info */
        this.cdn = '';
        this.currentBitrate = -1;
        this.playbackFramerate = -1;
        this.drmEnabled = false;
        this.drmType = '';
        /* Page Info */
        this.visitorId = '';
        this.userId = '';
        this.userStatus = 'anon';
        this.partner = '';
        this.userCountry = '';
        this.userConnectionType = '';
        this.contextData = {};
        /* OzTam Info */
        this.ozTamMediaId = '';
        this.ozTamOptOut = false;
        /* Nielsen Info */
        this.nielsenOptOut = false;
        /* Error Info */
        this.errorCode = -1;
        this.errorMessage = '';
        this.errorIsFatal = false;
    }
    return DataVo;
}());
exports.DataVo = DataVo;
var Agent = /** @class */ (function () {
    function Agent(config) {
        this.config = config;
        this.isAdPlaying = false;
        this.hasSdk = false;
    }
    Agent.prototype.onRegister = function () {
        this.isDebug() && this.logger.log(this.config.name, 'start up');
    };
    Agent.prototype.onSdkLoaded = function () {
        this.hasSdk = true;
        //this.processQueue();
    };
    Agent.prototype.onNotify = function (notification) {
        this.isDebug() && this.logger.log(this.config.name, notification);
        this.notification = notification;
        this.checkForAdPlay();
    };
    Agent.prototype.checkForAdPlay = function () {
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
    Agent.prototype.hasContentCompleted = function () {
        var metadata = this.getData();
        // Live doesn't have duration
        if (metadata && metadata.isLive) {
            return false;
        }
        return metadata.playhead >= metadata.duration * 0.95;
    };
    Agent.prototype.getData = function () {
        return DataProxy.getDefault().getData();
    };
    Agent.prototype.isDebug = function () {
        return Log.getDefault().debug;
    };
    Object.defineProperty(Agent.prototype, "logger", {
        get: function () {
            return Log.getDefault().getLogger();
        },
        enumerable: true,
        configurable: true
    });
    return Agent;
}());
exports.Agent = Agent;
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
    //ContextData = 'contextData',
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
    function Registrar() {
    }
    Registrar.prototype.registerAgents = function (tracker) {
        var _this = this;
        this.tracker = tracker;
        this.tracker.modules.forEach(function (Module) {
            if (_this.isAgentEnabled(Module.NAME)) {
                var agentConfig = _this.getAgentConfig(Module.NAME);
                _this.registerAgent(new Module(agentConfig));
            }
        });
    };
    Registrar.prototype.isAgentEnabled = function (name) {
        return this.tracker.config.hasOwnProperty(name)
            && this.tracker.config[name].hasOwnProperty('enabled')
            && this.tracker.config[name].enabled;
    };
    Registrar.prototype.getAgentConfig = function (name) {
        var agentConfig = this.tracker.config[name];
        agentConfig.name = name;
        return agentConfig;
    };
    Registrar.prototype.registerAgent = function (agent) {
        this.tracker.register(agent);
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registrar = new Registrar();
        // Modules list can be created at build time or supplied at run time.
        _this.modules = [AdobeAgent, ConvivaCastAgent, OzTamAgent];
        _this.version = 'tracking v0.1.1 Tue, 07 May 2019 16:07:40 GMT';
        return _this;
    }
    Tracker.prototype.track = function (name, data) {
        DataProxy.getDefault().update(data);
        _super.prototype.notify.call(this, { name: name, body: data });
    };
    Tracker.prototype.setConfig = function (config) {
        this.config = config;
        this.registrar.registerAgents(this);
    };
    Tracker.prototype.setContextData = function (data) {
        DataProxy.getDefault().update({ contextData: data });
    };
    Tracker.prototype.setLiveSegmentData = function (data) {
        DataProxy.getDefault().update({ liveSegmentData: data });
    };
    Tracker.prototype.setDebug = function (debug) {
        Log.getDefault().debug = debug;
    };
    Tracker.prototype.setLogger = function (logger) {
        Log.getDefault().setLogger(logger);
    };
    Tracker.prototype.isDebug = function () {
        return Log.getDefault().debug;
    };
    Tracker.prototype.logger = function () {
        return Log.getDefault().getLogger();
    };
    return Tracker;
}(Observable));
exports.Tracker = Tracker;
var CastTracker = /** @class */ (function (_super) {
    __extends(CastTracker, _super);
    function CastTracker() {
        var _this = _super.call(this) || this;
        _this.playhead = 0;
        _this.hasPlayerLoadComplete = false;
        _this.hasSessionStart = false;
        _this.hasClipStarted = false;
        _this.hasBreakStarted = false;
        _this.isBuffering = false;
        _this.isAdPlaying = false;
        _this.isPaused = false;
        _this.eventCallback = {};
        _this.context = cast.framework.CastReceiverContext.getInstance();
        _this.playerManager = _this.context.getPlayerManager();
        _this.addEventListeners();
        return _this;
    }
    CastTracker.prototype.addEventListeners = function () {
        this.playerManager.addEventListener(cast.framework.events.EventType.ALL, this.onEventTypeAll.bind(this));
    };
    CastTracker.prototype.onEventTypeAll = function (event) {
        var type = cast.framework.events.EventType;
        switch (event.type) {
            case type.PLAYER_LOAD_COMPLETE:
                this.hasPlayerLoadComplete = true;
                break;
            case type.CLIP_STARTED:
                break;
            case type.MEDIA_FINISHED:
                this.hasSessionStart = false;
                this.hasClipStarted = false;
                this.hasBreakStarted = false;
                this.isAdPlaying = false;
                this.isBuffering = false;
                this.isPaused = false;
                this.trackSessionEnd();
                break;
        }
    };
    CastTracker.prototype.on = function (eventName, callback) {
        this.eventCallback[eventName] = callback;
    };
    CastTracker.prototype.trackSessionStart = function () {
        this.trackEvent(AppEvent.SessionStart, {
            playerManager: this.playerManager,
            playerInitTime: (new Date()).getTime()
        });
    };
    CastTracker.prototype.trackSessionEnd = function () {
        this.trackEvent(AppEvent.ContentEnd);
        this.trackEvent(AppEvent.SessionEnd);
    };
    CastTracker.prototype.trackEvent = function (name, data) {
        var payload = data || {};
        // Merge data from callback
        if (typeof this.eventCallback[name] === 'function') {
            var eventData = this.eventCallback[name]();
            if (typeof eventData === 'object') {
                payload = Object.assign(payload, eventData);
                delete this.eventCallback[name];
            }
        }
        // Sync up the tracker with the latest playhead position
        payload.playhead = this.playhead;
        _super.prototype.track.call(this, name, payload);
    };
    return CastTracker;
}(Tracker));
var ChromecastTracker = /** @class */ (function (_super) {
    __extends(ChromecastTracker, _super);
    function ChromecastTracker() {
        var _this = _super.call(this) || this;
        _this.playhead = 0;
        _this.hasPlayerLoadComplete = false;
        _this.hasSessionStart = false;
        _this.hasClipStarted = false;
        _this.hasBreakStarted = false;
        _this.isBuffering = false;
        _this.isAdPlaying = false;
        _this.isPaused = false;
        _this.isSeeking = false;
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
            _a[type.PLAYER_LOAD_COMPLETE] = this.onPlayerLoadComplete,
            _a[type.CLIP_STARTED] = this.onClipStarted,
            _a[type.BREAK_STARTED] = this.onBreakStarted,
            _a[type.BREAK_CLIP_STARTED] = this.onBreakClipStarted,
            _a[type.BREAK_CLIP_ENDED] = this.onBreakClipEnded,
            _a[type.BREAK_ENDED] = this.onBreakEnded,
            _a[type.BUFFERING] = this.onBuffering,
            _a[type.TIME_UPDATE] = this.onTimeUpdate,
            _a[type.PLAYING] = this.onPlaying,
            _a[type.PAUSE] = this.onPause,
            _a[type.REQUEST_SEEK] = this.onRequestSeek,
            _a[type.SEEKED] = this.onSeeked,
            _a[type.BITRATE_CHANGED] = this.onBitRateChanged,
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
    ChromecastTracker.prototype.onPlayerLoadComplete = function (e) {
        this.hasPlayerLoadComplete = true;
    };
    ChromecastTracker.prototype.onClipStarted = function (e) {
        if (this.isAdPlaying) {
            return;
        }
        // When a clip starts playing ad breaks are over
        //this.hasBreakStarted = false;
        // Start the session the first time
        if (this.hasPlayerLoadComplete && !this.hasClipStarted) {
            this.startSession();
            this.trackEvent(AppEvent.ContentStart);
        }
        // Track content resume in case we are here after an ad break
        // if (this.hasBreakStarted && this.isPaused) {
        //     this.hasBreakStarted = false;
        //     this.isPaused = false;
        //     this.trackEvent(AppEvent.ContentResume);
        // }
        this.hasClipStarted = true;
    };
    ChromecastTracker.prototype.onBreakStarted = function (e) {
        if (!this.hasPlayerLoadComplete) {
            return;
        }
        this.hasBreakStarted = true;
        // pause HBs for main content
        //this.hasClipStarted && this.onPause(e);
        this.trackEvent(AppEvent.AdBreakStart);
    };
    ChromecastTracker.prototype.onBreakClipStarted = function (e) {
        if (!this.hasPlayerLoadComplete) {
            return;
        }
        // track ad break started if missed the first time
        !this.hasBreakStarted && this.onBreakStarted(e);
        this.isAdPlaying = true;
        this.trackEvent(AppEvent.AdStart);
    };
    ChromecastTracker.prototype.onBreakClipEnded = function (e) {
        this.isAdPlaying = false;
        this.isPaused = false;
        if (e.endedReason === 'SKIPPED') {
            this.trackEvent(AppEvent.AdSkip);
        }
        this.trackEvent(AppEvent.AdEnd);
    };
    ChromecastTracker.prototype.onBreakEnded = function (e) {
        this.isAdPlaying = false;
        this.hasBreakStarted = false;
        this.trackEvent(AppEvent.AdBreakEnd);
    };
    ChromecastTracker.prototype.onBuffering = function (e) {
        if (this.hasSessionStart && !this.isBuffering) {
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
            this.playhead = e.currentMediaTime;
            this.trackEvent(AppEvent.PlayheadUpdate);
        }
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
    ChromecastTracker.prototype.onRequestSeek = function (e) {
        this.isSeeking = true;
        this.trackEvent(AppEvent.SeekStart);
    };
    ChromecastTracker.prototype.onSeeked = function (e) {
        if (this.isSeeking) {
            this.trackEvent(AppEvent.SeekEnd);
            this.isSeeking = false;
        }
    };
    ChromecastTracker.prototype.onBitRateChanged = function (e) {
        this.trackEvent(AppEvent.BitrateChange, { currentBitrate: e.totalBitrate });
    };
    ChromecastTracker.prototype.onMediaFinished = function (e) {
        this.trackSessionEnd();
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
    ChromecastTracker.prototype.startSession = function () {
        // Track the session start if we haven't previously
        if (this.hasPlayerLoadComplete && !this.hasSessionStart) {
            this.hasSessionStart = true;
            this.trackSessionStart();
        }
    };
    ChromecastTracker.prototype.trackSessionStart = function () {
        this.trackEvent(AppEvent.SessionStart, {
            playerManager: this.playerManager,
            playerInitTime: (new Date()).getTime()
        });
    };
    ChromecastTracker.prototype.trackSessionEnd = function () {
        this.trackEvent(AppEvent.ContentEnd);
        this.hasSessionStart = false;
        this.hasClipStarted = false;
        this.hasBreakStarted = false;
        this.isAdPlaying = false;
        this.isBuffering = false;
        this.isPaused = false;
        this.trackEvent(AppEvent.SessionEnd);
    };
    ChromecastTracker.prototype.trackEvent = function (name, data) {
        var payload = data || {};
        // Merge data from callback
        if (typeof this.eventCallback[name] === 'function') {
            var eventData = this.eventCallback[name]();
            if (typeof eventData === 'object') {
                // Object.keys(eventData).forEach(key => {
                //     payload[key] = eventData[key];
                // });
                payload = Object.assign(payload, eventData);
                delete this.eventCallback[name];
            }
        }
        // Sync up the tracker with the latest playhead position
        payload.playhead = this.playhead;
        this.isDebug() && this.logger().log('[Track] ' + name, payload);
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
        _super.prototype.onRegister.call(this);
        this.vo = new AdobeVo(this);
        this.restClient = new RestClient(this.isDebug() ? this.vo.devApiServer : this.vo.prodApiServer);
        this.eventQueue = new Queue();
        this.timer = new Timer(this.vo.hbInterval);
    };
    AdobeAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
        switch (notification.name) {
            case AppEvent.AdBreakStart:
                this.pauseHbTracking();
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
    AdobeAgent = __decorate([
        Destroyable()
    ], AdobeAgent);
    return AdobeAgent;
}(Agent));
exports.AdobeAgent = AdobeAgent;
var AdobeVo = /** @class */ (function (_super) {
    __extends(AdobeVo, _super);
    function AdobeVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    AdobeVo.prototype.getSessionStartData = function () {
        var data = this.agent.getData();
        var eventData = this.getPayload('sessionStart');
        eventData.params = {
            'analytics.trackingServer': this.trackingServer,
            'analytics.reportSuite': this.reportSuite,
            'analytics.visitorId': data.visitorId,
            'analytics.enableSSL': this.enableSSL,
            'visitor.marketingCloudOrgId': this.marketingCloudOrgId,
            'visitor.marketingCloudUserId': this.marketingCloudUserId,
            'media.playerName': data.playerName,
            'media.contentType': data.isLive ? 'Live' : 'VOD',
            'media.length': data.duration,
            'media.id': data.mediaId,
            'media.name': data.videoTitle,
            'media.channel': this.channel,
            'media.sdkVersion': data.playerVersion,
            'media.show': data.seriesTitle,
            'media.season': data.season.toString(),
            'media.episode': data.episode.toString(),
            'media.genre': data.category,
            'media.network': this.channel,
            // Set to 0 for Full Episode, 2 for Clip
            'media.showType': data.episodeFlag ? '0' : '2',
            // Set to true if the session was closed and then resumed at a later time, e.g., 
            // the user left the video but eventually came back, and the player resumed the 
            // video from the playhead where it was stopped
            'media.resume': data.hasSessionResumed
        };
        eventData.customMetadata = data.contextData;
        return eventData;
    };
    AdobeVo.prototype.getAdBreakStartData = function () {
        var data = this.agent.getData();
        return {
            'media.ad.podFriendlyName': data.adBreakType,
            'media.ad.podIndex': data.adBreakPosition,
            'media.ad.podPosition': data.adBreakPosition,
            'media.ad.podSecond': data.playhead
        };
    };
    // https://marketing.adobe.com/resources/help/en_US/sc/appmeasurement/hbvideo/mc-api-req-params.html
    AdobeVo.prototype.getAdItemData = function () {
        var data = this.agent.getData();
        return {
            'media.ad.name': data.adTitle,
            'media.ad.id': data.videoTitle + ' - ' + data.adTitle,
            'media.ad.length': data.adDuration,
            'media.ad.creativeId': data.adId,
            'media.ad.creativeURL': data.adAssetUrl,
            'media.ad.playerName': data.playerName,
            'media.ad.podPosition': data.adPosition
        };
    };
    AdobeVo.prototype.getApiPath = function (location) {
        location = location.replace(/^\/|\/$/g, '');
        // Ex: {uri}/api/v1/sessions/{sid}/events
        return [location, 'events'].join('/');
    };
    AdobeVo.prototype.getPayload = function (eventName) {
        var data = this.agent.getData();
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
                playhead: data.playhead,
                ts: (new Date()).getTime()
            },
            params: params
        };
    };
    AdobeVo.SESSION_PATH = 'api/v1/sessions';
    __decorate([
        ModuleParam(false)
    ], AdobeVo.prototype, "enableSSL", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "channel", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "reportSuite", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "trackingServer", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "marketingCloudOrgId", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "marketingCloudUserId", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "devApiServer", void 0);
    __decorate([
        ModuleParam()
    ], AdobeVo.prototype, "prodApiServer", void 0);
    __decorate([
        ModuleParam(10000)
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
        _super.prototype.onRegister.call(this);
        this.vo = new ConvivaCastVo(this);
    };
    ConvivaCastAgent.prototype.onSdkLoaded = function () {
        _super.prototype.onSdkLoaded.call(this);
        this.Conviva = View.getVar('Conviva');
    };
    ConvivaCastAgent.prototype.onNotify = function (notification) {
        _super.prototype.onNotify.call(this, notification);
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
                this.Conviva.LivePass.setBitrate(this.convivaSessionId, this.getData().currentBitrate);
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
        if (!this.vo.getCastPlayerManager()) {
            this.isDebug() && this.logger.log('playerManger not provided');
            return;
        }
        if (this.isDebug()) {
            this.Conviva.LivePass.toggleTraces(true);
            this.Conviva.LivePass.initWithSettings(this.vo.customerKey, this.vo.getInitOptions());
        }
        else {
            this.Conviva.LivePass.init(this.vo.customerKey);
        }
        this.castPlayerManager = this.vo.getCastPlayerManager();
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
        this.Conviva.LivePass.setBitrate(this.convivaSessionId, this.getData().currentBitrate);
    };
    ConvivaCastAgent.prototype.onPlayerError = function () {
        var error = this.vo.getConvivaError();
        this.Conviva.LivePass.reportError(error.sessionId, error.message, error.type);
        if (this.getData().errorIsFatal) {
            this.Conviva.LivePass.cleanupSession(this.convivaSessionId);
            this.createConvivaSession();
        }
    };
    ConvivaCastAgent.prototype.onSessionEnd = function () {
        this.hasContentCompleted() && this.Conviva.LivePass.cleanupSession(this.convivaSessionId);
    };
    ConvivaCastAgent.NAME = 'ConvivaCast';
    ConvivaCastAgent = __decorate([
        Injectable({
            src: 'sdk/conviva-chromecast.js',
            name: 'Conviva',
            type: 'function'
        }),
        Destroyable()
    ], ConvivaCastAgent);
    return ConvivaCastAgent;
}(Agent));
exports.ConvivaCastAgent = ConvivaCastAgent;
var ConvivaCastVo = /** @class */ (function (_super) {
    __extends(ConvivaCastVo, _super);
    function ConvivaCastVo(agent) {
        var _this = _super.call(this, agent.config.params) || this;
        _this.agent = agent;
        return _this;
    }
    ConvivaCastVo.prototype.getInitOptions = function () {
        var gatewayUrl = this.agent.isDebug() ? this.testServerUrl : this.prodServerUrl;
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
        var data = this.agent.getData();
        var info = new this.agent.Conviva.ConvivaContentInfo();
        info.playerName = data.playerName;
        info.streamUrl = data.assetUrl;
        info.assetName = data.videoTitle;
        info.duration = data.duration;
        info.defaultReportingBitrateKbps = data.currentBitrate;
        info.defaultReportingResource = data.cdn;
        info.encodedFps = data.playbackFramerate;
        info.isLive = data.isLive;
        info.viewerId = data.userId;
        info.tags = {
            accessType: data.userStatus || 'anon',
            contentId: data.mediaId || 'N/A',
            contentType: data.isLive ? 'LIVE' : 'VOD',
            isEpisode: data.episodeFlag,
            Partner_ID: data.partner,
            Player_Version: data.playerVersion,
            seriesTitle: data.seriesTitle,
            episodeTitle: data.episodeTitle || data.videoTitle,
            app: data.playerName,
            appVersion: data.playerVersion,
            appRegion: data.userCountry || 'us',
            drm: data.drmEnabled,
            drmType: data.drmType || 'N/A',
            connectionType: data.userConnectionType || 'unknown',
            winDimension: View.getScreenSize()
        };
        return info;
    };
    ConvivaCastVo.prototype.getAdBreakInfo = function () {
        var data = this.agent.getData();
        return {
            podDuration: data.adBreakDuration,
            podIndex: data.adBreakPosition,
            podPosition: data.adBreakType + '-roll'
        };
    };
    ConvivaCastVo.prototype.getConvivaError = function () {
        var data = this.agent.getData();
        var errorType = this.agent.Conviva.StreamerError;
        return {
            sessionId: this.agent.convivaSessionId,
            message: [data.errorCode, data.errorMessage].join(':'),
            type: data.errorIsFatal ? errorType.SEVERITY_FATAL : errorType.SEVERITY_WARNING
        };
    };
    ConvivaCastVo.prototype.getCastPlayerManager = function () {
        return this.agent.getData().playerManager;
    };
    __decorate([
        ModuleParam()
    ], ConvivaCastVo.prototype, "customerId", void 0);
    __decorate([
        ModuleParam()
    ], ConvivaCastVo.prototype, "customerKey", void 0);
    __decorate([
        ModuleParam(5)
    ], ConvivaCastVo.prototype, "heartbeatInterval", void 0);
    __decorate([
        ModuleParam()
    ], ConvivaCastVo.prototype, "testServerUrl", void 0);
    __decorate([
        ModuleParam()
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
        _super.prototype.onRegister.call(this);
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
    OzTamAgent = __decorate([
        Injectable({
            src: 'sdk/oztam-service.js',
            name: 'OzTAMService',
            type: 'function'
        }),
        Destroyable()
    ], OzTamAgent);
    return OzTamAgent;
}(Agent));
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
            productionMode: !this.agent.isDebug(),
            verboseLogging: this.agent.isDebug(),
            useHTTPS: top.location.href.search(/^https/) > -1
        };
    };
    OzTamVo.prototype.getVendorVersion = function () {
        var data = this.agent.getData();
        var platformInfo = data.isMobile ? 'Mobile-Web' : 'Desktop-Web';
        if (BuildInfo.isChromecast()) {
            platformInfo = 'Chromecast';
        }
        return [
            this.platform,
            platformInfo,
            data.playerVersion
        ].join('_');
    };
    OzTamVo.prototype.getMediaInfo = function () {
        var data = this.agent.getData();
        return {
            mediaId: data.ozTamMediaId || data.mediaId,
            url: data.assetUrl,
            mediaDuration: data.duration,
            mediaType: data.isLive ? 'live' : 'vod',
            mediaPositionFunction: this.getPlayheadTime.bind(this),
            properties: this.getPropertyDictionary()
        };
    };
    OzTamVo.prototype.getPlayheadTime = function () {
        return Math.floor(this.agent.getData().playhead);
    };
    OzTamVo.prototype.getPropertyDictionary = function () {
        var data = this.agent.getData();
        var property = {};
        if (data.ozTamMediaId) {
            property.altMediaId = data.mediaId;
        }
        if (data.userId) {
            property.demo1 = data.userId;
        }
        return property;
    };
    OzTamVo.prototype.isOzTamOptOut = function () {
        return this.agent.getData().ozTamOptOut;
    };
    __decorate([
        ModuleParam()
    ], OzTamVo.prototype, "publisherId", void 0);
    __decorate([
        ModuleParam()
    ], OzTamVo.prototype, "platform", void 0);
    OzTamVo = __decorate([
        Destroyable()
    ], OzTamVo);
    return OzTamVo;
}(DataAccess));
exports.OzTamVo = OzTamVo;

},{}]},{},[1])(1)
});
