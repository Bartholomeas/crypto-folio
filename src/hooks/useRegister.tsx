import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../providers/AppProvider";
import useUiHandling from "./useUiHandling";

function useRegister() {
	const { setNotificationPopup, setLoader } = useUiHandling();
	const { db, auth } = useContext(FirebaseContext);

	async function addUserToDB(user: User) {
		try {
			const userRef = await doc(db, "users", user.uid);

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
		} catch (e) {
			throw new Error("Something went wrong");
		}
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

	return { signupCustomUser };
}

export default useRegister;
