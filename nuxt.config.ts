// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,
  routeRules: {
    '/committee': {
      redirect: {
        statusCode: 301,
        to: '/committee/2026 Sem 1'
      }
    },
    '/committee/**': {
       swr: false,
    },
  },
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/reusable.css',
    '~/assets/css/global.css'
  ],
})
