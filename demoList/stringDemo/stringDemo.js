//替换字符串中所有指定的字符
function replaceStr (replaceString) {
    var str = replaceString.replace(/\//g, "-");
    return str;
}

function go() {
    var originStr = '2018/10/19 11:20:00 周四';
    var tdReplaceStr = document.getElementById('replace_str');
    tdReplaceStr.textContent = replaceStr(originStr);
    console.log(replaceStr(originStr));
}
// 写入td
function writeTotd(idStr, str) {
  var td = document.getElementById(idStr);
  td.textContent = str;
}

/**
 * 删除字符串中指定字符串,一个单词的那种
 */ 
function deleteStr(str, delWords, indexStart, indexEnd) {
  // 指定字符串，一个单词的那种
  var result = ''
  // 这个字符串存在
  if (!!delWords) {
    // 取这个字符串的坐标
    var index = str.indexOf(delWords)
    var strStart = str.substring(0, index) // 前部分
    var strEnd = str.substring(index+1) // 后部分
    result = strStart + strEnd //拼接
  } else {
    str.substring(indexStart, indexEnd)
  }
  writeTotd('substring_str', result)
}


// 初始化
go();
var str = 'heihuasheng';
deleteStr(str, 'a')