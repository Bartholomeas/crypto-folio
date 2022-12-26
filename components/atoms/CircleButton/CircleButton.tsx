import React from "react";

interface Props {
	onClickFn: () => void;
}

function CircleButton({ onClickFn }: Props) {
	return (
		<button
			className="d-flex items-center justify-center h-[60px] w-[60px] text-[3rem] p-4 rounded-full bg-accent text-white"
			type="button"
			onClick={onClickFn}
		>
			+
		</button>
	);
}

export default CircleButton;
