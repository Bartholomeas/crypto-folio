import React from "react";

interface Props {
	headingWeight: number;
	theme?: string;
	align?: string;
	appendAfter?: string;
}
interface PropsObject<T> {
	[key: string | number]: T;
}

const headings: PropsObject<string> = {
	1: "h1",
	2: "h2",
	3: "h3",
	4: "h4",
};

const headingWeights: PropsObject<string> = {
	1: "text-h1",
	2: "text-h2",
	3: "text-h3",
	4: "text-h4",
};

const themes: PropsObject<string> = {
	default: "dark:text-white text-font",
	pageHeader:
		"dark:text-white w-full py-md font-bold text-white leading-relaxed text-h1",
};

const aligns: PropsObject<string> = {
	left: "text-left",
	center: "text-center",
};

type ButtonProps = React.PropsWithChildren<Props>;

function Heading({
	children,
	headingWeight,
	theme = "default",
	align = "left",
	appendAfter,
}: ButtonProps) {
	return React.createElement(
		headings[headingWeight],
		{
			className: `font-bold z-[100] ${themes[theme]} ${headingWeights[headingWeight]} ${aligns[align]}`,
		},
		children,
		appendAfter && <span className="font-normal text-md">{appendAfter}</span>,
	);
}

export default Heading;
