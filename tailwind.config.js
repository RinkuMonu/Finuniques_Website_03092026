/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#073b4c",
        lime: "#18a8e5",
        cloud: "#eef8fc",
        ocean: "#078fd1",
        emerald: {
          50: "#eefaff",
          100: "#d8f3ff",
          200: "#b7e8fb",
          300: "#82d6f5",
          400: "#43bde9",
          500: "#18a8e5",
          600: "#078fd1",
          700: "#0674aa",
          800: "#095f87",
          900: "#0b506e",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 59, 76, 0.14)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { opacity: ".45", transform: "translate3d(0,0,0) scale(1)" },
          "50%": { opacity: ".75", transform: "translate3d(-18px,14px,0) scale(1.08)" },
        },
        "trust-slide": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 0.75rem))" },
        },
        "dashboard-float": {
          "0%, 100%": { transform: "translateY(0) rotate(4deg)" },
          "50%": { transform: "translateY(-8px) rotate(3.5deg)" },
        },
        "phone-float": {
          "0%, 100%": { transform: "translateY(0) rotate(-6deg)" },
          "50%": { transform: "translateY(-10px) rotate(-5deg)" },
        },
        "card-float": {
          "0%, 100%": { transform: "translateY(0) rotate(8deg)" },
          "50%": { transform: "translateY(-7px) rotate(9deg)" },
        },
        "hero-copy-in": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "payment-card-drift": {
          "0%, 100%": { transform: "translateY(0) rotate(-8deg)" },
          "50%": { transform: "translateY(-10px) rotate(-5deg)" },
        },
        "payment-icon-orbit": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0)" },
          "35%": { transform: "translate3d(8px,-10px,0) rotate(2deg)" },
          "70%": { transform: "translate3d(-6px,6px,0) rotate(-2deg)" },
        },
        "utility-orbit": {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) translate3d(-235px, -10px, 0) scale(.78)" },
          "10%": { opacity: "1", transform: "translate(-50%, -50%) translate3d(-215px, -42px, 0) scale(.86)" },
          "26%": { transform: "translate(-50%, -50%) translate3d(-188px, -132px, 0) scale(.94)" },
          "42%": { transform: "translate(-50%, -50%) translate3d(-148px, -205px, 0) scale(1)" },
          "58%": { opacity: "1", transform: "translate(-50%, -50%) translate3d(-52px, -220px, 0) scale(1)" },
          "74%": { transform: "translate(-50%, -50%) translate3d(54px, -202px, 0) scale(.96)" },
          "90%": { opacity: ".9", transform: "translate(-50%, -50%) translate3d(156px, -128px, 0) scale(.88)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) translate3d(230px, -52px, 0) scale(.78)" },
        },
        "utility-bubble-orbit": {
          from: { transform: "translate(-50%, -50%) rotate(0deg) translateX(var(--bubble-radius)) rotate(0deg)" },
          to: { transform: "translate(-50%, -50%) rotate(360deg) translateX(var(--bubble-radius)) rotate(-360deg)" },
        },
        "utility-bubble-face-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        "utility-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "utility-counter-spin": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
        "payment-orbit-breathe": {
          "0%, 100%": { transform: "scale(1)", opacity: ".7" },
          "50%": { transform: "scale(1.025)", opacity: "1" },
        },
        "payment-dot-field": {
          "0%, 100%": { transform: "translate3d(0,0,0)", opacity: ".45" },
          "50%": { transform: "translate3d(12px,-8px,0)", opacity: ".8" },
        },
        "payment-scan-line": {
          from: { transform: "translateX(-120%)" },
          to: { transform: "translateX(520%)" },
        },
        "payment-flow-dot": {
          "0%": { opacity: "0", transform: "translate3d(0,0,0) scale(.75)" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translate3d(340px,-72px,0) scale(1.1)" },
        },
        "payment-progress": {
          "0%, 100%": { transform: "translateX(-8%)" },
          "50%": { transform: "translateX(10%)" },
        },
        "payment-float-panel": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        "drift-delayed": "drift 8s 1s ease-in-out infinite reverse",
        "trust-slider": "trust-slide 18s linear infinite",
        "dashboard-float": "dashboard-float 7s ease-in-out infinite",
        "phone-float": "phone-float 5.8s ease-in-out infinite",
        "card-float": "card-float 6.4s ease-in-out infinite",
        "hero-copy": "hero-copy-in .7s cubic-bezier(.22,1,.36,1) both",
        "gradient-shift": "gradient-shift 5s ease-in-out infinite",
        "payment-card-drift": "payment-card-drift 7s ease-in-out infinite",
        "payment-icon-orbit": "payment-icon-orbit 5.4s ease-in-out infinite",
        "utility-orbit": "utility-orbit 7.5s cubic-bezier(.45,0,.55,1) infinite both",
        "utility-bubble-orbit": "utility-bubble-orbit 18s linear infinite",
        "utility-spin": "utility-spin 26s linear infinite",
        "utility-counter-spin": "utility-counter-spin 26s linear infinite",
        "payment-orbit-breathe": "payment-orbit-breathe 7s ease-in-out infinite",
        "payment-dot-field": "payment-dot-field 6s ease-in-out infinite",
        "payment-scan-line": "payment-scan-line 2.8s ease-in-out infinite",
        "payment-flow-dot": "payment-flow-dot 3.2s ease-in-out infinite",
        "payment-progress": "payment-progress 2.8s ease-in-out infinite",
        "payment-float-panel": "payment-float-panel 5.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
