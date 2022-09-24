import React, { useCallback, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import Label from '../../atoms/Label/Label';
import SearchbarItems from '../../molecules/SearchbarItems/SearchbarItems';
import { request } from 'http';

interface Props {
	placeholderText?: string;
}
const Searchbar = ({ placeholderText = '' }: Props) => {
	const [inputValue, setInputValue] = useState('');
	const [searchedCoins, setSearchedCoins] = useState([]);

	const clearCoinsData = () => {
		console.log('clear');
		setInputValue('');
		setSearchedCoins([]);
	};

	const getSearchedCoins = useCallback(async (coinValue: string) => {
		try {
			const data = await axios(`https://api.coingecko.com/api/v3/search?query=${coinValue}`);
			console.log('ustawia date coinow');
			setSearchedCoins(data.data.coins);
		} catch (error) {
			console.log(error);
		}
	}, []);

	let isTyping: any;
	const getSpecifiedCoinsData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') {
			setSearchedCoins([]);
			return;
		}

		console.log('TO COINS DATA');
		setInputValue(e.target.value);

		clearTimeout(isTyping);
		isTyping = setTimeout(() => {
			getSearchedCoins(inputValue);
		}, 1000);
	}, []);

	return (
		<div className=' relative flex flex-col w-full min-h-[3rem] md:max-w-[400px] z-[100]'>
			<Label forProp='searchbar'>
				<div className='flex justify-between items-center w-full h-full border-accent border-solid border-l-4 rounded-md'>
					<input
						onChange={getSpecifiedCoinsData}
						id='searchbar'
						placeholder={placeholderText}
						className='w-full h-full max-h-[4rem] py px-xs bg-baseVeryLight '
						type='text'
					/>
					<span className='flex items-center justify-center h-full max-h-[4rem] p-xs rounded-r  bg-accentDark text-lg text-white'>
						<MdSearch />
					</span>
				</div>
			</Label>
			<SearchbarItems coinsData={searchedCoins} />
		</div>
	);
};

export default Searchbar;
