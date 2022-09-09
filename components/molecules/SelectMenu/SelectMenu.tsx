import React from 'react';

interface Props {
	children: string;
}
const SelectMenu = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default SelectMenu;
