import { addSpacesToNumber, convertDate } from "../../utils/convertUtils";
import CoinStatsLi from "../atoms/CoinStatsLi";
import CoinStatsLiKey from "../atoms/CoinStatsLiKey";
import CoinStatsLiValue from "../atoms/CoinStatsLiValue";

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
	bornIn: string;
}

enum ValueType {
	Success = "success",
	Error = "error",
}

function CoinStatsBox({
	name,
	price,
	coinRank,
	priceChange,
	lowDay,
	highDay,
	volumeDay,
	totalSupply,
	circulatingSupply,
	allTimeHigh,
	athDate,
	allTimeLow,
	atlDate,
	bornIn,
}: Props) {
	return (
		<div
			className="dark:bg-base-100
			flex flex-col min-w-[300px] w-full gap min-h-[300px] h-fit px py bg-base-200 rounded
        lg:max-w-[350px]
        "
		>
			<h2 className="font-bold  text-base-content text-md">
				{name} statistics
			</h2>

			<ul className="flex flex-col w-full gap py-sm ">
				<CoinStatsLi>
					<CoinStatsLiKey>Current rank</CoinStatsLiKey>
					<CoinStatsLiValue>#{coinRank}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Price</CoinStatsLiKey>
					<CoinStatsLiValue>{price}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Price change 24h</CoinStatsLiKey>
					<CoinStatsLiValue
						type={priceChange > 0 ? ValueType.Success : ValueType.Error}
					>
						{priceChange.toFixed(2)}%
					</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Day low</CoinStatsLiKey>
					<CoinStatsLiValue>$ {lowDay}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Day high</CoinStatsLiKey>
					<CoinStatsLiValue>$ {highDay}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Volume</CoinStatsLiKey>
					<CoinStatsLiValue>$ {addSpacesToNumber(volumeDay)}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Total supply</CoinStatsLiKey>
					<CoinStatsLiValue>{addSpacesToNumber(totalSupply)}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Circulating supply</CoinStatsLiKey>
					<CoinStatsLiValue>
						{addSpacesToNumber(circulatingSupply)}
					</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>All time HIGH</CoinStatsLiKey>
					<CoinStatsLiValue type={ValueType.Success}>
						$ {allTimeHigh}
					</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>All time LOW</CoinStatsLiKey>
					<CoinStatsLiValue type="error">$ {allTimeLow}</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>ATH date</CoinStatsLiKey>
					<CoinStatsLiValue>
						{convertDate(athDate, "MM-dd-yyyy")}
					</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>ATL date</CoinStatsLiKey>
					<CoinStatsLiValue>
						{convertDate(atlDate, "MM-dd-yyyy")}
					</CoinStatsLiValue>
				</CoinStatsLi>
				<CoinStatsLi>
					<CoinStatsLiKey>Born in</CoinStatsLiKey>
					<CoinStatsLiValue>{bornIn}</CoinStatsLiValue>
				</CoinStatsLi>
			</ul>
		</div>
	);
}

export default CoinStatsBox;
