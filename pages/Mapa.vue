<template>
  <section class="relative flex flex-col items-center justify-center h-screen bg-center bg-cover lg:h-screen bg-primary font-body">
    <InnerMenu header="is-dark"/>

    <div class="text-center">
      <h1 class="text-2xl italic text-white font-display">Mapa</h1>
      <p class="text-white opacity-75">Elige uno de los puntos de consulta para conocer más:</p>
    </div>

    <div class="relative flex items-center justify-center transform scale-50 lg:scale-100" style="width: 1000px;height: 600;">
      
      <nav class="absolute inset-0">
        <a class="location" href="/ubicaciones/sayula-de-aleman" style="top: 35%;left: 27%;">
          <span class="name">Sayula de Alemán</span>
          <div class="line" style="width: 70px"></div>
          <span class="dot"></span>
        </a>
        <a class="location" href="/ubicaciones/jaltepec-de-candeyoc" style="top: 47%;left:15%; animation-delay: 0.2s;">
          <span class="name">Jaltepec de Candayoc</span>
          <div class="line" style="width: 110px;"></div>
          <span class="dot"></span>
        </a>
        <a class="location" href="/ubicaciones/uxpanapa" style="top: 50%; right: 20%;animation-delay: 0.4s;">
          <span class="dot"></span>
          <div class="line" style="width:100px;"></div>
          <span class="name">Uxpanapa</span>
          
        </a>
        <a class="location" href="/ubicaciones/santa-maria-chimalapa" style="top: 58%;left: 10%;animation-delay: 0.6s;">
          <span class="name">Santa María Chimalpa</span>
          <div class="line" style="width:260px;"></div>
          <span class="dot"></span>
        </a>
        <a class="location" href="/ubicaciones/ciudad-ixtepec" style="top:65%;right:20%;animation-delay: 0.8s;">
          <span class="dot"></span>
          <div class="line" style="width: 200px;"></div>
          <span class="name">Ciudad Ixtepec</span>
        </a>
        <a class="location" href="/ubicaciones/salina-cruz" style="top: 73%; left: 25%;animation-delay: 1s">
          <span class="name">Salina Cruz</span>
          <div class="line" style="width: 120px;"></div>
          <span class="dot"></span>
        </a>
        <a class="location" href="/ubicaciones/san-pedro-huamelula" style="top: 78%; right: 15%;animation-delay: 1.2s;">
          <span class="dot"></span>
          <div class="line" style="width: 280px;"></div>
          <span class="name">San Pedro Huamelula</span>
        </a>
      </nav>

      <img src="~/assets/img/mapa.svg" class="object-cover w-full h-full">

    </div>
  </section>
</template>

<style>

  .location {
    @apply flex items-center absolute;
    animation: fadeIn 1s ease-in forwards;
    opacity: 0;
  }

  .location .name {
    @apply p-1 text-primary inline-block bg-secondary font-bold;
  }

  .location .line {
    @apply h-px bg-secondary;
  }

  .location .dot {
    @apply w-3 h-3 bg-secondary rounded-full inline-block;
    box-shadow: 0 0 0 1.5px #22534E,
                0 0 0 2px #FBB4A8,
                0 0 0 3.5px #22534E,
                0 0 0 4px rgba(251,180,168, 0.5),
                0 0 0 6.5px #22534E,
                0 0 0 7px rgba(251,180,168, 0.3),
                0 0 0 12.5px #22534E,
                0 0 0 13px rgba(251,180,168, 0.1);
                transition: all 0.2s ease-in;
  }

  .location:hover .dot {
    transform: scale(2);
  }

  .location:hover {
    box-shadow: 0 0 0 100em rgba(0,0,0,0.1);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>
