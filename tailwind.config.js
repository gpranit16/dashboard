/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'smart-emerald': '#10b981',
        'smart-purple': '#7c3aed',
        'smart-neon': '#0ea5e9'
      }
    },
  },
  plugins: [],
}
