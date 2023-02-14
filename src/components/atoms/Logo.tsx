import Image from "next/image";
import Link from "next/link";

interface Props {
	heightVal?: string;
}

function Logo({ heightVal = "50" }: Props) {
	return (
		<Link passHref href="/src/pages">
			<a className="cursor-pointer h-auto">
				<Image
					className="h-full"
					src="/logo.svg"
					width={heightVal}
					height={heightVal}
					alt="Logo of cointis app"
				/>
			</a>
		</Link>
	);
}

export default Logo;
