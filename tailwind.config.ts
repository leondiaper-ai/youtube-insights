import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7",
        ink: {
          DEFAULT: "#0E0E0E",
          5: "rgba(14, 14, 14, 0.05)",
          8: "rgba(14, 14, 14, 0.08)",
          12: "rgba(14, 14, 14, 0.12)",
          20: "rgba(14, 14, 14, 0.20)",
          40: "rgba(14, 14, 14, 0.40)",
          60: "rgba(14, 14, 14, 0.60)",
        },
        paper: "#FAF7F2",
        signal: "#FF4A1C",
        electric: "#2C25FF",
        mint: "#1FBE7A",
        sun: "#FFD24C",
        blush: "#FFD3C9",
        smoke: "#8A847A",
        bone: "#E8E3DA",
        warm: "#4A4640",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
