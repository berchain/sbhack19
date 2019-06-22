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
  components: { AppView, AppHeader, Hero }
}
</script>

<style scoped>
.hero img {
  mix-blend-mode: multiply;
  width: 100%;
  height: auto;
}
</style>
