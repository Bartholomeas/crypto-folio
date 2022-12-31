import React, { useState } from "react";
import { coinsActions } from "../state/coinsSlice";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";

interface InitialInputs {
	[key: string]: string;
	email: string;
	password: string;
	email_register: string;
	password_register: string;
	password_repeat: string;
}

const initialInputsState: InitialInputs = {
	email: "",
	password: "",
	email_register: "",
	password_register: "",
	password_repeat: "",
};

function useForm() {
	const dispatch = useAppDispatch();
	const { walletCoin } = useAppSelector((state) => state.coins);
	const [values, setValues] = useState(initialInputsState);
	const [errors, setErrors] = useState(initialInputsState);
	const [isError, setIsError] = useState(false);

	function setInputValues(event: React.ChangeEvent<HTMLInputElement>) {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	function validateEmail(email: string | null) {
		if (!email) return "";
		return email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	}

	function validateInput(name: string, value: string | null) {
		let error = "";
		error = !value ? `${name} is required` : "";

		if (
			(name === "email" || name === "email_register") &&
			!validateEmail(value) &&
			value !== ""
		) {
			setIsError(true);
			error = "invalid email";
		} else {
			error = !value ? `${name} is required` : "";
		}

		if (error) {
			setErrors((prevState) => ({
				...prevState,
				[name]: error,
			}));
		} else {
			setErrors({ ...errors, [name]: "" });
		}

		if (Object.values(errors).every((inputError) => inputError === "")) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	}

	function validateAllInputs(inputs: NodeListOf<HTMLInputElement>) {
		inputs.forEach((input: HTMLInputElement) => {
			const { name, value } = input;
			validateInput(name, value);
		});
		if (isError) return false;
		return true;
	}

	function validateInputOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		validateInput(name, value);
	}
	function setCoinPurchaseData(key: string, value: string | number) {
		dispatch(
			coinsActions.setWalletCoin({
				key,
				value,
			}),
		);

		console.log(walletCoin);
	}

	return {
		setInputValues,
		validateInputOnBlur,
		validateAllInputs,
		values,
		errors,
		isError,
		setCoinPurchaseData,
	};
}

export default useForm;
