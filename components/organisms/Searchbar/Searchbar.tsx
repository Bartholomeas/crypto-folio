import React, { ReducerAction } from 'react';
import Label from '../../atoms/Label/Label';
import { MdSearch } from 'react-icons/md';
import SearchbarItems from '../../molecules/SearchbarItems/SearchbarItems';

interface Props<T> {
	onChangeFunc: (e: React.ChangeEvent<T>) => void;
	placeholderText?: string;
}
const Searchbar = ({ onChangeFunc, placeholderText = '' }: Props<HTMLInputElement>) => {
	return (
		<div className='relative flex flex-col w-full min-h-[3rem] md:max-w-[400px] z-[100]'>
			<Label forProp='searchbar'>
				<div className='flex justify-between items-center w-full h-full border-accent border-solid border-l-4 rounded-md'>
					<input
						onChange={onChangeFunc ?? ''}
						id='searchbar'
						placeholder={placeholderText}
						className='w-full h-full max-h-[4rem] py px-xs bg-baseVeryLight '
						type='text'
					/>
					<button className='flex items-center justify-center h-full max-h-[4rem] p-xs rounded-r  bg-accentDark text-lg text-white'>
						<MdSearch />
					</button>
				</div>
			</Label>
			<SearchbarItems />
		</div>
	);
};

export default Searchbar;
