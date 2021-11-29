interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]
	}
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, prop: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[prop]: ['require']
	};
}
function PositiveNumber(target: any, prop: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[prop]: ['positive']
	};
}

function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	let isValid = true;

	if (!objValidatorConfig) return true;

	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'require':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}

	return isValid;
}

class Course {
	@Require
	private title: string;
	@PositiveNumber
	private price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', e => {
	e.preventDefault();

	const titleEl = document.getElementById('title') as HTMLInputElement;
	const priceEl = document.getElementById('price') as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	if (!validate(new Course(title, price))) {
		alert('Invalid input');
		return;
	}
});