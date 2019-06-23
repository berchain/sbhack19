<template>
  <div class=" w-1/3 relative factbox" :class="{ hide: !isOpen }">
    <figure
      class="text-4xl font-semibold border-black border-t-4 border-b-4 relative p-2 h-48 flex justify-middle align-center flex-col"
      @click="toggle"
    >
      {{ stats }}
      <img v-if="src" :src="src" alt="" class="w-20" />
      <h2 class="text-xl font-semibold" style="line-height: 1">
        {{ title }}
      </h2>
    </figure>
    <div class="info p-3 bg-white absolute m-3">
      <div v-if="info" v-html="info" />
      <p v-if="text">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FactBox',
  props: {
    stats: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="scss">
.hide {
  & .info {
    width: 0;
    opacity: 0;
    z-index: -10;
  }
}
:not(.hide).factbox {
  & figure:after {
    content: '';
    display: block;
    bottom: -2.8rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    @apply bg-white w-8 h-8 absolute;
  }
}
.factbox {
  & .info {
    width: calc(100vw - 1.5rem);
  }
  &:nth-child(1) .info {
    left: 0;
  }
  &:nth-child(2) {
    & .info {
      left: -100%;
    }
    & figure {
      @apply border-r-4 border-l-4;
    }
  }
  &:nth-child(3) .info {
    left: -200%;
  }
}
</style>
