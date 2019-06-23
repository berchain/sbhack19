<template>
  <app-view>
    <figure class="hero flex">
      <h1 class="text-6xl font-semibold text-white m-auto">Thank you!</h1>
    </figure>
    <article>
      <h2 class="text-4xl font-semibold">Track your donations</h2>
      <section class="border-t-4 my-5 ">
        <ul>
          <li class="bg-yellow-500 py-10 px-3">
            <div class="flex">
              <figure class="w-24">
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
        <app-button-back title="Go to start" url="/" />
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

<style scoped>
.hero {
  background-image: url('~assets/images/thankyou.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
}
</style>
