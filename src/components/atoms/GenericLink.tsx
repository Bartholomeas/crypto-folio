import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

interface Props {
	href: string;
	theme?: string;
}

type GenericLinkInterface = React.PropsWithChildren<Props>;

const themes: { [key: string]: string } = {
	default:
		"dark:text-support relative text-center text-accentDark font-bold text-xs after:absolute after:content-[''] after:w-full after:h-[0.3rem] after:bottom-[-.3rem] after:rounded-full after:left-0 after:scale-x-0 after:transition-transform after:origin-left after:bg-accent hover:after:scale-x-100",
	cta: "dark:text-support relative py-2 px-4 w-full max-w-[300px] text-accent font-semibold text-lg text-center rounded-md z-[100] transition-colors border-2 border-accent hover:bg-accent hover:text-white",
	nav: "dark:text-baseLight after:content-[''] after:absolute after:left-[-200px] after:bottom-0 after:w-[100vh] after:h-full relative flex flex-row items-center justify-start text-center gap-sm h-full  py-4 text-font text md:flex-row md:justify-start md:text cursor-pointer z-100 md:hover:after:bg-accentHover before:content-[''] before:absolute before:left-[-2rem] before:bottom-0 before:h-full before:w-[5px]",
};

function GenericLink({
	children,
	href,
	theme = "default",
}: GenericLinkInterface) {
	const router = useRouter();
	return (
		<Link href={href} passHref>
			<a
				className={classNames(
					"flex",
					themes[theme],
					router.asPath === href &&
						theme === "nav" &&
						"dark:after:z-[-10] dark:after:bg-accent dark:hover:after:bg-accent after:bg-accentHover",
				)}
			>
				{children}
			</a>
		</Link>
	);
}

export default GenericLink;
