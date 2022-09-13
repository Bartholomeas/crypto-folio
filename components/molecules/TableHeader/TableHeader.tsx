import React from 'react';
interface Props {
	children?: string;
	leftAlign?: boolean;
}
const TableHeader = ({ children, leftAlign }: Props) => {
	return (
		<th
			className={`py-sm px-xs text-xs 
 last:pr-xs 
		${leftAlign ? 'text-start' : 'text-end'}
			md:table-cell
			[&:nth-child(1)]:text-center`}>
			<button className='bg-none border-none'>{children}</button>
		</th>
	);
};

export default TableHeader;
