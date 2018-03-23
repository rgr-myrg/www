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
				scriptOnError   = Function.prototype,
				statusComplete  = {status: 'complete'},
				statusError     = {status: 'error'},
				totalRetryCount = 0,
				maxNumOfRetries = 1
				timeToWait      = 100;

			var getScriptElement = function() {
				return scriptElement || document.createElement('script');
			}.bind(this);

			var notifyError = function(e) {
				statusError.error = e;
				scriptOnError.call(this, statusError);
			}.bind(this);

			this.src = function(src) {
				scriptSrc = src.replace(/^http:|^https:/gi, '');
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

			this.onReady = function(callback) {
				scriptOnReady = callback;
				return this;
			};

			this.onError = function(callback) {
				scriptOnError = callback;
				return this;
			};

			this.load = function() {
				if (scriptSrc === null) {
					notifyError('src is missing');
					return;
				}

				if (History.has(scriptSrc)) {
					scriptOnReady.call(this, statusComplete);
					return;
				}

				var script = getScriptElement();

				script.type = scriptType;
				script.src = scriptSrc;
				script.async = scriptAsync;

				script.onreadystatechange = script.onload = function() {
					if (!script.readyState || /loaded|complete/.test(script.readyState)) {
						script.onreadystatechange = script.onload = null;

						History.add(scriptSrc);
						scriptOnReady.call(this, statusComplete);
						scriptElement = null;
					}
				}.bind(this);

				script.onerror = function(e) {
					totalRetryCount++;

					/* Remove failed script from the DOM */
					document.querySelector('head').removeChild(script);

					if (totalRetryCount <= maxNumOfRetries) {
						console.log('[retry]', totalRetryCount);
						setTimeout(
							function() { this.load(); }.bind(this),
							timeToWait
						);
						return;
					}

					notifyError(e);
				}.bind(this);

				try {
					document.querySelector('head').appendChild(script);
				} catch (e) {
					notifyError(e);
				}
			};

			this.bulkLoad = function(list) {
				list.forEach(function(src) {
					obj.SdkLoader.script()
						.src(src)
						.type(scriptType)
						.async(scriptAsync)
						.retry(maxNumOfRetries)
						.delay(timeToWait)
						.onReady(scriptOnReady)
						.onError(scriptOnError)
						.load();
				});
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
	.onReady((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.load();

uvpjs.SdkLoader.script()
	.async(true)
	.retry(5)
	.delay(2000)
	.onReady((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.bulkLoad([
		'script/uvpjs-builder.js',
		'script/uvpc-config.js',
		'script/uvpc-comscore.js'
	]);
