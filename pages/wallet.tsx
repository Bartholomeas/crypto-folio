import MarginBox from "../components/atoms/MarginBox/MarginBox";
import PageHeader from "../components/atoms/PageHeader/PageHeader";
import TableBody from "../components/molecules/TableBody/TableBody";
import TableData from "../components/molecules/TableData/TableData";
import TableHead from "../components/molecules/TableHead/TableHead";
import TableHeader from "../components/molecules/TableHeader/TableHeader";
import TableRow from "../components/molecules/TableRow/TableRow";
import Table from "../components/organisms/Table/Table";
import useFilter from "../hooks/useFilter";

function Wallet() {
	const { sortCoins } = useFilter();

	return (
		<main
			className="dark:bg-dmBase flex flex-col items-start gap-sm w-full md:max-w px pb-[10rem] min-h-[100vh] bg-white overflow-y-auto
		md:h-[100vh] md:py-lg md:mr-[5rem]"
		>
			<MarginBox />
			<div className="flex flex-col w-full">
				<PageHeader appendAfter="of DefaultWallet">
					Your coin balance
				</PageHeader>
				<div className=" flex flex-col justify-center w-full overflow-x-scroll">
					<Table>
						<colgroup>
							<col className="w-[3%]" />
							<col className="w-[20%]" />
							<col className="w-[20%]" />
							<col className="w-[15%]" />
							<col className="w-[20%]" />
							<col className="w-[22%]" />
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

export default Wallet;
