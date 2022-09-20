import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinName = ({ children }: Props) => {
	return <h1 className='text-font text-lg font-bold'>{children}</h1>;
};

export default CoinName;
