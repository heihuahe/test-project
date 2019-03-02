//替换字符串中所有指定的字符
function replaceStr (replaceString) {
    var str = replaceString.replace(/\//g, "-");
    return str;
}

function go () {
    var originStr = '2018/10/19 11:20:00 周四';
    var tdReplaceStr = document.getElementById('replace_str');
    tdReplaceStr.textContent = replaceStr(originStr);
    
    console.log(replaceStr(originStr));
}
go();