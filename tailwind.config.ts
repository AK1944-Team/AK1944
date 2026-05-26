import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "rgb(var(--light) / <alpha-value>)",
      black: "rgb(var(--dark) / <alpha-value>)",
      greenMain: "rgb(var(--bg-primary) / <alpha-value>)",
      greenLight: "rgb(var(--light-green) / <alpha-value>)",
      greenB: "rgb(var(--bg-accent) / <alpha-value>)",
      greenC: "rgb(var(--bg-secondary) / <alpha-value>)",
      backgroundMain: "rgb(var(--bg) / <alpha-value>)",
      backgroundB: "rgb(var(--bg-b) / <alpha-value>)",
      redMain: "rgb(var(--red) / <alpha-value>)",
      redError: "rgb(var(--error) / <alpha-value>)",
      yellowVintage: "rgb(var(--accent) / <alpha-value>)",
      yellowContrast: "#FFF205",
      black00: "#000000",
      blue: "rgb(var(--accent-primary) / <alpha-value>)",
      grayDate: "rgb(var(--accent-secondary) / <alpha-value>)",
      textLight: "rgb(var(--text-light) / <alpha-value>)",
      textLightGreen: "rgb(var(--text-light-green) / <alpha-value>)",
      textDarkGreen: "rgb(var(--text-dark-green) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        sourceSans: ["var(--font-source-sans)", "sans-serif"],
        courier: ["Courier New", "Courier", "monospace"],
      },
      fontSize: {
        "12": "0.75rem",
        "14": "0.875rem",
        "16": "1rem",
        "18": "1.125rem",
        "20": "1.25rem",
        "22": "1.375rem",
        "24": "1.5rem",
        "26": "1.625rem",
        "28": "1.75rem",
        "30": "1.875rem",
        "32": "2rem",
        "34": "2.125rem",
        "36": "2.25rem",
        "38": "2.375rem",
        "40": "2.5rem",
        "42": "2.625rem",
        "44": "2.75rem",
        "46": "2.875rem",
        "48": "3rem",
        "50": "3.125rem",
        "96": "6rem",
      },
      padding: {
        "18": "4.5rem",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1280px",
        largeDesktop: "2500px",
      },
      spacing: {
        "150": "150px",
      },
      borderRadius: {
        // niestandardowe zaokrąglenia
      },
      boxShadow: {
        // cienie
      },
      keyframes: {
        // animacje kluczowe
        modalFadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        // animacje
        modalAnimation: "modalFadeIn 0.3s ease-in",
      },
      objectPosition: {
        "center-100": "65% center",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("contrast", ".contrast &");
    }),
  ],
} satisfies Config;
