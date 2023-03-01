import classNames from "classnames";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onClick?: (arg1?: React.MouseEvent<HTMLButtonElement>) => void;
	theme?: string;
	size?: string;
	icon?: string;
	type?: "button" | "submit";
	conditionalCheck?: boolean;
}

interface ObjectProps<T> {
	[key: string]: T;
}

const themes: ObjectProps<string> = {
	default:
		"dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-baseLight bg-baseLight text-font hover:bg-baseVeryLight",
	modal:
		"dark:bg-transparent dark:text-baseLight dark:hover:bg-transparent relative w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent text-md hover:bg-transparent after:origin-left after:content-[''] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0",
	accent: "bg-accent text-white hover:bg-accentDark ",
	error:
		"dark:text-error dark:bg-dmBaseElement dark:hover:bg-accentDark bg-baseLight text py-xs text-error",
};

const sizes: ObjectProps<string> = {
	default: "",
	full: "w-full",
};

const icons: ObjectProps<React.ReactNode> = {
	google: <BsGoogle />,
	logout: <MdLogout />,
};

type ButtonProps = React.PropsWithChildren<Props>;

function Button({
	children,
	onClick,
	theme = "default",
	size = "default",
	icon,
	type = "button",
	conditionalCheck = false,
}: ButtonProps) {
	return (
		<button
			type={type === "button" ? "button" : "submit"}
			onClick={onClick}
			className={classNames(
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
			{children} {icon && icons[icon]}
		</button>
	);
}

export default Button;
