(function(w) {
    w.vtg = w.vtg || {};

    w.vtg.config = {

        Adobe: {
            enabled: true,
            params: {
                prodApiServer: "cbs.hb-api.omtrdc.net",
                devApiServer: "cbs-dev.hb-api.omtrdc.net",
                trackingServer: "saa.cbsi.com",
                reportSuite: "cnetcbscomsite-dev",
                marketingCloudOrgId: "10D31225525FF5790A490D4D@AdobeOrg",
                channel: "CBS Entertainment",
                enableSSL: true,
                mediaInfo: {
                    "media.playerName": "{data.playerName}",
                    "media.contentType": "{data.isLive} ? Live : VOD",
                    "media.length": "{data.isLive} ? 86400 : {data.duration}",
                    "media.id": "{data.mediaId}",
                    "media.name": "{data.videoTitle}",
                    "media.channel": "CBS Entertainment",
                    "media.network": "CBS Entertainment",
                    "media.sdkVersion": "{data.playerVersion}",
                    "media.show": "{data.seriesTitle}",
                    "media.genre": "{data.category}",
                    "media.season": "{data.seasonNumber}",
                    "media.episode": "{data.episodeNumber}",
                    "media.showType": "{data.episodeFlag} ? 0 : 2"
                }
            }
        },
        OzTam: {
            enabled: false,
            params: {
                pubIdForLive: "4586f4a7-a22e-4f98-a7b5-31b621a927a5",
                pubIdForVod: "779e3a9f-0ad4-4288-ae57-b4fba8259c1f",
                platform: "TenAllAccess"
            }
        },
        ConvivaCast: {
            enabled: true,
            params: {
                prodCustomerKey: "87a6b28bc7823e67a5bb2a0a6728c702afcae78d",
                devCustomerKey: "ce4836fb66f6e081bcf6fea7df4531f22ac7ffbb",
                devServerUrl: "cbscom-test.testonly.conviva.com",
                prodServerUrl: "cws.conviva.com",
                customTag: {
                    accessType: "{data.userStatus}",
                    app: "{data.playerName}",
                    appRegion: "{data.userCountry}",
                    appVersion: "{data.playerName} {data.playerVersion}",
                    contentId: "{data.mediaId}",
                    contentType: "{data.isLive} ? Live : VOD",
                    connectionType: "{data.userConnectionType}",
                    drm: "{data.drmEnabled}",
                    drmType: "{data.drmType}",
                    episodeTitle: "{data.episodeTitle}",
                    isAd: "{data.isAd}",
                    isEpisode: "{data.episodeFlag}",
                    Partner_ID: "{data.partner}",
                    Player_Version: "{data.playerVersion}",
                    seriesTitle: "{data.seriesTitle}",
                    showID: "{context.showResId}",
                    winDimension: "{data.screenSize}",
                    stream_id: "{data.streamId}"
                }
            }
        }
    };

})(window);
