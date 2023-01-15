import Link from "next/link";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
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
import { auth, db } from "../firebaseConfig";
import { PurchaseDetails } from "../state/userSlice";

interface UpdatedCoinPrice {
	[key: string]: number;
}
interface SingleCoinShopping {
	date: string;
	amount: number;
	price: number;
}

function Dashboard() {
	const { userData } = useAppSelector((state) => state.user);
	const { sortCoins } = useFilter();
	const { openCoinModal } = useUiHandling();
	const { loggedIn } = useDatabase();
	const [isLoading, setIsLoading] = useState(true);
	const [userWalletCoins, setUserWalletCoins] = useState([]);
	const [coinPrices, setCoinPrices] = useState<UpdatedCoinPrice>({});

	async function handleWalletCoinsPrices(coins: string[]) {
		try {
			const result = await axios(
				`https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
					"%2C",
				)}&vs_currencies=usd`,
			);

			const updatedCoinPrices: UpdatedCoinPrice = Object.entries(
				result.data,
			).reduce(
				(acc: UpdatedCoinPrice, [key, value]: [string, any]) => ({
					...acc,
					[key]: value.usd,
				}),
				{},
			);
			setCoinPrices(updatedCoinPrices);
		} catch (e) {
			console.log(e);
		}
	}

	async function handleUserWalletCoins(user: any) {
		if (!user) return;
		const userSnap = await getDoc(doc(db, "users", user.uid));
		if (userSnap.exists()) {
			setUserWalletCoins(userSnap.data().walletCoins);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (!userData.uid) return undefined;
		const unsubscribe = onAuthStateChanged(auth, handleUserWalletCoins);
		const coinsArr = userWalletCoins?.map((coin: PurchaseDetails) =>
			coin.name.toLowerCase(),
		);
		if (coinsArr) handleWalletCoinsPrices(coinsArr);

		return () => {
			unsubscribe();
		};
	}, [loggedIn, userData.uid]);

	return (
		<main
			className="dark:bg-dmBase flex flex-col items-start gap-sm w-full
			 min-h-[100vh] px pb-[10rem] bg-white overflow-y-auto
		md:h-[100vh] md:py-lg md:mr-[5rem] md:max-w"
		>
			<MarginBox />
			<button
				type="button"
				onClick={() => {
					console.log(userWalletCoins);
				}}
			>
				KLIK2
			</button>
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
							{/* <col className="w-[5%]" />
							<col className="w-[20%]" />
							<col className="w-[20%]" /> */}
						</colgroup>
						<TableHead>
							<TableRow>
								<TableHeader onClickFn={sortCoins} value="market_cap_rank">
									#
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value="id" leftAlign>
									Name
								</TableHeader>
								<TableHeader>Last purchase</TableHeader>
								<TableHeader>Amount</TableHeader>
								<TableHeader>Value</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{userWalletCoins && !isLoading ? (
								userWalletCoins.map((coin: PurchaseDetails, index) => (
									<TableRow key={coin.symbol + coin.image}>
										<TableData>{index + 1}</TableData>
										<TableData
											imgSrc={coin.image}
											leftAlign
											appendAfter={coin.symbol.toUpperCase()}
										>
											{coin.name}
										</TableData>
										<TableData>01.01.2023</TableData>
										<TableData appendAfter={coin.symbol}>
											{coin.shoppings.reduce(
												(acc: number, object: any) => acc + object.amount,
												0,
											)}
										</TableData>
										<TableData appendAfter="USD">
											{coin.shoppings.reduce(
												(acc: number, object: SingleCoinShopping) =>
													acc +
													object.amount * coinPrices[coin.name.toLowerCase()],
												0,
											)}
										</TableData>
									</TableRow>
								))
							) : (
								<div>loading</div>
							)}
						</TableBody>
					</Table>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;
