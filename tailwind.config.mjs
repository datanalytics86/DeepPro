/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deeppro-cyan': '#00A9CE',
        'deeppro-dark': '#0A192F',
        'deeppro-gray': '#8892B0',
        'deeppro-light-gray': '#CCD6F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
