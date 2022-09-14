import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableHead = ({ children }: Props) => {
	return <thead className='bg-baseVeryLight'>{children}</thead>;
};

export default TableHead;
