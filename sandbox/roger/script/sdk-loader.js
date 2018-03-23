(function(obj) {
	obj.SdkLoader = (function() {
		var History = (function() {
			var items = {};
			return {
				add: function(entry) {
					items[entry] = true;
				},
				has: function(entry) {
					return items.hasOwnProperty(entry);
				}
			};
		})();
		var ScriptInjector = function() {
			var scriptElement   = null,
				scriptSrc       = null,
				scriptType      = 'text/javascript',
				scriptAsync     = true,
				scriptOnReady   = Function.prototype,
				statusComplete  = {status: 'complete'},
				statusError     = {status: 'error'},
				totalRetryCount = 0,
				maxNumOfRetries = 1,
				timeToWait      = 100;

			var getScriptElement = function() {
				return scriptElement || document.createElement('script');
			}.bind(this);

			var getScriptInfo = function() {
				return {
					src: scriptSrc,
					type: scriptType,
					async: scriptAsync
				};
			}.bind(this);

			var notifyStatus = function() {
				var status = arguments[0];

				if (arguments.length > 1) {
					status.error = arguments[1];
				}

				status.info = getScriptInfo();
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
					notifyStatus(statusError, 'src is missing');
					return;
				}

				if (typeof scriptSrc !== 'string' && scriptSrc.length > 0) {
					this.bulkLoad(scriptSrc);
					return;
				}

				if (History.has(scriptSrc)) {
					notifyStatus(statusComplete);
					return;
				}

				var script = getScriptElement();

				script.type = scriptType;
				script.src = scriptSrc;
				script.async = scriptAsync;

				script.onreadystatechange = script.onload = function() {
					if (!script.readyState || /loaded|complete/.test(script.readyState)) {
						scriptElement = script.onreadystatechange = script.onload = null;
						History.add(scriptSrc);
						notifyStatus(statusComplete);
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

					notifyStatus(statusError, e);
				}.bind(this);

				try {
					document.querySelector('head').appendChild(script);
				} catch (e) {
					var head = document.querySelector('head');

					/* Attempt to remove script */
					if (head.lastChild === script) {
						document.querySelector('head').removeChild(script);
					}

					notifyStatus(statusError, e);
				}
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
						loadNext();
					}
				}.bind(this);

				var loadNext = function() {
					obj.SdkLoader.script()
						.src(scripts.shift())
						.type(scriptType)
						.async(scriptAsync)
						.retry(maxNumOfRetries)
						.delay(timeToWait)
						.ready(callback)
						.load();
				}.bind(this);

				loadNext();
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
	.load();

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
		window.console.log('ready', result);
	})
	.load();
