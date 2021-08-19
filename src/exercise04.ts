// /* EXERCISE 4
//    TODO: Declare the array as the type to match the type of the items in the array. */

// let randomNumbers;
// let nextNumber;
// for (let i = 0; i < 10; i++) {
//     nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
//     randomNumbers.push(nextNumber);
// }

// console.log(randomNumbers);

const MAX: number = 10;
const HUNDRED: number = 100;
let randomNumbers: Array<number> = [];
let nextNumber: number = 0;

for(let i: number = 0; i < MAX; i++){
	nextNumber = Math.floor(Math.random() * (HUNDRED -1)) + 1;
	randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
