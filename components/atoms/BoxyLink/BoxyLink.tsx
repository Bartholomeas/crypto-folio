/* eslint-disable react/react-in-jsx-scope */
import classNames from "classnames";
import Link from "next/link";

interface Props {
	href: string;
	isAccent?: boolean;
	theme?: string;
}

interface ObjectProps {
	[key: string]: string;
}

const themes: ObjectProps = {
	default: "bg-baseLight text-font hover:bg-baseVeryLight",
	accent: "bg-accentDark text-white font-bold hover:bg-accent",
};

type BoxyLinkProps = React.PropsWithChildren<Props>;

function BoxyLink({ children, href, theme = "default" }: BoxyLinkProps) {
	return (
		<Link href={href} passHref>
			<a
				className={classNames(
					themes[theme],
					"flex",
					"items-center",
					"justify-center",
					"gap-sm",
					"px-sm",
					"py-sm",
					"h-full",
					"w-full",
					"text",
					"rounded-xl",
					"text-center",
					"transition-colors",
				)}
			>
				{children}
			</a>
		</Link>
	);
}

export default BoxyLink;
