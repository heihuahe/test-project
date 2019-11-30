window.onload = function() {
  var myDebounce = document.getElementById('btn-debounce')
  myDebounce.addEventListener("click", debounce(doSomeThing))
}

// 防抖函数，接受传参
function debounce(fn) {
  // 定时器
  let timeOut = null
  return function() {
    // 将前一个定时器清除
    clearTimeout(timeOut);
    // 创建一个新的定时器 setTimeout
    // 时间间隔为1s
    // 这样就能保证点击按钮后的间隔期间内，如果用户再次点击，不会执行fn函数
    timeOut = setTimeout(() => {
      fn.call(this, arguments)
    }, 1000)
  }
}

// 对需要防抖的事件进行处理 (要执行的业务)
function doSomeThing() {
  var date = new Date()
  var hour = date.getHours()+":"
  var minutes = date.getMinutes()+":"
  var seconds = date.getSeconds()
  console.log('开始防抖.'+ hour+minutes+seconds)
}

// call 的举例
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

function setName() {
  console.log(new Food('cheery', 28))
}

