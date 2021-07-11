export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'voces',
    meta: [
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
    jit: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-fullpage.js',
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
