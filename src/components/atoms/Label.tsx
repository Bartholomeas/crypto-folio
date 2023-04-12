interface Props {
	children: string | React.ReactNode;
	forProp?: string;
}

function Label({ children, forProp }: Props) {
	return (
		<label htmlFor={forProp} className="label">
			{children}
		</label>
	);
}

export default Label;
