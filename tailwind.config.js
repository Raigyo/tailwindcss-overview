module.exports = {
  purge: ["./*.html", "./**/*.html"],
  theme: {
    // darkMode: "media",
    darkMode: "class",
    extend: {
      spacing: {
        veryWide: "1500px",
      },
      screens: {
        customRes: "1000px",
      },
      minHeight: {
        500: "500px",
        650: "650px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
