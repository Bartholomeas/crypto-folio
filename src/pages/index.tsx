import Image from "next/image";
import donutBlue from "../assets/donutBlue.png";
import cubeBlue from "../assets/cubeBlue.png";
import sphereWhite from "../assets/sphereWhite.png";
import cubeWhite from "../assets/cubeWhite.png";
import CtaLink from "../components/atoms/CtaLink";
import AboutSection from "../components/organisms/AboutSection";
import Heading from "../components/atoms/Heading";

function index() {
	return (
		<main className="flex flex-col items-center gap w-full h-full py-section mx-auto bg-white overflow-hidden">
			<header
				className="relative flex flex-col items-center gap max-h-[100vh] min-h-[90vh] max-w w-full px
			md:min-h-[100vh]"
			>
				<div className="relative flex flex-col items-center gap-sm max-w-[500px] z-10">
					<div
						className="absolute w-[150px] h-[150px] left-0 z-[-10] animate-floatTwo
					md:top-[-5rem] md:w-[250px] md:h-[250px]
				"
					>
						<Image
							src={sphereWhite}
							alt="White glossy sphere"
							className="scale-x-[-1]"
						/>
					</div>
					<Image
						src="/logo.svg"
						height={50}
						width={50}
						alt="Logo of Oddy, smiling blue robot"
					/>

					<Heading headingWeight={1} align="center">
						Oddy - a buddy that will improve your cryptocurrencies experience
					</Heading>

					<p className="leading text-font text-center">
						Oddy is an application that allows you to control your
						cryptocurrencies and quickly search for information about them.
					</p>
				</div>

				<div className="relative flex flex-col items-center gap-sm w-full z-10">
					<CtaLink href="/1">Enter app</CtaLink>

					<div className="absolute w-[100px] h-[100px] top-0 left-[50%] translate-x-[15rem] animate-rotate">
						<Image src={cubeWhite} alt="White glossy cube" />
					</div>
				</div>

				<div
					className="absolute w-[200px] h-[200px] right-[-4rem] bottom-[2rem]
				md:right-[4rem]	md:top-[20%] animate-floatSlow"
				>
					<Image src={donutBlue} alt="Blue glossy donut" />
				</div>

				<div
					className="absolute w-[50px] h-[50px] left-[4rem] bottom-[5rem]
md:w-[150px] md:h-[150px] md:bottom-[10rem] animate-float"
				>
					<Image src={cubeBlue} alt="Blue glossy cube" />
				</div>
			</header>
			<AboutSection />
		</main>
	);
}

export default index;
