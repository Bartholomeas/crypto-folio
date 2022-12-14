import React from "react";

interface Props {
	children: React.ReactNode;
}

function ThirdHeader({ children }: Props) {
	return (
		<h3 className="text-support text-center bg-accentVeryDark px-sm py-xs rounded text-h3 font-semibold">
			{children}
		</h3>
	);
}

export default ThirdHeader;
