/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		maxWidth: {
			DEFAULT: "1200px",
		},

		screens: {
			sm: "476px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1670px",
		},

		extend: {
			borderWidth: {
				2: "1px",
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},

			boxShadow: { DEFAULT: "0 0 40px 0 rgba(225, 228, 230, 1)" },
			borderRadius: {
				DEFAULT: "8px",
				lg: "16px",
			},
			fontSize: {
				xs: "1.2rem",
				sm: "1.4rem",
				DEFAULT: "1.4rem",
				md: "2rem",
				lg: "2.4rem",
				xl: "3.2rem",
			},

			padding: {
				xs: "0.8rem",
				sm: "1.6rem",
				DEFAULT: "2rem",
				md: "2.4rem",
				lg: "3.2rem",
			},

			colors: {
				font: "#0C1069",
				fontOff: "#0C1069",
				fontLight: "#5E688A",

				borderColor: "#D1D6E9",

				accent: "#111BFF",
				// accent: "#0B72FD",
				accentDark: "#0911CF",
				accentHover: "rgba(17, 27, 255, 0.05)",

				baseLight: "#EDF0FB",
				baseVeryLight: "#F7F9FC",
				white: "#FFFFFF",

				support: "#58EDB7",
				supportDark: "#24D9AE",

				success: "#066C47",
				error: "#FD6D6D",

				dmBorderColor: "#343845",

				dmFont: "#B5BEDF",
				dmBase: "#0B0F20",
				dmBaseContrast: "#1A2139",
				dmBaseElement: "#1A2139",
			},

			gap: {
				sm: ".8rem",
				DEFAULT: "2rem",
				lg: "4rem",
				xl: "8rem",
			},

			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},

			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				wiggleSlow: "wiggle 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
