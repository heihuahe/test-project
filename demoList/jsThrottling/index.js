/**
 * 判断页面是否滚动到底部
 */
// $(window).on('scroll', function() {
//   //判断
//   let pageHeight = $('.box').height(),
//     scrollTop = $(window).scrollTop(),
//     winHeight = $(window).height(),
//     thresold = pageHeight - scrollTop -winHeight;
//   if (thresold > -100 && thresold <= 20) {
//     console.log('end')
//   }
// })
$('.box').scroll(function() {
  // 判断
  let scrollTop = $('.box').scrollTop(),
      scrollHeight = $(document).height(),
      windowheight = $('.box').height();
  if (scrollTop + windowheight == scrollHeight) {
    console.log('end')
  }else {
    console.log('scroll')
  }
})