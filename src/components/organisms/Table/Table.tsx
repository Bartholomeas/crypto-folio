interface Props {
  children: React.ReactNode;
}
function Table({ children }: Props) {
  return (
    <table className="min-w-[680px] max-w w-full border-collapse">
      {children}
    </table>
  );
}

export default Table;
