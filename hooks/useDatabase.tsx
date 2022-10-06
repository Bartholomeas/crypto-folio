import { useEffect, useState } from 'react';
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
	orderBy,
	serverTimestamp,
	updateDoc,
	setDoc,
	arrayUnion,
	arrayRemove,
} from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useAppDispatch, useAppSelector } from '../state/reduxHooks';
import { userActions } from '../state/userSlice';
import { uiActions } from '../state/uiSlice';
import { ReadVResult } from 'fs';

const googleProvider = new GoogleAuthProvider();

const useDatabase = () => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const [loggedIn, setLoggedIn] = useState(false);

	function setNotificationPopup(isOpen: boolean, isSuccess: boolean = true, content: string) {
		dispatch(
			uiActions.toggleNotificationPopup({
				open: isOpen,
				success: isSuccess,
				content: content,
			})
		);
	}

	function setLoader(active: boolean) {
		dispatch(uiActions.toggleLoader(active));
	}

	// const writeUserData = (user: DBUser) => {
	// 	const docRef = doc(db, 'users', user.uid);
	// 	getDoc(docRef).then(doc => {
	// 		console.log(doc.data());
	// 	});
	// };

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setLoggedInUser(user);
			} else {
				removeLoggedInUser();
				return;
			}
		});
	}, []);

	function addUserToDB(user: any) {
		const userRef = doc(db, 'users', user.uid);
		setDoc(
			userRef,
			{
				id: user.uid,
				email: user.email,
				name: user.displayName,
				favouriteCoins: [],
			},
			{ merge: true }
		);
	}

	function setLoggedInUser(user: any) {
		setLoggedIn(true);
		dispatch(
			userActions.setUserData({
				name: user.displayName,
				email: user.email,
				uid: user.uid,
				photoURL: user.photoURL,
			})
		);
		localStorage.setItem('userId', user.uid);
	}

	function removeLoggedInUser() {
		setLoggedIn(false);
		dispatch(userActions.setInitialState());
		localStorage.removeItem('userId');
	}

	const signupCustomUser = (emailValue: string, passwordValue: string) => {
		setLoader(true);
		createUserWithEmailAndPassword(auth, emailValue, passwordValue)
			.then(result => {
				setLoader(false);
				addUserToDB(result.user);
				setNotificationPopup(true, true, 'Congratulations, you got registered!');
				setTimeout(() => {
					setNotificationPopup(false, true, 'Congratulations, you got registered!');
				}, 3000);
			})
			.catch(err => {
				setLoader(false);
				setNotificationPopup(true, false, 'We cannot register you :(');
				setTimeout(() => {
					setNotificationPopup(false, false, 'We cannot register you :(!');
				}, 3000);
			});
	};

	const loginCustomUser = (emailValue: string, passwordValue: string) => {
		setLoader(true);
		signInWithEmailAndPassword(auth, emailValue, passwordValue)
			.then(cred => {
				setLoader(false);
			})
			.catch(err => {
				setLoader(false);
				console.log(err);
			});
	};

	const logout = () => {
		signOut(auth)
			.then(() => {})
			.catch(err => console.log(err));
	};

	function authWithGoogle() {
		setLoader(true);
		signInWithPopup(auth, googleProvider)
			.then(result => {
				setLoader(false);
				addUserToDB(result.user);
				setLoggedInUser(result.user);
				dispatch(uiActions.closeAuthPopup());

				setNotificationPopup(true, true, 'Successfully logged in');
				setTimeout(() => {
					setNotificationPopup(false, true, 'Successfully logged in');
				}, 3000);
			})
			.catch(err => {
				console.log(err);
				setLoader(false);
				setNotificationPopup(true, false, 'Something went wrong :(');
				setTimeout(() => {
					setNotificationPopup(false, false, 'Something went wrong :(');
				}, 3000);
			});
	}

	function signOutGoogle() {
		try {
			removeLoggedInUser();
			signOut(auth);
			setNotificationPopup(true, true, 'Successfully logged out');

			setTimeout(() => {
				setNotificationPopup(false, true, 'Successfully logged out');
			}, 3000);
		} catch {
			throw new Error('Cannot logout');
		}
	}

	async function addToFavourites(coinName: string) {
		console.log(coinName);
		if (!userData.uid) {
			dispatch(uiActions.toggleAuthPopup());
			return;
		}
		if (coinName === '') return;

		const userRef = doc(db, 'users', userData.uid);
		await updateDoc(userRef, {
			favouriteCoins: arrayUnion(coinName),
		});

		// setDoc(
		// 	userRef,
		// 	{
		// 		favouriteCoins: ['Ripple'],
		// 	},
		// 	{ merge: true }
		// );
	}

	return {
		loggedIn,
		authWithGoogle,
		signOutGoogle,
		signupCustomUser,
		loginCustomUser,
		addToFavourites,
	};
};

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
// 		console.log(coins);
// 	})
// 	.catch(error => {
// 		console.log(error);
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
// 		console.log(doc.data(), doc.id);
// 	});

// 	onSnapshot(docRef, (doc: any) => {
// 		console.log(doc.data(), doc.id);
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
