import { AiFillFire } from "react-icons/ai";

interface Props {
  otherStyles?: string;
}

function FireIcon({ otherStyles }: Props) {
  return (
    <div
      className={`absolute flex items-center justify-center w-fit
    ${otherStyles || ""}`}
    >
      <AiFillFire className="absolute fill-white text-[7rem]" />
      <AiFillFire className="fill-orange-500 text-[5rem] animate-wiggleSlow " />
      <AiFillFire className="absolute bottom-1 fill-yellow-400 text-[3rem] animate-wiggle" />
    </div>
  );
}

export default FireIcon;
