/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
import { useEffect, useState } from "react";
import { doc, updateDoc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import {
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { db, auth } from "../../firebaseConfig";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { PurchaseDetails, userActions } from "../state/userSlice";
import { uiActions } from "../state/uiSlice";

const googleProvider = new GoogleAuthProvider();

function useLogin() {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector((state) => state.user);
	const [loggedIn, setLoggedIn] = useState(false);

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

	function stateChangeWatcher(callback: any) {
		return onAuthStateChanged(auth, async (user) => {
			if (user && !loggedIn) {
				const userSnap = await getDoc(doc(db, "users", user.uid));
				callback(user);
			}
		});
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
				addUserToDB(result.user);
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

	return {
		authWithGoogle,
		authWithEmail,
	};
}

export default useLogin;
