/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "bg-base": "#0c0c0c",
          "bg-elevated": "#141414",
          "bg-surface": "#1c1c1c",
          "accent-fire": "#E8500A",
          "accent-gold": "#C9A84C",
          "text-primary": "#F5F0E8",
          "text-secondary": "#9A9589",
          "text-muted": "#5A5550",
          "border-subtle": "rgba(255,255,255,0.06)",
          "border-strong": "rgba(232,80,10,0.3)",
          "shadow-fire": "rgba(232,80,10,0.15)"
        }
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        headline: ["Barlow Condensed", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        accent: ["Barlow Condensed", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(232, 80, 10, 0.5), 0 0 30px rgba(232, 80, 10, 0.25)",
        fire: "0 8px 24px rgba(232, 80, 10, 0.35)",
        panel: "0 20px 45px -25px rgba(0, 0, 0, 0.15)"
      },
      backgroundImage: {
        "orange-radial": "radial-gradient(circle at center, rgba(232, 80, 10, 0.12), transparent 65%)"
      }
    }
  },
  plugins: []
};
