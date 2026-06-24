export type Theme = 'light' | 'dark'

const isDark = () =>
  typeof document !== 'undefined' &&
  document.documentElement.classList.contains('dark')

/**
 * Shared, reactive theme store (Svelte 5 runes). The inline script in
 * `app.html` sets the `.dark` class before paint; `init()` syncs this store
 * to whatever that script decided once the app mounts on the client.
 */
class ThemeStore {
  current = $state<Theme>('light')

  init() {
    this.current = isDark() ? 'dark' : 'light'
  }

  set(next: Theme) {
    this.current = next
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  toggle() {
    this.set(this.current === 'dark' ? 'light' : 'dark')
  }
}

export const theme = new ThemeStore()
