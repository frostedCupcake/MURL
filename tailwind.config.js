module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "murl-dark": "#24252D",
        "murl-gray-1": "#E3E1E3",
        "murl-gray-2": "#888888",
        "murl-gray-3": "#4F4F4F",
        "murl-black-1": "#2D2E36",
        "murl-black-2": "#1B1A21",
        "murl-black-3": "#2A2D3A",
        "murl-black-4": "#24252D",
        "murl-red-violet": "#DA18A3",
        "file-active": "#2196f3",
        "file-accept": "#00e676",
        "file-reject": "#ff1744",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
        "murl-theme": "eb1484",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
