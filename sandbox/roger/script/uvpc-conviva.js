var uvpc_conviva = {
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
            category: 'qos',
            enabled: true,
            name: 'ConvivaQOSPluginJS',
            params: [
                {name: 'customerId', value: 'c3.CBS'},
                {name: 'customerKey', value: 'ce4836fb66f6e081bcf6fea7df4531f22ac7ffbb'},
                {name: 'serviceUrl', value: 'https://cbscom-test.testonly.conviva.com'},
                {name: 'heartbeatInterval', value: 5}
            ]
        }
    ]
};
