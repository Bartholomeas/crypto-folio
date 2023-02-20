import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface Props {
	href: string;
	theme: string;
}

type LinkItemInterface = React.PropsWithChildren<Props>;

const themes = {
	default:
		"dark:text-support relative text-center text-accentDark font-bold text-xs after:absolute after:content-[''] after:w-full after:h-[0.3rem] after:bottom-[-.3rem] after:rounded-full after:left-0 after:scale-x-0 after:transition-transform after:origin-left after:bg-accent hover:after:scale-x-100",
	cta: "",
};

function LinkItem({ children, href, theme }: LinkItemInterface) {
	return (
		<Link href={href} passHref>
			<a className={classNames("flex", themes[theme])}>{children}</a>
		</Link>
	);
}

export default LinkItem;
