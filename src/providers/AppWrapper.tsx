import React from 'react';
import twined from 'twined-components';

const Wrapper = twined.div``;

interface Props {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;
