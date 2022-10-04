import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Props {
	state: StateInterface;
	action?: PayloadAction;
}
export interface StateInterface {
	isNavOpen: boolean;
	isThemeDark: boolean;
	isInfoPanelOpen: boolean;
	isAuthPopupOpen: boolean;
	notificationPopup: {
		isNotificationPopupOpen: boolean;
		isNotificationPopupSuccess: boolean;
		NotificationPopupContent: string;
	};
}

const initialState: StateInterface = {
	isNavOpen: false,
	isThemeDark: false,
	isInfoPanelOpen: false,
	isAuthPopupOpen: false,
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
		toggleNavbar(state) {
			state.isNavOpen = !state.isNavOpen;
		},
		toggleTheme(state) {
			state.isThemeDark = !state.isThemeDark;
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
