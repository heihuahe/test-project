$(function() {
  var width = $(".img-scale-js").width()
  var height = $(".img-scale-js").height()
  var widthScale = width + 60; // 缩放的像素大小
  var heightScale = width + 60;
  var paramsScale = {
    height: heightScale,
    width: widthScale,
    left: '-60px',
    top: '-60px'
  }
  var params = {
    height: height,
    width: width,
    left: '0',
    top: '0'
  }
  $(".img-scale-js").hover(function() {
    $(this).stop().animate(paramsScale, 600)
  }, function() {
    $(this).stop().animate(params, 600)
  })
})