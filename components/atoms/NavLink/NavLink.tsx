import React from 'react';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
	route: string;
	routerPath?: string;
}
const NavLinkItem = ({ children, route = '/', routerPath = '' }: Props) => {
	return (
		<Link href={route} passHref>
			<a
				className={`
			after:content-[""] after:absolute after:left-[-200px] after:bottom-0 after:w-[100vh] after:h-full 
				relative flex flex-row-reverse items-center justify-end text-center gap-sm h-full w-full py-4 text-font text-sm 
			md:flex-row md:justify-start md:text cursor-pointer z-100
			md:hover:after:bg-accentHover

			${routerPath === route && 'after:bg-accentHover'}
			`}>
				{children}
			</a>
		</Link>
	);
};

export default NavLinkItem;
