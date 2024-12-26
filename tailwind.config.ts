import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        compact: "500px",
        fitWidth: "1400px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {},
      keyframes: {
        rotateNormal: {
          "0%": { transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" },
          "100%": { transform: "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" },
        },
        rotateActive: {
          "0%": { transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" },
          "100%": { transform: "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
