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
        supportingcolor: 'var(--supportingcolor)',
        text: 'var(--text)',
        heading: 'var(--heading)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-glow': 'var(--accent-glow)',
        'card-bg': 'var(--card-bg)',
        'navbar-glass': 'var(--navbar-glass)',
        
        // Unified color system
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        gray: {
          light: 'var(--color-gray-light)',
          medium: 'var(--color-gray-medium)',
          dark: 'var(--color-gray-dark)',
        },
        shadow: {
          light: 'var(--color-shadow-light)',
          medium: 'var(--color-shadow-medium)',
          dark: 'var(--color-shadow-dark)',
        },
        border: {
          light: 'var(--color-border-light)',
          medium: 'var(--color-border-medium)',
        },
        overlay: {
          light: 'var(--color-overlay-light)',
          medium: 'var(--color-overlay-medium)',
        },
        success: 'var(--color-success)',
        'success-hover': 'var(--color-success-hover)',
        'success-glow': 'var(--color-success-glow)',
        code: {
          bg: 'var(--color-code-bg)',
          text: 'var(--color-code-text)',
          border: 'var(--color-code-border)',
        },
        emphasis: 'var(--color-emphasis)',
        'emphasis-glow': 'var(--color-emphasis-glow)',
        scroll: {
          button: 'var(--color-scroll-button)',
          'button-hover': 'var(--color-scroll-button-hover)',
        },
        blur: {
          backdrop: 'var(--color-blur-backdrop)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        '2xl+': '1.75rem',
        '4xl+': '2.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.15)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
