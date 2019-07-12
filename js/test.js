// 每天一道面试题 
// 1
function test(x, y, z) {
  console.log(test.length);
  console.log(arguments.length);
  console.log(arguments.callee === test);
  console.log(arguments[2]);
} 
test(10,20)
// 2
function compare(x, y, z, k) {
  var result = x - y;
  var result2 = z - k;
  return [result, result2]
}
compare(0.2, 0.1, 0.8, 0.6)

// 3,字符串和数组问题
function proPrint(num, str) {
  num.pro = num;
  str.pro = 'world';
  console.log(num.pro, num);
  console.log(str.pro, str)
}
proPrint(10, 'hello')

var a = 10;
a.pro = 10;
console.log(a.pro + a);
var b = 'hello';
b.pro = 'world';
console.log(b.pro + b)