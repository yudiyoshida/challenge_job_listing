/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#5da5a4',
        'dark-grayish-cyan': '#8498A5',
        'desaturated-dark-cyan': '#6495ED',
        'light-grayish-cyan-background': '#dce7f2',
        'light-grayish-cyan-filter-tablets': '#E4F1F7',
        'very-dark-grayish-cyan': '#2E3B43'
      }
    },
    fontFamily: {
      'league-spartan': ['League Spartan', 'sans-serif'], 
    }
  },
  plugins: [],
}