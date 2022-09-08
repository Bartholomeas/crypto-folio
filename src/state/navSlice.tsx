import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isNavOpen: boolean;
}

interface Props {
	state: InitialState;
	action?: PayloadAction;
}

const initialState: InitialState = {
	isNavOpen: false,
};

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggleNavbar(state) {
			state.isNavOpen = !state.isNavOpen;
		},
	},
});

export const navActions = navSlice.actions;
export default navSlice;
