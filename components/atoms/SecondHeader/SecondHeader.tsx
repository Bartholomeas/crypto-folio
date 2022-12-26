interface Props {
	children: string;
	isLight?: boolean;
}
function SecondHeader({ children, isLight = false }: Props) {
	return (
		<h2
			className={`dark:text-white font-bold ${
				isLight ? "text-white" : "text-font"
			} text-h2
		 `}
		>
			{children}
		</h2>
	);
}

export default SecondHeader;
