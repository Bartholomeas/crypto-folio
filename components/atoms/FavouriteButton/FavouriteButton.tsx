import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

interface Props {
	isBox?: boolean;
	funcArg?: string;
	onClickFn: (arg1: string) => void;
}

const FavouriteButton = ({ isBox = false, onClickFn, funcArg = '' }: Props) => {
	console.log(funcArg);
	return (
		<button
			onClick={() => onClickFn(funcArg)}
			className={`group fav-btn flex items-center justify-end w-full py-xs
		${isBox && 'w-[3rem] h-[3rem] rounded-xl justify-center bg-baseLight text-fontLight'} w-full ${
				!isBox && 'px-xs'
			}`}>
			<MdStarBorder className='fav-btn group-hover:text-yellow-500' />
		</button>
	);
};

export default FavouriteButton;
