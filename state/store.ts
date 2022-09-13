import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';

const store = configureStore({
	reducer: { ui: uiSlice.reducer },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
