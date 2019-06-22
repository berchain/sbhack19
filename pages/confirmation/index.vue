<template>
  <app-view>
    <figure>
      <h1 class="text-white text-6xl font-semibold">Thank you!</h1>
    </figure>
    <article>
      <h2 class="text-2xl font-semibold">Track your donations</h2>
      <section class="border-white border-t-4 mt-5">
        <ul>
          <li class="bg-yellow-500 py-10">
            <div class="flex">
              <figure class="w-24 rounded-full overflow-hidden block">
                <img src="../../assets/images/banana.jpeg" alt="" />
              </figure>
              <article class="ml-5">
                <h3 class="font-semibold">Fair-trade</h3>
                <p>
                  See transaction in Blockchain
                  <a href="#querystring">Explorer {{ hash }}</a>
                </p>
              </article>
            </div>
          </li>
        </ul>
      </section>
      <footer>
        <app-button-back cta="Go to start" url="/" />
      </footer>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppButtonBack from '../journey/AppButtonBack'
export default {
  components: { AppButtonBack, AppView },
  data() {
    return {
      hash: ''
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    this.hash = urlParams.get('hash')
  }
}
</script>

<style scoped></style>
