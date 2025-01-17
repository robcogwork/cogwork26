/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      /* Primary colors */
      apricot: {
        500: '#F5F5F5',
        300: '#F7F7F7',
        100: '#FAFAFA',
      },
      salmon: {
        500: '#D9793D',
        300: '#E89063',
        100: '#F2B08B',
      },
      aubergine: {
        500: '#50192F',
        300: '#855E6D',
        100: '#AA8E99',
      },

      /* Accent colors */
      kale: {
        500: '#14192C',
        300: '#3A3F55',
        100: '#5E637D',
      },
      cilantro: {
        500: '#00C48C',
        300: '#4DD6AF',
        100: '#82E2C7',
      },
      dove: {
        500: '#DEE0E9',
        300: '#E8E9F0',
        100: '#EFF0F5',
      },

      /* Neutral colors */
      charcoal: {
        800: '#343434',
        600: '#717171',
        400: '#B8B8B8',
        200: '#E1E1E1',
        100: '#F1F1F1',
      },
      wht: '#FFFFFF',
    },
  },
  plugins: [],
}
