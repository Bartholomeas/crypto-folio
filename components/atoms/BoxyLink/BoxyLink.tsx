/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  hrefRoute: string;
  isAccent?: boolean;
  otherStyles?: string;
}

function BoxyLink({ children, hrefRoute, isAccent, otherStyles }: Props) {
  return (
    <Link href={hrefRoute} passHref>
      <a
        className={`flex items-center justify-center gap-sm px-sm py-sm  h-full w-full text rounded-xl text-center ${
          isAccent
            ? " bg-accentDark text-white font-bold hover:bg-accent"
            : " bg-baseLight text-font hover:bg-baseVeryLight"
        }

                transition-colors
                ${otherStyles}
                `}
      >
        {children}
      </a>
    </Link>
  );
}

export default BoxyLink;
