interface Props {
  children: string | number;
  isPercent?: boolean;
}
function ChangeInValue({ children, isPercent = false }: Props) {
  return (
    <p className="text-support text font-semibold">
      +{children}
      {isPercent ? "%" : "$"}
    </p>
  );
}

export default ChangeInValue;
