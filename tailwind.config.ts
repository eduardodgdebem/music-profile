import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    colors: {
      "vanila-bright": "#FFFFF0",
      vanila: "#d4d4c5",
      "vanila-dark": "#b3b3a8",
      purple: "#7220ff",
      green: "#59eb15",
      gray: "#3d424f",
      "gray-dark": "#23262d",
      black: "#0f1112",
      white: "#fcfcfa",
      "green-spotify": "rgb(29, 185, 84)"
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
