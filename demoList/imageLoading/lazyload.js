/***
 * 图片懒加载 手写
 */
function throttle(fn, delay, atleast) {//函数绑定在 scroll 事件上，当页面滚动时，避免函数被高频触发，
  var timeout = null,//进行去抖处理
  startTime = new Date();
  return function() {
  var curTime = new Date();
  clearTimeout(timeout);
  if(curTime - startTime >= atleast) {
      fn();
      startTime = curTime;
  }else {
      timeout = setTimeout(fn, delay);
  }
  }
}
function lazyload() {
  var images = document.getElementsByTagName('img');
  var len    = images.length;
  var n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历        
  return function() {
  var seeHeight = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for(var i = n; i < len; i++) {
      if(images[i].offsetTop < seeHeight + scrollTop) {
          if(images[i].getAttribute('src') === '../../img/loading.gif') {
           images[i].src = images[i].getAttribute('data-src');
          }
      n = n + 1;
       }
  }
  }
}
var loadImages = lazyload();
loadImages();
window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);

/**
 * 插件 echo.js
 * github地址：https://github.com/toddmotto/echo
 * 不依赖jquery，一个简单的js懒加载插件，js体积小，快，使用简单，兼容至ie8+
 * 在img标签里，添加data-echo属性，如果要用echo懒加载添加data-echo-background 属性就行。
 */
// echo.init({
//   offset: 100,
//   throttle: 250,
//   unload: false,
//   callback: function (element, op) {
//     console.log(element, 'has been', op + 'ed')
//   }
// });