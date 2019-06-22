<template>
  <button class="py-3 text-2xl font-semibold w-full" @click="goTo">
    Go back
  </button>
</template>
<script>
export default {
  name: 'AppButtonBack',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo() {
      if (!this.url) {
        this.$router.back()
      }
      this.$router.push(this.url)
    }
  }
}
</script>
