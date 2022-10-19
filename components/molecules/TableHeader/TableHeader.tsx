import React from 'react';
import { CoinItem } from '../../../state/coinsSlice';
import { useAppSelector } from '../../../state/reduxHooks';
interface Props {
	children?: string;
	leftAlign?: boolean;
	onClickFn?: (arg1: CoinItem[], arg2: string) => void | undefined;
	value?: string;
}
const TableHeader = ({ children, leftAlign, onClickFn, value }: Props) => {
	const { coinsList } = useAppSelector(state => state.coins);

	return (
		<th
			className={`dark:text-baseLight
			py-sm px-xs text-xs text-font
 last:pr-xs 
		${leftAlign ? 'text-start' : 'text-end'}
			md:table-cell
			[&:nth-child(1)]:text-center`}>
			<button
				className='group relative bg-none border-none '
				onClick={() => {
					value && onClickFn!([...coinsList], value!);
				}}>
				{children}

				<span
					className={`${
						children === '#' || children === undefined ? 'hidden' : 'absolute'
					} font-bold text rotate-90 left-0 top-[50%] translate-y-[-50%] translate-x-[-1rem] text-transparent group-hover:text-font  `}>
					{'>'}
				</span>
			</button>
		</th>
	);
};

export default TableHeader;
