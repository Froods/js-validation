import './styles.css';
import { FormInput, initForm } from './jsModules/formInput';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const email = new FormInput('email', document.getElementById('email'), 'email');
const country = new FormInput(
	'country',
	document.getElementById('country'),
	'country',
);
const postal = new FormInput(
	'postal',
	document.getElementById('postal-code'),
	'postal',
);
const pass = new FormInput(
	'password',
	document.getElementById('password'),
	'pass',
);
const passConfirm = new FormInput(
	'passConfirm',
	document.getElementById('password-confirm'),
	'passConfirm',
);
initForm();
