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
		var ScriptLoader = function() {
			var scriptElement   = null,
				scriptSrc       = null,
				scriptType      = 'text/javascript',
				scriptAsync     = true,
				scriptOnLoad    = Function.prototype,
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
				scriptSrc = src;
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

			this.onLoad = function(callback) {
				scriptOnLoad = callback;
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
					scriptOnLoad.call(this, statusComplete);
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
						scriptOnLoad.call(this, statusComplete);
						scriptElement = null;
					}
				}.bind(this);

				script.onerror = function(error) {
					totalRetryCount++;

					if (totalRetryCount <= maxNumOfRetries) {
						console.log('[retry]', totalRetryCount);
						document.querySelector('head').removeChild(script);
						setTimeout(
							function() { this.load(); }.bind(this),
							timeToWait
						);
						return;
					}

					notifyError(error);
				}.bind(this);

				try {
					document.querySelector('head').appendChild(script);
				} catch (e) {
					notifyError(e);
				}
			};

			return this;
		};

		return {
			script: ScriptLoader
		};
	})();
})(uvpjs);

uvpjs.SdkLoader.script()
	.src('http://rgr-myrg.github.io/www/sandbox/build/lib/tracking/mux.js')
	.async(true)
	.retry(3)
	.delay(2000)
	.onLoad((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.load();
