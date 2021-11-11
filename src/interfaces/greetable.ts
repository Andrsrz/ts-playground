interface Greetable {
	name: string;
	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet(phrase: string): void {
		console.info(`${phrase} ${this.name}`);
	}
}

let user: Person;
user = new Person('Andres');
user.greet('Hello there');