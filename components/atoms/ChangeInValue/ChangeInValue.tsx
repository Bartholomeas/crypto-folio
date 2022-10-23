interface Props {
  children: string | number;
  isPercent?: boolean;
}
const ChangeInValue = ({ children, isPercent = false }: Props) => {
  return (
    <p className="text-support text-sm font-semibold">
      +{children}
      {isPercent ? '%' : '$'}
    </p>
  );
};

export default ChangeInValue;
