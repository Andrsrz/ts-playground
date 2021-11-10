function addNumber(x: number, y: number): number {
	return x + y;
}

function useString(name: string): string {
	return `Your name is ${name}`;
}

// Type Alias
type StringAndNumber = string | number;

// Function that can get union types, one or another
function printTest(output: StringAndNumber): void {
	console.log(`Your output is: ${output}`);
}

let printTestAsFunc: (a: StringAndNumber) => void;
printTestAsFunc = printTest;

/* Enums */
enum Counter {
	One = 1,
	Two,
	Three
}

let num: Counter = Counter.Two;

let rand: unknown = 'Unkown type';
rand = 2;

console.log(addNumber(num, 3));
console.log(useString('Andres'));
printTestAsFunc(num);

// Type assertion and type guards
if (typeof rand === 'string')
	printTest(rand as string);
else
	printTest('Error - rand should be string');

// Literal types
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 2;
diceRoll = 6;
// diceRoll = 0; ERROR

// Arrays
function getAverage(arr: number[]): number {
	let average: number = 0;
	let sum: number = 0;

	arr.forEach(num => {
		sum += num;
	});

	average = sum / arr.length;

	return average;
}

let someArr: Array<number> = [3, 3, 3];
console.log(getAverage([1, 2, 3, 4]));
console.log(getAverage(someArr));

// Tuples (are array of objects?)
function sayWoof(dog: [string, number]): string {
	return dog[0] + ' is ' + dog[1] + ' years old and it wants you to say: Woof!';
}

let myDog: [string, number] = ['Coqueta', 2];
console.log(sayWoof(myDog));

// Objects
const person: {
	name: string;
	age: number;
	hobbies: string[];
} = {
	name: 'Andres',
	age: 26,
	hobbies: ['Sports', 'Videogames']
};

let favoriteActivities: string[];
favoriteActivities = ['Videogames'];

console.log(person.age);

person.hobbies.forEach(hobby => {
	console.log(hobby);
});

// Function that returns never
function generateError(message: string, code: number): never {
	throw { message, code };
}

generateError('This is an error message', 500);