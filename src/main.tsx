import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppLayout from './providers/AppLayout';
import Navbar from './components/organisms/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Wallet from './components/pages/Wallet/Wallet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<AppLayout>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/wallet' element={<Wallet />} />
				</Routes>
			</AppLayout>
		</AppProvider>
	</React.StrictMode>
);
