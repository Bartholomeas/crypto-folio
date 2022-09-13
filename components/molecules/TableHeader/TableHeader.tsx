import React from 'react';
interface Props {
	children?: string;
	hideOnMobile?: boolean;
	leftAlign?: boolean;
}
const TableHeader = ({ children, hideOnMobile, leftAlign }: Props) => {
	return (
		<th
			className={`py-xs px-xs text-xs 
 last:pr-xs 
		${hideOnMobile && 'hidden'}
		${leftAlign ? 'text-start' : 'text-end'}
			md:table-cell`}>
			{children}
		</th>
	);
};

export default TableHeader;
