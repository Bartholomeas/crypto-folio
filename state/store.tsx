import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import coinsSlice from './coinsSlice';
import walletSlice from './walletSlice';

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		coins: coinsSlice.reducer,
		wallet: walletSlice.reducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
