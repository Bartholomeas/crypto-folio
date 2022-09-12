import React from 'react';
interface Props {
	children: string | number | React.ReactNode;
}
const TableData = ({ children }: Props) => {
	return <td className='py text-end first:pl-xs last:pr-xs'>{children}</td>;
};

export default TableData;
