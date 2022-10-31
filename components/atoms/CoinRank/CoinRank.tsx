interface Props {
	children: React.ReactNode | React.ReactNode[];
}
function CoinRank({ children }: Props) {
	return (
		<div
			className="dark:bg-dmBaseElement
		 flex items-center justify-center h-[3rem] px py-[0.6rem] bg-baseLight rounded-xl w-fit "
		>
			<p className="dark:text-dmFont text-fontLight text-xs font-semibold">
				Rank #{children}
			</p>
		</div>
	);
}

export default CoinRank;
