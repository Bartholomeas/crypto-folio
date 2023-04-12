interface Props {
	children: React.ReactNode;
}
function TableHead({ children }: Props) {
	return (
		<thead
			className="dark:bg-base-100 dark:border-base-100
		 bg-white z-100 border-t-2 border-base-200 "
		>
			{children}
		</thead>
	);
}

export default TableHead;
