import React from 'react';
import store from '../state/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

interface ProviderProps {
	children: React.ReactNode;
}

const AppLayout = ({ children }: ProviderProps) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};

export default AppLayout;
