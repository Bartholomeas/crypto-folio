import React from 'react';
import CoinName from '../../atoms/CoinName/CoinName';
import CoinRank from '../../atoms/CoinRank/CoinRank';
import CoinSymbol from '../../atoms/CoinSymbol/CoinSymbol';
import FavouriteButton from '../../atoms/FavouriteButton/FavouriteButton';

interface Props {
	// children: React.ReactNode | React.ReactNode[];
	name: string;
	symbol: string;
	rank: number;
}
const CoinHeadBox = ({ name, symbol, rank }: Props) => {
	return (
		<div
			className='relative translate-x-[2.4rem]
            before:content-[""] before:absolute before:w-[1.6rem] before:h-full before:rounded-full before:top-0 before:left-[-2.4rem]  before:bg-accent'>
			<div className='flex items-center gap-sm'>
				<CoinName>{name}</CoinName>
				<CoinSymbol>{symbol.toUpperCase()}</CoinSymbol> <FavouriteButton isBox={true} />
			</div>
			<CoinRank>{rank}</CoinRank>
		</div>
	);
};

export default CoinHeadBox;
