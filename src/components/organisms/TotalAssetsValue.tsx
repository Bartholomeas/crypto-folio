import BalanceChart from "../atoms/BalanceChart";
import ChangeInValue from "../atoms/ChangeInValue";
import InfoAssetsBox from "./InfoAssetsBox";

interface Props {
	totalValue: number;
	valueInBtc: number;
	changePercent: number;
	changeValue: number;
}

function TotalAssetsValue({
	totalValue,
	valueInBtc,
	changePercent,
	changeValue,
}: Props) {
	return (
		<div
			className="flex flex-col justify-between gap-4 min-w-[200px] min-h-[350px] w-full p rounded text-white bg-accent
			"
		>
			<div className="flex justify-between gap-10">
				<div
					className="flex flex-col gap-4
					md:flex-row
				"
				>
					<div className="flex flex-col bg-warning items-start h-fit w-full">
						<p>Balance</p>
						<p className="text-lg font-bold">{totalValue}$</p>
						<p className="text-xs"> ={valueInBtc} BTC</p>
					</div>
					<div className="flex flex-col items-end bg-accentDark w-fit h-fit p-xs rounded">
						<ChangeInValue isPercent>{changePercent}</ChangeInValue>
						<ChangeInValue isPercent={false}>{changeValue}</ChangeInValue>
					</div>
				</div>
				<div
					className="flex flex-col items-start w-full lg:w-[40%] gap-sm
				md:flex-row"
				>
					<InfoAssetsBox asset="Atom" changeValue={14} isPercent>
						Biggest move
					</InfoAssetsBox>
					<InfoAssetsBox asset="Juno" changeValue={21}>
						Biggest 24h profit
					</InfoAssetsBox>
				</div>
			</div>

			<div style={{ position: "relative" }}>
				<BalanceChart chartData={[{ test: 2 }]} />
			</div>
		</div>
	);
}

export default TotalAssetsValue;
