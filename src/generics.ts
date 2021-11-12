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

// More practice
interface Lenghty {
	length: number
}

function countAndDescribe<T extends Lenghty>(element: T) {
	let description = 'Got no value';

	if (element.length === 1) {
		description = 'Got 1 element';
	} else if (element.length > 1) {
		description = `Got ${element.length} elements`;
	}

	return [element, description];
}

console.info(countAndDescribe('This is an element to test upper function'));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return `Value ${obj[key]}`;
}

console.info(extractAndConvert({ name: 'Andres', age: 26 }, 'age'));

// Generic Classes
class DataStorage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
};

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

textStorage.addItem('Coqueta');
numberStorage.addItem(3);

console.info(`${textStorage.getItems()}, ${numberStorage.getItems()}`);