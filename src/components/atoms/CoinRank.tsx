interface Props {
	children: React.ReactNode | React.ReactNode[];
}
function CoinRank({ children }: Props) {
	return (
		<div
			className="dark:bg-base-100
		 flex items-center justify-center h-[3rem] px py-[0.6rem] bg-base-100 rounded-xl w-fit "
		>
			<p className=" text-base-content text-xs font-semibold">
				Rank #{children}
			</p>
		</div>
	);
}

export default CoinRank;
