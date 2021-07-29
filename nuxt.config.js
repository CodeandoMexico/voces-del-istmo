import getSiteMeta from './helpers/getSiteMeta'
const meta = getSiteMeta()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Inicio',
    titleTemplate: 'Voces del Istmo | %s',
    htmlAttrs: {
      lang: 'es-MX'
    },
    bodyAttrs: {
      class: 'antialiased overflow-y-auto font-body overflow-x-hidden noise'
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  layoutTransition: 'tweakOpacity',

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/scss/main.scss',
    jit: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-fullpage.js',
    '@nuxt/content'
  ],

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
