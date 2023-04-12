interface Props {
	children: string | number;
	isHigh?: boolean;
}

function PriceChangeDetails({ children, isHigh = false }: Props) {
	return (
		<p
			className="
		text-xs text-base-content"
		>
			{isHigh ? "High" : "Low"} 24h:{" "}
			<span
				className="
			text-xs font-semibold text-base-content"
			>
				${children}
			</span>
		</p>
	);
}

export default PriceChangeDetails;
