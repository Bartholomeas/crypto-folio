import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { uiActions } from "../state/uiSlice";

function useUiHandling() {
	const dispatch = useAppDispatch();
	const { lightMode } = useAppSelector((state) => state.ui);

	function checkTheme() {
		const theme = JSON.parse(localStorage.getItem("lightMode") || "true");
		dispatch(uiActions.setTheme(!theme));
	}

	function toggleTheme() {
		dispatch(uiActions.toggleTheme());
		localStorage.setItem("lightMode", JSON.stringify(lightMode));
	}

	function openAuthModal() {
		dispatch(uiActions.toggleAuthModal());
	}

	function openCoinModal() {
		dispatch(uiActions.toggleCoinModal());
	}

	function setLoader(active: boolean) {
		dispatch(uiActions.toggleLoader(active));
	}

	function setNotificationPopup(
		isOpen: boolean,
		content: string,
		isSuccess = true,
		isCb = false,
	) {
		dispatch(
			uiActions.toggleNotificationPopup({
				open: isOpen,
				success: isSuccess,
				content,
			}),
		);

		if (isCb) {
			setTimeout(() => {
				setNotificationPopup(false, "We cannot register you :(!", false);
			}, 3000);
		}
	}

	return {
		setNotificationPopup,
		toggleTheme,
		checkTheme,
		openAuthModal,
		openCoinModal,
		setLoader,
	};
}

export default useUiHandling;
