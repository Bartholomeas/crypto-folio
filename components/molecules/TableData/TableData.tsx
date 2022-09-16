import Link from 'next/link';
import React from 'react';
interface Props {
	children: string | number | React.ReactNode;
	isBold?: boolean;
	appendBefore?: string | number;
	appendAfter?: string | number;
	leftAlign?: boolean;
}
const TableData = ({ children, isBold, appendBefore, appendAfter, leftAlign }: Props) => {
	return (
		<td
			className={`flex items-center justify-center h-full py-sm px-xs align-middle text-sm text-font 
			first:pl-xs last:pr-xs
			${isBold && 'font-semibold'} 
			${leftAlign ? 'text-start' : 'text-end'}
			md:table-cell [&:nth-child(1)]:text-center
			${
				appendAfter === '%'
					? children! > 0
						? 'text-success font-semibold text-xs'
						: 'text-error font-semibold text-xs'
					: ''
			}
			`}>
			<span className='font-bold'>{appendBefore ?? ''}</span>
			{children}
			<span className='font-bold'> {appendAfter ?? ' '}</span>
		</td>
	);
};

export default TableData;
