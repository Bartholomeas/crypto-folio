import { useEffect, useState } from "react";
import {
	doc,
	updateDoc,
	setDoc,
	arrayUnion,
	collection,
	getDoc,
	getDocs,
	query,
	where,
	Firestore,
	runTransaction,
} from "firebase/firestore";

import {
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { PurchaseDetails, userActions } from "../state/userSlice";
import { uiActions } from "../state/uiSlice";

const googleProvider = new GoogleAuthProvider();

function useDatabase() {
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
				photoURL: user.photoURL || "",
				favouriteCoins: user.favouriteCoins || [],
				walletCoins: user.walletCoins || [],
			}),
		);
		localStorage.setItem("userId", user.uid);
	}

	function removeLoggedInUser() {
		setLoggedIn(false);
		dispatch(userActions.setInitialState());
		localStorage.removeItem("userId");
	}

	function stateChangeWatcher(callback: any) {
		return onAuthStateChanged(auth, (user) => {
			if (user && !loggedIn) {
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

	function setLoader(active: boolean) {
		dispatch(uiActions.toggleLoader(active));
	}

	function addUserToDB(user: any) {
		const userRef = doc(db, "users", user.uid);
		setDoc(
			userRef,
			{
				id: user.uid,
				email: user.email,
				name: user.displayName || user.email,
				favouriteCoins: user.favouriteCoins,
				walletCoins: user.walletCoins,
			},
			{ merge: true },
		);
	}

	async function signupCustomUser(emailValue: string, passwordValue: string) {
		setLoader(true);

		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				emailValue,
				passwordValue,
			);
			setLoader(false);
			addUserToDB(result.user);

			setNotificationPopup(true, "Congratulations, you got registered!", true);

			setTimeout(() => {
				setNotificationPopup(
					false,
					"Congratulations, you got registered!",
					true,
				);
			}, 3000);
		} catch {
			setLoader(false);

			setNotificationPopup(true, "We cannot register you :(", false);
			setTimeout(() => {
				setNotificationPopup(false, "We cannot register you :(!", false);
			}, 3000);
		}
	}

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
			// addUserToDB(result.user);
			dispatch(uiActions.closeAuthPopup());

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

			setLoader(false);
			// addUserToDB(result.user);
			setLoggedInUser(result.user);
			dispatch(uiActions.closeAuthPopup());
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

	function signoutUser() {
		try {
			removeLoggedInUser();
			signOut(auth);
			setNotificationPopup(true, "Successfully logged out", true);

			setTimeout(() => {
				setNotificationPopup(false, "Successfully logged out", true);
			}, 3000);
		} catch {
			throw new Error("Cannot logout");
		}
	}

	async function addToFavourites(coinName: string) {
		if (!userData.uid) {
			dispatch(uiActions.toggleAuthPopup());
			return;
		}
		if (coinName.trim() === "") return;

		const userRef = doc(db, "users", userData.uid);

		dispatch(userActions.addToFavourites(coinName));
		try {
			await updateDoc(userRef, {
				favouriteCoins: arrayUnion(coinName),
			});
		} catch {
			console.log("error");
		}
	}

	async function addCoinToWallet(purchaseDetails: PurchaseDetails) {
		const userRef = doc(db, "users", userData.uid);

		try {
			await runTransaction(db, async (transaction) => {
				const sfDoc = await transaction.get(userRef);

				transaction.update(userRef, { walletCoins: purchaseDetails });
			});
		} catch (e) {
			console.log(e);
		}
		// const customQuery = query(
		// 	collection(db, "users"),
		// 	where("id", "==", userData.uid),
		// );

		// const querySnapshot = await getDoc(doc(db, "users", userData.uid));
		// console.log(querySnapshot.data());

		// await getDoc(userRef).then((dock) => {
		// 	console.log(dock);
		// });

		// try {
		// 	await updateDoc(
		// 		userRef,
		// 		{ walletCoins: arrayUnion(purchaseDetails) },
		// 		{ merge: true },
		// 	);
		// } catch {
		// 	throw new Error("Cannot update user");
		// }

		// dispatch(userActions.addToWallet(purchaseDetails));
	}

	return {
		loggedIn,
		authWithGoogle,
		signoutUser,
		signupCustomUser,
		authWithEmail,
		addToFavourites,
		addCoinToWallet,
	};
}

export default useDatabase;
