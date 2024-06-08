import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, oklch(var(--b1)/0.6), 30%, oklch(var(--b2)/1)), url('/frontpageimage.png')",
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest"],
  },
}

