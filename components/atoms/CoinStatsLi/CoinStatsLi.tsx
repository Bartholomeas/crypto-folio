import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinStatsLi = ({ children }: Props) => {
	return <li className='flex justify-between items-center border-b-2  py-[0.3rem]'>{children}</li>;
};

export default CoinStatsLi;