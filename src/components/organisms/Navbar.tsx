import {
	MdDashboard,
	MdSettings,
	MdSearch,
	MdAccountBalanceWallet,
	MdHistory,
} from "react-icons/md";

import { IconType } from "react-icons";
import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";
import { uiActions } from "../../state/uiSlice";
import useUiHandling from "../../hooks/useUiHandling";
import useLogin from "../../hooks/useLogin";

import GenericLink from "../atoms/GenericLink";
import BurgerButton from "../atoms/BurgerButton";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

import ThemeSwitch from "../molecules/ThemeSwitch";

import AuthModal from "./AuthModal";

function Navbar() {
	const { isNavOpen, lightMode } = useAppSelector((state) => state.ui);
	const { userData } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const { toggleTheme, openAuthModal } = useUiHandling();
	const { signoutUser, loggedIn } = useLogin();

	return (
		<nav
			className="dark:bg-base-100 dark:border-dmBorderColor dark:shadow-none
			 fixed h-[70px] flex flex-col w-full top-0 left-0 z-[999]
			border-b-2 border-base-100
		md:relative md:h-full md:max-w-[180px] md:py-lg md:border-r-2 md:border-b-0 "
		>
			<div
				className="nav-wrapper flex justify-between items-center w-full
				 px-md py-sm
			 md:justify-center md:i	tems-start md:w-auto md:px-0 overflow-hidden "
			>
				<Logo />
				<BurgerButton onClick={() => dispatch(uiActions.toggleNavbar())} />
			</div>

			<div
				className={`navbar nav-menu fixed flex flex-col justify-around items-center w-full top-[70px] left-0 bottom-0 right-0 bg-white transition-transform overflow-hidden
				 md:relative md:justify-between md:top-0 md:w-full md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? "translate-x-0" : "translate-x-[100%] "
					}`}
			>
				<ul className="menu bg-base-100 rounded-box ">
					<ListLink href="/1" icon="explore">
						Explore
					</ListLink>
					{/* <li className="link">
						<GenericLink href="/1">
							<MdSearch className=" icon" />
							Explore
						</GenericLink>
					</li> */}
					<ListLink href="/dashboard" icon="dashboard">
						Explore
					</ListLink>

					{/* <li className="link">
						<GenericLink href="/dashboard">
							<MdDashboard className="icon" />
							Dashboard
						</GenericLink>
					</li> */}
					<ListLink href="/wallet" icon="wallet">
						Wallet
					</ListLink>

					{/* <li className="link">
						<GenericLink href="/wallet">
							<MdAccountBalanceWallet className="icon" />
							Wallet
						</GenericLink>
					</li> */}
					<ListLink href="/history" icon="history">
						History
					</ListLink>

					{/* <li className="link">
						<GenericLink href="/history">
							<MdHistory className="icon" />
							History
						</GenericLink>
					</li> */}
					<ListLink href="/settings" icon="settings">
						Settings
					</ListLink>

					{/* <li className="link">
						<GenericLink href="/settings">
							<MdSettings className="icon" /> Settings
						</GenericLink>
					</li> */}
				</ul>
				<div className="flex flex-col justify-center items-center gap-sm w-full px-md md:items-start">
					{!loggedIn ? (
						<Button size="full" icon="logout" onClick={openAuthModal}>
							Log in
						</Button>
					) : (
						<>
							<Button onClick={() => {}}>
								{userData.name || userData.email}
							</Button>
							<Button theme="error" size="full" onClick={signoutUser}>
								Logout
							</Button>
						</>
					)}

					<div className="flex items-center gap-sm w-full">
						<Button size="full">USD</Button>
						<ThemeSwitch
							toggleThemeFunc={toggleTheme}
							isThemeDark={lightMode}
						/>
					</div>
				</div>
			</div>
			<AuthModal />
		</nav>
	);
}

export default Navbar;

enum IconsEnum {
	explore = "explore",
	dashboard = "dashboard",
	wallet = "wallet",
	settings = "settings",
	history = "history",
}
type IIcons = {
	[key in IconsEnum]: JSX.Element;
};
type IconKey = keyof typeof IconsEnum;
interface IListLink {
	href: string;
	icon?: IconKey;
}

type ListLinkProps = React.PropsWithChildren<IListLink>;
function ListLink({ href, icon = "explore", children }: ListLinkProps) {
	const icons: IIcons = {
		explore: <MdSearch />,
		dashboard: <MdDashboard />,
		wallet: <MdAccountBalanceWallet />,
		settings: <MdSettings />,
		history: <MdHistory />,
	};

	return (
		<li className="link">
			<GenericLink href={href}>
				{/* <MdAccountBalanceWallet className="icon" /> */}
				{icons[icon]}
				{children}
			</GenericLink>
		</li>
	);
}
