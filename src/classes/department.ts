class Department {
	private name: string;
	private employees: string[] = [];

	constructor(name: string) {
		this.name = name;
	}

	describe(this: Department) {
		console.info(`Department: ${this.name}`);
	}

	addEmployee(this: Department, employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo(this: Department) {
		console.info(`${this.employees.length} ${this.employees}`);
	}
}

const accounting = new Department('Accounting');
accounting.describe();

accounting.addEmployee('Andres');
accounting.printEmployeeInfo();