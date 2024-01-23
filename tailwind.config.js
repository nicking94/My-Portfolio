/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191924',
        secondary: '#101018',
        tertiary: '#33333F',
        text: '#FCFCFC',
        quaternary: '#1D1D2A',
      },
      fontFamily: {
        roboto: 'Roboto Condensed',
      }
    },
  },
  plugins: [],
}

