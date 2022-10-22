import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	type?: 'success' | 'error';
}
const CoinStatsLiValue = ({ children, type }: Props) => {
	return (
		<p
			className={`dark:text-dmFont font-semibold text-sm text-font ${
				type === 'success'
					? 'dark:text-support text-success'
					: type === 'error'
					? 'dark:text-error text-error'
					: ''
			}`}>
			{children}
		</p>
	);
};

export default CoinStatsLiValue;
