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
vtg.config.OzTam.enabled = (countryCode() === 'AU');

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

    tracker.on('sessionStart', () => {
        console.log('[#####] sessionStart');
        return {
            playerName: '<the-player-name>',
            playerVersion: '<the-player-version>',
            sessionId: '<the-session-id>',
            playhead: 0,
            hasSessionResumed: false,
            userId: '<the-user-id>',
            userStatus: 'sb|10',
            partner: '<partner>',
            userCountry: 'au',
            drmEnabled: false,
            drmType: 'drmType',
            userConnectionType: 'desktop',
            videoElement: document.getElementById('castMediaElementId'),
            isMobile: false
        }
    });

    tracker.on('contentStart', () => {
        console.log('[#####] contentStart');
        return {
            mediaUrl: '<the-asset-url>',
            mediaId: '4836fb66f6e081bcf6fea7df4531f22ac7ff',
            //ozTamMediaId: 'oz-f0f6155f6efa-6589-8dw9',
            duration: 596,
            playhead: 0,
            videoTitle: 'the-video-title',
            seriesTitle: 'the-series-title',
            season: 1,
            episode: 3,
            category: 'the-genre',
            isLive: false,
            isEpisode: false,
            ozTamOptOut: false,
            streamId: 'wer876234ewre23',
            cdn: 'Fastly',
            contextData: {
                brandPlatformId:  "cbscom_ott_chromecast",
                pageType:  "video",
                showSeriesId: 61456418
            }
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
            adUrl: '<the-ad-url>',
            adPosition: 1,
            adDuration: 5,
            playhead: 0
        }
    });

}
