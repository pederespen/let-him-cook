# Let Him Cook

A personal online recipe book and cooking website.

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) + [Vite](https://vite.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Static build via [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static), deployed to GitHub Pages
- ESLint (flat config) + Prettier
- Husky + lint-staged pre-commit hooks

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Script                 | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the Vite dev server           |
| `npm run build`        | Static production build to `build/` |
| `npm run preview`      | Preview the production build        |
| `npm run check`        | Type-check with `svelte-check`      |
| `npm run lint`         | Lint with ESLint                    |
| `npm run lint:fix`     | Lint and auto-fix                   |
| `npm run format`       | Format with Prettier                |
| `npm run format:check` | Check formatting without writing    |

## Deployment

Pushing to `master` triggers the [GitHub Pages workflow](.github/workflows/deploy.yml),
which builds the static site and publishes it. The production base path is
`/let-him-cook/` (configured in [`svelte.config.js`](svelte.config.js)).
