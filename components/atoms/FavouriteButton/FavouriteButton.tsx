import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

const FavouriteButton = () => {
	return (
		<button className=' flex items-center justify-end w-full py-xs'>
			<MdStarBorder />
		</button>
	);
};

export default FavouriteButton;
