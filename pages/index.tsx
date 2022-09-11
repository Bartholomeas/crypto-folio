import HeaderGreeting from '../components/atoms/HeaderGreeting/HeaderGreeting';
import InfoAssetsBox from '../components/organisms/InfoAssetsBox/InfoAssetsBox';
import TotalAssetsValue from '../components/organisms/TotalAssetsValue/TotalAssetsValue';

const Dashboard = () => {
	return (
		<div className='flex flex-col items-start gap w-full px bg-white min-h-[100vh] md:h-[100vh] md:py-lg'>
			<span className='nav-box w-full  h-[7rem] md:hidden'></span>
			<HeaderGreeting pageName='Dashboard'>Barth</HeaderGreeting>

			<div className='cards flex flex-col gap-sm w-full'>
				<TotalAssetsValue totalValue={3227} valueInBtc={0.3} changePercent={10} changeValue={21.34} />
				<div>
					<InfoAssetsBox />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
