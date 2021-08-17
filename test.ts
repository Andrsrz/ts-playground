function addNumber(x: number, y: number): number {
	return x + y;
}

function useString(name: string): string {
	return `Your name is ${name}`;
}

function print(output: string): void {
	console.log(`Your output is: ${output}`);
}

console.log(addNumber(2, 3));
console.log(useString('Andres'));
print('Testing');
