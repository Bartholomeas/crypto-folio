import { useState } from 'react';
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
	orderBy,
} from 'firebase/firestore';
import { app, db } from '../firebaseConfig';

const colRef = collection(db, 'favourites');

const useDatabase = () => {
	const [favourites, setFavourites] = useState<any>([]);

	const q = query(colRef, where('symbol', '==', 'BTC'), orderBy('symbol', 'desc'));

	onSnapshot(q, snapshot => {
		let coins: any[] = [];
		snapshot.docs.forEach(doc => {
			coins.push({ ...doc.data(), id: doc.id });
		});
		console.log(coins);
	});

	const addItem = (e: any) => {
		e.preventDefault();

		const addForm: any = document.querySelector('.add-item');

		addDoc(colRef, {
			id: addForm?.querySelector('#coinId')?.value,
			symbol: addForm?.querySelector('#coinSymbol')?.value,
		});
	};
	const deleteItem = (e: any) => {
		e.preventDefault();
		const deleteForm: any = document.querySelector('.delete-item');

		const docRef = doc(db, 'favourites', deleteForm.idDelete.value);
		deleteDoc(docRef).then(() => {
			deleteForm.reset();
		});
	};

	return { addItem, deleteItem };
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
