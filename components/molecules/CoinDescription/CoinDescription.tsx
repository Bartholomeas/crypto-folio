import React, { useState, useEffect } from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	coinName: string;
}

const CoinDescription = ({ children, coinName }: Props) => {
	const [d, setd] = useState();

	if (typeof window !== 'undefined' && window.document) {
	}

	useEffect(() => {
		const description = document.querySelector('.description-content');
		if (description) description.innerHTML = `${children}`;
	}, []);

	return (
		<div className='text flex-col  '>
			<h3 className='text-accentDark text-md font-bold'>About {coinName}</h3>
			<p className='description-content text-font text-sm leading-loose'>{children}</p>
		</div>
	);
};

export default CoinDescription;
