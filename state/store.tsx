import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import coinsSlice from './coinsSlice';
import walletSlice from './walletSlice';
import { coinsApi } from './apiSlice';

const store = configureStore({
	reducer: {
		[coinsApi.reducerPath]: coinsApi.reducer,
		ui: uiSlice.reducer,
		coins: coinsSlice.reducer,
		wallet: walletSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coinsApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
