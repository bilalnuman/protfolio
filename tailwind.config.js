module.exports = {
  content: ["./pages/**/*.{js,jsx}","./components/**/*.{js,jsx}","./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b1020", card: "#0f172a", accent: "#22d3ee" },
      boxShadow: { soft: "0 10px 30px rgba(15,23,42,0.5)" }
    }
  },
  plugins: []
};
