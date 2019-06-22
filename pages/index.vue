<template>
  <div class="container">
    <figure>
      <img src="../assets/images/banana.webp" alt="" />
    </figure>
  </div>
</template>

<script>
export default {
  components: {},
  async mounted() {
    await this.$store.dispatch('init')
    // this.$store.dispatch('contract/getProductInfo', '123') // how to call a store method
  }
}
</script>

<style></style>
