import Link from 'next/link';
import React from 'react';
import LinkItem from '../LinkItem/LinkItem';

interface Props {
	children: React.ReactNode;
	onClickFn?: (arg1: any) => void;
}
const TableRow = ({ children, onClickFn }: Props) => {
	return (
		<tr
			onClick={onClickFn}
			className='w-full border-solid border-b-2 border-baseVeryLight hover:bg-baseVeryLight transition-colors '>
			{children}
		</tr>
	);
};

export default TableRow;
