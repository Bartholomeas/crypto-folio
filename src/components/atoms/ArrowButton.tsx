/* eslint-disable react/button-has-type */
interface Props {
	onClick: () => void;
	arrowDirection: boolean;
}

function ArrowButton({ onClick, arrowDirection }: Props) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`absolute w-[45px] h-[45px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-accent rounded-full text-white text-lg font-bold rotate-[90deg]
			${arrowDirection ? "rotate-[-90deg]" : "rotate-[90deg]"} ${
				arrowDirection ? "md:rotate-[180deg]" : "md:rotate-0"
			} md:top-[50%] md:left-[0] xxl:hidden`}
		>
			{"<"}
		</button>
	);
}

export default ArrowButton;
