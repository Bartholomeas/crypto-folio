import Link from "next/link";

interface Props {
	currPage: number;
}
function Pagination({ currPage }: Props) {
	const pagesArr = Array.from({ length: 10 }, (_, idx) => idx + 1);

	const changePage = (pageId: number, next = true) => {
		if (+pageId === 10 && next) return 1;
		if (+pageId === 1 && !next) return 10;

		if (!next) {
			return +pageId - 1;
		}
		return +pageId + 1;
	};

	return (
		<div
			className="dark:bg-base-100
		flex items-center justify-between gap-xs w-full text-base-content text-xs bg-base-200 rounded md:justify-center md:mx-auto md:w-auto py-[0.3rem]"
		>
			<Link passHref href={`/${changePage(currPage, false)}`}>
				<a className=" px-xs py-xs text font-semibold">{"<"}</a>
			</Link>
			{pagesArr.map((page) => (
				<Link key={`page-${page}`} passHref href={`/${page}`}>
					<a
						className={` px-xs ${
							+currPage === +page &&
							"flex items-center justify-center text text-white font-semibold bg-accent rounded h-full "
						}`}
					>
						{page}
					</a>
				</Link>
			))}
			<Link passHref href={`/${changePage(currPage)}`}>
				<a className=" px-xs py-xs text font-semibold">{">"}</a>
			</Link>
		</div>
	);
}

export default Pagination;
