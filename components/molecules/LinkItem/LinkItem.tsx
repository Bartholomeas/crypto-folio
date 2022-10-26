import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
	allLinks: string;
	linkKey: string;
}
function LinkItem({ allLinks, linkKey }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleLinkList = (e: React.MouseEvent, toClose = false) =>
		toClose ? setIsOpen(false) : setIsOpen(!isOpen);

	if (Array.isArray(allLinks) && allLinks.length > 0 && allLinks[0] !== "") {
		return (
			<div className="relative flex-col gap-sm h-[3rem]">
				<button
					type="button"
					onClick={toggleLinkList}
					className="dark:bg-dmBaseElement dark:text-dmFont dark:hover:bg-accentDark
					 flex items-center justify-between min-w-[3rem] w-full h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-xl cursor-pointer hover:bg-baseVeryLight transition-colors"
				>
					{linkKey}
					<span className="font-bold text-fontLight text ">v</span>
				</button>
				<ul
					className={`${
						isOpen ? "scale-1 translate-x-0" : "scale-0 translate-x-1/2"
					} dark:bg-dmBaseElement absolute t-[3rem] origin-top transition-transform z-[1000] bg-baseVeryLight rounded-xl  flex flex-col gap-[0.3rem]`}
				>
					{allLinks.map((link) => {
						if (link === "" || link === null) return null;

						return (
							<li key={uuidv4()} className="z-1000">
								<a
									onClick={(e) => toggleLinkList(e, true)}
									href={link}
									target="blank"
									className="dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-dmFont
									flex items-center justify-center min-w-[3rem] w-fit h-[3rem] px py-[0.6rem] bg-baseVeryLight text-xs font-semibold text-fontLight rounded-xl cursor-pointer hover:bg-baseVeryLight transition-colors"
								>
									{linkKey}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	return (
		<a
			href={allLinks}
			target="blank"
			className="dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-dmFont
				flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-xl cursor-pointer hover:bg-baseVeryLight transition-colors"
		>
			{linkKey}
		</a>
	);
}

export default LinkItem;
