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

		//adBridge = NULL;

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

			//adContainerId = playerContainerId + Bento.IMAVars.CONTAINER_ID;
			//adContainerId = Bento.AdSdkLoader.cloneAdBridgeSwf( containerId );
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

			// if ( !adContainerId ) {

			// 	adContainerId = Bento.AdSdkLoader.cloneAdBridgeSwf( playerContainerId );

			// }

			adContainerId = cloneAdBridgeSwf();

			hasAdBridgeLoaded = true;

			adBridge = getAdBridgeContainer();

			if ( hasIsTimeForAnAd ) {

				if ( DEBUGMODE ) {

					execAdBridgeMethod( "enableLog" );
					execAdBridgeMethod( "info" );

				}

				execAdBridgeMethod( "initImaSdk" );

				var playerContainer = getPlayerContainer();

				setDisplaySize( playerContainer.offsetWidth, playerContainer.offsetHeight, false );

				setDisplaySize({

					width  : playerContainer.offsetWidth,
					height : playerContainer.offsetHeight,
					top    : playerContainer.offsetTop,
					left   : playerContainer.offsetLeft,
					isFullScreen : false

				});

				var adTagUrl = Bento.IMAUrl.getAdUrl({

					playerConfig : playerInstance.config,
					contentInfo  : adInfo,
					width        : playerContainer.offsetWidth,
					height       : playerContainer.offsetHeight

				});

				console.log( LOGTAG + "adTagUrl", adTagUrl );

				adTagUrl = 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
				'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
				'impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&' +
				'cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&' +
				'vid=short_onecue&correlator=';

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
