import React from 'react';

interface Props {
	children: React.ReactNode;
}
const LinkBoxy = ({ children }: Props) => {
	return <a>{children}</a>;
};

export default LinkBoxy;
