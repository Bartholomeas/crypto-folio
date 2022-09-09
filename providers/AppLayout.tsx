import React from 'react';
import Navbar from '../components/organisms/Navbar/Navbar';
interface Props {
	children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
	return (
		<div className='flex flex-col md:flex-row w-full md:h-[100vh] bg-indigo-500'>
			<Navbar />

			{children}
		</div>
	);
};

export default AppLayout;
