import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

      // For Light mode
       primary_color:'rgb(0,97,255)',
       secondary_color:'rgb(8,48,160)',
       light_highlight_color:'rgb(225,234,240)',
       
      // Text
      light_text_high_color:'rgb(23,23,37)',
      light_text_medium_color:'rgb(67,68,79)',
      light_text_low_color:'rgb(172,173,180)',
      light_text_normal_color:'rgb(146,146,157)',

      //  For Dark mode
       dark_color:'rgb(19,19,26)',
       dark_light_color:'rgb(28,28,36)',
       dark_highlight_color:'rgb(33,33,43)',
      //  text
       
       dark_text_high_color:'rgb(255,255,255)',
       dark_text_medium_color:'rgb(239,239,240)',
       dark_text_low_color:'rgb(146,146,157)',
       dark_text_normal_color:'rgb(28,28,36)',
      // For Button,Warning,Alert
       warning_color:'rgb(249, 84, 84)',
      },
    },
  },
  plugins: [],
};
export default config;
