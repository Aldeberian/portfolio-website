/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csbg': '#1E1E1E',
        'csprim': '#3E6B48',
        'cssec': '#214E3A',
        'csacc': '#004d00',
        'cstxt' : '#FFFFFF',
      },
      fontFamily: {
        'bodytxt': ['OpenSansRegular'],
        'titletxt': ['Brandon'],
        'boldtitle': ['BrandonBold'],
      },
    },
  },
  plugins: [],
}