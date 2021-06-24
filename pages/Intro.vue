<template>
  <div>
    <InnerMenu :header="header" />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen border-b">
          <div class="flex items-stretch justify-between h-full">
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary font-display fadeUp">Introducción</h1>
              <article class="max-w-3xl pr-10 prose fadeIn text-primary" style="animation-delay: 1s">
                <p>El Istmo de Tehuantepec en el Sur Sureste del país es la región con la menor distancia entre litorales, 230 km de distancia que representan una oportunidad de desarrollo para comunicar, de forma eficiente, la zona costera suroccidental del país con la costa oriental. De tal forma que los recursos naturales y la producción se puedan movilizar de un lugar a otro con mayor rapidez y facilidad. Sin embargo, esta región alberga diferentes realidades culturales, herederas de antiquísimas tradiciones mesoamericanas, lo cual implica diferentes formas de comprender el territorio, la naturaleza, el paisaje, el hábitat, y las identidades culturales. Todos estos elementos afectan la forma en que se entiende y conceptualiza localmente el desarrollo a lo largo de la región y deben ser tomados en consideración.</p>
                <p>La idea de construir un Corredor Interoceánico no es realmente nueva, los intentos por crear un corredor de este tipo y en esta región datan de siglos. A principios de la segunda década del siglo XIX, la idea estaba latente entre gobernantes y empresarios estadounidenses y mexicanos, pero sólo quedó en estudios previos. Durante la guerra de 1847 entre México y Estados Unidos, el gobierno estadounidense insistió en que se le concedieran derechos para el libre tránsito por la zona del Istmo.</p>
              </article>
            </div>
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);"  :style="{'background-image': `url(${require('@/assets/img/1.jpg')})`}" >
            </div>
          </div>
        </div>
      </section>
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen">
          <div class="flex items-stretch justify-between h-full">
            <div class="w-1/3 h-full bg-black bg-cover" style="clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/2.jpg')})`}">
            </div>
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary font-display fadeUp">Introducción</h1>
              <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary" style="animation-delay: 1s">
                <p>Voces del Istmo es un ejercicio que, desde la investigación aplicada, permite crear sentido y comprender lo que significa el ejercicio de consulta para quienes participan, dándoles la palabra para identificar de viva voz problemáticas relevantes que permitan atender y lograr los propósitos del PDIT, que incluye 5 objetivos estratégicos:</p>
                <ol>
                  <li>Fortalecer la infraestructura social y productiva en la región del Istmo de Tehuantepec.</li>
                  <li>Impulsar un nuevo modelo de crecimiento económico para el desarrollo en beneficio de toda la población del Istmo de Tehuantepec.</li>
                  <li>Asegurar la articulación de acciones emergentes para la población en situación de pobreza extrema en el Istmo de Tehuantepec.</li>
                  <li>Incrementar la biodiversidad y mejorar la calidad del agua, el suelo y el aire, con un enfoque sustentable en la región del Istmo de Tehuantepec.</li>
                  <li>Proteger, reforzar y difundir la diversidad lingüística y cultural, la memoria y los patrimonios culturales de los pueblos indígenas, afromexicanos y equiparables del Istmo de Tehuantepec, a través de acciones que garanticen su participación y derechos culturales.</li>
                </ol>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="section" data-header="is-dark">
        <div class="flex flex-col justify-center h-screen bg-primary">
          <div class="flex items-stretch justify-between h-full">
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/3.jpg')})`}">
            </div>
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-5 text-4xl font-bold leading-none text-white font-display">Explora las sedes</h1>
              <article class="w-1/2">
                <nav class="w-full">

                  <nuxt-link v-for="(location, index) in locations" :key="index" class="flex items-center justify-between mb-8 font-bold transition-all duration-75 ease-in transform bg-transparent group hover:translate-x-2 hover:border-opacity-100 text-secondary font-display" :to="location.url">
                    <div class="flex items-center">
                      <div class="flex items-center justify-center w-8 h-8 mr-4 bg-transparent border rounded-full group-hover:bg-white text-secondary border-secondary">{{ index+1 }}</div>
                      <div class="leading-tight">
                        <span class="block text-xs tracking-wider uppercase opacity-50 font-body">{{ location.state }}</span>
                        <span class="text-xl">{{ location.city }}</span>
                      </div>
                    </div>
                    <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </nuxt-link>
                  
                </nav>
              </article>
            </div>
          </div>
        </div>
      </section>
    </full-page>
  </div>
</template>

<script>
import InnerMenu from '@/components/InnerMenu.vue'

export default {
  data() {
    return {
      header: 'is-light',
      slideIndex2 : 1,
      sliding : false,
      options: {
        licenseKey: '7DB77ED0-EBD64675-AC303CF4-323D7786',
        onLeave: this.onLeave,
        afterLoad: this.afterLoad
      },
      locations: [
        {
          state: 'Oaxaca',
          city: 'Ciudad Ixtepec',
          url: '/ubicaciones/ciudad-ixtepec'
        },
        {
          state: 'Oaxaca',
          city: 'Santa María Chimalapa',
          url: '/ubicaciones/santa-maria-chimilpa'
        },
        {
          state: 'Oaxaca',
          city: 'Salina Cruz',
          url: '/ubicaciones/salinas-cruz'
        },
        {
          state: 'Veracruz',
          city: 'Uxpanapa',
          url: '/ubicaciones/uxpanapa'
        },
        {
          state: 'Oaxaca',
          city: 'San Pedro Huamelula',
          url: '/ubicaciones/san-pedro-huamelula'
        },
        {
          state: 'Oaxaca',
          city: 'Jaltepec de Candayoc',
          url: '/ubicaciones/jaltepec-de-candeyoc'
        },
        {
          state: 'Veracruz',
          city: 'Sayula de Alemán',
          url: '/ubicaciones/sayula-de-aleman'
        }
      ]
    }
  },
  components: {
    InnerMenu
  },
  methods: {
    componentsReady() {
      this.$refs.fullpage.init()
    },
    onLeave(index,nextIndex, direction) {
      var current = nextIndex.item
      this.header = current.dataset.header;
    }
  }
}
</script>