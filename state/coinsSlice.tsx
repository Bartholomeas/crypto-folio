import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Props {
	state: StateInterface;
	action: PayloadAction;
}

interface StateInterface {}

const initialState: StateInterface = {};

const coinsSlice = createSlice({ name: 'coins', initialState, reducers: {} });

export const coinsActions = coinsSlice.actions;
export default coinsSlice;
