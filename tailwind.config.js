/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sampled from the ShivFlux mark: bright signal-blue fading to deep navy
        flux: {
          25: "#F6F9FF",
          50: "#EEF4FF",
          100: "#DCE8FF",
          200: "#B7D1FF",
          300: "#8AB2FF",
          400: "#4E86FF",
          500: "#215BFF",
          600: "#0F3EE8",
          700: "#0B2FB4",
          800: "#0A2789",
          900: "#0D1B3D",
        },
        ink: {
          DEFAULT: "#0B1220",
          soft: "#33405C",
          faint: "#6B7690",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "flux-streak":
          "linear-gradient(100deg, #0D1B3D 0%, #0F3EE8 42%, #4E86FF 75%, #8AB2FF 100%)",
        "flux-radial":
          "radial-gradient(circle at top right, rgba(33,91,255,0.14), transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(13, 27, 61, 0.10)",
        card: "0 2px 8px rgba(13, 27, 61, 0.06), 0 12px 32px rgba(13, 27, 61, 0.06)",
        "card-hover": "0 8px 16px rgba(13, 27, 61, 0.08), 0 24px 48px rgba(13, 27, 61, 0.10)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "streak-move": "streak-move 3.5s linear infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "streak-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
