<template>
  <div
    class="ml-5 journey__point pb-10 relative border-l-4 border-black"
    :class="{ 'is-last': last, 'is-open': isOpen }"
    @click="toggleOpen"
  >
    <h3 class="font-bold ml-8 pt-1">{{ title }}</h3>
    <div class="accordion__content ml-8">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style scoped lang="scss">
.journey__point {
  &:before {
    content: '+';
    @apply w-10 h-10 float-left -ml-5 text-white bg-black rounded-full inline-flex justify-center align-middle leading-normal text-2xl;
  }
}
.is-open.journey__point:before {
  transform: rotate(-45deg);
}
/*.journey__point.is-last {*/
/*  @apply border-l-4 border-transparent pb-10;*/
/*}*/
.accordion__content {
  display: none;
}
.is-open .accordion__content {
  display: block;
}
</style>
