import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableHead = ({ children }: Props) => {
	return (
		<thead
			className='dark:bg-dmBaseDarker dark:border-dmBaseElement
		 bg-white z-100 border-t-2 border-baseVeryLight '>
			{children}
		</thead>
	);
};

export default TableHead;
