interface Props {
  children: React.ReactNode | React.ReactNode[];
}
const CoinName = ({ children }: Props) => {
  return (
    <h1 className="dark:text-baseLight text-font text-lg font-bold">
      {children}
    </h1>
  );
};

export default CoinName;
