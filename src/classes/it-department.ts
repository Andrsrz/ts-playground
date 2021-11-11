class ITDepartment extends Department {
	admins: string[];
	private static instance: ITDepartment;

	private constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}

	static getInstance() {
		if (ITDepartment.instance) {
			return this.instance;
		}
		this.instance = new ITDepartment('201', ['Arturo']);
		return this.instance;
	}

	describe() { }

	addEmployee(employee: string) {
		if (employee !== 'Arturo') {
			this.employees.push(employee);
		}
	}
}

const it = ITDepartment.getInstance();
it.describe();
it.addEmployee('Andres');
console.info(it);
