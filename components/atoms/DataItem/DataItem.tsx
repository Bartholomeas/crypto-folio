import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	dataValue: number;
}

const DataItem = ({ children, dataValue }: Props) => {
	return <div>{children}</div>;
};

export default DataItem;
