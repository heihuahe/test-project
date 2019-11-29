function numFormat(id, num, digits) {
  var tagId = document.getElementById(id)
  var numFloat = parseFloat(num).toFixed(digits)
  tagId.innerText = numFloat
}

// 重写toFixed()
function overWriteToFixed() {
  Number.prototype.toFixed = function(d) {
    var s = this + '';
    if (!d) d = 0;
    if (s.indexOf('.') == -1 ) s += '.';
    s += new Array(d+1).join('0');
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(d+1)+"})?)\\d*$").test(s)) {
      var s = '0'+ RegExp.$2,
      pm = RegExp.$1,
      a = RegExp.$3.length,
      b = true;
      if (a == d+2) {
        a = s.match(/\d/g);
        if (parseInt(a[a.length - 1]) > 4) {
          for (var i = a.length -2; i>= 0; i--) {
            a[i] = parseInt(a[i]) +1;
            if (a[i] == 10) {
              a[i] = 0;
              b = i!= 1;
            } else break;
            
          }
        }
        s = a.join('').replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
      }
      if (b) s= s.substr(1);
      return (pm+s).replace(/\.$/, '')
    }
    return this+''
  }
}
// 初始化
overWriteToFixed()
numFormat('fixed0', 12345.6789) 
numFormat('fixed1', 12345.6789, 1) 
numFormat('fixed6', 12345.6789, 6) 
numFormat('fixed_in_34', 2.34, 1) 
numFormat('fixed_in_35', 2.35, 1) 
numFormat('fixed_in_55', 2.55, 1) 
