interface Props {
	children: React.ReactNode | React.ReactNode[];
}
function CoinSymbol({ children }: Props) {
	return (
		<div
			className="dark:bg-dmBaseElement
		flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight rounded-xl "
		>
			<h2
				className="dark:text-dmFont
			 font-xs text-fontLight font-bold"
			>
				{children}
			</h2>
		</div>
	);
}

export default CoinSymbol;
