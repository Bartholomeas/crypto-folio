interface Props {
	children: React.ReactNode | React.ReactNode[];
}
function CoinSymbol({ children }: Props) {
	return (
		<div
			className="dark:bg-base-100
		flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-base-100 rounded-xl "
		>
			<h2
				className="
			 font-xs text-base-content font-bold"
			>
				{children}
			</h2>
		</div>
	);
}

export default CoinSymbol;
