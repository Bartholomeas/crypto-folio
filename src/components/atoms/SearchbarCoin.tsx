import Image from "next/image";
import Link from "next/link";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	href: string;
	coinSymbol: string;
	coinLogo: string;
	coinRank: number;
	onClick?: () => void;
}
function SearchbarCoin({
	children,
	href,
	coinSymbol,
	coinLogo,
	coinRank,
	onClick,
}: Props) {
	return onClick ? (
		<button
			onClick={onClick}
			type="button"
			className="dark:bg-base-100 dark:border-2 dark:border-dmBorderColor dark:hover:bg-base-100
					flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem]
                hover:bg-base-100"
		>
			<div className="flex items-center gap-sm">
				<Image src={coinLogo} width={20} height={20} alt="Logo of coin" />
				<p className=" text-base-content ">{children}</p>
				<p className=" text-base-content font-bold">{coinSymbol}</p>
			</div>
			<p className="dark:text-supportDark font-bold text-base-content">
				#{coinRank}
			</p>
		</button>
	) : (
		<Link passHref href={href}>
			<a className="">
				<div
					className="dark:bg-base-100 dark:border-2 dark:border-dmBorderColor dark:hover:bg-base-100
					flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem]
                hover:bg-base-100"
				>
					<div className="flex items-center gap-sm">
						<Image src={coinLogo} width={20} height={20} alt="Logo of coin" />
						<p className=" text-base-content ">{children}</p>
						<p className=" text-base-content font-bold">{coinSymbol}</p>
					</div>
					<p className="dark:text-supportDark font-bold text-base-content">
						#{coinRank}
					</p>
				</div>
			</a>
		</Link>
	);
}

export default SearchbarCoin;
