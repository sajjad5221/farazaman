/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        yakan: ['yekan', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#D6A001',
          light: '#F7ECCC',
        },
        customGray: {
          DEFAULT: '#696969',
        },
      },
    },
  },
  plugins: [],
};
