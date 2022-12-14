interface Props {
  children: React.ReactNode;
}

function NavList({ children }: Props) {
  return (
    <ul
      className="flex flex-col items-end gap w-full px-md md:mt-[100px]
			md:items-start md:gap"
    >
      {children}
    </ul>
  );
}

export default NavList;
