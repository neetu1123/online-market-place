// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ["~/plugins/snackbar"],
  modules: [
    "@pinia/nuxt",
    '@nuxt/image',
    'nuxt-snackbar',
    '@nuxt/eslint',
  ],
  snackbar: {
    top: true,
    right: true,
    shadow: true,
    border: "right",
    duration: 8000,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})