import React, { useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';

const CoinDetail = ({ coinDetails }: any) => {
	const router = useRouter();
	const { coinId } = router.query;
	return <div>CoinDetail {coinId} </div>;
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const coinId = context!.params!.coinId;

	try {
		const res = await axios(
			`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
		);
		if (!coinId) return;
		return {
			props: {
				coinDetails: res.data,
			},
			revalidate: 60,
		};
	} catch {
		throw new Error('Something went wrong in staticProps :(');
	}
};
export default CoinDetail;
