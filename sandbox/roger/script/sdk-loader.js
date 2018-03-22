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
			var scriptUrl = null,
				scriptLoaded = null
				loadError = Function.prototype;

			this.url = function(url) {
				scriptUrl = url;
				return this;
			};

			this.onLoaded = function(callback) {
				scriptLoaded = callback;
				return this;
			};

			this.onError = function(callback) {
				loadError = callback;
				return this;
			};

			this.loadScript = function() {
				if (scriptUrl === null || typeof scriptLoaded !== "function") {
					console.warn("Url or onLoaded callback missing.");
					return;
				}

				if (History.has(scriptUrl)) {
					scriptLoaded.call(this, "loaded");
					return;
				}

				var script = document.createElement("script");

				script.type = "text/javascript";
				script.src = scriptUrl;
				script.async = true;

				script.onreadystatechange = script.onload = function() {
					if (!script.readyState || /loaded|complete/.test(script.readyState)) {
						script.onreadystatechange = script.onload = null;

						History.add(scriptUrl);
						scriptLoaded.call(this, "loaded");
					}
				};

				script.onerror = function(error) {
					loadError.call(this, "error");
				};

				document.querySelector("head").appendChild(script);
			};

			return this;
		};

		return {
			ScriptLoader: ScriptLoader
		};
	})();
})(uvpjs);

uvpjs.SdkLoader.ScriptLoader()
	.url("http://rgr-myrg.github.io/www/sandbox/build/lib/tracking/mux.js")
	.onLoaded((result) => {
		console.log(result);
	})
	.onError((result) => {
		console.log(result);
	})
	.loadScript();
