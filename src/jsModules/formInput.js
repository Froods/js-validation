let allFieldsValid = false;
const formInputs = [];

class FormInput {
	constructor(name, elem, type) {
		this.name = name;
		this.elem = elem;
		this.errorElem = this.elem.nextElementSibling;
		this.valid = false;
		this.myValue = '';

		if (type === 'email') {
			this.initEmailElem();
		}
		if (type === 'country') {
			this.initCountryElem();
		}
		if (type === 'postal') {
			this.initPostalElem();
		}
		if (type === 'pass') {
			this.initPassElem();
		}
		if (type === 'passConfirm') {
			this.initPassConfirmElem();
		}

		formInputs.push(this);
	}

	initEmailElem() {
		this.elem.addEventListener('input', () => {
			if (!this.elem.checkValidity()) {
				this.errorElem.className = 'error-text error-active';
				this.valid = false;
			} else {
				this.errorElem.className = 'error-text';
				this.valid = true;
			}
		});
	}
	initCountryElem() {
		this.elem.addEventListener('input', () => {
			if (!this.elem.value) {
				this.errorElem.className = 'error-text error-active';
				this.valid = false;
			} else {
				this.errorElem.className = 'error-text';
				this.valid = true;
			}
		});
	}
	initPostalElem() {
		this.elem.addEventListener('input', () => {
			this.elem.value = this.elem.value.replace(/\D/g, '');
		});
		this.elem.addEventListener('input', () => {
			if (!this.elem.checkValidity()) {
				this.errorElem.className = 'error-text error-active';
				this.valid = false;
				console.log(this.elem.checkValidity());
			} else {
				this.errorElem.className = 'error-text';
				this.valid = true;
			}
		});
	}
	initPassElem() {
		this.elem.addEventListener('input', () => {
			this.myValue = this.elem.value;
			if (!this.elem.value) {
				this.errorElem.className = 'error-text error-active';
				this.valid = false;
			} else {
				this.errorElem.className = 'error-text';
				this.valid = true;
			}
		});
	}
	initPassConfirmElem() {
		let originalPass;
		let originalPassIndex;
		for (let i = 0; i < formInputs.length; i++) {
			console.log(formInputs[i].name);
			if (formInputs[i].name === 'password') {
				originalPassIndex = i;
				console.log(originalPassIndex);
			}
		}
		this.elem.addEventListener('input', () => {
			originalPass = formInputs[originalPassIndex];
			console.log(originalPass.myValue);
			if (!this.elem.value || this.elem.value !== originalPass.myValue) {
				this.errorElem.className = 'error-text error-active';
				this.valid = false;
			} else {
				this.errorElem.className = 'error-text';
				this.valid = true;
			}
		});
	}
}

function checkAllInputsValidity() {
	let allValid = true;
	for (const elem of formInputs) {
		if (!elem.valid) {
			allValid = false;
		}
	}
	if (allValid) {
		allFieldsValid = true;
	}
}

function initForm() {
	const form = document.getElementById('form');

	form.addEventListener('submit', (e) => {
		checkAllInputsValidity();
		if (!allFieldsValid) {
			e.preventDefault();
		}
	});
}

export { FormInput, initForm };
