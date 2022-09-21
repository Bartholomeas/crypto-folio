import React, { useState, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CoinHeadBox from '../../components/molecules/CoinHeadBox/CoinHeadBox';
import LinkItem from '../../components/molecules/LinkItem/LinkItem';
import CoinPriceBox from '../../components/molecules/CoinPriceBox/CoinPriceBox';
import CoinMarketData from '../../components/molecules/CoinMarketData/CoinMarketData';

interface InitialStateProps {
	homepage: string | string[];
	blockchain_site: string | string[];
	github: string | string[];
	reddit: string | string[];
	forum: string | string[];
}

const initialState: InitialStateProps = {
	homepage: '',
	blockchain_site: '',
	github: '',
	reddit: '',
	forum: '',
};

const CoinDetails = ({ coinDetails }: any) => {
	const [links, setLinks] = useState<InitialStateProps>(initialState);
	const {
		homepage,
		subreddit_url,
		blockchain_site,
		official_forum_url,
		repos_url: { github },
	} = coinDetails.links;

	const {
		symbol,
		name,
		market_cap_rank,
		description,
		image,
		market_data,
		market_cap,
		total_volume,
		total_supply,
		max_supply,
		circulating_supply,
	} = coinDetails;

	// console.log(market_data.sparkline_7d.price);

	useEffect(() => {
		setLinks({
			homepage: homepage,
			blockchain_site: blockchain_site,
			github: github,
			reddit: subreddit_url,
			forum: official_forum_url,
		});
	}, [homepage, subreddit_url, blockchain_site, official_forum_url, github]);

	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh] max-w
		md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] py-[10rem] pb-[20rem] md:pb-auto '>
			<div
				className='top-container flex flex-col gap-xl h-fit w-full py
			md:flex-row'>
				<div
					className='coin-info-heading flex flex-col gap 
				md:max-w-[35%]'>
					<CoinHeadBox name={name} symbol={symbol} rank={market_cap_rank} />
					<div className='flex flex-col gap-sm'>
						<p className='text-fontLight text-sm font-semibold'>links</p>
						<div className='links flex items-center gap-sm flex-wrap w-fit'>
							{coinDetails &&
								Object.entries(links).map(([key, value]) => {
									return <LinkItem key={uuidv4()} allLinks={value} linkKey={key} />;
								})}
						</div>
					</div>
				</div>
				<div
					className='relative flex flex-col gap w-full h-fit
				md:w-[65%] px md:h-full
				before:absolute before:content-[""] before:top-0 before:left-[-0.3rem] before:bg-slate-100 before:h-full before:w-2 before:rounded-lg'>
					<CoinPriceBox
						name={name}
						market_cap={market_cap}
						volume={total_volume}
						curr_price={market_data.current_price.usd}
						high={market_data.high_24h.usd}
						low={market_data.low_24h.usd}
						price_change_24h={market_data.price_change_percentage_24h.toFixed(2)}
						total_supply={total_supply}
						max_supply={max_supply}
						circulatin_supply={circulating_supply}></CoinPriceBox>

					<div className='market-datas flex flex-col gap-sm w-full lg:flex-row md:gap-lg'>
						<CoinMarketData dataValue={43255321}>Market cap</CoinMarketData>
						<CoinMarketData dataValue={43255321}>Volume</CoinMarketData>
						<CoinMarketData dataValue={43255321}>Circulating supply</CoinMarketData>
					</div>
				</div>
			</div>

			<div className='content-container'>
				
			</div>
		</main>
	);
};

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
