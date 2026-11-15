import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#7096D1',      // آبی اصلی لوگو
          volcano: '#3C3C3D',   // خاکستری آتشفشانی (متن‌ها و المان‌های تیره)
          ice: '#EBECEE',       // سفید یخی (زمینه هدر)
          moss: '#C4E326',      // سبز گل سنگی (اکسنت و هایلایت)
          slate: '#8A8C8F',     // خاکستری سنگی (متن‌های ثانویه و border)
          deepblue: '#3D7282',  // آبی دریاوی (زمینه فوتر)
          ruby: '#C21721',      // قرمز یاقوتی (تأکیدها و اعلان‌های خاص)
        }
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;