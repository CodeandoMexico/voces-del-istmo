<template>
  <div class="min-h-content">
    <section class="grid flex-shrink-0 w-full h-auto grid-cols-1 overflow-hidden border-b lg:min-h-content border-primary-200 lg:grid-cols-2 lg:gap-2">
      <div class="flex flex-col justify-center col-span-1 p-8 text-left sm:px-20 sm:py-10">
        <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display">
          Ciclos de aprendizaje
        </h1>
        <article class="z-10 max-w-3xl pr-10 prose text-primary-500">
          <p>Los Laboratorios de Aceleración son parte de un nuevo esfuerzo global de PNUD para inyectar innovación a los esfuerzos que realizan la organización y aliados para alcanzar los Objetivos de Desarrollo Sostenible. Son 92 laboratorios que atienden a 116 países y México es uno de ellos. Cada laboratorio trabaja para incorporar nuevas habilidades y enfoques orientados hacia la innovación social y el diseño centrado en las personas, para atender con mayor efectividad problemas complejos y aprender, de forma acelerada y en red, a resolver retos del desarrollo global.</p>
          <p>El método del Laboratorio consiste en cuatro fases:</p>
          <ol>
            <li><b>PERCIBIR</b> y hacer sentido de los retos de desarrollo que tienen las personas en sus comunidades.</li>
            <li><b>EXPLORAR</b>. Entender mejor los retos desde la perspectiva de quienes los enfrentan y proponer soluciones que se construyan a partir de los cambios que las personas están dispuestas a hacer o que ya hacen.</li>
            <li><b>PROBAR</b> distintas soluciones de forma experimental, privilegiando la construcción de evidencia y abrazando el fracaso para generar un ambiente donde florezca el aprendizaje sobre lo que realmente funciona, antes de comprometer grandes sumas de recursos.</li>
            <li><b>CRECER</b> involucra incorporar lo aprendido en los sistemas que se busca afectar.</li>
          </ol>
        </article>
      </div>
      <div class="flex items-center justify-center w-full h-full col-span-1">
        <div class="w-full">
          <div class="aspect-w-3 aspect-h-2">
            <img src="~/assets/img/5.png" class="object-cover object-center">
          </div>
        </div>
      </div>
    </section>
    <section class="grid flex-shrink-0 w-full h-auto grid-cols-1 overflow-hidden border-b lg:min-h-content border-primary-200 lg:grid-cols-2 lg:gap-2">
      <div class="flex flex-col justify-center col-span-1 p-8 text-left sm:px-20 sm:py-10">
        <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display">
          Estrategia
        </h1>
        <article class="z-10 max-w-3xl pr-10 prose text-primary-500">
          <p><i>Voces del Istmo</i> pertenece a la primera fase de los ciclos de aprendizaje para percibir cuáles son los retos que tiene el proceso de consulta del Programa para el Desarrollo del Istmo de Tehuantepec.</p>
          <p>Cuatro grupos, integrados por personas representantes del PNUD, del equipo de investigación y del equipo de video-documentalistas acompañaron las siete asambleas a lo largo de los siete municipios en la región del Istmo de Tehuantepec, los días 5 y 6 de octubre de 2019 para recuperar las voces y las experiencias de las personas que participaron.</p>
          <p>La estrategia metodológica para el levantamiento de información consistió en documentar, de primera mano, la experiencia de las asambleas a través de observación no participante y entrevistas a las personas asistentes, tanto a funcionarios de gobierno federal o local, como personas de las comunidades.</p>
          <p>A todas las personas que participaron en la investigación se les especificó que el propósito del estudio era documentar su experiencia a través de entrevistas, observación, fotografía y video. Se les aclaró para qué sería utilizada la información y los términos de su participación.</p>
        </article>
      </div>
      <div class="flex items-center justify-center w-full h-full col-span-1">
        <div class="w-full">
          <div class="aspect-w-3 aspect-h-2">
            <img src="~/assets/img/6.png" class="object-cover object-center p-6">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getSiteMeta from '~/helpers/getSiteMeta'

export default {
  name: 'Metodologia',
  layout: 'LayoutMainContent',
  data () {
    return {
      currentPath: `${this.$config.baseUrl}/metodologia`
    }
  },
  head () {
    return {
      title: 'Metodología',
      meta: [
        ...this.meta,
        {
          hid: 'description',
          name: 'description',
          content: 'Metodología en Voces del Istmo'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.currentPath
        }
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: 'Metodología',
        description: 'Metodología en Voces del Istmo',
        url: this.currentPath
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>
