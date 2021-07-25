<template>
  <div class="flex flex-col w-full h-full">
    <InnerMenu />
    <main class="relative overflow-y-auto min-h-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutMainContent'
}
</script>
