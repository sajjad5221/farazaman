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
        yakan: ['IRANSansXMedium', 'yekan', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#D6A001',
          light: '#F7ECCC',
        },
        servicebg:{
          DEFAULT: '#F8F5EC',
          light: '#AD8100',
          primery: '#5C4400;'
        },
        customGray: {
          DEFAULT: '#696969',
        },
        list: {
          DEFAULT: '#696969',
        },
      },
    },
  },
  plugins: [],
};
