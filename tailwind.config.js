module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        twoRows: "56px 1fr",
        threeRows: "56px 1fr 56px",
      },
      gridTemplateColumns: {
        layout: "240px 1fr",
      },
      colors: {
        primary: "#273238",
        secondary: "#EAEDF7",
        success: "#19b159",
        danger: "#f16d75",
        info: "#01b8ff",
        warning: "#ff9b21",
        light: "#f4f4fd",
        linkcolor: "rgba(255, 255, 255, 0.4)",
        darker: "#111827",
        dark: "#1f2937",
        lighter: "#f3f4f6",
        light: "#e2e4e8",
        lightButton: "#ff7722",
        hoverButton: "#ee5c00",
        darkBlue: "#256A67",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {
      margin: ["hover, group-hover"],
      fontWeight: ["hover", "focus"],
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      transform: ["group-hover"],
      width: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      padding: ["group-hover", "hover"],
      animation: ["group-hover", "hover"],
      scale: ["group-hover", "hover"],
      backgroundColor: ["checked", "odd", "even"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
