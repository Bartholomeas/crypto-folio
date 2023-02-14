import React from "react";
import SecondHeader from "../atoms/SecondHeader";
import coins from "../../assets/coins3d.png";
import fire from "../../assets/fire3d.png";
import safe from "../../assets/safe3d.png";
import AboutOfferArticle from "../molecules/AboutOfferArticle";

function AboutSection() {
	return (
		<section className="flex flex-col items-center w-full min-h-[100vh] py-section px gap-xl bg-accent rounded">
			<SecondHeader isLight>What do we offer?</SecondHeader>

			<div className="flex flex-col gap-xl">
				<AboutOfferArticle
					source={coins}
					articleTitle="Controlling your assets"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
					reiciendis quos ullam unde cum animi, provident beatae quod sed, quis
					sint iusto aliquam itaque? Consequatur asperiores natus adipisci
					libero suscipit.
				</AboutOfferArticle>
				<AboutOfferArticle
					source={fire}
					articleTitle="Tracking trending cryptocurrencies"
					isReverse
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
					reiciendis quos ullam unde cum animi, provident beatae quod sed, quis
					sint iusto aliquam itaque? Consequatur asperiores natus adipisci
					libero suscipit.
				</AboutOfferArticle>
				<AboutOfferArticle
					source={safe}
					articleTitle="Your portfolio info is completely safe"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
					reiciendis quos ullam unde cum animi, provident beatae quod sed, quis
					sint iusto aliquam itaque? Consequatur asperiores natus adipisci
					libero suscipit.
				</AboutOfferArticle>
			</div>
		</section>
	);
}

export default AboutSection;
