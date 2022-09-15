import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import useReduxDispatch from './useReduxDispatch';
import { useGetCoinsQuery } from '../state/apiSlice';

const useFetch = (url?: string) => {
	// const { data, error, isLoading, isSuccess } = useGetCoinsQuery('');
	// const { coinsList, setCoinsList } = useReduxDispatch();
	// const getData = useCallback(async () => {
	// 	if (coinsList.length > 1) return;
	// 	try {
	// 		const data = await axios(url);
	// 		setCoinsList(data.data);
	// 		console.log('data sie wykonuje');
	// 	} catch {
	// 		throw new Error('Something went wrong');
	// 	}
	// }, [url, coinsList.length, setCoinsList]);
	// useEffect(() => {
	// 	getData();
	// }, [url, getData]);
	// return { coinsList, isLoading };
};

export default useFetch;
