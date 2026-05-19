import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060b1d",
      },
      boxShadow: {
        glow: "0 0 40px rgba(92,132,255,0.35)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 15% 20%, rgba(85,131,255,0.35), transparent 45%), radial-gradient(circle at 85% 10%, rgba(137,84,255,0.25), transparent 40%), linear-gradient(140deg, #07122c 0%, #091b52 45%, #07112b 100%)",
      }
    },
  },
  plugins: [],
};

export default config;
