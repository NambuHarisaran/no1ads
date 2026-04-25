/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0A",
          red: "#FF3D00",
          yellow: "#FFD600",
          text: "#F5F5F5",
          muted: "#2A2A2A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 61, 0, 0.5), 0 0 30px rgba(255, 61, 0, 0.25)",
        panel: "0 20px 45px -25px rgba(0, 0, 0, 0.85)"
      },
      backgroundImage: {
        "red-radial": "radial-gradient(circle at center, rgba(255, 61, 0, 0.2), rgba(10, 10, 10, 0) 65%)"
      }
    }
  },
  plugins: []
};
