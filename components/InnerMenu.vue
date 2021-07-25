<template>
  <header class="sticky top-0 z-30 flex items-center justify-between w-full px-4 transition-all duration-75 ease-in shadow-lg bg-primary-500">
    <nuxt-link to="/" class="flex items-center w-auto p-4 font-bold tracking-wider uppercase transition-all duration-75 ease-in text-secondary-500 hover:opacity-50">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      Regresar
    </nuxt-link>
    <button class="flex items-center w-auto p-4 font-bold tracking-wider uppercase transition-all duration-75 ease-in text-secondary-500 hover:opacity-50" @click="isActive = !isActive">
      <svg class="w-6 h-6 mr-1 currentColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      Menu
    </button>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div v-show="isActive" class="fixed inset-0 flex flex-col h-full overflow-y-auto bg-primary-500">
        <button class="flex items-center w-auto p-4 ml-auto font-bold tracking-wider uppercase transition-all duration-75 ease-in text-secondary-500 hover:opacity-50" @click="isActive = !isActive">
          <svg class="w-6 h-6 mr-1 currentColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cerrar
        </button>

        <div class="grid flex-1 grid-cols-1 text-4xl divide-x divide-white divide-opacity-25 lg:grid-cols-2">
          <nuxt-link class="border-t border-white border-opacity-25 inner-item" to="/" @click.native="removeOverflowHidden()">
            Inicio
          </nuxt-link>
          <nuxt-link class="border-t border-white border-opacity-25 inner-item" to="/intro" @click.native="isActive=false">
            Introducción
          </nuxt-link>
          <nuxt-link class="border-t border-white border-opacity-25 inner-item" to="/documental" @click.native="isActive=false">
            Documental
          </nuxt-link>
          <nuxt-link class="border-t border-white border-opacity-25 inner-item" to="/mapa" @click.native="isActive=false">
            Mapa
          </nuxt-link>
          <nuxt-link class="border-t border-b border-white border-opacity-25 inner-item" to="/entrevistas" @click.native="isActive=false">
            Entrevistas
          </nuxt-link>
          <nuxt-link class="border-t border-b border-white border-opacity-25 inner-item" to="/metodologia" @click.native="isActive=false">
            Metodología
          </nuxt-link>
          <nuxt-link class="border-t border-b border-white border-opacity-25 inner-item" to="/conclusiones" @click.native="isActive=false">
            Lecciones
          </nuxt-link>
          <nuxt-link class="border-t border-b border-white border-opacity-25 inner-item" to="/acerca" @click.native="isActive=false">
            Acerca de
          </nuxt-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'InnerMenu',
  data () {
    return {
      isActive: false
    }
  },
  watch: {
    isActive: {
      immediate: true,
      handler (isActive) {
        if (process.client) {
          if (isActive) {
            document.body.classList.add('overflow-y-hidden')
          } else {
            setTimeout(() => {
              document.body.classList.remove('overflow-y-hidden')
            }, 200)
          }
        }
      }
    }
  },
  methods: {
    removeOverflowHidden () {
      this.isActive = false
      document.body.classList.remove('overflow-y-hidden')
    }
  }
}
</script>
<style>
.inner-item {
  @apply flex items-center justify-center text-white hover:text-secondary-500 font-display hover:bg-bg-opacity;
}
</style>
