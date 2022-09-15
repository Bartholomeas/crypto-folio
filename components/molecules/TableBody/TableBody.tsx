import React from 'react';

interface Props {
	children: React.ReactNode;
}
const TableBody = ({ children }: Props) => {
	return <tbody className=''>{children}</tbody>;
};

export default TableBody;
