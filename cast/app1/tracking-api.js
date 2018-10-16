/*
 * Create an instance of the TrackingReceiver.
 *
 * The TrackingReceiver will retrieve the CastReceiverContext and Cast Player Manager from CAF.
 * This allows the Tracking API to attach event listeners to Chromecast events.
 * The CastReceiverContext and Player Manager can be accessed through the Tracking API
 * tracking.context and tracking.playerManager respectively if needed.
 */
let tracking = new TrackingReceiver();

/* Set debug to true to enable console logs */
tracking.debug = true;

/* Set the uvpc config from tracking-cfg.js */
tracking.setTrackingConfig(uvpc);

/* Set the player info for the player you want to track */
tracking.model.BuildInfo.playerName = 'playerName';
tracking.model.BuildInfo.playerVersion = 'playerVersion';

/* Provide the Id to the castMediaElement Video Container */
tracking.setCastMediaElementId('myVideoContainer');

/* Populate Content and Playback Metadata */
tracking.model.ContentMetadata.mediaId = 'mediaId';
tracking.model.ContentMetadata.videoTitle = 'videoTitle';
tracking.model.ContentMetadata.seriesTitle = 'seriesTitle';
tracking.model.ContentMetadata.episodeFlag = false;
tracking.model.ContentMetadata.cmsRefGuid = 'cmsRefGuid';
tracking.model.ContentMetadata.seasonNumber = 5;
tracking.model.ContentMetadata.episodeNumber = 1;

tracking.model.ContentPlaybackState.duration = 30000;
tracking.model.ContentPlaybackState.cdn = 'Akamai';
tracking.model.ContentPlaybackState.duration = 600;

tracking.model.ResourceConfig.streamType = 'VOD';

// tracking.model.AdItem.adId = 'pre_roll_id';
// tracking.model.AdItem.adDuration = 30;

/* Start the CastReceiverContext for content Playback */
tracking.startCastReceiverContext();
