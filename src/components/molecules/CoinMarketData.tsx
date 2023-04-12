interface Props {
	dataValue: React.ReactNode;
	secondDataValue?: React.ReactNode;
}

type CoinMarketDataProps = React.PropsWithChildren<Props>;

function CoinMarketData({
	children,
	dataValue,
	secondDataValue,
}: CoinMarketDataProps) {
	return (
		<div className="flex flex-col text-center">
			<p
				className=" dark:text-dmFont
			text text-fontLight "
			>
				{children}
			</p>
			{secondDataValue ? (
				<p
					className=" dark:text-baseLight
				text text-font font-semibold"
				>
					{dataValue} <br />/ {secondDataValue}
				</p>
			) : (
				<p
					className=" dark:text-baseLight
				text text-font  font-semibold"
				>
					{dataValue}
				</p>
			)}
		</div>
	);
}

export default CoinMarketData;
