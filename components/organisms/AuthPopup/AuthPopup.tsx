import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsGoogle } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import { uiActions } from '../../../state/uiSlice';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';
import useDatabase from '../../../hooks/useDatabase';
import BasicLink from '../../atoms/BasicLink/BasicLink';
import useForm from '../../../hooks/useForm';
import Loader from '../../atoms/Loader/Loader';

enum CallbackType {
	Login = 'login',
	Register = 'register',
}

const AuthPopup = () => {
	const dispatch = useAppDispatch();
	const { isAuthPopupOpen, isLoaderOpen } = useAppSelector(state => state.ui);
	const [loginBox, setLoginBox] = useState(true);
	const { authWithGoogle, signupCustomUser, authWithEmail } = useDatabase();
	const { values, errors, setInputValues, validateInputOnBlur, validateAllInputs, isError } =
		useForm();

	function submitForm(e: React.FormEvent<HTMLFormElement>, type: 'login' | 'register') {
		e.preventDefault();
		const inputsValidity = validateAllInputs((e.target as HTMLElement).querySelectorAll('input'));
		console.log(inputsValidity);

		if (isError || inputsValidity) return;

		if (type === CallbackType.Login) {
			authWithEmail(values.email, values.password);
		} else if (type === CallbackType.Register) {
			signupCustomUser(values.email_register, values.password_register);
		}
	}

	return (
		<div
			className={`popup-bg ${
				isAuthPopupOpen ? 'fixed' : 'hidden'
			} w-full h-full top-0 left-0 right-0 bottom-0 bg-zinc-800/50 backdrop-blur-sm`}>
			<div className='fixed flex flex-col h-full w-full top-[50%] left-[50%] py-lg px-lg text translate-x-[-50%] translate-y-[-50%]  bg-white rounded-xl md:min-w-[500px] min-h-[500px] md:max-w-[500px] md:h-auto md:w-auto overflow-y-auto'>
				<button
					onClick={() => dispatch(uiActions.toggleAuthPopup())}
					className='absolute top-0 right-0 text-md cursor-pointer pt-lg pl-sm pr-lg'>
					<MdOutlineCancel className=' text-fontLight ' />
				</button>
				<div className='flex items-start justify-center w-full pb-lg'>
					<Button
						otherStyles={` w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent text-md hover:bg-transparent after:origin-left
                        after:content-[""] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0
                        ${loginBox && 'font-semibold after:scale-x-100'}
                    `}
						onClickFn={() => setLoginBox(true)}>
						Log in
					</Button>
					<Button
						otherStyles={` w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent text-md hover:bg-transparent after:origin-left
                        after:content-[""] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0
                        ${!loginBox && 'font-semibold after:scale-x-100 '}
                        
                        `}
						onClickFn={() => setLoginBox(false)}>
						Sign up
					</Button>
				</div>
				{loginBox ? (
					<div className='flex flex-col items-center justify-center gap pt-lg'>
						<form
							onSubmit={e => submitForm(e, CallbackType.Login)}
							className='flex flex-col gap w-full h-full'>
							<InputWithLabel
								errors={errors}
								onChangeFunc={setInputValues}
								onBlurFunc={validateInputOnBlur}
								forProp='email'
								inputType='email'
								placeholderValue='Email adress here'>
								Email
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChangeFunc={setInputValues}
								onBlurFunc={validateInputOnBlur}
								forProp='password'
								inputType='password'
								placeholderValue='Password here'>
								Password
							</InputWithLabel>
							<Button isAccent={true} otherStyles='max-h-[5rem]'>
								Log in
							</Button>
						</form>
						<BasicLink hrefRoute={'/'}>I forgot password</BasicLink>
						<p className='font-semibold text text-font'>OR</p>
						<Button onClickFn={authWithGoogle} otherStyles='max-h-[5rem]'>
							Sign in with Gmail <BsGoogle />
						</Button>
					</div>
				) : (
					<div className='flex flex-col items-center justify-center gap pt-lg'>
						<form
							onSubmit={e => submitForm(e, CallbackType.Register)}
							className='flex flex-col gap w-full h-full'>
							<InputWithLabel
								errors={errors}
								onChangeFunc={setInputValues}
								onBlurFunc={validateInputOnBlur}
								forProp='email_register'
								inputType='email'
								placeholderValue='Email adress here'>
								Email
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChangeFunc={setInputValues}
								onBlurFunc={validateInputOnBlur}
								forProp='password_register'
								inputType='password'
								placeholderValue='Password here'>
								Password
							</InputWithLabel>
							<InputWithLabel
								errors={errors}
								onChangeFunc={setInputValues}
								onBlurFunc={validateInputOnBlur}
								forProp='password_repeat'
								inputType='password'
								placeholderValue='Password here'>
								Repeat password
							</InputWithLabel>
							<Button isAccent={true} otherStyles='max-h-[5rem]'>
								Sign up
							</Button>
						</form>

						<p className='font-semibold text text-font'>OR</p>
						<Button onClickFn={authWithGoogle} otherStyles='max-h-[5rem]'>
							Sign in with Gmail <BsGoogle />
						</Button>
						<p className='text-fontLight text-xs max-w-[300px] text-center'>
							By proceeding, you agree to{' '}
							<span className='font-semibold text-accentDark'>Oddy </span>
							Terms of Use & Privacy Policy.
						</p>
					</div>
				)}
				{isLoaderOpen && <Loader />}
			</div>
		</div>
	);
};

export default AuthPopup;
