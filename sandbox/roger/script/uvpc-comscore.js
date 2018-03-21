var uvpc_comscore = {
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
                {name: 'partnerID', value: 'cnet'},
                {name: 'c1',value: '19'},
                {name: 'c2',value: '3005086'},
                {name: 'publishersSecret', value: '2cb08ca4d095dd734a374dff8422c2e5'},
                {name: 'c3',value: ''},
                {name: 'c4',value: 'cnetvideo'}
            ]
        }
    ]
};
