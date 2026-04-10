/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0D0D0D",
        ember: "#FF6A00",
        coal: "#1A1A1A",
        ash: "#F5F5F5",
        flame: "#A61B1B"
      },
      boxShadow: {
        ember: "0 18px 60px rgba(255, 106, 0, 0.2)",
        card: "0 22px 70px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
