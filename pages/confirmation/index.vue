<template>
  <app-view>
    <figure>
      <h1>Thank you!</h1>
    </figure>
    <article>
      <h2>Track your donations</h2>
      <section>
        <ul>
          <li>
            <div>
              <figure class="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src="../../assets/images/banana.jpeg"
                  alt=""
                  class="w-4/5"
                />
              </figure>
              <article class="ml-5">
                <h3 class="font-semibold">Fair-trade</h3>
                <p>
                  See transaction on Blockchain
                  <a href="#querystring">{{ hash }}</a>
                </p>
              </article>
            </div>
          </li>
        </ul>
      </section>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
export default {
  components: { AppView },
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
