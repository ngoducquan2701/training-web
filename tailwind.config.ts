import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(222 0 41)",
      },
      backgroundImage: {
        'core-value': "url('/images/core-value.jpg')",
        'nhile-channel': "url(/images/nhile-channel.jpg)",
        'msnhi-channel': "url(/images/msnhi-channel.png)",
        'spicenice-channel': "url(/images/spicenice-channel.jpg)"
      },
    },
  },
  plugins: [],
};
export default config;
