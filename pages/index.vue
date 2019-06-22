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
  mounted() {
    this.$store.dispatch('init')
  }
}
</script>

<style></style>
