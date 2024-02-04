/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      fontFamily:{
        yakan: ["yekan", 'sans-serif']
      },
      screens : {
        's' : '500px' ,
        'mobile' : '420px',
        'mobile2' : '450px',
        'little' : '350px',
        'little2' : '360px',
        'long' : '1350px',
        'long2' : '1080px',
        'long3' : '1010px',
        'long4' : '850px',
        'long5' : '767px',
      },     
    },
  },
  plugins: [],
}
