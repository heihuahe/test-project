/**
 * 日期的函数封装
 * 月份：0-11
 * day: 从1开始
 */

var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay(); //本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); // 当前月
var nowYear = now.getFullYear(); // 当前年
var lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
var lastMonth = lastMonthDate.getMonth();

/** 
 * 获取距离今天几天的日期
 * 最近七天 getDateAwayToday(6)  7天，包含当天，所以是6
 * 最近三天 getDateAwayToday(2)
 */
function getDateAwayToday(days) {
    var today = new Date();
    var milliseconds = today.getTime(); // 从1970.1.1 0：0:0 距离当前时间的毫秒数
    var someDay = new Date(milliseconds + days*24*60*60*1000); // 计算某一天的毫秒数，从而生成那天的日期。
    return someDay;
}

/**
 * 获得本周的开始日期
 * 日= 当前日 - 当前日在本周的第几天 = 本周第一天的天数
 * 因为国外都是以周日为一周的起点，而国内是以周一，所以要把天数+1，才是我们概念上的本周开始日期。
 */
function getCurrentWeekStartDate() {
    var startDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
    return startDate;
}
/**
 * 获得本周的结束日期
 * 日 : 7（一周的天数）- 当前日在本周的第几天 == 本周最后一天的距当前天的天数差
 *      当前日的天数 + 天数差 = 本周最后一天的天数
 */
function getCurrentWeekEndDate() {
    var endDate = new Date(nowYear, nowMonth, nowDay + (7- nowDayOfWeek));
    return endDate;
}
/**
 *  获得上周的开始日期
 * 日 = nowDay - nowDayOfWeek -6 = nowDay - nowDayOfWeek + 1 -7(一周)
 */
function getLastWeekStartDate() {
    var startDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 6);
    return startDate;
}
// 获得上周的结束日期
/**
 * 日 = nowDay + (7- nowDayOfWeek) -7 = nowDay -nowDayOfWeek
 */
function getLastWeekEndDate() {
    var endDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    return endDate;
}

//获取某月的天数
function getMonthDaysNum(month) {
    var startDate = new Date(nowYear, month, 1); // 某月第一天
    var nextStartDate = new Date(nowYear, month+1, 1); // 某月下个月的第一天
    var daysNum = (nextStartDate - startDate) / (24*60*60*1000);
    return daysNum;
}
// 获得本月的开始日期
function getCurrentMonthStartDate() {
    var startDate = new Date(nowYear, nowMonth, 1);
    return startDate;
}
// 获得本月的结束日期
function getCurrentMonthEndDate() {
    var endDate = new Date(nowYear, nowMonth, getMonthDaysNum(nowMonth));
    return endDate;
}
// 获得上月的开始日期
function getLastMonthStartDate() {
    var year = nowYear;
    if(lastMonth == 11) { // 12月份
        year -= 1;
    }
    var lastMonthStartDate = new Date(year, lastMonth, 1);
    return lastMonthStartDate;
}
// 获得上月的结束日期
function getLastMonthEndDate() {
    var year = nowYear;
    if(lastMonth == 11) {
        year -= 1;
    }
    var endDate = new Date(year, lastMonth, getMonthDaysNum(lastMonth));
    return endDate;
}

// 获得本季度的开始月份
function getCurrentQuarterStartMonthNum() {
    var startMonth = 0;
    if(nowMonth < 3 ) {
        startMonth = 0;
    }
    if(2 < nowMonth && nowMonth < 6) {
        startMonth = 3;
    }
    if(5< nowMonth && nowMonth < 9) {
        startMonth = 6;
    }
    if(nowMonth > 8) {
        startMonth = 9;
    }
    return startMonth;
}
/**
 * 获得本季度的结束月份
 * 一季度3个月，间隔2个月。
 */
function getCurrentQuarterEndMonthNum() {
    var startMonth = getCurrentQuarterStartMonthNum()
    var endMonth = startMonth +2;
    return endMonth;
}
// 获得本季度开始日期
function getCurrentQuarterStartDate() {
    var startDate = new Date(nowYear, getCurrentQuarterStartMonthNum(), 1);
    return startDate;
}
// 获得本季度结束日期
function getCurrentQuarterEndDate() {
    var month = getCurrentQuarterEndMonthNum();
    var daysNum = getMonthDaysNum(month);
    var endDate = new Date(nowYear, month+2, daysNum);
    return endDate;
}
// 月份和日期的处理
function formatTo0X(num) {
    if(num.toString().length == 1) {
        num = '0' + num;
    }
    return num;
}

/**
 * 时间戳 = 毫秒值 / 1000 （也就是说，时间戳是以秒为单位的）
 */
function getTimeStamp () {
    var timeStamp = Date.parse(new Date())
    timeStamp = timeStamp / 1000;
    return timeStamp;
}
// 各种日期格式之间的转换
/**
 * Date对象 转成yyyy-mm-dd
 */
function formatToYYYY_MM_DD(date) {
    var year = date.getFullYear();
    var month = formatTo0X(date.getMonth()+1);
    var day = formatTo0X(date.getDate());
    return year + '-' + month + '-' + day;
}
/**
 * Date对象 转成yyyy-mm-dd hh:mm:ss
 * date 是日期对象
 */
function formatToYYYY_MM_DD2(date) {
    var year = date.getFullYear();
    var month = formatTo0X(date.getMonth()+1);
    var day = formatTo0X(date.getDate());
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var formateDate = year + '-' + month + '-' + day + ' ' + hour + ":" + minute + ":" +seconds;
    return formateDate;
}
/**
 * yyyyMMdd 转成 yyyy-mm-dd
 */
function formatToYYYY_MM_DD1FromYYYYMMDD(date) {
    var dateStr = date.toString();
    var pattern = /^(\d{4})(\d{2})(\d{2})$/;
    var formateDate = dateStr.replace(pattern, '$1-$2-$3');
    return formateDate;
}
/**
 * yyyy-mm-dd 转成 yyyymmdd
 */
function formatToYYYYMMDDFromYYYY_MM_DD(date) {
    var dateStr = date.toString();
}
/**
 * 获取某个日期的时间戳
 * 日期 转成时间戳
 */
function formatToTimeStampByDate(date) {
    var timeStamp = Date.parse(new Date(date));
    timeStamp = timeStamp / 1000;
    return timeStamp;
}
/**
 * 时间戳转成日期格式
 */
function formatToDateByTimeStamp(timeStamp) {
    var date = new Date(timeStamp * 1000);
    // date = date.toLocaleDateString();
    // 2018/11/15
    date = date.toLocaleString();
    // 2018/11/15 上午11:16:00
    // date = date.toLocaleTimeString();
    // 上午11:16:00
    return date;
}
/**
 * 通过正则格式转换（原型）√
 * 使用方法：var date = new Date(); date.format("yyyyMMdd")
 * 20181115： yyyyMMdd
 * 2018-11-15 : yyyy-MM-dd
 * 2018-11-15 11:33:00 :yyyy-MM-dd hh:mm:ss 这个有点问题
 */
Date.prototype.format = function(format) {
    var date = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
    };
    if(/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for(var k in date) {
        if(new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}


use();
function use() {
    var today = document.getElementById("today");
    var todayFormat = document.getElementById("today_format");
    var recent7 = document.getElementById("recent7");
    var recent7Format = document.getElementById("recent7_format");
    var currentWeekStartDate = document.getElementById("current_week_start_date");
    var currentWeekStartDateFormat = document.getElementById("current_week_start_date_format");
    var currentWeekEndDate = document.getElementById("current_week_end_date");
    var currentWeekEndDateFormat = document.getElementById("current_week_end_date_format");
    var lastWeekStartDate = document.getElementById("last_week_start_date");
    var lastWeekStartDateFormat = document.getElementById("last_week_start_date_format");
    var lastWeekEndDate = document.getElementById("last_week_end_date");
    var lastWeekEndDateFormat = document.getElementById("last_week_end_date_format");
    var currentMonthStartDate = document.getElementById("current_month_start_date");
    var currentMonthStartDateFormat = document.getElementById("current_month_start_date_format");
    var currentMonthEndDate = document.getElementById("current_month_end_date");
    var currentMonthEndDateFormat = document.getElementById("current_month_end_date_format");
    var lastMonthStartDate = document.getElementById("last_month_start_date");
    var lastMonthStartDateFormat = document.getElementById("last_month_start_date_format");
    var lastMonthEndDate = document.getElementById("last_month_end_date");
    var lastMonthEndDateFormat = document.getElementById("last_month_end_date_format");

    today.textContent = now;
    todayFormat.textContent = formatToYYYY_MM_DD(now);
    recent7.textContent = getDateAwayToday(7);
    recent7Format.textContent = formatToYYYY_MM_DD(getDateAwayToday(7));
    currentWeekStartDate.textContent = getCurrentWeekStartDate();
    currentWeekStartDateFormat.textContent = formatToYYYY_MM_DD(getCurrentWeekStartDate());
    currentWeekEndDate.textContent = getCurrentWeekEndDate();
    currentWeekEndDateFormat.textContent = formatToYYYY_MM_DD(getCurrentWeekEndDate());
    lastWeekStartDate.textContent = getLastWeekStartDate();
    lastWeekStartDateFormat.textContent = formatToYYYY_MM_DD(getLastWeekStartDate());
    lastWeekEndDate.textContent = getLastWeekEndDate();
    lastWeekEndDateFormat.textContent = formatToYYYY_MM_DD(getLastWeekEndDate());
    currentMonthStartDate.textContent = getCurrentMonthStartDate();
    currentMonthStartDateFormat.textContent = formatToYYYY_MM_DD(getCurrentMonthStartDate());
    currentMonthEndDate.textContent = getCurrentMonthEndDate();
    currentMonthEndDateFormat.textContent = formatToYYYY_MM_DD(getCurrentMonthEndDate());
    lastMonthStartDate.textContent = getLastMonthStartDate();
    lastMonthStartDateFormat.textContent = formatToYYYY_MM_DD(getLastMonthStartDate());
    lastMonthEndDate.textContent = getLastMonthEndDate();
    lastMonthEndDateFormat.textContent = formatToYYYY_MM_DD(getLastMonthEndDate());
}