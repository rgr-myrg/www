(function($){$.btg = typeof $.btg === 'object' ? $.btg : {};})(window);

(function($){
	$.AjaxUtils = (function(){
		var	contentType  = "application/x-www-form-urlencoded; charset=UTF-8",
			dataType     = "text",
			method       = "POST",
			async        = true,
			postData     = null,
			response     = null,
			request      = {},
			onReadyState = function(){
				try{
					if(request.readyState == 4){
						if(request.status >= 200 && request.status < 300 || request.status === 304){
							switch(dataType){
								case "text":
									response = request.responseText;
									break;
								case "json":
									response = JSON.parse(request.responseText);
									break;
								default:
									response = request.response;
									break;
							}
						}else{
							response = request.status + ' ' + request.statusText;
						}
						if(typeof request.CODAOnAjaxRequestComplete === 'function'){
							request.CODAOnAjaxRequestComplete(response);
						}
					}
				}catch(e){
					if(typeof request.CODAOnAjaxError === 'function'){
						request.CODAOnAjaxError(request, request.statusText);
					}
				}
			};

			try{
				if(window.XMLHttpRequest){
					request = new XMLHttpRequest();
				} else if(window.ActiveXObject){
					request = new ActiveXObject('Microsoft.XMLHTTP');
				}
			}catch(e){
			}
		return {
			send : function(options){
				if(typeof options === 'object'){
					if(options.hasOwnProperty('contentType') && options.contentType){
						contentType = options.contentType;
					}
					if(options.hasOwnProperty('dataType') && options.dataType){
						dataType = options.dataType;
					}
					if(options.hasOwnProperty('data') && options.data){
						postData = typeof options.data === 'object' ? JSON.stringify(options.data) : options.data;
					}
					if(options.hasOwnProperty('method') && options.method){
						method = options.method;
					}
					if(options.hasOwnProperty('async')){
						async = options.async || options.async === 'true' ? options.async : false;
					}
					if(options.hasOwnProperty('error') && typeof options.error === 'function'){
						request.CODAOnAjaxError = options.error;
					}
					if(options.hasOwnProperty('url') && options.url){
						try{
							request.open(method, options.url, async);
							request.onreadystatechange = onReadyState;
							request.setRequestHeader('Content-Type', contentType);
							request.send(postData);
						}catch(e){
							if(typeof request.CODAOnAjaxError === 'function'){
								request.CODAOnAjaxError(e);
							}
						}
					}
				}
				return this;
			},
			done : function(func){
				if(typeof func === 'function'){
					request.CODAOnAjaxRequestComplete = func;
				}

				return this;
			}
		};
	})();
})(btg);
