import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

interface Props {
	isBox?: boolean;
}

const FavouriteButton = ({ isBox = false }: Props) => {
	return (
		<button
			className={`group fav-btn flex items-center justify-end w-full py-xs
		${isBox && 'w-[3rem] h-[3rem] rounded-xl justify-center bg-baseLight text-fontLight'} w-full ${
				!isBox && 'px-xs'
			}`}>
			<MdStarBorder className='fav-btn group-hover:text-yellow-500' />
		</button>
	);
};

export default FavouriteButton;
