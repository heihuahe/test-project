var box = document.getElementById("box_height");
var boxContent = document.getElementById("box_height_content");
var heightOffset = box.offsetHeight;
var heightClient = box.clientHeight;
var heightScroll = box.scrollHeight;
var code = '<table>';
code += '<tr><th>高度名</th><th>值</th></tr>';
code += '<tr><td>offsetHeight</td><td>'+ heightOffset + 'px</td></tr>';
code += '<tr><td>clientHeight</td><td>'+ heightClient + 'px</td></tr>';
code += '<tr><td>scrollHeight</td><td>'+ heightScroll + 'px</td></tr>';
boxContent.innerHTML = code+'</table>';