/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		breakpoints: {
			sm: '476px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},

		extend: {
			dropShadow: { DEFAULT: '2px 2px 0 40px #E1E4E6' },

			fontSize: {
				xs: '1.2rem',
				sm: '1.4rem',
				DEFAULT: '1.6rem',
				md: '2rem',
				lg: '2.4rem',
				xl: '3.2rem',
			},

			padding: {
				xs: '0.8rem',
				sm: '1.6rem',
				DEFAULT: '2rem',
				md: '2.4rem',
				lg: '3.2rem',
			},

			colors: {
				font: '#244A84',
				fontLight: '#597690',

				accent: '#111BFF',
				accentDark: '#0911CF',

				baseLight: '#EDF0FB',
				baseVeryLight: '#F7F9FC',
				white: '#FFFFFF',

				support: '#58EDB7',
				supportDark: '#24D9AE',

				success: '#58EDB',
				error: '#FD6D6D',
			},

			gap: {
				sm: '.8rem',
				DEFAULT: '2rem',
				lg: '4rem',
			},
		},
	},
	plugins: [],
};
