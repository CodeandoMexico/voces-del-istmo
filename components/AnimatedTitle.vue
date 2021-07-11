<template>
  <span class="text">
    <span class="text-wrapper">
      <span class="letters">{{ text }}</span>
    </span>
  </span>
</template>

<script>
import anime from 'animejs'

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  mounted () {
    if (process.browser) {
      const textWrapper = document.querySelector('.text .letters')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

      anime.timeline({ loop: false })
        .add({
          targets: '.text .letter',
          translateY: ['1.1em', 0],
          translateX: ['0.55em', 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: 'easeOutExpo',
          delay: (el, i) => 50 * i
        })
    }
  }
}
</script>

<style>
  .text {
    position: relative;
  }

  .text .text-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  .text .letter {
    transform-origin: 0 100%;
    display: inline-block;
    line-height: 1em;
  }
</style>
