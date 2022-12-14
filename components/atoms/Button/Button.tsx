interface Props {
	children: React.ReactNode | React.ReactNode[];
	onClickFn?: (
		arg1?: React.MouseEvent<HTMLButtonElement> | EventTarget,
	) => void;
	isAccent?: boolean;
	otherStyles?: string;
	isSubmit?: boolean;
}

function Button({
	children,
	onClickFn,
	isAccent,
	otherStyles,
	isSubmit = false,
}: Props) {
	return (
		<button
			type={isSubmit ? "submit" : "button"}
			onClick={onClickFn}
			className={`relative flex items-center justify-center gap-sm px-sm py-sm h-full w-full text font-bold rounded-xl  ${
				isAccent
					? " bg-accent text-white  hover:bg-accentDark"
					: "dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-baseLight bg-baseLight text-font hover:bg-baseVeryLight"
			}
            transition-colors
            ${otherStyles}
            `}
		>
			{children}
		</button>
	);
}

export default Button;
