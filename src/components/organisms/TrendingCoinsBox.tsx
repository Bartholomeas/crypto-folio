import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useAppSelector } from "../../state/reduxHooks";
import FireIcon from "../atoms/FireIcon";
import TrendingCoin from "./TrendingCoin";

function TrendingCoinsBox() {
	const { sendRequest } = useFetch();
	const { trendingCoins } = useAppSelector((state) => state.coins);

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_TRENDING_COINS)
			sendRequest(process.env.NEXT_PUBLIC_TRENDING_COINS);
	}, []);
	return (
		<div
			className="
    relative flex flex-col justify-center gap-sm p-md bg-base-300 rounded"
		>
			<FireIcon />

			<h2 className="text-accent font-bold text-md">Trending coins</h2>

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
								href={id}
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
