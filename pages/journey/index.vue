<template>
  <app-view>
    <app-header title="The Journey" />
    <article class="min-h-screen px-3">
      <certification />
      <ProductTracker :data="transactions" />
      <AppButton cta="You ?" url="/you" />
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import ProductTracker from '../../components/ProductTracker'
import Certification from './Certification'
import AppButton from './AppButton'

export default {
  components: { AppButton, Certification, ProductTracker, AppHeader, AppView },
  data() {
    return {
      transactions: [
        {
          title: 'The Farmer',
          details: {
            price: '0.09$',
            place: {
              lat: 0.999993,
              lng: 10.44
            }
          }
        },
        {
          title: 'Packing Facility',
          details: {
            price: '0.09$',
            place: {
              lat: 0.999993,
              lng: 10.44
            }
          }
        },
        {
          title: 'Shipping',
          details: {
            price: '0.09$',
            place: {
              lat: 0.999993,
              lng: 10.44
            }
          }
        },
        {
          title: 'Distribution',
          details: {
            price: '0.09$',
            name: '',
            description: '',
            timeStamp: 123418924839718,
            geo: {
              lat: 0.999993,
              lng: 10.44
            }
          }
        },
        {
          title: 'Retailer',
          details: {
            price: '0.09$',
            place: {
              lat: 0.999993,
              lng: 10.44
            }
          }
        }
      ]
    }
  }
}
</script>
