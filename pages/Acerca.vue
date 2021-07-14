<template>
  <div>
    <InnerMenu :header="header" />
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section" data-header="is-light">
      <div class="flex flex-col justify-center h-screen p-10">
        <header class="mb-10">
          <h1 class="text-4xl font-bold leading-none text-primary-500 font-display">
            Acerca del proyecto
          </h1>
        </header>
        <div class="flex items-stretch justify-between">
          <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
            <p>Esta iniciativa es el resultado de una actividad de investigación aplicada del Laboratorio de Aceleración del Programa de las Naciones Unidas para el Desarrollo (PNUD) en México. Donde, gracias a la apertura del gobierno de México, fuimos testigos de las dinámicas que se detonaron en el territorio, al ser consultadas las comunidades indígenas sobre la construcción de un programa de desarrollo regional, como lo es el Programa para el Desarrollo del Istmo de Tehuantepec.</p>
            <p>Se realizó bajo la premisa de servir como plataforma para dar voz a las personas que ahí participaron, y que sea, a través de su experiencia, que se logren identificar los retos que enfrentan la sociedad y el gobierno para trabajar de forma coordinada en el logro de objetivos comunes.</p>
            <p>Las conclusiones aquí expresadas no reflejan necesariamente las opiniones del Programa de las Naciones Unidas para el Desarrollo, de su Junta Ejecutiva, ni de sus Estados Miembros.</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section" data-header="is-light">
      <div class="flex flex-col justify-center h-screen p-10">
        <header class="mb-10">
          <h1 class="text-4xl font-bold leading-none text-primary-500 font-display">
            El Laboratorio de Aceleración
          </h1>
        </header>
        <div class="flex items-stretch justify-between">
            <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>Los Laboratorios de Aceleración son una iniciativa global con la que el PNUD está creando la red de aprendizaje más grande y ágil sobre los retos del desarrollo sostenible. Cada laboratorio está dedicado a la exploración e identificación de señales emergentes, al mapeo de soluciones e innovadores locales, y a la promoción de una cultura de experimentación y construcción de evidencia de aquello que funciona y por qué.</p>
            </article>
           <aside class="flex flex-col w-1/3 fadeIn" style="animation-delay: 1.2s">
             <!-- INSERTAR IMAGEN 8 -->
             <small class="block w-full lg:w-2/3">Conoce más en: <b><a href="https://www.mx.undp.org/content/mexico/es/home/accelerator-labs.html">https://www.mx.undp.org/content/mexico/es/home/accelerator-labs.html</a></b></small>
          </aside>
        </div>
      </div>
     </section>
         <section class="section" data-header="is-light">
      <div class="flex flex-col justify-center h-screen p-10">
        <header class="mb-10">
          <h1 class="text-4xl font-bold leading-none text-primary-500 font-display">
            Agradecimientos
          </h1>
        </header>
        <div class="flex items-stretch justify-between">
            <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>Agradecimientos especiales al equipo de documentación filmográfica y etnografía a cargo del levantamiento y análisis de la información que se presenta en este informe y el video documental que le acompaña. A Nicolás Gutiérrez Wenhammar, Luis Fernando Pacheco González, Carlos Alberto Cuesy Díaz, Manuel Izurieta Aguilera, Germán García Adrián, Laura Camila, Espinosa Osses, Paulina Saraí Peralta Serrano, Hugo Arriaga González y Mario Alberto Ochoa Bahena.</p>
                <p>También a las y los funcionarios del gobierno federal, de los gobiernos estatales de Oaxaca y Veracruz, y las autoridades municipales del Istmo que participaron en la serie de asambleas que conformaron la Segunda Reunión de Seguimiento y Verificación de Acuerdos de la Consulta Libre, Previa e Informada a Los Pueblos y Comunidades Indígenas del Istmo de Tehuantepec para la creación del “Programa para el Desarrollo del Istmo de Tehuantepec”. Por último, pero no menos importante, a todas las personas del Istmo que acudieron al llamado de sus autoridades para que sucediera este encuentro. A quienes salieron de sus casas y dejaron de lado sus labores para participar y hacer valer su voz, y a quienes tuvieron que desplazarse por varias horas desde de sus lugares de residencia para escuchar y exponer sus demandas. En particular gracias a las personas que, generosamente, nos dedicaron tiempo para participar en las entrevistas.</p>
            </article>
           <aside class="flex flex-col w-1/3 fadeIn" style="animation-delay: 1.2s"></aside>
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
      }
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
