import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isNavOpen: boolean;
}

const initialState: InitialState = {
	isNavOpen: false,
};

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggleNavbar(state, action: PayloadAction) {
			console.log('gut');
		},
	},
});

export const navActions = navSlice.actions;
export default navSlice;
