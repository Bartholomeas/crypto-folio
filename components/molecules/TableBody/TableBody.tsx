import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableBody = ({ children }: Props) => {
	return <thead className='border-solid border-b-2 border-t-2'>{children}</thead>;
};

export default TableBody;
