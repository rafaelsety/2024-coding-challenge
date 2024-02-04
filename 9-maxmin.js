// 2024 Coding Challenge
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = function (list) {
//     let result = 0;

//     for (let i = 0; i < list.length; i++) {
//         if (i === 0 || list[i] < result) {
//             result = list[i];
//         }
//     }

//     return result;
// }

var min = function (list) {
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < result) {
            result = list[i];
        }
    }
    return result;
}

var max = function (list) {
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i];
        }
    }
    return result;
}

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

console.log(min([1, 2, 3]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));