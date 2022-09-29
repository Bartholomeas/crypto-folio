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
} from 'firebase/firestore';
import { app, db } from '../firebaseConfig';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const colRef = collection(db, 'walletCoins');

const auth = getAuth();

const useDatabase = () => {
	const [favourites, setFavourites] = useState<any>([]);

	const getData = () => {
		onSnapshot(colRef, snapshot => {
			snapshot.docs.forEach(doc => {
				console.log(doc.data());
			});
		});
		// setFavourites(data);
	};

	// const q = query(colRef, orderBy('createdAt'));

	// const unsubCol = onSnapshot(q, snapshot => {
	// 	let coins: any[] = [];
	// 	snapshot.docs.forEach(doc => {
	// 		coins.push({ ...doc.data(), id: doc.id });
	// 	});
	// 	console.log(coins);
	// });

	const addItem = () => {
		addDoc(colRef, {
			amount: 0.5,
			coinName: 'Ethereum',
			coinSymbol: 'ETH',
			purchaseDate: serverTimestamp(),
			purchasePrice: 2000,
			// createdAt: serverTimestamp(),
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};
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
	return { getData, addItem };
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
