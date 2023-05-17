/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html" ,
    "./component/*.tsx" ,
],
  theme: {
    extend: {
      colors : {
        'aliceblue' : '#f0f8ff' ,
        'dark' : '#333',
        'black' : '#434343' ,
        'gray' : '#bdc3c7' ,
        'darkblue' : '#082f49' ,
        'glass' : 'rgba(255,255,255,0.1)'
        },
        spacing : {
          '12%' : '12%' ,
          '20%' : '20%' ,
          '25%' : '25%' ,
          '35%' : '35%' ,
          '40%' : '40%' ,
          '50%' : '50%' ,
          '60%' : '60%' ,
        } ,
        boxShadow : {
          'shadow1' : '0px 0px 5px '
        }
    },
  },
  plugins: [],
}

