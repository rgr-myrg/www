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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/ts/Tracking.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pubsub-ts/index.js":
/*!*****************************************!*\
  !*** ./node_modules/pubsub-ts/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PubSub;
(function (PubSub) {
    var NotificationType;
    (function (NotificationType) {
        NotificationType[NotificationType["standard"] = 0] = "standard";
        NotificationType[NotificationType["priority"] = 1] = "priority";
        NotificationType[NotificationType["urgent"] = 2] = "urgent";
    })(NotificationType = PubSub.NotificationType || (PubSub.NotificationType = {}));
    var Subscriber = /** @class */ (function () {
        function Subscriber(key) {
            if (key === void 0) { key = '' + new Date().getTime(); }
            this.standardQueue = [];
            this.priorityQueue = [];
            this.interests = new Map();
            this.shouldPost = false;
            this.key = key;
        }
        Subscriber.prototype.on = function (eventName, callback) {
            this.interests.set(eventName, callback);
        };
        Subscriber.prototype.off = function (eventName) {
            this.interests.delete(eventName);
        };
        Subscriber.prototype.getKey = function () {
            return this.key;
        };
        Subscriber.prototype.start = function () {
            this.shouldPost = true;
            this.processNotifications();
        };
        Subscriber.prototype.pause = function () {
            this.shouldPost = false;
        };
        Subscriber.prototype.post = function (notification) {
            switch (notification.type) {
                case NotificationType.standard:
                    this.standardQueue.unshift(notification);
                    break;
                case NotificationType.priority:
                    this.priorityQueue.unshift(notification);
                    break;
                case NotificationType.urgent:
                    this.postCallback(notification);
                    break;
            }
            this.processNotifications();
        };
        Subscriber.prototype.processNotifications = function () {
            if (!this.shouldPost) {
                return;
            }
            this.postNotifications(this.priorityQueue);
            this.postNotifications(this.standardQueue);
        };
        Subscriber.prototype.postNotifications = function (queue) {
            var i = queue.length;
            while (i--) {
                var notification = queue[i];
                this.postCallback(notification);
            }
        };
        Subscriber.prototype.postCallback = function (notification) {
            var callback = this.interests.get(notification.name);
            if (callback) {
                callback.call(this, notification);
            }
        };
        return Subscriber;
    }());
    PubSub.Subscriber = Subscriber;
    var Publisher = /** @class */ (function () {
        function Publisher() {
            this.subscribers = new Map();
        }
        Publisher.prototype.add = function (subscriber) {
            var key = subscriber.getKey();
            if (!this.has(key)) {
                this.subscribers.set(key, subscriber);
            }
        };
        Publisher.prototype.delete = function (subscriber) {
            this.subscribers.delete(subscriber.getKey());
        };
        Publisher.prototype.has = function (key) {
            return this.subscribers.has(key);
        };
        Publisher.prototype.notify = function (eventName, data) {
            this.sendNotification(eventName, data, NotificationType.standard);
        };
        Publisher.prototype.notifyPriority = function (eventName, data) {
            this.sendNotification(eventName, data, NotificationType.priority);
        };
        Publisher.prototype.notifyUrgent = function (eventName, data) {
            this.sendNotification(eventName, data, NotificationType.urgent);
        };
        Publisher.prototype.sendNotification = function (eventName, data, type) {
            this.subscribers.forEach(function (subscriber) {
                subscriber.post({
                    name: eventName,
                    body: data,
                    type: type
                });
            });
        };
        return Publisher;
    }());
    PubSub.Publisher = Publisher;
})(PubSub = exports.PubSub || (exports.PubSub = {}));


/***/ }),

/***/ "./src/main/ts/Tracking.ts":
/*!*********************************!*\
  !*** ./src/main/ts/Tracking.ts ***!
  \*********************************/
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
var pubsub_ts_1 = __webpack_require__(/*! pubsub-ts */ "./node_modules/pubsub-ts/index.js");
var Event_1 = __webpack_require__(/*! ./tracking/event/Event */ "./src/main/ts/tracking/event/Event.ts");
var MuxAgent_1 = __webpack_require__(/*! ./tracking/agents/MuxAgent */ "./src/main/ts/tracking/agents/MuxAgent.ts");
var Tracking = /** @class */ (function (_super) {
    __extends(Tracking, _super);
    function Tracking() {
        return _super.call(this) || this;
        // if ((window as any).ADBMobileConfig && (window as any).ADBMobileConfig.enabled) {
        //     this.add(new ADBMobileAgent());
        // }
    }
    Tracking.prototype.onTrackingConfig = function (configList) {
        var _this = this;
        configList.forEach(function (config) {
            _this.registerAgent(config);
        });
    };
    Tracking.prototype.onPlayerLoaded = function (videoElement) {
        this.notify(Event_1.Event.PLAYER_LOADED, videoElement);
    };
    Tracking.prototype.onContentDataLoaded = function (data) {
        this.notify(Event_1.Event.CONTENT_DATA_LOADED, data);
    };
    Tracking.prototype.registerAgent = function (config) {
        if (!config.enabled) {
            return;
        }
        switch (config.name) {
            case MuxAgent_1.MuxAgent.KEY:
                this.add(new MuxAgent_1.MuxAgent(config));
                break;
        }
    };
    return Tracking;
}(pubsub_ts_1.PubSub.Publisher));
exports.Tracking = Tracking;
window.Tracking = Tracking;


/***/ }),

/***/ "./src/main/ts/tracking/agents/MuxAgent.ts":
/*!*************************************************!*\
  !*** ./src/main/ts/tracking/agents/MuxAgent.ts ***!
  \*************************************************/
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
var pubsub_ts_1 = __webpack_require__(/*! pubsub-ts */ "./node_modules/pubsub-ts/index.js");
var Event_1 = __webpack_require__(/*! ../event/Event */ "./src/main/ts/tracking/event/Event.ts");
var MuxAgent = /** @class */ (function (_super) {
    __extends(MuxAgent, _super);
    function MuxAgent(config) {
        var _this = _super.call(this, MuxAgent.KEY) || this;
        _this.config = config;
        _this.on(Event_1.Event.PLAYER_LOADED, _this.onPlayerLoaded);
        _this.on(Event_1.Event.CONTENT_DATA_LOADED, _this.onContentDataLoaded);
        _this.start();
        return _this;
    }
    MuxAgent.prototype.onPlayerLoaded = function (videoElement) {
        console.log('[MuxAgent]', videoElement);
        this.videoElement = videoElement;
    };
    MuxAgent.prototype.onContentDataLoaded = function (data) {
        console.log('[MuxAgent]', this.videoElement, data);
        if (window.mux) {
            window.mux.monitor(this.videoElement, {
                debug: true,
                data: data
            });
        }
        /*
        mux.monitor(videoElement, {
            'debug': true,
            'data': mux_metadata
        });
        */
    };
    MuxAgent.KEY = 'MuxQOSPluginJS';
    return MuxAgent;
}(pubsub_ts_1.PubSub.Subscriber));
exports.MuxAgent = MuxAgent;


/***/ }),

/***/ "./src/main/ts/tracking/event/Event.ts":
/*!*********************************************!*\
  !*** ./src/main/ts/tracking/event/Event.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Event;
(function (Event) {
    Event["AD_BLOCKED"] = "onAdBlocked";
    Event["AD_END"] = "onAdEnd";
    Event["AD_ERROR"] = "adError";
    Event["AD_CLICK"] = "adClick";
    Event["AD_PLUGIN_CONTENT_PAUSE_REQUEST"] = "adPluginContentPauseRequest";
    Event["AD_PLUGIN_CONTENT_RESUME_REQUEST"] = "adPluginContentResumeRequest";
    Event["AD_POD_START"] = "onAdPodStart";
    Event["AD_POD_END"] = "onAdPodEnd";
    Event["AD_LOADED"] = "onAdLoaded";
    Event["AD_REQUEST"] = "onAdRequest";
    Event["AD_RESPONSE"] = "onAdResponse";
    Event["AD_START"] = "onAdStart";
    Event["CAPTIONS_READY"] = "onCaptionsReady";
    Event["CAPTIONS_UNAVAILABLE"] = "onCaptionsUnavailable";
    Event["CONTAINER_RESIZE"] = "containerResize";
    Event["CONTENT_DATA_LOADED"] = "onContentDataLoaded";
    Event["CONTENT_END"] = "onContentEnd";
    Event["CONTENT_START"] = "onContentStart";
    Event["CONTROL_MUTE"] = "controlMute";
    Event["CONTROL_UNMUTE"] = "controlUnmute";
    Event["CONTROL_VOLUME_CHANGE"] = "controlVolumeChange";
    Event["DIAGNOSTIC_WINDOW_CLOSE_BUTTON"] = "diagnosticWindowCloseButton";
    Event["FIRST_GESTURE"] = "firstGesture";
    Event["NO_AD_CONTENT"] = "onNoAdContent";
    Event["PAUSE_AD_REQUEST"] = "pauseAdRequest";
    Event["PAUSE_AD_LOADED"] = "pauseAdLoaded";
    Event["PLAYER_INIT"] = "playerInit";
    Event["PLAYER_LOADED"] = "onPlayerLoaded";
    Event["PLAYER_START_ERROR"] = "playerStartError";
    Event["RESOURCE_END"] = "onResourceEnd";
    Event["RESOURCE_START"] = "onResourceStart";
    Event["TRACKING_CONFIG"] = "onTrackingConfig";
    Event["VIDEO_CUEPOINT"] = "videoCuepoint";
    Event["VIDEO_DONE"] = "onVideoDone";
    Event["VIDEO_LOADING"] = "onVideoLoading";
    Event["VIDEO_PLAYBACK_ERROR"] = "videoPlaybackError";
    Event["VIDEO_PROGRESS"] = "onVideoProgress";
    Event["VIDEO_START_ERROR"] = "videoStartError";
    Event["VIDEO_STATE_CHANGE"] = "onStateChange";
    Event["VIDEO_TRANSITION_START"] = "onVideoTransitionStart";
    Event["VIDEO_TRANSITION_COMPLETE"] = "onVideoTransitionComplete";
    Event["LEVEL_LOADED"] = "onLevelLoaded";
})(Event = exports.Event || (exports.Event = {}));


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
