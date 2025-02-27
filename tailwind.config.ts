import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f00946',
          50: '#fff1f4',
          100: '#ffe4e8',
          200: '#ffcdd7',
          300: '#ffa3b5',
          400: '#ff6a8a',
          500: '#ff3a65',
          600: '#ff1144',
          700: '#f00946',
          800: '#c8073a',
          900: '#a30c33',
        },
        dark: {
          DEFAULT: '#0a121b',
          50: '#f5f7fa',
          100: '#eaeef3',
          200: '#d0dae6',
          300: '#a6bcd1',
          400: '#7597b9',
          500: '#5479a0',
          600: '#3f5f85',
          700: '#334d6c',
          800: '#2c405a',
          900: '#0a121b',
        },
        light: {
          DEFAULT: '#f7f8fa',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        brand: ['Cuzeth', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 9, 70, 0.5), 0 0 20px rgba(255, 9, 70, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(255, 9, 70, 0.8), 0 0 30px rgba(255, 9, 70, 0.5)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 9, 70, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)'
      }
    },
  },
  plugins: [],
};

export default config;