const colors = require("tailwindcss/colors");
const zincPalette = colors.zinc || colors.gray;
const olivePalette = {
  50: "#f6f7ee",
  100: "#ecefd7",
  200: "#d9dfad",
  300: "#c2cb7f",
  400: "#adb85a",
  500: "#8e9a3a",
  600: "#707b2f",
  700: "#555e26",
  800: "#3f461d",
  900: "#2c3115",
};

module.exports = {
  mode: "jit",
  // If you’re on Tailwind v3+, rename `purge` -> `content`
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Arial", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      boxShadow: {
        xl: "0 5px 20px -1px rgba(0, 0, 0, 0.3)",
      },
      maxWidth: {
        "6xl": "1240px",
      },
      colors: {
        // Tokens that track CSS variables
        page: "var(--bg)",
        text: "var(--text)",
        // Optional fixed alias
        lightbg: "#f9f3ef",
      },
    },
    transitionDuration: {
      0: "0ms",
      2000: "2000ms",
      4000: "4000ms",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: zincPalette,
      olive: olivePalette,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber, // (you listed yellow twice earlier—kept one)
      pink: colors.fuchsia,
      amber: colors.amber,
      emerald: colors.emerald,
      blue: colors.sky,
      red: colors.red,
      synth: { DEFAULT: "#133e34" },
      synthPink: { DEFAULT: "#133e34" },
      gradBlue: "#133e34",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
