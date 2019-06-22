<template>
  <app-view>
    <app-header title="The Journey" />
    <article class="min-h-screen px-3">
      <ProductTracker :data="transactions" />
      <footer class="flex mx-auto">
        <AppButton cta="See your role" url="/you" />
      </footer>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import ProductTracker from '../../components/ProductTracker'
import AppButton from './AppButton'

export default {
  components: { AppButton, ProductTracker, AppHeader, AppView },
  data() {
    return {
      transactions: []
    }
  },
  async asyncData({ store }) {
    const ipfsHash = await store.dispatch(
      'contract/getProductInfo',
      store.state.product_id
    )
    const data = JSON.parse(await store.dispatch('ipfs/getByHash', ipfsHash))
    return { transactions: data.transactions }
  }
}
</script>
