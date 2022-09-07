import React from 'react';

interface Props {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default AppWrapper;
