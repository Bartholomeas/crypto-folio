import React from 'react';

interface Props {
	children: React.ReactNode;
}

const NavList = ({ children }: Props) => {
	return (
		<ul
			className='flex flex-col justify-start items-center gap w-full 
			md:items-start '>
			{children}
		</ul>
	);
};

export default NavList;
