import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	allLinks: string | string[];
	linkKey: string;
}
const LinkItem = ({ allLinks, linkKey }: Props): any => {
	if (Array.isArray(allLinks)) {
		return allLinks.map(link => {
			if (link === '') return;
			return (
				<a
					key={uuidv4()}
					href={link}
					target='blank'
					className='flex items-center justify-center min-w-[3rem] w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer hover:bg-baseVeryLight transition-colors'>
					{linkKey}
				</a>
			);
		});
	} else {
		return (
			<a
				href={'allLinks'}
				target='blank'
				className='flex items-center justify-center w-fit h-[3rem] px py-[0.6rem] bg-baseLight text-xs font-semibold text-fontLight rounded-lg cursor-pointer hover:bg-baseVeryLight transition-colors'>
				Test link that isnt rendering
			</a>
		);
	}
};

export default LinkItem;
