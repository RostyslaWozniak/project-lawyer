/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {},
    colors: {
      background: "var(--background-color)",
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      accent: "var(--accent-color)",
      light: "var(--light-color)",
      dark: "var(--dark-color)",
      none: "var(--transparent)",
    },
    width: {
      full: "var(--content-width)",
      screen: "var(--screen-width)",
      content: "var(--content-width)",
      "half-content": "var(--half-content-width)",
    },
    boxShadow: {
      sm: "var(--sm-shadow)",
      md: "var(--md-shadow)",
      lg: "var(--lg-shadow)",
      smlight: "var(--sm-light-shadow)",
      mdlight: "var(--md-light-shadow)",
      lglight: "var(--lg-light-shadow)",
    },
    dropShadow: {
      dark: "var(--dark-text-shadow)",
      light: "var(--light-text-shadow)",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
