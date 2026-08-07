/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F8FAFC",
          bg: "#F8FAFC",
          secondary: "#F1F5F9",
          card: "#FFFFFF",
        },
        graphite: {
          DEFAULT: "#0F172A",
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
        ocean: {
          DEFAULT: "#0F766E",
          hover: "#0D9488",
        },
        border: {
          DEFAULT: "#E2E8F0",
          divider: "#CBD5E1",
        },
        projectNumber: "#94A3B8",
        iconColor: "#334155",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'subtle': '0 4px 12px 0 rgba(15, 23, 42, 0.05)',
        'card': '0 4px 16px 0 rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
