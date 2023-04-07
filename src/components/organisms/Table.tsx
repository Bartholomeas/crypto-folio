/* eslint-disable react/jsx-props-no-spreading */
import { CoinItem } from "../../state/coinsSlice";

import TableBody from "../molecules/TableBody";

import TableHead from "../molecules/TableHead";
import TableHeader from "../molecules/TableHeader";

interface TableHeaderProps {
	name: string;
	onClick?: (coinsList: CoinItem[], valueToSort: string) => void;
	value?: string;
	props?: { [key: string]: string | boolean };
}

interface TableProps {
	cols?: string[];
	tableHeaders: TableHeaderProps[];

	page?: number;
}

type TablePropsWithChildren = React.PropsWithChildren<TableProps>;

function Table({
	cols,
	tableHeaders,

	page,
	children,
}: TablePropsWithChildren) {
	const renderCols = () => {
		if (!cols) return null;
		return cols.map((col: string) => <col key={`${col}`} className={col} />);
	};

	const renderTableHeaders = () => {
		if (!tableHeaders) return null;
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
		<table className="table  table-zebra hover min-w-[680px] max-w w-full border-collapse">
			<colgroup>{renderCols()}</colgroup>
			<TableHead>{renderTableHeaders()}</TableHead>
			<TableBody>{children}</TableBody>
		</table>
	);
}

export default Table;
