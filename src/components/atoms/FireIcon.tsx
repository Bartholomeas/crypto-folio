import { AiFillFire } from "react-icons/ai";

function FireIcon() {
	return (
		<div className="absolute flex items-center justify-center w-fit top-[-2rem] right-[-1rem]">
			<AiFillFire className="dark:fill-dmBase absolute fill-white text-[7rem]" />
			<AiFillFire className="fill-orange-500 text-[5rem] animate-wiggleSlow " />
			<AiFillFire className="absolute bottom-1 fill-yellow-400 text-[3rem] animate-wiggle" />
		</div>
	);
}

export default FireIcon;
