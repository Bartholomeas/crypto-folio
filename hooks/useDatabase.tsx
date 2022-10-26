import { useCallback, useEffect, useState } from "react";
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
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { ReadVResult } from "fs";
import { db, auth } from "../firebaseConfig";

import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { userActions } from "../state/userSlice";
import { uiActions } from "../state/uiSlice";

const googleProvider = new GoogleAuthProvider();

const useDatabase = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(state => state.user);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user && loggedIn === false) {
        setLoggedInUser(user);
      } else {
        removeLoggedInUser();
      }
    });
  }, []);

  const setNotificationPopup = (
    isOpen: boolean,
    isSuccess = true,
    content: string
  ) => {
    dispatch(
      uiActions.toggleNotificationPopup({
        open: isOpen,
        success: isSuccess,
        content,
      })
    );
  };

  const setLoader = (active: boolean) => {
    dispatch(uiActions.toggleLoader(active));
  };

  const addUserToDB = (user: any) => {
    const userRef = doc(db, "users", userData.uid);
    setDoc(
      userRef,
      {
        id: user.uid,
        email: user.email,
        name: user.displayName || user.email,
        favouriteCoins: [],
        walletCoins: [],
      },
      { merge: true }
    );
  };

  const setLoggedInUser = (user: any) => {
    setLoggedIn(true);
    dispatch(
      userActions.setUserData({
        name: user.displayName || user.email,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL || "",
      })
    );
    localStorage.setItem("userId", user.uid);
  };

  const removeLoggedInUser = () => {
    setLoggedIn(false);
    dispatch(userActions.setInitialState());
    localStorage.removeItem("userId");
  };

  const signupCustomUser = async (
    emailValue: string,
    passwordValue: string
  ) => {
    setLoader(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );

      setLoader(false);
      addUserToDB(result.user);

      setNotificationPopup(true, true, "Congratulations, you got registered!");
      setTimeout(() => {
        setNotificationPopup(
          false,
          true,
          "Congratulations, you got registered!"
        );
      }, 3000);
    } catch {
      setLoader(false);

      setNotificationPopup(true, false, "We cannot register you :(");
      setTimeout(() => {
        setNotificationPopup(false, false, "We cannot register you :(!");
      }, 3000);
    }
  };

  const authWithEmail = async (emailValue: string, passwordValue: string) => {
    setLoader(true);

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );

      setLoader(false);
      setLoggedInUser(result.user);
      dispatch(uiActions.closeAuthPopup());

      setNotificationPopup(true, true, "Successfully logged in");
      setTimeout(() => {
        setNotificationPopup(false, true, "Successfully logged in");
      }, 3000);
    } catch {
      setLoader(false);

      setNotificationPopup(true, false, "Something went wrong :(");
      setTimeout(() => {
        setNotificationPopup(false, false, "Something went wrong :(");
      }, 3000);
    }
  };

  const authWithGoogle = async () => {
    setLoader(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);

      setLoader(false);
      addUserToDB(result.user);
      setLoggedInUser(result.user);
      dispatch(uiActions.closeAuthPopup());
      console.log(result.user);
      setNotificationPopup(true, true, "Successfully logged in");
      setTimeout(() => {
        setNotificationPopup(false, true, "Successfully logged in");
      }, 3000);
    } catch {
      setLoader(false);
      setNotificationPopup(true, false, "Something went wrong :(");
      setTimeout(() => {
        setNotificationPopup(false, false, "Something went wrong :(");
      }, 3000);
    }
  };

  const signoutUser = () => {
    try {
      removeLoggedInUser();
      signOut(auth);
      setNotificationPopup(true, true, "Successfully logged out");

      setTimeout(() => {
        setNotificationPopup(false, true, "Successfully logged out");
      }, 3000);
    } catch {
      throw new Error("Cannot logout");
    }
  };

  const addToFavourites = async (coinName: string) => {
    if (!userData.uid) {
      dispatch(uiActions.toggleAuthPopup());
      return;
    }
    if (coinName === "") return;

    const userRef = doc(db, "users", userData.uid);
    await updateDoc(userRef, {
      favouriteCoins: arrayUnion(coinName),
    });
  };

  return {
    loggedIn,
    authWithGoogle,
    signoutUser,
    signupCustomUser,
    authWithEmail,
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
