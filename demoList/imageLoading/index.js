//当前页面导航栏高亮
function currentPage(url) {
  var urlStatus = false;
  $(".nav .navbar-title a").each(function () {
      var pageStr = $(this).attr('href');
      var pageName = pageStr.substring(0, pageStr.indexOf('.'));
      var id = $(this).attr('id');
      var hrefNameIndex = url.lastIndexOf('\/');
      var hrefName = url.substring(hrefNameIndex+1);
      hrefName = hrefName.substring(0, hrefName.indexOf('.'))
      // 地址在父菜单默认子菜单/父菜单里吗？
      if((url + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != ''){
          $(this).addClass('nav-hight-light');
          // 显示二级菜单
          if(id) {
            $('.second-nav').slideToggle()
            $(".second-nav ."+id).removeClass('hide')
            $(".second-nav ."+id+" p:first-child a").addClass('sub-hight-light');
          } else {
            $(".second-nav ."+id).addClass('hide')
          }
          urlStatus = true;
      }else if(url.indexOf(pageName) > -1){ //父菜单的其他子菜单里
        $(this).addClass('nav-hight-light');
        $('.second-nav').slideToggle()
        $(".second-nav ."+id).removeClass('hide')
        $(".second-nav #"+hrefName).addClass('sub-hight-light')
        urlStatus = true;
      }else{
          $(this).removeClass('nav-hight-light');
      }  
  });
}

window.onload = function() {
  var urlStr = location.href;
  this.currentPage(urlStr);
}