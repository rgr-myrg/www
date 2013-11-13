(function($){$.CODA = typeof $.CODA === 'object' ? $.CODA : {};})(window);

(function($){
	$.Ajax = (function(){
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

							if(typeof request.CODAOnRequestComplete === 'function'){
								request.CODAOnRequestComplete(response);
							}
						}else{
						}
					}
				}catch(e){
				}
			};

			if(window.XMLHttpRequest){
				request = new XMLHttpRequest();
			} else if(window.ActiveXObject){
				request = new ActiveXObject('Microsoft.XMLHTTP');
			}
		return {
			send : function(options){
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
				if(options.hasOwnProperty('url') && options.url){
					request.onreadystatechange = onReadyState;
					request.open(method, options.url, async);
					request.setRequestHeader('Content-Type', contentType);
				//	request.setRequestHeader("Access-Control-Allow-Origin", "http://localhost");
					request.send(postData);

					return this;
				}
			},
			done : function(func){
				if(typeof func === 'function'){
					request.CODAOnRequestComplete = func;
				}
			}
		};
	})();
})(CODA);

// CODA.Ajax.send({
// 	url: "json.php",
//     method: 'POST',
//     data: {},
//     dataType: 'json',
//     contentType: 'application/json; charset=utf-8'
// }).done(
// 	function(data){
// 		console.log(data);
// 	}
// );

CODA.Ajax.send({
	url: "http://user.flux.com/api/v1/user/ucid/0F2EC20202C22E0F000102C22E0F/mtv",
    method: 'POST',
    data: {firstName:'Marek', favoriteNumber:12, birthDate:'1990-10-11', zipCode:'12345', bio:'this is a very short bio'},
    dataType: 'json',
    contentType: 'application/json; charset=utf-8'
}).done(
	function(data){
		console.log(data);
	}
);

