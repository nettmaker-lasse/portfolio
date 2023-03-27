const colors = require("tailwindcss/colors");
module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': ['Inter', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'display': ['Oswald'],
			'body': ['"Open Sans"'],
		},

		extend: {
			boxShadow: {
				'xl': '0 5px 20px -1px rgba(0, 0, 0, 0.3)',
			  }
		},
		transitionDuration: {
			0: "0ms",
			2000: "2000ms",
			4000: "4000ms",
		},
		// 	boxShadow: {
		// 		"3xl": "0 35px 60px -15px rgba(255, 92, 170, 0.3)",
		// },
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			green: colors.emerald,
			purple: colors.violet,
			yellow: colors.amber,
			pink: colors.fuchsia,
			amber: colors.amber,
			emerald: colors.emerald,
			yellow: colors.amber,
			blue: colors.sky,
			redd: colors.red,
			synth: {
				DEFAULT: "#89f9fc",
			},
			synthPink: {
				DEFAULT: "#ff2975",
			},
			gradBlue: "​#5179FE",
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		display: ["responsive", "group-hover", "group-focus"],
	},

	plugins: [require("@tailwindcss/aspect-ratio")],
};
