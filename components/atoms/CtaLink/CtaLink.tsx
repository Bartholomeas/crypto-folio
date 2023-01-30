import Link from "next/link";
import React from "react";

interface Props {
	href: string;
	children: React.ReactNode;
}

function CtaLink({ href, children }: Props) {
	return (
		<Link href={href} passHref>
			<a
				className="dark:text-support
				 relative py-2 px-4 w-full max-w-[300px] text-accent font-semibold text-lg text-center rounded-md z-[100]
				 transition-colors
				 border-2 border-accent

				hover:bg-accent hover:text-white"
			>
				{children}
			</a>
		</Link>
	);
}

export default CtaLink;
