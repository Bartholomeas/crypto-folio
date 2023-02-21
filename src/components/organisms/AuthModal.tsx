import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";
import { uiActions } from "../../state/uiSlice";
import Button from "../atoms/Button";
import InputWithLabel from "../molecules/InputWithLabel";

import useForm from "../../hooks/useForm";
import Loader from "../atoms/Loader";
import useLogin from "../../hooks/useLogin";
import useRegister from "../../hooks/useRegister";
import GenericLink from "../atoms/GenericLink";

enum CallbackType {
	Login = "login",
	Register = "register",
}

function AuthModal() {
	const dispatch = useAppDispatch();
	const { isAuthModalOpen, isLoaderOpen } = useAppSelector((state) => state.ui);
	const [loginBox, setLoginBox] = useState(true);
	const { authWithGoogle, authWithEmail } = useLogin();
	const { signupCustomUser } = useRegister();
	const {
		values,
		errors,
		setInputValues,
		validateInputOnBlur,
		validateAllInputs,
		isError,
	} = useForm();

	function submitForm(
		e: React.FormEvent<HTMLFormElement>,
		type: "login" | "register",
	) {
		e.preventDefault();
		const inputsValidity = validateAllInputs(
			(e.target as HTMLElement).querySelectorAll("input"),
		);

		if (isError || !inputsValidity) return;

		if (type === CallbackType.Login) {
			authWithEmail(values.email, values.password);
		} else if (type === CallbackType.Register) {
			signupCustomUser(values.email_register, values.password_register);
		}
	}

	return (
		<div
			className={`popup-bg ${
				isAuthModalOpen ? "fixed" : "hidden"
			} w-full h-full top-0 left-0 right-0 bottom-0 bg-zinc-800/50 backdrop-blur-sm`}
		>
			<div
				className="dark:bg-dmBase
			 fixed flex flex-col h-full w-full top-[50%] left-[50%] py-lg px-lg text translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl md:min-w-[500px] min-h-[500px] md:max-w-[500px] md:h-auto md:w-auto overflow-y-auto"
			>
				<button
					type="button"
					onClick={() => dispatch(uiActions.toggleAuthModal())}
					className="absolute top-0 right-0 text-md cursor-pointer pt-lg pl-sm pr-lg"
				>
					<MdOutlineCancel className=" text-fontLight " />
				</button>
				<div className="flex items-start justify-center w-full pb-lg">
					<Button
						theme="modal"
						conditionalCheck={loginBox}
						onClick={() => setLoginBox(true)}
					>
						Log in
					</Button>
					<Button
						theme="modal"
						conditionalCheck={!loginBox}
						onClick={() => setLoginBox(false)}
					>
						Sign up
					</Button>
				</div>
				{loginBox ? (
					<div className="flex flex-col items-center justify-center gap pt-lg">
						<form
							onSubmit={(e) => submitForm(e, CallbackType.Login)}
							className="flex flex-col gap w-full h-full"
						>
							<InputWithLabel
								errors={errors}
								onChange={setInputValues}
								onBlur={validateInputOnBlur}
								forProp="email"
								inputType="email"
								placeholderValue="Email adress here"
							>
								Email
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChange={setInputValues}
								onBlur={validateInputOnBlur}
								forProp="password"
								inputType="password"
								placeholderValue="Password here"
							>
								Password
							</InputWithLabel>
							<Button typeSubmit theme="accent">
								Log in
							</Button>
						</form>
						<GenericLink href="/">I forgot password</GenericLink>
						<p className="dark:text-dmFont font-semibold text text-font">OR</p>
						<Button onClick={authWithGoogle} icon="google">
							Sign in with Gmail
						</Button>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center gap pt-lg">
						<form
							onSubmit={(e) => submitForm(e, CallbackType.Register)}
							className="flex flex-col gap w-full h-full"
						>
							<InputWithLabel
								errors={errors}
								onChange={setInputValues}
								onBlur={validateInputOnBlur}
								forProp="email_register"
								inputType="email"
								placeholderValue="Email adress here"
							>
								Email
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChange={setInputValues}
								onBlur={validateInputOnBlur}
								forProp="password_register"
								inputType="password"
								placeholderValue="Password here"
							>
								Password
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChange={setInputValues}
								onBlur={validateInputOnBlur}
								forProp="password_repeat"
								inputType="password"
								placeholderValue="Password here"
							>
								Repeat password
							</InputWithLabel>
							<Button typeSubmit theme="accent">
								Sign in
							</Button>
						</form>

						<p className="dark:text-dmFont font-semibold text text-font">OR</p>
						<Button onClick={authWithGoogle} icon="google">
							Sign in with Gmail
						</Button>
						<p className="text-fontLight text-xs max-w-[300px] text-center">
							By proceeding, you agree to{" "}
							<span className="dark:text-supportDark font-semibold text-accentDark">
								Oddy{" "}
							</span>
							Terms of Use & Privacy Policy.
						</p>
					</div>
				)}
				{isLoaderOpen && <Loader />}
			</div>
		</div>
	);
}

export default AuthModal;
