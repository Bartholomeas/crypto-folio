import React, { useEffect } from "react";

interface Props {
	coinName: string;
}

type CoinDescriptionProps = React.PropsWithChildren<Props>;

function CoinDescription({ children, coinName }: CoinDescriptionProps) {
	useEffect(() => {
		const description = document.querySelector(".description-content");
		if (description) description.innerHTML = `${children}`;
	}, []);

	return (
		<div className="text flex-col">
			<h3 className="dark:text-support text-accentDark text-md font-bold">
				About {coinName}
			</h3>
			<p className="dark:text-dmFont description-content text-font text leading-loose  overflow-y-auto">
				{children}
			</p>
		</div>
	);
}

export default CoinDescription;
