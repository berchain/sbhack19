<template>
  <app-view>
    <AppHeader title="Banana Review" />
    <hero />
  </app-view>
</template>

<script>
import Hero from '../components/Hero'
import AppHeader from '../components/AppHeader'
import AppView from '../components/AppView'

export default {
  components: { AppView, AppHeader, Hero },
  async mounted() {
    /* const data = {
      transactions: [
        {
          title: 'Food Producer',
          details: {
            product_id: 923876346723,
            price: '0.0$',
            unit: 'kilo',
            volume: '',
            name: 'Dorothy Agard',
            description:
              'Banana small-holder farmer for over 10 years \nEmploys 5 full-time workers \nProduces 75 boxes (20 kg each) of bananas a week \nMember of the local Fairtrade group WINFA',
            timestamp: 1560988800,
            geo: {
              lat: 13.9957,
              lng: -61.00614
            }
          }
        },
        {
          title: 'Packaging Facility',
          details: {
            product_id: 923876346723,
            price: '0.0$',
            unit: 'kilo',
            volume: '',
            name: 'WINFA Packaging',
            description: {
              date_of_inspection: '02.04.2019',
              date_of_packaging: '03.04.2019'
            },
            timestamp: 1561050000,
            geo: {
              lat: 13.9957,
              lng: -61.00614
            }
          }
        },
        {
          title: 'Shipping',
          details: {
            product_id: 923876346723,
            price: '0.0$',
            unit: 'kilo',
            volume: '',
            name: 'Maersk',
            description: {
              port_of_origin: 'St. Lucia Seaport, St. Lucia',
              port_of_destination: 'Rotterdam, The Netherlands',
              date_of_shipping: '04.04.2019',
              date_of_arrival: '14.04.2019',
              ripening_facility: 'CCL Rotterdam'
            },
            timestamp: 1561075200,
            geo: {
              lat: 13.909444,
              lng: -60.978893
            }
          }
        },
        {
          title: 'Distribution',
          details: {
            product_id: 923876346723,
            price: '0.0$',
            unit: 'kilo',
            volume: '',
            name: 'CCL Tropical Fruits & Vegetables',
            description: '',
            timestamp: 1561129200,
            geo: {
              lat: 0,
              lng: 0
            }
          }
        },
        {
          title: 'Retailer',
          details: {
            product_id: 923876346723,
            price: '0.0$',
            unit: 'kilo',
            volume: '',
            name: 'LIDL',
            description: '',
            timestamp: 1561161600,
            geo: {
              lat: 0,
              lng: 0
            }
          }
        }
      ]
    } */
    // await this.$store.dispatch('ipfs/storeData', data)
    await this.$store.dispatch('init')
    // await this.$store.dispatch('contract/buy', 5000000)
    /* await this.$store.dispatch('contract/addProduct', {
      id: this.$store.state.product_id,
      ipfs: 'QmP3REAnN3HLr4jKwgDwzSAiiCUE9LPXuHDR6ofA8Dpi2k',
      certifier: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41'
    }) */
  }
}
</script>

<style scoped>
.hero img {
  mix-blend-mode: multiply;
  width: 100%;
  height: auto;
}
</style>
