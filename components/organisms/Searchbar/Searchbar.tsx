import React from 'react';
import Label from '../../atoms/Label/Label';

interface Props {
	placeholderText?: string;
}
const Searchbar = ({ placeholderText = '' }: Props) => {
	return (
		<Label>
			<input
				placeholder={placeholderText}
				className='w-full min-w-[200px] py-xs px-xs bg-baseVeryLight border-accent border-solid border-2 rounded-md
                md:max-w-[300px]
            '
				type='text'
			/>
		</Label>
	);
};

export default Searchbar;
