const colors = require("tailwindcss/colors");
module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
            backgroundImage: theme => ({
                'darkBg': "url('./public/pattern-bg-dark.svg')",
                'lightBg': "url('./public/pattern-bg.svg')",
            })
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
			white: {
				light: "#cccccc",
				DEFAULT: "#ffffff",
				dark: "#009eeb",
			},
			synth: {
				DEFAULT: "#89f9fc",
			},
			synthPink: {
				DEFAULT: "#ff5caa",
			},
			black: {
				light: "#1d1d1d",
				DEFAULT: "#121212",
				dark: "#121212",
			},
			red: {
				DEFAULT: "#E03050",
			},
			purple: {
				DEFAULT: "#682AE9",
			},
			borderBlue: {
				DEFAULT: "#272D36",
			},
			amber: colors.amber,
			emerald: colors.emerald,
			yellow: colors.amber,
			blue: colors.sky,
			redd: colors.red,
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
