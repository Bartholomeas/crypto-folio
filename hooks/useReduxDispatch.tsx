import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../state/uiSlice';
import { RootState, AppDispatch } from '../state/store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface sliceFunctionProps {
	sliceFunction: keyof typeof uiActions;
	payload?: string;
}

const useReduxDispatch = () => {
	const dispatch = useAppDispatch();
	const { isNavOpen, isThemeDark, isInfoPanelOpen } = useAppSelector(state => state.ui);

	function toggleNavbar() {
		dispatch(uiActions.toggleNavbar());
	}
	function toggleTheme() {
		dispatch(uiActions.toggleTheme());
	}

	function toggleInfoPanel() {
		dispatch(uiActions.toggleInfoPanel());
	}

	return { dispatch, isNavOpen, isThemeDark, toggleNavbar, toggleTheme, toggleInfoPanel, isInfoPanelOpen };
};

export default useReduxDispatch;
