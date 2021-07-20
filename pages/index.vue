<template>
  <section class="relative flex flex-col h-full bg-center bg-cover bg-primary-500 font-body" :style="{'background-image': `url(${require('@/assets/img/cover-home.jpg')})`}">
    <div class="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent" />
    <div class="relative z-10 flex items-center flex-1">
      <div class="flex flex-col items-start max-w-2xl px-5 sm:px-14">
        <a href="https://www.mx.undp.org/content/mexico/es/home.html">
          <img src="logo-white.png" class="w-32 mb-4">
        </a>
        <h3 class="mb-2 text-xs font-bold tracking-wider text-white uppercase opacity-50">
          Explora
        </h3>
        <h1 class="text-3xl font-bold leading-none text-white sm:text-6xl font-display">
          <AnimatedTitle text="Voces del Istmo" />
        </h1>
        <h2 class="my-4 text-lg leading-tight text-white sm:text-xl">
          ¿Qué significa la Consulta Indígena del Istmo de Tehuantepec para las personas que participan en ella?
        </h2>
        <nuxt-link class="flex items-center p-4 font-bold bg-white rounded button" to="/intro">
          Explorar contenido
          <svg class="w-6 h-6 ml-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        </nuxt-link>
      </div>
    </div>
    <nav class="relative z-10 grid grid-cols-1 border-t border-white border-opacity-25 divide-x divide-white lg:grid-cols-6 divide-opacity-25">
      <nuxt-link class="nav-item" to="/documental">
        Documental
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
      <nuxt-link class="nav-item" to="/mapa">
        Mapa
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
      <nuxt-link class="nav-item" to="/entrevistas">
        Entrevistas
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
      <nuxt-link class="nav-item" to="/metodologia">
        Metodología
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
      <nuxt-link class="nav-item" to="/conclusiones">
        Lecciones
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
      <nuxt-link class="nav-item" to="/acerca">
        Acerca de
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </nuxt-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Index',
  layout: 'LayoutIndex'
}
</script>

<style>
.nav-item {
  @apply flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in hover:bg-white hover:text-primary-500;
}
</style>
