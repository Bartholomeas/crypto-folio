import React from 'react';
interface Props {
	[key: string]: number | string;
	name: string;
	price: number;
	coinRank: number;
	priceChange: number;
	lowDay: number;
	highDay: number;
	volumeDay: number;
	totalSupply: number;
	circulatingSupply: number;
	allTimeHigh: number;
	athDate: number;
	allTimeLow: number;
	atlDate: number;
}

const CoinStatsBox = ({ props }: { props: Props }) => {
	// console.log(props);
	return (
		<div className='flex flex-col w-[300px] gap min-h-[300px] px py-sm bg-baseVeryLight rounded'>
			<h2 className='font-bold text-fontLight'>Cosmos statistics</h2>
			<ul className='flex flex-col w-full gap-sm '>
				<li className='flex justify-between items-center border-b-2 py-[0.3rem]'>
					<p className='text-fontLight text-sm'>Cosmos price</p>
					<p className='font-semibold text-font'>16.21$</p>
				</li>
			</ul>
		</div>
	);
};

export default CoinStatsBox;
