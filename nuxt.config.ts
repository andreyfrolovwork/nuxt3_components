// @ts-nocheck
import { defineNuxtConfig } from "nuxt/config"
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ["@vueform/slider", "swiper", "lodash-es"],
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            baseImagesUrl: "http://localhost:6200/images/",
            apiUrl: "http://localhost:6200/api",
            //otherUrl: process.env.OTHER_URL || "default_other_url"
        },
    },
    modules: ["@pinia/nuxt"],
    css: [
        "@/assets/styles/_base.scss",
        "@/assets/styles/_modern-normalize.scss",
        "@/assets/styles/fonts/Montserrat.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // mixins and variables
                    additionalData:
                        '@import "@/assets/styles/_mixins.scss";@import "@/assets/styles/_settings.scss";@import "@/assets/styles/_v-animate-on-scroll.scss";',
                },
            },
        },
    },
})
