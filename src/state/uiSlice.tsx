import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isMobile: boolean;
}

const initialState: InitialState = {
	isMobile: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleSmth(state, action: PayloadAction) {
			console.log(state);
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
