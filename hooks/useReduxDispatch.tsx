import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../state/uiSlice';
import { coinsActions } from '../state/coinsSlice';
import { walletActions } from '../state/walletSlice';
import { RootState, AppDispatch } from '../state/store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useReduxDispatch = () => {
	const dispatch = useAppDispatch();
	const { isNavOpen, isThemeDark, isInfoPanelOpen } = useAppSelector(state => state.ui);

	const { coinsList } = useAppSelector(state => state.coins);
	const {} = useAppSelector(state => state.wallet);

	function toggleNavbar() {
		dispatch(uiActions.toggleNavbar());
	}
	function toggleTheme() {
		dispatch(uiActions.toggleTheme());
	}
	function toggleInfoPanel() {
		dispatch(uiActions.toggleInfoPanel());
	}

	function setCoinsList(coinsList: []) {
		dispatch(coinsActions.setCoinsList(coinsList));
	}

	return {
		isNavOpen,
		isThemeDark,
		toggleNavbar,
		toggleTheme,
		toggleInfoPanel,
		isInfoPanelOpen,
		coinsList,
		setCoinsList,
	};
};

export default useReduxDispatch;
