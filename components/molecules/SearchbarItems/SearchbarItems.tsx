import { v4 as uuidv4 } from "uuid";
import { CoinItem } from "../../../state/coinsSlice";
import SearchbarCoin from "../../atoms/SearchbarCoin/SearchbarCoin";

interface Props {
	coinsData: CoinItem[];
}
function SearchbarItems({ coinsData }: Props) {
	return (
		<div
			className={`dark:bg-dmBase dark:border-dmBorderColor
			 absolute flex flex-col gap-sm bg-baseVeryLight top-[100%] left-0 w-full p-sm translate-y-[.3rem] rounded text-xs border-2 border-solid border-baseLight max-h-[400px] overflow-y-scroll
            ${coinsData.length < 1 && "hidden"}
			`}
		>
			{coinsData.length >= 1 &&
				coinsData.map((coin) => (
					<SearchbarCoin
						key={uuidv4()}
						hrefRoute="/"
						coinSymbol={coin.symbol}
						coinLogo={coin.thumb}
						coinRank={coin.market_cap_rank}
					>
						{coin.name}
					</SearchbarCoin>
				))}
		</div>
	);
}

export default SearchbarItems;
