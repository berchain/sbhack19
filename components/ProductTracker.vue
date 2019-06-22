<template>
  <ul class="journey">
    <li v-for="(tx, index) in data" :key="index">
      <accordion :title="tx.title" :last="index === data.length - 1">
        <ul>
          <li v-for="(item, i) in tx.details" :key="i" class="journey_detail">
            <div>{{ item }}</div>
          </li>
        </ul>
      </accordion>
    </li>
  </ul>
</template>
<script>
import Accordion from './Accordion'
export default {
  name: 'ProductTracker',
  components: { Accordion },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang="scss"></style>
