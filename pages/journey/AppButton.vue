<template>
  <button
    class="border-4 border-black rounded-full py-3 text-2xl font-semibold bg-yellow-500 focus:bg-yellow-700 w-full"
    @click="$router.push(url)"
  >
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    cta: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.basic {
  @apply border-0 py-0;
}
</style>
