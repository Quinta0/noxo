import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      keyframes: { rise: { "100%": { transform: string }; "0%": { transform: string } } };
      animation: { rise: string }
    }
  };
  content: string[]
} = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        rise: 'rise 0.3s ease-out'
      },
    },
  },
  plugins: [],
};
export default config;
