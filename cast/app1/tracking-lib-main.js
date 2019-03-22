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
        enabled: true,
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
            trackingServer: '<your-aa-tracking-server>',
            reportSuite: '<your-aa-rsid>',
            marketingCloudOrgId: '<your-aa-marketingCloudOrgId>',
            channel: 'AU-AllAccess',
            enableSSL: true
        }
    }
});

tracker.setContextData({
    brandPlatformId: '<your-brand-platform-id>',
    userId: '<your-user-id>',
    visitorId: '<your-visitor-id>'
});

tracker.onCastEvent(event => {
    switch (event.type) {
        case cast.events.EventType.LOAD_START:
            tracker.track('sessionStart', {
                playerInitTime: (new Date()).getTime(),
                playerName: '<your-player-name>',
                playerVersion: '<your-player-version>',
                sessionId: '<your-session-id>',
                videoElement: document.getElementById('castMediaElementId')
            });
            break;

        case cast.events.EventType.CLIP_STARTED:
            tracker.track('contentStart', {
                assetURL: 'cbs.com/shows',
                duration: 5000,
                mediaId: 'aaEb-cF09-0g17-r63t',
                videoTitle: 'CBS Sports - Superbowl',
                seriesTitle: 'Superbowl',
                isLive: false,
                episodeFlag: false
            });
            break;
    }
});

// tracker.onCastEvent(event => {
//     console.log('[#####]', event);
// });
