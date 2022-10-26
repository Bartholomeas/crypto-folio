import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import FireIcon from "../../atoms/FireIcon/FireIcon";
import TrendingCoin from "../TrendingCoin/TrendingCoin";

function TrendingCoinsBox() {
	const { sendRequest } = useFetch();

	useEffect(() => {
		sendRequest("https://api.coingecko.com/api/v3/search/trending");
	}, []);
	return (
		<div
			className="dark:bg-dmBaseContrast
    relative flex flex-col gap-sm py-sm px-md bg-baseLight rounded min-h-[150px]
    md: max-w-[350px]"
		>
			<FireIcon otherStyles="top-[-2rem] right-[-1rem] " />

			<h2 className="font-bold text-[1.6rem] text-fontOff">Trending coins</h2>

			<div className="flex flex-col gap-sm">
				<TrendingCoin>Optimism OPT</TrendingCoin>
				<TrendingCoin>Optimism OPT</TrendingCoin>
				<TrendingCoin>Optimism OPT</TrendingCoin>
			</div>
		</div>
	);
}

export default TrendingCoinsBox;
// https://api.coingecko.com/api/v3/search/trending
