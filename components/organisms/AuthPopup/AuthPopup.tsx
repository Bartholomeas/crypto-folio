import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import { uiActions } from '../../../state/uiSlice';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';

interface Props {}

const AuthPopup = () => {
	const dispatch = useAppDispatch();
	const { isAuthPopupOpen } = useAppSelector(state => state.ui);
	const [loginBox, setLoginBox] = useState(true);

	return (
		<div
			className={`popup-bg ${
				isAuthPopupOpen ? 'fixed' : 'hidden'
			} w-full h-full top-0 left-0 right-0 bottom-0 bg-zinc-800/50 backdrop-blur-sm`}>
			<div
				className='fixed flex flex-col top-[50%] left-[50%] py px-lg text translate-x-[-50%] translate-y-[-50%] md:min-w-[500px] min-h-[500px] h-full w-full bg-white rounded-lg
            md:h-auto md:w-auto'>
				<button
					onClick={() => dispatch(uiActions.toggleAuthPopup())}
					className='absolute top-0 right-0 text-md cursor-pointer py pl-sm pr-lg'>
					<MdOutlineCancel className=' text-accent ' />
				</button>
				<div className='flex items-start justify-center w-full pb-lg'>
					<Button
						otherStyles={` w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent hover:bg-transparent after:origin-left
                        after:content-[""] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0
                        ${loginBox && 'font-semibold after:scale-x-100'}
                    `}
						onClickFn={() => setLoginBox(true)}>
						Log in
					</Button>
					<Button
						otherStyles={` w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent hover:bg-transparent after:origin-left
                        after:content-[""] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0
                        ${!loginBox && 'font-semibold after:scale-x-100 '}
                        
                        `}
						onClickFn={() => setLoginBox(false)}>
						Sign up
					</Button>
				</div>
				<div className='flex flex-col gap-lg pt-lg'>
					<div className='flex flex-col gap w-full h-full'>
						<InputWithLabel forProp='email' inputType='email' placeholderValue='Email adress here'>
							Email
						</InputWithLabel>
						<InputWithLabel
							forProp='password'
							inputType='password'
							placeholderValue='Password here'>
							Password
						</InputWithLabel>
					</div>

					<Button isAccent={true} onClickFn={() => {}} otherStyles='max-h-[5rem]'>
						Log in
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AuthPopup;
