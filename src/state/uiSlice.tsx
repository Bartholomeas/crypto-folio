import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
	isMobile: boolean;
}

const initialState: InitialStateProps = {
	isMobile: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleNavbar(state, action: PayloadAction) {
			console.log(state);
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
