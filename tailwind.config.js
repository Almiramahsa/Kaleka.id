/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      kalekaYellow: '#F8BE1A',
      kalekaBlack:'#000000',
      kalekaGreen:'#065F46',
      kalekaRed : '#E25141',
      kalekaWhite : '#FFFFFF',
      kalekaBlue : '#478AF7'

    },
    fontFamily: {
      'inter-reguler': ['Inter-Reguler'],
      'inter-bold': ['Inter-Bold'],
      'inter-medium' : ['Inter-Medium']

    },
    fontSize:{
      'xxl': '32px'
    }
  },
  plugins: [],
};
