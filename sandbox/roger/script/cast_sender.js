const CAST_APP_ID = '66354228';

let initializeCastApi = () => {
    let apiConfig = new chrome.cast.ApiConfig(
        new chrome.cast.SessionRequest(CAST_APP_ID),
        (session) => {
            if (session.media.length != 0) {
                onMediaDiscovered('onRequestSessionSuccess', session.media[0]);
            }
        },
        (receiver) => {
            if(receiver === chrome.cast.ReceiverAvailability.AVAILABLE) {
            }
        }
    );

    //chrome.cast.initialize(apiConfig, onInitSuccess, onError);
};

window['__onGCastApiAvailable'] = (loaded, error) => {
    if (!loaded) {
        console.log('[onGCastApiAvailable]', error);
        return;
    }

    initializeCastApi();
};
