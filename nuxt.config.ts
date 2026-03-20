// Nuxt 3 configuration for Artistic Visuals photography site
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
  compatibilityDate: '2024-11-01'
})

