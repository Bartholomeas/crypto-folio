import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import NavLinkItem from '../../atoms/NavLink/NavLink';
import NavListItem from '../../atoms/NavListItem/NavListItem';
import { MdDashboard, MdSettings, MdSearch, MdAccountBalanceWallet, MdHistory, MdLogout } from 'react-icons/md';
import ThemeSwitch from '../../molecules/ThemeSwitch/ThemeSwitch';
import { useRouter } from 'next/router';
import { uiActions } from '../../../state/uiSlice';
import Searchbr from '../Searchbar/Searchbar';

const Navbar = () => {
	const router = useRouter();
	const { isNavOpen, isThemeDark } = useAppSelector(state => state.ui);
	const dispatch = useAppDispatch();

	const languages = {
		english: 'ENG',
		polish: 'PL',
		german: 'GER',
	};
	const currencies = {
		dollar: 'USD',
		zloty: 'PLN',
		euro: 'EUR',
	};

	return (
		<nav
			className='fixed h-[70px] flex flex-col w-full top-0 left-0 bg-baseLight z-200 z-[1000] 
		md:relative md:h-full md:max-w-[180px] md:py-lg'>
			<div
				className='nav-wrapper flex justify-between items-center w-full
				 px-md py-sm
			 md:justify-center md:w-auto md:px-0 overflow-hidden'>
				<Logo />
				<BurgerButton onClickFn={() => dispatch(uiActions.toggleNavbar())} />
			</div>

			<div
				className={`nav-menu fixed flex flex-col justify-around items-center w-full  top-[70px] left-0 bottom-0 right-0 bg-baseVeryLight transition-transform overflow-hidden
				 md:relative md:justify-between md:top-0 md:w-full md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? 'translate-x-0' : 'translate-x-[100%] '
					}`}>
				<NavList>
					<NavListItem>
						<NavLinkItem route='/' routerPath={router.pathname}>
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
					<li className='flex self-start md:ml-0'>
						<button className='flex flex-row-reverse items-center justify-start gap-sm py-md text-error text-sm cursor-pointer md:flex-row md:justify-start'>
							<MdLogout className='icon text-error' />
							Logout
						</button>
					</li>
				</NavList>
				<div className='flex flex-row-reverse justify-center items-center gap-sm w-full px-md md:flex-col md:items-start'>
					{/* <div className='flex flex-col justify-center items-center w-full md:flex-col'>
						<SelectMenu options={languages}>Language</SelectMenu>
						<SelectMenu options={currencies}>Currency</SelectMenu>
					</div> */}
					<ThemeSwitch toggleThemeFunc={() => dispatch(uiActions.toggleTheme())} isThemeDark={isThemeDark} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
