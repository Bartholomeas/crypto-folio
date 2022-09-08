import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import useReduxDispatch from '../../../hooks/useReduxDispatch';
import NavLinkItem from '../../atoms/NavLink/NavLink';
import NavListItem from '../../atoms/NavListItem/NavListItem';
import { MdDashboard, MdSettings, MdSearch, MdAccountBalanceWallet, MdHistory, MdLogout } from 'react-icons/md';
const Navbar = () => {
	const { toggleNavbar, isNavOpen } = useReduxDispatch();

	return (
		<nav
			className='fixed h-[100px] w-full t-0 l-0 bg-baseVeryLight z-200
		md:block md:h-full md:w-auto '>
			<div
				className='nav-wrapper flex justify-between items-center
				 px-md py-sm
			 md:flex-col md:min-w-[150px] md:max-w-[200px] md:w-auto md:h-full md:px-0 overflow-hidden'>
				<Logo />
				<BurgerButton onClickFn={toggleNavbar} />
				<div
					className={`nav-menu fixed flex flex-col justify-center items-center w-full top-[100px] left-0 bottom-0 right-0 bg-white transition-transform
				 md:relative md:top-0 md:w-ful md:my-auto md:bg-transparent md:translate-x-0  ${
						isNavOpen ? 'translate-x-0' : 'translate-x-[-100%] '
					}`}>
					<NavList>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdDashboard className='icon' />
								Dashboard
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdSearch className='icon' />
								Search
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdAccountBalanceWallet className='icon' />
								Wallet
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdHistory className='icon' />
								History
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdSettings className='icon' /> Settings
							</NavLinkItem>
						</NavListItem>
					</NavList>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
