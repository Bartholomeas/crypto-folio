import React from 'react';

interface Props {
	children: string;
	isHigh?: boolean;
}

const PriceChangeDetails = ({ children, isHigh = false }: Props) => {
	return (
		<p className='text-xs text-fontOff'>
			{isHigh ? 'High' : 'Low'} 24h: <span className='text-xs font-semibold text-fontOff'>${children}</span>
		</p>
	);
};

export default PriceChangeDetails;
