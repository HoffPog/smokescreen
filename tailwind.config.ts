import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {

      fontFamily: {
        silkscreen: ['Silkscreen', 'cursive']
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': 'ffffff',
        'blue': '0000ff'
      },
    },
  },
  plugins: [],
};
export default config;
