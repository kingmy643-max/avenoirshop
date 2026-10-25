/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))", foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))", border: "hsl(var(--border))",
        muted: "hsl(var(--muted))", "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))", gold: "#C9A24B", ivory: "#F5EFE3",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        logo: ["Gloock", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
