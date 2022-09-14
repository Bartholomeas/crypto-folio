import React from 'react';
import Label from '../../atoms/Label/Label';
import { MdSearch } from 'react-icons/md';

interface Props {
	placeholderText?: string;
}
const Searchbar = ({ placeholderText = '' }: Props) => {
	return (
		<div className='flex flex-col w-full min-h-[3rem] md:max-w-[400px] '>
			<Label forProp='searchbar'>
				<div className='flex justify-between items-center w-full h-full border-accent border-solid border-l-4 rounded-md'>
					<input
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
		</div>
	);
};

export default Searchbar;
