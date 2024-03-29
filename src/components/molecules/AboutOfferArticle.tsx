import React from "react";
import { StaticImageData } from "next/image";
import CircleBgImage from "../atoms/CircleBgImage";
import Heading from "../atoms/Heading";

interface Props {
	children: React.ReactNode;
	articleTitle: string;
	source: StaticImageData;
	isReverse?: boolean;
}

function AboutOfferArticle({
	articleTitle,
	source,
	isReverse,
	children,
}: Props) {
	return (
		<div
			className={`flex flex-col-reverse items-center justify-between gap-lg w-full max-w-sm
${isReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
		>
			<div
				className="flex flex-col gap text-center md:text-left
	md:w-[50%]"
			>
				<Heading headingWeight={3}>{articleTitle}</Heading>
				<p className="text-white text-center leading-8 text-sm">{children}</p>
			</div>
			<CircleBgImage
				source={source}
				alt="Portal with coins expanding from him"
			/>
		</div>
	);
}

export default AboutOfferArticle;
