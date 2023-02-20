import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../providers/AppProvider";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";
import { uiActions } from "../state/uiSlice";
import { userActions } from "../state/userSlice";
import { PurchaseDetails } from "../types/user";
import useUiHandling from "./useUiHandling";

interface WalletCoinProp {
	name: string;
	symbol: string;
	image: string;
	date: string;
	amount: number;
	price: number;
}
const useUserRequest = () => {
	const { userData } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const { db } = useContext(FirebaseContext);
	const { setLoader, setNotificationPopup } = useUiHandling();

	async function addToFavourites(coinName: string) {
		if (!userData.uid) {
			dispatch(uiActions.toggleAuthModal());
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
			throw new Error("Cannot add to favourites");
		}
	}

	async function addCoinToWallet(purchaseDetails: WalletCoinProp) {
		const userRef = doc(db, "users", userData.uid);
		const coinObject = {
			name: purchaseDetails.name,
			symbol: purchaseDetails.symbol,
			image: purchaseDetails.image,
			shoppings: [
				{
					amount: purchaseDetails.amount,
					price: purchaseDetails.price,
					date: purchaseDetails.date,
				},
			],
		};
		setLoader(true);
		try {
			const userSnap = await getDoc(userRef);
			const { walletCoins } = userSnap.data() || [];

			const coinIndex = walletCoins
				? walletCoins.findIndex(
						(item: PurchaseDetails) =>
							item.name === purchaseDetails.name &&
							item.symbol === purchaseDetails.symbol,
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  )
				: -1;

			if (coinIndex === -1) {
				await updateDoc(userRef, {
					walletCoins: arrayUnion(coinObject),
				});
			} else if (userSnap.exists()) {
				walletCoins[coinIndex].shoppings = [
					...walletCoins[coinIndex].shoppings,
					...coinObject.shoppings,
				];
				await updateDoc(userRef, { walletCoins });
			} else {
				throw new Error("No such document!");
			}
			setLoader(false);

			setNotificationPopup(true, "You added coin!", true);

			setTimeout(() => {
				setNotificationPopup(false, "You added coin!", true);
			}, 3000);
		} catch (e) {
			setLoader(false);
			throw new Error("Error lol");
		}
	}
	return { addToFavourites, addCoinToWallet };
};

export default useUserRequest;
