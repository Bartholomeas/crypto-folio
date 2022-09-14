import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import useReduxDispatch from './useReduxDispatch';

const useFetch = (url: string) => {
	const { coinsList, setCoinsList } = useReduxDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async () => {
		if (coinsList.length > 1) return;
		try {
			setIsLoading(true);
			const data = await axios(url);
			setCoinsList(data.data);
		} catch {
			setIsLoading(false);
			throw new Error('Something went wrong');
		}
		setIsLoading(false);
	}, [url]);

	useEffect(() => {
		getData();
	}, [url]);

	return { coinsList };
};

export default useFetch;
