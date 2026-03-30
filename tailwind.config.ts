import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#e2e8f0',
          500: '#0f172a',
          600: '#020617',
          accent: '#eab308',
          mint: '#d9f5e6',
          'mint-soft': '#ecfdf5',
          forest: '#134e4a',
          'forest-deep': '#042f2e'
        }
      }
    }
  },
  plugins: []
} as Config

