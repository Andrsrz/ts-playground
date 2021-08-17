function addNumber(x: number, y: number): number {
	return x + y;
}

function useString(name: string): string {
	return `Your name is ${name}`;
}

function print(output: number): void {
	console.log(`Your output is: ${output}`);
}

/* Enums */
enum Counter {
	One = 1,
	Two,
	Three
}

let num: Counter = Counter.Two;

console.log(addNumber(2, 3));
console.log(useString('Andres'));
print(num);
