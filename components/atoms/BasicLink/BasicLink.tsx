import Link from 'next/link';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	hrefRoute: string;
	otherStyles?: string;
}

const BasicLink = ({ children, hrefRoute, otherStyles }: Props) => {
	return (
		<Link href={hrefRoute} passHref>
			<a
				className={`dark:text-support relative text-center text-accentDark font-semibold text-xs
				after:absolute after:content-[""] after:w-full after:h-[0.3rem] after:bottom-[-.3rem] after:rounded-full after:left-0 after:scale-x-0
				after:transition-transform after:origin-left
				after:bg-accent
				hover:after:scale-x-100 
                ${otherStyles}
                `}>
				{children}
			</a>
		</Link>
	);
};

export default BasicLink;
