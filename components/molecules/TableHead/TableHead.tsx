interface Props {
	children: React.ReactNode;
}
function TableHead({ children }: Props) {
	return (
		<thead
			className="dark:bg-dmBase dark:border-dmBaseElement
		 bg-white z-100 border-t-2 border-baseVeryLight "
		>
			{children}
		</thead>
	);
}

export default TableHead;
