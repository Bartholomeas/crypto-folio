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
		<div
			className='flex flex-col max-w-[1400px] items-start gap w-full px bg-white min-h-[100vh] overflow-y-scroll
		md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<HeaderGreeting pageName='Dashboard'>Barth</HeaderGreeting>

			<div className='cards flex flex-col gap-sm w-full lg:flex-row'>
				<DailyChangeGraph />
				<TotalAssetsValue totalValue={32227} valueInBtc={0.3} changePercent={10} changeValue={21.34} />
				<div className='flex flex-col gap-sm'>
					<InfoAssetsBox asset='Atom' changeValue={14} isPercent={true}>
						Biggest move
					</InfoAssetsBox>
					<InfoAssetsBox asset='Juno' changeValue={21}>
						Biggest 24h profit
					</InfoAssetsBox>
				</div>
			</div>

			<div className='table w-full'>
				<Table>
					<colgroup>
						<col className='w-[10%]' />
						<col className='w-[30%]' />
						<col className='w-[20%]' />
						<col className='w-[20%]' />
						<col className='w-[20%]' />
					</colgroup>
					<TableHead>
						<TableRow>
							<TableHeader>#</TableHeader>
							<TableHeader>Name</TableHeader>
							<TableHeader>Current price</TableHeader>
							<TableHeader>24h change</TableHeader>
							<TableHeader>Quantity</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableData>1</TableData>
							<TableData>Bitcoin</TableData>
							<TableData>21321</TableData>
							<TableData>21.2</TableData>
							<TableData>0.73</TableData>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default Dashboard;
