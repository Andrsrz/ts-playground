class Department {
	private readonly employees: string[] = [];

	constructor(private readonly id: string, private name: string) {
	}

	describe(this: Department) {
		console.info(`Department(${this.id}): ${this.name}`);
	}

	addEmployee(this: Department, employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo(this: Department) {
		console.info(`${this.employees.length} ${this.employees}`);
	}
}

const accounting = new Department('101', 'Accounting');
accounting.describe();

accounting.addEmployee('Andres');
accounting.printEmployeeInfo();