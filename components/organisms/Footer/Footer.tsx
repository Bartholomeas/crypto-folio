import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const Footer = ({ children }: Props) => {
	return (
		<footer className='flex items-center w-full bg-baseLight p py-lg mb-[5rem] min-h-[5rem] md:mb-auto'>
			{children}
		</footer>
	);
};

export default Footer;
