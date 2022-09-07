import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import navSlice from './navSlice';

const store = configureStore({
	reducer: { nav: navSlice.reducer, ui: uiSlice.reducer },
});

export default store;
