import Link from "next/link";
import { useCallback, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import TableData from "../components/molecules/TableData/TableData";
import TableHeader from "../components/molecules/TableHeader/TableHeader";
import TableRow from "../components/molecules/TableRow/TableRow";
import TotalAssetsValue from "../components/organisms/TotalAssetsValue/TotalAssetsValue";
import Table from "../components/organisms/Table/Table";
import TableHead from "../components/molecules/TableHead/TableHead";
import TableBody from "../components/molecules/TableBody/TableBody";
import MarginBox from "../components/atoms/MarginBox/MarginBox";
import SecondHeader from "../components/atoms/SecondHeader/SecondHeader";
import PageHeader from "../components/atoms/PageHeader/PageHeader";
import { useAppSelector } from "../state/reduxHooks";
import useFilter from "../hooks/useFilter";
import useUiHandling from "../hooks/useUi";
import Button from "../components/atoms/Button/Button";
import AddCoinModal from "../components/organisms/AddCoinModal/AddCoinModal";
import useDatabase from "../hooks/useDatabase";
import { db } from "../firebaseConfig";

function Dashboard() {
	const { sortCoins } = useFilter();
	const { openCoinModal } = useUiHandling();
	const { userData } = useAppSelector((state) => state.user);
	const { loggedIn, getUserWalletCoins, userWalletCoins } = useDatabase();

	useEffect(() => {
		const unsubscribe = onSnapshot(
			doc(db, "users", "sfiPWUa9OKZHZO4ayApZXaYkW6j2"),
			(item) => {
				if (loggedIn) console.log(item.data());
			},
		);

		return () => unsubscribe();
	}, [loggedIn]);

	return (
		<main
			className="dark:bg-dmBase flex flex-col items-start gap-sm w-full md:max-w px pb-[10rem] min-h-[100vh] bg-white overflow-y-auto
		md:h-[100vh] md:py-lg md:mr-[5rem]"
		>
			<MarginBox />
			<PageHeader appendAfter="of DefaultWallet">Dashboard</PageHeader>
			<div className="cards flex flex-col gap-sm w-full lg:flex-row">
				<TotalAssetsValue
					totalValue={32227}
					valueInBtc={0.3}
					changePercent={10}
					changeValue={21.34}
				/>
			</div>
			<div className="flex flex-col gap w-full mt-[5rem]">
				<AddCoinModal />
				<div className="flex items-center justify-between w-full">
					<SecondHeader>Explore coins</SecondHeader>
					<Link passHref href="/wallet">
						<Button onClickFn={openCoinModal} isAccent otherStyles="w-fit">
							Add coin +
						</Button>
					</Link>
				</div>
				<div className="flex flex-col justify-center w-full overflow-x-scroll">
					<Table>
						<colgroup>
							<col className="w-[5%]" />
							<col className="w-[20%]" />
							<col className="w-[20%]" />
						</colgroup>
						<TableHead>
							<TableRow>
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
								<TableHeader>Quantity</TableHeader>
								<TableHeader>Value</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableData isBold>1</TableData>
								<TableData leftAlign>Bitcoin</TableData>
								<TableData appendAfter="USD">21321</TableData>
								<TableData appendAfter="%" isBold>
									21.2
								</TableData>
								<TableData>0.73</TableData>
								<TableData appendAfter="USD">15600</TableData>
							</TableRow>
							<TableRow>
								<TableData isBold>1</TableData>
								<TableData leftAlign>Bitcoin</TableData>
								<TableData appendAfter="USD">21321</TableData>
								<TableData appendAfter="%" isBold>
									21.2
								</TableData>
								<TableData>0.73</TableData>
								<TableData appendAfter="USD">15600</TableData>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 16851.94,
//     "market_cap": 324313052427,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 353912011638,
//     "total_volume": 13857269578,
//     "high_24h": 16919.55,
//     "low_24h": 16715,
//     "price_change_24h": 28.6,
//     "price_change_percentage_24h": 0.17001,
//     "market_cap_change_24h": 513325717,
//     "market_cap_change_percentage_24h": 0.15853,
//     "circulating_supply": 19243693,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 69045,
//     "ath_change_percentage": -75.60379,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 67.81,
//     "atl_change_percentage": 24740.81181,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2022-12-26T13:39:46.577Z",
//     "price_change_percentage_24h_in_currency": 0.17001159946262154
// }
