// event variables
var resourceStart = 'false';
var adPodStart = 'false';
var adStart = 'false';
var adEnd = 'false';
var adPodEnd = 'false';
var contentStart = 'false';
var contentEnd = 'false';
var resourceEnd = 'false';
var adCount = 0;

function onResourceStart(evtObj) {
    console.log('onResourceStart called in the page.');
    resourceStart = 'true';
    myVideoPlayer.removeEventListener(uvpjs.EventType.RESOURCE_START + internalNS);
}

function onAdPodStart(evtObj) {
    console.log('onAdPodStart called in the page.');
    adPodStart = 'true';
}

function onAdStart(evtObj) {
    console.log('onAdStart called in the page.');
    adStart = 'true';
    adCount = evtObj.payload.podAdCount;
    console.log('Ad Count: ' + adCount);
}

function onAdEnd(evtObj) {
    console.log('onAdEnd called in the page.');
    adEnd = 'true';
}

function onAdPodEnd(evtObj) {
    console.log('onAdPodEnd called in the page.');
    adPodEnd = 'true';
}

function onContentStart(evtObj) {
    console.log('onContentStart called in the page.');
    contentStart = 'true';
}

function onContentEnd(evtObj) {
    console.log('onContentEnd called in the page.');
    contentEnd = 'true';
}

function onResourceEnd(evtObj) {
    console.log('onResourceEnd called in the page.');
    resourceEnd = 'true';
    myVideoPlayer.removeEventListener(uvpjs.EventType.RESOURCE_END + internalNS);
    myVideoPlayer.removeEventListener(uvpjs.EventType.AD_POD_START + internalNS);
    myVideoPlayer.removeEventListener(uvpjs.EventType.AD_START + internalNS);
    myVideoPlayer.removeEventListener(uvpjs.EventType.AD_END + internalNS);
    myVideoPlayer.removeEventListener(uvpjs.EventType.AD_POD_END + internalNS);
    myVideoPlayer.removeEventListener(uvpjs.EventType.CONTENT_END + internalNS);
}

function resetAllEventVariables() {
  console.log('Setting all the event variables to false');
  resourceStart = 'false';
  adPodStart = 'false';
  adStart = 'false';
  adEnd = 'false';
  adPodEnd = 'false';
  contentStart = 'false';
  contentEnd = 'false';
  resourceEnd = 'false';
}

function printFiredEvents() {
  console.log('resourceStart: ' + resourceStart);
  console.log('adPodStart: ' + adPodStart);
  console.log('adStart: ' + adStart);
  console.log('adEnd: ' + adEnd);
  console.log('adPodEnd: ' + adPodEnd);
  console.log('contentStart: ' + contentStart);
  console.log('contentEnd: ' + contentEnd);
  console.log('resourceEnd: ' + resourceEnd);
}
