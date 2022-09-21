import React from 'react';

interface Props {
	children: React.ReactNode;
}

const DetailsBigPrice = ({ children }: Props) => {
	return <p className='text-lg font-bold text-accent'>$ {children}</p>;
};

export default DetailsBigPrice;
