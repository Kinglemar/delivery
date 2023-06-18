// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    // ssr: false,
    // nitro: {
    //     preset: 'node-server'
    // },
    app: {
        head: {
            script: [{
                src: '/js/drift.js',
                async: true,
                // tagPosition: 'bodyClose'
            }],
        },
    },
    css: ['~/assets/css/main.css',
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ["primevue"]
    }
})
