import Label from "../atoms/Label";

interface Props {
	children: string;
	options: {
		[key: string]: string;
	};
}
function SelectMenu({ children, options }: Props) {
	return (
		<div className="flex items-center py-sm">
			<Label forProp="languages">{children}</Label>

			<select
				defaultValue={options[0]}
				className="text font-semibold text-base-content bg-transparent"
				name="languages"
				id="languages"
			>
				{Object.entries(options).map(([key, value]) => (
					<option key={key} value={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectMenu;
