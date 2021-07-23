<template>
  <div class="w-full h-full overflow-hidden noise font-body">
    <transition name="fade">
      <div id="main-body" class="flex flex-col h-full min-h-screen overflow-y-auto">
        <InnerMenu />
        <main class="main-content">
          <Nuxt />
        </main>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LayoutMainContent'
}
</script>
