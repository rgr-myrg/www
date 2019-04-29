const posterUrl = "https://redirector.gvt1.com/videoplayback/id/5bad011a1282b323/itag/15/source/gfp_video_ads/requiressl/yes/acao/yes/mime/video%2Fmp4/ip/0.0.0.0/ipbits/0/expire/1527053473/sparams/ip,ipbits,expire,id,itag,source,requiressl,acao,mime/signature/1DBB0236E3CD0A208DFC7CFDC4C9F8A7E5BEB939.54E361AB2FF7B427E4795227B39560AAD6EED6D9/key/ck2/file/file.mp4";
//const adFileUrl = "//mirrors.standaloneinstaller.com/video-sample/TRA3106.mp4";
const adFileUrl = "video/TRA3106.mp4";
const playerManager = cast.framework.CastReceiverContext.getInstance().getPlayerManager();

function addBreakToMedia(request) {
    request.media.breakClips = [{
        id: 'AdClip',
        title: 'Test Ad',
        posterUrl: posterUrl,
        contentId: adFileUrl,
        contentType: 'video/mp4',
        duration: 16
    }];
    request.media.breaks = [
        {
            id: 'AdBreak1',
            breakClipIds: ['AdClip'],
            position: 0,
            isEmbedded: false
        },
        {
            id: 'AdBreak2',
            breakClipIds: ['AdClip'],
            position: 60,
            isEmbedded: false
        }
    ];
}

playerManager.setMessageInterceptor(
    cast.framework.messages.MessageType.LOAD,
    request => {
        console.log('[MessageType.LOAD] Inserting Ad Break', request);
        addBreakToMedia(request);

        // request.media.breakClips = [{
        //     id: 'AdBreak1',
        //     vastAdsRequest:{
        //         adTagUrl: 'https://castsample.com/vast?rand=' + Math.floor(Math.random()* 10000)
        //     }
        // }];

        return request;
    }
);

//https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
playerManager.addEventListener(
    cast.framework.events.EventType.ALL,
    event => {
        console.log('[EventType.ALL]', event);
    }
);
