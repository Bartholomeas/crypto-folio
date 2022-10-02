import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import NavLinkItem from '../../atoms/NavLink/NavLink';
import NavListItem from '../../atoms/NavListItem/NavListItem';
import {
	MdDashboard,
	MdSettings,
	MdSearch,
	MdAccountBalanceWallet,
	MdHistory,
	MdLogout,
} from 'react-icons/md';
import ThemeSwitch from '../../molecules/ThemeSwitch/ThemeSwitch';
import { useRouter } from 'next/router';
import { uiActions } from '../../../state/uiSlice';
import Button from '../../atoms/Button/Button';
import useDatabase from '../../../hooks/useDatabase';
import { useEffect, useState } from 'react';
import BoxyLink from '../../atoms/BoxyLink/BoxyLink';

const Navbar = () => {
	const router = useRouter();
	const { isNavOpen, isThemeDark } = useAppSelector(state => state.ui);
	const { userData } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const { authWithGoogle, signOutGoogle, loggedIn, authChange } = useDatabase();

	return (
		<nav
			className='fixed h-[70px] flex flex-col w-full top-0 left-0 bg-white z-[1000] 
		md:relative md:h-full md:max-w-[180px] md:py-lg md:border-r-2 md:border-baseLight shadow-xl'>
			<div
				className='nav-wrapper flex justify-between items-center w-full
				 px-md py-sm
			 md:justify-center md:w-auto md:px-0 overflow-hidden'>
				<Logo />
				<BurgerButton onClickFn={() => dispatch(uiActions.toggleNavbar())} />
			</div>

			<div
				className={`nav-menu fixed flex flex-col justify-around items-center w-full  top-[70px] left-0 bottom-0 right-0 bg-white transition-transform overflow-hidden
				 md:relative md:justify-between md:top-0 md:w-full md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? 'translate-x-0' : 'translate-x-[100%] '
					}`}>
				<NavList>
					<NavListItem>
						<NavLinkItem route='/1' routerPath={router.pathname}>
							<MdSearch className='icon' />
							Explore
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/dashboard' routerPath={router.pathname}>
							<MdDashboard className='icon' />
							Dashboard
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/wallet' routerPath={router.pathname}>
							<MdAccountBalanceWallet className='icon' />
							Wallet
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/history' routerPath={router.pathname}>
							<MdHistory className='icon' />
							History
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/settings' routerPath={router.pathname}>
							<MdSettings className='icon' /> Settings
						</NavLinkItem>
					</NavListItem>
				</NavList>
				<div className='flex flex-col justify-center items-center gap-sm w-full px-md md:items-start'>
					{!loggedIn ? (
						<>
							<BoxyLink hrefRoute='/auth' isAccent={true}>
								Create account
							</BoxyLink>
							<Button onClickFn={authWithGoogle}>
								Log in <MdLogout />
							</Button>
						</>
					) : (
						<>
							<Button otherStyles='font-semibold bg-transparent' onClickFn={() => {}}>
								{userData.name}
							</Button>
							<Button otherStyles=' bg-transparent py-xs text-error ' onClickFn={signOutGoogle}>
								Logout
							</Button>
						</>
					)}

					<div className='flex items-center gap-sm w-full '>
						<Button
							onClickFn={() => {
								console.log('create acc btn');
							}}
							otherStyles='text-xs'>
							USD
						</Button>
						<ThemeSwitch
							toggleThemeFunc={() => dispatch(uiActions.toggleTheme())}
							isThemeDark={isThemeDark}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
