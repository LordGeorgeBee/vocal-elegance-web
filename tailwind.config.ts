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
        border: "#372C2E",
        input: "#372C2E",
        ring: "#DE9E48",
        background: "#FFFFFF",
        foreground: "#372C2E",
        primary: {
          DEFAULT: "#563727",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#DE9E48",
          foreground: "#372C2E",
        },
        accent: {
          DEFAULT: "#7A431D",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#372C2E",
          foreground: "#FFFFFF",
        },
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