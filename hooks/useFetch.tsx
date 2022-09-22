// import { useState, useCallback, useEffect } from 'react';
// import axios from 'axios';
// import { data } from '../components/organisms/SparklineChart/SparklineChart';

// const useFetch = (url?: string) => {
// 	const [data, setData] = useState({});
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState('null');

// 	const sendRequest = async () => {
// 		setIsLoading(true);
// 		setError('null');
// 		try {
// 			const response = await axios(url!);
// 			setData(response);
// 			response;
// 		} catch (err) {
// 			setError('Something went wrong!');
// 			throw new Error('Something went wrong!');
// 		}
// 	};

// 	useEffect(() => {
// 		sendRequest();
// 	}, [url]);

// 	return { data };
// };

// export default useFetch;
