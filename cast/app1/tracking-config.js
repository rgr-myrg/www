let upvc = [
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
  name: 'ADBMobile',
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
}];
