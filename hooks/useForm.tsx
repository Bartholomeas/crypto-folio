import React, { useState } from 'react';

interface InitialInputs {
	[key: string]: string;
	email: string;
	password: string;
	email_register: string;
	password_register: string;
	password_repeat: string;
}

const initialInputsState: InitialInputs = {
	email: '',
	password: '',
	email_register: '',
	password_register: '',
	password_repeat: '',
};

const useForm = () => {
	const [values, setValues] = useState(initialInputsState);
	const [errors, setErrors] = useState({});

	function setInputValues(event: React.ChangeEvent<HTMLInputElement>) {
		setValues({ ...values, [event.target.name]: event.target.value });
		console.log(values);
	}

	function validateInputValue(event: React.ChangeEvent<HTMLInputElement> | any) {
		const { name, value } = event.target ? event.target : event;
		// console.log(name, value);
		let error = '';

		// console.log(errors);
		if (name === 'email') {
			error = !value ? 'Email is required' : '';
		}
		if (name === 'password') {
			error = !value ? 'Password is required' : '';
		}
		if (name === 'email_register') {
			error = !value ? 'Email is required' : '';
		}
		if (name === 'password_register') {
			error = !value ? 'Password is required' : '';
		}
		if (name === 'password_repeat') {
			error = !value ? 'Password is required' : '';
		}
		if (error) {
			setErrors({ ...errors, [name]: error });
		} else {
			setErrors({ ...errors, [name]: '' });
		}
	}

	function validateForm(inputs: NodeListOf<HTMLInputElement>) {
		inputs.forEach((input: HTMLInputElement) => {
			// validateInputValue(input);
			const { name, value } = input;

			if (!values[name]) {
				setErrors({ ...errors, [name]: `${name} is required` });
			}
			console.log(errors);
			// console.log(errors);
			// console.log(input.target);
			// console.log(input);
			// validateInputValue(input);
			// !value
			// 	? setErrors({ ...errors, [name]: `${name} is required` })
			// 	: setErrors({ ...errors, [name]: '' });
		});
		// console.log(errors);
	}

	return { setInputValues, validateInputValue, validateForm, values, errors };
};

export default useForm;

// } else if (!/\S+@\S+\.\S+/.test(values.email)) {
