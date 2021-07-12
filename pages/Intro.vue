<template>
  <div>
    <InnerMenu :header="header" />
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen border-b">
          <div class="flex items-stretch justify-between h-full">
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display fadeUp">
                Introducción
              </h1>
              <article class="max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>El Istmo de Tehuantepec en el Sur Sureste del país es la región con la menor distancia entre litorales, 230 km de distancia que representan una oportunidad de desarrollo para comunicar, de forma eficiente, la zona costera suroccidental del país con la costa oriental. De tal forma que los recursos naturales y la producción se puedan movilizar de un lugar a otro con mayor rapidez y facilidad. Sin embargo, esta región alberga diferentes realidades culturales, herederas de antiquísimas tradiciones mesoamericanas, lo cual implica diferentes formas de comprender el territorio, la naturaleza, el paisaje, el hábitat, y las identidades culturales. Todos estos elementos afectan la forma en que se entiende y conceptualiza localmente el desarrollo a lo largo de la región y deben ser tomados en consideración.</p>
                <p>La idea de construir un Corredor Interoceánico no es realmente nueva, los intentos por crear un corredor de este tipo y en esta región datan de siglos. Desdede la segunda década del siglo XIX, la idea estaba latente entre gobernantes y empresarios.</p>
              </article>
            </div>
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/1.jpg')})`}" />
          </div>
        </div>
      </section>
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen">
          <div class="flex items-stretch justify-between h-full">
            <div class="w-1/3 h-full bg-black bg-cover" style="clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/2.jpg')})`}" />
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display fadeUp">
                PDIT
              </h1>
              <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>El <a href="https://www.gob.mx/programaistmo" target="_blank">Programa de Desarrollo para el Istmo de Tehuantepec</a> persigue generar las condiciones que ayuden a detonar el crecimiento económico y social en el Istmo de Tehuantepec. Está conformado por 79 municipios, de los cuales 46 forman parte del Estado de Oaxaca y 33 del Estado de Veracruz.</p>
                <p>El principal objetivo del Programa para el Desarrollo del Istmo de Tehuantepec es impulsar el crecimiento de la economía local con pleno respeto a la historia, la cultura y las tradiciones del Istmo, lo cual impulsará el desarrollo económico sustentable de la región, así como la capacidad productiva en los sectores con mayor potencial. Durante la consulta se realizaron 21 asambleas consultivas, con alrededor de 5,000 participantes de 12 pueblos originarios más el afromexicano y la participación de más de 100 servidores públicos.</p>
                <p>El caso del Programa para el Desarrollo del Istmo de Tehuantepec y la consulta a través de la cual se construyeron sus líneas estratégicas es de particular relevancia para el desarrollo sostenible en el país; ya que representan una visión de desarrollo que apuesta por aumentar la actividad económica desde una visión de inclusión, sostenibilidad y pleno respeto a la historia, la cultura y las tradiciones de la región del Istmo.</p>
                <!-- <p><a href="https://www.gob.mx/programaistmo">Conoce más del Programa</a></p> -->
                <!-- <ol>
                  <li>Fortalecer la infraestructura social y productiva en la región del Istmo de Tehuantepec.</li>
                  <li>Impulsar un nuevo modelo de crecimiento económico para el desarrollo en beneficio de toda la población del Istmo de Tehuantepec.</li>
                  <li>Asegurar la articulación de acciones emergentes para la población en situación de pobreza extrema en el Istmo de Tehuantepec.</li>
                  <li>Incrementar la biodiversidad y mejorar la calidad del agua, el suelo y el aire, con un enfoque sustentable en la región del Istmo de Tehuantepec.</li>
                  <li>Proteger, reforzar y difundir la diversidad lingüística y cultural, la memoria y los patrimonios culturales de los pueblos indígenas, afromexicanos y equiparables del Istmo de Tehuantepec, a través de acciones que garanticen su participación y derechos culturales.</li>
                </ol> -->
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen border-b">
          <div class="flex items-stretch justify-between h-full">
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display fadeUp">
                Voces del Istmo
              </h1>
              <article class="max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>Voces del Istmo es un ejercicio que, desde la investigación aplicada, permite crear sentido y comprender lo que significa el ejercicio de consulta a partir de las voces y las experiencias de las personas que participaron en siete asambleas organizadas por el Gobierno de México los días 5 y 6 de octubre de 2019.</p>
                <p>En este sitio se presentan los resultados de una investigación exploratoria realizada por un equipo integrado por antropólogos y documentalistas, quienes acompañaron a una delegación de funcionarios federales y de los gobiernos estatales de Oaxaca y Veracruz en la segunda reunión de seguimiento y verificación de acuerdos de la consulta con las autoridades e instituciones representativas de los municipios y las comunidades indígenas de los pueblos Binnizá (Zapoteco), Ayuuk (Mixe), Zoque, Ikoots (Huave), Chontal, Chinanteco, Mazateco, Mixteco, Popoluca, Náhuatl, Totonaco, Tzotzil y Afromexicanos, asentados en las zonas de influencia del Programa para el Desarrollo del Istmo de Tehuantepec.</p>
                <p>Voces del Istmo fue conceptualizado por el Laboratorio de Aceleración del PNUD en México. Además de los recursos digitales de este sitio puedes <a href="https://www.mx.undp.org/content/mexico/es/home/library/hiv_aids/voces-del-istmo.html" target="_blank">descargar el reporte</a> completo.</p>
                <p><a href="../Acerca"> Conoce más sobre los aliados y el Laboratorio de Aceleración</a></p>
              </article>
            </div>
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/1.jpg')})`}" />
          </div>
        </div>
      </section>
      <section class="section" data-header="is-dark">
        <div class="flex flex-col justify-center h-screen bg-primary-500">
          <div class="flex items-stretch justify-between h-full">
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/3.jpg')})`}" />
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-5 text-4xl font-bold leading-none text-white font-display">
                Explora las sedes
              </h1>
              <article class="w-1/2">
                <p class="block text-xs tracking-wider text-white opacity-50 font-body">
                  El proceso de Consulta se realizó en siete sedes a lo largo del Istmo de Tehuantepec durante 2019. El registro de <i>Voces del Istmo</i>  refiere a las siete sedes durante la segunda reunión de seguimiento el 5 y 6 de octubre.
                </p>
                <br>
                <nav class="w-full">
                  <nuxt-link v-for="(location, index) in locations" :key="index" class="flex items-center justify-between mb-8 font-bold transition-all duration-75 ease-in transform bg-transparent group hover:translate-x-2 hover:border-opacity-100 text-secondary-500 font-display" :to="location.url">
                    <div class="flex items-center">
                      <div class="flex items-center justify-center w-8 h-8 mr-4 bg-transparent border rounded-full group-hover:bg-white text-secondary-500 border-secondary-500">
                        {{ index+1 }}
                      </div>
                      <div class="leading-tight">
                        <span class="block text-xs tracking-wider uppercase opacity-50 font-body">{{ location.state }}</span>
                        <span class="text-xl">{{ location.city }}</span>
                      </div>
                    </div>
                    <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
  components: {
    InnerMenu
  },
  data () {
    return {
      header: 'is-light',
      slideIndex2: 1,
      sliding: false,
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
  methods: {
    componentsReady () {
      this.$refs.fullpage.init()
    },
    onLeave (index, nextIndex, direction) {
      const current = nextIndex.item
      this.header = current.dataset.header
    }
  }
}
</script>
