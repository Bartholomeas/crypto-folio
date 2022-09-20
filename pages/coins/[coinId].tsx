import React, { useState, useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import CoinHeadBox from '../../components/molecules/CoinHeadBox/CoinHeadBox';
import LinksContainer from '../../components/molecules/LinksContainer/LinksContainer';

interface InitialStateProps {
	homepage: string;
	blockchain_site: string | string[];
	github: string;
	reddit: string;
	forum: string;
}

const initialState: InitialStateProps = {
	homepage: '',
	blockchain_site: '',
	github: '',
	reddit: '',
	forum: '',
};

const CoinDetails = ({ coinDetails }: any) => {
	const router = useRouter();
	const [links, setLinks] = useState(initialState);

	// console.log(coinDetails.links);
	const { homepage, subreddit_url, blockchain_site, official_forum_url } = coinDetails.links;

	const linksArray = { homepage, subreddit_url, blockchain_site, official_forum_url };

	useEffect(() => {}, []);
	console.log(links);

	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh] max-w
		md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] py-[10rem] '>
			<div className='coin-info-heading'>
				<div className='coin-name-box'>
					<CoinHeadBox name={coinDetails.name} symbol={coinDetails.symbol} rank={coinDetails.market_cap_rank} />
				</div>
				<div>

					
				</div>
			</div>
			<div className='coin-prices'></div>
		</main>
	);
};

// export const getStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: true,
// 	};
// };

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
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
			// revalidate: 60,
		};
	} catch {
		throw new Error('Something went wrong in staticProps :(');
	}
};
export default CoinDetails;
