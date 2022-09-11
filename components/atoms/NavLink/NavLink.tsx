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
				className='
			after:content-[""] after:absolute after:left-[-200px] after:bottom-0 after:w-[100vh] after:h-full 
				relative flex flex-row-reverse items-center justify-center text-center gap-sm h-full w-full py-3 text-font text-md  
			md:flex-row md:justify-start md:text cursor-pointer z-100
			md:hover:after:bg-accentHover
			'>
				{children}
			</div>
		</Link>
	);
};

export default NavLinkItem;
