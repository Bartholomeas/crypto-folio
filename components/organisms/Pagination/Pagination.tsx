import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	currPage: number;
}
const Pagination = ({ currPage }: Props) => {
	const [pages, setPages] = useState<any>({ previousPages: [], nextPages: [] });

	useEffect(() => {
		for (let i = 1; i < currPage; i++) {
			console.log(i);
			setPages((prevState: any) => ({
				...prevState,
				previousPages: [...prevState.previousPages, i],
			}));
		}
	}, []);
	console.log(pages);

	return (
		<div className='flex items-center gap-sm text-font text-xs bg-rose-100 rounded'>
			<button className=' px-sm text font-semibold'>{'<'}</button>
			{pages.previousPages.map((page: number) => {
				return <button key={uuidv4()}>{page}</button>;
			})}

			<p className='font-semibold text-sm'>{currPage}</p>
			<button className=' px-sm text font-semibold'>{'>'}</button>
		</div>
	);
};

export default Pagination;
