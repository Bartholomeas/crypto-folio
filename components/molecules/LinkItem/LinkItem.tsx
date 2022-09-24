import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	allLinks: string;
	linkKey: string;
}
const LinkItem = ({ allLinks, linkKey }: Props): any => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleLinkList = (e: React.MouseEvent, toClose = false) => {
		toClose && setIsOpen(false);
		setIsOpen(!isOpen);
	};

	if (Array.isArray(allLinks) && allLinks.length > 0 && allLinks[0] !== '') {
		return (
			<div className='relative flex-col gap-sm h-[3rem]'>
				<button
					onClick={toggleLinkList}
					className='flex items-center justify-center min-w-[3rem] w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer hover:bg-baseVeryLight transition-colors'>
					{linkKey}
				</button>
				<ul
					className={`${
						isOpen ? 'ascale-1 translate-x-0' : 'scale-0 translate-x-1/2'
					} absolute t-[3rem] origin-top transition-transform`}>
					{allLinks.map(link => {
						if (link === '' || link === null) return;

						return (
							<li key={uuidv4()} className='z-1000'>
								<a
									onClick={e => toggleLinkList(e, true)}
									href={link}
									target='blank'
									className='flex items-center justify-center min-w-[3rem] w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer hover:bg-baseVeryLight transition-colors'>
									{linkKey}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return (
			allLinks !== undefined && (
				<a
					href={allLinks}
					target='blank'
					className='flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer hover:bg-baseVeryLight transition-colors'>
					{linkKey}
				</a>
			)
		);
	}
};

export default LinkItem;
