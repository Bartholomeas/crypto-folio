import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import coinsSlice from "./coinsSlice";
import userSlice from "./userSlice";

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		coins: coinsSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
