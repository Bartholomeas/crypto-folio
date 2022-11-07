interface Props {
	children: string;
	isLight?: boolean;
}
function SecondHeader({ children, isLight = false }: Props) {
	return (
		<h2
			className={`font-bold ${
				isLight ? "text-white" : "text-accentDark"
			} text-h2
		 `}
		>
			{children}
		</h2>
	);
}

export default SecondHeader;
