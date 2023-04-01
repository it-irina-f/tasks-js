/*
Функция range(..) получает в первом аргументе
число, представляющее первое числовое значение
в диапазоне. Второй аргумент также является числом,
представляющим вторую границу диапазона (включительно). Если второй аргумент опущен, должна
возвращаться другая функция, которая рассчитывает
получить этот аргумент.
function range(start,end) {
 // ..TODO..
}
range(3,3); // [3]
range(3,8); // [3,4,5,6,7,8]
range(3,0); // []

var start3 = range(3);
var start4 = range(4);
start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []
start4(6); // [4,5,6]
 */

function range(start,end) {
    start = Number(start) || 0;
    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start,end);
        };
    } else {
        end = Number(end) || 0;
        return getRange(start,end);
    }
    // **********************
    function getRange(start,end) {
        var ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
}

console.log(range(3,3));
console.log(range(3,8));
console.log(range(3,0));

var start3 = range(3);
var start4 = range(4);
console.log(start3(3));
console.log(start3(8));
console.log(start3(0));
console.log(start4(6));
