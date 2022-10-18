import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Props {
	state: StateInterface;
	action?: PayloadAction;
}
export interface StateInterface {
	lightMode: boolean;
	isNavOpen: boolean;
	isThemeDark: boolean;
	isInfoPanelOpen: boolean;
	isAuthPopupOpen: boolean;
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
	isThemeDark: false,
	isInfoPanelOpen: false,
	isAuthPopupOpen: false,
	isLoaderOpen: false,
	notificationPopup: {
		isNotificationPopupOpen: false,
		isNotificationPopupSuccess: true,
		NotificationPopupContent: '',
	},
};

const uiSlice = createSlice({
	name: 'ui',
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
		toggleAuthPopup(state) {
			state.isAuthPopupOpen = !state.isAuthPopupOpen;
		},
		closeAuthPopup(state) {
			state.isAuthPopupOpen = false;
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
