import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
	source: StaticImageData;
	alt: string;
}

function CircleBgImage({ source, alt }: Props) {
	return (
		<div className="flex items-center justify-center w-[300px] h-[300px] p-[5rem] z-[100] bg-accentDark rounded-full">
			<Image src={source} alt={alt} placeholder="blur" />
		</div>
	);
}

export default CircleBgImage;
