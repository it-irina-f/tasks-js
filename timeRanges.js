/*
Дан список отсутствий работников на рабочем месте, например [9,10] - с 9:00 до 10:00
Требуется вывести диапазоны часов, когда все работники были на местах. Рабочий день: 9-18 ч

input:
    [
        [9, 10],
        [15, 17],
        [14, 16],
    ]

output:
    [
        [10, 14],
        [17, 18],
    ]
*/

const res = [];

const workTime = [9, 18];

const input = [
    [9, 10],
    [15, 17],
    [14, 16],
];

let [start, end] = workTime;

input.sort((a, b) => b[1] - a[1]).forEach(([a, b]) => {

    if (b < end) res.unshift([b, end]);

    end = Math.min(a, end);

});

if (end > start) res.unshift([start, end]);

console.log(res);
