import Image from "next/image";
import CoinName from "../../atoms/CoinName/CoinName";
import CoinRank from "../../atoms/CoinRank/CoinRank";
import CoinSymbol from "../../atoms/CoinSymbol/CoinSymbol";
import FavouriteButton from "../../atoms/FavouriteButton/FavouriteButton";

interface Props {
	image: string;
	name: string;
	symbol: string;
	rank: number;
}
function CoinHeadBox({ image, name, symbol, rank }: Props) {
	return (
		<div
			className='relative flex flex-col gap-sm translate-x-[2.4rem] h-fit
            before:content-[""] before:absolute before:w-[1.6rem] before:h-full before:rounded-full before:top-0 before:left-[-2.4rem] before:bg-accent'
		>
			<div className="flex items-center gap-sm">
				<Image src={image} width="30" height="30" />
				<CoinName>{name}</CoinName>
				<CoinSymbol>{symbol.toUpperCase()}</CoinSymbol>{" "}
				<FavouriteButton funcArg={name} isBox />
			</div>
			<CoinRank>{rank}</CoinRank>
		</div>
	);
}

export default CoinHeadBox;
