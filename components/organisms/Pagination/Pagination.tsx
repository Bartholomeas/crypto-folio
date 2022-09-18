import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	currPage: number;
}
const Pagination = ({ currPage }: Props) => {
	const pagesArr = Array.from({ length: 10 }, (_, idx) => ++idx);

	const changePage = (pageId: any, next: boolean = true) => {
		if (+pageId === 10 && next) return 1;
		if (+pageId === 1 && !next) return 10;

		if (!next) {
			return +pageId! - 1;
		} else {
			return +pageId! + 1;
		}
	};

	return (
		<div className='flex items-center gap-sm text-font text-xs bg-baseLight rounded'>
			<Link passHref href={`/${changePage(currPage, false)}`}>
				<a className=' px-xs py-xs text font-semibold'>{'<'}</a>
			</Link>
			<button></button>
			{pagesArr.map(page => {
				return (
					<Link key={uuidv4()} passHref href={`/${page}`}>
						<a className={`px-xs ${+currPage === +page && ' text-sm font-semibold'}`}>{page}</a>
					</Link>
				);
			})}
			<Link passHref href={`/${changePage(currPage)}`}>
				<a className='px-xs py-xs text font-semibold'>{'>'}</a>
			</Link>
		</div>
	);
};

export default Pagination;
