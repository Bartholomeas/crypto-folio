interface Props {
	children: string;
	appendAfter?: string;
	otherStyles?: string;
}
function PageHeader({ children, appendAfter, otherStyles }: Props) {
	return (
		<h1
			className={`w-full py-md font-bold text-font rounded text-lg leading-relaxed
			md:text-xl
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
