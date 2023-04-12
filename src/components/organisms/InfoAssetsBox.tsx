import ChangeInValue from "../atoms/ChangeInValue";

interface Props {
	children: string;
	asset: string;
	changeValue: number;
	isPercent?: boolean;
}

function InfoAssetsBox({ children, asset, changeValue, isPercent }: Props) {
	return (
		<div className="flex flex-col justify-center gap-sm w-full p-xs bg-primary-focus text-white rounded">
			<p className="text-xs">{children}</p>
			<div className="flex items-center gap-sm">
				<p className="font-bold text">{asset}</p>
				<ChangeInValue isPercent={isPercent}>{changeValue}</ChangeInValue>
			</div>
		</div>
	);
}

export default InfoAssetsBox;
