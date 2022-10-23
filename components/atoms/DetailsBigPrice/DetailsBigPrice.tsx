interface Props {
  children: React.ReactNode;
}

const DetailsBigPrice = ({ children }: Props) => {
  return (
    <p
      className="dark:text-baseLight
	text-lg font-bold text-accent"
    >
      $ {children}
    </p>
  );
};

export default DetailsBigPrice;
