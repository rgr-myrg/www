var uvpc_beacon = {
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
            name: 'Beacon',
            category: 'tracking',
            enabled: true,
            params: [
                {name: 'prodUrl', value: 'sparrow.cbsallaccess.ca'},
                {name: 'stageUrl',value: 'stage-sparrow.cbsallaccess.ca'}
            ]
        }
    ]
};
