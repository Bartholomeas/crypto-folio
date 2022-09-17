import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';

const CoinDetail = () => {
	const router = useRouter();
	const { pid } = router.query;

	// const { data } = useFetch(
	// 	'https://api.coingecko.com/api/v3/coins/' +
	// 		pid +
	// 		'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
	// );

	const getData = async () => {
		try {
			const data =
				pid &&
				(await axios(
					`https://api.coingecko.com/api/v3/coins/${pid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
				));
			console.log(data);
		} catch {
			throw new Error('DOESNT WORK LOL');
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return <div>CoinDetail {pid} </div>;
};

export default CoinDetail;
