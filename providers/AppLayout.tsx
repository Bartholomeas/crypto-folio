import React from 'react';
import Navbar from '../components/organisms/Navbar/Navbar';
interface Props {
	children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
	return (
		<div className='flex flex-col md:flex-row md:h-[100vh] md:max-h-[100vh]'>
			<Navbar />
			{children}
		</div>
	);
};

export default AppLayout;
