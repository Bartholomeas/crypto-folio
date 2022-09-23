import React from 'react';
import SearchbarCoin from '../../atoms/SearchbarCoin/SearchbarCoin';

const SearchbarItems = () => {
	return (
		<div className='absolute flex flex-col gap-sm bg-baseVeryLight top-[100%] left-0 w-full p-sm translate-y-[.3rem] rounded text-xs border-2 border-solid border-baseLight'>
			<SearchbarCoin>Bitcoin</SearchbarCoin>
			<SearchbarCoin>Bitcoin</SearchbarCoin>
			<SearchbarCoin>Bitcoin</SearchbarCoin>
			<SearchbarCoin>Bitcoin</SearchbarCoin>
		</div>
	);
};

export default SearchbarItems;
