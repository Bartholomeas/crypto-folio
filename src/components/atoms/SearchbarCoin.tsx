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
			className="dark:bg-dmBase dark:border-2 dark:border-dmBorderColor dark:hover:bg-dmBaseElement
					flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem]
                hover:bg-baseLight"
		>
			<div className="flex items-center gap-sm">
				<Image src={coinLogo} width={20} height={20} alt="Logo of coin" />
				<p className="dark:text-dmFont text-font ">{children}</p>
				<p className="dark:text-dmFont text-fontLight font-bold">
					{coinSymbol}
				</p>
			</div>
			<p className="dark:text-supportDark font-bold text-fontLight">
				#{coinRank}
			</p>
		</button>
	) : (
		<Link passHref href={href}>
			<a className="">
				<div
					className="dark:bg-dmBase dark:border-2 dark:border-dmBorderColor dark:hover:bg-dmBaseElement
					flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem]
                hover:bg-baseLight"
				>
					<div className="flex items-center gap-sm">
						<Image src={coinLogo} width={20} height={20} alt="Logo of coin" />
						<p className="dark:text-dmFont text-font ">{children}</p>
						<p className="dark:text-dmFont text-fontLight font-bold">
							{coinSymbol}
						</p>
					</div>
					<p className="dark:text-supportDark font-bold text-fontLight">
						#{coinRank}
					</p>
				</div>
			</a>
		</Link>
	);
}

export default SearchbarCoin;
