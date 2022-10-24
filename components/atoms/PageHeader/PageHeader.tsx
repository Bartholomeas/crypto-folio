interface Props {
  children: string;
  appendAfter?: string;
}
function PageHeader({ children, appendAfter }: Props) {
  return (
    <h1 className="w-full font-bold leading-10 bg-support text-accentDark py-md px-lg rounded  text-lg md:text-xl">
      {children}{" "}
      {appendAfter && (
        <span className="font-normal text-md">{appendAfter}</span>
      )}
    </h1>
  );
}

export default PageHeader;
