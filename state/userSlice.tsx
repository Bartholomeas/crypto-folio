import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PurchaseDetails {
	name: string;
	symbol: string;
	shoppings: {
		date: any;
		amount: number;
		price: number;
	};
}

interface StateInterface {
	userData: {
		name: string;
		email: string;
		uid: string;
		photoURL: string;
		favouriteCoins: string[];
		walletCoins: PurchaseDetails[];
	};
}

const initialState: StateInterface = {
	userData: {
		name: "",
		email: "",
		uid: "",
		photoURL: "",
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
				photoURL: action.payload.photoURL,
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

		addToWallet(state, action) {
			state.userData.walletCoins = [
				...state.userData.walletCoins,
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
