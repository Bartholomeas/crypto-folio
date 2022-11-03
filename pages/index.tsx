import Image from "next/image";
import donutBlue from "../assets/donutBlue.png";
import cubeBlue from "../assets/cubeBlue.png";
import sphereWhite from "../assets/sphereWhite.png";
import cubeWhite from "../assets/cubeWhite.png";
import PageHeader from "../components/atoms/PageHeader/PageHeader";
import CtaLink from "../components/atoms/CtaLink/CtaLink";

function index() {
	return (
		<div
			className="relative flex flex-col justify-center items-center gap max-w w-full h-[100vh] py-section px mx-auto bg-white overflow-hidden
		"
		>
			<div className="relative flex flex-col items-center gap-sm max-w-[500px] z-10">
				<div
					className="absolute w-[150px] h-[150px] left-0 z-[-10]
					animate-floatTwo
					md:top-[-5rem] md:w-[250px] md:h-[250px]
				"
				>
					<Image
						src={sphereWhite}
						alt="Blue glossy square"
						className="scale-x-[-1]"
					/>
				</div>
				<Image
					src="/logo.svg"
					height={50}
					width={50}
					alt="Logo of Oddy, smiling blue robot"
				/>

				<PageHeader otherStyles="text-center">
					Oddy - a buddy that will improve your cryptocurrencies experience
				</PageHeader>

				<p className="leading text-font text-center">
					Oddy is an application that allows you to control your
					cryptocurrencies and quickly search for information about them.
				</p>
			</div>

			<div className="relative flex flex-col items-center gap-sm w-full z-10">
				<CtaLink hrefRoute="/1">Enter app</CtaLink>

				<div
					className="hidden
				absolute w-[100px] h-[100px] top-0 left-[50%] translate-x-[15rem]
				md:block animate-rotate"
				>
					<Image src={cubeWhite} alt="Blue glossy square" />
				</div>
			</div>

			<div
				className="absolute w-[200px] h-[200px] right-[-4rem] bottom-[2rem]
				md:right-[4rem]
				md:top-[20%]
				animate-floatSlow
				"
			>
				<Image src={donutBlue} alt="Blue glossy donut" />
			</div>

			<div
				className="absolute w-[50px] h-[50px] left-[4rem] bottom-[5rem]
md:w-[150px] md:h-[150px] md:bottom-[10rem] animate-float"
			>
				<Image src={cubeBlue} alt="Blue glossy cube" />
			</div>
		</div>
	);
}

export default index;
