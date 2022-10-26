interface Props {
	children: React.ReactNode | React.ReactNode[];
	type?: "success" | "error";
}
function CoinStatsLiValue({ children, type }: Props) {
	return (
		<p
			className={`dark:text-dmFont font-semibold text text-font ${
				type === "success" && "text-success dark:text-support"
			}
			${type === "error" && "text-error"}
			`}
		>
			{children}
		</p>
	);
}

export default CoinStatsLiValue;
