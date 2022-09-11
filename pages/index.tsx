import HeaderGreeting from '../components/atoms/HeaderGreeting/HeaderGreeting';
import DailyChangeGraph from '../components/organisms/DailyChangeGraph/DailyChangeGraph';
import InfoAssetsBox from '../components/organisms/InfoAssetsBox/InfoAssetsBox';
import TotalAssetsValue from '../components/organisms/TotalAssetsValue/TotalAssetsValue';

const Dashboard = () => {
	return (
		<div className='flex flex-col max-w-[1400px] items-start gap w-full px bg-white min-h-[100vh] md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<span className='nav-box w-full  h-[7rem] md:hidden'></span>
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
		</div>
	);
};

export default Dashboard;
