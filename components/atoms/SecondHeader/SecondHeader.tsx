interface Props {
  children: string;
}
const SecondHeader = ({ children }: Props) => {
  return (
    <h2 className="font-bold text-accentDark text-lg md:text-lg">{children}</h2>
  );
};

export default SecondHeader;
