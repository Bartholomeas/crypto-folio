import DetailsBigPrice from "../../atoms/DetailsBigPrice/DetailsBigPrice";
import PriceChangeDetails from "../../atoms/PriceChangeDetails/PriceChangeDetails";

interface Props {
	name: string;
	curr_price: number;
	high: number;
	low: number;
	price_change_24h: number;
}

function CoinPriceBox({
	name,
	curr_price,
	high,
	low,
	price_change_24h,
}: Props) {
	return (
		<div className="flex flex-col">
			<p
				className="dark:text-dmFont
			text-fontOff text"
			>
				{name} price
			</p>
			<div className="flex items-center gap-sm">
				<DetailsBigPrice>{curr_price}</DetailsBigPrice>
				<p
					className="
				text-font font-semibold py-[0.3rem] px-xs bg-support rounded text-xs"
				>
					{price_change_24h > 0 ? "+" : ""}
					{price_change_24h} %
				</p>
			</div>
			<div className="flex flex-col">
				<PriceChangeDetails>{low}</PriceChangeDetails>
				<PriceChangeDetails isHigh>{high}</PriceChangeDetails>
			</div>
		</div>
	);
}

export default CoinPriceBox;
