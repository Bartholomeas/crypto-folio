import React from 'react';
interface Props {
	children?: string;
	hideOnMobile?: boolean;
}
const TableHeader = ({ children, hideOnMobile }: Props) => {
	return (
		<th
			className={`py-xs px text-xs text-end 
		first:pl-xs last:pr-xs [&:nth-child(2)]:text-center [&:nth-child(3)]:text-start
		${hideOnMobile && 'hidden'}
			md:table-cell`}>
			{children}
		</th>
	);
};

export default TableHeader;
