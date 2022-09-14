import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
	const [isLoading, setIsLoading] = useState(false);
	const [coinList, setCoinList] = useState([]);

	const getData = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await axios(url);
			setCoinList(data.data);
		} catch {
			setIsLoading(false);
			throw new Error('Something went wrong');
		}
		setIsLoading(false);
	}, [url]);

	useEffect(() => {
		getData();
	}, [url, getData]);

	return { coinList };
};

export default useFetch;
