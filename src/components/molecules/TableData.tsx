import Image from "next/image";
import Link from "next/link";

interface Props {
	children: string | number | React.ReactNode;
	isBold?: boolean;
	appendBefore?: string | number;
	appendAfter?: string | number;
	leftAlign?: boolean;
	href?: string;
	imgSrc?: string;
}
function TableData({
	children,
	isBold,
	appendBefore,
	appendAfter,
	leftAlign,
	href,
	imgSrc,
}: Props) {
	let priceChangeStyles = "";

	if (appendAfter === "%" && children! > 0 && typeof children === "number") {
		priceChangeStyles = "dark:text-support text-success font-semibold text-xs";
	} else if (
		appendAfter === "%" &&
		children! < 0 &&
		typeof children === "number"
	) {
		priceChangeStyles = "dark:text-error text-error font-semibold text-xs";
	}

	return (
		<td
			className={` dark:text-dmFont
			${leftAlign ? "text-left" : "text-right"}
			px-xs text text-font h-[6rem]
			first:pl-xs last:pr-xs
			${isBold && "font-semibold"}
			md:table-cell [&:nth-child(1)]:text-center
			${priceChangeStyles}
			`}
		>
			{href ? (
				<Link passHref href={`/coins/${href.toLowerCase()}`} className="">
					<a
						className={`
						flex ${leftAlign ? "justify-start" : "justify-end"} items-center w-full h-full`}
					>
						{appendBefore && <span className="font-bold">{appendBefore}</span>}

						{imgSrc && (
							<div className=" w-[3rem] mr-4">
								<Image
									layout="responsive"
									src={imgSrc}
									width="10"
									height="10"
									alt={`${href} icon`}
								/>
							</div>
						)}
						{children}
						{appendAfter && (
							<span className="font-bold text-xs  [&:nth-child(2)]:ml-4">
								{" "}
								{appendAfter}
							</span>
						)}
					</a>
				</Link>
			) : (
				<div
					className={`
						flex ${leftAlign ? "justify-start" : "justify-end"} items-center w-full h-full`}
				>
					{appendBefore && <span className="font-bold">{appendBefore}</span>}

					{imgSrc && (
						<div className=" w-[3rem] mr-4">
							<Image
								layout="responsive"
								src={imgSrc}
								width="10"
								height="10"
								alt="Cryptocurrency icon"
							/>
						</div>
					)}
					{children}
					{appendAfter && (
						<span className="font-bold text-xs  [&:nth-child(2)]:ml-4">
							{" "}
							{appendAfter}
						</span>
					)}
				</div>
				// <>
				// 	<span className="font-bold">{appendBefore ?? ""}</span>
				// 	{children}
				// 	<span className="font-bold"> {appendAfter ?? " "}</span>
				// </>
			)}
		</td>
	);
}

export default TableData;
