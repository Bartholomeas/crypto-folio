interface Props {
  children: React.ReactNode | React.ReactNode[];
}
function Footer({ children }: Props) {
  return (
    <footer
      className="dark:bg-accentDark
		flex items-center w-full bg-baseLight p py-lg mb-[5rem] min-h-[5rem] md:mb-auto"
    >
      {children}
    </footer>
  );
}

export default Footer;
