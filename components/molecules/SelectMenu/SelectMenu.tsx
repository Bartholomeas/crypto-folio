import Label from '../../atoms/Label/Label';

interface Props {
  children: string;
  options: {
    [key: string]: string;
  };
}
const SelectMenu = ({ children, options }: Props) => {
  return (
    <div className="flex items-center py-sm">
      <Label forProp="languages">{children}</Label>

      <select
        defaultValue={options[0]}
        className="text-sm font-semibold text-font bg-transparent"
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
};

export default SelectMenu;
