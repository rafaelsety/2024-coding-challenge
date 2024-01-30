// 2024 Coding Challenge
// 2/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//     if (bullets / 2 >= dragons) {
//         return true;
//     } else (bullets / 2 < dragons) {
//         return false;
//     }
// }

// function hero(bullets, dragons) {
//     return bullets / 2 >= dragons ? true : false;
// }

// const hero = (bullets, dragons) => bullets / 2 >= dragons;

const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(2, 1));