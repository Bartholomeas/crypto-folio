/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js, ts, jsx, tsx}'],

	darkMode: 'class',
	theme: {
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

		boxShadow: { standardShadow: '3px 2px 0 40px #E1E4E6' },
		extend: {},
	},
	plugins: [],
};
