import React from 'react';

interface Props {
	children: React.ReactNode;
}
const LinkBoxy = ({ children }: Props) => {
	return (
		<a className='flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer'>
			{children}
		</a>
	);
};

export default LinkBoxy;
