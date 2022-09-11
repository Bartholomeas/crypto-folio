import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import useReduxDispatch from '../../../hooks/useReduxDispatch';
import NavLinkItem from '../../atoms/NavLink/NavLink';
import NavListItem from '../../atoms/NavListItem/NavListItem';
import { MdDashboard, MdSettings, MdSearch, MdAccountBalanceWallet, MdHistory, MdLogout } from 'react-icons/md';
import SelectMenu from '../../molecules/SelectMenu/SelectMenu';
import ThemeSwitch from '../../molecules/ThemeSwitch/ThemeSwitch';

const Navbar = () => {
	const { toggleNavbar, isNavOpen, toggleTheme, isThemeDark } = useReduxDispatch();

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
			className='fixed h-[70px] flex flex-col w-full top-0 left-0 bg-baseLight z-200
		md:relative md:h-full md:max-w-[180px] md:py-lg z-[1000]'>
			<div
				className='nav-wrapper flex justify-between items-center w-full
				 px-md py-sm
			 md:justify-center md:w-auto md:px-0 overflow-hidden'>
				<Logo />
				<BurgerButton onClickFn={toggleNavbar} />
			</div>

			<div
				className={`nav-menu fixed flex flex-col justify-around items-center w-full  top-[70px] left-0 bottom-0 right-0 bg-baseVeryLight transition-transform overflow-hidden
				 md:relative md:justify-between md:top-0 md:w-full md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? 'translate-x-0' : 'translate-x-[100%] '
					}`}>
				<NavList>
					<NavListItem>
						<NavLinkItem route='/'>
							<MdDashboard className='icon' />
							Dashboard
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/search'>
							<MdSearch className='icon' />
							Search
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/wallet'>
							<MdAccountBalanceWallet className='icon' />
							Wallet
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/history'>
							<MdHistory className='icon' />
							History
						</NavLinkItem>
					</NavListItem>
					<NavListItem>
						<NavLinkItem route='/settings'>
							<MdSettings className='icon' /> Settings
						</NavLinkItem>
					</NavListItem>
					<li className='flex mx-auto md:ml-0'>
						<a className='flex flex-row-reverse items-center justify-center gap-sm py-md text-error text-sm cursor-pointer md:flex-row md:justify-start'>
							<MdLogout className='icon text-error' />
							Logout
						</a>
					</li>
				</NavList>
				<div className='flex flex-row-reverse justify-center items-center gap-sm w-full px-md md:flex-col md:items-start'>
					{/* <div className='flex flex-col justify-center items-center w-full md:flex-col'>
						<SelectMenu options={languages}>Language</SelectMenu>
						<SelectMenu options={currencies}>Currency</SelectMenu>
					</div> */}
					<ThemeSwitch toggleThemeFunc={toggleTheme} isThemeDark={isThemeDark} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
