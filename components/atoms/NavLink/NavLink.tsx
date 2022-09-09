import Link from 'next';

interface Props {
	children: React.ReactNode | string;
	route: string;
}

const NavLinkItem = ({ children, route = '#' }: Props) => {
	return (
		<a
			className='flex items-center justify-center  text-center gap-sm h-full w-full p-3 text-font text-md  
			md:justify-start 	md:text'>
			{children}
		</a>
	);
};

export default NavLinkItem;
