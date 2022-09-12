import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableHead = ({ children }: Props) => {
	return <thead className='bg-baseLight rounded border-solid border-b-2 border-t-2'>{children}</thead>;
};

export default TableHead;
