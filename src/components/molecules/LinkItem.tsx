import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface LinkItemProps {
	allLinks: string;
	linkKey: string;
}
function LinkItem({ allLinks, linkKey }: LinkItemProps) {
	if (Array.isArray(allLinks) && allLinks.length > 0 && allLinks[0] !== "") {
		return (
			<div className="dropdown dropdown-hover">
				<label htmlFor="links" className="btn">
					{linkKey}
				</label>
				<ul className="dropdown-content menu p-2 bg-base-100">
					{allLinks.map((link) => {
						if (link === "" || link === null) return null;
						return (
							<li
								key={link.trim() !== "" ? `link-${link}` : uuidv4()}
								className="z-1000"
							>
								<a
									href={link}
									target="blank"
									className="link link-hover
									flex items-center justify-center min-w-[3rem] w-fit h-[3rem] px py-[0.6rem] bg-base-200 text-xs font-semibold text-base-content rounded-xl cursor-pointer transition-colors"
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
		<a href={allLinks} target="blank" className="link">
			{linkKey}
		</a>
	);
}

export default LinkItem;
