import React, { useState, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CoinHeadBox from '../../components/molecules/CoinHeadBox/CoinHeadBox';
import LinkItem from '../../components/atoms/LinkItem/LinkItem';

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

	const linksArray = { homepage, subreddit_url, blockchain_site, official_forum_url };

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
		md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] py-[10rem] '>
			<div className='top-container flex justify-between h-[50rem] w-full py'>
				<div className='coin-info-heading flex flex-col md:flex-row'>
					<CoinHeadBox name={coinDetails.name} symbol={coinDetails.symbol} rank={coinDetails.market_cap_rank} />
					<div className='links'>
						{coinDetails &&
							Object.entries(links).map(([key, value]) => {
								return (
									<>
										<LinkItem key={uuidv4()} allLinks={value} linkKey={key} />
									</>
								);
							})}
					</div>
				</div>
				<div
					className='relative w-full h-fit
				md:w-[50%] px
				before:absolute before:content-[""] before:top-0 before:left-[-0.3rem] before:bg-slate-100 before:h-full before:w-2 before:rounded-lg'></div>
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
