import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

interface Props {
	isBox?: boolean;
}

const FavouriteButton = ({ isBox = false }: Props) => {
	return (
		<button
			className={` flex items-center justify-end w-full py-xs
		${isBox && 'w-[3rem] h-[3rem] rounded-lg justify-center bg-baseLight text-fontLight'}`}>
			<MdStarBorder />
		</button>
	);
};

export default FavouriteButton;
