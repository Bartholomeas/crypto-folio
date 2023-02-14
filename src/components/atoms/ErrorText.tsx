interface Props {
  children: string;
}

function ErrorText({ children }: Props) {
  return (
    <p className=" py-[0.3rem] px-sm text-xs font-bold rounded-xl bg-error text-white ">
      {children}
    </p>
  );
}

export default ErrorText;
