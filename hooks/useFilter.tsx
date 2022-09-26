import React, { useCallback } from 'react';
import { CoinItem } from '../state/coinsSlice';
import { useAppDispatch, useAppSelector } from '../state/reduxHooks';
import { coinsActions } from '../state/coinsSlice';

const useFilter = () => {
	const dispatch = useAppDispatch();
	const { filteredCoins } = useAppSelector(state => state.coins);

	const filterCoins = (coinsList: CoinItem[], valueToSort: string) => {
		console.log('gut');
		const coinsListFiltered =
			coinsList.length > 1 &&
			coinsList.sort((a: any, b: any): number => {
				a[valueToSort] == b[valueToSort] && 0;
				return a[valueToSort] > b[valueToSort] ? 1 : -1;
			});
		console.log(coinsListFiltered);
		// dispatch(coinsActions.setFilteredCoins(filteredCoins));
	};

	return { filterCoins };
};

export default useFilter;
