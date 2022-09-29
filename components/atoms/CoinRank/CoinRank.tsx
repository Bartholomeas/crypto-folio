import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinRank = ({ children }: Props) => {
	return (
		<div className='flex items-center justify-center h-[3rem] px py-[0.6rem] bg-baseLight rounded-xl w-fit '>
			<p className='text-fontLight text-xs font-semibold'>Rank #{children}</p>
		</div>
	);
};

export default CoinRank;
