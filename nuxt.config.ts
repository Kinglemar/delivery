// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-security",
    "nuxt-mapbox",
    // "@nuxtjs/axios"
  ],
  // ssr: false,
  // nitro: {
  //     preset: 'node-server'
  // },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoia2luZ2xlbWFyIiwiYSI6ImNsbnpvbzNvdjA1ZDcyanBqMmxzdWs3NGoifQ.ezuyvpbxoSxSkbJWysT-2Q'
  },
  components: { global: true, dirs: ["~/components"] },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          crossorigin: "anonymous",
          href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css",
        },
      ],
      script: [
        {
          src: "/js/drift.js",
          async: true,
          crossorigin: "anonymous",
          tagPosition: "bodyClose",
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
