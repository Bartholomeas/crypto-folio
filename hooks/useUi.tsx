import React from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../state/uiSlice';

const useUiHandling = () => {
	const dispatch = useDispatch();

	function setNotificationPopup(isOpen: boolean, isSuccess: boolean = true, content: string) {
		dispatch(
			uiActions.toggleNotificationPopup({
				open: isOpen,
				success: isSuccess,
				content: content,
			})
		);
	}
	return { setNotificationPopup };
};

export default useUiHandling;
