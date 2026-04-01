import { fileURLToPath } from 'url'
import { windowsSsrAbsoluteImportsFix } from './vite-plugin-windows-ssr-imports.mjs'

// Nuxt 3 configuration for Artistic Visuals photography site
const appManifestStubFs = fileURLToPath(new URL('./node_modules/mocked-exports/lib/empty.mjs', import.meta.url))

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Artistic Visuals | Photography',
      meta: [
        {
          name: 'description',
          content:
            'Artistic Visuals photography portfolio and services. Professional portraits, events, weddings, and more.'
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [windowsSsrAbsoluteImportsFix()],
    resolve: {
      alias: {
        // Vite pre-transforms `import("#app-manifest")` in nuxt’s manifest composable; same stub as @nuxt/vite-builder’s client env.
        '#app-manifest': appManifestStubFs
      }
    }
  }
})

