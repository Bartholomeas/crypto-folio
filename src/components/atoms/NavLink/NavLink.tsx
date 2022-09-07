import { NavLink } from 'react-router-dom';

interface Props {
	children: React.ReactNode | string;
	route: string;
}

const NavLinkItem = ({ children, route = '#' }: Props) => {
	return (
		<NavLink
			className='before:content-[""] before:absolute before:l-0 before:h-[30px] before:w-[20px] before:bg-accent
			 relative flex items-center text-center gap-sm h-full w-full p-4 text-font text-md 
		md:text'
			to={route}>
			{children}
		</NavLink>
	);
};

export default NavLinkItem;
