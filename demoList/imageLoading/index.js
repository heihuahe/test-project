//当前页面导航栏高亮
function currentPage(url) {
  var urlStatus = false;
  $(".title a").each(function () {
      // var hrefNameIndex = url.lastIndexOf('\/');
      // var hrefName = url.substring(hrefNameIndex+1);
      // hrefName = hrefName.substring(0, hrefName.indexOf('.'))
      // 地址在父菜单默认子菜单/父菜单里吗？
      if((url + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != ''){
          $(this).addClass('active');
          // urlStatus = true;
      }else{
          $(this).removeClass('active');
      }  
  });
}

window.onload = function() {
  var urlStr = location.href;
  this.currentPage(urlStr);
}
