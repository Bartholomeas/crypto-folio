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
	const [errors, setErrors] = useState(initialInputsState);

	function setInputValues(event: React.ChangeEvent<HTMLInputElement>) {
		setValues({ ...values, [event.target.name]: event.target.value });
		console.log(values);
	}

	function validateInput(name: string, value: string | null) {
		let error = '';

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
			setErrors(prevState => ({
				...prevState,
				[name]: error,
			}));
		} else {
			setErrors({ ...errors, [name]: '' });
		}
	}

	function validateInputOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		validateInput(name, value);
	}

	function validateAllInputs(inputs: NodeListOf<HTMLInputElement>) {
		console.log(errors);
		inputs.forEach((input: HTMLInputElement) => {
			const { name, value } = input;
			validateInput(name, value);
			console.log(input);
		});
	}

	return { setInputValues, validateInputOnBlur, validateAllInputs, values, errors };
};

export default useForm;

// } else if (!/\S+@\S+\.\S+/.test(values.email)) {
