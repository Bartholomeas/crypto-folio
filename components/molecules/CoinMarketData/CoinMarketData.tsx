import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const CoinMarketData = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default CoinMarketData;
