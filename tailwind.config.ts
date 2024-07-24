import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { PluginAPI } from "tailwindcss/types/config";

const config = {
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
        primary: {
          light: "#1DB954", // Spotify Green
          DEFAULT: "#1DB954", // Spotify Green
          dark: "#1A874C", // Darker Green
        },
        secondary: {
          light: "#535353", // Light Gray
          DEFAULT: "#191414", // Black (Spotify background)
          dark: "#121212", // Darker Black
        },
        accent: {
          light: "#F1C40F", // Yellow
          DEFAULT: "#E91E63", // Pink
          dark: "#9C27B0", // Purple
        },
        background: {
          light: "#F8F8F8", // Light Background
          DEFAULT: "#FFFFFF", // White Background
          dark: "#121212", // Dark Background
        },
        text: {
          light: "#FFFFFF", // White Text
          DEFAULT: "#000000", // Black Text
          dark: "#B3B3B3", // Gray Text
        },
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
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
