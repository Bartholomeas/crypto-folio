interface Props {
	children: React.ReactNode;
	onClick?: (arg1: any) => void;
}
function TableRow({ children, onClick }: Props) {
	return (
		<tr
			onClick={onClick}
			className="dark:border-dmBorderColor dark:hover:bg-dmBaseElement hover
			w-full border-solid border-b-2 border-borderColor hover:bg-baseVeryLight transition-colors "
		>
			{children}
		</tr>
	);
}

export default TableRow;
