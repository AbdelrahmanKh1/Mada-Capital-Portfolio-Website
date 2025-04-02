import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      colors: {
        brown: '#60372A',
        orange: '#A06328',
        vanilla: '#E1D1B8',
        black: '#000000',
      },
      fontSize: {
        'header': ['39px', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        'subheader': ['21px', {
          lineHeight: '1.4',
          fontWeight: '500',
        }],
        'body': ['14px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}

export default config 