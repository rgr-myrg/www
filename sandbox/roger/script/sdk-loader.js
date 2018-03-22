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
			var scriptSrc      = null,
				scriptType     = 'text/javascript',
				scriptAsync    = true,
				scriptOnLoad   = Function.prototype,
				scriptOnError  = Function.prototype,
				statusComplete = {status: 'complete'},
				statusError    = {status: 'error'};

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
				};

				script.onerror = function(error) {
					statusError.error = error;
					scriptOnError.call(this, statusError);
				};

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
	.src('//rgr-myrg.github.io/www/sandbox/build/lib/tracking/mux.js')
	.async(true)
	.onLoad((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.load();
