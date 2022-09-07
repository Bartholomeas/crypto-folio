import React from 'react';

interface Props {
	children: React.ReactNode;
}
const NavListItem = ({ children }: Props) => {
	return (
		<li
			className='text-end ease-out duration-300
    md:w-full
    md:hover:bg-baseLight'>
			{children}
		</li>
	);
};

export default NavListItem;
