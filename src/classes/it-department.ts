class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}

	addEmployee(employee: string) {
		if (employee !== 'Arturo') {
			this.employees.push(employee);
		}
	}
}

const it = new ITDepartment('201', ['Arturo']);
it.describe();
it.addEmployee('Andres');
console.info(it);
