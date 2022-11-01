import Link from "next/link";

import LinkItem from "../LinkItem/LinkItem";

interface Props {
	children: React.ReactNode;
	onClickFn?: (arg1: any) => void;
}
function TableRow({ children, onClickFn }: Props) {
	return (
		<tr
			onClick={onClickFn}
			className="dark:border-dmBorderColor dark:hover:bg-dmBaseElement
			w-full border-solid border-b-2 border-borderColor hover:bg-baseVeryLight transition-colors "
		>
			{children}
		</tr>
	);
}

export default TableRow;
