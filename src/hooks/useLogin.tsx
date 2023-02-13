/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { userActions } from "../state/userSlice";
import { uiActions } from "../state/uiSlice";
import { FirebaseContext } from "../providers/AppProvider";
import useUiHandling from "./useUiHandling";

function useLogin() {
	const { setNotificationPopup, setLoader } = useUiHandling();
	const { db, auth, googleProvider } = useContext(FirebaseContext);
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector((state) => state.user);
	const [loggedIn, setLoggedIn] = useState(false);

	function stateChangeWatcher(callback: any) {
		return onAuthStateChanged(auth, async (user) => {
			if (user && !loggedIn) {
				await getDoc(doc(db, "users", user.uid));
				callback(user);
			}
		});
	}

	function setLoggedInUser(user: any) {
		setLoggedIn(true);
		dispatch(
			userActions.setUserData({
				name: user.displayName || user.email,
				email: user.email,
				uid: user.uid,
				image: user.photoURL || "",
				favouriteCoins: user.favouriteCoins || [],
				walletCoins: user.walletCoins || [],
			}),
		);
		localStorage.setItem("userId", user.uid);
	}

	useEffect(() => {
		const unsubscribe = stateChangeWatcher(setLoggedInUser);
		return () => {
			unsubscribe();
		};
	}, [userData.uid]);

	async function authWithEmail(emailValue: string, passwordValue: string) {
		setLoader(true);

		try {
			const result = await signInWithEmailAndPassword(
				auth,
				emailValue,
				passwordValue,
			);
			setLoader(false);
			setLoggedInUser(result.user);
			dispatch(uiActions.closeAuthModal());

			setNotificationPopup(true, "Successfully logged in", true);
			setTimeout(() => {
				setNotificationPopup(false, "Successfully logged in", true);
			}, 3000);
		} catch {
			setLoader(false);

			setNotificationPopup(true, "Something went wrong :(", false);
			setTimeout(() => {
				setNotificationPopup(false, "Something went wrong :(", false);
			}, 3000);
		}
	}

	async function authWithGoogle() {
		setLoader(true);
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const userSnap = await getDoc(doc(db, "users", result.user.uid));

			setLoader(false);
			if (!userSnap.exists()) {
				// addUserToDB(result.user);
			}
			setLoggedInUser(result.user);
			dispatch(uiActions.closeAuthModal());
			setNotificationPopup(true, "Successfully logged in", true);
			setTimeout(() => {
				setNotificationPopup(false, "Successfully logged in", true);
			}, 3000);
		} catch (e) {
			setLoader(false);
			setNotificationPopup(true, "Something went wrong :(", false);
			setTimeout(() => {
				setNotificationPopup(false, "Something went wrong :(", false);
			}, 3000);
		}
	}

	function removeLoggedInUser() {
		setLoggedIn(false);
		dispatch(userActions.setInitialState());
		localStorage.removeItem("userId");
	}
	function signoutUser() {
		try {
			removeLoggedInUser();
			signOut(auth);
			setNotificationPopup(true, "Successfully logged out", true);

			setTimeout(() => {
				setNotificationPopup(false, "Successfully logged out", true);
			}, 3000);

			window.location.reload();
		} catch {
			throw new Error("Cannot logout");
		}
	}

	return {
		loggedIn,
		setLoggedIn,
		authWithGoogle,
		authWithEmail,
		signoutUser,
	};
}

export default useLogin;
