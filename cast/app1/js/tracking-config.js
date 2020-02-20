(function (w) {
    w.vtg = w.vtg || {};

    w.vtg.config = {
        "Settings": {
            "debug": true,
            "ssl": true
        },
        "Adobe": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "prodUrl": "cbs.hb-api.omtrdc.net",
                    "devUrl": "cbs-dev.hb-api.omtrdc.net",
                    "prodSuite": "cnetcbscomsite",
                    "devSuite": "cnetcbscomsite-dev",
                    "demdexUrl": "dpm.demdex.net/id?d_rtbd=json&d_ver=2&d_orgid=",
                    "id3Owner": "com.cbsi.live.sg"
                },
                "appTrackingInfo" : {
                    "reportSuiteID": "{config.reportSuite}",
                    "marketingCloudOrgId": "10D31225525FF5790A490D4D@AdobeOrg",
                    "marketingCloudVisitorID": "{config.mid}",
                    "dataUrl": "som.cbsi.com/b/ss/{config.reportSuite}/6"
                },
                "accountInfo": {
                    "analytics.trackingServer": "saa.cbsi.com",
                    "analytics.reportSuite": "{config.reportSuite}",
                    "analytics.enableSSL": "true",
                    "visitor.marketingCloudOrgId": "10D31225525FF5790A490D4D@AdobeOrg",
                    "visitor.marketingCloudUserId": "{config.mid}"
                },
                "mediaInfo": {
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
                    "media.showType": "{data.isEpisode} ? 0 : 2",
                    "media.resume": "{data.hasSessionResumed}"
                },
                "adBreakInfo": {
                    "media.ad.podFriendlyName": "{data.adBreakType}",
                    "media.ad.podIndex": "{data.adBreakPosition}",
                    "media.ad.podSecond": "{data.playhead}"
                },
                "adInfo": {
                    "media.ad.name": "{data.adTitle}",
                    "media.ad.id": "{data.videoTitle} - {data.adTitle}",
                    "media.ad.length": "{data.adDuration}",
                    "media.ad.creativeId": "{data.adId}",
                    "media.ad.creativeURL": "{data.adUrl}",
                    "media.ad.playerName": "{data.playerName}",
                    "media.ad.podPosition": "{data.adPosition}"
                },
                "customData": {
                    "mediaResume": "{data.hasSessionResumed}"
                },
                "qoeData": {
                    "media.qoe.timeToStart": "{data.timeToStart}"
                },
                "dataType": {
                    "analytics.enableSSL": "boolean",
                    "media.length": "int",
                    "media.resume": "boolean",
                    "media.ad.podIndex": "int",
                    "media.ad.podSecond": "int",
                    "media.ad.length": "int",
                    "media.ad.podPosition": "int",
                    "media.qoe.timeToStart": "int"
                }
            }
        },
        "OzTam": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "liveKey": "4586f4a7-a22e-4f98-a7b5-31b621a927a5",
                    "vodKey": "779e3a9f-0ad4-4288-ae57-b4fba8259c1f",
                    "platform": "TenAllAccess",
                    "productionMode": true,
                    "useHTTPS": true
                },
                "mediaInfo": {
                    "mediaId": "{data.ozTamMediaId} || {data.mediaId}",
                    "url": "{data.mediaUrl}",
                    "mediaDuration": "{data.duration}",
                    "mediaType": "{data.isLive} ? live : vod"
                }
            }
        },
        "ConvivaCast": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "prodKey": "87a6b28bc7823e67a5bb2a0a6728c702afcae78d",
                    "devKey": "ce4836fb66f6e081bcf6fea7df4531f22ac7ffbb",
                    "devUrl": "cbscom-test.testonly.conviva.com",
                    "prodUrl": "cws.conviva.com"
                },
                "contentInfo": {
                    "assetName": "{data.videoTitle}",
                    "playerName": "{data.playerName}",
                    "streamUrl": "{data.mediaUrl}",
                    "duration": "{data.duration}",
                    "defaultReportingResource": "{data.cdn}",
                    "defaultReportingBitrateKbps": "{data.bitrate}",
                    "encodedFps": "{data.playbackFramerate}",
                    "viewerId": "{data.userId}",
                    "isLive": "{data.isLive}"
                },
                "adBreakInfo": {
                    "podPosition": "{data.adBreakType}",
                    "podIndex": "{data.adBreakPosition}",
                    "podDuration": "{data.adBreakDuration}"
                },
                "adInfo": {
                    "assetName": "{data.adTitle}",
                    "streamUrl": "{data.adUrl}",
                    "duration": "{data.adDuration}",
                    "encodedFrameRate": "{data.playbackFramerate}",
                    "streamType": "VOD",
                    "applicationName": "{data.playerName}",
                    "defaultResource": "{data.cdn}"
                },
                "cdnInfo": {
                    "defaultResource": "{data.cdn}"
                },
                "customTagInfo": {
                    "accessType": "{data.userStatus}",
                    "app": "{data.playerName}",
                    "appRegion": "{data.userCountry}",
                    "appVersion": "{data.playerName} {data.playerVersion}",
                    "contentId": "{data.mediaId}",
                    "contentType": "{data.isLive} ? Live : VOD",
                    "connectionType": "{data.connectionType}",
                    "drm": "{data.drmEnabled}",
                    "drmType": "{data.drmType}",
                    "episodeTitle": "{data.episodeTitle}",
                    "isEpisode": "{data.isEpisode}",
                    "Partner_ID": "{data.partner}",
                    "Player_Version": "{data.playerVersion}",
                    "seriesTitle": "{data.seriesTitle}",
                    "showId": "{context.showSeriesId}",
                    "stream_id": "{data.streamId}",
                    "testBucket": "none",
                    "winDimension": "{data.screenSize}"
                }
            }
        }
    };

})(window);
