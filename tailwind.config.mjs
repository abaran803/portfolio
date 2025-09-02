/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.08)" },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
}
