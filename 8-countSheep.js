// 2024 Coding Challenge
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function (num) {
//     let sheep = "";
//     for (let i = 1; i <= num; i++) {
//         sheep += `${i} sheep...`;
//     }
//     return sheep;
// }

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));