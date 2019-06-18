/*
 * Create an instance of the ChromecastReceiver.
 *
 * The ChromecastReceiver will retrieve the CastReceiverContext and Cast Player Manager from CAF.
 * This allows the Tracking API to attach event listeners to Chromecast events.
 * The CastReceiverContext and Player Manager can be accessed through the Tracking API
 * tracking.context and tracking.playerManager respectively if needed.
 */

 let tracker = new vtg.tracking.ChromecastTracker();
 tracker.setDebug(true);

 tracker.setConfig({
    Mux: {
        enabled: false,
        params: {
            experimentName: 'AllAccess Chromecast Player',
            propertyKey: 'ec83cce4c209447a2af3d62f2',
            subPropertyId: 'AU-AllAccess'
        }
    },
    Adobe: {
        enabled: true,
        params: {
            prodApiServer: 'cbs-stage.hb-api.omtrdc.net',
            devApiServer: 'cbs-dev.hb-api.omtrdc.net',
            trackingServer: 'saa.cbsi.com',
            reportSuite: 'cnetcbscomsite',
            marketingCloudOrgId: '10D31225525FF5790A490D4D@AdobeOrg',
            marketingCloudUserId: '<d_mid-value-from-json>',
            channel: 'CBS Entertainment',
            enableSSL: true
        }
    },
    OzTam: {
        enabled: true,
        category: 'tracking',
        params: {
            publisherId: '779e3a9f-0ad4-4288-ae57-b4fba8259c1f',
            platform: 'TenAllAccess'
        }
    },
    ConvivaCast: {
        enabled: true,
        category: 'tracking',
        params: {
            //customerId: 'c3.CBS',
            customerId: 'c3.CBSCom-Test',
            customerKey: 'ce4836fb66f6e081bcf6fea7df4531f22ac7ffbb',
            testServerUrl: 'cbscom-test.testonly.conviva.com',
            prodServerUrl: 'cbscom-test.testonly.conviva.com'
        }
    }
});

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
        isMobile: false
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
