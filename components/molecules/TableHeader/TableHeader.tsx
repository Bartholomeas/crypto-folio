import React from 'react';
interface Props {
	children?: string;
}
const TableHeader = ({ children }: Props) => {
	return <th className='py-xs text-xs text-end first:pl-xs last:pr-xs'>{children}</th>;
};

export default TableHeader;
