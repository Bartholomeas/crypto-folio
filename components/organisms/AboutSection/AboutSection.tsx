import React from "react";
import CircleBgImage from "../../atoms/CircleBgImage/CircleBgImage";
import SecondHeader from "../../atoms/SecondHeader/SecondHeader";
import ThirdHeader from "../../atoms/ThirdHeader/ThirdHeader";
import portal from "../../../assets/portal3d.png";
import fire from "../../../assets/fire3d.png";
import safe from "../../../assets/safe3d.png";

function AboutSection() {
	return (
		<section className="flex flex-col items-center w-full min-h-[100vh] py-section px gap-xl bg-accent rounded">
			<SecondHeader isLight>What do we offer?</SecondHeader>

			<div className="flex flex-col gap-xl">
				<div
					className="flex flex-col-reverse items-center justify-between gap-lg w-full max-w-sm
				md:flex-row"
				>
					<div
						className="flex flex-col gap-sm text-center md:text-left
					md:w-[50%]"
					>
						<ThirdHeader>Controlling your assets</ThirdHeader>
						<p className="text-white text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus, reiciendis quos ullam unde cum animi, provident beatae
							quod sed, quis sint iusto aliquam itaque? Consequatur asperiores
							natus adipisci libero suscipit.
						</p>
					</div>
					<CircleBgImage
						source={portal}
						alt="Portal with coins expanding from him"
					/>
				</div>

				<div
					className="flex flex-col-reverse items-center justify-between gap-lg w-full max-w-sm
				md:flex-row"
				>
					<div
						className="flex flex-col gap-sm text-center md:text-left
					md:w-[50%]"
					>
						<ThirdHeader>Controlling your assets</ThirdHeader>
						<p className="text-white text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus, reiciendis quos ullam unde cum animi, provident beatae
							quod sed, quis sint iusto aliquam itaque? Consequatur asperiores
							natus adipisci libero suscipit.
						</p>
					</div>
					<CircleBgImage source={fire} alt="Fire" />
				</div>

				<div
					className="flex flex-col-reverse items-center justify-between gap-lg w-full max-w-sm
				md:flex-row"
				>
					<div
						className="flex flex-col gap-sm text-center md:text-left
					md:w-[50%]"
					>
						<ThirdHeader>Controlling your assets</ThirdHeader>
						<p className="text-white text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus, reiciendis quos ullam unde cum animi, provident beatae
							quod sed, quis sint iusto aliquam itaque? Consequatur asperiores
							natus adipisci libero suscipit.
						</p>
					</div>
					<CircleBgImage source={safe} alt="Brown safe" />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
