module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulsate: {
          "0%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
          "10%": {
            filter: `drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 3px #fff)
            drop-shadow(0 0 5px #bc13fe)
            drop-shadow(0 0 22px #bc13fe)`,
          },
          "20%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
          "30%": {
            filter: `drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 3px #fff)
            drop-shadow(0 0 5px #f00)
            drop-shadow(0 0 22px #f00)`,
          },
          "40%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
          "50%": {
            filter: `drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 3px #fff)
            drop-shadow(0 0 5px #0f0)
            drop-shadow(0 0 22px #0f0)`,
          },
          "60%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
          "70%": {
            filter: `drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 3px #fff)
            drop-shadow(0 0 5px #00f)
            drop-shadow(0 0 22px #00f)`,
          },
          "80%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
          "90%": {
            filter: `drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 3px #fff)
            drop-shadow(0 0 5px #ff0)
            drop-shadow(0 0 22px #ff0)`,
          },
          "100%": {
            filter: `drop-shadow(0 0 2px #fff)`
          },
        },
        'small-bounce': {
          "0%, 100%": {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          }
        }
      },
    },
  },
  plugins: [],
};
