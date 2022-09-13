import React from 'react';
interface Props {
	children: string | number | React.ReactNode;
	isBold?: boolean;
	appendBefore?: string | number;
	appendAfter?: string | number;
	hideOnMobile?: boolean;
	leftAlign?: boolean;
}
const TableData = ({ children, isBold, appendBefore, appendAfter, hideOnMobile, leftAlign }: Props) => {
	return (
		<td
			className={`py-sm px-xs align-middle text-sm text-font 
			first:pl-xs last:pr-xs 
			${isBold && 'font-semibold'} 
			${hideOnMobile && 'hidden'}
			${leftAlign ? 'text-start' : 'text-end'}
			md:table-cell
			`}>
			<span className='font-bold'>{appendBefore ?? ''}</span>
			{children}
			<span className='font-bold'> {appendAfter ?? ' '}</span>
		</td>
	);
};

export default TableData;
