import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableHead = ({ children }: Props) => {
	return <thead className='bg-baseVeryLight z-100'>{children}</thead>;
};

export default TableHead;
