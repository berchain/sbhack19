<template>
  <app-view>
    <AppHeader title="Banana Review" />
    <hero />
  </app-view>
</template>

<script>
import Hero from '../components/Hero'
import AppHeader from '../components/AppHeader'
import AppView from '../components/AppView'

export default {
  components: { AppView, AppHeader, Hero },
  async mounted() {
    await this.$store.dispatch('init')
    // this.$store.dispatch('contract/getProductInfo', '123') // how to call a store method
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
