import classNames from "classnames";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onClick?: (arg1?: React.MouseEvent<HTMLButtonElement> | EventTarget) => void;
	isAccent?: boolean;
	otherStyles?: string;
	isSubmit?: boolean;
	theme?: string;
	size?: string;
	conditionalCheck?: boolean;
}

interface ObjectProps {
	[key: string]: string;
}

const themes: ObjectProps = {
	default:
		"dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-baseLight bg-baseLight text-font hover:bg-baseVeryLight",
	modal:
		"dark:bg-transparent dark:hover:bg-transparent w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent text-md hover:bg-transparent after:origin-left after:content-[''] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0",
	accented: "bg-accent text-white  hover:bg-accentDark",
};

const sizes: ObjectProps = {
	default: "",
	full: "w-full",
};

type ButtonProps = React.PropsWithChildren<Props>;

function Button({
	children,
	onClick,
	isSubmit = false,
	theme = "default",
	size = "default",
	conditionalCheck = false,
}: ButtonProps) {
	return (
		<button
			type={isSubmit ? "submit" : "button"}
			onClick={onClick}
			className={classNames(
				"relative",
				"flex",
				"items-center",
				"justify-center",
				"gap-sm",
				"px-sm",
				"py-sm",
				"text",
				"font-bold",
				"rounded-xl",
				"transition-colors",
				themes[theme],
				sizes[size],
				conditionalCheck && "font-semibold after:scale-x-100",
			)}
		>
			{children}
		</button>
	);
}

export default Button;
// isAccent
// 					? " bg-accent text-white  hover:bg-accentDark"
// 					: "dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-baseLight bg-baseLight text-font hover:bg-baseVeryLight"
// 			}
