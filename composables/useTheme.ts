import { onMounted } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'av-theme'

export function useTheme() {
  const theme = useState<Theme>('av-theme-state', () => 'light')
  const initialized = useState<boolean>('av-theme-initialized', () => false)

  const applyTheme = (value: Theme) => {
    const root = document.documentElement
    if (value === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    theme.value = value
    localStorage.setItem(STORAGE_KEY, value)
  }

  const toggleTheme = () => {
    // Toggle based on the actual `dark` class so it always stays in sync.
    const root = document.documentElement
    applyTheme(root.classList.contains('dark') ? 'light' : 'dark')
  }

  onMounted(() => {
    if (initialized.value) return

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    applyTheme(stored ?? (prefersDark ? 'dark' : 'light'))
    initialized.value = true
  })

  return {
    theme,
    toggleTheme
  }
}

