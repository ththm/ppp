(function (doc, win) {
var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 1400) + 'px';
    
    //100是一个基准宽度(html的font-size值)
    //clientWidth是当前页面宽度
    //720是设计图的宽度
  };
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);