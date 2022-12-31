import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface AddWalletCoin {
	name: string;
	symbol: string;
	date: string;
	amount: number;
	price: number;
}

interface StateInterface {
	coinsList: CoinItem[];
	filteredCoins: CoinItem[];
	trendingCoins: { item: CoinItem }[];
	walletCoin: AddWalletCoin;
}

// 	shoppings: [
// 		{
// 			date: new Date().toString(),
// 			amount: 0.23,
// 			price: 21345,
// 		},
// 	],

const initialState: StateInterface = {
	coinsList: [],
	filteredCoins: [],
	trendingCoins: [],
	walletCoin: {
		name: "",
		symbol: "",
		date: "",
		amount: 0,
		price: 0,
	},
};

const coinsSlice = createSlice({
	name: "coins",
	initialState,
	reducers: {
		setCoinsList(state, action) {
			state.coinsList = action.payload;
		},

		setFilteredCoins(state, action) {
			state.filteredCoins = action.payload;
		},

		setTrendingCoins(state, action) {
			state.trendingCoins = action.payload;
		},
		setWalletCoin(state, action) {
			state.walletCoin[action.payload.key] = action.payload.value;
		},
	},
});

export const coinsActions = coinsSlice.actions;
export default coinsSlice;
