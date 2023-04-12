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
				className="
			text text-base-content "
			>
				{children}
			</p>
			{secondDataValue ? (
				<p
					className="
				text text-base-content font-semibold"
				>
					{dataValue} <br />/ {secondDataValue}
				</p>
			) : (
				<p
					className="
				text text-base-content  font-semibold"
				>
					{dataValue}
				</p>
			)}
		</div>
	);
}

export default CoinMarketData;
