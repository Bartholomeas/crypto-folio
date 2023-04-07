/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import MarginBox from "../../components/atoms/MarginBox";
import Searchbar from "../../components/organisms/Searchbar";
import Table from "../../components/organisms/Table";
import Footer from "../../components/organisms/Footer";
import Pagination from "../../components/organisms/Pagination";
import useFilter from "../../hooks/useFilter";
import TrendingCoinsBox from "../../components/organisms/TrendingCoinsBox";
import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";
import Heading from "../../components/atoms/Heading";
import { CoinItem, coinsActions } from "../../state/coinsSlice";
import TableRow from "../../components/molecules/TableRow";
import TableData from "../../components/molecules/TableData";
import FavouriteButton from "../../components/atoms/FavouriteButton";
import { addSpacesToNumber } from "../../utils/convertUtils";

function SpecifiedPage({
	coins,
	page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { sortCoins } = useFilter();
	const dispatch = useAppDispatch();
	const { coinsList } = useAppSelector((state) => state.coins);

	const indexingByPage = page && page > 1 ? (page - 1) * 100 : 0;

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
			<Heading headingWeight={1}>all Cryptocurrencies</Heading>
			<div className="top-[5rem] flex flex-col gap w-full pt">
				<TrendingCoinsBox />
				<Searchbar placeholderText="Search for coin.." />
				<div className=" flex flex-col justify-center w-full overflow-x-scroll">
					{coins.length < 1 && (
						<p className="absolute font-bold text-xl text-accent">Loading...</p>
					)}

					<Table
						cols={[
							"w-[2%]",
							"w-[3%]",
							"w-[20%] lg:w-[30%]",
							"w-[20%] lg:w-[20%]",
							"w-[20%] lg:w-[20%]",
							"w-[35%] lg:w-[25%]",
						]}
						tableHeaders={[
							{ name: "" },
							{ name: "#", onClick: () => sortCoins, value: "market_cap_rank" },
							{
								name: "Name",
								onClick: sortCoins,
								value: "id",
								props: { leftAlign: true },
							},
							{
								name: "Current price",
								onClick: sortCoins,
								value: "current_price",
							},
							{
								name: "24h change",
								onClick: sortCoins,
								value: "price_change_percentage_24h",
							},
							{
								name: "Capitalization",
								onClick: sortCoins,
								value: "market_cap",
							},
						]}
						page={page}
					>
						{coinsList.map((coin: CoinItem, index: number) => (
							<TableRow key={`${coin.name}-${coin.total_supply}`}>
								<TableData>
									<FavouriteButton funcArg={coin.name} />
								</TableData>
								<TableData href={coin.id} isBold>
									{indexingByPage + index + 1}
								</TableData>
								<TableData
									imgSrc={coin.image}
									href={coin.id}
									leftAlign
									appendAfter={coin.symbol.toUpperCase()}
								>
									{coin.name}
								</TableData>
								<TableData href={coin.id} appendAfter="USD">
									{coin.current_price}
								</TableData>
								<TableData href={coin.id} appendAfter="%">
									{coin.price_change_percentage_24h}
								</TableData>
								<TableData href={coin.id} appendAfter="USD">
									{addSpacesToNumber(coin.market_cap)}
								</TableData>
							</TableRow>
						))}
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
			`${process.env.NEXT_PUBLIC_ALL_COINS_1}${page}${process.env.NEXT_PUBLIC_ALL_COINS_2}`,
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
