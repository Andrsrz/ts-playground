const names: Array<string> = ['Andres'];

const promise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve('Done');
	}, 2000);
});

promise.then(data => {
	data.split(' ');
});

// Own generic types
// Extends for constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const merged = merge({ name: 'Andres', hobbies: ['Games', 'Sports'] }, { age: 26 });
console.info(merged);