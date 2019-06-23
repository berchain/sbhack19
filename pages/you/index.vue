<template>
  <app-view>
    <app-header title="We help you supporting farmer" />
    <article class=" text-xl pb-24">
      <figure>
        <img src="../../assets/images/support.png" alt="" />
      </figure>
      <p class="px-3">
        Making the supply chain transparent brings trust to certified food
        products. Now you can also support this cause and make a donation, which
        goes directly to the community.
      </p>
      <section class="flex">
        <factBox
          v-for="(fact, i) in facts"
          :key="i"
          :stats="fact.stat"
          :title="fact.title"
          :text="fact.text"
        />
      </section>
    </article>
    <footer class="bg-green-500 w-full px-5 mb-5">
      <app-button cta="support" url="/login" />
      <app-button-back cta="go back" />
    </footer>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import AppButton from '../journey/AppButton'
import AppButtonBack from '../journey/AppButtonBack'
import FactBox from './FactBox'

export default {
  components: { FactBox, AppButtonBack, AppButton, AppHeader, AppView },
  data() {
    return {
      facts: [
        {
          title: 'Creating job security',
          stat: '98%',
          text: `98% of workers on Fairtrade plantations in Colombia reported feeling a
      sense of job security, compared to 9% on non-Fairtrade plantations.`
        },
        {
          title: 'Changing commun-ities.',
          stat: '96%',
          text: `96% of banana smallholders in Colombia said that their economic situation had improved since joining Fairtrade, while for 91% of the workers the household assets have increased by an average of 64%.`
        },
        {
          title: 'Investing in bio-diversity.',
          stat: '31',
          text: `31 days of training every year is what smallholders in Colombia receive from Fairtrade. This helps them to develop their businesses and improve agriculture techniques to make the products more sustainable.`
        }
      ]
    }
  }
}
</script>
