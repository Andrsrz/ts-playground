// Decorators can be used in classes, properties, accessors, methods and method's arguments
// Decorators often use the first letter as upper case
function Logger(logString: string) {
	return function (constructor: Function) {
		console.info(logString);
		console.info(constructor);
	}
}

function WithTemplate(template: string, hookId: string) {
	return function <T extends { new(...args: any[]): { nombre: string } }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.info('Rendering template');
				const hookEl = document.getElementById(hookId);

				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h3')!.textContent = this.nombre;
				}
			}
		}
	}
}

// object structure, property name
function LogProperty(target: any, propertyName: string | Symbol) {
	console.info('Property decorator');
	console.info(target, propertyName);
}

// This should point to a function (not executing it)
// If using it as a decorator factory we can pass in N arguments
// Decorators execute when the class is defined
@Logger('Loggin - Persona')
@WithTemplate('<h3>Decorators Title</h3>', 'decorators')
// Execute bottom-up
class Persona {
	@LogProperty
	nombre = 'Andres';

	constructor() {
		console.info('Creating person object ...');
	}
}

const persona = new Persona();