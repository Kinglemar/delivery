// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-security",
    // "@nuxtjs/axios"
  ],
  // ssr: false,
  // nitro: {
  //     preset: 'node-server'
  // },
  components: { global: true, dirs: ["~/components"] },
  app: {
    head: {
      script: [
        {
          src: "/js/drift.js",
          async: true,
          // tagPosition: 'bodyClose'
        },
      ],
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/mira/theme.css",
    "primevue/resources/primevue.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["primevue"],
  },
});
