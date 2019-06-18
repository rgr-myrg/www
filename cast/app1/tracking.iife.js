!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;((e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).vtg||(e.vtg={})).tracking=t()}}(function(){return function s(a,r,d){function h(e,t){if(!r[e]){if(!a[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(p)return p(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=r[e]={exports:{}};a[e][0].call(o.exports,function(t){return h(a[e][1][t]||t)},o,o.exports,s,a,r,d)}return r[e].exports}for(var p="function"==typeof require&&require,t=0;t<d.length;t++)h(d[t]);return h}({1:[function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=this&&this.__decorate||function(t,e,i,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;0<=r;r--)(o=t[r])&&(a=(s<3?o(a):3<s?o(e,i,a):o(e,i))||a);return 3<s&&a&&Object.defineProperty(e,i,a),a};function a(i){return function(t,e){t.keys||(t.keys={}),t.keys[e]=function(t){return t.hasOwnProperty(e)&&t[e]?t[e]:"boolean"!=typeof i?i||"":i}}}Object.defineProperty(i,"__esModule",{value:!0}),i.ModuleParam=a;var r=function(){function t(t){this.data=t,this.format()}return t.prototype.format=function(){var e=this,i=this;return Object.keys(this.keys).forEach(function(t){i[t]=e.keys[t](e.data)}),i},t.prototype.valuesAsString=function(t){var e={};for(var i in t)t.hasOwnProperty(i)&&t[i]&&(e[i]=t[i].toString());return e},t}();function d(){return function(t){t.prototype.destroy=function(){var e=this;"function"==typeof this.onBeforeDestroy&&this.onBeforeDestroy(),Object.keys(this).forEach(function(t){"function"!=typeof e[t]&&(e[t]=null)})}}}function h(e){return function(t){t.prototype.injectable=e}}i.DataAccess=r,i.Destroyable=d,i.Injectable=h;var p=function(){function t(){}return t.ERROR="error",t.LOADED="loaded",t}();i.JsInjector=p;var u=function(){function t(){this.debug=!1,console&&this.setLogger(console)}return t.getDefault=function(){return this.instance||(this.instance=new this)},t.prototype.setLogger=function(t){this.hasLog(t)&&(this.logger=t)},t.prototype.hasLog=function(t){return"object"==typeof t&&"function"==typeof t.log},t}();i.Log=u;var c=function(){function t(){this.observers=[]}return t.prototype.register=function(t){"object"==typeof t&&(this.observers.unshift(t),t.onRegister())},t.prototype.deregister=function(e){this.observers=this.observers.filter(function(t){return t!==e})},t.prototype.notify=function(t){for(var e=this.observers.length;e--;){var i=this.observers[e];i.onNotify.call(i,t)}},t}();i.Observable=c;var l=function(){function t(){this.items=[],this.isRunning=!1}return t.prototype.add=function(t){this.items.unshift(t)},t.prototype.forEach=function(t){if(!this.isRunning){this.isRunning=!0;for(var e=this.items.length;e--;){var i=this.items.pop();i&&t(i)}this.isRunning=!1}},t.prototype.isEmpty=function(){return 0===this.items.length},t}();i.Queue=l;var g=function(){function t(t){this.baseUrl=t,this.baseUrl=t.replace(/^\w*:/,"").replace(/^\/\//,"").replace(/\/*$/,"")}return t.prototype.request=function(t){return this.options=t,this},t.prototype.then=function(t){switch(this.options.method){case"POST":this.post(t);break;case"GET":this.get(t)}},t.prototype.post=function(t){if(XMLHttpRequest){var e=new XMLHttpRequest,i=[this.baseUrl,this.options.path].join("/");e.open("POST","//"+i,!0),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t({xmlHttpRequest:e,statusCode:e.status,message:200<=e.status&&e.status<300||304===e.status?"ok":e.statusText})},e.onerror=function(){t({xmlHttpRequest:e,statusCode:e.status,message:"error"})},e.send(JSON.stringify(this.options.data))}else this.xhrNotFound(t)},t.prototype.get=function(i){if(XMLHttpRequest){var t=new XMLHttpRequest,e=[this.baseUrl,this.options.path].join("/"),n=function(t,e){i({xmlHttpRequest:t,statusCode:t.status,message:e})};t.open("GET","//"+e,!0),t.onload=function(){return n(t,"load")},t.onerror=function(){return n(t,"error")},t.onabort=function(){return n(t,"abort")},t.send(e+JSON.stringify(this.options.data))}else this.xhrNotFound(i)},t.prototype.xhrNotFound=function(t){t({xmlHttpRequest:null,statusCode:-1,message:"XHR not supported"})},t}();i.RestClient=g;var f,v=function(){function t(t){this.milliseconds=t,this.isRunning=!1}return t.prototype.start=function(t){setInterval&&(this.isRunning||(this.intervalId=setInterval(t,this.milliseconds),this.isRunning=!0))},t.prototype.stop=function(){clearInterval&&(clearInterval(this.intervalId),this.isRunning=!1)},t}();i.Timer=v,function(t){function n(){return"object"==typeof window}function e(){return"object"==typeof top}function i(){return e()&&-1<top.location.href.search(/^https/)}t.isWindow=n,t.isTop=e,t.isVar=function(t,e){var i=t.split(".");return 2===i.length?n()&&typeof window[i[0]]===e&&typeof window[i[0]][i[1]]===e:n()&&typeof window[t]===e},t.getVar=function(t){return n()&&window[t]},t.getScreenSize=function(){var t=window;return n()&&t.screen&&t.screen.width&&t.screen.height?t.screen.width+"x"+t.screen.height:"N/A"},t.isHttps=i,t.getProtocol=function(){return e()?i()?"https://":"http://":""}}(f=i.View||(i.View={}));var y=function(){function t(){this.vo=new m}return t.prototype.update=function(t){this.vo=this.mergeData(t),this.vo.timestamp=(new Date).getTime()},t.prototype.getData=function(){return this.vo},t.prototype.mergeData=function(t){var e=this.vo;for(var i in t)t.hasOwnProperty(i)&&t[i]&&(e[i]=t[i]);return e},t}();i.DataVoProxy=y;var m=function(){this.playerName="",this.playerVersion="",this.playerInitTime=-1,this.playerManager={},this.dashJsPlayer={},this.hlsJsPlayer={},this.videoElement={},this.isMobile=!1,this.hasSessionResumed=!1,this.sessionId="",this.adBreakType="",this.adBreakPosition=-1,this.adBreakDuration=-1,this.adTitle="",this.adId="",this.adUrl="",this.adDuration=-1,this.adPosition=-1,this.mediaUrl="",this.category="",this.mediaId="",this.episodeTitle="",this.seriesTitle="",this.videoTitle="",this.airDate="",this.duration=-1,this.episodeFlag=!1,this.isLive=!1,this.timestamp=-1,this.playhead=0,this.season=NaN,this.episode=NaN,this.liveSegmentData={},this.cdn="",this.currentBitrate=-1,this.playbackFramerate=-1,this.drmEnabled=!1,this.drmType="",this.userId="",this.userStatus="anon",this.partner="",this.userCountry="",this.userConnectionType="",this.contextData={},this.ozTamMediaId="",this.ozTamOptOut=!1,this.nielsenOptOut=!1,this.errorType=-1,this.errorMessage="",this.errorFatal=!1};i.DataVo=m;var S,k,E=function(){function t(t,e){this.config=t,this.observable=e,this.notifications=new l,this.isAdPlaying=!1,this.isSdkLoaded=!1,this.debugId="[Tracker] "+t.name}return t.prototype.onRegister=function(){this.isDebug()&&this.logger.log(this.debugId,"start up")},t.prototype.onNotify=function(t){var e=this;this.notifications.add(t),this.hasSdkLoaded()&&this.notifications.forEach(function(t){e.onNotificationReceived(t)})},t.prototype.hasSdkLoaded=function(){if("object"!=typeof this.injectable)return this.isSdkLoaded;var t=this.injectable,e=f.getVar(t.name);return e&&(this[t.name]=e,this.isSdkLoaded=!0),this.isSdkLoaded},t.prototype.onNotificationReceived=function(t){switch(this.isDebug()&&this.logger.log(this.debugId,t),(this.notification=t).name){case S.AdBreakStart:case S.AdStart:this.isAdPlaying=!0;break;case S.AdEnd:case S.AdBreakEnd:case S.ContentStart:this.isAdPlaying=!1}},t.prototype.hasContentCompleted=function(){return this.observable.hasContentCompleted()},t.prototype.getData=function(){return this.observable.getDataVo()},t.prototype.isDebug=function(){return u.getDefault().debug},Object.defineProperty(t.prototype,"logger",{get:function(){return u.getDefault().logger},enumerable:!0,configurable:!0}),t}();i.Agent=E,(k=S=i.AppEvent||(i.AppEvent={})).AppClose="appClose",k.EnterForeground="EnterForeground",k.ExitForeground="ExitForeground",k.AdBreakEnd="adBreakEnd",k.AdBreakStart="adBreakStart",k.AdClick="adClick",k.AdEnd="adEnd",k.AdError="adError",k.AdLoaded="adLoaded",k.AdPause="adPause",k.AdResume="adResume",k.AdSkip="adSkip",k.AdStart="adStart",k.BitrateChange="bitrateChange",k.BufferEnd="bufferEnd",k.BufferStart="bufferStart",k.ContentEnd="contentEnd",k.ContentPause="contentPause",k.ContentResume="contentResume",k.ContentStart="contentStart",k.DashJsLoaded="dashJsLoaded",k.HlsJsLoaded="hlsJsLoaded",k.LiveSegmentStart="LiveSegmentStart",k.LiveSegmentEnd="LiveSegmentEnd",k.PlayerError="playerError",k.PlayerLoaded="playerLoaded",k.SeekEnd="seekEnd",k.SeekStart="seekStart",k.PlayheadUpdate="playheadUpdate",k.SessionEnd="sessionEnd",k.SessionStart="sessionStart";var b=function(){function t(){}return Object.defineProperty(t,"version",{get:function(){return"tracking v0.1.5 Tue, 18 Jun 2019 16:05:00 GMT"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"modules",{get:function(){return[T,D,B]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"applicationPlatform",{get:function(){return"Chromecast"},enumerable:!0,configurable:!0}),t.isChromecast=function(){return"Chromecast"===t.applicationPlatform},t.isVizio=function(){return"Vizio"===t.applicationPlatform},t.isPs4=function(){return"Ps4"===t.applicationPlatform},t}();i.BuildInfo=b;var C=function(){function t(){}return t.prototype.registerAgents=function(n){var o=this;this.tracker=n,this.tracker.modules.forEach(function(t){var e=t;if(o.isAgentEnabled(e.NAME)){var i=o.getAgentConfig(e.NAME);o.registerAgent(new e(i,n))}})},t.prototype.isAgentEnabled=function(t){return this.tracker.config.hasOwnProperty(t)&&this.tracker.config[t].hasOwnProperty("enabled")&&this.tracker.config[t].enabled},t.prototype.getAgentConfig=function(t){var e=this.tracker.config[t];return e.name=t,e},t.prototype.registerAgent=function(t){this.tracker.register(t)},t}();i.Registrar=C;var P=function(i){function t(){var t=null!==i&&i.apply(this,arguments)||this;return t.registrar=new C,t.dataProxy=new y,t.modules=b.modules,t}return o(t,i),t.prototype.track=function(t,e){e=e||{},this.isDebug()&&this.logger().log("[Tracker] "+t,e),this.dataProxy.update(e),i.prototype.notify.call(this,{name:t,body:e})},t.prototype.setConfig=function(t){this.config=t,this.registrar.registerAgents(this)},t.prototype.setContextData=function(t){this.dataProxy.update({contextData:t})},t.prototype.setLiveSegmentData=function(t){this.dataProxy.update({liveSegmentData:t})},t.prototype.setDebug=function(t){u.getDefault().debug=t},t.prototype.setLogger=function(t){u.getDefault().setLogger(t)},t.prototype.getDataVo=function(){return this.dataProxy.getData()},t.prototype.hasContentCompleted=function(){var t=this.getDataVo();return(!t||!t.isLive||-1!==t.playhead)&&t.playhead>=.95*t.duration},t.prototype.isDebug=function(){return u.getDefault().debug},t.prototype.logger=function(){return u.getDefault().logger},t}(c),I=function(s){function t(){var t=s.call(this)||this;return t.playhead=0,t.hasPlayerLoadComplete=!1,t.hasSessionStart=!1,t.hasClipStarted=!1,t.hasBreakStarted=!1,t.isBuffering=!1,t.isAdPlaying=!1,t.isPaused=!1,t.isSeeking=!1,t.eventCallback={},t.context=cast.framework.CastReceiverContext.getInstance(),t.playerManager=t.context.getPlayerManager(),t.addEventListeners(),t}return o(t,s),t.prototype.addEventListeners=function(){var t,e=this,i=cast.framework.events.EventType,n=((t={})[i.PLAYER_LOAD_COMPLETE]=this.onPlayerLoadComplete,t[i.CLIP_STARTED]=this.onClipStarted,t[i.BREAK_STARTED]=this.onBreakStarted,t[i.BREAK_CLIP_STARTED]=this.onBreakClipStarted,t[i.BREAK_CLIP_ENDED]=this.onBreakClipEnded,t[i.BREAK_ENDED]=this.onBreakEnded,t[i.BUFFERING]=this.onBuffering,t[i.TIME_UPDATE]=this.onTimeUpdate,t[i.PLAYING]=this.onPlaying,t[i.PAUSE]=this.onPause,t[i.REQUEST_SEEK]=this.onRequestSeek,t[i.SEEKED]=this.onSeeked,t[i.BITRATE_CHANGED]=this.onBitRateChanged,t[i.MEDIA_FINISHED]=this.onMediaFinished,t[i.ERROR]=this.onPlayerError,t);Object.keys(n).forEach(function(t){e.playerManager.addEventListener(t,n[t].bind(e))})},t.prototype.on=function(t,e){this.eventCallback[t]=e},t.prototype.onPlayerLoadComplete=function(t){this.hasPlayerLoadComplete=!0,s.prototype.track.call(this,S.PlayerLoaded)},t.prototype.onClipStarted=function(t){this.isAdPlaying||(this.hasPlayerLoadComplete&&!this.hasClipStarted&&(this.startSession(t),this.trackEvent(S.ContentStart,t)),this.hasClipStarted=!0)},t.prototype.onBreakStarted=function(t){this.hasPlayerLoadComplete&&(this.hasBreakStarted=!0,this.trackEvent(S.AdBreakStart,t))},t.prototype.onBreakClipStarted=function(t){this.hasPlayerLoadComplete&&(!this.hasBreakStarted&&this.onBreakStarted(t),this.isAdPlaying=!0,this.trackEvent(S.AdStart,t))},t.prototype.onBreakClipEnded=function(t){this.isAdPlaying=!1,this.isPaused=!1,"SKIPPED"===t.endedReason&&this.trackEvent(S.AdSkip,t),this.trackEvent(S.AdEnd,t)},t.prototype.onBreakEnded=function(t){this.isAdPlaying=!1,this.hasBreakStarted=!1,this.trackEvent(S.AdBreakEnd,t)},t.prototype.onBuffering=function(t){this.hasSessionStart&&!this.isBuffering&&(this.isBuffering=!0,this.trackEvent(S.BufferStart,t))},t.prototype.onTimeUpdate=function(t){if(this.isBuffering&&(this.isBuffering=!1,this.trackEvent(S.BufferEnd,t)),!this.isPaused&&t.currentMediaTime){var e=Math.floor(t.currentMediaTime);this.playhead!==e&&(this.playhead=e,this.trackEvent(S.PlayheadUpdate,t))}},t.prototype.onPlaying=function(t){this.isPaused&&(this.isPaused=!1,this.trackEvent(this.isAdPlaying?S.AdResume:S.ContentResume,t))},t.prototype.onPause=function(t){this.isPaused||(this.isPaused=!0,this.trackEvent(this.isAdPlaying?S.AdPause:S.ContentPause,t))},t.prototype.onRequestSeek=function(t){this.isSeeking=!0,this.trackEvent(S.SeekStart,t)},t.prototype.onSeeked=function(t){this.isSeeking&&(this.trackEvent(S.SeekEnd,t),this.isSeeking=!1)},t.prototype.onBitRateChanged=function(t){this.trackEvent(S.BitrateChange,t,{currentBitrate:t.totalBitrate})},t.prototype.onMediaFinished=function(t){this.trackSessionEnd(t)},t.prototype.onPlayerError=function(t){t&&t.endedReason&&t.endedReason===cast.framework.events.EndedReason.ERROR&&this.trackEvent(S.PlayerError,t,{errorCode:t.detailedErrorCode,errorMessage:t.endedReason,isFatal:!1})},t.prototype.startSession=function(t){this.hasPlayerLoadComplete&&!this.hasSessionStart&&(this.hasSessionStart=!0,this.trackSessionStart(t))},t.prototype.trackSessionStart=function(t){this.trackEvent(S.SessionStart,t,{playerManager:this.playerManager,playerInitTime:(new Date).getTime()})},t.prototype.trackSessionEnd=function(t){this.trackEvent(S.ContentEnd,t),this.hasSessionStart=!1,this.hasClipStarted=!1,this.hasBreakStarted=!1,this.isAdPlaying=!1,this.isBuffering=!1,this.isPaused=!1,this.trackEvent(S.SessionEnd,t)},t.prototype.trackEvent=function(t,e,i){var n=i||{};if("function"==typeof this.eventCallback[t]){var o=this.eventCallback[t](e);"object"==typeof o&&(n=Object.assign(n,o),delete this.eventCallback[t])}n.playhead=this.playhead,this.isDebug()&&this.logger().log("[Track] "+t,n),s.prototype.track.call(this,t,n)},t}(i.Tracker=P);i.ChromecastTracker=I;var T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasAdobeSession=!1,t.isStopped=!1,t.isSdkLoaded=!0,t}return o(t,e),t.prototype.onRegister=function(){e.prototype.onRegister.call(this),this.vo=new A(this),this.restClient=new g(this.isDebug()?this.vo.devApiServer:this.vo.prodApiServer),this.eventQueue=new l,this.timer=new v(this.vo.hbInterval)},t.prototype.onNotificationReceived=function(t){switch(e.prototype.onNotificationReceived.call(this,t),t.name){case S.AdBreakStart:this.pauseHbTracking(),this.trackEvent("adBreakStart");break;case S.AdStart:this.trackEvent("adStart");break;case S.AdClick:case S.AdPause:this.trackEvent("pauseStart");break;case S.AdEnd:this.trackEvent("adComplete");break;case S.AdBreakEnd:this.trackEvent("adBreakComplete");break;case S.ContentStart:this.hasAdobeSession||this.requestAdobeSession(),this.trackEvent("play");break;case S.ContentPause:this.isStopped=!0,this.trackEvent("pauseStart"),this.pauseHbTracking();break;case S.BufferStart:this.isStopped=!0,this.trackEvent("bufferStart"),this.pauseHbTracking();break;case S.SeekStart:this.isStopped=!0,this.pauseHbTracking();break;case S.ContentResume:case S.PlayheadUpdate:this.isStopped&&(this.isStopped=!1,this.trackEvent("play"));break;case S.SessionEnd:this.trackSessionEnd()}},t.prototype.trackEvent=function(t){this.eventQueue.add(t),this.processEventQueue()},t.prototype.processEventQueue=function(){var e=this;this.hasAdobeSession&&this.eventQueue.forEach(function(t){e.sendTrackRequest(t)})},t.prototype.sendTrackRequest=function(t){var e=this,i={path:this.apiPath,data:this.vo.getPayload(t),method:"POST"};this.isDebug()&&this.logger.log(this.config.name,t,i),this.restClient.request(i).then(function(t){e.isDebug()&&e.logger.log(e.config.name,"statusCode",t.statusCode)}),"play"!==t||this.isAdPlaying||this.startHbTracking()},t.prototype.requestAdobeSession=function(){var i=this,t={path:A.SESSION_PATH,data:this.vo.getSessionStartData(),method:"POST"};this.isDebug()&&this.logger.log(this.config.name,t),this.restClient.request(t).then(function(t){if(404===t.statusCode)throw"Error: Server response 404";var e=t.xmlHttpRequest.getResponseHeader("location");if(!e)throw"Error: Location not found";i.hasAdobeSession=!0,i.apiPath=i.vo.getApiPath(e),i.isDebug()&&i.logger.log(i.config.name,i.apiPath),i.processEventQueue()})},t.prototype.startHbTracking=function(){var t=this;this.hasAdobeSession&&(this.isDebug()&&this.logger.log(this.config.name,"hbInterval",this.vo.hbInterval),this.timer.start(function(){t.trackEvent("ping")}))},t.prototype.pauseHbTracking=function(){this.isDebug()&&this.logger.log(this.config.name,"hb paused"),this.timer.stop()},t.prototype.trackSessionEnd=function(){this.pauseHbTracking(),this.hasContentCompleted()&&this.trackEvent("sessionComplete"),this.trackEvent("sessionEnd"),this.hasAdobeSession=!1},t.NAME="Adobe",t=s([d()],t)}(E);i.AdobeAgent=T;var A=function(i){function t(t){var e=i.call(this,t.config.params)||this;return e.agent=t,e}return o(t,i),t.prototype.getSessionStartData=function(){var t=this.agent.getData(),e=this.getPayload("sessionStart"),i=this.getVisitorData();return e.params={"analytics.trackingServer":this.trackingServer,"analytics.reportSuite":this.reportSuite,"analytics.visitorId":i.visitorId,"analytics.enableSSL":this.enableSSL,"visitor.marketingCloudOrgId":this.marketingCloudOrgId,"visitor.marketingCloudUserId":i.marketingCloudUserId,"media.playerName":t.playerName,"media.contentType":t.isLive?"Live":"VOD","media.length":t.duration,"media.id":t.mediaId,"media.name":t.videoTitle,"media.channel":this.channel,"media.sdkVersion":t.playerVersion.toString(),"media.network":this.channel,"media.showType":t.episodeFlag?"0":"2","media.resume":!!t.hasSessionResumed},t.seriesTitle&&(e.params["media.show"]=t.seriesTitle),t.category&&(e.params["media.genre"]=t.category),t.season&&(e.params["media.season"]=t.season.toString()),t.episode&&(e.params["media.episode"]=t.episode.toString()),t.contextData.mediaResume=t.hasSessionResumed?"true":"false",e.customMetadata=this.valuesAsString(t.contextData),e},t.prototype.getVisitorData=function(){var t={visitorId:"",marketingCloudUserId:this.marketingCloudUserId||""},e=f.getVar("Visitor");if(!e)return t;var i=e.getInstance(this.marketingCloudOrgId,this.visitorOptions||{});return t.visitorId=i.getAnalyticsVisitorID(),t.marketingCloudUserId=i.getMarketingCloudVisitorID(),t},t.prototype.getAdBreakStartData=function(){var t=this.agent.getData();return{"media.ad.podFriendlyName":t.adBreakType,"media.ad.podIndex":t.adBreakPosition,"media.ad.podSecond":t.playhead}},t.prototype.getAdItemData=function(){var t=this.agent.getData();return{"media.ad.name":t.adTitle,"media.ad.id":t.videoTitle+" - "+t.adTitle,"media.ad.length":t.adDuration,"media.ad.creativeId":t.adId,"media.ad.creativeURL":t.adUrl,"media.ad.playerName":t.playerName,"media.ad.podPosition":t.adPosition}},t.prototype.getApiPath=function(t){return[t=t.replace(/^\/|\/$/g,""),"events"].join("/")},t.prototype.getPayload=function(t){var e=this.agent.getData(),i={};switch(t){case"adBreakStart":i=this.getAdBreakStartData();break;case"adStart":i=this.getAdItemData()}return{eventType:t,playerTime:{playhead:e.playhead,ts:(new Date).getTime()},params:i}},t.SESSION_PATH="api/v1/sessions",s([a(!1)],t.prototype,"enableSSL",void 0),s([a()],t.prototype,"channel",void 0),s([a()],t.prototype,"reportSuite",void 0),s([a()],t.prototype,"trackingServer",void 0),s([a()],t.prototype,"marketingCloudOrgId",void 0),s([a()],t.prototype,"marketingCloudUserId",void 0),s([a()],t.prototype,"devApiServer",void 0),s([a()],t.prototype,"prodApiServer",void 0),s([a(1e4)],t.prototype,"hbInterval",void 0),s([a()],t.prototype,"visitorOptions",void 0),t=s([d()],t)}(r);i.AdobeVo=A;var D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onRegister=function(){e.prototype.onRegister.call(this),this.vo=new R(this)},t.prototype.onNotificationReceived=function(t){switch(e.prototype.onNotificationReceived.call(this,t),t.name){case S.ContentStart:this.sessionId||this.createConvivaSession();break;case S.AdBreakStart:this.onAdBreakStart();break;case S.AdStart:this.Conviva.LivePass.adStart(this.sessionId);break;case S.AdEnd:this.Conviva.LivePass.adEnd(this.sessionId);break;case S.AdBreakEnd:this.onAdBreakEnd();break;case S.BitrateChange:this.Conviva.LivePass.setBitrate(this.sessionId,this.getData().currentBitrate);break;case S.SessionEnd:this.onSessionEnd();break;case S.PlayerError:this.onPlayerError()}},t.prototype.createConvivaSession=function(){if(this.vo.getCastPlayerManager()){this.isDebug()?(this.Conviva.LivePass.toggleTraces(!0),this.Conviva.LivePass.initWithSettings(this.vo.customerKey,this.vo.getInitOptions())):(this.Conviva.LivePass.toggleTraces(!1),this.Conviva.LivePass.init(this.vo.customerKey)),this.playerManager=this.vo.getCastPlayerManager(),this.streamer=new this.Conviva.ConvivaCastV3StreamerProxy(this.playerManager);var t=this.vo.getContentInfo();this.isDebug()&&this.logger.log(this.streamer,t),this.sessionId=this.Conviva.LivePass.createSession(this.streamer,t,this.vo.getSessionOptions())}else this.isDebug()&&this.logger.log("playerManger not provided")},t.prototype.onAdBreakStart=function(){this.sessionId||this.createConvivaSession(),this.Conviva.LivePass.detachStreamer(this.sessionId),this.adBreakInfo=this.vo.getAdBreakInfo(),this.Conviva.LivePass.sendSessionEvent(this.sessionId,"Conviva.PodStart",this.adBreakInfo)},t.prototype.onAdBreakEnd=function(){this.adBreakInfo.podDuration&&delete this.adBreakInfo.podDuration,this.Conviva.LivePass.sendSessionEvent(this.sessionId,"Conviva.PodEnd",this.adBreakInfo),this.Conviva.LivePass.attachStreamer(this.sessionId,this.streamer)},t.prototype.onBitRateChange=function(){this.Conviva.LivePass.setBitrate(this.sessionId,this.getData().currentBitrate)},t.prototype.onPlayerError=function(){var t=this.vo.getConvivaError();this.Conviva.LivePass.reportError(t.sessionId,t.message,t.type),this.getData().errorFatal&&(this.Conviva.LivePass.cleanupSession(this.sessionId),this.createConvivaSession())},t.prototype.onSessionEnd=function(){this.hasContentCompleted()&&this.Conviva.LivePass.cleanupSession(this.sessionId),this.sessionId=""},t.NAME="ConvivaCast",t=s([h({src:"sdk/conviva-chromecast.js",name:"Conviva",type:"function"}),d()],t)}(E);i.ConvivaCastAgent=D;var R=function(i){function t(t){var e=i.call(this,t.config.params)||this;return e.agent=t,e}return o(t,i),t.prototype.getInitOptions=function(){var t=this.agent.isDebug()?this.testServerUrl:this.prodServerUrl;return-1===t.search(/^http/)&&(t=f.getProtocol()+t),{gatewayUrl:t}},t.prototype.getSessionOptions=function(){var t;return(t={})[this.agent.Conviva.LivePass.OPTION_EXTERNAL_BITRATE_REPORTING]=!0,t},t.prototype.getContentInfo=function(){var t=this.agent.getData(),e=new this.agent.Conviva.ConvivaContentInfo;return e.playerName=t.playerName,e.streamUrl=t.mediaUrl,e.assetName=t.videoTitle,e.duration=t.duration,e.defaultReportingBitrateKbps=t.currentBitrate,e.defaultReportingResource=t.cdn,e.encodedFps=t.playbackFramerate,e.isLive=t.isLive,e.viewerId=t.userId,e.tags={accessType:t.userStatus||"anon",contentId:t.mediaId||"N/A",contentType:t.isLive?"LIVE":"VOD",isEpisode:t.episodeFlag.toString(),Partner_ID:t.partner,Player_Version:t.playerVersion,seriesTitle:t.seriesTitle,episodeTitle:t.episodeTitle||t.videoTitle,app:t.playerName,appVersion:t.playerVersion,appRegion:t.userCountry||"us",drm:t.drmEnabled.toString(),drmType:t.drmType.toString()||"N/A",connectionType:t.userConnectionType||"unknown",winDimension:f.getScreenSize()},e},t.prototype.getAdBreakInfo=function(){var t=this.agent.getData();return this.valuesAsString({podDuration:t.adBreakDuration,podIndex:t.adBreakPosition,podPosition:t.adBreakType+"-roll"})},t.prototype.getConvivaError=function(){var t=this.agent.getData(),e=this.agent.Conviva.StreamerError;return this.valuesAsString({sessionId:this.agent.sessionId,message:[t.errorType,t.errorMessage].join(":"),type:t.errorFatal?e.SEVERITY_FATAL:e.SEVERITY_WARNING})},t.prototype.getCastPlayerManager=function(){return this.agent.getData().playerManager},s([a()],t.prototype,"customerId",void 0),s([a()],t.prototype,"customerKey",void 0),s([a(5)],t.prototype,"heartbeatInterval",void 0),s([a()],t.prototype,"testServerUrl",void 0),s([a()],t.prototype,"prodServerUrl",void 0),t=s([d()],t)}(r);i.ConvivaCastVo=R;var B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasSessionStart=!1,t.isStopped=!1,t}return o(t,e),t.prototype.onRegister=function(){e.prototype.onRegister.call(this),this.vo=new L(this)},t.prototype.onNotificationReceived=function(t){if(e.prototype.onNotificationReceived.call(this,t),this.vo.isOzTamOptOut())this.isDebug()&&this.logger.log(this.config.name,"OzTam OptOut");else switch(t.name){case S.ContentStart:this.onContentStart();break;case S.SeekStart:this.ozTamInstance&&this.ozTamInstance.seekBegin();break;case S.SeekEnd:this.ozTamInstance&&this.ozTamInstance.seekComplete(),this.isStopped=!0;break;case S.ContentPause:case S.BufferStart:this.isStopped=!0,this.ozTamInstance&&this.ozTamInstance.haltProgress();case S.ContentEnd:this.ozTamInstance&&this.ozTamInstance.complete();break;case S.ContentResume:case S.PlayheadUpdate:this.isStopped&&(this.isStopped=!1,this.ozTamInstance&&this.ozTamInstance.resumeProgress())}},t.prototype.onContentStart=function(){this.hasSessionStart||(this.startOzTamService(),this.startOzTamSession(),this.hasSessionStart=!0),this.ozTamInstance&&this.ozTamInstance.beginPlayback(this.mediaInfo.mediaId,this.mediaInfo.url,this.mediaInfo.mediaDuration,this.mediaInfo.mediaPositionFunction,this.mediaInfo.properties,this.mediaInfo.mediaType)},t.prototype.startOzTamService=function(){var t=this.vo.getConfigInfo();this.ozTamInstance=new this.OzTAMService(t.publisherId,t.vendorVersion,t.productionMode,t.verboseLogging,t.useHTTPS)},t.prototype.startOzTamSession=function(){this.mediaInfo=this.vo.getMediaInfo(),this.ozTamInstance&&this.ozTamInstance.startSession(this.mediaInfo.mediaId,this.mediaInfo.url,this.mediaInfo.mediaDuration,this.mediaInfo.mediaType)},t.NAME="OzTam",t=s([h({src:"sdk/oztam-service.js",name:"OzTAMService",type:"function"}),d()],t)}(E);i.OzTamAgent=B;var L=function(i){function t(t){var e=i.call(this,t.config.params)||this;return e.agent=t,e}return o(t,i),t.prototype.getConfigInfo=function(){return{publisherId:this.publisherId,vendorVersion:this.getVendorVersion(),productionMode:!this.agent.isDebug(),verboseLogging:this.agent.isDebug(),useHTTPS:f.isHttps()}},t.prototype.getVendorVersion=function(){var t=this.agent.getData(),e=t.isMobile?"Mobile-Web":"Desktop-Web";return b.isChromecast()&&(e="Chromecast"),[this.platform,e,t.playerVersion].join("_")},t.prototype.getMediaInfo=function(){var t=this.agent.getData();return{mediaId:t.ozTamMediaId||t.mediaId,url:t.mediaUrl,mediaDuration:t.duration,mediaType:t.isLive?"live":"vod",mediaPositionFunction:this.getPlayheadTime.bind(this),properties:this.getPropertyDictionary()}},t.prototype.getPlayheadTime=function(){var t=this.agent.getData().playhead;return-1===t&&(t=0),Math.floor(t)},t.prototype.getPropertyDictionary=function(){var t=this.agent.getData(),e={};return t.ozTamMediaId&&(e.altMediaId=t.mediaId),t.userId&&(e.demo1=t.userId),e},t.prototype.isOzTamOptOut=function(){return this.agent.getData().ozTamOptOut},s([a()],t.prototype,"publisherId",void 0),s([a()],t.prototype,"platform",void 0),t=s([d()],t)}(r);i.OzTamVo=L},{}]},{},[1])(1)});