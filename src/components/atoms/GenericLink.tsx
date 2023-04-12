import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface Props {
	href: string;
}

type GenericLinkInterface = React.PropsWithChildren<Props>;

function GenericLink({ children, href }: GenericLinkInterface) {
	const classes = classNames("flex, link link-hover");

	return (
		<Link href={href} passHref>
			<a className={classes}>{children}</a>
		</Link>
	);
}

export default GenericLink;
