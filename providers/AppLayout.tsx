import React from 'react';
import InfoPanel from '../components/organisms/InfoPanel/InfoPanel';
import Navbar from '../components/organisms/Navbar/Navbar';
interface Props {
	children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
	return (
		<div className='relative flex items-center w-full  md:flex-row md:h-[100vh]'>
			<Navbar />
			{children}
			<InfoPanel />
		</div>
	);
};

export default AppLayout;
