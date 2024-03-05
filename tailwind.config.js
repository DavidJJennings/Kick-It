export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["SairaExtraCondensed", "sans-serif"],
      },
      aspectRatio: {
        "33/20": "33 / 20",
      },
      colors: {
        "petrol-light": "rgba(190, 200, 210, 0.4)",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
