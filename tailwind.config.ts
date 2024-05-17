import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Includes all files in the app directory
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Includes all files in the pages directory
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Includes all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        maincolor: 'var(--maincolor)',
        text: 'var(--text)',
        heading: 'var(--heading)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
};

export default config;
