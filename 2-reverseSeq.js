// 2024 Coding Challenge
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    const result = [];

    let i = 0;
    while (i < n) {
        result.push(n);
        result[i] -= i;
        i++;
    }

    // for (let i = n; i >= 1; i--) {
    //     result.push(i);
    // }

    return result;

    // return [...Array(n)].map((el, i) => i + 1).reverse();
    // return Array(n).fill().map((el, i) => i + 1).reverse();
    // return [...Array(n)].map((el, i) => n - i);
};

console.log(reverseSeq(5));