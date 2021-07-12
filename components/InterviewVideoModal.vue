<template>
  <transition leave-active-class="duration-200">
    <div v-show="isOpen" class="fixed inset-0 inset-x-0 z-50 flex items-center justify-center sm:p-4">
      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-black opacity-75 backdrop-filter backdrop-blur-lg" />
        </div>
      </transition>
      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-100 ease-in"
        leave-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-if="isOpen"
          class="flex flex-col w-full p-4 transition-all transform rounded-lg md:max-w-5xl max-h-95-screen min-h-56 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="w-full max-w-3xl mx-auto shadow-xl">
              <div class="flex justify-between mb-4">
                <div>
                  <h2 class="text-2xl text-white sm:text-3xl font-display">
                    {{ interview.name }}
                  </h2>
                  <span class="font-bold tracking-wider text-white uppercase opacity-50">
                    Oaxaca
                  </span>
                </div>
                <button class="text-xs font-bold tracking-wider text-white uppercase outline-none sm:text-sm" @click="$emit('close')">
                  Cerrar
                </button>
              </div>
              <div class="rounded-lg aspect-w-16 aspect-h-9">
                <iframe
                  class="overflow-hidden rounded-lg shadow-2xl"
                  :src="interview.link"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'InterviewVideoModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    interview: {
      type: Object,
      required: true
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) {
            document.getElementById('interviews-grid').classList.add('overflow-y-hidden')
          } else {
            setTimeout(() => {
              document.getElementById('interviews-grid').classList.remove('overflow-y-hidden')
            }, 200)
          }
        }
      }
    }
  }
}
</script>
