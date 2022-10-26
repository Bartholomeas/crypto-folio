import { useState, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import CoinHeadBox from "../../components/molecules/CoinHeadBox/CoinHeadBox";
import LinkItem from "../../components/molecules/LinkItem/LinkItem";
import CoinPriceBox from "../../components/molecules/CoinPriceBox/CoinPriceBox";
import CoinMarketData from "../../components/molecules/CoinMarketData/CoinMarketData";
import SparklineChart from "../../components/organisms/SparklineChart/SparklineChart";
import CoinStatsBox from "../../components/organisms/CoinStatsBox/CoinStatsBox";
import CoinDescription from "../../components/molecules/CoinDescription/CoinDescription";
import { addSpacesToNumber } from "../../utils/convertUtils";

interface InitialStateProps {
	homepage: string | string[];
	blockchain_site: string | string[];
	github: string | string[];
	reddit: string | string[];
	forum: string | string[];
}

const initialState: InitialStateProps = {
	homepage: "",
	blockchain_site: "",
	github: "",
	reddit: "",
	forum: "",
};

function CoinDetails({ coinDetails }: any) {
	const [links, setLinks] = useState<InitialStateProps>(initialState);
	const {
		homepage,
		subreddit_url,
		blockchain_site,
		official_forum_url,
		repos_url: { github },
	} = coinDetails.links;
	const { symbol, name, market_cap_rank, description, image, market_data } =
		coinDetails;

	useEffect(() => {
		setLinks({
			homepage,
			blockchain_site,
			github,
			reddit: subreddit_url,
			forum: official_forum_url,
		});
	}, [homepage, subreddit_url, blockchain_site, official_forum_url, github]);

	return (
		<main
			className="dark:bg-dmBase flex flex-col items-start  w-full px min-h-[100vh] max-w overflow-y-scroll
		md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] py-[10rem] pb-[20rem] md:pb-auto "
		>
			<div
				className="top-container flex flex-col gap-xl h-fit w-full py
			md:flex-row"
			>
				<div
					className="coin-info-heading flex flex-col gap
				md:max-w-[35%]"
				>
					<CoinHeadBox name={name} symbol={symbol} rank={market_cap_rank} />
					<div className="flex flex-col gap-sm">
						<p className="dark:text-dmFont text-fontLight text font-semibold">
							links
						</p>
						<div className="links flex items-center gap-sm flex-wrap w-fit">
							{coinDetails &&
								Object.entries(links).map(([key, value]) => (
									<LinkItem key={uuidv4()} allLinks={value} linkKey={key} />
								))}
						</div>
					</div>
				</div>
				<div
					className="dark:border-dmFont
					flex flex-col gap-lg w-full h-fit
				md:w-[65%] px md:h-full
				border-baseLight md:border-l-2
				"
				>
					<CoinPriceBox
						name={name}
						curr_price={market_data.current_price.usd}
						high={market_data.high_24h.usd}
						low={market_data.low_24h.usd}
						price_change_24h={market_data.price_change_percentage_24h.toFixed(
							2,
						)}
					/>
				</div>
			</div>
			<div
				className=" dark:border-dmFont
			market-datas flex  justify-around gap w-full py border-t-2 border-b-2 border-baseLight lg:flex-row md:gap-lg "
			>
				<CoinMarketData
					dataValue={`$ ${addSpacesToNumber(market_data.market_cap.usd)}`}
				>
					Market cap
				</CoinMarketData>
				<CoinMarketData
					dataValue={`$ ${addSpacesToNumber(market_data.total_volume.usd)}`}
				>
					Volume
				</CoinMarketData>
				<CoinMarketData
					dataValue={addSpacesToNumber(market_data.total_supply)}
					secondDataValue={addSpacesToNumber(market_data.circulating_supply)}
				>
					Circulating supply
				</CoinMarketData>
			</div>

			<div className="content-container flex flex-col w-full gap-lg">
				<SparklineChart
					coinName={name}
					chartData={market_data.sparkline_7d.price}
				/>

				<div className="content flex flex-col gap lg:flex-row  ">
					<CoinStatsBox
						name={name}
						price={market_data.current_price.usd}
						coinRank={market_data.market_cap_rank}
						priceChange={market_data.price_change_percentage_24h}
						highDay={market_data.high_24h.usd}
						lowDay={market_data.low_24h.usd}
						volumeDay={market_data.total_volume.usd}
						totalSupply={market_data.total_supply}
						circulatingSupply={market_data.circulating_supply}
						allTimeHigh={market_data.ath.usd}
						athDate={market_data.ath_date.usd}
						allTimeLow={market_data.atl.usd}
						atlDate={market_data.atl_date.usd}
					/>
					<CoinDescription coinName={name}>{description.en}</CoinDescription>
				</div>
			</div>
		</main>
	);
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { coinId } = context.params!;

	try {
		const res = await axios(
			`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
		);
		if (!coinId) return;
		// eslint-disable-next-line consistent-return
		return {
			props: {
				coinDetails: res.data,
			},
			// revalidate: 60,
		};
	} catch {
		throw new Error("Something went wrong in staticProps :(");
	}
};
export default CoinDetails;
