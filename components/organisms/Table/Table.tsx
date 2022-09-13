import React from 'react';
interface Props {
	children: React.ReactNode;
}
const Table = ({ children }: Props) => {
	return <table className='min-w-[600px] max-w w-full border-collapse '>{children}</table>;
};

export default Table;