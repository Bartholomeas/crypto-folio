import { NavLink } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	route: string;
}

const NavLinkItem = ({ children, route = '#' }: Props) => {
	console.log(children);
	return <NavLink to={route}>{children}</NavLink>;
};

export default NavLinkItem;
