import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { app, db } from '../firebaseConfig';

const colRef = collection(db, 'favourites');

const useDatabase = () => {
	const [favourites, setFavourites] = useState([]);

	const getData = async () => {
		getDocs(colRef).then(snapshot => {
			console.log(snapshot.docs);
		});
	};

	return { getData };
};

export default useDatabase;
