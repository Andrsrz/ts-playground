type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// Intersection type
type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
	name: 'Andres',
	privileges: ['create-server'],
	startDate: new Date()
}

console.info(`I'm an intersection type object ${employee.name}`);