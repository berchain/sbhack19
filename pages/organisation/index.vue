<template>
  <app-view>
    <app-header title="What does a fairtrade banana mean?" />
    <article>
      <section class="mb-12 p-3">
        <h2 class="text-2xl font-semibold mb-5 mt-8">
          This product has been certified with the “Fairtrade” mark
        </h2>
        <p>
          We bring transparency to the supply chain and the certification
          process. Explore the certification process documented on blockchain.
        </p>
        <h2 class="text-2xl font-semibold mb-5 mt-8">
          What makes a banana Fairtrade?
        </h2>
        <p>
          Explore the three sets of criteria that the fairtrade producers must
          meet:
        </p>
      </section>
      <section class="flex">
        <factBox
          v-for="(fact, i) in facts"
          :key="i"
          :src="fact.src"
          :title="fact.title"
          :text="fact.text"
        />
      </section>
      <div class="flex">
        <div class="flex flex-col w-3/4 mx-auto mt-24 mb-10">
          <div
            class=" rounded-full border-4 border-black p-5 bg-white product mx-auto overflow-hidden"
          >
            <img src="../../assets/images/banana.jpeg" alt="" />
          </div>
          <div class="block border-l-4 border-black h-24 w-1 mx-auto"></div>
          <AppButton cta="See Journey" url="/journey" />
        </div>
      </div>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import AppButton from '../journey/AppButton'
import FactBox from '../you/FactBox'
export default {
  name: 'Index',
  components: { FactBox, AppButton, AppHeader, AppView },
  data() {
    return {
      facts: [
        {
          title: 'Creating job security',
          src: require('~/assets/images/economy.png'),
          text: `98% of workers on Fairtrade plantations in Colombia reported feeling a
      sense of job security, compared to 9% on non-Fairtrade plantations.`
        },
        {
          title: 'Changing commun-ities.',
          src: require('~/assets/images/environment.png'),
          text: `96% of banana smallholders in Colombia said that their economic situation had improved since joining Fairtrade, while for 91% of the workers the household assets have increased by an average of 64%.`
        },
        {
          title: 'Investing in bio-diversity.',
          src: require('~/assets/images/social.png'),
          text: `31 days of training every year is what smallholders in Colombia receive from Fairtrade. This helps them to develop their businesses and improve agriculture techniques to make the products more sustainable.`
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
dl {
  @apply border-black border-4 bg-yellow-500 p-5 mb-8;
}
dt {
  @apply text-2xl font-semibold flex flex-col mb-5 self-center my-8 text-center p-5;
}
dd {
  &:before {
    content: '\2713';
    display: inline-block;
    @apply -ml-8 border float-left border-black w-6 h-6 text-center leading-none text-2xl font-semibold text-green-700;
  }
  @apply pl-8 mb-2;
}
dt img {
  @apply m-auto w-1/2;
}
</style>
