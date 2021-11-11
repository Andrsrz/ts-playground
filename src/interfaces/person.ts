interface Person {
	name: string;
	age: number;

	greet(phrase: string): void;
}

let user: Person;
user = {
	name: 'Andres',
	age: 26,
	greet(phrase: string) {
		console.info(`${phrase} ${this.name}`);
	}
};

user.greet('Hello there');