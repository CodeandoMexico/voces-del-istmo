<template>
  <section class="bg-black min-h-content">
    <iframe
      class="fixed bottom-0 right-0 w-auto h-auto min-w-full min-h-full bg-cover min-h-content"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6Y-OM0awTBk"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </section>
</template>

<script>
import getSiteMeta from '~/helpers/getSiteMeta'

export default {
  name: 'Documental',
  layout: 'LayoutMainContent',
  data () {
    return {
      currentPath: `${this.$config.baseUrl}/documental`
    }
  },
  head () {
    return {
      title: 'Documental',
      meta: [
        ...this.meta,
        {
          hid: 'description',
          name: 'description',
          content: 'Documental sobre Voces del Istmo'
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
        title: 'Documental',
        description: 'Documental sobre Voces del Istmo',
        url: this.currentPath
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>
