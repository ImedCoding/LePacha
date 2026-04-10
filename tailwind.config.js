/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#090909",
        ember: "#D4C49A",
        coal: "#11140F",
        ash: "#F3EBD8",
        flame: "#51663F",
        moss: "#27351E",
        wine: "#4A2E22"
      },
      boxShadow: {
        ember: "0 18px 60px rgba(212, 196, 154, 0.18)",
        card: "0 22px 70px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
