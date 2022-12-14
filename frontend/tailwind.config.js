module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: '300px', max: '475px' },
      },
      colors: {
        primary: {
          100: '#495AF1',
          200: '2D3BBD',
        },
        secondary: {
          100: '#333',
          200: '#000',
        },
      },
      backgroundImage: (theme) => ({
        test1: "url('/src/images/test1.jpg')",
      }),
      gridTemplateRows: {
        layout: 'auto auto 150px',
        mdScreen: 'auto auto 250px',
      },
      height: {
        100: '23rem',
      },
      width: {
        s: '165vh',
      },
      paddingTop: {
        n: '-5em',
      },
      borderRadius: {
        f: '100%',
      },
      inset: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '1/2': '15%',
        '2/4': '44%',
        '1/4': '27%',
        '3/4': '30%',
      }),
      left: {
        7: '45%',
      },
    },

    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#495AF1',
      secondary: '#FEFDFF',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}