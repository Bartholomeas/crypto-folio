import React from 'react';
interface Props {
	children: string | number | React.ReactNode;
	isBold?: boolean;
	appendBefore?: string | number;
	appendAfter?: string | number;
	hideOnMobile?: boolean;
}
const TableData = ({ children, isBold, appendBefore, appendAfter, hideOnMobile }: Props) => {
	return (
		<td
			className={`py-sm px-xs align-middle text-sm text-end text-font 
			first:pl-xs last:pr-xs [&:nth-child(2)]:text-center [&:nth-child(3)]:text-start 
			${isBold && 'font-semibold'} 
			${hideOnMobile && 'hidden'}
			md:table-cell`}>
			<span className='font-bold'>{appendBefore ?? ''}</span>
			{children}
			<span className='font-bold'> {appendAfter ?? ' '}</span>
		</td>
	);
};

export default TableData;
