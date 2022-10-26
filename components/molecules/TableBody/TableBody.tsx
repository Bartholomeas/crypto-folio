interface Props {
	children: React.ReactNode;
}
function TableBody({ children }: Props) {
	return <tbody className="">{children}</tbody>;
}

export default TableBody;
