/*
 * Create an instance of the ChromecastReceiver.
 *
 * The ChromecastReceiver will retrieve the CastReceiverContext and Cast Player Manager from CAF.
 * This allows the Tracking API to attach event listeners to Chromecast events.
 * The CastReceiverContext and Player Manager can be accessed through the Tracking API
 * tracking.context and tracking.playerManager respectively if needed.
 */

let tracker = new vtg.tracking.ChromecastTracker();

vtg.config.Adobe.params.marketingCloudUserId = (cloudUserId || (cloudUserId = getCloudUserId(), cloudUserId));
vtg.config.OzTam.enabled = countryCode() === 'AU';

tracker.setConfig(vtg.config);

//const playerManager = cast.framework.CastReceiverContext.getInstance().getPlayerManager();

playerManager.setMessageInterceptor(
    cast.framework.messages.MessageType.LOAD,
    request => {
        console.log('[MessageType.LOAD] Setting up Tracking', request);
        insertAdBreak(request);
        initTracking();
        return request;
    }
);

function initTracking() {

tracker.setContextData({
    deviceId:  "<deviceId>",
    brandPlatformId:  "cbscom_ott_chromecast",
    castSenderApp:  "<iOS/Android/Chrome>",
    mediaDynamicPlay:  "<true/false>",
    mediaContentType:  "vod:movies",
    mediaSvodContentType:  "paid",
    pageType:  "video",
    pageViewGuid:  "<pageViewGuid>",
    screenName:  "<screenName>",
    movieId:  "CranAlmZaumgQ7UWYgDVZvdEdZ_xUeDf",
    movieTitle:  "Ace Ventura: Pet Detective",
    userRegId:  "<userRegId>",
    userStatus:  "<userStatus>",
    userType:  "<userType>"
});

tracker.on('sessionStart', () => {
    return {
        playerName: '<the-player-name>',
        playerVersion: '<the-player-version>',
        sessionId: '<the-session-id>',
        playhead: 0,
        hasSessionResumed: false,
        userId: '<the-user-id>',
        partner: '<partner>',
        userCountry: '<the-two-digit-country-code>',
        drmEnabled: false,
        userConnectionType: 'desktop',
        videoElement: document.getElementById('castMediaElementId'),
        isMobile: false,
        streamId: 'wer876234ewre23'
    }
});

tracker.on('contentStart', () => {
    return {
        mediaUrl: '<the-asset-url>',
        mediaId: '<the-media-id>',
        ozTamMediaId: 'oz-f0f6155f6efa-6589-8dw9',
        duration: 596,
        playhead: 0,
        videoTitle: '<the-video-title>',
        seriesTitle: '<the-series-title>',
        season: 1,
        episode: 3,
        category: '<the-genre>',
        isLive: false,
        episodeFlag: false,
        ozTamOptOut: false
    }
});

tracker.on('adBreakStart', (event) => {
    console.log('[#####] adBreakStart', event);
    return {
        adBreakType: 'pre',
        adBreakPosition: 1,
        adBreakDuration: 5,
        playhead: 0
    }
});

tracker.on('adStart', (event) => {
    console.log('[#####] adStart', event);
    return {
        adId: 'pre',
        adTitle: '<the-ad-title>',
        adAssetUrl: '<the-ad-asset-url>',
        adPosition: 1,
        adDuration: 5,
        playhead: 0
    }
});

}
