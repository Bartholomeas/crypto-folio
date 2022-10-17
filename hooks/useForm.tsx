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
	const [isError, setIsError] = useState(false);

	function setInputValues(event: React.ChangeEvent<HTMLInputElement>) {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	function validateAllInputs(inputs: NodeListOf<HTMLInputElement>) {
		inputs.forEach((input: HTMLInputElement) => {
			const { name, value } = input;
			validateInput(name, value);
		});
		if (isError) return false;
		return true;
	}

	function validateInput(name: string, value: string | null) {
		let error = '';
		error = !value ? `${name} is required` : '';

		if ((name === 'email' || name === 'email_register') && !validateEmail(value!) && value !== '') {
			setIsError(true);
			error = 'invalid email';
		} else {
			error = !value ? `${name} is required` : '';
		}

		if (error) {
			setErrors(prevState => ({
				...prevState,
				[name]: error,
			}));
		} else {
			setErrors({ ...errors, [name]: '' });
		}

		if (Object.values(errors).every(error => error === '')) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	}
	function validateEmail(email: string | undefined) {
		if (!email) return;
		return email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	}

	function validateInputOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		validateInput(name, value);
	}

	return { setInputValues, validateInputOnBlur, validateAllInputs, values, errors, isError };
};

export default useForm;
