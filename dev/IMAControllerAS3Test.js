Bento.IMAControllerAS3Test = function() {

	var	LOGTAG = TAG + "IMAControllerAS3Test ",

		imaVars = Bento.IMAVars,
		metadata,
		playerContainerId,
		adContainerId,
		playerInstance,
		adBridge,
		adInfo = {},
		adCount = 1,
		hasAdBridgeLoaded = FALSE,
		hasAdBreakReady = FALSE,
		hasIsTimeForAnAd = FALSE;

	var execAdBridgeMethod = function ( name, data ) {

		adBridge = getAdBridgeContainer();

		if ( IS_FUNCTION( adBridge[ name ] ) ) {

			console.log( LOGTAG + "Invoking adBridge." + name );

			if ( data ) {

				adBridge[ name ]( data );

			} else {

				adBridge[ name ]();

			}

			// Doesn't seem to work on Chrome. Test.
			// (function() {

			// 	adBridge[ name ].apply( adBridge, arguments );

			// })( data );

		}

		//adBridge = NULL;

	},

	getAdBridgeContainer = function() {

		return adBridge && adBridge.nodeName.toLowerCase() === OBJECT ? adBridge : document.getElementById( adContainerId );

	},

	getPlayerContainer = function() {

		return document.getElementById( playerContainerId );

	},

	cloneAdBridgeSwf = function() {

		if ( !adContainerId && playerContainerId ) {

			adContainerId = Bento.AdSdkLoader.cloneAdBridgeSwf( playerContainerId );

		}

		console.log( "cloneAdBridgeSwf adContainerId: " + adContainerId );

		return adContainerId ? adContainerId : FALSE;

	},

	setDisplaySize = function( options ) {

		adBridge = getAdBridgeContainer();

		adBridge.style.position = CSS_ABSOLUTE;

		adBridge.width = options.width;
		adBridge.height = options.height;
		adBridge.style.top = options.top;
		adBridge.style.left = options.left;

		execAdBridgeMethod( "setDisplaySize", options );

	},

	onImaSdkFinished = function() {

		console.log( LOGTAG + "Google IMA Sdk Finished. Invoking onAdPodPlayEnd." );

		hasAdBreakReady = FALSE;

		// Signal to the player to resume playing content

		Bento.onAdPodPlayEnd( {} );

		adBridge = NULL;

		return TRUE;

	},

	playAdBreak = function() {

		console.log( LOGTAG + "playAdBreak requesting ad play" );

		execAdBridgeMethod( "playAdBreak" );

	};

	return {

		onPlayerContainerReady: function( containerId ) {

			console.log( LOGTAG + "onPlayerContainerReady", containerId );

			playerContainerId = containerId;

			adContainerId = cloneAdBridgeSwf();

			return adContainerId;

		},

		onPlayerReady: function( player ) {

			console.log( LOGTAG + "onPlayerReady" );

			playerInstance = player;

			return TRUE;

		},

		onAdBridgeLoaded: function() {

			console.log( LOGTAG + "onAdBridgeLoaded hasIsTimeForAnAd", hasIsTimeForAnAd );

			adContainerId = cloneAdBridgeSwf();

			hasAdBridgeLoaded = TRUE;

			adBridge = getAdBridgeContainer();

			if ( hasIsTimeForAnAd ) {

				if ( DEBUGMODE ) {

					execAdBridgeMethod( "enableLog" );
					execAdBridgeMethod( "info" );

				}

				execAdBridgeMethod( "initImaSdk" );

				var playerContainer = getPlayerContainer();

				//setDisplaySize( playerContainer.offsetWidth, playerContainer.offsetHeight, false );

				setDisplaySize({

					width  : playerContainer.offsetWidth,
					height : playerContainer.offsetHeight,
					top    : playerContainer.offsetTop,
					left   : playerContainer.offsetLeft,
					isFullScreen : FALSE

				});

				var adTagUrl = Bento.IMAUrl.getAdUrl({

					playerConfig : playerInstance.config,
					contentInfo  : adInfo,
					width        : playerContainer.offsetWidth,
					height       : playerContainer.offsetHeight

				});

				console.log( LOGTAG + "adTagUrl", adTagUrl );

				// Test only
				// adTagUrl = 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
				// 'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
				// 'impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&' +
				// 'cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&' +
				// 'vid=short_onecue&correlator=';

				//adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?env=vp&gdfp_req=1&unviewed_position_start=1&output=xml_vmap1&h1=en&ad_rule=1&url=http%3A%2F%2Fstage.centrictv.com%2Fvideos%2Fbeing%2F2014%2Ffull-episodes%2Fbeing-deitrick-haddon-episode-101.html&correlator=3243084017041408&cust_params=n%3Dbeing-deitrick-haddon-episode-101%26sub%3Dbeing%26prod%3D%26sz%3D250x250%26vad%3Dn%26embedshow%3D%26lt%26embedn%3D%26lt%26tile%3D4%26ct%3Dvideopage%26loc%3D4%26anum%3D1%26domainname%3Dstage.centrictv.com%26ord%3D1446136750223%26prog%3Dfullepisode&description_url=http%3A%2F%2Fstage.centrictv.com%2Fvideos%2Fbeing%2F2014%2Ffull-episodes%2Fbeing-deitrick-haddon-episode-101.html&cmsid=1163&iu=%2F271659723%2Fcentrictv.com%2FVideo&vid=538a9712-ae46-3148-85af-ca2999db93d3&sz=250x250%7C355x200&sdkv=h.3.111.0&sdki=1&scor=2742788321968128&adk=4037042209&osd=2&frm=0&ged=ta1_ve3_pt4.3.4_td4_tt1_pd1_bs10_tv1_is0_er120.10.320.365_sv2_sp1_vi0.0.559.375_vp100_ct1_vb1_vl1_vr1_eb24171";

				execAdBridgeMethod( "setImaUrl", adTagUrl );

				//playerContainer = NULL;

			}

		},

		onIsTimeForAnAd : function ( data ) {

			console.log( LOGTAG + "onIsTimeForAnAd", data );

			for ( var i in data ) {

				if ( data.hasOwnProperty( i ) ) {

					adInfo[ i ] = data [ i ];

				}

			}

			hasIsTimeForAnAd = TRUE;

			var adTypes = Bento.FreewheelVars;

			if ( data.inferredAdType === adTypes.PREROLL ) {

				console.log( LOGTAG + "onIsTimeForAnAd preroll already playing" );

			} else if ( data.inferredAdType === adTypes.MIDROLL && hasAdBreakReady ) {

				console.log( LOGTAG + "onIsTimeForAnAd requesting ad play for mid roll" );

				playAdBreak();

			} else {

				console.log( LOGTAG + "onIsTimeForAnAd post roll not supported yet" );

				onImaSdkFinished();

			}

			// if ( !data.inferredAdType ) {

			// 	onImaSdkFinished();

			// } else if ( data.inferredAdType === adTypes.MIDROLL && hasAdBreakReady ) {

			// 	console.log( LOGTAG + "onIsTimeForAnAd requesting ad play for mid roll" );

			// 	playAdBreak();

			// } else {

			// 	console.log( LOGTAG + "onIsTimeForAnAd post roll not supported yet" );

			// 	onImaSdkFinished();

			// }

		},

		onUiStateChange: function( uiData ) {

			console.log( LOGTAG + "onUiStateChange", uiData );

		},

		onFullScreenChange: function( uiData ) {

			console.log( LOGTAG + "onFullScreenChange", uiData );

			return setDisplaySize( uiData );

		},

		onAdGUIPaused: function() {

			console.log( LOGTAG + "onAdGUIPaused" );

			execAdBridgeMethod( "pause" );

		},

		onAdGUIResumed: function() {

			console.log( LOGTAG + "onAdGUIResumed" );

			execAdBridgeMethod( "resume" );

		},

		setSegmentDurations: function( durations ) {

		},

		onAdError : function( errorObject ) {

			console.log( LOGTAG + "onAdError", errorObject );

			onImaSdkFinished();

		},

		onAdManagerDestroyed: function() {

			console.log( LOGTAG + "onAdManagerDestroyed" );

			//onImaSdkFinished();

		},

		onAdsManagerTimeout: function() {
		
			console.log( LOGTAG + "onAdsManagerTimeout" );

			onImaSdkFinished();

		},

		onAdBreakNotAvailable: function() {
		
			console.log( LOGTAG + "onAdBreakNotAvailable" );

			hasAdBreakReady = FALSE;

			onImaSdkFinished();

		},

		onAdRequestTimeout: function() {
		
			console.log( LOGTAG + "onAdRequestTimeout" );

			onImaSdkFinished();

		},

		onAdLoaded: function ( adData ) {

			console.log( LOGTAG + "onAdLoaded adData", adData );

			adInfo.adCount = adCount;

			adInfo.currentAd = adData;

			Bento.onAdMetadata( Bento.AdMetadataVO.fromIMADataAndContentInfo( adData, adInfo ) );

		},

		onAdBreakReady: function() {

			console.log( LOGTAG + "onAdBreakReady" );

			hasAdBreakReady = TRUE;

		},

		onAdPlayStart: function() {

			console.log( LOGTAG + "onAdPlayStart adCount", adCount );

			// Keep track of ads played. Increment the count

			adCount++;

			// Ad is already playing. Reset hasAdBreakReady

			hasAdBreakReady = FALSE;

		},

		onCurrentMetadata: function ( data ) {
		
			console.log( LOGTAG + "onCurrentMetadata", data );
			
			metadata = data;	

			return metadata;
			
		},

		onMetadata: function ( data ) {

			console.log( LOGTAG + "onMetadata", data );
		
			metadata = data;	

			return metadata;
			
		},

		onPlayheadUpdate: function( data ) {

			execAdBridgeMethod( "onContentPlayheadUpdate", metadata.isFullEpisode ? data.fullEpPlayhead : data.playhead );

		},

		setVideoId: function ( id ) {

			console.log( LOGTAG + "setVideoId " + id );

			adInfo.videoId = id;

			return adInfo;

		},

		setVpaidVersion: function ( version ) {

			console.log( LOGTAG + "setVpaidVersion " + version );

			execAdBridgeMethod( "setVpaidVersion", version );

			return TRUE;

		}

	};

};
