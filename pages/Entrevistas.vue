<template>
  <section class="h-screen overflow-y-auto bg-black">
    <InnerMenu header="is-dark" />
    <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <li v-for="(interview, index) in interviews.interviews" :key="interview.id" class="relative flex items-center justify-center w-full h-full border-b border-r border-white border-opacity-25 fadeIn video" :style="{animationDelay : index/3 + 's'}" @click="isActive = !isActive">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute z-10 w-12 h-12 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
        <div class="relative block w-full overflow-hidden bg-gray-100 group aspect-w-16 aspect-h-9 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
          <img :src="interview.thumbnail" alt="" class="object-cover pointer-events-none group-hover:opacity-75">
        </div>
      </li>
    </ul>
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
  name: 'Entrevistas',
  async asyncData ({ $content }) {
    const interviews = await $content('interviews').fetch()
    return { interviews }
  },
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
