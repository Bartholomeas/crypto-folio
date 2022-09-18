import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const Footer = ({ children }: Props) => {
	return <footer className='flex items-center w-full bg-baseLight p min-h-[5rem]'>{children}</footer>;
};

export default Footer;
