import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableRow = ({ children }: Props) => {
	return <tr className='w-full'>{children}</tr>;
};

export default TableRow;
