import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppLayout from './providers/AppLayout';
import Navbar from './components/organisms/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<AppLayout>
				<Navbar />
			</AppLayout>
		</AppProvider>
	</React.StrictMode>
);
