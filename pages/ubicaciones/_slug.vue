<template>
  <div class="h-full">
    <prev-next :prev="prev" :next="next" />
    <section class="flex items-center h-full bg-center bg-cover bg-primary-500" :style="{ backgroundImage: `url(${bgImage})`}">
      <div class="flex flex-col items-center justify-center w-full h-full p-10 text-center md:w-1/2">
        <span class="text-6xl font-bold text-white">
          {{ location._id }}
        </span>
        <h1 class="text-4xl italic text-secondary-500 font-display">
          {{ location.name }}
        </h1>
        <h2 class="mb-3 text-2xl text-white font-display">
          {{ location.state }}
        </h2>
        <p class="text-xl text-white">
          {{ location.description }}
        </p>
      </div>
    </section>
    <section class="grid w-full h-auto grid-cols-1 overflow-hidden lg:h-full lg:grid-cols-3 lg:gap-2 white-pattern-background">
      <div class="flex flex-col justify-center col-span-2 p-6 space-y-4 text-left sm:space-y-8 sm:p-10">
        <div class="flex flex-col">
          <span class="inline-block p-1 text-sm font-bold tracking-wider uppercase text-primary-500 font-body fadeUp">
            {{ location.state }}
          </span>
          <span class="text-4xl font-bold leading-none text-primary-500 font-display">
            <AnimatedTitle :text="location.name" />
          </span>
          <div class="flex flex-col py-2 space-y-4 text-primary-500">
            <p class="flex items-center text-sm font-bold uppercase">
              <svg class="flex-shrink-0 w-6 h-6 mr-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ location.location }}
            </p>
            <p class="flex items-center text-sm font-bold uppercase">
              <svg class="flex-shrink-0 w-6 h-6 mr-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ location.date }}
            </p>
          </div>
        </div>
        <article class="max-w-3xl pr-10 prose text-primary-500">
          <div v-html="location.intro" />
        </article>
      </div>
      <div class="flex items-center col-span-1">
        <div class="flex flex-col">
          <h3 class="mb-2 font-bold tracking-wider uppercase">
            Reporte
          </h3>
          <div v-for="(video, index) in location.videos" :key="index" class="mb-2 ">
            <small class="block w-full">Para conocer más, descarga el reporte completo:</small>
            <button>Descargar</button>
          </div>
        </div>
      </div>
    </section>
    <section class="flex items-start py-4 bg-center bg-cover sm:py-10 min-h-content bg-secondary-500" :style="{ backgroundImage: `url(${imageBackgroundInterview})`}">
      <div
        class="px-2 mx-auto sm:px-7 xl:px-0 max-w-7xl"
        :class="{'grid grid-cols-1 gap-y-6 gap-x-2 lg:grid-cols-2 2xl:grid-cols-3': location.interviews.length > 1}"
      >
        <figure v-for="(interview, index) in location.interviews" :key="index" class="relative overflow-hidden">
          <div class="absolute inline-block p-5 transform -translate-y-1/2 top-8 right-5">
            <svg class="w-6 h-6 fill-current text-secondary-600">
              <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
            </svg>
          </div>
          <div class="mx-3 rounded-lg shadow-lg">
            <div class="h-32 p-4 rounded-t-lg sm:p-6 2xl:h-36 bg-primary-500">
              <h1 class="pb-1 text-xl text-white fonts">
                {{ interview.name }}
              </h1>
              <p class="text-base font-medium uppercase text-secondary-500">
                {{ interview.position }}
              </p>
              <p class="text-base font-medium text-secondary-500">
                {{ interview.age }}
              </p>
            </div>
            <div class="relative h-auto p-4 bg-white rounded-b-lg sm:p-6 lg:h-112 2xl:h-128">
              <p class="text-base leading-8 prose text-gray-600" v-html="interview.text" />
            </div>
          </div>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundInterview from '@/assets/img/bg-entrevista.svg'
export default {
  name: 'UbicacionesSlug',
  layout: 'LayoutMainContent',
  transition: 'tweakOpacity',
  async asyncData ({ $content, params }) {
    const location = await $content('locations', params.slug).fetch()
    const [prev, next] = await $content('locations')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      location,
      prev,
      next
    }
  },
  data () {
    return {
      imageBackgroundInterview: backgroundInterview
    }
  },
  computed: {
    bgImage () {
      return require(`@/assets/img/${this.location.image}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
