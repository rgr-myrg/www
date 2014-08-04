/**
 * Copyright (c) 2011-2014 DevShop http://devshop.me
 * Version: 1.0.0
 * Built: Sun Aug 03 2014 21:02:35 GMT-0400 (EDT)
 * Released under the MIT license:
 * https://github.com/rgr-myrg/DevShop-JS/raw/master/MIT-LICENSE
 */
(function(w){w.DevShop=w.DevShop||{};})(window);(function(b){b.LogManager=function(){var a=!1,c=typeof console==="object"&&typeof console.log==="function",b=function(){try{return console.debug(arguments),!0}catch(a){return!1}};return{isLoggable:function(){return a&&c},setLoggingOn:function(){return a=!0},setLoggingOff:function(){return a=!1},info:function(a,c){return b("INFO",a,c)},warn:function(a,c){return b("WARN",a,c)},error:function(a,c){return b("ERROR",a,c)}}}()})(DevShop);
(function(b){b.Log={info:function(a,c){return b.LogManager.info(a,c)},warn:function(a,c){return b.LogManager.warn(a,c)},error:function(a,c){return b.LogManager.error(a,c)},setLoggingOn:function(){return b.LogManager.setLoggingOn()},setLoggingOff:function(){return b.LogManager.setLoggingOff()},isLoggable:function(){return b.LogManager.isLoggable()}}})(DevShop);
(function(b){b.Listener=function(a,c){var b=a;return{dispatch:function(a){try{a!==void 0?b.apply(c,a):b.apply(c)}catch(f){}},remove:function(){b=function(){}},getCallback:function(){return b}}}})(DevShop);
(function(b){b.Event=function(){var a=[];return{addListener:function(c,d){try{typeof c==="function"&&a.push(new b.Listener(c,d))}catch(e){}},remove:function(b){try{for(var d=a.length,e=0;e<d;e++){var f=a[e];f.getCallback()===b&&f.remove()}}catch(g){}},dispatch:function(){try{for(var b=a.length,d=0;d<b;d++)a[d].dispatch(arguments)}catch(e){}}}}})(DevShop);(function(b){b.EventPacket=function(a,c){return{dispatch:function(){try{a.dispatch(c)}catch(d){b.ExceptionLog.error(d)}}}}})(DevShop);
(function(b){b.Queue=function(a){var c=null,d=null,e=!1,f=function(){},g=300,h=[];if(typeof a!=="object"||!a.id)b.Throw("Queue options Object is Null");else{c=a.id;if(!isNaN(a.timeToWait))g=a.timeToWait;if(typeof a.callback==="function")f=a.callback;return{add:function(){h.push(arguments)},start:function(){if(!e)try{d=setInterval(c+".run()",g)}catch(a){b.ExceptionLog.error(a)}},run:function(){if(h.length>0){e=!0;try{f.apply(this,h.shift())}catch(a){this.stop(),b.ExceptionLog.error(a)}}else this.stop()},
stop:function(){e=!1;clearInterval(d)},isRunning:function(){return e}}}}})(DevShop);(function(b){b.Extend=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]||(this[b]=a[b]));return this}})(DevShop);
