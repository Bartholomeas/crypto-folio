import TableData from "../components/molecules/TableData/TableData";
import TableHeader from "../components/molecules/TableHeader/TableHeader";
import TableRow from "../components/molecules/TableRow/TableRow";
import DailyChangeGraph from "../components/organisms/DailyChangeGraph/DailyChangeGraph";
import InfoAssetsBox from "../components/organisms/InfoAssetsBox/InfoAssetsBox";
import TotalAssetsValue from "../components/organisms/TotalAssetsValue/TotalAssetsValue";
import Table from "../components/organisms/Table/Table";
import TableHead from "../components/molecules/TableHead/TableHead";
import TableBody from "../components/molecules/TableBody/TableBody";
import MarginBox from "../components/atoms/MarginBox/MarginBox";
import SecondHeader from "../components/atoms/SecondHeader/SecondHeader";
import PageHeader from "../components/atoms/PageHeader/PageHeader";
import { useAppSelector } from "../state/reduxHooks";

function Dashboard() {
	const user = useAppSelector((state) => state.user);
	console.log(user);

	return (
		<main
			className="dark:bg-dmBase flex flex-col items-start gap-sm w-full md:max-w px pb-[10rem] min-h-[100vh] bg-white overflow-y-auto
		md:h-[100vh] md:py-lg md:mr-[5rem]"
		>
			<MarginBox />
			<PageHeader appendAfter="of DefaultWallet">Dashboard</PageHeader>
			<div className="cards flex flex-col gap-sm w-full lg:flex-row">
				<DailyChangeGraph />
				<TotalAssetsValue
					totalValue={32227}
					valueInBtc={0.3}
					changePercent={10}
					changeValue={21.34}
				/>

				<div className="flex flex-col lg:w-[35%] gap-sm">
					<InfoAssetsBox asset="Atom" changeValue={14} isPercent>
						Biggest move
					</InfoAssetsBox>
					<InfoAssetsBox asset="Juno" changeValue={21}>
						Biggest 24h profit
					</InfoAssetsBox>
				</div>
			</div>

			<div className="flex flex-col gap w-full mt-[5rem]">
				<SecondHeader>Explore coins</SecondHeader>
				<div className="w-full  overflow-x-auto">
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
								<TableHeader>#</TableHeader>
								<TableHeader leftAlign>Name</TableHeader>
								<TableHeader>Current price</TableHeader>
								<TableHeader>24h change</TableHeader>
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
