import { useDispatch } from 'react-redux';
import { useAppSelector } from '../state/reduxHooks';
import { uiActions } from '../state/uiSlice';

const useUiHandling = () => {
	const dispatch = useDispatch();
	const { lightMode } = useAppSelector(state => state.ui);

	function checkTheme() {
		const theme = JSON.parse(localStorage.getItem('lightMode') || 'true');
		dispatch(uiActions.setTheme(!theme));
	}

	function toggleTheme() {
		dispatch(uiActions.toggleTheme());
		localStorage.setItem('lightMode', JSON.stringify(lightMode));
	}

	function setNotificationPopup(isOpen: boolean, isSuccess: boolean = true, content: string) {
		dispatch(
			uiActions.toggleNotificationPopup({
				open: isOpen,
				success: isSuccess,
				content: content,
			})
		);
	}

	return { setNotificationPopup, toggleTheme, checkTheme };
};

export default useUiHandling;
