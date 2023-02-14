interface Props {
  children: React.ReactNode | React.ReactNode[];
  forProp: string;
}
function Checkbox({ children, forProp }: Props) {
  return (
    <div className="flex flex-row-reverse gap-sm">
      <label className="text-xs text-fontLight" htmlFor={forProp}>
        {children}
      </label>
      <input
        className="cursor-pointer rounded-lg"
        type="checkbox"
        name={forProp}
      />
    </div>
  );
}

export default Checkbox;
