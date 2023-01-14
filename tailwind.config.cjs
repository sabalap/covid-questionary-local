/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'Helvetica-Neue-LT-GEO-bold': 'Helvetica Neue LT GEO Bold',
      'Anonymous-Pro': 'Anonymous Pro',
      'Helvetica-Neue-LT-GEO-regular': 'Helvetica Neue LT GEO Regular',
      'TBC-Contractica-CAPS': 'TBC Contractica CAPS',
    },
    extend: {
      colors: {
        'light-black': '#232323',
        'light-gray': '#EAEAEA',
      },
    },
  },
  plugins: [],
};
