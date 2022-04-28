module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      backgroundImage: {
        'pokeball': "url('../src/assets/images/bgpokeball4.png')",
        'pokecoll': "url('../src/assets/images/bgpokecoll.png')"
      },
      keyframes: {
        rotations: {
          '0%': { transform: 'rotate(0deg) translate(-60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(-60px) rotate(0deg)' },
        },
        rotations2: {
          '0%': { transform: 'rotate(120deg) translate(-60px) rotate(0deg)' },
          '100%': { transform: 'rotate(480deg) translate(-60px) rotate(0deg)' },
        },
        rotations3: {
          '0%': { transform: 'rotate(240deg) translate(-60px) rotate(0deg)' },
          '100%': { transform: 'rotate(600deg) translate(-60px) rotate(0deg)' },
        },
        opacities2: {
          '0%': { opacity: "1" },
          '100%': { opacity: "0.3" }
        },
      }
    },
  },
  plugins: [],
}
