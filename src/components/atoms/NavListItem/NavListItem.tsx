import React from 'react';

interface Props {
	children: React.ReactNode;
}
const NavListItem = ({ children }: Props) => {
	return (
		<li
			className='before:content-[""] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] 
			relative
			w-full
			p-3
			transition-colors
			md:text-end 
			before:transition-colors before:ease-out
			hover:before:bg-accent
			md:w-full
			md:hover:bg-baseLight'>
			{children}
		</li>
	);
};

export default NavListItem;
