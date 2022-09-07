import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useReduxDispatch = () => {
	const dispatch = useDispatch();
	const { isMobile }: any = useSelector<any>(state => state.ui);
	const { isNavOpen }: any = useSelector<any>(state => state.nav);

	return { dispatch, isMobile, isNavOpen };
};

export default useReduxDispatch;
