import { useDispatch } from "react-redux";
import { useAppSelector } from "../state/reduxHooks";
import { uiActions } from "../state/uiSlice";

function useUiHandling() {
	const dispatch = useDispatch();
	const { lightMode } = useAppSelector((state) => state.ui);

	function checkTheme() {
		const theme = JSON.parse(localStorage.getItem("lightMode") || "true");
		dispatch(uiActions.setTheme(!theme));
	}

	function toggleTheme() {
		dispatch(uiActions.toggleTheme());
		localStorage.setItem("lightMode", JSON.stringify(lightMode));
	}

	const openAuthModal = () => {
		dispatch(uiActions.toggleAuthModal());
	};

	const openCoinModal = () => {
		dispatch(uiActions.toggleCoinModal());
	};

	function setNotificationPopup(
		isOpen: boolean,
		content: string,
		isSuccess = true,
	) {
		dispatch(
			uiActions.toggleNotificationPopup({
				open: isOpen,
				success: isSuccess,
				content,
			}),
		);
	}

	return {
		setNotificationPopup,
		toggleTheme,
		checkTheme,
		openAuthModal,
		openCoinModal,
	};
}

export default useUiHandling;
