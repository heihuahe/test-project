(function(){
  /**
   * 判断当前是什么浏览器,仅pc端
   * @return String 浏览器相关信息
   */
  var userBrowser = function() {
    const userAgent = navigator.userAgent.toLowerCase() // 当前的用户代理,全都转化成小写
    let browserName = '' // 浏览器名称
    let browserVersion = userAgent.match(/(msie|firefox|chrome|opera|safari).*?([\d.]+)/) ?userAgent.match(/(msie|firefox|chrome|opera|safari).*?([\d.]+)/)[2] : '' // 浏览器版本
    let deviceName = '' // 设备名称
    let deviceMsg = '' // 设备具体信息
    let str = '' //最后结果
    if(/msie/i.test(userAgent) && !/opera/.test(userAgent)) { // IE 10及以下，用msie判断，IE11 就不行了
      browserName = 'IE 浏览器(Microsoft Internet Explorer)'
    } else if(/window/i.test(userAgent) && /trident/i.test(userAgent)) { // IE11 比较特殊，和IE10以下的都不一样，且和Edge也不一样
      browserName = 'IE 浏览器(Microsoft Internet Explorer)'
    } else if(/edg/i.test(userAgent)) {
      browserName = 'Edge浏览器(Microsoft Edge)'
    }else if(/firefox/i.test(userAgent)) {
      browserName = '火狐浏览器(Firefox)'
    } else if(/chrome/i.test(userAgent) && /webkit/i.test(userAgent) && /mozilla/i.test(userAgent)) {
      browserName = '谷歌浏览器(Chrome)'
    } else if(/opera/i.test(userAgent)) {
      browserName = '浏览器(opera)'
    } else if(/webkit/i.test(userAgent) &&!(/chrome/i.test(userAgent) && /webkit/i.test(userAgent) && /mozilla/i.test(userAgent))) {
      browserName = 'Safari浏览器(Safari)'
    } else {
      browserName = '不知道的浏览器'
    }
    // 获取平台信息
    let firstIndex = userAgent.indexOf('(')
    let deviceEndIndex = userAgent.indexOf(';')
    let endIndex = userAgent.indexOf(')')
    deviceName = userAgent.substr(parseInt(firstIndex)+1,parseInt(deviceEndIndex)-parseInt(firstIndex))
    deviceMsg = userAgent.substr(parseInt(firstIndex),parseInt(endIndex)-parseInt(firstIndex)+1)


    str = '我是<strong>PC端</strong>，' + browserName + '<br/> 当前所在：<strong>' + deviceName + '</strong><br/> 其平台信息：'+ 
    deviceMsg + '<br/> 其浏览器版本：<strong>' + browserVersion + '</strong><br/> 具体是：' + userAgent
    if(isWeChat) {
      str += '<br>是微信内置浏览器'
    } else {
      str += '<br>不是微信内置浏览器'
    }
    return str
  }

  /**
   * 浏览器判断，
   * pc端：就是知道具体是哪个浏览器，
   * 移动端：就知道是哪个系统的，安卓还是苹果，再判断是否是微信内置浏览器
   * macth 有个问题，如果找不到，容易报错，然后就中止了。
   * @return String 浏览器相关信息
   */
  var browserJudge = function() {
    const userAgent = navigator.userAgent.toLowerCase() // 当前的用户代理,全都转化成小写
    let isMobile = false // 是否是移动端
    let isWeChat = false // 是否是微信内置浏览器
    let browserName = '' // 浏览器名称
    let browserVersion = userAgent.match(/(msie|firefox|chrome|opera|safari).*?([\d.]+)/) ?userAgent.match(/(msie|firefox|chrome|opera|safari).*?([\d.]+)/)[2] : '' // 浏览器版本
    let deviceName = '' // 设备名称
    let deviceMsg = '' // 设备具体信息
    let str = '' //最后结果

    // 判断移动端浏览器
    if(/(iphone|ipad|ipod|ios)/i.test(userAgent)) { // 是否是苹果
      isMobile = true
      browserName = 'Safari浏览器(iOS)'
    } else if(userAgent.match(/(android).*?([\d.]+)/) && userAgent.match(/(android).*?([\d.]+)/)[1] === 'android') { // 安卓,因为安卓的一般都会带上版本，test检测不出来，match可以
      isMobile = true
      browserName = '安卓浏览器(Android)'
    } else {
      isMobile = false
    }
    // 是否是微信内置浏览器
    if(isMobile) {
      if(/(microMessenger)i/.test(userAgent)) {
        isWeChat = true
      } else {
        isWeChat = false
      }
      if(/firefox/i.test(userAgent)) {
        browserName = '火狐浏览器(Firefox)'
      } else if(/chrome/i.test(userAgent) && /webkit/i.test(userAgent) && /mozilla/i.test(userAgent)) {
        browserName = '谷歌浏览器(Chrome)'
      }
    }
    // 判断pc端浏览器
    if(!isMobile) {
      if(/msie/i.test(userAgent) && !/opera/.test(userAgent)) { // IE 10及以下，用msie判断，IE11 就不行了
        browserName = 'IE 浏览器(Microsoft Internet Explorer)'
      } else if(/window/i.test(userAgent) && /trident/i.test(userAgent)) { // IE11 比较特殊，和IE10以下的都不一样，且和Edge也不一样
        browserName = 'IE 浏览器(Microsoft Internet Explorer)'
      } else if(/edg/i.test(userAgent)) {
        browserName = 'Edge浏览器(Microsoft Edge)'
      }else if(/firefox/i.test(userAgent)) {
        browserName = '火狐浏览器(Firefox)'
      } else if(/chrome/i.test(userAgent) && /webkit/i.test(userAgent) && /mozilla/i.test(userAgent)) {
        browserName = '谷歌浏览器(Chrome)'
      } else if(/opera/i.test(userAgent)) {
        browserName = '浏览器(opera)'
      } else if(/webkit/i.test(userAgent) &&!(/chrome/i.test(userAgent) && /webkit/i.test(userAgent) && /mozilla/i.test(userAgent))) {
        browserName = 'Safari浏览器(Safari)'
      } else {
        browserName = '不知道的浏览器'
      }
    }
    // 获取平台信息
    let firstIndex = userAgent.indexOf('(')
    let deviceEndIndex = userAgent.indexOf(';')
    let endIndex = userAgent.indexOf(')')
    deviceName = userAgent.substr(parseInt(firstIndex)+1,parseInt(deviceEndIndex)-parseInt(firstIndex))
    deviceMsg = userAgent.substr(parseInt(firstIndex),parseInt(endIndex)-parseInt(firstIndex)+1)

    if(isMobile) {
      str = '我是<strong>移动端</strong>，' + browserName + '<br/> 当前所在：<strong>' + deviceName + '</strong><br/> 其平台信息：'+ 
      deviceMsg + '<br/> 其浏览器版本：<strong>' + browserVersion + '</strong><br/> 具体是：' + userAgent
    } else {
      str = '我是<strong>PC端</strong>，' + browserName + '<br/> 当前所在：<strong>' + deviceName + '</strong><br/> 其平台信息：'+ 
      deviceMsg + '<br/> 其浏览器版本：<strong>' + browserVersion + '</strong><br/> 具体是：' + userAgent
    }
    if(isWeChat) {
      str += '<br>是微信内置浏览器'
    } else {
      str += '<br>不是微信内置浏览器'
    }
    return str
  }
  /**
   * 判断当前环境是否是微信内置浏览器
   * 有两种实现方式，match和test,这里用的是test方法
   * @return true/false true的话，就是微信浏览器
   */
  var isWeChatBrowser = function() {
    var userAgent = navigator.userAgent.toLowerCase(),
        regStr  = new RegExp('/micromessenger/i');
    return regStr.test(userAgent)
  }
  /**
   * 判断当前环境是否是微信内置浏览器
   * 有两种实现方式，match和test,这里用的是match方法
   * match() 会返回一个数组，所有匹配到的值，如果没有匹配到，就会返回空null
   * @return true/false true的话，就是微信浏览器
   */
  var isWeChatBrowserMatch = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    if(userAgent.match(/Micromessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }
  /**
   * 初始化
   */
  var init = function() {
    var userAgent = navigator.userAgent
    // 方法1：浏览器判断
    // $("#answer").html('我是'+userBrowser()+' 具体是：'+ userAgent)
    // 方法2：微信浏览器判断
    // if(isWeChatBrowserMatch()) {
    //   $("#answer").html('我是微信浏览器'+' 具体是：'+ userAgent)
    // } else {
    //   $("#answer").html('我不是微信浏览器'+' 具体是：'+ userAgent)
    // }
    // 方法3：全部判断
    $("#answer").html(browserJudge())
  }
  init()
})()