import classNames from "classnames";

interface Props {
	appendAfter?: string;
	position?: string;
}

interface ObjectProps {
	[key: string]: string;
}

const positions: ObjectProps = {
	default: "text-left",
	center: "text-center",
};

type PageHeaderProps = React.PropsWithChildren<Props>;
function PageHeader({
	children,
	appendAfter,
	position = "default",
}: PageHeaderProps) {
	return (
		<h1
			className={classNames(
				"dark:text-white",
				"w-full",
				"py-md",
				"font-bold",
				"text-font",
				"rounded",
				positions[position],
				"leading-relaxed",
				"text-h1",
			)}
		>
			{children}{" "}
			{appendAfter && (
				<span className="font-normal text-md">{appendAfter}</span>
			)}
		</h1>
	);
}

export default PageHeader;
