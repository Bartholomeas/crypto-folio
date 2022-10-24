interface Props {
  children: string | React.ReactNode;
  forProp?: string;
}

function Label({ children, forProp }: Props) {
  return (
    <label
      htmlFor={forProp}
      className="dark:text-dmFont flex items-center w-full font-semibold text-font"
    >
      {children}
    </label>
  );
}

export default Label;
