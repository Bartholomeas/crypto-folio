import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Props {
	state: StateInterface;
	action: PayloadAction;
}

interface StateInterface {
	portfolioCoins: [];
}

const initialState: StateInterface = {
	portfolioCoins: [],
};

const userSlice = createSlice({ name: 'user', initialState, reducers: {} });

export const userActions = userSlice.actions;
export default userSlice;
