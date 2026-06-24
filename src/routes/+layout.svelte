<script lang="ts">
  import '../app.css'
  import { onMount } from 'svelte'
  import { base, resolve } from '$app/paths'
  import { theme } from '$lib/theme.svelte'

  let { children } = $props()

  onMount(() => theme.init())
</script>

<svelte:head>
  <title>Let Him Cook</title>
</svelte:head>

<div class="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6">
  <header
    class="flex items-center justify-between gap-4 border-b border-border py-6"
  >
    <a href={resolve('/')} class="flex items-center gap-3">
      <img src="{base}/logo.svg" alt="Let Him Cook logo" class="h-9 w-9" />
      <span class="text-xl font-semibold tracking-tight">Let Him Cook</span>
    </a>

    <button
      type="button"
      onclick={() => theme.toggle()}
      class="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
    >
      {theme.current === 'dark' ? 'Light' : 'Dark'} mode
    </button>
  </header>

  {@render children()}

  <footer class="border-t border-border py-6 text-center text-sm text-subtle">
    Built with SvelteKit, Vite &amp; Tailwind.
  </footer>
</div>
