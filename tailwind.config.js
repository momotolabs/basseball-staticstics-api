/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/**/*.{html,js}",

],
  theme: {
    extend: {
      colors: {
        "baseball-darkblue-player": "#26364D",
        "baseball-darkblue": "#082247",
        "baseball-darkblue-hover" : "#194585",
        "baseball-darkblug-disabled": "#88A2C9",
        "baseball-dark-gray": "#A6A6A6",
        "baseball-light-gray": "#DADADA",

        "baseball-blue": "#0096C7",
        "baseball-blue2": "#0077B6",
        "baseball-blue3": "#ADE8F4",
        "baseball-blue4": "#DBDFF1",
        "baseball-blue-hover" : "#006CA6",
        "baseball-blug-disabled": "#98C9E3",


        "baseball-red": "#E10600",
        "baseball-red-hover": "#BA0500",
        "baseball-red-disabled": "#F6837F",


        "baseball-gray": "#D9D9D9",
        "baseball-gray2": "#E7EAEE",
        "baseball-gray3": "#E1E3E7",
        "baseball-gray4": "#F7F8F9",
        "baseball-gray5": "#D3D3D3",
        "baseball-gray6": "#DBDFF1",
        "baseball-gray7": "#F6F6F6",
        "baseball-gray8": "#DFDFDF;",
        "baseball-gray9": "#D8DEE7;",


        "baseball-lightblue": "#ADE8F4",
        "baseball-lightblue-hover": "#ADE8F4",
        "baseball-lightblue-disabled": "#D7F3F9"
      },
      boxShadow: {
        'baseball-but-shadow': '0 10px 10px 5px rgba(0, 0, 0, 0.3),0 -5px 10px 0px' +
          ' rgba(0, 0, 0, 0.3)',

      }
    },

    fontFamily: {
      'baseball-poppins': ['Poppins', 'sans-serif']
    },

    fontWeight: {
      'baseball-300': 300,
      'baseball-500': 500,
      'baseball-700': 700,
      'baseball-800': 800
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
