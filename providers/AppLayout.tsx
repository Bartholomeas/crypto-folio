import React from 'react';
import InfoPanel from '../components/organisms/InfoPanel/InfoPanel';
import Navbar from '../components/organisms/Navbar/Navbar';
import NotificationPopup from '../components/organisms/NotificationPopup/NotificationPopup';
import { useAppSelector } from '../state/reduxHooks';
interface Props {
	children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
	const { notificationPopup } = useAppSelector(state => state.ui);
	return (
		<div className='relative flex items-center w-full  md:flex-row md:h-[100vh]'>
			<Navbar />
			{children}
			<NotificationPopup>{notificationPopup.NotificationPopupContent}</NotificationPopup>
			<InfoPanel />
		</div>
	);
};

export default AppLayout;
