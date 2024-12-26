import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#987554",
        input: "#987554",
        ring: "#B99976",
        background: "#FFFFFF",
        foreground: "#664229",
        primary: {
          DEFAULT: "#B99976",
          foreground: "#664229",
        },
        secondary: {
          DEFAULT: "#D2B48C",
          foreground: "#664229",
        },
        accent: {
          DEFAULT: "#E5D3B3",
          foreground: "#664229",
        },
        muted: {
          DEFAULT: "#987554",
          foreground: "#FFFFFF",
        },
        funeral: {
          primary: "#000000",
          secondary: "#111111",
          accent: "#1a1a1a",
          background: "#000000",
          foreground: "#FFFFFF",
          muted: "#0a0a0a",
          videos: "#BDB8A2"
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;