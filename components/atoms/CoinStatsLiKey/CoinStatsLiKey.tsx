import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinStatsLiKey = ({ children }: Props) => {
	return <p className='dark:text-dmFont text-fontLight text-sm'>{children}</p>;
};

export default CoinStatsLiKey;
