import React from 'react';

interface Props {
	children: React.ReactNode;
}

const NavList = ({ children }: Props) => {
	return <ul className='flex flex-col justify-start items-center gap-lg'>{children}</ul>;
};

export default NavList;
