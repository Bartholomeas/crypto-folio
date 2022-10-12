import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Props {
	state: StateInterface;
	action: PayloadAction;
}

interface StateInterface {
	favouriteCoins: string[];
	userData: {
		[key: string]: string | number;
		name: string;
		email: string;
		uid: string;
		photoURL: string;
	};
}

const initialState: StateInterface = {
	favouriteCoins: [],
	userData: {
		name: '',
		email: '',
		uid: '',
		photoURL: '',
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, action) {
			state.userData = {
				name: action.payload.name,
				email: action.payload.email,
				uid: action.payload.uid,
				photoURL: action.payload.photoURL,
			};
		},

		setInitialState(state) {
			state = initialState;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice;
