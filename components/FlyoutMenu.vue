<template>
  <div class="fixed right-0 z-30 mt-8 mr-8">
    <div class="relative">
      <button type="button" class="inline-flex items-center text-base font-medium rounded-md text-secondary-600 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" aria-expanded="false" @click.prevent="toggle()">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span class="ml-2 text-secondary-600 ">Menu</span>
      </button>
      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <div v-show="isOpen" class="absolute right-0 z-30 w-screen max-w-xs px-2 mt-3 transform sm:px-0">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
              <nuxt-link to="/documental" class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 hover:bg-secondary-100">
                <p class="text-base font-medium text-primary-900">
                  Documental
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Some dummy text, this can be deleted
                </p>
              </nuxt-link>
              <nuxt-link to="/mapa" class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 hover:bg-secondary-100">
                <p class="text-base font-medium text-primary-900">
                  Mapa
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Some dummy text, this can be deleted
                </p>
              </nuxt-link>
              <nuxt-link to="/entrevistas" class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 hover:bg-secondary-100">
                <p class="text-base font-medium text-primary-900">
                  Entrevistas
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Some dummy text, this can be deleted
                </p>
              </nuxt-link>
              <nuxt-link to="/metodologia" class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 hover:bg-secondary-100">
                <p class="text-base font-medium text-primary-900">
                  Metodología
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Some dummy text, this can be deleted
                </p>
              </nuxt-link>
              <nuxt-link to="/conclusiones" class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 hover:bg-secondary-100">
                <p class="text-base font-medium text-primary-900">
                  Lecciones
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Some dummy text, this can be deleted
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyoutMenu',
  data () {
    return {
      isOpen: false
    }
  },
  beforeMount () {
    window.addEventListener('click', this.close)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.close)
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    }
  }
}
</script>
