module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blink': 'blinker 1s steps(1) infinite;'
      },
      colors: {
        'axon': '#ff0000'
      },
      keyframes:{
        blinker: {
          '0%': {opacity: 0},
          '50%':{opacity: 1},
        }
      },
      fontFamily: {
        'lato': ['"Lato"']
      }
    },
  },
  plugins: [],
}
