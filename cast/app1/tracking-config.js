var upvc = [
    {
        'name': 'MuxQOSPluginJS',
        'category': 'qos',
        'enabled': true,
        'params': [
            {
            'name': 'propertyKey',
            'value': '1778b90ad19424061a4c8920a'
            },
            {
            'name': 'subPropertyId',
            'value': 'test_sub_property'
            }
        ]
    },
    {
        name: 'ADBMobileConfig',
        enabled: true,
        'params': [],
        config: {
            marketingCloud: {
                org: '3CE342C75100435B0A490D4C@AdobeOrg'
            },
            target: {
                clientCode: '',
                timeout: 5
            },
            audienceManager: {
                server: 'mobileservices.demdex.net'
            },
            analytics: {
                rsids: 'mobile1vhl.sample.player',
                server: 'obumobile1.sc.omtrdc.net',
                ssl: false,
                offlineEnabled: false,
                charset: 'UTF-8',
                lifecycleTimeout: 300,
                privacyDefault: 'optedin',
                batchLimit: 0,
                timezone: 'MDT',
                timezoneOffset: -360,
                referrerTimeout: 0,
                poi: []
            },
            mediaHeartbeat: {
                server: 'obumobile1.hb.omtrdc.net',
                publisher: '3CE342C75100435B0A490D4C@AdobeOrg',
                channel: 'test-channel-chromecast',
                ssl: false,
                ovp: 'chromecast-player',
                sdkVersion: 'chromecast-sdk',
                playerName: 'Chromecast'
            }
        }
    },
    {
        "name": "ComScore_ss",
        "category": "qos",
        "enabled": true,
        "params": [
            {
                "name": "c2",
                "value": "3002231"
            },
            {
                "name": "c3",
                "value": "partnerPlaceholder"
            },
            {
                "name": "c4",
                "value": "contentCreatorPlaceholder"
            },
            {
                "name": "c6",
                "value": "SeasonNumberEpisodeNumberPlaceholder"
            },
            {
                "name": "partnerID",
                "value": "cbs"
            },
            {
                "name": "publishersSecret",
                "value": "2cb08ca4d095dd734a374dff8422c2e5"
            }
        ]
    }
];

// ADBMobile Lib requires config to be available globally before the lib loads.

var ADBMobileConfig = uvpc[1].config;
