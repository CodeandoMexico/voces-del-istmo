<template>
  <section class="relative flex flex-col min-h-screen bg-center bg-cover lg:h-screen bg-primary font-body" :style="{'background-image': `url(${require('@/assets/img/cover-home.jpg')})`}">
    <div class="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent"></div>
    <div class="relative z-10 flex items-center flex-1 w-11/12 mx-auto">
      <div class="flex flex-col items-start max-w-2xl">
        <a href="https://www.mx.undp.org/content/mexico/es/home.html">
          <img src="logo-white.png" class="w-32 mb-4">
        </a>
        <h3 class="mb-2 text-xs font-bold tracking-wider text-white uppercase opacity-50">Explora</h3>
        <h1 class="text-6xl font-bold leading-none text-white font-display">
          <AnimatedTitle text="Voces del Istmo" />
        </h1>
        <h2 class="my-4 text-xl leading-tight text-white">¿Qué significa la Consulta Indígena del Istmo de Tehuantepec para las personas que participan en ella?</h2>
        <nuxt-link class="flex items-center p-4 font-bold bg-white rounded button " to="/intro">
          Explorar contenido
          <svg class="w-6 h-6 ml-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        </nuxt-link>
      </div>
    </div>
    <nav class="relative z-10 flex flex-wrap items-center justify-between border-t border-white border-opacity-25 lg:flex-no-wrap">
      <a class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-r border-white border-opacity-25 hover:bg-white hover:text-primary" href="/intro">
        Introducción
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <a class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-r border-white border-opacity-25 hover:bg-white hover:text-primary" href="#">
        Documental
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <a class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-l border-r border-white border-opacity-25 hover:bg-white hover:text-primary" href="/mapa">
        Mapa
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <nuxt-link class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-r border-white border-opacity-25 hover:bg-white hover:text-primary" to="/entrevistas">
        Entrevistas
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </nuxt-link>
      <a class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-l border-r border-white border-opacity-25 hover:bg-white hover:text-primary" href="#">
        Metodología
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <nuxt-link class="flex items-center justify-between w-full p-4 text-sm font-bold tracking-wider text-center text-white uppercase transition-all duration-75 ease-in border-r border-white border-opacity-25 hover:bg-white hover:text-primary" to="/conclusiones">
        Conclusiones
        <svg class="w-4 h-4 ml-2 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </nuxt-link>
    </nav>


  </section>
</template>

<script>
  import AnimatedTitle from '@/components/AnimatedTitle.vue'

  export default {
    components: {
      AnimatedTitle
    }
  }
</script>

<style>

</style>