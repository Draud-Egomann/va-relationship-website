// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // https://nuxt.com/docs/guide/directory-structure/composables
  imports: {
    dirs: ["composables/**"],
  },

  modules: ['@vesp/nuxt-fontawesome', '@nuxtjs/tailwindcss'],

  // https://nuxt.com/modules/nuxt-fontawesome
  fontawesome: {
    // https://github.com/bezumkin/nuxt-fontawesome/tree/main
    component: "fa",
    suffix: true,
    icons: {
      solid: [
        "bars",
        "times",
        "arrow-left",
        "arrow-right",
        "arrow-down",
        "book",
        "copyright",
        "hand-pointer",
        "arrow-up",
        "external-link-square-alt",
        "copy",
        "link",
      ],
      regular: ["user"],
    },
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})
