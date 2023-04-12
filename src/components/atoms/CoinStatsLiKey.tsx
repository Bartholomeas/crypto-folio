interface Props {
	children: React.ReactNode | React.ReactNode[];
}

function CoinStatsLiKey({ children }: Props) {
	return <p className=" text-base-content text">{children}</p>;
}

export default CoinStatsLiKey;
