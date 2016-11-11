var url = "crat.tk";
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;
var protocol;
function CheckHTTPS() {
if(isChrome){protocol =  document.location.protocol
}else if(isSafari){protocol =  window.location.protocol
}else if(isIE){protocol = document.location.protocol
}else{
  window.location = "https://" + url;
  //Firefox
  location.asign("https://" + url);
}

if(protocol == "http://"){
  window.location = "https://" + url;
}
}

document.onload = CheckHTTPS();
window.onload = CheckHTTPS();
