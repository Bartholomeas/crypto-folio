import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	image: string;
	symbol: string;
	capRank: number;
}

function TrendingCoin({ image, symbol, capRank, children }: Props) {
	return (
		<Link href="">
			<div
				className="dark:bg-dmBase
			flex items-center justify-between bg-baseVeryLight rounded-xl py-xs px-sm text cursor-pointer"
			>
				<div className="flex items-center gap-sm">
					<Image src={image || "/"} height="20px" width="20px" />
					<p className="dark:text-dmFont text-font">{children}</p>
				</div>
				<p className="dark:text-dmFont text-xs font-bold"> #{capRank}</p>
			</div>
		</Link>
	);
}

export default TrendingCoin;
