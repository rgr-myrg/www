function getUvpcOptions() {
    return {
        modules: [
            {
                name: 'UVPJSDebug',
                category: 'internal',
                enabled: true,
                params: [{
                    name: "showAll",
                    value: true
                }]
            },
            {
                name: 'ComScore_ss',
                category: 'tracking',
                enabled: true,
                params: [
                    {
                        name: 'partnerID',
                        value: 'cnet'
                    },
                    {
                        name: 'c1',
                        value: '19'
                    },
                    {
                        name: 'c2',
                        value: '3005086'
                    },
                    {
                        name: 'publishersSecret',
                        value: '2cb08ca4d095dd734a374dff8422c2e5'
                    },
                    {
                        name: 'c3',
                        value: ''
                    },
                    {
                        name: 'c4',
                        value: 'cnetvideo'
                    }
                ]
            },
            {
                name: 'SiteCatalyst',
                category: 'qos',
                enabled: true,
                params: [
                    {
                        name: 'account',
                        value: 'cbsicnetglobalsite'
                    },
                    {
                        name: 'brand',
                        value: 'cnet'
                    },
                    {
                        name: 'edition',
                        value: 'us'
                    },
                    {
                        name: 'charSet',
                        value: 'UTF-8'
                    },
                    {
                        name: 'currencyCode',
                        value: 'USD'
                    },
                    {
                        name: 'visitorNamespace',
                        value: 'cbsinteractive'
                    },
                    {
                        name: 'TrackLiveStreams',
                        value: 'y'
                    },
                    {
                        name: 'trackingServer',
                        value: 'om.cbsi.com'
                    },
                    {
                        name: 'heartbeatTrackingServer',
                        value: 'cbsinteractive.hb.omtrdc.net'
                    },
                    {
                        name: 'heartbeatAdobePublisherId',
                        value: '10D31225525FF5790A490D4D@AdobeOrg'
                    }
                ]
            },
            {
                category: 'tracking',
                name: 'NielsenTracking_SDK',
                enabled: true,
                params: [
                    {
                        name: 'apid',
                        value: 'T0EA7CD2E-455C-4925-95F9-FC8A7E69BB99'
                    },
                    {
                        name: 'clientid',
                        value: 'us-200330'
                    },
                    {
                        name: 'sfcode',
                        value: 'dcr-cert'
                    },
                    {
                        name: 'vcid',
                        value: 'c07'
                    },
                    {
                        name: 'channelInfo',
                        value: ''
                    },
                    {
                        name: 'iag_sid',
                        value: '1000011'
                    },
                    {
                        name: 'iag_tfid',
                        value: '902'
                    },
                    {
                        name: 'channelName',
                        value: 'cbs'
                    },
                    {
                        name: 'segB',
                        value: 'CNET.com'
                    },
                    {
                        name: 'nol_devDebug',
                        value: true
                    }
                ]
            }
        ]
    };
}
