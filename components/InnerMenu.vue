<template>
  <header class="fixed top-0 z-50 flex items-center justify-between w-full transition-all duration-75 ease-in" :class="header">
    <nuxt-link  to="/" class="flex items-center w-auto p-4 font-bold tracking-wider uppercase transition-all duration-75 ease-in hover:opacity-50">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      Regresar
    </nuxt-link>
    <button class="flex items-center p-4 font-bold tracking-wider uppercase outline-none hover:opacity-50" @click="isActive = !isActive">
      <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      Menu
    </button>

    <div class="fixed inset-0 bg-primary" v-if="isActive">
      <div class="flex items-center justify-between p-4">
        <h2 class="text-sm font-bold tracking-wider uppercase text-secondary">Menu</h2>
        <button class="text-sm font-bold tracking-wider uppercase outline-none text-secondary" @click="isActive = !isActive">Cerrar</button>
      </div>
      <div class="grid h-full grid-rows-5 text-4xl lg:grid-cols-2">
        <a class="flex items-center justify-center text-white border-t border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/">Inicio</a>
        <a class="flex items-center justify-center text-white border-t border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/into">Introducción</a>
        <a class="flex items-center justify-center text-white border-t border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/documental">Documental</a>
        <a class="flex items-center justify-center text-white border-t border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/mapa">Mapa</a>
        <a class="flex items-center justify-center text-white border-t border-b border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/entrevistas">Entrevistas</a>
        <a class="flex items-center justify-center text-white border-t border-b border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/metodologia">Metodología</a>
        <a class="flex items-center justify-center text-white border-t border-b border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/conclusiones">Lecciones</a>
        <a class="flex items-center justify-center text-white border-t border-b border-r border-white border-opacity-25 link hover:text-secondary font-display hover:bg-bg-opacity" href="/acerca">Acerca de</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'inner-menu',
  data() {
    return {
      isActive: false
    }
  },
  props: [
    'header'
  ]
}
</script>

<style>
  .is-dark {
    @apply text-white bg-gradient-to-b from-bg-opacity to-transparent;
  }

  .is-light {
    @apply text-primary;
  }
</style>