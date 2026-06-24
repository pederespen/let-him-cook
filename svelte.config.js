import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// In dev there is no base path; in production the site is served from the
// GitHub Pages project subpath /let-him-cook/.
const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? '' : '/let-him-cook',
    },
  },
}
