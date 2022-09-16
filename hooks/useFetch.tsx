import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url?: string) => {
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async () => {
		try {
			const data = url && (await axios(url));
			console.log('data sie wykonuje');
		} catch {
			throw new Error('Something went wrong');
		}
	}, [url]);
	useEffect(() => {
		getData();
	}, [url, getData]);
};

export default useFetch;
