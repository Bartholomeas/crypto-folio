import React, { useCallback, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import Label from '../../atoms/Label/Label';
import SearchbarItems from '../../molecules/SearchbarItems/SearchbarItems';

interface Props {
	placeholderText?: string;
}
const Searchbar = ({ placeholderText = '' }: Props) => {
	const [inputValue, setInputValue] = useState('');
	const [searchedCoins, setSearchedCoins] = useState([]);

	const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const getSearchedCoins = useCallback(async (coinValue: string) => {
		try {
			const data = await axios(`https://api.coingecko.com/api/v3/search?query=${coinValue}`);
			console.log(data.data.coins);
			setSearchedCoins(data.data.coins);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className=' relative flex flex-col w-full min-h-[3rem] md:max-w-[400px] z-[100]'>
			<Label forProp='searchbar'>
				<div className='flex justify-between items-center w-full h-full border-accent border-solid border-l-4 rounded-md'>
					<input
						onChange={getInputValue}
						id='searchbar'
						placeholder={placeholderText}
						className='w-full h-full max-h-[4rem] py px-xs bg-baseVeryLight '
						type='text'
					/>
					<button
						onClick={() => getSearchedCoins(inputValue)}
						className='flex items-center justify-center h-full max-h-[4rem] p-xs rounded-r  bg-accentDark text-lg text-white'>
						<MdSearch />
					</button>
				</div>
			</Label>
			<SearchbarItems coinsData={searchedCoins} />
		</div>
	);
};

export default Searchbar;
