import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
	state: StateInterface;
	action?: PayloadAction;
}
export interface StateInterface {
	lightMode: boolean;
	isNavOpen: boolean;
	isInfoPanelOpen: boolean;
	isAuthModalOpen: boolean;
	isWalletModalOpen: boolean;
	isLoaderOpen: boolean;
	notificationPopup: {
		isNotificationPopupOpen: boolean;
		isNotificationPopupSuccess: boolean;
		NotificationPopupContent: string;
	};
}

const initialState: StateInterface = {
	lightMode: false,
	isNavOpen: false,
	isInfoPanelOpen: false,
	isAuthModalOpen: false,
	isWalletModalOpen: false,
	isLoaderOpen: false,
	notificationPopup: {
		isNotificationPopupOpen: false,
		isNotificationPopupSuccess: true,
		NotificationPopupContent: "",
	},
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<boolean>) {
			state.lightMode = action.payload;
		},
		toggleTheme(state) {
			state.lightMode = !state.lightMode;
		},
		toggleNavbar(state) {
			state.isNavOpen = !state.isNavOpen;
		},
		toggleInfoPanel(state) {
			state.isInfoPanelOpen = !state.isInfoPanelOpen;
		},
		toggleAuthModal(state) {
			state.isAuthModalOpen = !state.isAuthModalOpen;
		},
		toggleWalletModal(state) {
			state.isWalletModalOpen = !state.isWalletModalOpen;
		},
		closeAuthModal(state) {
			state.isAuthModalOpen = false;
		},
		toggleLoader(state, action: PayloadAction<boolean>) {
			state.isLoaderOpen = action.payload;
		},
		toggleNotificationPopup(state, action) {
			state.notificationPopup = {
				isNotificationPopupOpen: action.payload.open,
				isNotificationPopupSuccess: action.payload.success,
				NotificationPopupContent: action.payload.content,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
