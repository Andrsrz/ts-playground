function addNumber(x: number, y: number): number {
	return x + y;
}

function useString(name: string): string {
	return `Your name is ${name}`;
}

function print(output: string): void {
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

// Type assertion and type guards
if(typeof rand === 'string')
	print(rand as string);
else
	print('Error - rand should be string');
