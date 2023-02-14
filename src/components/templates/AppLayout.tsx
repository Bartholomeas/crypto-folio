/* eslint-disable react/no-unknown-property */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import InfoPanel from "../organisms/InfoPanel";
import Navbar from "../organisms/Navbar";
import NotificationPopup from "../organisms/NotificationPopup";
import useUiHandling from "../../hooks/useUiHandling";
import { useAppSelector } from "../../state/reduxHooks";

interface Props {
	children: React.ReactNode;
}

function AppLayout({ children }: Props) {
	const { notificationPopup, lightMode } = useAppSelector((state) => state.ui);
	const { checkTheme } = useUiHandling();
	const { pathname } = useRouter();

	useEffect(() => {
		checkTheme();
	}, [lightMode]);

	return pathname !== "/" ? (
		<div
			className={`${
				lightMode && "dark"
			} max-w-maxWidth relative flex  items-center w-full  md:flex-row md:h-[100vh] `}
		>
			<Navbar />
			{children}

			<style jsx global>{`
				body {
					background: ${!lightMode ? "#FFFFF" : "#0B0F20"};
				}
			`}</style>

			<NotificationPopup>
				{notificationPopup.NotificationPopupContent}
			</NotificationPopup>
			<InfoPanel />
		</div>
	) : (
		<div>{children}</div>
	);
}

export default AppLayout;
