import React from 'react';
import { addSpacesToNumber, convertDate } from '../../../utils/convertUtils';
import CoinStatsLi from '../../atoms/CoinStatsLi/CoinStatsLi';
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
	return (
		<div
			className='dark:bg-dmBaseElement
			flex flex-col min-w-[300px] w-full gap min-h-[300px] h-fit px py bg-baseVeryLight rounded
        lg:max-w-[350px]
        '>
			<h2 className='font-bold dark:text-dmFont text-fontLight text-md'>{props.name} statistics</h2>
			<ul className='flex flex-col w-full gap py-sm '>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Current rank</p>
					<p className='font-semibold text-font text-sm'>#{props.coinRank}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Price</p>
					<p className='font-semibold text-font text-sm'>$ {props.price}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Price change 24h</p>
					<p
						className={`font-semibold text-sm ${
							props.priceChange > 0 ? 'text-success' : 'text-error'
						} `}>
						{props.priceChange.toFixed(2)}%
					</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Day low</p>
					<p className='font-semibold text-font text-sm'>$ {props.lowDay}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Day high</p>
					<p className='font-semibold text-font text-sm'>$ {props.highDay}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Volume</p>
					<p className='font-semibold text-font text-sm'>$ {addSpacesToNumber(props.volumeDay)}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Total supply</p>
					<p className='font-semibold text-font text-sm'>{addSpacesToNumber(props.totalSupply)}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>Circulating supply</p>
					<p className='font-semibold text-font text-sm'>
						{addSpacesToNumber(props.circulatingSupply)}
					</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>All time HIGH</p>
					<p className='font-semibold text-sm text-success'>$ {props.allTimeHigh}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>All time LOW</p>
					<p className='font-semibold text-sm text-error'>$ {props.allTimeLow}</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>ATH date</p>
					<p className='font-semibold text-sm text-font'>
						{' '}
						{convertDate(props.athDate, 'MM-dd-yyyy')}
					</p>
				</CoinStatsLi>
				<CoinStatsLi>
					<p className='dark:text-dmFont text-fontLight text-sm'>ATL date</p>
					<p className='font-semibold text-sm text-font'>
						{' '}
						{convertDate(props.atlDate, 'MM-dd-yyyy')}
					</p>
				</CoinStatsLi>
			</ul>
		</div>
	);
};

export default CoinStatsBox;
