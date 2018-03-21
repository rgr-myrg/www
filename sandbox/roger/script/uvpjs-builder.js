uvpjs.player = function() {
    var videoManager,
        onPlayerReady,
        onPlayerError,
        playerId,
        sessionOptions,
        rco;

    this.id = function(id) {
        playerId = id;
        return this;
    };

    this.sessionOptions = function(options) {
        sessionOptions = options;
        return this;
    };

    this.rco = function(config) {
        rco = config;
        return this;
    };

    this.onReady = function(callback) {
        onPlayerReady = callback;
        return this;
    };

    this.onError = function(callback) {
        onPlayerError = callback;
        return this;
    };

    // this.build = function() {
    //     videoManager = new uvpjs.VideoManager();
    //     videoManager.initialize(
    //         sessionOptions,
    //         () => {
    //             videoManager.createVideoPlayer(
    //                 playerId, onPlayerReady
    //             )
    //         },
    //         onPlayerError
    //     );
    // };

    this.loadAndPlay = function() {
        videoManager = new uvpjs.VideoManager();
        videoManager.initialize(
            sessionOptions,
            () => {
                videoManager.createVideoPlayer(
                    playerId, (player) => {

                        /* Augment player with addEventListener wrapper */
                        player.on = function(eventName, callback) {
                            var namespace = [eventName, playerId].join('.');
                            player.eventsMgr.addEventListener(
                                namespace, callback
                            );
                        };

                        onPlayerReady.call(this, player);
                        player.loadAndPlayResource(rco);
                    }
                )
            },
            onPlayerError
        );
    };

    this.getVideoManager = function() {
        return videoManager;
    };

    return this;
};
