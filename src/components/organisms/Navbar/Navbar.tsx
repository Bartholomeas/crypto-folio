import {
	MdDashboard,
	MdSettings,
	MdSearch,
	MdAccountBalanceWallet,
	MdHistory,
	MdLogout,
} from "react-icons/md";
import { useRouter } from "next/router";
import BurgerButton from "../../atoms/BurgerButton/BurgerButton";
import Logo from "../../atoms/Logo/Logo";
import NavList from "../../molecules/NavList/NavList";
import { useAppDispatch, useAppSelector } from "../../../state/reduxHooks";
import NavLinkItem from "../../atoms/NavLink/NavLink";
import NavListItem from "../../atoms/NavListItem/NavListItem";
import ThemeSwitch from "../../molecules/ThemeSwitch/ThemeSwitch";
import { uiActions } from "../../../state/uiSlice";
import Button from "../../atoms/Button/Button";
import useDatabase from "../../../hooks/useDatabase";
import AuthModal from "../AuthModal/AuthModal";
import useUiHandling from "../../../hooks/useUiHandling";

function Navbar() {
	const router = useRouter();
	const { isNavOpen, lightMode } = useAppSelector((state) => state.ui);
	const { userData } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const { toggleTheme, openAuthModal } = useUiHandling();
	const { signoutUser, loggedIn } = useDatabase();

	return (
		<nav
			className="dark:bg-dmBase dark:border-dmBorderColor dark:shadow-none
			 fixed h-[70px] flex flex-col w-full top-0 left-0 bg-white z-[99999]
			border-b-2 border-baseLight
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
				className={`dark:bg-dmBase  nav-menu fixed flex flex-col justify-around items-center w-full  top-[70px] left-0 bottom-0 right-0 bg-white  transition-transform overflow-hidden
				 md:relative md:justify-between md:top-0 md:w-full md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? "translate-x-0" : "translate-x-[100%] "
					}`}
			>
				<NavList>
					<NavListItem>
						<NavLinkItem route="/1" routerPath={router.pathname}>
							<MdSearch className=" icon" />
							Explore
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route="/dashboard" routerPath={router.pathname}>
							<MdDashboard className="icon" />
							Dashboard
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route="/wallet" routerPath={router.pathname}>
							<MdAccountBalanceWallet className="icon" />
							Wallet
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route="/history" routerPath={router.pathname}>
							<MdHistory className="icon" />
							History
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route="/settings" routerPath={router.pathname}>
							<MdSettings className="icon" /> Settings
						</NavLinkItem>
					</NavListItem>
				</NavList>
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
