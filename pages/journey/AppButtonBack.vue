<template>
  <button class="py-3 text-2xl font-semibold w-full" @click="goTo">
    {{ title }}
  </button>
</template>
<script>
export default {
  name: 'AppButtonBack',
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Go back'
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
