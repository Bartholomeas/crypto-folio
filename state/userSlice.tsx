import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PurchaseDetails {
	name: string;
	symbol: string;
	image: string;
	shoppings: {
		date: string;
		amount: number;
		price: number;
	}[];
}

interface StateInterface {
	userData: {
		name: string;
		email: string;
		uid: string;
		image: string;
		favouriteCoins: string[];
		walletCoins: PurchaseDetails[];
	};
}

const initialState: StateInterface = {
	userData: {
		name: "",
		email: "",
		uid: "",
		image: "",
		favouriteCoins: [],
		walletCoins: [],
	},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData(state, action) {
			state.userData = {
				name: action.payload.name,
				email: action.payload.email,
				uid: action.payload.uid,
				image: action.payload.image,
				favouriteCoins: action.payload.favouriteCoins,
				walletCoins: action.payload.walletCoins,
			};
		},

		addToFavourites(state, action) {
			state.userData.favouriteCoins = [
				...state.userData.favouriteCoins,
				action.payload,
			];
		},

		setInitialState(state) {
			state.userData = initialState.userData;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice;
