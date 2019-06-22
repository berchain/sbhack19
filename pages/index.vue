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
    // await this.$store.dispatch('ipfs/storeData', data)
    await this.$store.dispatch('init')
    // await this.$store.dispatch('contract/buy', 5000000)
    /* await this.$store.dispatch('contract/addProduct', {
      id: this.$store.state.product_id,
      ipfs: 'QmPnehn1L9v9aXJyhNayd6BLNzyDtD7U713ranAkRqZ9aX',
      certifier: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41'
    }) */
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
