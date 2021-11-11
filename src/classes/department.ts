abstract class Department {
	static fisicalYear = 2021;

	protected readonly employees: string[] = [];

	constructor(private readonly id: string, private name: string) {
	}

	static createEmployee(name: string) {
		return { name: name };
	}

	abstract describe(this: Department): void;

	addEmployee(this: Department, employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo(this: Department) {
		console.info(`${this.employees.length} ${this.employees}`);
	}
}