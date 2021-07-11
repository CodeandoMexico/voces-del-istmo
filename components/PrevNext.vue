<template>
  <div class="fixed bottom-0 z-10 flex justify-between w-full p-2">
    <nuxt-link v-if="prev" :to="{params: { slug: prev.slug } }" class="flex items-center p-2 font-bold tracking-wider text-white uppercase rounded-md bg-bg-opacity">
      <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      {{ prev.name }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link v-if="next" :to="{params: { slug: next.slug } }" class="flex items-center p-2 font-bold tracking-wider text-white uppercase rounded-md bg-bg-opacity">
      {{ next.name }}
      <svg class="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
