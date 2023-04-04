/* eslint-disable react/jsx-props-no-spreading */
import { CoinItem } from "../../state/coinsSlice";

import { addSpacesToNumber } from "../../utils/convertUtils";

import FavouriteButton from "../atoms/FavouriteButton";

import TableBody from "../molecules/TableBody";
import TableData from "../molecules/TableData";
import TableHead from "../molecules/TableHead";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";

interface TableHeaderProps {
	name: string;
	onClick?: () => void;
	value?: string;
	props?: { [key: string]: string | boolean };
}

interface TableProps {
	cols?: string[];
	tableHeaders: TableHeaderProps[];
	tableData: CoinItem[];
	page: number;
}

function Table({ cols, tableHeaders, tableData, page }: TableProps) {
	const indexingByPage = page > 1 ? (page - 1) * 100 : 0;

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

	const renderTableData = () =>
		tableData.map((coin: CoinItem, index: number) => (
			<TableRow key={`${coin.name}-${coin.total_supply}`}>
				<TableData>
					<FavouriteButton funcArg={coin.name} />
				</TableData>
				<TableData href={coin.id} isBold>
					{indexingByPage + index + 1}
				</TableData>
				<TableData
					imgSrc={coin.image}
					href={coin.id}
					leftAlign
					appendAfter={coin.symbol.toUpperCase()}
				>
					{coin.name}
				</TableData>
				<TableData href={coin.id} appendAfter="USD">
					{coin.current_price}
				</TableData>
				<TableData href={coin.id} appendAfter="%">
					{coin.price_change_percentage_24h}
				</TableData>
				<TableData href={coin.id} appendAfter="USD">
					{addSpacesToNumber(coin.market_cap)}
				</TableData>
			</TableRow>
		));

	return (
		<table className="min-w-[680px] max-w w-full border-collapse">
			<colgroup>{renderCols()}</colgroup>
			<TableHead>
				{renderTableHeaders()}
				{/* {tableHeaders &&
					tableHeaders.map(({ value, onClick, name, props }) => (
						<TableHeader key={value} value={value} onClick={onClick} {...props}>
							{name}
						</TableHeader>
					))} */}
			</TableHead>
			<TableBody>
				{renderTableData()}
				{/* {tableData.map((coin: CoinItem, index: number) => (
					<TableRow key={`${coin.name}-${coin.total_supply}`}>
						<TableData>
							<FavouriteButton funcArg={coin.name} />
						</TableData>
						<TableData href={coin.id} isBold>
							{indexingByPage + index + 1}
						</TableData>
						<TableData
							imgSrc={coin.image}
							href={coin.id}
							leftAlign
							appendAfter={coin.symbol.toUpperCase()}
						>
							{coin.name}
						</TableData>
						<TableData href={coin.id} appendAfter="USD">
							{coin.current_price}
						</TableData>
						<TableData href={coin.id} appendAfter="%">
							{coin.price_change_percentage_24h}
						</TableData>
						<TableData href={coin.id} appendAfter="USD">
							{addSpacesToNumber(coin.market_cap)}
						</TableData>
					</TableRow>
				))} */}
			</TableBody>
		</table>
	);
}

export default Table;
