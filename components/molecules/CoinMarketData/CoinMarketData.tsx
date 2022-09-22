import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
	dataValue: number;
}
const CoinMarketData = ({ children, dataValue }: Props) => {
	return (
		<div className='flex flex-col text-center'>
			<p className='text text-fontLight '>{children}</p>
			<p className='text-sm text-font font-semibold'>${dataValue}</p>
		</div>
	);
};

export default CoinMarketData;
