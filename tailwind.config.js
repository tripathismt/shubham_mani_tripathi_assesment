/** @type {import('tailwindcss').Configuration} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs':{max: '900px'},
        
      },
    },
  },
  plugins: [],
};