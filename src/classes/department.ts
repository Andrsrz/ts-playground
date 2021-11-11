class Department {
	static fisicalYear = 2021;

	protected readonly employees: string[] = [];

	constructor(private readonly id: string, private name: string) {
	}

	static createEmployee(name: string) {
		return { name: name };
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

const employee1 = Department.createEmployee('Frida');
console.info(employee1, Department.fisicalYear);

accounting.addEmployee('Andres');
accounting.printEmployeeInfo();