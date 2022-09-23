import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
	dataValue: React.ReactNode;
	secondDataValue?: React.ReactNode;
}
const CoinMarketData = ({ children, dataValue, secondDataValue }: Props) => {
	return (
		<div className='flex flex-col text-center'>
			<p className='text text-fontLight '>{children}</p>
			{secondDataValue ? (
				<p className='text-sm text-font font-semibold'>
					{dataValue} <br />/ {secondDataValue}
				</p>
			) : (
				<p className='text-sm text-font font-semibold'>{dataValue}</p>
			)}
		</div>
	);
};

export default CoinMarketData;
