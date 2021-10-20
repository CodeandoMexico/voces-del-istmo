<template>
  <div class="min-h-content">
    <section class="grid flex-shrink-0 w-full h-auto grid-cols-1 overflow-hidden border-b lg:min-h-content border-primary-200 lg:grid-cols-2 lg:gap-2">
      <div class="flex flex-col justify-center col-span-1 p-8 text-left sm:px-20 sm:py-10">
        <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display">
          El Laboratorio de Aceleración
        </h1>
        <article class="z-10 max-w-3xl pr-10 prose text-primary-500">
          Los Laboratorios de Aceleración son una iniciativa global con la que el
          PNUD está creando la red de aprendizaje más grande y ágil sobre los retos
          del desarrollo sostenible. Cada laboratorio está dedicado a la exploración
          e identificación de señales emergentes, al mapeo de soluciones e
          innovadores locales, y a la promoción de una cultura de experimentación
          y construcción de evidencia de aquello que funciona y por qué.
        </article>
      </div>
      <div class="flex items-center justify-center w-full h-full col-span-1">
        <div class="w-full">
          <div class="relative aspect-h-2 aspect-w-3">
            <img src="~/assets/img/8.png" class="object-cover object-center p-10 md:p-20">
          </div>
        </div>
      </div>
    </section>
    <section class="grid flex-shrink-0 w-full h-auto grid-cols-1 overflow-hidden lg:min-h-content border-primary-200 lg:grid-cols-2 lg:gap-2">
      <div class="flex flex-col justify-center col-span-1 p-8 text-left sm:px-20 sm:py-10">
        <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display">
          Agradecimientos
        </h1>
        <article class="z-10 max-w-3xl pr-10 prose text-primary-500">
          <p>Agradecimientos especiales al equipo de documentación filmográfica y etnografía a cargo del levantamiento y análisis de la información que se presenta en este informe y el video documental que le acompaña. A Nicolás Gutiérrez Wenhammar, Luis Fernando Pacheco González, Carlos Alberto Cuesy Díaz, Manuel Izurieta Aguilera, Germán García Adrián, Laura Camila, Espinosa Osses, Paulina Saraí Peralta Serrano, Hugo Arriaga González y Mario Alberto Ochoa Bahena.</p>
          <p>También a las y los funcionarios del gobierno federal, de los gobiernos estatales de Oaxaca y Veracruz, y las autoridades municipales del Istmo que participaron en la serie de asambleas que conformaron la Segunda Reunión de Seguimiento y Verificación de Acuerdos de la Consulta Libre, Previa e Informada a Los Pueblos y Comunidades Indígenas del Istmo de Tehuantepec para la creación del “Programa para el Desarrollo del Istmo de Tehuantepec”. Por último, pero no menos importante, a todas las personas del Istmo que acudieron al llamado de sus autoridades para que sucediera este encuentro. A quienes salieron de sus casas y dejaron de lado sus labores para participar y hacer valer su voz, y a quienes tuvieron que desplazarse por varias horas desde de sus lugares de residencia para escuchar y exponer sus demandas. En particular gracias a las personas que, generosamente, nos dedicaron tiempo para participar en las entrevistas.</p>
        </article>
      </div>
      <div class="flex flex-col justify-center col-span-1 p-8 text-left xl:-mt-6 2xl:-mt-0 sm:px-20 sm:py-10">
        <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display">
          Acerca del proyecto
        </h1>
        <article class="max-w-3xl pr-10 prose lg:mb-48 xl:mb-28 text-primary-500">
          <p>Esta iniciativa es el resultado de una actividad de investigación aplicada del Laboratorio de Aceleración del Programa de las Naciones Unidas para el Desarrollo (PNUD) en México. Donde, gracias a la apertura del gobierno de México, fuimos testigos de las dinámicas que se detonaron en el territorio, al ser consultadas las comunidades indígenas sobre la construcción de un programa de desarrollo regional, como lo es el Programa para el Desarrollo del Istmo de Tehuantepec.</p>
          <p>Se realizó bajo la premisa de servir como plataforma para dar voz a las personas que ahí participaron, y que sea, a través de su experiencia, que se logren identificar los retos que enfrentan la sociedad y el gobierno para trabajar de forma coordinada en el logro de objetivos comunes.</p>
          <p>Las conclusiones aquí expresadas no reflejan necesariamente las opiniones del Programa de las Naciones Unidas para el Desarrollo, de su Junta Ejecutiva, ni de sus Estados Miembros.</p>
        </article>
      </div>
    </section>
    <footer class="flex flex-col items-center p-4 space-y-1 text-base text-center border-t text-primary-500">
      <p class="font-semibold ">
        VOCES DEL ISTMO ¿Qué significa la Consulta Indígena del Istmo de Tehuantepec para las personas que participan en ella?</b>
      </p>
      <p>
        Derechos Reservados © 2021 - Programa de las Naciones Unidas para el Desarrollo (PNUD)
      </p>
      <p>
        Montes Urales 440 Col. Lomas de Chapultepec, Alcaldía Miguel Hidalgo. C.P.11000, Ciudad de México.
      </p>
    </footer>
  </div>
</template>

<script>
import getSiteMeta from '~/helpers/getSiteMeta'

export default {
  name: 'Acerca',
  layout: 'LayoutMainContent',
  data () {
    return {
      currentPath: `${this.$config.baseUrl}/acerca`
    }
  },
  head () {
    return {
      title: 'Acerca',
      meta: [
        ...this.meta,
        {
          hid: 'description',
          name: 'description',
          content: 'Acerca de Voces del Istmo'
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
        title: 'Acerca',
        description: 'Acerca de Voces del Istmo',
        url: this.currentPath
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>
