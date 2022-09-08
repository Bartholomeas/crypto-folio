import { configureStore, Store } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import navSlice from './navSlice';

const store = configureStore({
	reducer: { nav: navSlice.reducer, ui: uiSlice.reducer },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
