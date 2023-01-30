import Image from "next/image";
import Link from "next/link";

interface Props {
	href: string;
	image: string;
	symbol: string;
	capRank: number;
	children: React.ReactNode | React.ReactNode[];
}

function TrendingCoin({ href, image, symbol, capRank, children }: Props) {
	return (
		<Link href={`coins/${href}`}>
			<div
				className="dark:bg-dmBase dark:border-dmBorderColor dark:border-2
			flex items-center justify-between md:basis-1/4 bg-baseLight rounded-xl py-sm px-sm text cursor-pointer  transition-transform
			md:py-0
			hover:scale-[1.02]
			"
			>
				<div className="flex items-center gap-sm">
					<Image src={image || "/"} height="25px" width="25px" />
					<p className="dark:text-dmFont text-font">{children}</p>
					<p className="dark:text-dmFont text-xs text-font font-bold">
						{symbol}
					</p>
				</div>
				<p className=" dark:text-dmFont text-xs font-bold"> #{capRank}</p>
			</div>
		</Link>
	);
}

export default TrendingCoin;
