import React from 'react';

interface Props {
	children: string;
	forProp?: string;
}

const Label = ({ children, forProp }: Props) => {
	return (
		<label htmlFor={forProp} className='text-font text-sm'>
			{children}:
		</label>
	);
};

export default Label;
