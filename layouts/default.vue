<template>
  <div class="h-screen overflow-hidden noise font-body">
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<style>
  .noise {
    @apply h-screen relative;
  }

  .noise:before {
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: 50;
    content: '';
    position: absolute;
    pointer-events: none;
    background-position: 50%;
    background-image: url(~assets/img/noise.png);
    pointer-events: none;
    animation: noise 1s steps(2) infinite;
  }

  @keyframes noise {
    0% { transform: translate3d(0, 9rem, 0); }
    10% { transform: translate3d(-1rem, -4rem, 0)}
    20% { transform:translate3d(-8rem, 2rem, 0) } 
    30%{ transform:translate3d(9rem, -9rem, 0) } 
    40%{ transform:translate3d(-2rem, 7rem, 0)}
    50%{ transform:translate3d(-9rem, -4rem, 0)}
    60%{transform:translate3d(2rem, 6rem, 0)}
    70%{transform:translate3d(7rem, -8rem, 0)}
    80%{transform:translate3d(-9rem, 1rem, 0)}
    90%{transform:translate3d(6rem, -5rem, 0)}
    to{transform:translate3d(-7rem, 0, 0)}
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity 1s ease-in;
  }

  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
  
</style>