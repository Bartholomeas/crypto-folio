import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinSymbol = ({ children }: Props) => {
	return (
		<div className='flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight rounded-xl '>
			<h2 className='font-xs text-fontLight font-semibold'>{children}</h2>
		</div>
	);
};

export default CoinSymbol;
