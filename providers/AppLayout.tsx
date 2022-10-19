import React, { useEffect } from 'react';
import InfoPanel from '../components/organisms/InfoPanel/InfoPanel';
import Navbar from '../components/organisms/Navbar/Navbar';
import NotificationPopup from '../components/organisms/NotificationPopup/NotificationPopup';
import useUiHandling from '../hooks/useUi';
import { useAppSelector } from '../state/reduxHooks';
interface Props {
	children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
	const { notificationPopup, lightMode } = useAppSelector(state => state.ui);

	const { checkTheme } = useUiHandling();

	useEffect(() => {
		checkTheme();
	}, [lightMode]);

	return (
		<div
			className={`${
				lightMode && 'dark'
			} relative flex  items-center w-full  md:flex-row md:h-[100vh] `}>
			<Navbar />
			{children}
			<NotificationPopup>{notificationPopup.NotificationPopupContent}</NotificationPopup>
			<InfoPanel />
		</div>
	);
};

export default AppLayout;
