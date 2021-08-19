function addNumber(x: number, y: number): number {
	return x + y;
}

function useString(name: string): string {
	return `Your name is ${name}`;
}

// Function that can get union types, one or another
function print(output: string | number): void {
	console.log(`Your output is: ${output}`);
}

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
print(num);

// Type assertion and type guards
if(typeof rand === 'string')
	print(rand as string);
else
	print('Error - rand should be string');

// Literal types
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 2;
diceRoll = 6;
// diceRoll = 0; ERROR
