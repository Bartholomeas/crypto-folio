import { useState } from 'react';
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

const colRef: any = collection(db, 'users');

const googleProvider = new GoogleAuthProvider();

const initialUserState: any = {
	credential: {},
	token: {},
	userInfo: {},
};

const useDatabase = () => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);

	const [loggedIn, setLoggedIn] = useState(false);

	const writeUserData = (user: any) => {
		const docRef = doc(db, 'users', user.uid);
		getDoc(docRef).then(doc => {
			console.log(doc.data());
		});
	};

	onAuthStateChanged(auth, user => {
		if (user) {
			if (userData.uid !== '') return;
			setLoggedIn(true);
			dispatch(
				userActions.setUserData({
					name: user.displayName,
					email: user.email,
					uid: user.uid,
					photoURL: user.photoURL,
				})
			);
		} else {
			setLoggedIn(false);

			console.log('error');
		}
	});

	function authWithGoogle() {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				addUserToDB(result.user);
				localStorage.setItem('userId', result.user.uid);
			})
			.catch(err => {
				console.log(err);
			});
	}

	function signOutGoogle() {
		signOut(auth)
			.then(() => {
				console.log('success');
				dispatch(userActions.setInitialState());
				localStorage.removeItem('userId');
				setLoggedIn(false);
			})
			.catch(() => {
				throw new Error('Cannot logout');
			});
	}

	async function addUserToDB(user: any) {
		const userRef = doc(db, 'users', user.uid);
		setDoc(
			userRef,
			{
				id: user.uid,
				email: user.email,
				name: user.displayName,
				favouriteCoins: ['BTC', 'ETH', 'ATOM'],
			},
			{ merge: true }
		);
	}
	// const q = query(colRef, orderBy('createdAt'));
	// const unsubCol = onSnapshot(q, snapshot => {
	// 	let coins: any[] = [];
	// 	snapshot.docs.forEach(doc => {
	// 		coins.push({ ...doc.data(), id: doc.id });

	return { loggedIn, authWithGoogle, signOutGoogle, writeUserData };
};

export default useDatabase;

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
