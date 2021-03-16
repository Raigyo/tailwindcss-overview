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
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
