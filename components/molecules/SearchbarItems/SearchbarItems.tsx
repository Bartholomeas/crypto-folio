import useForm from "../../../hooks/useForm";
import { CoinItem, coinsActions } from "../../../state/coinsSlice";
import { useAppDispatch } from "../../../state/reduxHooks";
import SearchbarCoin from "../../atoms/SearchbarCoin/SearchbarCoin";

interface Props {
	coinsData: CoinItem[];
}
function SearchbarItems({ coinsData }: Props) {
	const { setCoinPurchaseData } = useForm();

	return (
		<div
			className={`dark:bg-dmBase dark:border-dmBorderColor
			 absolute flex flex-col gap-sm bg-baseVeryLight top-[100%] left-0 w-full p-sm translate-y-[.3rem] rounded text-xs border-2 border-solid border-baseLight max-h-[400px] overflow-y-scroll z-[999]
            ${coinsData.length < 1 && "hidden"}
			`}
		>
			{coinsData.length >= 1 &&
				coinsData.map((coin) => (
					<SearchbarCoin
						onClickFn={() => {
							setCoinPurchaseData("name", coin.name);
							setCoinPurchaseData("symbol", coin.symbol);
						}}
						key={`${coin.id}-${coin.symbol}`}
						hrefRoute={`/coins/${coin.id}`}
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
