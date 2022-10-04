import { useEffect, useState } from 'react';
import { MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { useAppSelector } from '../../../state/reduxHooks';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const NotificationPopup = ({ children }: Props) => {
	const { notificationPopup } = useAppSelector(state => state.ui);

	return (
		<div
			className={`flex fixed left-0 right-0 bottom-0 w-full h-auto min-h-[100px] max-h-[300px] p-md bg-white rounded-xl z-[10000] transition-transform ease-in shadow ${
				notificationPopup.isNotificationPopupOpen
					? ' translate-y-0 md:translate-y-[-10%]'
					: ' translate-y-[150%]'
			}
         md:max-w-[500px] md:left-[50%] md:translate-x-[-50%]`}>
			<span
				className={`absolute rounded-t-xl  w-full h-[2rem] left-0 top-0
            ${notificationPopup.isNotificationPopupSuccess ? 'bg-support' : 'bg-error'}`}></span>

			{notificationPopup.isNotificationPopupSuccess ? (
				<MdCheckCircle className='absolute text-[6rem] top-0 right-0 translate-x-[-50%] translate-y-[-40%] bg-white rounded-full text-supportDark ' />
			) : (
				<MdOutlineError className='absolute text-[6rem] top-0 right-0 translate-x-[-50%] translate-y-[-40%] bg-white rounded-full text-error ' />
			)}
			<div className='flex flex-col py-sm'>
				<p className='text-font font-bold text-md '>
					{notificationPopup.isNotificationPopupSuccess ? 'Success!' : 'Error'}
				</p>
				<p className=' text text-fontLight z-[100]'>{children}</p>
			</div>
		</div>
	);
};

export default NotificationPopup;
