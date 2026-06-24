import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    port: 3000,
  },
})
