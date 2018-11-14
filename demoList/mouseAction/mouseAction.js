function mouseOver() {
    var overlay = document.getElementById('seldiv');
    startrun(overlay, "opacity", 100.0);
}
function mouseOut() {
    var overlay = document.getElementById('seldiv');
    startrun(overlay, "opacity", 0.0);

}
/**控制显示速度 */
function startrun(obj, attr, target, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var cur = 0;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getstyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getstyle(obj, attr));
        }
        var speed = (target - cur) / 10; //数据越小，速度越慢
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (cur == target) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        } else {
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    }, 30);
}
function getstyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}