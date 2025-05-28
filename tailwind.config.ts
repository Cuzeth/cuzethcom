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
        sans: ['Junicode', 'Georgia', 'Times New Roman', 'serif'],
        serif: ['Junicode', 'Georgia', 'Times New Roman', 'serif']
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
        'flat-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'flat': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'flat-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'flat-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'modern': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'subtle-pulse': 'subtlePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        subtlePulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
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
