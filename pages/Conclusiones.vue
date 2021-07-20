<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen border-b">
          <div class="flex items-stretch justify-between h-full">
            <div class="flex flex-col justify-center w-2/3 h-full p-10">
              <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display fadeUp">
                Lecciones aprendidas
              </h1>
              <article class="max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
                <p>La región del Istmo encarna una gran complejidad en sí misma y que, como se observó en las siete sedes, la diversidad cultural, social, étnica, identitaria y ambiental coloca al proyecto ante retos profundos, que en su mayoría datan de varias generaciones. Sin embargo, se hace evidente la necesidad de mantener mecanismos que den respuesta a las múltiples demandas de la región.</p>
                <p>A la par que reconocemos el valor de este ejercicio para identificar retos de forma ágil, es importante notar que este ejercicio no pretende ser un diagnóstico exhaustivo de las problemáticas sociales del Istmo de Tehuantepec, un tema del que existe amplia literatura. Las problemáticas aquí expuestas se limitan al marco de la Consulta Indígena, e incluso en ese marco hay temas que, por la naturaleza de la metodología de investigación, quedaron fuera del análisis.</p>
                <p>Hacia el futuro, una forma de fortalecer el análisis consiste en realizar esfuerzos para integrar voces de quienes no participaron y las razones por las que no se acercan a participar, ya sea por desconocimiento, limitaciones físicas, de recursos o postura personal o política. Todas estas voces son importantes para mejorar el entendimiento de los retos que conlleva la implementación de un programa de desarrollo como el PDIT.</p>
              </article>
            </div>
            <div class="w-1/2 h-full bg-black bg-cover" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);" :style="{'background-image': `url(${require('@/assets/img/7.png')})`}" />
          </div>
        </div>
      </section>
      <section class="section bg-secondary-500" data-header="is-light">
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary-500">
              Primero
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary-500">
              hacia las comunidades:
            </h3>
            <div class="w-32 h-px bg-primary-500" /><br>
            <div class="prose-lg text-primary-500">
              <p>1. El ejercicio de consulta fortalece las capacidades para el desarrollo discursivo de articulación de necesidades y peticiones de las comunidades.</p>
              <p>2. Buscan que la consulta transite a la creación de mesas de trabajo y agendas colaborativas desde las demandas de la comunidad.</p>
              <p>3. Falta incentivar la participación de mujeres, niños, niñas y adolescents en las agendas comunitarias.</p>
            </div>
          </div>
        </article>
        <article class="slide">
          <div class="w-11/12 max-w-3xl mx-auto">
            <h2 class="font-bold tracking-wider uppercase opacity-50 text-primary-500">
              Segundo
            </h2>
            <h3 class="mb-2 text-3xl capitalize font-display text-primary-500">
              Hacia las dependencias de gobierno:
            </h3>
            <div class="w-32 h-px bg-primary-500" /><br>
            <div class="prose-lg text-primary-500">
              <p>1. Falta fomentar nuevas habilidades que les permitan a los funcionarios incidir en las comunidades.</p>
              <p>2. Promover compromisos de mediano y largo plazo que garanticen la continuidad.</p>
              <p>3. Apoyar el proceso de construcción de confianza y reciprocidad.</p>
            </div>
          </div>
        </article>
      </section>
      <section class="section" data-header="is-light">
        <div class="flex flex-col justify-center h-screen p-10">
          <header class="mb-10">
            <h1 class="mb-4 text-4xl font-bold leading-none text-primary-500 font-display fadeUp">
              Oportunidades
            </h1>
          </header>
          <div class="flex items-stretch justify-between">
            <article class="w-2/3 max-w-3xl pr-10 prose fadeIn text-primary-500" style="animation-delay: 1s">
              <p>Sin duda, estos ejercicios de participación han detonado la sensibilización, el diálogo abierto, la comunicación horizontal, la empatía y paciencia para todas las personas involucradas. A partir de lo que se logró documentar a través de las Voces del Istmo, vale la pena señal algunas ideas que, a manera de oportunidades, se han identificado como espacios para mejorar la sinergia entre las comunidades y el gobierno.</p>
              <p>También se debe buscar que la participación sea extendida a los diferentes núcleos de población que componen las diferentes comunidades involucradas en las consultas, ya que, como manifestaron algunos representantes de las localidades, la información que ha llegado hacia la sociedad local aún no es suficiente. Muchas personas desconocen la celebración de estas consultas.</p>
              <p>Atender, de manera directa, la difusión y divulgación masiva del ejercicio de consulta y las experiencias locales permitiría romper supuestos negativos que las personas tienen del proceso, y dejar que todas y todos los residentes y habitantes de la región puedan expresarse, hacer escuchar su voz y que se logre visibilizar la enorme diversidad que da sentido a esta región.</p>
            </article>
            <aside class="flex flex-col w-1/3 fadeIn" style="animation-delay: 1.2s">
              <small class="block w-full lg:w-2/3">
                <h3 class="mb-2 font-bold tracking-wider uppercase">Fortalecer mecanismos de seguimiento, continuidad y reciprocidad para con las comunidades.</h3><br>
                <h3 class="mb-2 font-bold tracking-wider uppercase">Promover la coordinación inter e intra gubernamental en el marco del proyecto de Desarrollo.</h3><br>
                <h3 class="mb-2 font-bold tracking-wider uppercase">Fortalecer un enfoque desde la diversidad social, cultural y Ambiental.</h3>
              </small>
            </aside>
          </div>
        </div>
      </section>
    </full-page>
  </div>
</template>

<script>

export default {
  name: 'Conclusiones',
  layout: 'LayoutMainContent',
  data () {
    return {
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
