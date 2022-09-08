import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../state/navSlice';
import { uiActions } from '../state/uiSlice';
export interface sliceFunctionProps {
	sliceFunction: keyof typeof navActions;
	payload?: string;
}

const useReduxDispatch = () => {
	const dispatch = useDispatch();
	const { isNavOpen }: any = useSelector<any>(state => state.nav);

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
