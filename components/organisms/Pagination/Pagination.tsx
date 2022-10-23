import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    <div
      className="dark:bg-dmBaseElement
		flex items-center justify-between gap-xs w-full text-font text-xs bg-baseVeryLight rounded md:justify-center md:mx-auto md:w-auto py-[0.3rem]"
    >
      <Link passHref href={`/${changePage(currPage, false)}`}>
        <a className="dark:text-dmFont px-xs py-xs text font-semibold">{'<'}</a>
      </Link>
      {pagesArr.map((page) => {
        return (
          <Link key={uuidv4()} passHref href={`/${page}`}>
            <a
              className={`dark:text-dmFont px-xs ${
                +currPage === +page &&
                'flex items-center justify-center text-sm text-white font-semibold bg-accent rounded h-full '
              }`}
            >
              {page}
            </a>
          </Link>
        );
      })}
      <Link passHref href={`/${changePage(currPage)}`}>
        <a className="dark:text-dmFont px-xs py-xs text font-semibold">{'>'}</a>
      </Link>
    </div>
  );
};

export default Pagination;
