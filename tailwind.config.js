/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	daisyui: {
		themes: [
			// "light",
			"night",
			{
				test: {
					font: "#0C1069",
					fontOff: "#0C1069",
					fontLight: "#5E688A",

					borderColor: "#D1D6E9",

					accent: "#0B72FD",
					accentDark: "#0B5DCB",
					accentVeryDark: "#07469A",
					accentHover: "rgba(17, 27, 255, 0.1)",

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
					dmAccentHover: "rgba(17, 27, 255, 1)",
					primary: "#38BDF8",
					font: "#818CF8",

					secondary: "#818CF8",

					accent: "#F471B5",

					neutral: "#1E293B",

					"base-100": "#0F072A",

					info: "#0CA5E9",

					success: "#2DD4BF",

					warning: "#F4BF50",

					error: "#FB7085",
				},
			},
		],
	},
	darkMode: "class",
	theme: {
		maxWidth: {
			DEFAULT: "1200px",
			sm: "900px",
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
				lg: "2.6rem",
				xl: "3.2rem",

				h1: ["3.2rem", { lineHeight: "150%", fontWeight: "700" }],
				h2: ["2.8rem", { lineHeight: "150%", fontWeight: "700" }],
				h3: ["2.4rem", { lineHeight: "150%", fontWeight: "700" }],
				h4: ["2rem", { lineHeight: "150%", fontWeight: "700" }],
			},

			padding: {
				xs: "0.8rem",
				sm: "1.6rem",
				DEFAULT: "2rem",
				md: "2.4rem",
				lg: "3.2rem",
				section: "8rem",
			},

			colors: {
				font: "#0C1069",
				fontOff: "#0C1069",
				fontLight: "#5E688A",

				borderColor: "#D1D6E9",

				accent: "#0B72FD",
				accentDark: "#0B5DCB",
				accentVeryDark: "#07469A",
				accentHover: "rgba(17, 27, 255, 0.1)",

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
				dmAccentHover: "rgba(17, 27, 255, 1)",
			},

			gap: {
				sm: ".8rem",
				DEFAULT: "2rem",
				lg: "4rem",
				xl: "8rem",
			},

			lineHeight: {
				DEFAULT: "3rem",
			},

			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},

				float: {
					"0%, 100%": { transform: "translate(-20%, 50%)" },
					"50%": { transform: "rotate(30deg)" },
				},

				floatTwo: {
					"0%, 100%": { transform: "translateY(50%)" },
					"50%": { transform: "rotate(-30deg)" },
				},
				rotate: {
					"50%": { transform: "rotate(-30deg)" },
				},
			},

			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				wiggleSlow: "wiggle 2s ease-in-out infinite",

				float: "float 16s ease-in-out infinite",
				floatSlow: "float 32s ease infinite",

				floatTwo: "floatTwo 48s ease infinite",

				rotate: "rotate 120s ease infinite",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		themes: true,
		prefix: "",
		darkTheme: "night",
	},
};
