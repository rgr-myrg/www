console.log('[MAIN] Start Up');

// const context = cast.framework.CastReceiverContext.getInstance();
// context.start();

//console.log('[MAIN] context', context);

class UvpCastApi {
    constructor() {
        console.log('[UVP] Constructor');
        this.context = cast.framework.CastReceiverContext.getInstance();
        console.log('[UVP] context', this.context);
        this.playerManager = this.context.getPlayerManager();
        this.addEventListeners();
        console.log('[UVP] context.start()');
        this.context.start();
    }

    addEventListeners() {
        this.playerManager.setMessageInterceptor(
            cast.framework.messages.MessageType.LOAD,
            request => {
                this.insertAdBreak(request.media);
                return request;
            }
        );
        //https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
        this.playerManager.addEventListener(
            cast.framework.events.EventType.ALL,
            event => {
                console.log('[cast.framework.events]', event);
            }
        );
    }

    insertAdBreak(media) {
        media.breakClips = [{
            id: 'AdClip1',
            title: 'Test Ad',
            contentId: 'https://www.rmp-streaming.com/vast/mp4s/ad-10s.mp4',
            contentType: 'video/mp4',
            posterUrl: 'https://www.radiantmediaplayer.com/images/poster-rmp-ads.jpg',
            whenSkippable: 5
        }];
        media.breaks = [{
            id: 'AdBreak1',
            breakClipIds: ['AdClip1'],
            position: 0
        }];
    }
}

let uvpCastApi = new UvpCastApi();

window['__onGCastApiAvailable'] = function(isAvailable) {
    console.log('[MAIN] isAvailable', isAvailable);
    if (isAvailable) {
        //uvpCastApi = new UvpCastApi();
    }
};
