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
          accent: '#eab308'
        }
      }
    }
  },
  plugins: []
} as Config

