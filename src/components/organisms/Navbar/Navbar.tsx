import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import useReduxDispatch from '../../../hooks/useReduxDispatch';
import NavLinkItem from '../../atoms/NavLink/NavLink';

import {
	MdDashboard as dashboard,
	MdSettings as settings,
	MdAccountBalanceWallet as wallet,
	MdHistory as history,
	MdLogout as logout,
} from 'react-icons/md';

const Navbar = () => {
	const { isMobile } = useReduxDispatch();

	function handleNavbarToggle() {
		console.log('gut');
	}
	return (
		<nav className='fixed h-[100px] w-full t-0 l-0 bg-baseVeryLight md:h-full md:w-auto'>
			<div className='nav-wrapper flex justify-between items-center px-md py-sm md:flex-col md:px-0 md:min-w-[120px] md:h-full'>
				<Logo />
				<BurgerButton onClickFn={handleNavbarToggle} />
				<div className='nav-menu fixed flex flex-col justify-center items-center w-full top-[100px] left-0 bottom-0 right-0 bg-white md:relative md:top-auto md:w-full'>
					<NavList>
						<li>
							<NavLinkItem route='/'>Dashboard</NavLinkItem>
						</li>
						<li>
							<NavLinkItem route='/'>Search</NavLinkItem>
						</li>
						<li>
							<NavLinkItem route='/'>Wallet</NavLinkItem>
						</li>
						<li>
							<NavLinkItem route='/'>History</NavLinkItem>
						</li>
						<li>
							<NavLinkItem route='/'>Settings</NavLinkItem>
						</li>
					</NavList>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
