import React, { useState } from 'react';

interface InitialInputs {
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

	function validateInputValue(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
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

	return { setInputValues, validateInputValue, values, errors };
};

export default useForm;

// } else if (!/\S+@\S+\.\S+/.test(values.email)) {
