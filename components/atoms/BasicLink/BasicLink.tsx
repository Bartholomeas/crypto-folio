import Link from "next/link";

interface Props {
	href: string;
}

type BasicLinkProps = React.PropsWithChildren<Props>;

function BasicLink({ children, href }: BasicLinkProps) {
	return (
		<Link href={href} passHref>
			<a
				className={`dark:text-support relative text-center text-accentDark font-bold text-xs
				after:absolute after:content-[""] after:w-full after:h-[0.3rem] after:bottom-[-.3rem] after:rounded-full after:left-0 after:scale-x-0
				after:transition-transform after:origin-left
				after:bg-accent
				hover:after:scale-x-100`}
			>
				{children}
			</a>
		</Link>
	);
}

export default BasicLink;
