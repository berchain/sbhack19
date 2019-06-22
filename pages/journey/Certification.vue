<template>
  <div class="certification">
    <ol>
      <li class="">
        <div class="ml-5 certification__item_brand">
          <h2 class="font-semibold ml-8 pt-4">Certification Process</h2>
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'Certification'
}
</script>
<style lang="scss">
.certification {
  counter-reset: item;
}
.certification__item {
  clear: both;
  counter-increment: item;
  @apply pb-10 border-l-4 border-black;
  &:before {
    content: counter(item);
    text-align: center;
    @apply w-10 h-10 -ml-5 float-left border-4 border-black rounded-full font-semibold bg-green-500 text-2xl;
  }
  &.last:before {
    @apply border-b-4 rounded-b-full;
  }
  &_brand {
    @apply pb-10 border-l-4 border-black;
    &:before {
      background-image: url('~assets/images/fairtrade-logo.png');
      content: '';
      background-size: 125%;
      background-position: center;
      background-repeat: no-repeat;
      @apply w-12 h-12 -ml-6 float-left border-black border-4 rounded-full;
    }
  }
}
</style>
