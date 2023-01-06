/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import FavouriteButton from "../../components/atoms/FavouriteButton/FavouriteButton";
import MarginBox from "../../components/atoms/MarginBox/MarginBox";
import PageHeader from "../../components/atoms/PageHeader/PageHeader";
import TableBody from "../../components/molecules/TableBody/TableBody";
import TableData from "../../components/molecules/TableData/TableData";
import TableHead from "../../components/molecules/TableHead/TableHead";
import TableHeader from "../../components/molecules/TableHeader/TableHeader";
import TableRow from "../../components/molecules/TableRow/TableRow";
import Searchbar from "../../components/organisms/Searchbar/Searchbar";
import Table from "../../components/organisms/Table/Table";
import Footer from "../../components/organisms/Footer/Footer";
import Pagination from "../../components/organisms/Pagination/Pagination";
import useFilter from "../../hooks/useFilter";
import TrendingCoinsBox from "../../components/organisms/TrendingCoinsBox/TrendingCoinsBox";
import { CoinItem, coinsActions } from "../../state/coinsSlice";
import { addSpacesToNumber } from "../../utils/convertUtils";
import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";

function SpecifiedPage({
	coins,
	page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const indexingByPage = page > 1 ? (page - 1) * 100 : 0;
	const { sortCoins } = useFilter();
	const dispatch = useAppDispatch();
	const { coinsList } = useAppSelector((state) => state.coins);

	useEffect(() => {
		dispatch(coinsActions.setCoinsList(coins));
	}, [coins]);

	return (
		<main
			className="
			dark:bg-dmBase
			flex flex-col items-start gap w-full px min-h-[100vh]  max-w
    md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] md:overflow-y-scroll bg-white"
		>
			<MarginBox />
			<PageHeader>all Cryptocurrencies</PageHeader>
			<div className="top-[5rem] flex flex-col gap w-full pt">
				<TrendingCoinsBox />
				<Searchbar placeholderText="Search for coin.." />
				<div className=" flex flex-col justify-center w-full overflow-x-scroll">
					{coins.length < 1 && (
						<p className="absolute font-bold text-xl text-accent">Loading...</p>
					)}

					<Table>
						<colgroup>
							<col className="w-[2%] lg:w-[2%]" />
							<col className="w-[3%] lg:w-[3%]" />
							<col className="w-[20%] lg:w-[30%]" />
							<col className="w-[20%] lg:w-[20%]" />
							<col className="w-[20%] lg:w-[20%]" />
							<col className="w-[35%] lg:w-[25%]" />
						</colgroup>
						<TableHead>
							<TableRow>
								<TableHeader />
								<TableHeader onClickFn={sortCoins} value="market_cap_rank">
									#
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value="id" leftAlign>
									Name
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value="current_price">
									Current price
								</TableHeader>
								<TableHeader
									onClickFn={sortCoins}
									value="price_change_percentage_24h"
								>
									24h change
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value="market_cap">
									Capitalization
								</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{coinsList.map((coin: CoinItem, index: number) => (
								<TableRow key={`${coin.name}-${coin.total_supply}`}>
									<TableData>
										<FavouriteButton funcArg={coin.name} />
									</TableData>
									<TableData hrefRoute={coin.id} isBold>
										{indexingByPage + index + 1}
									</TableData>
									<TableData
										imgSrc={coin.image}
										hrefRoute={coin.id}
										leftAlign
										appendAfter={coin.symbol.toUpperCase()}
									>
										{coin.name}
									</TableData>
									<TableData hrefRoute={coin.id} appendAfter="USD">
										{coin.current_price}
									</TableData>
									<TableData hrefRoute={coin.id} appendAfter="%">
										{coin.price_change_percentage_24h}
									</TableData>
									<TableData hrefRoute={coin.id} appendAfter="USD">
										{addSpacesToNumber(coin.market_cap)}
									</TableData>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
			<Pagination currPage={page} />
			<Footer>
				<p className="dark:text-dmFont text-xs text-fontLight">
					Crypto data powered by{" "}
					<a
						className="dark:text-support text-accent"
						rel="noreferrer"
						target="_blank"
						href="https://www.coingecko.com/"
					>
						Coingecko API
					</a>
				</p>
			</Footer>
		</main>
	);
}

export const getStaticPaths = async () => ({
	fallback: false,
	paths: [
		{ params: { page: "1" } },
		{ params: { page: "2" } },
		{ params: { page: "3" } },
		{ params: { page: "4" } },
		{ params: { page: "5" } },
		{ params: { page: "6" } },
		{ params: { page: "7" } },
		{ params: { page: "8" } },
		{ params: { page: "9" } },
		{ params: { page: "10" } },
	],
});

export const getStaticProps: GetStaticProps = async (context) => {
	const { page } = context.params!;

	try {
		const res = await axios(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=24h`,
		);
		return {
			props: {
				coins: res.data,
				page,
			},
			revalidate: 60,
		};
	} catch {
		throw new Error("Something went wrong :(");
	}
};
export default SpecifiedPage;
