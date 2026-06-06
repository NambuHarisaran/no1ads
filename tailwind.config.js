/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#F29F05",
          "gold-dark": "#D68C00",
          orange: "#F26E22",
          "orange-dark": "#D9560F",
          ink: "#0D0D0D",
        }
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        label: ["JetBrains Mono", "Courier New", "monospace"]
      },
      boxShadow: {
        xs: "0 1px 4px rgba(13, 13, 13, 0.06)",
        sm: "0 2px 10px rgba(13, 13, 13, 0.08)",
        md: "0 8px 28px rgba(13, 13, 13, 0.10)",
        lg: "0 20px 56px rgba(13, 13, 13, 0.13)",
        gold: "0 8px 32px rgba(242, 159, 5, 0.25)",
        orange: "0 8px 32px rgba(242, 110, 34, 0.28)"
      }
    }
  },
  plugins: []
};
