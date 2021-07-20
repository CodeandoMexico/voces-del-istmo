<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen p-10">
          <header class="mb-10">
            <h1 class="text-4xl font-bold leading-none text-primary-500 font-display">
              Ciclos de aprendizaje
            </h1>
          </header>
          <div class="flex items-stretch justify-between">
            <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
              <p>Los Laboratorios de Aceleración son parte de un nuevo esfuerzo global de PNUD para inyectar innovación a los esfuerzos que realizan la organización y aliados para alcanzar los Objetivos de Desarrollo Sostenible. Son 92 laboratorios que atienden a 116 países y México es uno de ellos. Cada laboratorio trabaja para incorporar nuevas habilidades y enfoques orientados hacia la innovación social y el diseño centrado en las personas, para atender con mayor efectividad problemas complejos y aprender, de forma acelerada y en red, a resolver retos del desarrollo global.</p>
              <p>El método del Laboratorio consiste en cuatro fases:</p>
              <ol>
                <li><b>PRECIBIR</b> y hacer sentido de los retos de desarrollo que tienen las personas en sus comunidades.</li>
                <li><b>EXPLORAR</b>. Entender mejor los retos desde la perspectiva de quienes los enfrentan y proponer soluciones que se construyan a partir de los cambios que las personas están dispuestas a hacer o que ya hacen.</li>
                <li><b>PROBAR</b> distintas soluciones de forma experimental, privilegiando la construcción de evidencia y abrazando el fracaso para generar un ambiente donde florezca el aprendizaje sobre lo que realmente funciona, antes de comprometer grandes sumas de recursos.</li>
                <li><b>CRECER</b> involucra incorporar lo aprendido en los sistemas que se busca afectar.</li>
              </ol>
            </article>
            <aside class="flex flex-col w-1/3 fadeIn" style="animation-delay: 1.2s">
            <!-- INSERTAR IMAGEN 5 -->
            </aside>
          </div>
        </div>
      </section>
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen p-10">
          <header class="mb-10">
            <h1 class="text-4xl font-bold leading-none text-primary-500 font-display">
              Estrategia
            </h1>
          </header>
          <div class="flex items-stretch justify-between">
            <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
              <p><i>Voces del Istmo</i> pertenece a la primera fase de los ciclos de aprendizaje para percibir cuáles son los retos que tiene el proceso de consulta del Programa para el Desarrollo del Istmo de Tehuantepec.</p>
              <p>Cuatro grupos, integrados por personas representantes del PNUD, del equipo de investigación y del equipo de video-documentalistas acompañaron las siete asambleas a lo largo de los siete municipios en la región del Istmo de Tehuantepec, los días 5 y 6 de octubre de 2019 para recuperar las voces y las experiencias de las personas que participaron.</p>
              <p>La estrategia metodológica para el levantamiento de información consistió en documentar, de primera mano, la experiencia de las asambleas a través de observación no participante y entrevistas a las personas asistentes, tanto a funcionarios de gobierno federal o local, como personas de las comunidades.</p>
              <p>A todas las personas que participaron en la investigación se les especificó que el propósito del estudio era documentar su experiencia a través de entrevistas, observación, fotografía y video. Se les aclaró para qué sería utilizada la información y los términos de su participación.</p>
            </article>
            <aside class="flex flex-col w-1/3 fadeIn" style="animation-delay: 1.2s">
              <!-- INSERTAR IMAGEN 6 -->
            </aside>
          </div>
        </div>
      </section>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'Metodologia',
  layout: 'LayoutMainContent',
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
