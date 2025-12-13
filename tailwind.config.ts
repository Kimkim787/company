import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#111111",
        muted: "#6B7280",
        line: "#E5E7EB",
        footer: "#1F1F1F",
        panel: "#DFE9EF"
      }
    }
  },
  plugins: []
} satisfies Config;
