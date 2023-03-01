import TableHead from "../molecules/TableHead";
import TableHeader from "../molecules/TableHeader";

interface TableHeaderProps {
	name: string;
	onClick: () => void;
	value: string;
}

interface Props {
	cols?: string[];
	tableHeaders: TableHeaderProps[];
}
type TableProps = React.PropsWithChildren<Props>;

function Table({ children, cols, tableHeaders }: TableProps) {
	return (
		<table className="min-w-[680px] max-w w-full border-collapse">
			<colgroup>
				{cols &&
					cols.map((col: string, index) => (
						<col key={`${Math.random() * 10}`} className={col} />
					))}
			</colgroup>
			<TableHead>
				{tableHeaders &&
					tableHeaders.map((header: TableHeaderProps) => (
						<TableHeader key={header.value} />
					))}
			</TableHead>
			{children}
		</table>
	);
}

export default Table;
