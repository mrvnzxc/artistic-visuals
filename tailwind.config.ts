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
          50: '#fafafa',
          100: '#f4f4f5',
          500: '#0f172a',
          600: '#020617',
          silver: '#c4c4cc',
          'silver-muted': '#a1a1aa'
        }
      }
    }
  },
  plugins: []
} as Config

