const colors = require("tailwindcss/colors");
module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			transitionDuration: {
				0: "0ms",
				2000: "2000ms",
				4000: "4000ms",
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: {
				light: '#cccccc',
				DEFAULT: '#ffffff',
				dark: '#009eeb',
			},
			black: {
				light: '#1d1d1d',
				DEFAULT: '#161616',
				dark: '#e7e7e7',
			},
			red: {
				DEFAULT: '#E03050',
			},
			purple: {
				DEFAULT: '#682AE9',
			},
			yellow: {
				DEFAULT: '#F7DF1E',
			},
		},
	},
	variants: {
		extend: {},
		display: ["responsive", "group-hover", "group-focus"],
	},

	plugins: [],
};
