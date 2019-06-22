<template>
  <figure class="bg-green-500 flex hero">
    <div class="flex flex-col w-3/4 mx-auto mt-24 mb-10">
      <div class=" rounded-full border-4 border-black p-5 bg-white product">
        <img src="../assets/images/banana.jpeg" alt="" />
      </div>
      <div class="block border-l-4 border-black h-24 w-1 mx-auto"></div>
      <AppButton cta="See Journey" url="/journey" />
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
