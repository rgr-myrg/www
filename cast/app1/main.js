console.log('[MAIN] Start Up');

// const context = cast.framework.CastReceiverContext.getInstance();
// context.start();

//console.log('[MAIN] context', context);

// player div id = castMediaElement

let mux_metadata = {
		property_key: "e943cd86834c363d0d06a3826",
		page_type: '', // (see docs) 'watchpage', 'iframe', or leave empty
		viewer_user_id: "", // ex: '12345'
		experiment_name: 'vtg:chromecast:test1', // ex: 'player_test_A'
		sub_property_id: '', // ex: 'cus-1'
		// Player Metadata
		player_name: 'Chromecast Player',
		player_version: '1.0.0',
		player_init_time: 1451606400000,

		// Video Metadata (cleared with 'videochange' event)
		video_id: '123123', // ex: 'abcd123'
		video_title: 'video_title', // ex: 'My Great Video'
		video_series: '', // ex: 'Weekly Great Videos'
		video_producer: '', // ex: 'Bob the Producer'
		video_content_type: '', // 'short', 'movie', 'episode', 'clip', 'trailer', or 'event'
		video_language_code: '', // ex: 'en'
		video_variant_name: '', // ex: 'Spanish Hard Subs'
		video_variant_id: '', // ex: 'abcd1234'
		video_duration: 120000, // in milliseconds, ex: 120000
		video_stream_type: '', // 'live' or 'on-demand'
		video_encoding_variant: '', // ex: 'Variant 1'
		video_cdn: 'Akamai' // ex: 'Fastly', 'Akamai'
	};

/*
const context = cast.framework.CastReceiverContext.getInstance();
const player = context.getPlayerManager();

const playerData = {};
const playerDataBinder = new cast.framework.ui.PlayerDataBinder(playerData);
*/

class UvpCastApi {
    constructor() {
        this.context = cast.framework.CastReceiverContext.getInstance();
        this.playerManager = this.context.getPlayerManager();
        this.addEventListeners();
		this.playerDataBinder = new cast.framework.ui.PlayerDataBinder({});
        this.context.start();
        this.isAdBreak = false;
    }

    addEventListeners() {
        this.context.addCustomMessageListener('urn:x-cast:com.cbsi.cast.message', customEvent => {
            console.log('[urn:x-cast:com.cbsi.cast.message]', customEvent);
          // handle customEvent.
        });

        this.playerManager.setMessageInterceptor(
            cast.framework.messages.MessageType.LOAD,
            request => {
                console.log('[MessageType.LOAD]', request);
                // this.startUpMux();
                this.insertAdBreak(request.media);

                return request;
            }
        );
        //https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
        // this.playerManager.addEventListener(
        //     cast.framework.events.EventType.ALL,
        //     event => {
        //         console.log('[EventType.ALL]', event);
        //     }
        // );

		this.playerManager.addEventListener(
			cast.framework.events.EventType.PLAYER_LOAD_COMPLETE,
			event => {
				console.log('[PLAYER_LOAD_COMPLETE]', event);
			}
		);

        this.playerManager.addEventListener(
            cast.framework.events.EventType.LOADED_METADATA,
            event => {
                console.log('[LOADED_METADATA]', event);
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.BREAK_STARTED,
            event => {
                console.log('[BREAK_STARTED]', event);
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.BREAK_CLIP_STARTED,
            event => {
                console.log('[BREAK_CLIP_STARTED]', event);
                this.isAdBreak = true;
                this.startUpMux();
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.BREAK_CLIP_ENDED,
            event => {
                console.log('[BREAK_CLIP_ENDED]', event);
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.BREAK_ENDED,
            event => {
                console.log('[BREAK_ENDED]', event);
                this.isAdBreak = false;
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.PROGRESS,
            event => {
                console.log('[PROGRESS]', event.currentMediaTime);
                if (this.isAdBreak) {
                    console.log('[AD TRACKING]');
                } else {
                    console.log('[CONTENT TRACKING]');
                }
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.MEDIA_STATUS,
            event => {
                console.log('[MEDIA_STATUS]', event);
            }
        );

        this.playerManager.addEventListener(
            cast.framework.events.EventType.ENDED,
            event => {
                console.log('[ENDED]', event);
                console.log('[ENDED] isAdBreak', this.isAdBreak);
            }
        );
    }

    insertAdBreak(media) {
        media.breakClips = [{
            id: 'AdClip1',
            title: 'Test Ad',
            contentId: 'video/small.mp4',
            contentType: 'video/mp4',
            posterUrl: '//cnet2.cbsistatic.com/img/xhT2E9JH6x380i0YQzrYQx-OROs=/770x433/2017/03/16/41a9fd65-d1a7-479c-a862-d00cc81146f4/news0316drone.jpg',
            whenSkippable: 2
        }];
        media.breaks = [{
            id: 'AdBreak1',
            breakClipIds: ['AdClip1'],
            position: 0
        }];
    }

    startUpMux() {
        let container = document.getElementById('castMediaPlayer');
        let videoElement = container.D;
        console.log('[videoElement]', videoElement);
        // Add mux
        mux.monitor(videoElement, {
            "debug": true,
            "data": mux_metadata
        });
    }
}

let uvpCastApi = new UvpCastApi();

window['__onGCastApiAvailable'] = function(isAvailable) {
    console.log('[MAIN] isAvailable', isAvailable);
    if (isAvailable) {
        //uvpCastApi = new UvpCastApi();
    }
};
//
// cast.framework.messages.MessageType
//
/*
CLOUD_STATUS
:
"CLOUD_STATUS"
CUSTOM_COMMAND
:
"CUSTOM_COMMAND"
DISPLAY_STATUS
:
"DISPLAY_STATUS"
EDIT_AUDIO_TRACKS
:
"EDIT_AUDIO_TRACKS"
EDIT_TRACKS_INFO
:
"EDIT_TRACKS_INFO"
EXECUTE_ACTION_SCRIPT
:
"EXECUTE_ACTION_SCRIPT"
FOCUS_STATE
:
"FOCUS_STATE"
GET_STATUS
:
"GET_STATUS"
LOAD
:
"LOAD"
LOAD_BY_ENTITY
:
"LOAD_BY_ENTITY"
MEDIA_STATUS
:
"MEDIA_STATUS"
PAUSE
:
"PAUSE"
PLAY
:
"PLAY"
PLAY_AGAIN
:
"PLAY_AGAIN"
PLAY_STRING
:
"PLAY_STRING"
PRECACHE
:
"PRECACHE"
PRELOAD
:
"PRELOAD"
QUEUE_CHANGE
:
"QUEUE_CHANGE"
QUEUE_GET_ITEMS
:
"QUEUE_GET_ITEMS"
QUEUE_GET_ITEM_IDS
:
"QUEUE_GET_ITEM_IDS"
QUEUE_GET_ITEM_RANGE
:
"QUEUE_GET_ITEM_RANGE"
QUEUE_INSERT
:
"QUEUE_INSERT"
QUEUE_ITEMS
:
"QUEUE_ITEMS"
QUEUE_ITEM_IDS
:
"QUEUE_ITEM_IDS"
QUEUE_LOAD
:
"QUEUE_LOAD"
QUEUE_NEXT
:
"QUEUE_NEXT"
QUEUE_PREV
:
"QUEUE_PREV"
QUEUE_REMOVE
:
"QUEUE_REMOVE"
QUEUE_REORDER
:
"QUEUE_REORDER"
QUEUE_SHUFFLE
:
"QUEUE_SHUFFLE"
QUEUE_UPDATE
:
"QUEUE_UPDATE"
REFRESH_CREDENTIALS
:
"REFRESH_CREDENTIALS"
SEEK
:
"SEEK"
SET_CREDENTIALS
:
"SET_CREDENTIALS"
SET_PLAYBACK_RATE
:
"SET_PLAYBACK_RATE"
SET_VOLUME
:
"SET_VOLUME"
SKIP_AD
:
"SKIP_AD"
STOP
:
"STOP"
USER_ACTION
:
"USER_ACTION"
*/


//
// cast.framework.events.EventType
//
/*
"ABORT"
ALL
:
"*"
BITRATE_CHANGED
:
"BITRATE_CHANGED"
BREAK_CLIP_ENDED
:
"BREAK_CLIP_ENDED"
BREAK_CLIP_LOADING
:
"BREAK_CLIP_LOADING"
BREAK_CLIP_STARTED
:
"BREAK_CLIP_STARTED"
BREAK_ENDED
:
"BREAK_ENDED"
BREAK_STARTED
:
"BREAK_STARTED"
BUFFERING
:
"BUFFERING"
CACHE_HIT
:
"CACHE_HIT"
CACHE_INSERTED
:
"CACHE_INSERTED"
CACHE_LOADED
:
"CACHE_LOADED"
CAN_PLAY
:
"CAN_PLAY"
CAN_PLAY_THROUGH
:
"CAN_PLAY_THROUGH"
CLIP_ENDED
:
"CLIP_ENDED"
CLIP_STARTED
:
"CLIP_STARTED"
DURATION_CHANGE
:
"DURATION_CHANGE"
EMPTIED
:
"EMPTIED"
EMSG
:
"EMSG"
ENDED
:
"ENDED"
ERROR
:
"ERROR"
ID3
:
"ID3"
INBAND_TRACK_ADDED
:
"INBAND_TRACK_ADDED"
LIVE_ENDED
:
"LIVE_ENDED"
LOADED_DATA
:
"LOADED_DATA"
LOADED_METADATA
:
"LOADED_METADATA"
LOAD_START
:
"LOAD_START"
MEDIA_FINISHED
:
"MEDIA_FINISHED"
MEDIA_STATUS
:
"MEDIA_STATUS"
PAUSE
:
"PAUSE"
PLAY
:
"PLAY"
PLAYER_LOADING
:
"PLAYER_LOADING"
cast.framework.events.EventType.PLAYER_LOAD_COMPLETE
:
"PLAYER_LOAD_COMPLETE"
PLAYER_PRELOADING
:
"PLAYER_PRELOADING"
PLAYER_PRELOADING_CANCELLED
:
"PLAYER_PRELOADING_CANCELLED"
PLAYING
:
"PLAYING"
PROGRESS
:
"PROGRESS"
RATE_CHANGE
:
"RATE_CHANGE"
REQUEST_CUSTOM_COMMAND
:
"REQUEST_CUSTOM_COMMAND"
REQUEST_DISPLAY_STATUS
:
"REQUEST_DISPLAY_STATUS"
REQUEST_EDIT_AUDIO_TRACKS
:
"REQUEST_EDIT_AUDIO_TRACKS"
REQUEST_EDIT_TRACKS_INFO
:
"REQUEST_EDIT_TRACKS_INFO"
REQUEST_FOCUS_STATE
:
"REQUEST_FOCUS_STATE"
REQUEST_LOAD
:
"REQUEST_LOAD"
REQUEST_LOAD_BY_ENTITY
:
"REQUEST_LOAD_BY_ENTITY"
REQUEST_PAUSE
:
"REQUEST_PAUSE"
REQUEST_PLAY
:
"REQUEST_PLAY"
REQUEST_PLAYBACK_RATE_CHANGE
:
"REQUEST_PLAYBACK_RATE_CHANGE"
REQUEST_PLAY_AGAIN
:
"REQUEST_PLAY_AGAIN"
REQUEST_PRECACHE
:
"REQUEST_PRECACHE"
REQUEST_QUEUE_GET_ITEMS
:
"REQUEST_QUEUE_GET_ITEMS"
REQUEST_QUEUE_GET_ITEM_IDS
:
"REQUEST_QUEUE_GET_ITEM_IDS"
REQUEST_QUEUE_GET_ITEM_RANGE
:
"REQUEST_QUEUE_GET_ITEM_RANGE"
REQUEST_QUEUE_INSERT
:
"REQUEST_QUEUE_INSERT"
REQUEST_QUEUE_LOAD
:
"REQUEST_QUEUE_LOAD"
REQUEST_QUEUE_REMOVE
:
"REQUEST_QUEUE_REMOVE"
REQUEST_QUEUE_REORDER
:
"REQUEST_QUEUE_REORDER"
REQUEST_QUEUE_UPDATE
:
"REQUEST_QUEUE_UPDATE"
REQUEST_SEEK
:
"REQUEST_SEEK"
REQUEST_SET_CREDENTIALS
:
"REQUEST_SET_CREDENTIALS"
REQUEST_SKIP_AD
:
"REQUEST_SKIP_AD"
REQUEST_STOP
:
"REQUEST_STOP"
REQUEST_USER_ACTION
:
"REQUEST_USER_ACTION"
REQUEST_VOLUME_CHANGE
:
"REQUEST_VOLUME_CHANGE"
SEEKED
:
"SEEKED"
SEEKING
:
"SEEKING"
SEGMENT_DOWNLOADED
:
"SEGMENT_DOWNLOADED"
STALLED
:
"STALLED"
SUSPEND
:
"SUSPEND"
TIME_UPDATE
:
"TIME_UPDATE"
WAITING
:
"WAITING"
kn
:
"LIVE_IS_MOVING_WINDOW_CHANGED"
*/
