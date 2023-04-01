function toggle(...vals) {
    var unset = {};
    var cur = unset;

    return function next(){
        // сохранить предыдущее значение
        // в конце списка

        if (cur != unset) {
            vals.push(cur);
        }
        cur = vals.shift();
        return cur;
    };
}
var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");
hello(); // "hello"
hello(); // "hello"
onOff(); // "on"
onOff(); // "off"
onOff(); // "on"
speed(); // "slow"
speed(); // "medium"
speed(); // "fast"
speed(); // "slow"
