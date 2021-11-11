class Department {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	describe() {
		console.info(`Department: ${this.name}`);
	}
}

const accounting = new Department('Accounting');
accounting.describe();