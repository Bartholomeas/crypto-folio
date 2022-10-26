interface Props {
	children: string | number;
	isHigh?: boolean;
}

function PriceChangeDetails({ children, isHigh = false }: Props) {
	return (
		<p
			className="dark:text-dmFont
		text-xs text-fontOff"
		>
			{isHigh ? "High" : "Low"} 24h:{" "}
			<span
				className=" dark:text-baseLight
			text-xs font-semibold text-fontOff"
			>
				${children}
			</span>
		</p>
	);
}

export default PriceChangeDetails;
