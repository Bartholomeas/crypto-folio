interface Props {
  children: React.ReactNode | React.ReactNode[];
}
function CoinStatsLiKey({ children }: Props) {
  return <p className="dark:text-dmFont text-fontLight text">{children}</p>;
}

export default CoinStatsLiKey;
