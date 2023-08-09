/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        black: "#000",
        gold: {
          "100": "#fccc00",
          "200": "#f0c419",
        },
        darkslategray: "#0d353a",
        whitesmoke: "#f5f5f5",
        lightsteelblue: "#b8c8d4",
        aliceblue: "#f5faff",
        gray: "#020202",
        "primary-2": "#4effdf",
        darkorange: "#ff7a00",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "nesine-main-yellow": "#ffcc00",
        "main-color": "#16454b",
      },
      fontFamily: {
        "primary-texts-roboto-regular-14": "Roboto",
        "fjalla-one": "'Fjalla One'",
        "instrument-sans": "'Instrument Sans'",
      },
      borderRadius: {
        lg: "18px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "49xl": "68px",
      xl: "20px",
      smi: "13px",
      xs: "12px",
      "3xs": "10px",
      lg: "18px",
      mini: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
