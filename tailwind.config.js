/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Lemon", "sans-serif"],
        slideshow: ["Slideshow"]

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        limeGreen: 'rgba(199, 220, 84, 0.8);',
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
