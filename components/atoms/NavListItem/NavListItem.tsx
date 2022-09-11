import React from 'react';
import Link from 'next';

interface Props {
	children: React.ReactNode;
}
const NavListItem = ({ children }: Props) => {
	return (
		<li
			className='before:content-[""] before:absolute before:left-[-2rem] before:bottom-0 before:h-full before:w-[5px] 
			before:transition-colors before:ease-out
			relative
			w-full
			transition-colors
			cursor-pointer
			md:hover:before:bg-accent
			md:text-end 
			md:w-full
			'>
			{children}
		</li>
	);
};

export default NavListItem;
