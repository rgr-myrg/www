
(function(obj) {

    obj.EmbeddedPlayer = uvpjs.Class.subClass({

        videoManager: null,
        player: null,
        containerId: 'uvpVideoContainer',
        opts: null,

        /**
         * @constructor uvpjs.EmbeddedPlayer
         * @description Controls UVPJS within an iframe; all necessary params are passed in as query params on the
         * iframe url.
         *
         * @param {String} containerId optional video container (div) id
         */
        init: function(containerId) {
            var qo = this.getQueryObject(),
                uvpc, so;

            this.checkExceptionTrapping(qo);
            this.errorLoggingEnabled = this.checkLogging(qo);

            if (qo.uvpc) {
                uvpc = this.getConfigValue(qo.uvpc);
            }

            containerId && (this.containerId = containerId);

            if (!qo.uvpc || !uvpc) {
                this.logError('Missing or invalid required param "uvpc"; unable to initialize.', null ,false);
                return;
            }

            this.opts = qo;

            this.resourceTypes = {
                IMA: 'rp_ima',
                PLATFORM: 'rp_platform',
                URL: 'rp_url'
            };

            so = this.getSessionOptions(qo);
            so.uvpc = uvpc;

            this.autoRecoverOnImaError = this.checkAutoRecovery(this.opts);

            this.sessionOptions = so;
            this.rco = this.getRco(so);

            this.createVideoManager(so);
        },


        /**
         * Instantiates a uvpjs.VideoManager
         *
         * @param {Object} sessionOptions
         */
        createVideoManager: function (sessionOptions) {
            this.videoManager = new uvpjs.VideoManager();

            this.videoManager.initialize(
                sessionOptions,
                this.onVideoManagerReady.bind(this),
                this.onVideoManagerError.bind(this)
            );
        },

        /**
         * If IMA cannot be used, will loadAndPlay a valid resource type
         */
        switchToNonImaRco: function() {
            var r = this.rco;

            r.type = r.pid || r.selectorCall ? this.resourceTypes.PLATFORM : this.resourceTypes.URL;

            this.player && this.player.loadAndPlayResource(r);
        },

        /**
         * Error handling is limited; only case of an MA-related player/video start errror is dealt with
         * @param {Object} e an error event, with errorInfo object
         */
        hError: function(e) {
            var type = e.type,
                info = e.payload.errorInfo,
                et = uvpjs.EventType,
                isStartError = type === et.PLAYER_START_ERROR || type === et.VIDEO_START_ERROR,
                isFatal = info.isFatal,
                code = info.errorCode;

            if (isStartError && code === 1001 && isFatal && this.autoRecoverOnImaError) {
                this.switchToNonImaRco();
            }

            this.logError(info.message, e, !isFatal);
        },


        /**
         * Player ready callback
         * @param {uvpjs.VideoControlInterface} videoPlayer
         */
        onVideoPlayerReady: function(videoPlayer) {
            this.player = videoPlayer;
            this.player.loadAndPlayResource(this.rco);
        },

        /**
         * VideoManager ready callback
         */
        onVideoManagerReady: function () {
            var elist = ['PLAYER_START_ERROR', 'VIDEO_START_ERROR', 'VIDEO_PLAYBACK_ERROR', 'AD_ERROR'],
                i = elist.length,
                eh = this.hError.bind(this),
                evts = uvpjs.EventType;

            while(i--) {
                this.videoManager.addEventListener(evts[elist[i]] + ".uvpembed", eh);
            }

            this.videoManager.createVideoPlayer(this.containerId, this.onVideoPlayerReady.bind(this), null);
        },

        /**
         * VideoManager creation error callback
         * @param {String} errorMessage
         */
        onVideoManagerError: function (errorMessage) {
            this.logError('Unable to create videoManager: ' + + errorMessage, null, false);
        },

        /**
         * Assembles and returns a resource config obj, inferring resource type from supplied params
         *
         * @param {Object} sessionOptions
         *
         * @return {Object}
         */
        getRco: function(sessionOptions) {
            var o = this.opts,
                t = this.resourceTypes,
                allowed = {
                    mediaId: '',
                    duration: -1
                },
                hasAsset = o.assetURL,
                hasPid = o.pid,
                hasCall = o.selectorCall,
                type = sessionOptions.usesIMA ? t.IMA : hasPid || hasCall ? t.PLATFORM : t.URL,
                out = {
                    type: type
                }, q;

            hasAsset && (out.assetURL = decodeURIComponent(o.assetURL));
            hasPid && (out.pid = o.pid);
            hasCall && (out.selectorCall = decodeURIComponent(o.selectorCall));

            for (q in allowed) {
                if (q in o) {
                    out[q] = this.getValue(o[q], allowed[q]);
                }
            }

            return out;
        },

        /**
         * Assembles and returns session options
         * @param {Object} qObj
         *
         * @return {Object}
         */
        getSessionOptions: function(qObj) {
            var so = {
                autoPlay: false,
                cms: '',
                enableMobileAutoplay: false,
                netwk: '',
                partner: '',
                usesIMA: false,
                playsInline: false,
                preloadContent: false,
                previewImage: '',
                sessionId: ''
            }, q;

            for (q in so) {
                if (q in qObj) {
                    so[q] = this.getValue(qObj[q], so[q]);
                }
            }

            return so;
        },

        /**
         * Inspects value of 'uvpc' that is passed in to the frame, and if applicable parses JSON string to object.
         *
         * @return {*}
         */
        getConfigValue: function(cval) {
            var c = decodeURIComponent(cval),
                c0 = c.charAt(0),
                obj;

            // test if first character indicates a valid JSON string; if not, assumed a url
            if (c0 !== '{' && c0 !== '[') {
                return c;
            }

            try {
                obj = JSON.parse(c);
                return obj;
            }
            catch (e) {
                this.logError('Failed JSON.parse of "uvpc"; ' + e.message, null, false);
            }

            return null;
        },

        /**
         * @return {Object}
         */
        getQueryObject: function() {
            var query = window.location.search.substring(1),
                vars = query.split('&'), pair, i, n,
                out = {};

            for (i = 0, n = vars.length; i < n; i++) {
                pair = vars[i].split('=');
                out[pair[0]] = pair[1];
            }

            return out;
        },

        /**
         * Logs errors to console (if error logging enabled)
         * @param {String} msg error message
         * @param {String} event error event object
         * @param {Boolean} warnOnly  if true,  will use console.warn rather than .error
         */
        logError: function(msg, event, warnOnly) {
            if (!this.errorLoggingEnabled) { return; }

            warnOnly && console.warn('UVPJS (embedded player) error: ' + msg);
            !warnOnly && console.error('UVPJS (embedded player) error: ' + msg);

            event && console.dir(event);
        },

        /**
         * If the option 'trapExceptions' is true, will handle window.onerror and prevent exceptions from bubbling
         * further.  If error logging is enabled, will also log the error to the console.
         * @param opts
         */
        checkExceptionTrapping: function(opts) {
            if (this.str2Bool(opts.trapExceptions)) {
                window.addEventListener("error", function (e) {
                    e.preventDefault();
                    this.logError(e.message, e, true);
                }.bind(this));
            }
        },

        /**
         * Determines if logging is enabled
         * @param {Object} opts query object
         * 
         * @return {Boolean}
         */
        checkLogging: function (opts) {
            return this.str2Bool(opts.logErrors);
        },

        /**
         * Determines if logging is enabled
         * @param {Object} opts query object
         *
         * @return {Boolean}
         */
        checkAutoRecovery: function(opts) {
            return opts.autoRecoverOnImaError !== 'false' && opts.autoRecoverOnImaError !== '0';
        },

        /**
         * Util; casts param values to proper type
         *
         * @param {*} val value of query param
         * @param {*} referenceVal sample value for type info
         * @returns {*}
         */
        getValue: function(val, referenceVal) {
            var type = typeof referenceVal,
                v = val;

            switch (type) {
                case 'string':
                    v = decodeURIComponent(val);
                    break;

                case 'number':
                    v = Number(val);
                    break;

                case 'boolean':
                    v = this.str2Bool(val);
                    break;

                default: break;
            }

            return v;
        },

        /**
         * Utility
         * @param {String} val a value
         *
         * @return {String}
         */
        str2Bool: function(val) {
            return val && (val === 'true' || val === '1');
        }

    });

}(uvpjs.register("uvpjs")));