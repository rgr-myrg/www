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
			var scriptSrc       = null,
				scriptType      = 'text/javascript',
				scriptAsync     = true,
				scriptOnLoad    = Function.prototype,
				scriptOnError   = Function.prototype,
				statusComplete  = {status: 'complete'},
				statusError     = {status: 'error'},
				maxNumOfRetries = 5,
				totalRetryCount = 0,
				numOfRetries    = 0
				timeToWait      = 100;

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
				numOfRetries = num;
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
					statusError.error = 'src is missing';
					scriptOnError.call(this, statusError);
					return;
				}

				if (History.has(scriptSrc)) {
					scriptOnLoad.call(this, statusComplete);
					return;
				}

				var script = document.createElement('script');

				script.type = scriptType;
				script.src = scriptSrc;
				script.async = scriptAsync;

				script.onreadystatechange = script.onload = function() {
					if (!script.readyState || /loaded|complete/.test(script.readyState)) {
						script.onreadystatechange = script.onload = null;

						History.add(scriptSrc);
						scriptOnLoad.call(this, statusComplete);
					}
				}.bind(this);

				script.onerror = function(error) {
					totalRetryCount++;

					if (totalRetryCount <= numOfRetries) {
						console.log('[retry]', totalRetryCount);
						this.load();
						return;
					}

					statusError.error = error;
					scriptOnError.call(this, statusError);
				}.bind(this);

				document.querySelector('head').appendChild(script);
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
	.onLoad((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.load();
