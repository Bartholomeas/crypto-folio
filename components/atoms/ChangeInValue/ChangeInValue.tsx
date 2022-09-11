import React from 'react';
interface Props {
	children: string | number;
}
const ChangeInValue = ({ children }: Props) => {
	return <p className='text-support text-sm font-semibold'>+{children}$</p>;
};

export default ChangeInValue;
