// Decorators often use the first letter as upper case
function Logger(constructor: Function) {
	console.info('Loggin...');
	console.info(constructor);
}

// This should point to a function (not executing it)
// Decorators execute when the class is defined
@Logger
class Persona {
	nombre = 'Andres';

	constructor() {
		console.info('Creating person object ...');
	}
}

// const persona = new Persona();
// console.info(persona);