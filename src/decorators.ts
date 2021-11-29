// Decorators often use the first letter as upper case
function Logger(logString: string) {
	return function (constructor: Function) {
		console.info(logString);
		console.info(constructor);
	}
}

// This should point to a function (not executing it)
// If using it as a decorator factory we can pass in N arguments
// Decorators execute when the class is defined
@Logger('Loggin - Persona')
class Persona {
	nombre = 'Andres';

	constructor() {
		console.info('Creating person object ...');
	}
}

// const persona = new Persona();
// console.info(persona);