import { useEffect, useState } from "react";
import {
	doc,
	updateDoc,
	setDoc,
	arrayUnion,
	arrayRemove,
	collection,
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
import { userActions } from "../state/userSlice";
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
				console.log("LOGOWANY");
			} else {
				removeLoggedInUser();
				console.log("not logged in");
			}
		});
	}

	useEffect(() => {
		const unsubscribe = stateChangeWatcher(setLoggedInUser);
		return () => {
			unsubscribe();
		};
	}, []);

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
				favouriteCoins: [],
				walletCoins: [],
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
			addUserToDB(result.user);
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
			// console.log(result.user, userData.uid);
			setLoader(false);
			addUserToDB(result.user);
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
		if (coinName === "") return;
		const userRef = doc(db, "users");
		console.log("favourites", userRef);

		await updateDoc(userRef, {
			favouriteCoins: arrayUnion(coinName),
		});
	}

	return {
		loggedIn,
		authWithGoogle,
		signoutUser,
		signupCustomUser,
		authWithEmail,
		addToFavourites,
	};
}

export default useDatabase;

// const q = query(colRef, orderBy('createdAt'));
// const unsubCol = onSnapshot(q, snapshot => {
// 	let coins: any[] = [];
// 	snapshot.docs.forEach(doc => {
// 		coins.push({ ...doc.data(), id: doc.id });
// STATIC DATA, NOT UPDATING AFTER REQUEST
// getDocs(colRef)
// 	.then(snapshot => {
// 		let coins: any[] = [];
// 		snapshot.docs.forEach(doc => {
// 			coins.push({ ...doc.data(), id: doc.id });
// 		});

// 	})
// 	.catch(error => {

// 	});
// const deleteItem = (e: any) => {
// 	e.preventDefault();
// 	const deleteForm: any = document.querySelector('.delete-item');

// 	const docRef = doc(db, 'favourites', deleteForm.idDelete.value);
// 	deleteDoc(docRef).then(() => {
// 		deleteForm.reset();
// 	});
// };

// const getSingleDoc = () => {
// 	const docRef: any = doc(db, 'favourites', 'q0XKWS2wXRC4hmoj3wqb');
// 	getDoc(docRef).then((doc: any) => {

// 	});

// 	onSnapshot(docRef, (doc: any) => {

// 	});
// };

// const updateItem = (e: any) => {
// 	e.preventDefault();

// 	const updateForm: any = document.querySelector('.update-item');
// 	const updateId = updateForm.querySelector('#idUpdate').value;

// 	const docRef = doc(db, 'favourites', updateId);

// 	updateDoc(docRef, {
// 		symbol: 'updated symbol lol :)',
// 	}).then(() => {
// 		updateForm.reset();
// 	});
// };

// const signup = (e: any) => {
// 	e.preventDefault();

// 	createUserWithEmailAndPassword(auth, 'testowymail@onet.pl', 'testoweHaslo123')
// 		.then(cred => {
// 			console.log('user create:', cred.user);
// 		})
// 		.catch(err => console.log(err));
// };

// const login = () => {
// 	signInWithEmailAndPassword(auth, 'testowymail@onet.pl', 'testoweHaslo123')
// 		.then(cred => {
// 			console.log('usee loged in:', cred.user);
// 		})
// 		.catch(err => console.log(err));
// };

// const logout = () => {
// 	signOut(auth)
// 		.then(() => {})
// 		.catch(err => console.log(err));
// };

// const unsubAuth = onAuthStateChanged(auth, user => {
// 	if (user) {
// 		console.log('user is signed in' + user);
// 	} else {
// 		console.log('user is signed out');
// 	}
// });

// //unsub to np unsubAuth() zwaraca funkcje ktora sie wywoluje np przy onSnapshot

// return { addItem, deleteItem, getSingleDoc, updateItem, signup, logout, login };
