<template>
  <div>
    <InnerMenu :header="header" />
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen border-b">
          <div class="flex items-stretch justify-between h-full">
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary font-display fadeUp">
                Lecciones aprendidas
              </h1>
              <article class="max-w-3xl pr-10 prose fadeIn text-primary" style="animation-delay: 1s">
                <p>Sin el objetivo de ser exhaustivos, a continuación, se desarrollan una serie de lecciones aprendidas resultado de la observación y el análisis que realizó el equipo del Laboratorio de Aceleración PNUD México en colaboración con un equipo de antropólogos y documentalistas. Las siguientes lecciones se orientan en dos sentidos: hacia la comunidad y hacia las dependencias gubernamentales. Al final se presentan algunas lecciones aprendidas sobre el enfoque mismo de crear sentido que propone el Laboratorio de Aceleración.</p>
              </article>
            </div>
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/1.jpg')})`}" />
          </div>
        </div>
      </section>
      <section class="section bg-secondary" data-header="is-light">
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Uno
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las comunidades:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              El ejercicio de consulta fortalece las capacidades para el desarrollo discursivo de articulación de necesidades y peticiones de las comunidades:
            </h4>
            <div class="prose-lg text-primary">
              <p>Conforme se van dando las reuniones, los pobladores que no habían participado en ejercicios similares forta- lecen sus capacidades discursivas y poco a poco proyectan con mayor soltura y fluidez sus demandas. De manera generalizada afirman que en un inicio no tenían un discurso puntual y ordenado que expusiera sus ideas y peticiones. A lo largo del proceso, al momento de esta consulta, consideran que han logrado mayor capacidad de exposición y eso ha permitido tener mejor comunicación con representantes gubernamentales, así como con las personas que forman y participan de las juntas en su localidad. Consideran que el ejercicio fomenta la organización y les motiva a prepararse y planear hacia el interior de sus comunidades, por ello, es importante continuar fortaleciendo las estra- tegias discursivas y de comunicación para articular las necesidades y peticiones de la comunidad, de cara a construir y sentar bases para una interlocución permanente con el gobierno.</p>
            </div>
          </div>
        </article>
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Uno
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las comunidades:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              Buscan que la consulta transite a la creación de mesas de trabajo y agendas colaborativas desde las demandas de la comunidad:
            </h4>
            <div class="prose-lg text-primary">
              <p>Se documentó que las comunidades y las personas que las integran están dispuestas a colaborar con las instituciones de los distintos niveles de gobierno, no sólo en lo que respecta a articular sus demandas, sino en continuar trabajando en el seguimiento a los programas que el gobierno federal y estatal implementa en la región. La condición es que su voz se escuche y atienda de manera permanente, y que las demandas y las necesidades comunitarias identificadas tengan un seguimiento programático y colaborativo, de otro modo, el diálogo y el camino recorrido se quedarían en un nivel muy general y decaerían y terminarían por perderse la motivación y el interés por colaborar. De manera generalizada y recurrente, en las comunidades se expresó la necesidad de crear mesas de trabajo, donde se puedan sentar a dialogar alrededor de una agenda y temas específicos y que sean de interés tanto comunitario como para las distintas dependencias de gobierno, ello en un marco de respeto hacia las formas de organi- zación preestablecidas, con la meta de resolver, de manera conjunta, las demandas históricas de los pueblos, quienes por primera vez sienten que sus voces son escuchadas.</p>
            </div>
          </div>
        </article>
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Uno
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las comunidades:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              Falta incentivar la participación de mujeres, niños, niñas y adoles- centes en las agendas comunitarias:
            </h4>
            <div class="prose-lg text-primary">
              <p>Al vincularse a procesos de este tipo, algunas mujeres mencionan que se sienten empoderadas y contentas de tener la oportunidad de participar fuera de sus hogares en algo que aporta a su comunidad. Sin embargo, de manera general, se observó durante las consultas una baja participación de mujeres y jóvenes, así como nula participación de niños y niñas. Sólo se les ve acompañando a sus padres. La agenda sobre derechos y obligaciones de las infancias y primera infancia son temas que deben incentivarse en las comunidades, de ahí que surja la necesidad de transmitir la impor- tancia de otras agendas transversales. Se documentó que la partici- pación de mujeres en las asambleas indígenas se hace poco visible por el rol protagónico de los hombres, sin embargo, y aunque aparecen de manera minoritaria, su participación, mediante sus intervenciones públicas, fue sumamente relevante.</p>
            </div>
          </div>
        </article>
      </section>
      <section class="section bg-secondary" data-header="is-light">
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Dos
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las dependencias de gobierno:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              Falta fomentar nuevas habilidades que les permitan a los funcio- narios incidir en las comunidades:
            </h4>
            <div class="prose-lg text-primary">
              <p>Para las y los servidores públicos las consultas y el trabajo en comunidad ha representado un reto, pues la mayoría no estaban acostumbrados a este tipo de misiones y se van dando cuenta de que se requieren habilidades nuevas y un proceso de sensibilización para llevarlas a cabo con éxito. Es necesario contar con herramientas que les permitan una aproximación o acercamiento más efectivo hacia las comunidades, por ejemplo, en el manejo del lenguaje.</p>
              <p>Muchos se dirigen a la población de la forma en que están acostumbrados a hacerlo con sus contrapartes en la Ciudad de México, haciendo uso desmedido de lenguaje técnico, lo cual no siempre abona a comunicar, de manera efectiva, sus ideas y a mantener el diálogo. </p>
              <p>Si bien, las personas han aprendido a usar un lenguaje más coloquial con menos tecnicismos y una exposición puntual y clara, así como a escuchar y comprender el sentido de las voces de las comuni- dades, es muy importante cerrar esta brecha de habilidades para continuar con un dialogo y la construcción de conocimiento sobre la región, de viva voz de las personas que viven el territorio. Ha sido un reto para las y los funcionarios vivir y escuchar de manera directa las demandas comunitarias, ello ha ocasionado que las personas se sientan atacadas, vulnerables o carentes de las herramientas o poder de decisión para atender las necesidades, empero, han logrado identi- ficar y reconocer que su labor es escalar estas demandas dentro de sus dependencias, a fin de lograr que se cumplan. Se saben parte de un ejercicio democrático donde gobernar es también informar y, sobre, todo trabajar de manera horizontal.</p>
            </div>
          </div>
        </article>
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Dos
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las dependencias de gobierno:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              Promover compromisos de mediano y largo plazo que garanticen la continuidad:
            </h4>
            <div class="prose-lg text-primary">
              <p>Es importante que las personas que van en represen- tación de las dependencias sean las mismas siempre o, si debe asistir alguien por primera vez, que esta persona vaya bien informada del historial que han construido sus colegas. Hay que ponerles al tanto del contexto, peticiones y avances que se han trabajado. Esta constancia de asistencia favorece la construcción de confianza, el diálogo y agiliza la dinámica. Su ausencia, en cambio, tiene consecuencias contrapro- ducentes. Si se presenta un servidor público diferente en cada reunión y no conoce el trabajo previo, se percibe como señal de que las dependencias no le dan importancia al proceso y molesta mucho a las personas en las comunidades.</p>
            </div>
          </div>
        </article>
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary">
              Dos
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary">
              hacia las dependencias de gobierno:
            </h3>
            <div class="w-32 h-px bg-primary" />
            <h4 class="py-2 font-bold text-primary">
              Apoyar el proceso de construcción de confianza y reciprocidad:
            </h4>
            <div class="prose-lg text-primary">
              <p>Dentro de estos espacios de participación política se dejan en un nivel poco visible la dimensión emocional de los encuentros, sentimientos, y valores, sin embargo, comprender el papel que juegan durante eventos de este tipo es estratégico. Retomar estas dimensiones, desde el discurso del Estado, se torna importante para comenzar a construir líneas de trabajo que estén atravesadas por categorías como: la confianza, la esperanza, la escucha, el amor por la tierra, el honor familiar, el cuidado, la tristeza, la vergüenza, la intimidación, la vulnerabilidad, el miedo y la desesperanza, entre muchas otras que se escuchan y sienten en el observar y hablar con las personas, pero que no siempre aparecen en el discurso. Basta escuchar la voz quebrada de un hombre por la pérdida de un familiar querido o la vergüenza de una mujer al mencionar que no sabe leer y escribir para reconocer que los caminos de investigación en torno a la percepción, la significación o el valor están cargadas de gesto, más que de palabras en ciertas ocasiones.</p>
            </div>
          </div>
        </article>
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
