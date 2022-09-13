import HeaderGreeting from '../components/atoms/HeaderGreeting/HeaderGreeting';
import TableData from '../components/molecules/TableData/TableData';
import TableHeader from '../components/molecules/TableHeader/TableHeader';
import TableRow from '../components/molecules/TableRow/TableRow';
import DailyChangeGraph from '../components/organisms/DailyChangeGraph/DailyChangeGraph';
import InfoAssetsBox from '../components/organisms/InfoAssetsBox/InfoAssetsBox';
import TotalAssetsValue from '../components/organisms/TotalAssetsValue/TotalAssetsValue';
import Table from '../components/organisms/Table/Table';
import TableHead from '../components/molecules/TableHead/TableHead';
import TableBody from '../components/molecules/TableBody/TableBody';
import MarginBox from '../components/atoms/MarginBox/MarginBox';

const Dashboard = () => {
	return (
		<main
			className='flex flex-col items-start gap-lg w-full md:max-w px pb-[10rem] min-h-[100vh] bg-white overflow-y-auto
		md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<HeaderGreeting pageName='Dashboard'>Barth</HeaderGreeting>

			<div className='cards flex flex-col gap-sm w-full lg:flex-row'>
				<DailyChangeGraph />
				<TotalAssetsValue totalValue={32227} valueInBtc={0.3} changePercent={10} changeValue={21.34} />
				<div className='flex flex-col lg:w-[35%] gap-sm'>
					<InfoAssetsBox asset='Atom' changeValue={14} isPercent={true}>
						Biggest move
					</InfoAssetsBox>
					<InfoAssetsBox asset='Juno' changeValue={21}>
						Biggest 24h profit
					</InfoAssetsBox>
				</div>
			</div>

			<div className='flex flex-col gap w-full overflow-x-scroll'>
				<h2 className='text-font font-bold text-lg'>Explore coins</h2>

				<Table>
					<colgroup>
						<col className='w-[3%]' />
						<col className='w-[20%]' />
						<col className='w-[20%]' />
						<col className='w-[15%]' />
						<col className='w-[20%]' />
						<col className='w-[22%]' />
					</colgroup>
					<TableHead>
						<TableRow>
							<TableHeader>#</TableHeader>
							<TableHeader leftAlign={true}>Name</TableHeader>
							<TableHeader>Current price</TableHeader>
							<TableHeader>24h change</TableHeader>
							<TableHeader>Quantity</TableHeader>
							<TableHeader>Value</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableData isBold={true}>1</TableData>
							<TableData leftAlign={true}>Bitcoin</TableData>
							<TableData appendAfter={'USD'}>21321</TableData>
							<TableData appendAfter={'%'} isBold={true}>
								21.2
							</TableData>
							<TableData>0.73</TableData>
							<TableData appendAfter={'USD'}>15600</TableData>
						</TableRow>
						<TableRow>
							<TableData isBold={true}>1</TableData>
							<TableData leftAlign={true}>Bitcoin</TableData>
							<TableData appendAfter={'USD'}>21321</TableData>
							<TableData appendAfter={'%'} isBold={true}>
								21.2
							</TableData>
							<TableData>0.73</TableData>
							<TableData appendAfter={'USD'}>15600</TableData>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</main>
	);
};

export default Dashboard;
