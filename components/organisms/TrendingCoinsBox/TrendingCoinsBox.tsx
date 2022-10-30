import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../../hooks/useFetch";
import { useAppSelector } from "../../../state/reduxHooks";
import FireIcon from "../../atoms/FireIcon/FireIcon";
import TrendingCoin from "../TrendingCoin/TrendingCoin";
import { CoinItem } from "../../../state/coinsSlice";

function TrendingCoinsBox() {
	const { sendRequest } = useFetch();
	const { trendingCoins } = useAppSelector((state) => state.coins);

	useEffect(() => {
		sendRequest("https://api.coingecko.com/api/v3/search/trending");
	}, []);
	return (
		<div
			className="dark:bg-dmBaseElement
    relative flex flex-col justify-center gap-sm  p-md bg-baseLight rounde
    "
		>
			<FireIcon otherStyles="top-[-2rem] right-[-1rem]" />

			<h2 className="dark:text-support font-bold text-md text-fontOff">
				Trending coins
			</h2>

			<div className="flex flex-col justify-center  gap-sm flex-wrap ">
				{trendingCoins.map(
					(
						{ item: { id, coin_id, name, thumb, symbol, market_cap_rank } },
						index,
					) => {
						if (index > 5) return false;

						return (
							<TrendingCoin
								key={coin_id}
								hrefRoute={id}
								image={thumb}
								symbol={symbol}
								capRank={market_cap_rank}
							>
								{name}
							</TrendingCoin>
						);
					},
				)}
			</div>
		</div>
	);
}

export default TrendingCoinsBox;
// https://api.coingecko.com/api/v3/search/trending
