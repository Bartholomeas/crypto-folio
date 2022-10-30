import { useState } from "react";
import { CoinItem, coinsActions } from "../state/coinsSlice";
import { useAppDispatch } from "../state/reduxHooks";

function useFilter() {
	const dispatch = useAppDispatch();
	const [isAscending, setIsAscending] = useState(true);

	function sortCoins(coinsList: CoinItem[], valueToSort: string) {
		const sortedCoinsList =
			coinsList.length > 1 &&
			coinsList.sort((a, b) => {
				if (a[valueToSort] === b[valueToSort]) {
					return 0 * (isAscending ? 1 : -1);
				}
				if (a[valueToSort] > b[valueToSort]) {
					return 1 * (isAscending ? 1 : -1);
				}
				if (a[valueToSort] < b[valueToSort]) {
					return -1 * (isAscending ? 1 : -1);
				}
				return 0 * (isAscending ? 1 : -1);
			});
		dispatch(coinsActions.setCoinsList(sortedCoinsList));
		setIsAscending(!isAscending);
	}

	return { sortCoins };
}

export default useFilter;
