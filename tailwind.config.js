module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}
