import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAXKAYLizVGbouYzWsDfp65u_Zq_Ns5NIE',
	authDomain: 'oddy-3114a.firebaseapp.com',
	projectId: 'oddy-3114a',
	storageBucket: 'oddy-3114a.appspot.com',
	messagingSenderId: '145735350370',
	appId: '1:145735350370:web:922e4141ea99f191fd793b',
	measurementId: 'G-XHQQ8MXQ3W',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
