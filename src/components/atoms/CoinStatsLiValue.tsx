import classNames from "classnames";

interface Props {
	type?: "success" | "error";
}

type CoinStatsLiValueProps = React.PropsWithChildren<Props>;

function CoinStatsLiValue({ children, type }: CoinStatsLiValueProps) {
	return (
		<p
			className={classNames(
				"dark:text-dmFont",
				"font-semibold",
				"text",
				"text-font",
				"text-end",
				type === "success" && "dark:text-support text-success",
				type === "error" && "dark:text-error text-error",
			)}
		>
			{children}
		</p>
	);
}

export default CoinStatsLiValue;
