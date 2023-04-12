interface Props {
	children: React.ReactNode;
}

function DetailsBigPrice({ children }: Props) {
	return (
		<p
			className="
	text-lg font-bold text-accent"
		>
			$ {children}
		</p>
	);
}

export default DetailsBigPrice;
