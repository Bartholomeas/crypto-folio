import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { navActions, InitialState as NavState } from '../state/navSlice';
import { uiActions } from '../state/uiSlice';
import { RootState, AppDispatch } from '../state/store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface sliceFunctionProps {
	sliceFunction: keyof typeof navActions;
	payload?: string;
}

const useReduxDispatch = () => {
	const dispatch = useAppDispatch();
	const { isNavOpen } = useAppSelector(state => state.nav);

	function toggleNavbar() {
		dispatch(navActions.toggleNavbar());
	}

	// function sendDispatch({ sliceFunction = '' }: sliceFunctionProps): void {
	// 	console.log(typeof sliceFunction);
	// 	if (sliceFunction) dispatch(navActions[sliceFunction]());
	// }

	return { dispatch, isNavOpen, toggleNavbar };
};

export default useReduxDispatch;
