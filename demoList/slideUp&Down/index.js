/**
 * 点击滑动
 * @param 类型 type  1：没有滑动；2 滑动
 */
var slide = function(type) {
  switch(parseInt(type)) {
    case 1: 
      document.getElementById('noSlider').classList.toggle('closed')
      break;
    case 2:
      document.getElementById('slider').classList.toggle('closed')
      break;
  }
}