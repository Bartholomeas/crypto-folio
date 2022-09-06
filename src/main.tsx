import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppWrapper from './providers/AppWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<AppWrapper>asd</AppWrapper>
		</AppProvider>
	</React.StrictMode>
);
