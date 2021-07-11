<template>
  <section class="h-screen bg-black">
    <InnerMenu header="is-dark" />
    <div class="grid h-full grid-cols-5 grid-rows-3 videos">
      <div v-for="(index) in 15" :key="index" class="relative flex items-center justify-center w-full h-full border-b border-r border-white border-opacity-25 fadeIn video" :style="{animationDelay : index/3 + 's'}" @click="isActive = !isActive">
        <div class="relative z-10 text-white group-hover:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
        <div class="absolute bottom-0 z-10 w-full p-2 leading-tight text-white bg-gradient-to-t from-bg-opacity to-transparent">
          <h3 class="font-bold">
            Mario Delgado
          </h3>
          <span class="text-xs font-bold tracking-wider uppercase opacity-50">Santa María Chimalapa</span>
        </div>
        <video loop muted class="absolute inset-0 object-cover w-full h-full" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
          <source :src="`${require('@/assets/placeholder.mp4')}`" type="video/mp4">
        </video>
      </div>
    </div>
    <div v-if="isActive" class="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" style="backdrop-filter: blur(11px);">
      <div>
        <div class="flex justify-between mb-4">
          <div>
            <h2 class="text-3xl text-white font-display">
              Mario Delgado
            </h2>
            <h3 class="font-bold tracking-wider text-white uppercase opacity-50">
              Oaxaca
            </h3>
          </div>
          <button class="text-sm font-bold tracking-wider text-white uppercase outline-none" @click="isActive = !isActive">
            Cerrar
          </button>
        </div>
        <iframe
          class="overflow-hidden rounded-lg shadow-2xl"
          width="900"
          height="500"
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    playVideo (element) {
      element.target.play()
    },
    pauseVideo (element) {
      element.target.pause()
    }
  }
}
</script>

<style>

  .fadeIn {
    transform: translateY(-1em);
    animation: fadeIn 0.2s forwards ease-in;
    opacity: 0;
  }

  .video {
    filter: grayscale(1);
    cursor: pointer;
  }

  .video:hover {
    filter: grayscale(0);
  }

  @keyframes fadeIn {
    to {
      opacity: 0.5;
      transform: translateY(0);
    }
  }

</style>
