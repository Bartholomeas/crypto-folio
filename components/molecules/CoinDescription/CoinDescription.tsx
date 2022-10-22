import React, { useState, useEffect } from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	coinName: string;
}

const CoinDescription = ({ children, coinName }: Props) => {
	useEffect(() => {
		const description = document.querySelector('.description-content');
		if (description) description.innerHTML = `${children}`;
	}, []);

	return (
		<div className='text flex-col'>
			<h3 className='dark:text-support text-accentDark text-md font-bold'>About {coinName}</h3>
			<p className='dark:text-dmFont description-content text-font text-sm leading-loose  overflow-y-auto'>
				{children}
			</p>
		</div>
	);
};

export default CoinDescription;
