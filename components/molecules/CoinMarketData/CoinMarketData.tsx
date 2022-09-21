import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
	dataValue: number;
}
const CoinMarketData = ({ children, dataValue }: Props) => {
	return (
		<div className='flex flex-col'>
			<p className='text text-fontOff font-bold'>{children}</p>
			<p className='text-sm text-fontOff font-semibold'>${dataValue}</p>
		</div>
	);
};

export default CoinMarketData;
