(function (obj) {

    obj.PauseAdRetriever = uvpjs.Class.subClass({

        /**
         * @constructor uvpjs.PauseAdRetriever
         * @description <span class="class-desc">Retrieve an ad (as VAST) upon receipt of a PAUSE_AD event</span>
         *
         * @param {Object}              options
         * @param {String}              options.adCallUrl
         * @param {String}              options.debugId
         * @param {uvpjs.EventsManager} options.eventsMgr
         * @param {uvpjs.CVI_Model}     options.model
         * @param {String}              options.partner
         * @param {String}              options.userStatus
         * @param {String}              options.vidContId

         */
        init: function(options) {
            this.ns = '.' + options.vidContId + '.pauseAd';
            this.debugId = options.debugId;
            this.vidContId = options.vidContId;
            this.debug = uvpjs.debug;

            this.pauseEvent = null;

            this.compSelector = 'companion[id^="ad"]';
            this.compSelector2 = 'Companion[id^="ad"]';

            this.stResrcSelector = 'StaticResource[creativeType*="image/"]';
            this.stResrcSelector2 = 'staticresource[creativeType*="image/"]';

            this.ctSelector = "CompanionClickThrough";
            this.ctSelector2 = "companionclickthrough";

            this.adCallUrl = options.adCallUrl;
            this.eventsMgr = options.eventsMgr;
            this.model = options.model;
            this.partner = options.partner;
            this.userStatus = options.userStatus;

            this.nullPayload = {imgSrc: "", clickThru: "", width: null, height:null, images: null};

            this.hPauseAdEvent = this.hPauseAdEvent.bind(this);
            this.hVASTLoad = this.hVASTLoad.bind(this);
            this.hVASTLoadError = this.hVASTLoadError.bind(this);

            this.initialize();
        },

        /**
         * Destroy instance
         * @memberof uvpjs.PauseAdRetriever
         */
        destroy: function() {
            this.eventsMgr.removeEventListener(this.pauseEvent);

            this.model = null;
            this.eventsMgr = null;
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @param {Object} payload
         */
        dispatch: function(payload) {
            this.eventsMgr.dispatchEvent(this.eventsMgr.eventTypes.PAUSE_AD_LOADED, payload, this.vidContId);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @param {XMLHttpRequest} xhr
         *
         * @private
         */
        hVASTLoad: function(xhr) {
            var doc = xhr.responseXML,
                companionAds, payload;

            if (!doc) {
                this.debug && uvpjs.warn(this.debugId, "Pause Ad call returned a null document.");
                this.dispatch(this.nullPayload);

                return;
            }

            companionAds = doc.querySelectorAll(this.compSelector) || doc.querySelectorAll(this.compSelector2);
            payload = companionAds ? this.assemblePayload(companionAds) : null;

            this.dispatch(payload);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @param {NodeList} companionAds
         *
         * @return {Object}
         */
        assemblePayload: function (companionAds) {
            var n = companionAds.length,
                out = {images:[]},
                i, c, img, ct, sz, lg;

            for (i = 0; i < n; i++) {
                c = companionAds[i];
                // id has form adWWWxHHH, where WWW is integer width, HHH is height
                sz = c.id.substr(2).split('x');
                img = c.querySelector(this.stResrcSelector) || c.querySelector(this.stResrcSelector2);
                ct = c.querySelector(this.ctSelector) || c.querySelector(this.ctSelector2);

                out.images.push({
                    imgSrc: img && img.innerText ? img.innerText.trim() : '',
                    clickThru: ct && ct.innerText ? ct.innerText.trim() : '',
                    width: +sz[0],
                    height: +sz[1]
                });
            }

            out.images.sort(function(a, b) {
                var ax = a.width * a.height,
                    bx = b.width * b.height;

                return ax > bx ? 1 : (ax < bx ? -1 : 0);
            });

            lg = out.images.length ? out.images[out.images.length - 1] : null;

            out.imgSrc = lg ? lg.imgSrc : '';
            out.clickThru = lg ? lg.clickThru : '';
            out.width = lg ? lg.width : null;
            out.height = lg ? lg.height : null;

            return out;
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         */
        hVASTLoadError: function(xhr) {
            this.debug && uvpjs.error(this.debugId, "Error loading Pause Ad xml; xhr.status = " + xhr.status);
            this.dispatch(this.nullPayload);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         *
         * @param {String} url
         */
        callForAd: function(url) {
            var cl = new uvpjs.CodeLoader();
            cl.loadXML(url, this.hVASTLoad, this.hVASTLoadError);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         *
         * @param {Object}  evt event payload
         */
        hPauseAdEvent: function(evt) {
            var acu;

            if (evt.target !== this.vidContId) {
                return;
            }

            acu = this.getAdCallUrl();
            this.callForAd(acu);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         */
        getAdCallUrl: function() {
            var vidId = this.model.contentVideoState.cmsRefGuid,
                url = this.adCallUrl
                        .replace(/PARTNER/g, this.partner)
                        .replace(/VIDID/g, vidId)
                        .replace(/TIMESTAMP/g, "" + Math.round(Math.random() * Date.now())),
                uspl = url.split("?"),
                base = uspl[0],
                qObj = uvpjs.util.objFromQueryStr(uspl[1]),
                query = "?",
                cparams = "",
                cpObj, sb, q;

            cpObj = qObj.cust_params ? this.custParamsToObj(qObj.cust_params) : this.createCustParamsObj(vidId);
            delete cpObj.sb;
            delete qObj.cust_params;

            // re-assemble std query params (i.e, cust_params omitted)
            for (q in qObj) {
                query += q + "=" + qObj[q] + "&";
            }

            // assemble custom params
            for (q in cpObj) {
                cparams += q + "=" + cpObj[q] + "&";
            }
            // translates sessionOptions.userStatus to desired query string format
            sb = this.getUserStatusValue();
            cparams += sb;

            query += "cust_params=" + encodeURIComponent(cparams);

            return  base + query;
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         *
         * @param {String} vidId  video id
         *
         * @return {Object}
         */
        createCustParamsObj: function(vidId) {
            return {
                type: "pause",
                vid: vidId,
                partner: this.partner
            }
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         *
         * @param {String} cpVal custom params value (uriEncoded)
         *
         * @return {Object}
         */
        custParamsToObj: function(cpVal) {
            var dec = decodeURIComponent(cpVal);

            return uvpjs.util.objFromQueryStr(dec);
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         *
         * @return {String}
         */
        getUserStatusValue: function() {
            return uvpjs.util.getUserStatusForQuery(this.model.getSessionOption("userStatus"));
        },

        /**
         * @memberof uvpjs.PauseAdRetriever
         * @private
         */
        initialize: function() {
            var etypes = this.eventsMgr.eventTypes;

            // must assume url fully-qualified or is already protocol-relative
            // if it's already https: or using //, do nothing, only change if http:
            if (this.adCallUrl.indexOf("http:") === 0) {
                this.adCallUrl = location.protocol + this.adCallUrl.substr(5);
            }

            this.pauseEvent = etypes.PAUSE_AD_REQUEST + this.ns;

            this.eventsMgr.addEventListener(this.pauseEvent, this.hPauseAdEvent);
        }

    });


}(uvpjs.register('uvpjs')));