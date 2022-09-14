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

const walletSlice = createSlice({ name: 'wallet', initialState, reducers: {} });

export const walletActions = walletSlice.actions;
export default walletSlice;
