(function(obj) {
    obj.SdkLoader = (function() {
        var History = (function() {
            var items = {};

            return {
                add: function(key, value) {
                    items[key] = value;
                },
                has: function(key) {
                    return items.hasOwnProperty(key);
                },
                getItemsArray: function() {
                    var arr = [];

                    for (var i in items) {
                        arr.push(items[i]);
                    }

                    return arr;
                }
            };
        })();

        var ScriptInjector = function() {
            var scriptElement   = null,
                scriptSrc       = null,
                scriptType      = 'text/javascript',
                scriptAsync     = true,
                scriptOnReady   = Function.prototype,
                totalRetryCount = 0,
                maxNumOfRetries = 1,
                timeToWait      = 100;

            var notifyStatus = function() {
                var status = {status: arguments[0]};

                if (arguments.length > 1) {
                    status.error = arguments[1];
                }

                status.info = {
                    src: scriptSrc,
                    type: scriptType,
                    async: scriptAsync
                };

                History.add(scriptSrc, status);
                scriptOnReady.call(this, status);
            }.bind(this);

            this.src = function(src) {
                scriptSrc = src;

                if (typeof src === 'string') {
                    scriptSrc = src.replace(/^http:|^https:/gi, '');
                }

                return this;
            };

            this.type = function(type) {
                scriptType = type;
                return this;
            };

            this.async = function(async) {
                scriptAsync = async;
                return this;
            };

            this.retry = function(num) {
                maxNumOfRetries = num;
                return this;
            };

            this.delay = function(milliSecs) {
                timeToWait = milliSecs;
                return this;
            };

            this.ready = function(callback) {
                scriptOnReady = callback;
                return this;
            };

            this.load = function() {
                if (scriptSrc === null) {
                    notifyStatus('error', 'src is missing');
                    return;
                }

                if (typeof scriptSrc !== 'string' && scriptSrc.length > 0) {
                    this.bulkLoad(scriptSrc);
                    return;
                }

                if (History.has(scriptSrc)) {
                    notifyStatus('loaded');
                    return;
                }

                var script = scriptElement || document.createElement('script');

                script.type = scriptType;
                script.src = scriptSrc;
                script.async = scriptAsync;

                script.onreadystatechange = script.onload = function() {
                    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                        scriptElement = script.onreadystatechange = script.onload = null;
                        notifyStatus('loaded');
                    }
                }.bind(this);

                script.onerror = function(e) {
                    /* Remove failed script from the DOM */
                    document.querySelector('head').removeChild(script);

                    totalRetryCount++;

                    if (totalRetryCount <= maxNumOfRetries) {
                        setTimeout(
                            function() { this.load(); }.bind(this),
                            timeToWait
                        );
                        return;
                    }

                    notifyStatus('error', e);
                }.bind(this);

                try {
                    document.querySelector('head').appendChild(script);
                } catch (e) {
                    var head = document.querySelector('head');

                    /* Attempt to remove script */
                    if (head.lastChild === script) {
                        document.querySelector('head').removeChild(script);
                    }

                    notifyStatus('error', e);
                }

                return this;
            };

            this.bulkLoad = function(list) {
                var scripts  = list,
                    results  = [],
                    onready  = scriptOnReady;

                var callback = function(result) {
                    results.push(result);

                    if (scripts.length === 0) {
                        onready.call(this, results);
                    } else {
                        loadNextScript();
                    }
                }.bind(this);

                var loadNextScript = function() {
                    obj.SdkLoader.script()
                        .src(scripts.shift())
                        .type(scriptType)
                        .async(scriptAsync)
                        .retry(maxNumOfRetries)
                        .delay(timeToWait)
                        .ready(callback)
                        .load();
                }.bind(this);

                loadNextScript();
            };

            this.getHistoryItems = function() {
                return History.getItemsArray();
            };

            return this;
        };

        return {
            script: ScriptInjector
        };
    })();
})(uvpjs);

uvpjs.SdkLoader.script()
    .src('http://rgr-myrg.github.io/www/sandbox/build/lib/tracking/mux.js')
    .async(true)
    .retry(3)
    .delay(2000)
    .ready((result) => {
        console.log(result);
    })
    .load()     ;

uvpjs.SdkLoader.script()
    .src([
        'script/uvpjs-builder.js',
        'script/uvpc-config.js',
        'script/uvpc-comscore.js',
        'http://rgr-myrg.github.io/www/sandbox/build/lib/tracking/mux.js'
    ])
    .async(true)
    .retry(5)
    .delay(2000)
    .ready((result) => {
        console.log('ready', result);
    })
    .load();
