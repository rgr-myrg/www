/* Namespace appended to UVPJS event names to properly
remove bound callbacks. See UVPJS Events documentation. */
var internalNS = '.imademo';
var _videoAsset, _autoplay, _isLive, _usesIMA, _is360;

var app = new Ractive({
    template: '#template',
    el: '#data',
    data: {
      configured: false,

      notBlank: function(target) {
        if(target !== null && target !== '' && target !== '...') {
          return true;
        }
        else {
          return false;
        }
      },
      isPid: function(target) {
        if(target.length > 13) {
          return false;
        }
        else {
          return true;
        }
      }
    }
}), myVideoManager, myVideoPlayer;

app.on('submit', function(event) {
    this.set('_videoAsset', this.get('pid'))
    this.set('_autoplay', this.get('autoPlay'))
    this.set('_isLive', this.get('isLive'))
    this.set('_usesIMA', this.get('usesIMA'))
    this.set('_is360', this.get('is360'))

    this.toggle('configured');

    _videoAsset = this.get('pid')
    _autoplay = this.get('autoPlay')
    _isLive = this.get('isLive')
    _usesIMA = this.get('usesIMA')
    _is360 = this.get('is360')

    // start player
    loadPlayer();
    event.original.preventDefault()
})

function loadPlayer() {
  // Example custom config module to override the ad call returned from the Platform CMS.
  var adCallModule = {
    modules: [{
      category: 'model',
      name: 'AdSettings',
      enabled: true,
      params: [{
        name: 'adCallOverride',
        value: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/8264/vaw-can/PARTNER&ciu_szs=300x60,300x250,728x90&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cust_params=vid%3D{mediaReferenceId}%26partner%3DPARTNER&vid={mediaReferenceId}&cmsid=2289'
      }]
    }]
  };

  // Session options.
  var sessionOptions = {
    cms: 'platform',
    netwk: 'can',
    playsInline: true,
    enableMobileAutoplay: true,
    autoPlay: _autoplay,
    enableReplay:  true,
    usesIMA: _usesIMA,    // Default is `false`.
    partner: 'cbs',   // Required for this ad call. Replace with your business unit's `partner` name.
    uvpc: [adCallModule, 'assets/configuration.json'],
    skin: true,       // Default is `true`.
    previewImage: '//vidtech.cbsinteractive.com/skins/ui/imgs/poster.jpg'   // Optional.
  };

  // Instantiate and initialize the Video Manager.
  myVideoManager = new uvpjs.VideoManager();
  myVideoManager.initialize(sessionOptions, onVideoManagerReady, onVideoManagerError);
}

function onVideoManagerReady(systemInfo) {
  var vm = myVideoManager,
  et = uvpjs.EventType,
  ns = '.myVideoContainer';

  // Player options for Unmuted Autoplay.
  var playerOptionsUnmutedAutoplay = {
      enableUnmutedAutoplay: true,
      enableMutedAutoplay: true
  };

  // Player options for Muted Autoplay.
  var playerOptionsMutedAutoplay = {
      enableMutedAutoplay: true
  };

  /* If autoplay requested, configure autoplay */
  if(_autoplay){
    if(systemInfo.supportsMutedAutoplay == true){
      vm.createVideoPlayer('myVideoContainer', onVideoPlayerReady, playerOptionsMutedAutoplay);
    }
    else if(systemInfo.supportsUnMutedAutoplay == true){
      vm.createVideoPlayer('myVideoContainer', onVideoPlayerReady, playerOptionsUnmutedAutoplay);
    }
    else{
      vm.createVideoPlayer('myVideoContainer', onVideoPlayerReady);
    }
  }
  else {
    vm.createVideoPlayer('myVideoContainer', onVideoPlayerReady);
  }
  vm.addEventListener(et.VIDEO_PROGRESS + ns, onVideoProgress.bind(this));
  vm.addEventListener(et.VIDEO_STATE_CHANGE + ns, onVideoStateChange.bind(this));
}

function onVideoManagerError(errorMessage) {
  console.log('Video manager error.', errorMessage);
}

function onVideoPlayerReady(videoPlayer) {
  myVideoPlayer = videoPlayer;
  var rcoArray = [];

  /* RCO for livestreams
  ------------------------------------ */
  if(_isLive){
    rcoArray.push({
      isLive: true,
      isAffiliateFeed: true,
      mediaId: '1234567890',
      duration: -1,
      type: uvpjs.mediaCapabilities.RP_URL,
      previewImage: '//vidtech.cbsinteractive.com/skins/ui/imgs/poster.jpg',
      assetURL: _videoAsset
    });
    myVideoPlayer.addResourcesToPlaylist(rcoArray);
  }
  /* RCO for VOD
  ------------------------------------ */
  else {
    // VOD with IMA ads
    if(_usesIMA){
      // videoAsset is a PID
      if(_videoAsset.length < 13){
        rcoArray.push({
            type: uvpjs.mediaCapabilities.RP_IMA,
            vidContId: 'myVideoContainer',
            partner: 'cbs',
            selectorCall: 'https://link.theplatform.com/s/dJ5BDC/'
                          + _videoAsset
                          + '?format=SMIL&manifest=m3u&Tracking=true&mbr=true&callback=uvpHandleJsonpResult&callback=uvpHandleJsonpResult'
        });
        myVideoPlayer.addResourcesToPlaylist(rcoArray);
      }
      // videoAsset is URL
      else {
        var myRCO = {
          vidContId: 'myVideoContainer',
          type: uvpjs.mediaCapabilities.RP_IMA,
          assetURL: _videoAsset,
        };
        myVideoPlayer.loadAndPlayResource(myRCO);
      }
    }
    // VOD without ads
    else {
      // videoAsset is a PID
      if(_videoAsset.length < 13){
        rcoArray.push({
            type: uvpjs.mediaCapabilities.RP_PLATFORM,
            vidContId: 'myVideoContainer',
            is360: _is360,
            partner: 'cbs',
            selectorCall: 'https://link.theplatform.com/s/dJ5BDC/'
                          + _videoAsset
                          + '?format=SMIL&manifest=m3u&Tracking=true&mbr=true&callback=uvpHandleJsonpResult&callback=uvpHandleJsonpResult'
        });
        myVideoPlayer.addResourcesToPlaylist(rcoArray);
      }
      // videoAsset is URL
      else {
        var myRCO = {
          vidContId: 'myVideoContainer',
          type: uvpjs.mediaCapabilities.RP_URL,
          is360: _is360,
          assetURL: _videoAsset
        };
        myVideoPlayer.loadAndPlayResource(myRCO);
      }

    }
  }
}

function onVideoProgress (evtObj) {
  app.set('percentComplete', Math.round(((evtObj.payload.currentTime * 100)/evtObj.payload.duration) * 100) / 100);
  app.set('currentTime', Math.round(evtObj.payload.currentTime * 100) / 100);
  app.set('duration', evtObj.payload.duration);
  app.set('startBitrate', evtObj.payload.facadeState.startBitrate);
  app.set('currentBitrate', evtObj.payload.facadeState.currentBitrate);
  app.set('maxBitrate', evtObj.payload.facadeState.maxBitrate);
  app.set('minBitrate', evtObj.payload.facadeState.minBitrate);
  app.set('playbackFramerate', Math.round(evtObj.payload.facadeState.playbackFramerate * 100)/100);
  app.set('currentBandwidth', Math.round(evtObj.payload.currentBandwidth/1000000 * 100)/100);
  app.set('currentMaxBandwidth', Math.round(evtObj.payload.currentMaxBandwidth/1000000 * 100)/100);
  app.set('currentContentSegment', evtObj.payload.currentContentSegment);
  app.set('droppedFrames', evtObj.payload.facadeState.droppedFrames);
  app.set('droppedFPS', Math.round(evtObj.payload.facadeState.droppedFPS * 100)/100);
  app.set('averageDroppedFPS', Math.round(evtObj.payload.averageDroppedFPS * 100)/100);
  app.set('playbackStarted', evtObj.payload.playbackStarted);
  app.set('playbackComplete', evtObj.payload.playbackComplete);
  app.set('isAd', evtObj.payload.isAd);
  app.set('isPlayingLive', evtObj.payload.isPlayingLive);
  app.set('streamType', evtObj.payload.streamType);
  app.set('bufferLength', evtObj.payload.bufferLength);
  app.set('switchingMode', evtObj.payload.switchingMode);

  // Set next data only during content playback
  if(evtObj.payload.isAd == false){
    if(!typeof(evtObj.payload.facadeState) === "undefined"){
      app.set('videoCodec', evtObj.payload.facadeState.currentAbr.videoCodec);
      app.set('audioCodec', evtObj.payload.facadeState.currentAbr.audioCodec);
      app.set('width', evtObj.payload.facadeState.currentAbr.width);
      app.set('height', evtObj.payload.facadeState.currentAbr.height);
      app.set('loadError', evtObj.payload.facadeState.currentAbr.loadError);
      app.set('fragmentError', evtObj.payload.facadeState.currentAbr.fragmentError);
      app.set('level', evtObj.payload.facadeState.currentAbr.level);

      // set a list of available bitrates
      var list=[];
      for (i = 0; i < evtObj.payload.facadeState.abrInfo.length; i++) {
        list[i] = evtObj.payload.facadeState.abrInfo[i].bitrate;
        if(evtObj.payload.facadeState.abrInfo[i].bitrate == evtObj.payload.facadeState.currentBitrate){
          app.set('currentBitrateIndex', i);
        }
      }
      app.set('availableBitrates', list);
      app.set('highestABR', list[list.length-1]);
      app.set('lowestABR', list[0]);
      app.set('ABRLength', list.length-1);
    }
  }

  app.set('adAssetUrl', myVideoPlayer.getAdVideoData().adAssetUrl.substring(0, 50) + "...");
  app.set('adClipID', myVideoPlayer.getAdVideoData().adClipID);
  app.set('adPosition', myVideoPlayer.getAdVideoData().adPosition);
  app.set('adServerName', myVideoPlayer.getAdVideoData().adServerName);
  app.set('adVideoId', myVideoPlayer.getAdVideoData().adVideoId);
  app.set('adVideoTitle', myVideoPlayer.getAdVideoData().adVideoTitle);
  app.set('creativeId', myVideoPlayer.getAdVideoData().creativeId);
  app.set('adDeliveryType', myVideoPlayer.getAdVideoData().deliveryType);
  app.set('adDuration', myVideoPlayer.getAdVideoData().duration);
  app.set('isLinear', myVideoPlayer.getAdVideoData().isLinear);
  app.set('isRewindable', myVideoPlayer.getAdVideoData().isRewindable);
  app.set('isVPAID', myVideoPlayer.getAdVideoData().isVPAID);
  app.set('isCustomClickTrackingUsed', myVideoPlayer.getAdVideoData().isCustomClickTrackingUsed);
  app.set('cdn', myVideoPlayer.getContentVideoData().cdn);
  app.set('cms', myVideoPlayer.getContentVideoData().cms);
  app.set('cmsRefGuid', myVideoPlayer.getContentVideoData().cmsRefGuid);
  app.set('videoTitle', myVideoPlayer.getContentVideoData().videoTitle.substring(0, 40) + "...");
  app.set('mediaId', myVideoPlayer.getContentVideoData().mediaId);
  app.set('pid', _videoAsset);

  app.set('fileType', myVideoPlayer.getContentVideoData().fileType);
  app.set('assetURL', myVideoPlayer.getContentVideoData().assetURL.substring(0, 50) + "...");
  app.set('closedCaptionPath', myVideoPlayer.getContentVideoData().closedCaptionPath.substring(0, 50) + "...");
  app.set('keywords', myVideoPlayer.getContentVideoData().keywords.substring(0, 50) + "...");
  app.set('episodeAbstract', myVideoPlayer.getContentVideoData().episodeAbstract.substring(0, 50) + "...");
  app.set('isGeoRestricted', myVideoPlayer.getContentVideoData().isGeoRestricted);
  app.set('isAffiliateFeed', myVideoPlayer.getContentVideoData().isAffiliateFeed);
  app.set('showPreroll', myVideoPlayer.getContentVideoData().showPreroll);
  app.set('deliveryType', myVideoPlayer.getContentVideoData().deliveryType);

  //app.set('data', myVideoPlayer.getAdVideoData());
}

function onVideoStateChange (evtObj) {
  var state = '';

  if(evtObj.payload.newState == 1){
    state = 'PLAYING';
  }
  else if(evtObj.payload.newState == 2){
    state = 'PAUSED';
  }
  else if(evtObj.payload.newState == 3){
    state = 'BUFFERING';
  }
  else {
    state = 'STOPPED';
  }
  app.set('playbackState', state );

  if((evtObj.payload.newState == 1 ) || (evtObj.payload.newState == 2 ) || (evtObj.payload.newState == 3 )){
    app.set('isPlaying', true);
  }
  else {
    app.set('isPlaying', false);
  }
}
