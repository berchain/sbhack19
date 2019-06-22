<template>
  <figure class="bg-green-500 flex hero">
    <div class="flex flex-col w-3/4 mx-auto mb-10">
      <div
        class=" rounded-full border-4 border-black p-5 bg-white product mx-auto"
      >
        <img src="../assets/images/banana.jpeg" alt="" />
      </div>
      <div class="block border-l-4 border-black h-24 w-1 mx-auto"></div>
      <AppButton cta="See Journey" url="/journey" />
      <AppButton
        class="mt-5 bg-green-500 border-none px-0"
        cta="Why is it Fair-trade ?"
        url="/organisation"
      />
    </div>
  </figure>
</template>
<script>
import AppButton from '../pages/journey/AppButton'
export default {
  name: 'Hero',
  components: { AppButton }
}
</script>
<style scoped lang="scss">
.hero img {
  mix-blend-mode: multiply;
  width: 100%;
  height: auto;
}

.hero {
  min-height: 100vh;
}

.product {
  max-width: 18rem;
}
</style>
