import React, { useEffect, useState } from 'react';

interface Props {
	currPage: number;
}
const Pagination = ({ currPage }: Props) => {
	const [pages, setPages] = useState<any>({ previousPages: [], nextPages: [] });

	useEffect(() => {
		for (let i = 0; i < currPage; i++) {
			setPages((prevState: any) => ({
				...prevState,
				previousPages: [...prevState.previousPages, i],
			}));
		}
	}, [currPage]);
	console.log(pages);

	return (
		<div className='flex items-center text-font text-xs bg-rose-100 rounded'>
			<button className=' px-sm text font-semibold'>{'<'}</button>
			<p className='font-semibold text-sm'>{currPage}</p>
			<button className=' px-sm text font-semibold'>{'>'}</button>
		</div>
	);
};

export default Pagination;
