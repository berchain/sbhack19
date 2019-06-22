<template>
  <div class="min-h-screen body flex flex-col">
    <div class="p-5 text-white">
      <img src="../../assets/images/libra_logo.svg" alt="" class="w-2/5" />
    </div>
    <section class="bg-white border-black border-4 my-auto mx-5">
      <h2 class="text-xl text-center pt-5">
        libra by Facebook
      </h2>
      <div class="m-5 flex">
        <input
          v-model="donation"
          type="number"
          placeholder="5"
          class="p-3 w-full border-2 border-gray-400"
        />
        <div class="flex flex-row">
          <button
            class="w-12 text-3xl btn border-r-2 border-white text-white"
            @click="donation++"
          >
            &#x2B;
          </button>
          <button
            class="w-12 text-3xl btn border-lr-2 border-white text-white disabled:opacity-50"
            :disabled="donation < 1"
            :class="[donation < 1 ? 'cursor-not-allowed opacity-50' : '']"
            @click="minus"
          >
            &#8722;
          </button>
        </div>
      </div>
      <div class="m-5">
        <button
          class="p-3 w-full text-white flex justify-between"
          style="background-color: rgb(95, 53, 231)"
          @click="makeDonation"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            /></svg
          ><span class="m-auto">make donation</span>
        </button>
      </div>
    </section>
    <footer>
      <app-button-back cta="Go back" />
    </footer>
  </div>
</template>

<script>
import AppButtonBack from '../journey/AppButtonBack'
export default {
  components: { AppButtonBack },
  data() {
    return {
      donation: 0,
      receiver: '0x9282237d0587c3611ec6dE080d3458D86D980672'
    }
  },
  methods: {
    minus() {
      if (this.donation > 0) {
        this.donation--
      }
    },
    async makeDonation() {
      const data = await this.$store.dispatch('contract/donate', {
        to: this.receiver,
        amount: this.donation
      })
      this.donation = 0
      if (data) {
        this.$router.push(`/çonfirmation/${data}`)
      }
    }
  }
}
</script>

<style scoped>
.body,
.btn {
  background-color: rgb(95, 53, 231);
}
</style>
