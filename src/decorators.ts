// Decorators often use the first letter as upper case
function Logger(logString: string) {
	return function (constructor: Function) {
		console.info(logString);
		console.info(constructor);
	}
}

function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId);
		const persona = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h3')!.textContent = persona.nombre;
		}
	}
}

// This should point to a function (not executing it)
// If using it as a decorator factory we can pass in N arguments
// Decorators execute when the class is defined
// @Logger('Loggin - Persona')
@WithTemplate('<h3>Decorators Title</h3>', 'decorators')
class Persona {
	nombre = 'Andres';

	constructor() {
		console.info('Creating person object ...');
	}
}

// const persona = new Persona();
// console.info(persona);