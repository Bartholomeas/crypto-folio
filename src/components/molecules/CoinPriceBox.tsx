import DetailsBigPrice from "../atoms/DetailsBigPrice";
import PriceChangeDetails from "../atoms/PriceChangeDetails";

interface CoinPriceBoxProps {
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
}: CoinPriceBoxProps) {
	return (
		<div className="flex flex-col">
			<p className="text-base-content text">{name} price</p>
			<div className="flex items-center gap-sm">
				<DetailsBigPrice>{curr_price}</DetailsBigPrice>
				<p
					className={`
				text-neutral font-semibold py-[0.3rem] px-xs rounded text-xs
				${price_change_24h > 0 ? "bg-success" : "bg-error"}`}
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
