<template>
  <header class="p-3 flex justify-between">
    <nuxt-link to="/">
      <img src="../assets/images/fairtrade.png" alt="" class="w-12 h-12" />
    </nuxt-link>
    <h1 class="text-3xl font-semibold">{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.hero img {
  mix-blend-mode: multiply;
  width: 100%;
  height: auto;
}
</style>
