interface Props {
	children: React.ReactNode | React.ReactNode[];
}
function CoinName({ children }: Props) {
	return <h1 className=" text-base-content text-lg font-bold">{children}</h1>;
}

export default CoinName;
