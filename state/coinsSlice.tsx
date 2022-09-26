import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Props {
	state: StateInterface;
	action: PayloadAction;
}

export interface CoinItem {
	[key: string]: string | number;
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
	filteredCoins: CoinItem[];
}

const initialState: StateInterface = {
	coinsList: [],
	filteredCoins: [],
};

const coinsSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
		setCoinsList(state, action) {
			state.coinsList = action.payload;
		},
		setFilteredCoins(state, action) {
			state.filteredCoins = action.payload;
		},
	},
});

export const coinsActions = coinsSlice.actions;
export default coinsSlice;
