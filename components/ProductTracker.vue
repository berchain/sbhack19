<template>
  <ul class="journey">
    <li v-for="(tx, index) in data" :key="index">
      <accordion :title="tx.title" :last="index === data.length - 1">
        <ul>
          <li class="journey_detail">
            <ul>
              <li>
                <h4 class="my-3">{{ tx.details.name }}</h4>
                <p>{{ tx.details.description }}</p>
              </li>

              <li>
                <b class="mr-2">Time:</b
                >{{ tx.details.timestamp | moment('calendar') }}
              </li>
              <li>
                <b class="mr-2">Location:</b> Lat:{{
                  tx.details.geo.lat
                }}
                Lng:{{ tx.details.geo.lng }}
              </li>
              <li>
                <b class="mr-2">Price</b>{{ tx.details.price }}
                <b class="mr-2">per unit:</b>{{ tx.details.unit }}
              </li>
            </ul>
          </li>
        </ul>
      </accordion>
    </li>
    <li class="journey_detail last">
      <div
        class="ml-5 journey__point_you ml-2 border-l-4 border-transparent pb-10"
      >
        <h3 class="font-semibold ml-8 pt-1 text-2xl">You?</h3>
      </div>
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
<style scoped lang="scss">
.journey__point_you {
  &:before {
    content: ':)';
    @apply w-10 h-10 float-left -ml-5 font-semibold bg-green-500 rotate-90deg border-black border-4 rounded-full inline-flex justify-center align-middle leading-normal text-xl;
  }
}
</style>
