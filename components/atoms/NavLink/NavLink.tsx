import React from 'react';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
	route: string;
}
const NavLinkItem = ({ children, route = '/' }: Props) => {
	return (
		<Link href={route}>
			<div
				className='flex items-center justify-center  text-center gap-sm h-full w-full p-3 text-font text-md  
			md:justify-start md:text cursor-pointer'>
				{children}
			</div>
		</Link>
	);
};

export default NavLinkItem;
