// 2024 Coding Challenge
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//     let result = '';
//     if (p1 == p2) {
//         result = 'Draw!';
//     } else if (p1 == 'rock' && p2 == 'paper') {
//         result = 'Player 2 won!';
//     } else if (p1 == 'rock' && p2 == 'scissors') {
//         result = 'Player 1 won!';
//     } else if (p1 == 'paper' && p2 == 'scissors') {
//         result = 'Player 2 won!';
//     } else if (p1 == 'paper' && p2 == 'rock') {
//         result = 'Player 1 won!';
//     } else if (p1 == 'scissors' && p2 == 'rock') {
//         result = 'Player 2 won!';
//     } else if (p1 == 'scissors' && p2 == 'paper') {
//         result = 'Player 1 won!';
//     }

//     return result;
// };

// const rps = (p1, p2) => {
//     let result = '';
//     if (p1 == p2) {
//         result = 'Draw!';
//     } else if (p1 == 'rock' && p2 == 'scissors') {
//         result = 'Player 1 won!';
//     } else if (p1 == 'paper' && p2 == 'rock') {
//         result = 'Player 1 won!';
//     } else if (p1 == 'scissors' && p2 == 'paper') {
//         result = 'Player 1 won!';
//     } else {
//         result = 'Player 2 won!';
//     }

//     return result;
// };

// const rps = (p1, p2) => p1 === p2 ? 'Draw!' : p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper' ? 'Player 1 won!' : 'Player 2 won!'

const rps = (p1, p2) => {
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'}`;
};


console.log(rps('rock', 'paper'));
console.log(rps('rock', 'rock'));
console.log(rps('paper', 'rock'));