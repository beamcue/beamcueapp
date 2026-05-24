/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme (landing, auth, marketing)
        cream: '#fafaf7',
        ink: '#0f0f10',
        muted: '#4a4a4c',
        line: '#e8e6df',
        // Brand
        beam: '#ff5c1f',
        // Legacy dark surface (operator, overlay, dashboard still use these)
        bg: '#0a0a0b',
        surface: '#141417',
        border: '#26262b',
        text: '#fafafa',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
