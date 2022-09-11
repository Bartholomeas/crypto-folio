import React from 'react';
import ChangeInValue from '../../atoms/ChangeInValue/ChangeInValue';

interface Props {
	totalValue: number;
	valueInBtc: number;
	changePercent: number;
	changeValue: number;
}

const TotalAssetsValue = ({ totalValue, valueInBtc, changePercent, changeValue }: Props) => {
	return (
		<div className='flex justify-between min-w-[300px] w-full px py-lg rounded text-white bg-accent md:max-w-[300px]'>
			<div className='flex flex-col items-start w-full'>
				<p>My portfolio</p>
				<p className='text-lg font-semibold'>{totalValue}$</p>
				<p className='text-sm'>={valueInBtc} BTC</p>
			</div>
			<div className='flex flex-col items-end bg-accentDark w-fit h-fit p-xs rounded'>
				<ChangeInValue>{changePercent}</ChangeInValue>
				<ChangeInValue>{changeValue}</ChangeInValue>
			</div>
		</div>
	);
};

export default TotalAssetsValue;
