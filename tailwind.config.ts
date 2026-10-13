import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#fdfaf4",
          100: "#f9f2e3",
          200: "#f0e1c2",
          300: "#e5cc9c",
          400: "#dbb573",
          DEFAULT: "#c99a4e",
          500: "#c99a4e",
          600: "#b3823c",
          700: "#946631",
          800: "#79522b",
          900: "#634325",
          950: "#382412",
          foreground: "#ffffff",
        },
        secondary: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          DEFAULT: "#71717a",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
          foreground: "#ffffff",
        },
        accent: {
          50: "#fcfaf8",
          100: "#f8f3ef",
          200: "#ede4da",
          300: "#e0d1c1",
          400: "#cfbba4",
          DEFAULT: "#bda184",
          500: "#bda184",
          600: "#a48567",
          700: "#866a51",
          800: "#6e5744",
          900: "#594639",
          950: "#30251d",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(14, 165, 233, 0.4)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 10px rgba(14, 165, 233, 0)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) translateY(-100%) rotate(45deg)" },
          "100%": { transform: "translateX(100%) translateY(100%) rotate(45deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(180deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2.5s infinite",
        "shine-once": "shine 1.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 4s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        top: "0 -4px 12px -1px rgba(0,0,0,0.05), 0 -2px 8px -1px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
