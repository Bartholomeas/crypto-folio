interface Props {
	children: string;
	appendAfter?: string;
	otherStyles?: string;
}
function PageHeader({ children, appendAfter, otherStyles }: Props) {
	return (
		<h1
			className={`dark:text-white
			w-full py-md font-bold text-font rounded leading-relaxed
			text-h1
		${otherStyles ?? ""}`}
		>
			{children}{" "}
			{appendAfter && (
				<span className="font-normal text-md">{appendAfter}</span>
			)}
		</h1>
	);
}

export default PageHeader;
