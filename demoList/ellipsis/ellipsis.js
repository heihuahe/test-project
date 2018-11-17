// 比较好的方法： 纯js
var el2 = document.getElementById("ellipsis_mul_2"); 
var elStr = el2.innerText;
n = el2.offsetHeight;
for(var i = 0; i <= elStr.length; i++){
    el2.innerHTML = elStr.substr(0, i);
    if(n < el2.scrollHeight) {
        el2.style.overflow = 'hidden';
        el2.innerHTML = elStr.substr(0, i-2) +'...';
        break;
    }
}
// （相对定位的优化）css相对定位+ js 
$(function() {
    $('#ellipsis_mul_1').each(function(i, obj) {
        var lineHeight = parseInt($(this).css('line-height'));
        var height = parseInt($(this).height());
        if((height / lineHeight) < 2) {
            $(this).addClass('ellipsis-mul-1-after');
        }else {
            $(this).removeClass('ellipsis-mul-1-after');
        }
    })
})


//获取元素的css 属性值
function getStyle(element, attr) {
    if(element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr];
    }
}