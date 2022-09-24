import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Props {
	state: StateInterface;
	action: PayloadAction;
}

export interface CoinItem {
	// [key: string]: string | number | string[] | number[];
	id: string;
	symbol: string;
	name: string;
	market_cap_rank: number;
	market_cap: number;
	current_price: number;
	price_change_percentage_24h: number;
	image: string;
	thumb: string;
}

interface StateInterface {
	coinsList: CoinItem[];
}

const initialState: StateInterface = {
	coinsList: [],
};

const coinsSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
		setCoinsList(state, action) {
			state.coinsList = action.payload;
		},
	},
});

export const coinsActions = coinsSlice.actions;
export default coinsSlice;
