/* eslint-disable react/jsx-props-no-spreading */
import classNames from "classnames";
import { CoinItem } from "../../state/coinsSlice";

import TableHead from "../molecules/TableHead";

import { useAppSelector } from "../../state/reduxHooks";

interface ITableHeaders {
	name: string;
	onClick?: (coinsList: CoinItem[], valueToSort: string) => void;
	value?: string;
	props?: { [key: string]: string | boolean };
}

interface TableProps {
	cols?: string[];
	tableHeaders: ITableHeaders[];

	page?: number;
}

type TablePropsWithChildren = React.PropsWithChildren<TableProps>;

export function Table({
	cols,
	tableHeaders,
	children,
}: TablePropsWithChildren) {
	const renderCols = () => {
		if (!cols) return null;
		return cols.map((col, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<col key={`${col}-${index}`} className={col} />
		));
	};

	const renderTableHeaders = () => {
		if (!tableHeaders) return <TableHeader />;
		return tableHeaders.map(({ value, onClick, name, ...props }) => (
			<TableHeader
				key={value || name}
				value={value}
				onClick={onClick}
				{...props}
			>
				{name}
			</TableHeader>
		));
	};

	return (
		<table className="table hover min-w-[680px] max-w w-full border-collapse">
			<colgroup>{renderCols()}</colgroup>
			<thead>
				<tr>{renderTableHeaders()}</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
}

interface TableRowProps {
	children: React.ReactNode;
	onClick?: (arg1: any) => void;
}

export function TableRow({ children, onClick }: TableRowProps) {
	return (
		<tr onClick={onClick} className="hover w-full transition-colors">
			{children}
		</tr>
	);
}

interface TableHeaderProps {
	children?: string;
	leftAlign?: boolean;
	onClick?: (arg1: CoinItem[], arg2: string) => void | undefined;
	value?: string;
}
function TableHeader({
	children,
	leftAlign,
	onClick,
	value,
}: TableHeaderProps) {
	const { coinsList } = useAppSelector((state) => state.coins);

	return (
		<th
			className={classNames(
				"py-sm",
				"px-xs",
				"text-xs",
				"text-base-content",
				"last:pr-xs",
				leftAlign ? "text-start" : "text-end",
				"md:table-cell",
				"[&:nth-child(1)]:text-center",
			)}
		>
			<button
				type="button"
				className="group relative bg-none border-none "
				onClick={() => value && onClick && onClick([...coinsList], value)}
			>
				{children}

				<span
					className={classNames(
						children === "#" || children === undefined ? "hidden" : "absolute",
						"font-bold",
						"text",
						"rotate-90",
						"left-0",
						"top-[50%]",
						"translate-y-[-50%]",
						"translate-x-[-1rem]",
						"text-transparent",
						"group-hover:text-base-content  ",
					)}
				>
					{">"}
				</span>
			</button>
		</th>
	);
}
